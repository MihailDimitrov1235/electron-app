/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import ActivityReply from '@Components/Card/Activities/ActivityReply';
import ListActivity from '@Components/Card/Activities/ListActivity';
import MessageActivity from '@Components/Card/Activities/MessageActivity';
import TextActivity from '@Components/Card/Activities/TextActivity';
import { useAuth } from '@Components/Contexts/AuthContext';
import {
  GetActivityQuery,
  LikeableType,
  useGetActivityQuery,
  useLikeMutation,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Activity() {
  const { id } = useParams();
  const { userId, userAvatar, userName } = useAuth();
  const [currentPage, setCurrentPage] = useState();
  const { data, loading, error } = useGetActivityQuery({
    variables: { id: Number(id), page: currentPage, perPage: 25 },
  });
  const [activity, setActivity] = useState<GetActivityQuery['activity'] | null>(
    null,
  );
  const [replies, setReplies] = useState<
    NonNullable<GetActivityQuery['replies']>['activityReplies']
  >([]);
  useEffect(() => {
    setReplies([]);
  }, []);
  useEffect(() => {
    if (data) {
      setActivity(data.activity);
      setReplies((prevReplies) => {
        const newReplies = data.replies?.activityReplies || [];
        const uniqueNewReplies = newReplies.filter(
          (newReply) =>
            !prevReplies?.some((reply) => reply?.id === newReply?.id),
        );
        return [...(prevReplies || []), ...uniqueNewReplies];
      });
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      enqueueSnackbar({ variant: 'error', message: error?.message });
    }
  }, [error]);

  const [toggleLike] = useLikeMutation();
  const handleToggleLike = async (LikableId: number, type: LikeableType) => {
    try {
      const { data: ToggleLikeData } = await toggleLike({
        variables: { id: LikableId, type },
      });

      if (
        ToggleLikeData?.ToggleLikeV2?.__typename === 'ActivityReply' &&
        userId &&
        userName
      ) {
        setReplies(
          (prevReplies) =>
            prevReplies?.map((reply) =>
              reply?.id === LikableId
                ? {
                    ...reply,
                    isLiked: ToggleLikeData?.ToggleLikeV2?.isLiked || false,
                    likes: ToggleLikeData?.ToggleLikeV2?.isLiked
                      ? [
                          {
                            id: userId,
                            name: userName,
                            avatar: { medium: userAvatar },
                          },
                          ...(reply?.likes || []),
                        ]
                      : reply.likes?.filter(
                          (user) => user?.id && user.id !== userId,
                        ),
                  }
                : reply,
            ),
        );
      } else if (
        ToggleLikeData?.ToggleLikeV2?.__typename === 'TextActivity' ||
        ToggleLikeData?.ToggleLikeV2?.__typename === 'MessageActivity' ||
        ToggleLikeData?.ToggleLikeV2?.__typename === 'ListActivity'
      ) {
        setActivity((prev) => {
          if (!prev) return prev;

          return {
            ...prev,
            isLiked: ToggleLikeData?.ToggleLikeV2?.isLiked ?? prev.isLiked, // Update isLiked
            likeCount:
              ToggleLikeData?.ToggleLikeV2?.likeCount ?? prev.likeCount, // Update likeCount
          };
        });
      }
      enqueueSnackbar({ variant: 'success', message: 'Updated activity' });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'Error updating activity' });
    }
  };
  return (
    <div className="flex w-full flex-col justify-center p-16 gap-8">
      {activity?.__typename === 'ListActivity' ? (
        <ListActivity
          activity={activity}
          handleToggleLike={(activityId) =>
            handleToggleLike(activityId, LikeableType.Activity)
          }
        />
      ) : activity?.__typename === 'MessageActivity' ? (
        <MessageActivity
          activity={activity}
          handleToggleLike={(activityId) =>
            handleToggleLike(activityId, LikeableType.Activity)
          }
        />
      ) : activity?.__typename === 'TextActivity' ? (
        <TextActivity
          activity={activity}
          handleToggleLike={(activityId) =>
            handleToggleLike(activityId, LikeableType.Activity)
          }
        />
      ) : null}
      {replies?.map((reply) =>
        reply ? (
          <div className="w-full px-4" key={reply.id}>
            <ActivityReply
              key={reply.id}
              reply={reply}
              handleToggleLike={(activityId) =>
                handleToggleLike(activityId, LikeableType.ActivityReply)
              }
            />
          </div>
        ) : null,
      )}
    </div>
  );
}

/* eslint-disable promise/always-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import ActivityReply from '@Components/Card/Activities/ActivityReply';
import ActivityReplyPreview from '@Components/Card/Activities/ActivityReplyPreview';
import ListActivity from '@Components/Card/Activities/ListActivity';
import MessageActivity from '@Components/Card/Activities/MessageActivity';
import TextActivity from '@Components/Card/Activities/TextActivity';
import { useAuth } from '@Components/Contexts/AuthContext';
import Button from '@Components/Form/Button';
import RichTextEditor from '@Components/RichTextEditor';
import ActivityReplySkeleton from '@Components/Skeletons/ActivityReplySkeleton';
import {
  GetActivityQuery,
  LikeableType,
  useDeleteActivityMutation,
  useDeleteActivityReplyMutation,
  useGetActivityQuery,
  useLikeMutation,
  useSaveActivityReplyMutation,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { useParams, useNavigate } from 'react-router-dom';

export default function Activity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saveActivityReply] = useSaveActivityReplyMutation();
  const [deleteActivity] = useDeleteActivityMutation();
  const [deleteReply] = useDeleteActivityReplyMutation();
  const { userId, userAvatar, userName, isLoggedIn } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [newReplyText, setNewReplyText] = useState('');
  const { data, loading, refetch } = useGetActivityQuery({
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

  const handleAddActivity = async () => {
    saveActivityReply({
      variables: { activityId: Number(id), text: newReplyText },
    })
      .then(({ data: fetchedData }) => {
        if (replies?.length === 25 || currentPage !== 1) {
          setReplies([]);
          setCurrentPage(1);
          refetch();
        } else {
          setReplies((prev) => {
            if (prev && fetchedData?.SaveActivityReply) {
              return [...prev, fetchedData.SaveActivityReply];
            }
            if (prev) {
              return [...prev];
            }
            if (fetchedData?.SaveActivityReply) {
              return [fetchedData.SaveActivityReply];
            }
            return [];
          });
        }
        setCurrentPage(1);
        enqueueSnackbar({ variant: 'success', message: 'Reply added' });
        setNewReplyText('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteActivity = (activityId: number) => {
    deleteActivity({
      variables: { activityId },
    })
      .then(({ data: fetchedData }) => {
        if (fetchedData?.DeleteActivity?.deleted) {
          navigate(`/user/${userId}`);
          enqueueSnackbar({ variant: 'success', message: 'Activity Deleted' });
        } else {
          enqueueSnackbar({
            variant: 'error',
            message: "Couldn't delete activity",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar({
          variant: 'error',
          message: "Couldn't delete activity",
        });
      });
  };
  const handleDeleteReply = (replyId: number) => {
    deleteReply({
      variables: { replyId },
    })
      .then(({ data: fetchedData }) => {
        if (fetchedData?.DeleteActivityReply?.deleted) {
          if (replies?.length === 25 || currentPage !== 1) {
            setReplies([]);
            setCurrentPage(1);
            refetch();
          } else {
            setReplies((prev) => {
              if (prev) {
                return prev.filter((reply) => reply?.id !== replyId);
              }
              return [];
            });
          }
        } else {
          enqueueSnackbar({
            variant: 'error',
            message: "Couldn't delete activity",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar({
          variant: 'error',
          message: "Couldn't delete activity",
        });
      });
  };

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
            isLiked: ToggleLikeData?.ToggleLikeV2?.isLiked ?? prev.isLiked,
            likeCount:
              ToggleLikeData?.ToggleLikeV2?.likeCount ?? prev.likeCount,
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
          handleDelete={handleDeleteActivity}
          activity={activity}
          handleToggleLike={(activityId) =>
            handleToggleLike(activityId, LikeableType.Activity)
          }
        />
      ) : activity?.__typename === 'MessageActivity' ? (
        <MessageActivity
          handleDelete={handleDeleteActivity}
          activity={activity}
          handleToggleLike={(activityId) =>
            handleToggleLike(activityId, LikeableType.Activity)
          }
        />
      ) : activity?.__typename === 'TextActivity' ? (
        <TextActivity
          handleDelete={handleDeleteActivity}
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
              handleDelete={handleDeleteReply}
              key={reply.id}
              isUser={isLoggedIn && reply.user?.id === userId}
              reply={reply}
              handleToggleLike={(activityId) =>
                handleToggleLike(activityId, LikeableType.ActivityReply)
              }
            />
          </div>
        ) : null,
      )}
      {data?.replies?.pageInfo?.hasNextPage && !loading ? (
        <div className="w-full px-4">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className=" w-full border border-background-main rounded-md hover:bg-primary/50 text-center flex items-center justify-center py-4 "
          >
            <CgDetailsMore size={30} />
            <span className="text-xl">Load More</span>
          </button>
        </div>
      ) : null}
      {loading
        ? Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="w-full px-4">
              <ActivityReplySkeleton />
            </div>
          ))
        : null}
      {isLoggedIn ? (
        <div className="px-4">
          <RichTextEditor
            title="Add a new reply"
            value={newReplyText}
            setValue={setNewReplyText}
          />
          {newReplyText ? (
            <div className="flex flex-col items-end gap-2">
              <ActivityReplyPreview text={newReplyText} />
              <Button onClick={handleAddActivity} variant="gradient">
                Add reply
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

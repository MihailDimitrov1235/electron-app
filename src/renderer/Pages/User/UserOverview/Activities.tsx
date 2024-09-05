/* eslint-disable promise/always-return */
/* eslint-disable no-underscore-dangle */
import ActivityReplyPreview from '@Components/Card/Activities/ActivityReplyPreview';
import ListActivity from '@Components/Card/Activities/ListActivity';
import MessageActivity from '@Components/Card/Activities/MessageActivity';
import TextActivity from '@Components/Card/Activities/TextActivity';
import { useAuth } from '@Components/Contexts/AuthContext';
import Button from '@Components/Form/Button';
import Switch from '@Components/Form/Switch';
import RichTextEditor from '@Components/RichTextEditor';
import ListActivityCardSkeleton from '@Components/Skeletons/ListActivitySkeleton';
import Tooltip from '@Components/Tooltip';
import {
  GetUserQuery,
  LikeableType,
  useDeleteActivityMutation,
  useGetUserActivitiesQuery,
  useLikeMutation,
  useSaveMessageActivityMutation,
  useSaveTextActivityMutation,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';

export default function Activities({
  PageUserId,
  activitiesData,
  activitiesPerPage,
}: {
  PageUserId: number;
  activitiesData: GetUserQuery['Activities'];
  activitiesPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteActivity] = useDeleteActivityMutation();
  const [newActivityValue, setNewActivityValue] = useState('');
  const [previewCheck, setPreviewCheck] = useState(false);
  const { userId } = useAuth();

  const [saveTextActivity] = useSaveTextActivityMutation();
  const [saveMessageActivity] = useSaveMessageActivityMutation();

  const {
    data: fetchedActivities,
    loading,
    error,
  } = useGetUserActivitiesQuery({
    variables: {
      userId: PageUserId,
      page: currentPage,
      activitiesPerPage,
    },
    skip: currentPage === 1,
  });
  const hasNextPage =
    currentPage === 1
      ? activitiesData?.pageInfo?.hasNextPage
      : fetchedActivities?.Page?.pageInfo?.hasNextPage;
  const displayData =
    currentPage === 1
      ? activitiesData?.activities
      : fetchedActivities?.Page?.activities;

  const [activities, setActivities] = useState(displayData);

  useEffect(() => {
    if (fetchedActivities) {
      setActivities((prev) => [
        ...(prev || []),
        ...(fetchedActivities.Page?.activities || []),
      ]);
    }
  }, [fetchedActivities]);

  const [toggleLike] = useLikeMutation();

  const handleDeleteActivity = (activityId: number) => {
    deleteActivity({
      variables: { activityId },
    })
      .then(({ data: fetchedData }) => {
        if (fetchedData?.DeleteActivity?.deleted) {
          setActivities((prev) => {
            if (prev) {
              return prev.filter((activity) => activity?.id !== activityId);
            }
            return [];
          });
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

  const handleEditActivity = (text: string, activityId: number) => {
    setActivities(
      activities?.map((activity) => {
        if (activity?.id === activityId) {
          if (activity.__typename === 'TextActivity') {
            return { ...activity, text };
          }
          if (activity.__typename === 'MessageActivity') {
            return { ...activity, message: text };
          }
        }
        return activity;
      }),
    );
  };

  const handleToggleLike = async (id: number) => {
    try {
      const { data: ToggleLikeActivityData } = await toggleLike({
        variables: { id, type: LikeableType.Activity },
      });
      setActivities(
        (prevActivities) =>
          prevActivities?.map((activity) =>
            activity?.id === id
              ? {
                  ...activity,
                  isLiked:
                    ToggleLikeActivityData?.ToggleLikeV2?.isLiked || false,
                  likeCount:
                    ToggleLikeActivityData?.ToggleLikeV2?.likeCount || 0,
                }
              : activity,
          ),
      );
      enqueueSnackbar({ variant: 'success', message: 'Updated activity' });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'Error updating activity' });
    }
  };

  const handleAddActivity = (text: string, priv: boolean) => {
    if (PageUserId === userId) {
      saveTextActivity({ variables: { text } })
        .then(({ data }) => {
          if (data?.SaveTextActivity) {
            setActivities([
              data.SaveTextActivity,
              ...(activities?.slice(0, -1) || []),
            ]);
            setNewActivityValue('');
          }
        })
        .catch((e) => console.log(e));
    } else {
      saveMessageActivity({
        variables: { recipientId: PageUserId, text, private: priv },
      })
        .then(({ data }) => {
          if (data?.SaveMessageActivity) {
            setActivities([
              data.SaveMessageActivity,
              ...(activities?.slice(0, -1) || []),
            ]);
            setNewActivityValue('');
          }
        })
        .catch((e) => console.log(e));
    }
  };

  if (error && !activities) {
    return <div>error</div>;
  }

  return (
    <div className="space-y-2 flex-1">
      <span className="text-xl">Activities</span>
      <div className="flex flex-col gap-4">
        <div>
          <Switch
            checked={previewCheck}
            onCheck={() => setPreviewCheck((prev) => !prev)}
            label="Preview"
          />
        </div>
        {previewCheck ? (
          <ActivityReplyPreview text={newActivityValue} />
        ) : (
          <RichTextEditor
            title="Add an activity"
            value={newActivityValue}
            setValue={setNewActivityValue}
            expandable
            rows={4}
          />
        )}

        <div
          className={`flex gap-4 justify-end ${
            newActivityValue ? 'visible' : 'hidden'
          }`}
        >
          <Button
            onClick={() => {
              setNewActivityValue('');
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleAddActivity(newActivityValue, false)}
            variant="gradient"
          >
            Add
          </Button>
          {userId !== PageUserId && (
            <Tooltip
              toolTipClassName="w-48"
              text="Only you, the recipient and mods can see this message"
            >
              <Button
                onClick={() => handleAddActivity(newActivityValue, true)}
                variant="gradient"
              >
                Add private
              </Button>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        {activities?.map((activity) => {
          if (activity?.__typename === 'ListActivity') {
            return (
              <ListActivity
                handleDelete={handleDeleteActivity}
                key={activity.id}
                activity={activity}
                handleToggleLike={handleToggleLike}
              />
            );
          }
          if (activity?.__typename === 'MessageActivity') {
            return (
              <MessageActivity
                handleEdit={handleEditActivity}
                handleDelete={handleDeleteActivity}
                key={activity.id}
                activity={activity}
                handleToggleLike={handleToggleLike}
              />
            );
          }
          if (activity?.__typename === 'TextActivity') {
            return (
              <TextActivity
                handleEdit={handleEditActivity}
                handleDelete={handleDeleteActivity}
                key={activity.id}
                activity={activity}
                handleToggleLike={handleToggleLike}
              />
            );
          }
          return null;
        })}
        {!loading
          ? hasNextPage && (
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="flex gap-4 justify-center items-center w-full h-24 rounded-md overflow-hidden border shadow-md border-background-main relative hover:bg-primary/50 transition-colors"
              >
                <span>Load More</span>
                <CgDetailsMore size={40} />
              </button>
            )
          : Array.from({ length: 4 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ListActivityCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
}

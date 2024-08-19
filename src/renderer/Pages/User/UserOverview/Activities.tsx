/* eslint-disable no-underscore-dangle */
import ListActivity from '@Components/Card/Activities/ListActivity';
import MessageActivity from '@Components/Card/Activities/MessageActivity';
import ListActivityCardSkeleton from '@Components/Skeletons/ListActivitySkeleton';
import {
  GetUserQuery,
  useGetUserActivitiesQuery,
  useLikeActivityMutation,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';

export default function Activities({
  userId,
  activitiesData,
  activitiesPerPage,
}: {
  userId: number;
  activitiesData: GetUserQuery['Activities'];
  activitiesPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchedActivities,
    loading,
    error,
  } = useGetUserActivitiesQuery({
    variables: {
      userId,
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
        ...(prev as []),
        ...(fetchedActivities.Page?.activities as []),
      ]);
    }
  }, [fetchedActivities]);

  const [toggleLikeActivity] = useLikeActivityMutation();

  const handleToggleLike = async (id: number) => {
    try {
      const { data: ToggleLikeActivityData } = await toggleLikeActivity({
        variables: { id },
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

  if (error && !activities) {
    return <div>error</div>;
  }

  return (
    <div className="space-y-2 flex-1">
      <span className="text-xl">Activities</span>
      <div className="grid grid-cols-4 gap-4 ">
        {activities?.map((activity) => {
          if (activity?.__typename === 'ListActivity') {
            return (
              <ListActivity
                activity={activity}
                handleToggleLike={handleToggleLike}
              />
            );
          }
          if (activity?.__typename === 'MessageActivity') {
            return (
              <MessageActivity
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

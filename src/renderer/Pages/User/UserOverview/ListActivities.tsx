/* eslint-disable no-underscore-dangle */
import ImageSkeleton from '@Components/Skeletons/ImageSkeleton';
import TextSkeleton from '@Components/Skeletons/TextSkeleton';
import {
  GetUserQuery,
  useGetUserListActivitiesQuery,
  useLikeListActivityMutation,
} from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ListActivityCardSkeleton() {
  return (
    <div className="flex items-center w-full gap-8 rounded-md overflow-hidden border shadow-md border-background-main pr-4 relative">
      <ImageSkeleton height="24" width="68px" className=" h-24 flex-shrink-0" />
      <div className="grid grid-flow-col grid-cols-12 w-full overflow-hidden">
        <TextSkeleton
          lines={1}
          className="w-24 h-4 "
          containerClassName="col-span-3"
        />
        <TextSkeleton
          lines={1}
          className="w-8 h-4"
          containerClassName="col-span-1"
        />
        <TextSkeleton
          lines={1}
          className="w-full h-4"
          containerClassName="col-span-8"
        />
      </div>
      <div className="flex flex-col justify-end h-24 py-2 items-end text-end">
        <span className="text-text-light text-sm absolute top-2">
          <TextSkeleton lines={1} className="w-12 h-2" />
        </span>
        <div className="text-text-light flex gap-2">
          <TextSkeleton lines={1} className="w-4 h-4" />
          <TextSkeleton lines={1} className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default function ListActivities({
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
    data: fetchedListActivities,
    loading,
    error,
  } = useGetUserListActivitiesQuery({
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
      : fetchedListActivities?.Page?.pageInfo?.hasNextPage;
  const displayData =
    currentPage === 1
      ? activitiesData?.activities
      : fetchedListActivities?.Page?.activities;

  const [listActivities, setListActivities] = useState(
    displayData?.filter(
      (
        activity,
      ): activity is NonNullable<
        NonNullable<GetUserQuery['Activities']>['activities']
      >[0] & {
        __typename: 'ListActivity';
      } => activity?.__typename === 'ListActivity',
    ),
  );

  useEffect(() => {
    if (fetchedListActivities) {
      const newListActivities = fetchedListActivities.Page?.activities?.filter(
        (
          activity,
        ): activity is NonNullable<
          NonNullable<GetUserQuery['Activities']>['activities']
        >[0] & {
          __typename: 'ListActivity';
        } => activity?.__typename === 'ListActivity',
      );
      setListActivities((prev) => [
        ...(prev as []),
        ...(newListActivities as []),
      ]);
    }
  }, [fetchedListActivities]);

  const [toggleLikeListActivity] = useLikeListActivityMutation();

  const handleToggleLike = async (id: number) => {
    try {
      const { data: ToggleLikeListActivityData } = await toggleLikeListActivity(
        { variables: { id } },
      );
      setListActivities(
        (prevActivities) =>
          prevActivities?.map((activity) =>
            ToggleLikeListActivityData?.ToggleLikeV2?.__typename ===
              'ListActivity' && activity.id === id
              ? {
                  ...activity,
                  isLiked: ToggleLikeListActivityData?.ToggleLikeV2?.isLiked,
                  likeCount:
                    ToggleLikeListActivityData?.ToggleLikeV2?.likeCount,
                }
              : activity,
          ),
      );
      enqueueSnackbar({ variant: 'success', message: 'Updated activity' });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'Error updating activity' });
    }
  };

  const statusColors = {
    'watched episode': 'text-green-500',
    'read chapter': 'text-green-500',
    'plans to watch': 'text-text-light',
    completed: 'text-blue-500',
  };

  if (error && !listActivities) {
    return <div>error</div>;
  }

  return (
    <div className="space-y-2 flex-1">
      <span className="text-xl">Activities</span>
      <div className="grid grid-cols-2 gap-4 ">
        {listActivities?.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center w-full gap-8 rounded-md overflow-hidden border shadow-md border-background-main pr-4 relative"
          >
            <Link
              className="flex-shrink-0"
              to={`/${activity.media?.type}/${activity.media?.id}`}
            >
              <img
                className="h-24 w-[68px]"
                src={activity.media?.coverImage?.medium || ''}
                alt="Media cover"
              />
            </Link>
            <div className="grid grid-flow-col grid-cols-12 w-full overflow-hidden">
              <span
                className={` col-span-3  capitalize ${
                  Object.prototype.hasOwnProperty.call(
                    statusColors,
                    activity.status || '',
                  )
                    ? statusColors[
                        (activity.status as keyof typeof statusColors) || ''
                      ]
                    : 'text-text-light'
                }`}
              >
                {activity.status}
              </span>
              <span className="">
                {activity.progress && `${activity.progress}`}
              </span>
              <div className=" w-full col-span-8">
                <Link
                  to={`/${activity.media?.type}/${activity.media?.id}`}
                  className="hover:text-primary line-clamp-1 w-fit ml-auto text-ellipsis overflow-hidden"
                >
                  {activity.media?.title?.userPreferred}
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-end h-24 py-2 items-end text-end">
              <span className="text-text-light text-sm absolute top-2">
                {getTimePassed(activity.createdAt)}
              </span>
              <div className="text-text-light flex gap-2">
                <button type="button" className={`flex items-center gap-1  `}>
                  <span className="text-xs">
                    {activity.replyCount !== 0 && activity.replyCount}
                  </span>
                  <span className="hover:text-blue-500">
                    <FaComment />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleLike(activity.id)}
                  className={`flex items-center gap-1 `}
                >
                  <span className="text-xs">
                    {activity.likeCount !== 0 && activity.likeCount}
                  </span>
                  <span
                    className={`${
                      activity.isLiked
                        ? 'text-secondary hover:text-text-light'
                        : 'text-text-light hover:text-secondary'
                    }`}
                  >
                    <FaHeart />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
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
          : Array.from({ length: 4 }).map(() => <ListActivityCardSkeleton />)}
      </div>
    </div>
  );
}

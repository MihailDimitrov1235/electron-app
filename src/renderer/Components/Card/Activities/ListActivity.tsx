/* eslint-disable promise/always-return */
import { useAuth } from '@Components/Contexts/AuthContext';
import { useDialog } from '@Components/Contexts/DialogContext';
import ConfirmDialog from '@Components/Dialog/ConfimDialog';
import {
  ListActivityFragment,
  useActivitySubscribeMutation,
} from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { FaBell, FaComment, FaHeart, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function ListActivity({
  activity,
  handleToggleLike,
  handleDelete,
}: {
  activity: ListActivityFragment;
  handleToggleLike: (id: number) => void;
  handleDelete: (id: number) => void;
}) {
  const { isLoggedIn, userId } = useAuth();
  const { showDialog } = useDialog();
  const navigate = useNavigate();
  const [activitySubscribe] = useActivitySubscribeMutation();
  const [subscribed, setSubscribed] = useState(activity.isSubscribed);
  const statusColors = {
    'watched episode': 'text-green-500',
    'read chapter': 'text-green-500',
    'plans to watch': 'text-text-light',
    completed: 'text-blue-500',
  };
  return (
    <div className="flex items-center w-full gap-2 rounded-md overflow-hidden border shadow-md border-background-main pr-4 relative">
      <Link
        className="flex-shrink-0"
        to={`/${activity?.media?.type}/${activity.media?.id}`}
      >
        <img
          className="h-24 w-[68px]"
          src={activity.media?.coverImage?.medium || ''}
          alt="Media cover"
        />
      </Link>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex gap-2">
          <span
            className={` capitalize ${
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
            {activity.progress && `${activity.progress} of`}
          </span>
        </div>

        <div className=" w-full">
          <Link
            to={`/${activity.media?.type}/${activity.media?.id}`}
            className="hover:text-primary line-clamp-3 w-fit text-ellipsis overflow-hidden"
          >
            {activity.media?.title?.userPreferred}
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-auto py-2 ml-4 items-end text-end">
        <div className="absolute top-2 flex gap-1">
          {isLoggedIn ? (
            <button
              type="button"
              className={` ${
                subscribed
                  ? 'hover:text-text-light text-green-500'
                  : 'hover:text-green-500 text-text-light'
              }`}
              onClick={() => {
                activitySubscribe({
                  variables: {
                    activityId: activity.id,
                    subscribe: !subscribed,
                  },
                })
                  .then(() => {
                    const current = subscribed;
                    setSubscribed((prev) => !prev);
                    enqueueSnackbar({
                      variant: 'success',
                      message: current ? 'Unsubscribed' : 'Subscribed',
                    });
                  })
                  .catch((e) => console.log(e));
              }}
            >
              <FaBell size={12} />
            </button>
          ) : null}

          {isLoggedIn && activity.user?.id === userId ? (
            <button
              type="button"
              className="hover:text-red-500"
              onClick={() =>
                showDialog(
                  <ConfirmDialog
                    title="Delete List Activity"
                    message="Are you sure you want to delete this list activity?"
                  />,
                )
                  .then((result) => {
                    if (result) {
                      handleDelete(activity.id);
                    }
                  })
                  .catch((e) => {
                    console.log(e);
                  })
              }
            >
              <FaTrash size={12} />
            </button>
          ) : null}

          <span className="text-text-light text-xs">
            {getTimePassed(activity.createdAt)}
          </span>
        </div>
        <div className="text-text-light flex gap-2">
          <button
            onClick={() => navigate(`/activity/${activity.id}`)}
            type="button"
            className={`flex items-center gap-1  `}
          >
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
  );
}

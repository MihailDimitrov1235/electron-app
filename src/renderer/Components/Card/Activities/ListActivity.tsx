import { ListActivityFragment } from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import React from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function ListActivity({
  activity,
  handleToggleLike,
}: {
  activity: ListActivityFragment;
  handleToggleLike: (id: number) => void;
}) {
  const navigate = useNavigate();
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
      <div className="flex flex-col justify-end h-24 py-2 ml-4 items-end text-end">
        <span className="text-text-light text-xs absolute top-2">
          {getTimePassed(activity.createdAt)}
        </span>
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

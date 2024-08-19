/* eslint-disable react/no-danger */
import { MessageActivityFragment } from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import transformAniListText from '@Utils/transformAnilistHtml';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function MessageActivity({
  activity,
  handleToggleLike,
}: {
  activity: MessageActivityFragment;
  handleToggleLike: (id: number) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center w-full col-span-2 row-span-2 gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative">
      <div className="flex flex-col gap-2 w-full overflow-y-scroll h-48">
        <div className="flex gap-2 items-center">
          <Link to={`/users/${activity.messenger?.id}`}>
            <img
              className="h-12 aspect-square"
              src={activity.messenger?.avatar?.medium || ''}
              alt="Media cover"
            />
          </Link>
          <Link
            to={`/users/${activity.messenger?.id}`}
            className="hover:text-primary"
          >
            {activity.messenger?.name}
          </Link>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: transformAniListText(activity.message || ''),
          }}
        />
      </div>
      <div className="flex flex-col justify-end h-full py-2 ml-4 items-end text-end">
        <span className="text-text-light text-xs absolute top-2">
          {getTimePassed(activity.createdAt)}
        </span>
        <div className="text-text-light  flex gap-2">
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

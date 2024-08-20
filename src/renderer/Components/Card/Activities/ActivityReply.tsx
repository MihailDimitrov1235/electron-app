/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
import { ActivityReplyFragment } from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import transformAniListText from '@Utils/transformAnilistHtml';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ActivityReply({
  reply,
  handleToggleLike,
}: {
  reply: ActivityReplyFragment;
  handleToggleLike: (id: number) => void;
}) {
  return (
    <div className="flex items-center w-full gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative">
      <div className="flex flex-col gap-2 w-full overflow-y-scroll max-h-[500px]">
        <div className="flex gap-2 items-center">
          <Link
            className="h-12 aspect-square rounded-md bg-cover"
            to={`/user/${reply.user?.id}`}
            style={{ backgroundImage: `url(${reply.user?.avatar?.medium})` }}
          />
          <Link to={`/user/${reply.user?.id}`} className="hover:text-primary">
            {reply.user?.name}
          </Link>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: transformAniListText(reply.text || ''),
          }}
        />
      </div>
      <div className="flex flex-col mt-auto py-2 min-w-16 ml-4 items-end text-end">
        <span className="text-text-light text-xs absolute top-2">
          {getTimePassed(reply.createdAt)}
        </span>
        <div className="text-text-light  flex gap-2">
          <button
            type="button"
            onClick={() => handleToggleLike(reply.id)}
            className={`flex items-center gap-1 border rounded-md p-1 ${
              reply.isLiked
                ? 'text-secondary border-secondary hover:text-text-light hover:border-text-light'
                : 'text-text-light border-text-light hover:text-secondary hover:border-secondary'
            }`}
          >
            <span className="text-xs">
              {reply.likes?.length && reply.likes?.length > 0
                ? reply.likes.length
                : null}
            </span>
            <span>
              <FaHeart />
            </span>
            <div className="-space-x-2 flex">
              {reply.likes?.map((user, index) =>
                index < 4 ? (
                  <div
                    key={user?.id}
                    className="w-4 aspect-square rounded-full bg-cover"
                    style={{ backgroundImage: `url(${user?.avatar?.medium})` }}
                  />
                ) : null,
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

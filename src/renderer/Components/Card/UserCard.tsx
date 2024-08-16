/* eslint-disable react/no-danger */
import { UserFragment } from '@graphql/generated/types-and-hooks';
import transformAniListText from '@Utils/transformAnilistHtml';
import { Link } from 'react-router-dom';

type UserType = UserFragment;

export default function UserCard({ data }: { data: UserType }) {
  const url = `/users/${data?.id}`;
  return (
    <div className="flex gap-2 rounded-md border border-background-main h-32 overflow-hidden pr-2">
      <Link
        to={url}
        className="h-32 aspect-square bg-cover"
        style={{ backgroundImage: `url(${data?.avatar?.medium})` }}
      />
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1">
        <Link
          to={url}
          className="hover:text-primary line-clamp-1 overflow-hidden text-ellipsis"
        >
          {data?.name}
        </Link>
        <div
          className="text-sm text-text-light line-clamp-4 overflow-hidden text-ellipsis"
          dangerouslySetInnerHTML={{
            __html: transformAniListText(data?.about || ''),
          }}
        />
      </div>
    </div>
  );
}

import { SearchUsersQuery } from '@graphql/generated/types-and-hooks';
import React from 'react';
import { Link } from 'react-router-dom';

type UserType = NonNullable<
  NonNullable<SearchUsersQuery['Page']>['users']
>[number];

export default function UserCard({ data }: { data: UserType }) {
  const url = `/users/${data?.id}`;
  return (
    <div className="flex gap-2 rounded-md border border-background-main h-32 overflow-hidden pr-2">
      <Link
        to={url}
        className="h-32 aspect-square bg-cover"
        style={{ backgroundImage: `url(${data?.avatar?.large})` }}
      />
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1">
        <Link
          to={url}
          className="hover:text-primary line-clamp-1 overflow-hidden text-ellipsis"
        >
          {data?.name}
        </Link>
        <span className="text-sm text-text-light line-clamp-4 overflow-hidden text-ellipsis">
          {data?.about}
        </span>
      </div>
    </div>
  );
}

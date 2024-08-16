import UserCard from '@Components/Card/UserCard';
import { GetUserExtraQuery } from '@graphql/generated/types-and-hooks';
import React from 'react';

export default function UserFollowers({
  data,
}: {
  data: GetUserExtraQuery['followers'];
}) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {data?.followers?.map((user) => (user ? <UserCard data={user} /> : null))}
    </div>
  );
}

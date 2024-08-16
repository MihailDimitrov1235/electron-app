import UserCard from '@Components/Card/UserCard';
import { GetUserExtraQuery } from '@graphql/generated/types-and-hooks';
import React from 'react';

export default function UserFollowing({
  data,
}: {
  data: GetUserExtraQuery['following'];
}) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {data?.following?.map((user) => (user ? <UserCard data={user} /> : null))}
    </div>
  );
}

import Tabs from '@Components/Tabs';
import { GetUserExtraQuery } from '@graphql/generated/types-and-hooks';
import React, { useState } from 'react';
import UserFollowing from './UserFollowing';
import UserFollowers from './UserFollowers';

export default function UserSocial({
  userId,
  data,
  perPage,
}: {
  userId: number;
  data: {
    following: GetUserExtraQuery['following'];
    followers: GetUserExtraQuery['followers'];
  };
  perPage: number;
}) {
  const tabs = ['Following', 'Followers'];
  const [openTab, setOpenTab] = useState(tabs[0]);
  return (
    <div className="flex gap-8">
      <div className="h-fit w-64 flex-shrink-0">
        <Tabs openTab={openTab} setOpenTab={setOpenTab} tabs={tabs} col small />
      </div>
      {(() => {
        switch (openTab) {
          case tabs[0]:
            return data?.following ? (
              <UserFollowing
                userId={userId}
                data={data.following}
                perPage={perPage}
              />
            ) : null;
          case tabs[1]:
            return data?.followers ? (
              <UserFollowers
                userId={userId}
                data={data.followers}
                perPage={perPage}
              />
            ) : null;
          default:
            return <div>Unknown component type</div>;
        }
      })()}
    </div>
  );
}

/* eslint-disable react/no-array-index-key */
import UserCard from '@Components/Card/UserCard';
import UserCardSkeleton from '@Components/Skeletons/UserCardSkeleton';
import {
  GetUserExtraQuery,
  useGetUserFollowersQuery,
} from '@graphql/generated/types-and-hooks';
import React, { useEffect, useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';

export default function UserFollowers({
  userId,
  data,
  perPage,
}: {
  userId: number;
  data: GetUserExtraQuery['followers'];
  perPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState(data);

  const {
    data: fetchedData,
    loading,
    error,
  } = useGetUserFollowersQuery({
    variables: { userId, page: currentPage, followingPerPage: perPage },
    skip: currentPage === 1,
  });

  useEffect(() => {
    if (fetchedData) {
      setDisplayData((prev) => ({
        pageInfo: { hasNextPage: fetchedData.Page?.pageInfo?.hasNextPage },
        followers: [
          ...(prev?.followers || []),
          ...(fetchedData.Page?.followers || []),
        ],
      }));
    }
  }, [fetchedData]);

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      {displayData?.followers?.map((user) =>
        user ? <UserCard key={user.id} data={user} /> : null,
      )}
      {displayData?.pageInfo?.hasNextPage && !loading ? (
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="h-[154px] rounded-md shadow-md w-full border border-background-main flex justify-center items-center gap-4 hover:bg-primary/50"
        >
          <CgDetailsMore size={40} />
          <span className="text-lg">Load More</span>
        </button>
      ) : null}
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <UserCardSkeleton key={index} />
          ))
        : null}
    </div>
  );
}

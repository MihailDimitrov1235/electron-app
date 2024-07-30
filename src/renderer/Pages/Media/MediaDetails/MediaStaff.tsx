/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  useGetMediaStaffQuery,
  MediaType,
} from '@graphql/generated/types-and-hooks';
import StaffCard from '@Components/Card/StaffCard';
import Pagination from '@Components/Pagination';

export default function Characters({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetMediaStaffQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: 10,
    },
  });
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Staff</div>
      <div className="grid grid-cols-5 gap-4">
        {data.Media?.staff?.edges?.map((edge) => (
          <StaffCard key={`${edge?.id}`} role={edge?.role} {...edge?.node} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          pages={-1}
          hasNextPage={!!data.Media?.staff?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

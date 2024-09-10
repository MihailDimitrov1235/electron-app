/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  useGetMediaStaffQuery,
  MediaType,
  GetMediaStaffQuery,
} from '@graphql/generated/types-and-hooks';
import StaffCard from '@Components/Card/StaffCard';
import Pagination from '@Components/Pagination';

export default function Characters({
  id,
  mediaType,
  data,
  staffPerPage,
}: {
  id: string;
  mediaType: MediaType;
  data: GetMediaStaffQuery['Media'] | null;
  staffPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchedData,
    loading,
    error,
  } = useGetMediaStaffQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: staffPerPage,
    },
    skip: currentPage === 1,
  });

  const displayData = currentPage === 1 ? data : fetchedData?.Media;

  if (loading && currentPage !== 1) {
    return <div>loading...</div>;
  }

  if (error && !displayData) {
    return <div>error</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Staff</div>
      <div className="grid grid-cols-5 gap-4">
        {displayData?.staff?.edges?.map((edge) => (
          <StaffCard key={`${edge?.id}`} role={edge?.role} {...edge?.node} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          pages={-1}
          hasNextPage={!!displayData?.staff?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  useGetMediaStaffQuery,
  MediaType,
} from '@graphql/generated/types-and-hooks';
import StaffCard from '@Components/Card/StaffCard';

export default function Characters({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { loading, error, data } = useGetMediaStaffQuery({
    variables: { mediaId: Number(id), mediaType },
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
          <StaffCard key={edge?.node?.id} role={edge?.role} {...edge?.node} />
        ))}
      </div>
    </div>
  );
}

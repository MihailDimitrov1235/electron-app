/* eslint-disable react/jsx-props-no-spreading */
import ReviewCard from '@Components/Card/ReviewCard';
import Pagination from '@Components/Pagination';
import {
  MediaType,
  useGetMediaReviewsQuery,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';

export default function MediaReviews({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetMediaReviewsQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: 8,
    },
  });
  if (error) {
    enqueueSnackbar({ variant: 'error', message: error.message });
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Reviews</div>
      <div className="grid grid-cols-4 gap-4">
        {data.Media?.reviews?.edges?.map((edge) => (
          <ReviewCard key={edge?.node?.id} {...edge?.node} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          pages={-1}
          hasNextPage={!!data.Media?.reviews?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

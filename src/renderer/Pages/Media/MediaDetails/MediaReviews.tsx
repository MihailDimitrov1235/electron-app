/* eslint-disable react/jsx-props-no-spreading */
import ReviewCard from '@Components/Card/ReviewCard';
import Pagination from '@Components/Pagination';
import {
  GetMediaReviewsQuery,
  MediaType,
  useGetMediaReviewsQuery,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';

export default function MediaReviews({
  id,
  mediaType,
  data,
  reviewsPerPage,
}: {
  id: string;
  mediaType: MediaType;
  data: GetMediaReviewsQuery['Media'] | null;
  reviewsPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: fetchedData,
    loading,
    error,
  } = useGetMediaReviewsQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: reviewsPerPage,
    },
    skip: currentPage === 1,
  });

  const displayData = currentPage === 1 ? data : fetchedData?.Media;

  useEffect(() => {
    if (error) {
      enqueueSnackbar({
        variant: 'error',
        message: error.message,
      });
    }
  }, [error]);

  if (loading && currentPage !== 1) {
    return <div>loading...</div>;
  }

  if (error && !displayData) {
    return <div>error</div>;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Reviews</div>
      <div className="grid grid-cols-4 gap-4">
        {displayData?.reviews?.edges?.map((edge) => (
          <ReviewCard key={edge?.node?.id} {...edge?.node} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          pages={-1}
          hasNextPage={!!displayData?.reviews?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

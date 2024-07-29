/* eslint-disable react/jsx-props-no-spreading */
import ReviewCard from '@Components/Card/ReviewCard';
import {
  MediaType,
  useGetMediaReviewsQuery,
} from '@graphql/generated/types-and-hooks';
import React from 'react';

export default function MediaReviews({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { loading, error, data } = useGetMediaReviewsQuery({
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
      <div className="text-lg font-semibold">Reviews</div>
      <div className="grid grid-cols-4 gap-4">
        {data.Media?.reviews?.edges?.map((edge) => (
          <ReviewCard key={edge?.node?.id} {...edge?.node} />
        ))}
      </div>
    </div>
  );
}

/* eslint-disable react/no-danger */
import Button from '@Components/Form/Button';
import {
  ReviewRating,
  useGetReviewQuery,
  useRateReviewMutation,
} from '@graphql/generated/types-and-hooks';
import blendColors from '@Utils/blendColors';
import transformAniListText from '@Utils/transformAnilistHtml';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsDown,
  FaThumbsUp,
} from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

export default function Review() {
  const { id } = useParams();
  const { loading, error, data } = useGetReviewQuery({
    variables: { id: Number(id) },
  });
  const [rateReview, { data: rateReviewData, error: rateReviewError }] =
    useRateReviewMutation();
  const [rating, setRating] = useState({
    like: 0,
    dislike: 0,
    liked: false,
    disliked: false,
  });
  useEffect(() => {
    if (data?.Review) {
      setRating({
        like: data.Review.rating || 0,
        dislike: (data.Review.ratingAmount || 0) - (data.Review.rating || 0),
        liked: data.Review.userRating === ReviewRating.UpVote,
        disliked: data.Review.userRating === ReviewRating.DownVote,
      });
    }
  }, [data]);
  useEffect(() => {
    const rateData = rateReviewData?.RateReview;
    if (rateData) {
      enqueueSnackbar({ variant: 'success', message: 'Review rated' });
      setRating({
        like: rateData.rating || 0,
        dislike: (rateData.ratingAmount || 0) - (rateData.rating || 0),
        liked: rateData.userRating === ReviewRating.UpVote,
        disliked: rateData.userRating === ReviewRating.DownVote,
      });
    }
  }, [rateReviewData]);
  if (error) {
    enqueueSnackbar({ variant: 'error', message: error.message });
    return <div>error</div>;
  }
  if (rateReviewError) {
    enqueueSnackbar({ variant: 'error', message: rateReviewError.message });
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="w-full h-[300px] absolute z-0 blur-md bg-cover"
        style={{
          backgroundImage: `url(${
            data.Review?.media?.bannerImage || data.Review?.media?.coverImage
          })`,
        }}
      />
      <div className="w-full h-[330px] absolute z-10 bg-gradient-to-b from-background-dark/30 to-background-dark" />
      <div className="w-[1000px] relative z-20 mx-auto bg-background-light rounded-md p-12 my-32 flex flex-col gap-12">
        <div className="flex flex-col gap-4 ">
          <span className="text-xl font-bold">
            Review of &quot;{data.Review?.media?.title?.userPreferred}&quot;
          </span>
          <span className="text-text-light">
            by{' '}
            <Link
              className="hover:text-primary"
              to={`/users/${data.Review?.user?.id}`}
            >
              {data.Review?.user?.name}
            </Link>
          </span>
        </div>
        <div
          className="w-full "
          dangerouslySetInnerHTML={{
            __html: transformAniListText(data.Review?.body || ''),
          }}
        />

        <div className="flex justify-between">
          <div
            className="rounded-md pl-10 pr-4 py-4 flex items-end text-white"
            style={{
              backgroundColor: blendColors(
                ['#ef4444', '#f58f00', '#22c55e'],
                data.Review?.score || 100,
              ),
            }}
          >
            <span className="text-6xl italic">{data.Review?.score}</span>
            <span className="text-sm">/100</span>
          </div>
          <div className="flex h-fit gap-2 mt-auto">
            <Button
              onClick={() =>
                rateReview({
                  variables: {
                    reviewId: Number(id),
                    rating: rating.liked
                      ? ReviewRating.NoVote
                      : ReviewRating.UpVote,
                  },
                })
              }
              variant="icon-square"
              className="text-white bg-green-500"
            >
              {rating.liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </Button>
            <span className="flex items-center">
              {rating.like} / {rating.dislike}
            </span>
            <Button
              onClick={() =>
                rateReview({
                  variables: {
                    reviewId: Number(id),
                    rating: rating.disliked
                      ? ReviewRating.NoVote
                      : ReviewRating.DownVote,
                  },
                })
              }
              variant="icon-square"
              className="text-white bg-red-500"
            >
              {rating.disliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

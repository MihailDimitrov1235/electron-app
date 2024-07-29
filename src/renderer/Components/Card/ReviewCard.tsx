/* eslint-disable react/require-default-props */
import MediaScore from '@Components/Media/MediaScore';
import Tooltip from '@Components/Tooltip';
import { ReviewRating } from '@graphql/generated/types-and-hooks';
import getTimePassed from '@Utils/getTimePassed';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

type ReviewCardPropsType = {
  id?: number;
  score?: number | null;
  rating?: number | null;
  ratingAmount?: number | null;
  userRating?: ReviewRating | null;
  summary?: string | null;
  createdAt?: number | null;
  user?: {
    id: number;
    name: string;
    avatar?: {
      medium?: string | null;
      [key: string]: any;
    } | null;
    [key: string]: any;
  } | null;
  [key: string]: any;
};
export default function ReviewCard({
  id,
  score,
  rating,
  ratingAmount,
  userRating,
  summary,
  createdAt,
  user,
}: ReviewCardPropsType) {
  return (
    <Link
      to={`/review/${id}`}
      className="flex flex-col w-full gap-2 border-background-main border rounded-md overflow-hidden shadow-md p-2 hover:border-primary"
    >
      <div className="flex gap-2">
        <div
          className=" aspect-square h-[68px] bg-cover rounded-md"
          style={{ backgroundImage: `url(${user?.avatar?.medium})` }}
        />
        <div className="flex flex-col justify-between">
          <span>{user?.name}</span>
          {createdAt && (
            <span className="text-text-light">{getTimePassed(createdAt)}</span>
          )}
        </div>
        <div className="ml-auto flex flex-col gap-2">
          {score && (
            <div className="ml-auto">
              <MediaScore score={score} small />
            </div>
          )}
          {rating && ratingAmount && (
            <div className="flex flex-col justify-end items-center gap-1">
              <div className="flex gap-1 items-center">
                <span>{`${rating} / ${ratingAmount}`}</span>
              </div>
              <div className="w-full bg-red-500 rounded-full overflow-hidden h-2.5">
                <div
                  className="bg-green-500 h-2.5"
                  style={{ width: `${(rating / ratingAmount) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-[76px] overflow-hidden overflow-ellipsis line-clamp-3">
        {summary}
      </div>
    </Link>
  );
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import {
  GetUserQuery,
  useLikeListActivityMutation,
} from '@graphql/generated/types-and-hooks';
import transformAniListText from '@Utils/transformAnilistHtml';
import { FaStar, FaHeart, FaComment, FaEye } from 'react-icons/fa';
import { GiBowTieRibbon } from 'react-icons/gi';
import { CgDetailsMore } from 'react-icons/cg';
import { RiVideoFill } from 'react-icons/ri';
import { IoBook, IoTimeSharp } from 'react-icons/io5';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getTimePassed from '@Utils/getTimePassed';
import { enqueueSnackbar } from 'notistack';

export default function UserOverview({
  data,
}: {
  data: {
    overview: GetUserQuery['Overview'];
    activities: GetUserQuery['Activities'];
  };
}) {
  const [toggleLikeListActivity] = useLikeListActivityMutation();

  const [listActivities, setListActivities] = useState(
    data.activities?.activities?.filter(
      (
        activity,
      ): activity is NonNullable<
        NonNullable<GetUserQuery['Activities']>['activities']
      >[0] & {
        __typename: 'ListActivity';
      } => activity?.__typename === 'ListActivity',
    ),
  );

  const handleToggleLike = async (id: number) => {
    try {
      const { data: ToggleLikeListActivityData } = await toggleLikeListActivity(
        { variables: { id } },
      );
      setListActivities(
        (prevActivities) =>
          prevActivities?.map((activity) =>
            activity.id === id &&
            ToggleLikeListActivityData?.ToggleLikeV2?.__typename ===
              'ListActivity'
              ? {
                  ...activity,
                  isLiked: ToggleLikeListActivityData?.ToggleLikeV2?.isLiked,
                  likeCount:
                    ToggleLikeListActivityData?.ToggleLikeV2?.likeCount,
                }
              : activity,
          ),
      );
      enqueueSnackbar({ variant: 'success', message: 'Updated activity' });
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Error updating activity' });
    }
  };

  const statusColors = {
    'watched episode': 'text-green-500',
    'read chapter': 'text-green-500',
    'plans to watch': 'text-text-light',
    completed: 'text-blue-500',
  };
  return (
    <div className="flex flex-col gap-2">
      {data?.overview?.about && (
        <div
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: transformAniListText(data.overview.about),
          }}
        />
      )}
      <div className=" flex gap-4">
        {data.overview?.statistics?.anime?.minutesWatched && (
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">Anime</span> <RiVideoFill size={20} />
            </div>
            <div className="w-full py-4 px-8 border border-background-main rounded-md shadow-md grid grid-cols-4">
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {data.overview.statistics.anime.count}
                </span>
                <span className="text-sm">Total Anime</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {data.overview.statistics.anime.episodesWatched}
                </span>
                <span className="text-sm">Episodes Watched</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {(
                    data.overview.statistics.anime.minutesWatched /
                    60 /
                    24
                  ).toFixed(1)}
                </span>
                <span className="text-sm">Days</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {(data.overview.statistics.anime.meanScore / 10).toFixed(2)}
                </span>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-sm">Mean Score</span>
                  <span className="text-score">
                    <FaStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 py-4 px-8 border border-background-main rounded-md shadow-md gap-8">
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Highest amount <FaEye className="text-blue-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.anime?.highestCount?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/anime/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>{genre?.count}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Highest rated <GiBowTieRibbon className="text-red-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.anime?.highestScore?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/anime/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>
                          {genre?.meanScore
                            ? (genre.meanScore / 10).toFixed(2)
                            : 0}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Most Watched <IoTimeSharp className="text-green-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.anime?.highestProgress?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/anime/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>
                          {genre?.minutesWatched
                            ? (genre.minutesWatched / 60 / 24).toFixed(2)
                            : 0}{' '}
                          Days
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {data.overview?.statistics?.manga?.chaptersRead && (
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">Manga</span> <IoBook size={20} />
            </div>
            <div className="w-full grid grid-cols-4 py-4 px-8 border border-background-main rounded-md shadow-md">
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {data.overview.statistics.manga.count}
                </span>
                <span className="text-sm">Total Manga</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {data.overview.statistics.manga.chaptersRead}
                </span>
                <span className="text-sm">Chapters Read</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {data.overview.statistics.manga.volumesRead}
                </span>
                <span className="text-sm">Volumes Read</span>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <span className="text-primary text-xl">
                  {(data.overview.statistics.manga.meanScore / 10).toFixed(2)}
                </span>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-sm">Mean Score</span>
                  <span className="text-score">
                    <FaStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 py-4 px-8 border border-background-main rounded-md shadow-md gap-8">
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Highest amount <FaEye className="text-blue-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.manga?.highestCount?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/manga/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>{genre?.count}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Highest rated <GiBowTieRibbon className="text-red-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.manga?.highestScore?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/manga/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>
                          {genre?.meanScore
                            ? (genre.meanScore / 10).toFixed(2)
                            : 0}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex flex-col text-center gap-2">
                <span className="text-lg flex items-center gap-4 justify-center">
                  Most Chapters Read <IoTimeSharp className="text-green-500" />
                </span>
                <div className="text-sm">
                  {data.overview.statistics.manga?.highestProgress?.map(
                    (genre) => (
                      <div className="flex justify-between">
                        <Link
                          to={`/search/manga/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>{genre?.chaptersRead} Chapters</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-8 mt-8">
        <div className="space-y-2 flex-1">
          <span className="text-xl">Activities</span>
          <div className="grid grid-cols-2 gap-4 ">
            {listActivities?.map((activity) => (
              <div className="flex items-center w-full gap-8 rounded-md overflow-hidden border shadow-md border-background-main pr-4 relative">
                <Link
                  className="flex-shrink-0"
                  to={`/${activity.media?.type}/${activity.media?.id}`}
                >
                  <img
                    className="h-24 w-[68px]"
                    src={activity.media?.coverImage?.medium || ''}
                    alt="Media cover"
                  />
                </Link>
                <div className="grid grid-flow-col grid-cols-12 w-full overflow-hidden">
                  <span
                    className={` col-span-3  capitalize ${
                      Object.prototype.hasOwnProperty.call(
                        statusColors,
                        activity.status || '',
                      )
                        ? statusColors[
                            (activity.status as keyof typeof statusColors) || ''
                          ]
                        : 'text-text-light'
                    }`}
                  >
                    {activity.status}
                  </span>
                  <span className="">
                    {activity.progress && `${activity.progress}`}
                  </span>
                  <div className=" w-full col-span-8">
                    <Link
                      to={`/${activity.media?.type}/${activity.media?.id}`}
                      className="hover:text-primary line-clamp-1 w-fit ml-auto text-ellipsis overflow-hidden"
                    >
                      {activity.media?.title?.userPreferred}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-end h-24 py-2 items-end text-end">
                  <span className="text-text-light text-sm absolute top-2">
                    {getTimePassed(activity.createdAt)}
                  </span>
                  <div className="text-text-light flex gap-2">
                    <button
                      type="button"
                      className={`flex items-center gap-1  `}
                    >
                      {activity.replyCount !== 0 && activity.replyCount}
                      <span className="hover:text-blue-500">
                        <FaComment />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleToggleLike(activity.id)}
                      className={`flex items-center gap-1 `}
                    >
                      {activity.likeCount !== 0 && activity.likeCount}
                      <span
                        className={`${
                          activity.isLiked
                            ? 'text-secondary hover:text-text-light'
                            : 'text-text-light hover:text-secondary'
                        }`}
                      >
                        <FaHeart />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="flex gap-4 justify-center items-center w-full h-24 rounded-md overflow-hidden border shadow-md border-background-main relative hover:bg-primary/50 transition-colors"
            >
              <span>Load More</span>
              <CgDetailsMore size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

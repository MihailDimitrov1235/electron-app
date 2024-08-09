/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import { GetUserQuery } from '@graphql/generated/types-and-hooks';
import transformAniListText from '@Utils/transformAnilistHtml';
import { FaStar, FaEye } from 'react-icons/fa';
import { GiBowTieRibbon } from 'react-icons/gi';
import { RiVideoFill } from 'react-icons/ri';
import { IoBook, IoTimeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ListActivities from './ListActivities';

export default function UserOverview({
  userId,
  data,
  activitiesPerPage,
}: {
  userId: number;
  activitiesPerPage: number;
  data: {
    overview: GetUserQuery['Overview'];
    activities: GetUserQuery['Activities'];
  };
}) {
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
                      <div key={genre?.genre} className="flex justify-between">
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
                      <div key={genre?.genre} className="flex justify-between">
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
                      <div key={genre?.genre} className="flex justify-between">
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
                      <div key={genre?.genre} className="flex justify-between">
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
                      <div key={genre?.genre} className="flex justify-between">
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
                      <div key={genre?.genre} className="flex justify-between">
                        <Link
                          to={`/search/manga/?genres=${genre?.genre}`}
                          className="hover:text-primary"
                        >
                          {genre?.genre}
                        </Link>
                        <span>{genre?.chaptersRead} Ch.</span>
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
        <ListActivities
          userId={userId}
          activitiesData={data.activities}
          activitiesPerPage={activitiesPerPage}
        />
      </div>
    </div>
  );
}

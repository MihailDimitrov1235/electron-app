/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import { RiVideoFill } from 'react-icons/ri';
import { IoBook } from 'react-icons/io5';
import Countdown from '@Components/Countdown';
import EpisodesDisplay from './EpisodesDisplay';

type RequiredAnimeCardProps = {
  id?: number;
  meanScore?: number | null;
  coverImage?: {
    extraLarge?: string | null;
    large?: string | null;
    medium?: string | null;
    color?: string | null;
  } | null;
  title?: {
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
    userPreferred?: string | null;
  } | null;
  episodes?: number | null;
  mediaListEntry?: {
    progress?: number | null;
  } | null;
  nextAiringEpisode?: {
    episode?: number | null;
    timeUntilAiring?: number | null;
  } | null;
  type?: any;
};

type OptionalAnimeCardProps = {
  withTitle?: boolean;
  withEpisodes?: boolean;
  withScore?: boolean;
  withLink?: boolean;
  withNextEpisode?: boolean;
  withType?: boolean;
  size?: number;
  relationship?: string;
  [key: string]: any;
};

type AnimeCardPropsType = RequiredAnimeCardProps & OptionalAnimeCardProps;

export default function AnimeCard({
  id,
  meanScore,
  coverImage,
  title,
  episodes,
  mediaListEntry,
  nextAiringEpisode,
  type,
  withTitle = true,
  withEpisodes = true,
  withScore = true,
  withLink = true,
  withNextEpisode = false,
  withType = false,
  size = 3,
  relationship,
}: AnimeCardPropsType) {
  const width = 46 * size;
  const height = 65 * size;
  const fontSize = Math.min(6.5 * size, 16);

  return (
    <div
      className={`flex flex-col gap-1 h-fit w-fit `}
      style={{ fontSize: `${fontSize}px` }}
    >
      {withLink ? (
        <Link to={`/${type === 'ANIME' ? 'anime' : 'manga'}/${id}`}>
          <div
            className={`relative bg-cover bg-center rounded-md overflow-hidden shadow-md `}
            style={{
              backgroundImage: `url(${
                size > 2
                  ? size > 3
                    ? coverImage?.extraLarge
                    : coverImage?.large
                  : coverImage?.medium
              })`,
              height: `${height}px`,
              width: `${width}px`,
            }}
          >
            {withScore && meanScore && (
              <div className="absolute bottom-0 right-0 px-3 bg-gradient-to-br from-primary/70 to-secondary/70 text-primary-background rounded-tl-md font-medium">
                {(meanScore / 10).toFixed(1)}
              </div>
            )}
            {relationship && (
              <div className="w-full absolute bg-background-main/80 text-text-main justify-center text-center py-2 uppercase underline underline-offset-4 decoration-primary decoration-2 font-semibold">
                {relationship.replaceAll('_', ' ')}
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div
          className={`relative bg-cover bg-center rounded-md overflow-hidden shadow-md `}
          style={{
            backgroundImage: `url(${coverImage?.extraLarge})`,
            height: `${height}px`,
            width: `${width}px`,
          }}
        >
          {withScore && meanScore && (
            <div className="absolute bottom-0 right-0 px-3 bg-gradient-to-br from-primary/70 to-secondary/70 text-primary-background rounded-tl-md font-medium">
              {(meanScore / 10).toFixed(1)}
            </div>
          )}
          {withNextEpisode &&
            nextAiringEpisode?.timeUntilAiring &&
            nextAiringEpisode?.episode && (
              <div className="w-full absolute flex flex-col gap-2 bg-background-main/60 text-text-main justify-center text-center py-2">
                <div>
                  Ep{' '}
                  <span className=" font-semibold">
                    {nextAiringEpisode.episode}
                  </span>
                </div>
                <Countdown secondsUntil={nextAiringEpisode.timeUntilAiring} />
              </div>
            )}
        </div>
      )}
      {withType && type && (
        <div className="flex gap-2 items-center justify-center">
          {type === 'ANIME' ? <RiVideoFill /> : <IoBook />}
          <span>{type}</span>
        </div>
      )}

      {withTitle && (
        <div
          className="px-1 line-clamp-2"
          style={{ width: `${width}px`, height: `${fontSize * 2.8}px` }}
        >
          {title?.userPreferred}
        </div>
      )}

      {withEpisodes && (
        <EpisodesDisplay
          episodes={{
            watched: mediaListEntry?.progress,
            nextAiring: nextAiringEpisode?.episode,
            planned: episodes,
          }}
        />
      )}
    </div>
  );
}

/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';
import EpisodesDisplay from './EpisodesDisplay';

type RequiredAnimeCardProps = {
  id?: number;
  meanScore?: number | null;
  coverImage?: {
    medium?: string | null;
    extraLarge?: string | null;
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
  } | null;
};

type OptionalAnimeCardProps = {
  score?: number | null;
  withTitle?: boolean;
  withScore?: boolean;
  withLink?: boolean;
  size?: number;
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
  withTitle = true,
  withScore = true,
  withLink = true,
  size = 3,
  ...rest
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
        <Link to={`/anime/${id}`}>
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
        </div>
      )}

      {withTitle && (
        <>
          <div
            className="px-1 max-h-16 line-clamp-2"
            style={{ width: `${width}px`, lineHeight: `${fontSize + 1}px` }}
          >
            {title?.english}
          </div>
          <EpisodesDisplay
            episodes={{
              watched: mediaListEntry?.progress || null,
              released: nextAiringEpisode?.episode
                ? nextAiringEpisode.episode - 1
                : null,
              planned: episodes || null,
            }}
          />
        </>
      )}
    </div>
  );
}

/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';

export type TStatus =
  | 'FINISHED'
  | 'RELEASING'
  | 'NOT_YET_RELEASED'
  | 'CANCELLED'
  | 'HIATUS';
type AnimeCardPropsType = {
  id: number;
  title: string;
  coverImage: string; // url
  score?: number | null;
  episodes: {
    watched: number | undefined;
    released: number | null;
    planned: number | null;
  };
  status?: TStatus;
  withTitle?: boolean;
  size?: number;
};
export default function AnimeCard({
  id,
  title,
  coverImage,
  score = null,
  episodes,
  status,
  withTitle = true,
  size = 3,
}: AnimeCardPropsType) {
  const width = 46 * size;
  const height = 65 * size;
  return (
    <div
      className={`flex flex-col gap-1 ${withTitle && 'py-4'}`}
      style={{ width: `${width}px` }}
    >
      <Link to={`/anime/${id}`}>
        <div
          className={` relative bg-cover bg-center rounded-md overflow-hidden shadow-md`}
          style={{
            backgroundImage: `url(${coverImage})`,
            height: `${height}px`,
            width: `${width}px`,
          }}
        >
          {score && (
            <div className=" absolute bottom-0 right-0 px-3 bg-gradient-to-br from-primary/70 to-secondary/70 text-text-primary rounded-tl-md font-medium">
              {score / 10}
            </div>
          )}
        </div>
      </Link>
      {withTitle && (
        <>
          <div className="px-1 leading-4 max-h-16 line-clamp-2">{title}</div>
          <div className="px-1">
            <span className="text-primary">
              {episodes.watched ? episodes.watched : '~'}
            </span>{' '}
            |{' '}
            {episodes.released === episodes.planned
              ? `${episodes.released ? episodes.released : '~'}`
              : `${episodes.released ? episodes.released : '~'} | ${
                  episodes.planned ? episodes.planned : '~'
                }`}
          </div>
        </>
      )}
    </div>
  );
}

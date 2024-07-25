/* eslint-disable react/require-default-props */
export default function EpisodesDisplay({
  episodes,
  className = '',
  withWatched = true,
}: {
  episodes: {
    watched?: number | null;
    nextAiring?: number | null;
    planned?: number | null;
  };
  className?: string;
  withWatched?: boolean;
}) {
  return (
    <div className={className}>
      {withWatched && (
        <span className="text-primary">
          {episodes.watched ? episodes.watched : '~'}
        </span>
      )}{' '}
      |{' '}
      {episodes.nextAiring
        ? `${episodes.nextAiring ? episodes.nextAiring - 1 : '~'} | ${
            episodes.planned ? episodes.planned : '~'
          }`
        : `${episodes.planned ? episodes.planned : '~'}`}
    </div>
  );
}

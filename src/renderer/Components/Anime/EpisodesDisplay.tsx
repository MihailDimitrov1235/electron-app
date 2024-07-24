/* eslint-disable react/require-default-props */
export default function EpisodesDisplay({
  episodes,
  className = '',
  withWatched = true,
}: {
  episodes: {
    watched: number | null;
    released: number | null;
    planned: number | null;
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
      {episodes.released
        ? `${episodes.released ? episodes.released : '~'} | ${
            episodes.planned ? episodes.planned : '~'
          }`
        : `${episodes.planned ? episodes.planned : '~'}`}
    </div>
  );
}

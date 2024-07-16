export default function EpisodesDisplay({
  episodes,
  className = '',
}: {
  episodes: {
    watched: number | null;
    released: number | null;
    planned: number | null;
  };
  // eslint-disable-next-line react/require-default-props
  className?: string;
}) {
  return (
    <div className={className}>
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
  );
}

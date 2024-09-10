import { DefaultCardProps } from '@Components/Card/MediaCard';
import ImageSkeleton from '../ImageSkeleton';
import TextSkeleton from '../TextSkeleton';

export default function DefaultMediaCardSkeleton({
  withTitle = true,
  withEpisodes = true,
  withType = false,
  size = 3,
}: DefaultCardProps) {
  const width = 46 * size;
  const height = 65 * size;
  const fontSize = Math.min(6.5 * size, 16);

  return (
    <div
      className={`flex flex-col gap-1 h-fit w-fit `}
      style={{ fontSize: `${fontSize}px` }}
    >
      <ImageSkeleton
        className={` `}
        width={`${width}px`}
        height={`${height}px`}
      />

      {withType && <TextSkeleton lines={1} className="w-8 mx-auto h-4" />}

      {withTitle && (
        <TextSkeleton
          lines={2}
          className="w-full px-1 mt-2 h-4"
          containerClassName="space-y-1"
        />
      )}

      {withEpisodes && <TextSkeleton lines={1} className="w-10 mt-2 h-4" />}
    </div>
  );
}

/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import ImageSkeleton from './ImageSkeleton';
import TextSkeleton from './TextSkeleton';

type OptionalMediaCardProps = {
  withTitle?: boolean;
  withEpisodes?: boolean;
  withType?: boolean;
  size?: number;
  [key: string]: any;
};

export default function MediaCard({
  withTitle = true,
  withEpisodes = true,
  withType = false,
  size = 3,
}: OptionalMediaCardProps) {
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

      {withType && <TextSkeleton lines={1} className="w-8 mx-auto" />}

      {withTitle && (
        <TextSkeleton
          lines={2}
          className="w-full px-1 mt-2"
          containerClassName="space-y-1"
        />
      )}

      {withEpisodes && <TextSkeleton lines={1} className="w-10 mt-2" />}
    </div>
  );
}

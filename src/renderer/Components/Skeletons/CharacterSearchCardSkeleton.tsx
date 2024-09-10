import ImageSkeleton from './ImageSkeleton';
import TextSkeleton from './TextSkeleton';

export default function CharacterSearchCard() {
  return (
    <div className="flex gap-2 rounded-md border border-background-main h-32 overflow-hidden pr-2">
      <ImageSkeleton width="32" height="32" className="w-32 aspect-square" />
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1">
        <TextSkeleton lines={1} className="h-2 w-16" />
        <TextSkeleton className="w-32 h-1 mt-2" lines={2} />
      </div>
    </div>
  );
}

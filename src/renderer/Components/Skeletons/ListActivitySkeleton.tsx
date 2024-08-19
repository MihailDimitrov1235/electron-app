import ImageSkeleton from './ImageSkeleton';
import TextSkeleton from './TextSkeleton';

export default function ListActivityCardSkeleton() {
  return (
    <div className="flex items-center w-full gap-8 rounded-md overflow-hidden border shadow-md border-background-main pr-4 relative">
      <ImageSkeleton height="24" width="68px" className=" h-24 flex-shrink-0" />
      <div className="flex flex-col gap-8 w-full overflow-hidden">
        <TextSkeleton
          lines={2}
          className="w-36 h-3"
          containerClassName="flex flex-col gap-2"
        />
      </div>
      <div className="flex flex-col justify-end h-24 py-2 items-end text-end">
        <span className="text-text-light text-sm absolute top-2">
          <TextSkeleton lines={1} className="w-12 h-2" />
        </span>
        <div className="text-text-light flex gap-2">
          <TextSkeleton lines={1} className="w-4 h-4" />
          <TextSkeleton lines={1} className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

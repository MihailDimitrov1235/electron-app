import React from 'react';
import TextSkeleton from './TextSkeleton';
import ImageSkeleton from './ImageSkeleton';

export default function ActivityReplySkeleton() {
  return (
    <div className="flex items-center w-full gap-2 rounded-md overflow-hidden border shadow-md border-background-main px-3 py-2 relative">
      <div className="flex flex-col gap-2 w-full overflow-y-scroll max-h-[500px]">
        <div className="flex gap-2 items-center">
          <ImageSkeleton width="48px" height="48px" className="" />
          <TextSkeleton lines={1} className="h-4 w-24" />
        </div>
        <TextSkeleton lines={3} className="w-full h-2" />
      </div>
      <div className="flex flex-col mt-auto py-2 min-w-16 ml-4 items-end text-end">
        <TextSkeleton lines={1} className="w-8 h-2" />
      </div>
    </div>
  );
}

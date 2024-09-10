import React from 'react';
import ImageSkeleton from './ImageSkeleton';
import TextSkeleton from './TextSkeleton';

export default function UserCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-md shadow-md border border-background-main overflow-hidden w-full relative h-[154px]">
      <div className="w-full h-16 overflow-hidden absolute z-0 bg-gradient-to-b from-primary to-background-dark" />
      <div className="relative z-10 mt-6 mx-auto">
        <ImageSkeleton width="64px" height="64px" className="" />
      </div>
      <div className="flex flex-col gap-1 w-full overflow-hidden py-1 text-center">
        <TextSkeleton lines={2} className="mx-auto w-20 h-2" />
      </div>
    </div>
  );
}

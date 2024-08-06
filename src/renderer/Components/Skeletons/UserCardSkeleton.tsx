import React from 'react';
import ImageSkeleton from './ImageSkeleton';
import TextSkeleton from './TextSkeleton';

export default function UserCardSkeleton() {
  return (
    <div className="flex gap-2 rounded-md border border-background-main h-32 overflow-hidden pr-2">
      <ImageSkeleton width="32" height="32" className="aspect-square" />
      <div className="flex flex-col gap-3 w-full overflow-hidden py-2">
        <TextSkeleton lines={1} className="w-16 h-2" />
        <TextSkeleton lines={6} className="w-32 h-1" />
      </div>
    </div>
  );
}

/* eslint-disable react/no-danger */
import React from 'react';
import { type WideCardSkeletonProps } from '.';
import ImageSkeleton from '../ImageSkeleton';
import TextSkeleton from '../TextSkeleton';

export default function WideMediaSkeletonCard({
  size = 3,
}: WideCardSkeletonProps) {
  const width = 46 * size;
  const height = 65 * size;
  return (
    <div
      className={`flex gap-2 h-fit w-full bg-background-main rounded-md overflow-hidden text-sm `}
    >
      <ImageSkeleton
        className="flex-shrink-0 bg-cover"
        width={`${width}px`}
        height={`${height}px`}
      />
      <div
        className="p-2 w-full flex flex-col"
        style={{
          height,
        }}
      >
        <div className="flex justify-between gap-4">
          <TextSkeleton lines={2} className="w-24 h-2" />
          <TextSkeleton lines={1} className="w-12 h-6" />
        </div>
        <TextSkeleton lines={1} className="w-12 h-1 mt-3 mb-4" />
        <TextSkeleton lines={10} className="w-full h-1" />
        <div>{}</div>
      </div>
    </div>
  );
}

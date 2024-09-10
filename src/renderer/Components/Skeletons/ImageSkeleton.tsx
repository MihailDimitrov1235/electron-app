import React from 'react';
import { FaImages } from 'react-icons/fa';

type ImageSkeletonProps = {
  width: string;
  height: string;
  className: string;
};

function ImageSkeleton({ width, height, className }: ImageSkeletonProps) {
  return (
    <div
      className={` bg-skeleton animate-pulse rounded-md flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <FaImages />
    </div>
  );
}

export default ImageSkeleton;

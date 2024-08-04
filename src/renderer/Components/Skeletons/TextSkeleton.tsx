/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React from 'react';

type TextSkeletonProps = {
  lines: number;
  className: string;
  containerClassName?: string;
};

function TextSkeleton({
  lines,
  className,
  containerClassName = 'space-y-2',
}: TextSkeletonProps) {
  return (
    <div className={containerClassName}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-skeleton rounded animate-pulse ${className}`}
        />
      ))}
    </div>
  );
}

export default TextSkeleton;

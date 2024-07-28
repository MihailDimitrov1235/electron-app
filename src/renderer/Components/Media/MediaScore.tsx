import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function MediaScore({ score }: { score: number }) {
  return (
    <div className="flex gap-4 items-start font-bold text-4xl bg-background-dark/60 border border-primary/50 pb-1 px-3 rounded-full shadow-md">
      {(score / 10).toFixed(1)}{' '}
      <span className="text-yellow-400 mt-[2px]">
        <FaStar />
      </span>
    </div>
  );
}

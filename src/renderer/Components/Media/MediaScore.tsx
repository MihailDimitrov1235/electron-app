/* eslint-disable react/require-default-props */
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function MediaScore({
  score,
  small = false,
}: {
  score: number;
  small?: boolean;
}) {
  return (
    <div
      className={`flex w-fit h-fit gap-4 items-start font-bold text-${
        small ? 'sm px-2' : '4xl px-3'
      } bg-background-dark/60 border border-primary/50 py-1 rounded-full shadow-md`}
    >
      {(score / 10).toFixed(1)}{' '}
      <span className="text-score mt-[2px]">
        <FaStar />
      </span>
    </div>
  );
}

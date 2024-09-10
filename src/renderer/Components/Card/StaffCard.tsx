/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';

type StaffCardPropsType = {
  id?: number;
  role?: string | null;
  name?: {
    userPreferred?: string | null;
    [key: string]: any;
  } | null;
  image?: {
    large?: string | null;
    [key: string]: any;
  } | null;
  [key: string]: any;
};
export default function StaffCard({
  id,
  role,
  name,
  image,
}: StaffCardPropsType) {
  return (
    <div className="flex w-full gap-4 border-background-main border shadow-md rounded-md overflow-hidden">
      <Link
        to={`/staff/${id}`}
        className=" overflow-hidden relative w-28 bg-cover shrink-0"
        style={{
          backgroundImage: `url(${image?.large})`,
          aspectRatio: '2/3',
        }}
      />
      <div className=" py-1 flex flex-col gap-2 w-full">
        <Link
          to={`/staff/${id}`}
          className=" hover:text-primary line-clamp-3 w-full"
        >
          {name?.userPreferred}
        </Link>
        <span className="text-text-light line-clamp-3 w-full">{role}</span>
      </div>
    </div>
  );
}

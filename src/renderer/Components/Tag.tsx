import React from 'react';
import { Link } from 'react-router-dom';

export default function Tag({
  tag,
}: {
  tag: {
    name: string;
    rank?: number | null;
    [key: string]: any;
  } | null;
}) {
  return (
    <Link
      key={tag?.name}
      className="rounded-full border border-primary/30 h-fit px-3 shadow-md text-text-light font-light"
      to={`/anime/tag/${tag?.name}`}
    >
      {tag?.name} {tag?.rank}%
    </Link>
  );
}

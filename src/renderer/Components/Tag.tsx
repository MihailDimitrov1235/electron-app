import { MediaType } from '@graphql/generated/types-and-hooks';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Tag({
  tag,
  mediaType,
}: {
  tag: {
    name: string;
    rank?: number | null;
    [key: string]: any;
  } | null;
  mediaType: MediaType;
}) {
  return (
    <Link
      key={tag?.name}
      className="rounded-full border border-primary/30 h-fit px-3 shadow-md text-text-light font-light"
      to={`/search/${mediaType.toLowerCase()}/?tags=${tag?.name}`}
    >
      {tag?.name} {tag?.rank}%
    </Link>
  );
}

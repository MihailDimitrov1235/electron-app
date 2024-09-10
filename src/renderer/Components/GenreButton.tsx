import { MediaType } from '@graphql/generated/types-and-hooks';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GenreButton({
  genre,
  mediaType,
}: {
  genre: string | null;
  mediaType: MediaType;
}) {
  return (
    <Link
      to={`/search/${mediaType.toLowerCase()}/?genres=${genre}`}
      className="bg-primary text-primary-background px-2 py-1 rounded-md"
    >
      {genre}
    </Link>
  );
}

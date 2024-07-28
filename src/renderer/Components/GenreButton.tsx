import React from 'react';
import { Link } from 'react-router-dom';

export default function GenreButton({ genre }: { genre: string | null }) {
  return (
    <Link
      to={`/anime/genre/${genre}`}
      className="bg-primary text-primary-background px-2 py-1 rounded-md"
    >
      {genre}
    </Link>
  );
}

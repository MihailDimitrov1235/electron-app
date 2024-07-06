import React from 'react';
import AnimeCard, { TStatus } from '../../Components/Card/AnimeCard';

const pr = {
  id: 166531,
  score: 9.2,
  coverImage:
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166531-dAL5MsqDHUkj.jpg',
  title: 'Oshi no Ko Season 2',
  episodes: {
    watched: 2,
    released: 13,
    planned: 13,
  },
  status: 'RELEASING' as TStatus,
  size: 3,
};

export default function AnimeHome() {
  return (
    <AnimeCard
      id={pr.id}
      title={pr.title}
      coverImage={pr.coverImage}
      score={pr.score}
      episodes={pr.episodes}
      status={pr.status as TStatus}
      size={3}
    />
  );
}

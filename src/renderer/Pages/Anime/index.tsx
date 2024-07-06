import React from 'react';
import { useQuery } from '@apollo/client';
import AnimeCard, { TStatus } from '../../Components/Card/AnimeCard';
import {
  GET_SEASONAL_ANIME,
  SeasonalAnimeData,
} from '../../graphql/queries/animeQueries';

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
  const { loading, error, data } =
    useQuery<SeasonalAnimeData>(GET_SEASONAL_ANIME);
  console.log(data);
  if (!data || !data.Page || !data.Page.media) {
    return <p>No data available</p>;
  }
  return (
    <div className="flex gap-6 overflow-x-scroll">
      {data.Page.media.map((anime) => (
        <AnimeCard
          id={anime.id}
          title={anime.title.english}
          coverImage={anime.coverImage.extraLarge}
          score={anime.meanScore}
          episodes={{
            watched: anime.episodes,
            released: anime.episodes,
            planned: anime.episodes,
          }}
          status={anime.status as TStatus}
        />
      ))}
    </div>
  );
}

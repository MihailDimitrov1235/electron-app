/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useQuery } from '@apollo/client';
import AnimeCard, { TStatus } from '../../Components/Card/AnimeCard';
import {
  GET_SEASONAL_ANIME,
  SeasonalAnimeData,
} from '../../graphql/queries/animeQueries';
import Carousel from '../../Components/Anime/Carousel';

export default function AnimeHome() {
  const { loading, error, data } =
    useQuery<SeasonalAnimeData>(GET_SEASONAL_ANIME);
  if (!data || !data.Page || !data.Page.media) {
    return <p>No data available</p>;
  }
  return (
    <>
      <div className="w-full">
        <Carousel data={data} />
      </div>
      <div className="mx-10">
        <div className=" text-xl">Trending</div>
        <div className="flex gap-6 overflow-x-scroll ">
          {data.Page.media.map((anime, index) => (
            <AnimeCard
              key={index}
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
      </div>
    </>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useQuery } from '@apollo/client';
import AnimeCard from '../../Components/Anime/AnimeCard';
import {
  GET_SEASONAL_ANIME,
  SeasonalAnimeData,
} from '../../graphql/queries/animeQueries';
import Carousel from '../../Components/Anime/Carousel';

export default function AnimeHome() {
  const { loading, error, data } =
    useQuery<SeasonalAnimeData>(GET_SEASONAL_ANIME);
  if (error) {
    return <p>No data available</p>;
  }
  if (loading || !data || !data.Page || !data.Page.media) {
    return <p>loading</p>;
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
            <AnimeCard key={index} {...anime} />
          ))}
        </div>
      </div>
    </>
  );
}

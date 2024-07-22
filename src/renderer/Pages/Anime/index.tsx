/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import AnimeCard from '../../Components/Anime/AnimeCard';
import { useGet_Seasonal_AnimeQuery } from '../../graphql/generated/operations';
import Carousel from '../../Components/Anime/Carousel';

export default function AnimeHome() {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();

  let season;
  if (month >= 0 && month <= 2) {
    season = 'WINTER';
  } else if (month >= 3 && month <= 5) {
    season = 'SPRING';
  } else if (month >= 6 && month <= 8) {
    season = 'SUMMER';
  } else {
    season = 'FALL';
  }

  const { loading, error, data } = useGet_Seasonal_AnimeQuery({
    variables: { season, year },
  });
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

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import MediaCard from '@Components/Media/MediaCard';
import { useGetSeasonalMediaQuery } from '@graphql/generated/operations';
import Carousel from '@Components/Media/Carousel';

export default function MediaHome({
  mediaType,
}: {
  mediaType: 'ANIME' | 'MANGA';
}) {
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

  const { loading, error, data } = useGetSeasonalMediaQuery({
    variables: { season, year, mediaType },
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
        <div className="flex gap-6 overflow-x-scroll pb-2">
          {data.Page.media.map((anime, index) => (
            <MediaCard key={index} {...anime} />
          ))}
        </div>
      </div>
    </>
  );
}

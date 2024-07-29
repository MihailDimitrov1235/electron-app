/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import MediaCard from '@Components/Media/MediaCard';
import { useGetSeasonalMediaQuery } from '@graphql/generated/types-and-hooks';
import Carousel from '@Components/Media/Carousel';
import { MediaSeason, MediaType } from '@graphql/generated/types-and-hooks';

export default function MediaHome({ mediaType }: { mediaType: MediaType }) {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();

  let season;
  if (month >= 0 && month <= 2) {
    season = MediaSeason.Winter;
  } else if (month >= 3 && month <= 5) {
    season = MediaSeason.Spring;
  } else if (month >= 6 && month <= 8) {
    season = MediaSeason.Summer;
  } else {
    season = MediaSeason.Fall;
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

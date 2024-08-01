/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { AnimeCarousel, MangaCarousel } from '@Components/Media/Carousel';
import { MediaSort, MediaType } from '@graphql/generated/types-and-hooks';
import MediaDisplay from '@Components/Media/MediaDisplay';

export default function MediaHome({ mediaType }: { mediaType: MediaType }) {
  return (
    <>
      <div className="w-full">
        {mediaType === MediaType.Anime ? <AnimeCarousel /> : <MangaCarousel />}
      </div>
      <div className="flex flex-col gap-8 mx-10">
        <MediaDisplay
          title="Trending"
          mediaType={mediaType}
          withCheckbox
          sort={[MediaSort.TrendingDesc]}
        />
        <MediaDisplay
          title="Highest rated"
          mediaType={mediaType}
          withCheckbox
          sort={[MediaSort.ScoreDesc]}
        />
        <MediaDisplay
          title="Most Popular"
          mediaType={mediaType}
          withCheckbox
          sort={[MediaSort.PopularityDesc]}
        />
      </div>
    </>
  );
}

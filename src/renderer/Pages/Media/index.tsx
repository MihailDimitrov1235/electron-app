/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import Carousel from '@Components/Media/Carousel';
import {
  GetMediaQuery,
  MediaSeason,
  MediaSort,
  MediaType,
  useGetAnimeHomePageQuery,
  useGetMangaHomePageQuery,
} from '@graphql/generated/types-and-hooks';
import MediaDisplay from '@Components/Media/MediaDisplay';

function AnimeHome() {
  const now = new Date();
  const month = now.getMonth();
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
  const AnimeHomeQuery = useGetAnimeHomePageQuery({
    variables: { year, season },
  });
  if (!AnimeHomeQuery.data?.Carousel) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div className="w-full">
        <Carousel
          data={AnimeHomeQuery.data.Carousel as GetMediaQuery['Page']}
        />
      </div>
      <div className="flex flex-col gap-8 mx-10">
        <MediaDisplay
          data={AnimeHomeQuery.data.Trending as GetMediaQuery['Page']}
          title="Trending"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.TrendingDesc]}
        />
        <MediaDisplay
          data={AnimeHomeQuery.data.HighestRated as GetMediaQuery['Page']}
          title="Highest rated"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.ScoreDesc]}
        />
        <MediaDisplay
          data={AnimeHomeQuery.data.Popular as GetMediaQuery['Page']}
          title="Most Popular"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.PopularityDesc]}
        />
      </div>
    </>
  );
}

function MangaHome() {
  const MangaHomeQuery = useGetMangaHomePageQuery();
  if (!MangaHomeQuery.data?.Carousel) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div className="w-full">
        <Carousel
          data={MangaHomeQuery.data.Carousel as GetMediaQuery['Page']}
        />
      </div>
      <div className="flex flex-col gap-8 mx-10">
        <MediaDisplay
          data={MangaHomeQuery.data.Trending as GetMediaQuery['Page']}
          title="Trending"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.TrendingDesc]}
        />
        <MediaDisplay
          data={MangaHomeQuery.data.HighestRated as GetMediaQuery['Page']}
          title="Highest rated"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.ScoreDesc]}
        />
        <MediaDisplay
          data={MangaHomeQuery.data.Popular as GetMediaQuery['Page']}
          title="Most Popular"
          mediaType={MediaType.Anime}
          withCheckbox
          sort={[MediaSort.PopularityDesc]}
        />
      </div>
    </>
  );
}

export default function MediaHome({ mediaType }: { mediaType: MediaType }) {
  if (mediaType === MediaType.Anime) {
    return <AnimeHome />;
  }
  return <MangaHome />;
}

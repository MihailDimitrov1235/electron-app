/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetMediaQuery, MediaType } from '@graphql/generated/types-and-hooks';
import DOMPurify from 'dompurify';
// import { enqueueSnackbar } from 'notistack';
import MediaCard from '../Card/MediaCard';
import EpisodesDisplay from './EpisodesDisplay';
import GenreButton from '../GenreButton';
import MediaScore from './MediaScore';

type CarouselProps = {
  data: GetMediaQuery['Page'];
  autoSlideInterval?: number;
};

export default function Carousel({
  data,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const medias = data?.media;
  const mediasLength = medias?.length || 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediasLength);
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + mediasLength) % mediasLength);
  // };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-fit">
      <div className="relative h-[450px] overflow-hidden w-full">
        {medias?.map((media, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute w-full z-10 inset-0 bg-gradient-to-b from-background-main/50 to-background-dark" />
            <img
              src={
                media?.bannerImage
                  ? media.bannerImage
                  : media?.coverImage?.extraLarge || ''
              }
              className="absolute block w-full cover blur-sm select-none"
              alt={`Carousel item ${index + 1}`}
            />
            <div className="absolute flex w-full gap-8 z-20 px-10 top-7">
              <MediaCard
                {...media}
                withTitle={false}
                withEpisodes={false}
                withScore={false}
                size={5}
              />
              <div className="flex w-full flex-col justify-between">
                <div className="flex w-full flex-col gap-6">
                  <div className=" text-4xl font-semibold flex justify-between">
                    <Link
                      to={`/${media?.type}/${media?.id}`}
                      className=" line-clamp-2 text-ellipsis pb-2"
                    >
                      {media?.title?.userPreferred}
                    </Link>
                    {media?.meanScore && <MediaScore score={media.meanScore} />}
                  </div>
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(media?.description || '', {
                        USE_PROFILES: { html: true },
                      }),
                    }}
                    className=" text-md line-clamp-6 text-ellipsis"
                  />
                </div>
                <div className="flex justify-between">
                  <EpisodesDisplay
                    episodes={{
                      watched: media?.mediaListEntry?.progress,
                      nextAiring: media?.nextAiringEpisode?.episode,
                      planned: media?.episodes || media?.chapters,
                    }}
                    className="text-xl"
                  />
                  <div className="flex gap-2">
                    {media?.genres?.map((genre) => (
                      <GenreButton
                        key={genre}
                        genre={genre}
                        mediaType={media.type || MediaType.Anime}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {medias?.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full  ${
              index === currentSlide ? 'bg-primary' : 'bg-primary/50'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      {/* <Button
        variant="default"
        className="absolute inset-y-auto start-0 z-30 flex items-center justify-center px-4 cursor-pointer"
        onClick={prevSlide}
      >
        prev
      </Button>
      <Button
        variant="default"
        className="absolute  end-0 z-30 flex items-center justify-center px-4 cursor-pointer"
        onClick={nextSlide}
      >
        next
      </Button> */}
    </div>
  );
}

// export function AnimeCarousel() {
//   const now = new Date();
//   const month = now.getMonth();
//   const year = now.getFullYear();

//   let season;
//   if (month >= 0 && month <= 2) {
//     season = MediaSeason.Winter;
//   } else if (month >= 3 && month <= 5) {
//     season = MediaSeason.Spring;
//   } else if (month >= 6 && month <= 8) {
//     season = MediaSeason.Summer;
//   } else {
//     season = MediaSeason.Fall;
//   }
//   const { loading, error, data } = useGetMediaQuery({
//     variables: {
//       season,
//       year,
//       mediaType: MediaType.Anime,
//       sort: [MediaSort.PopularityDesc],
//     },
//   });
//   if (error) {
//     enqueueSnackbar({ variant: 'error', message: error.message });
//     return <p>No data available</p>;
//   }
//   if (loading || !data || !data.Page || !data.Page.media) {
//     return <p>loading</p>;
//   }
//   return <Carousel data={data} />;
// }

// export function MangaCarousel() {
//   const { loading, error, data } = useGetMediaQuery({
//     variables: {
//       mediaType: MediaType.Manga,
//       sort: [MediaSort.PopularityDesc],
//       status: MediaStatus.Releasing,
//       onList: false,
//     },
//   });
//   if (error) {
//     enqueueSnackbar({ variant: 'error', message: error.message });
//     return <p>No data available</p>;
//   }
//   if (loading || !data || !data.Page || !data.Page.media) {
//     return <p>loading</p>;
//   }
//   return <Carousel data={data} />;
// }

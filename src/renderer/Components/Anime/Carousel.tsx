/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { SeasonalAnimeData } from '../../graphql/queries/animeQueries';
import AnimeCard from '../Card/AnimeCard';

type CarouselProps = {
  data: SeasonalAnimeData;
  autoSlideInterval?: number;
};

export default function Carousel({
  data,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const animes = data.Page.media;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % animes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + animes.length) % animes.length);
  };

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
        {animes.map((anime, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-background-main/50 to-background-dark" />
            <img
              src={
                anime.bannerImage
                  ? anime.bannerImage
                  : anime.coverImage.extraLarge
              }
              className="absolute block w-full cover blur-sm select-none"
              alt={`Carousel item ${index + 1}`}
            />
            <div className="absolute flex gap-8 z-20 px-10 top-7">
              <AnimeCard
                id={anime.id}
                title={anime.title.english}
                coverImage={anime.coverImage.extraLarge}
                episodes={{
                  watched: anime.episodes,
                  released: anime.episodes,
                  planned: anime.episodes,
                }}
                withTitle={false}
                size={5}
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <div className=" text-4xl font-semibold">
                    {anime.title.english}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                    className=" text-md line-clamp-6 text-ellipsis"
                  />
                </div>
                <div>tet</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {animes.map((_, index) => (
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

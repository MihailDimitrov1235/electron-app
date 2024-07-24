/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useGetAnimeDetailsQuery } from '../../graphql/generated/operations';
import AnimeCard from '../../Components/Anime/AnimeCard';
import TruncatedText from '../../Components/TruncatedText';
import Button from '../../Components/Button';
import CounterInput from '../../Components/CounterInput';

export default function AnimeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useGetAnimeDetailsQuery({
    variables: { mediaId: id },
  });

  const [favorite, setFavorite] = useState<boolean>(false);
  const [watchedEpisodes, setWatchedEpisodes] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);
  useEffect(() => {
    setFavorite(data?.Media?.isFavourite || false);
    setWatchedEpisodes(data?.Media?.mediaListEntry?.progress || 0);
    setUserScore(data?.Media?.mediaListEntry?.score || 0);
  }, [data]);

  const handleFavoriteChange = () => {
    setFavorite(!favorite);
  };

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative w-full">
      {data.Media?.bannerImage && (
        <div
          className="w-full h-[450px] blur-sm absolute z-0 bg-cover"
          style={{
            backgroundImage: `url(${
              data.Media?.bannerImage || data.Media.coverImage?.extraLarge
            })`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-background-light/55 to-background-dark" />
        </div>
      )}
      <div className="relative z-10 p-8 flex gap-8">
        <div className="flex flex-col gap-4">
          <AnimeCard
            {...data.Media}
            withTitle={false}
            withScore={false}
            withLink={false}
            size={5}
          />
          <div className=" flex w-full justify-between gap-4 ">
            <Button variant="gradient" className="flex-1">
              {data.Media?.mediaListEntry?.status || 'Add to list'}
            </Button>
            <Button
              onClick={handleFavoriteChange}
              variant="icon-square"
              className="bg-secondary ring-primary text-primary-background"
            >
              {favorite ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </div>
          <div className=" flex justify-between">
            <div>Progress</div>
            <CounterInput
              count={watchedEpisodes}
              setCount={setWatchedEpisodes}
              min={0}
              max={data.Media?.episodes || 99999}
              digitsAfterDecimal={0}
            />
          </div>
          <div className=" flex justify-between">
            <div>Score</div>
            <CounterInput
              count={userScore}
              setCount={setUserScore}
              min={0}
              max={data.Media?.episodes || 99999}
              digitsAfterDecimal={0}
            />
          </div>
          <Button variant="outline" className="w-full">
            Apply
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-4xl">
              <div className=" line-clamp-2 font-medium pb-1">
                {data.Media?.title?.english}
              </div>
              {data.Media?.meanScore && (
                <div className="flex gap-4 items-start">
                  {(data.Media.meanScore / 10).toFixed(1)}{' '}
                  <span className="text-yellow-400 mt-[2px]">
                    <FaStar />
                  </span>
                </div>
              )}
            </div>
            <div className="text-lg text-text-main">{data.Media?.status}</div>
          </div>

          <div className=" flex justify-end"></div>
        </div>
      </div>

      <div className="px-8">
        <TruncatedText html={data.Media?.description || ''} />
      </div>
    </div>
  );
}

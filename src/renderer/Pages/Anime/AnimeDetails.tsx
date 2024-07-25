/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoPeople } from 'react-icons/io5';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth } from '../../Components/Contexts/AuthContext';
import { useGetAnimeDetailsQuery } from '../../graphql/generated/operations';
import AnimeCard from '../../Components/Anime/AnimeCard';
import TruncatedText from '../../Components/TruncatedText';
import Button from '../../Components/Button';
import CounterInput from '../../Components/CounterInput';
import Tooltip from '../../Components/Tooltip';
import Tag from '../../Components/Tag';
import GenreButton from '../../Components/GenreButton';

export default function AnimeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useGetAnimeDetailsQuery({
    variables: { mediaId: id },
  });
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState<boolean>(false);
  const [watchedEpisodes, setWatchedEpisodes] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);
  useEffect(() => {
    setFavorite(data?.Media?.isFavourite || false);
    setWatchedEpisodes(data?.Media?.mediaListEntry?.progress || 0);
    setUserScore(data?.Media?.mediaListEntry?.score || 0);
  }, [data]);

  const handleFavoriteChange = () => {
    if (isLoggedIn) {
      setFavorite(!favorite);
    } else {
      navigate('/login');
    }
  };

  const handleStatusClick = () => {
    if (isLoggedIn) {
      console.log('to be implemented');
    } else {
      navigate('/login');
    }
  };

  const handleApply = () => {
    if (isLoggedIn) {
      console.log('to be implemented');
    } else {
      navigate('/login');
    }
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
            <Button
              variant="gradient"
              className="flex-1"
              onClick={handleStatusClick}
            >
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
              max={
                data.Media?.episodes ||
                data.Media?.nextAiringEpisode?.episode ||
                99999
              }
              digitsAfterDecimal={0}
            />
          </div>
          <div className=" flex justify-between">
            <div>Score</div>
            <CounterInput
              count={userScore}
              setCount={setUserScore}
              min={0}
              max={
                data.Media?.episodes ||
                data.Media?.nextAiringEpisode?.episode ||
                99999
              }
              digitsAfterDecimal={0}
            />
          </div>
          <Button variant="outline" className="w-full" onClick={handleApply}>
            Apply
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between text-4xl">
                <div className=" line-clamp-2 font-medium pb-1">
                  {data.Media?.title?.userPreferred}
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
              <div className="text-lg text-text-main font-semibold">
                {data.Media?.format} {' - '} {data.Media?.status}
              </div>
            </div>
            <div>
              {data.Media?.nextAiringEpisode
                ? `${data.Media.nextAiringEpisode.episode - 1} / ${
                    data.Media.episodes
                  } Episodes`
                : `${data.Media?.episodes} Episodes`}
              {' - '}
              {data.Media?.duration} Min/Ep
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-end">
              {data.Media?.genres?.map((genre) => (
                <GenreButton key={genre} genre={genre} />
              ))}
            </div>
            <div className=" flex justify-between gap-4">
              <div className="flex flex-wrap gap-2 justify-between">
                {data.Media?.tags?.map((tag) => (
                  <Tag key={tag?.name} tag={tag} />
                ))}
                <div className="flex-1" />
              </div>
              <div className="flex gap-2">
                <Tooltip text="Popularity">
                  <div className="flex flex-col justify-center items-center border border-primary/50 p-2 rounded-md text-xs">
                    <IoPeople size={30} />
                    {data.Media?.popularity}
                  </div>
                </Tooltip>

                <Tooltip text="Favourites">
                  <div className="flex flex-col justify-center items-center border border-primary/50 p-2 rounded-md text-xs">
                    <FaHeart size={30} />
                    {data.Media?.favourites}
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <TruncatedText html={data.Media?.description || ''} />
      </div>
    </div>
  );
}

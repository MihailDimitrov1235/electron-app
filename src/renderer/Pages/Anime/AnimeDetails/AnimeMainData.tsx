/* eslint-disable react/jsx-props-no-spreading */
import MediaCard from '@Components/MediaCard';
import AnimeScore from '@Components/Anime/AnimeScore';
import Button from '@Components/Button';
import { useAuth } from '@Components/Contexts/AuthContext';
import CounterInput from '@Components/CounterInput';
import GenreButton from '@Components/GenreButton';
import Tabs from '@Components/Tabs';
import Tag from '@Components/Tag';
import Tooltip from '@Components/Tooltip';
import { GetAnimeDetailsQuery } from '@graphql/generated/operations';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type AnimeMainDataPropsType = {
  data: GetAnimeDetailsQuery;
  openTab: string;
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  AnimeTabs: string[];
};

export default function AnimeMainData({
  data,
  openTab,
  setOpenTab,
  AnimeTabs,
}: AnimeMainDataPropsType) {
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

  return (
    <div className="relative z-10 p-8 flex gap-8">
      <div className="flex flex-col gap-4">
        <MediaCard
          {...data.Media}
          withTitle={false}
          withEpisodes={false}
          withScore={false}
          withLink={false}
          withNextEpisode
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
            max={10}
            digitsAfterDecimal={1}
          />
        </div>
        <Button variant="outline" className="w-full" onClick={handleApply}>
          Apply
        </Button>
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex justify-between text-4xl">
                <div className=" line-clamp-2 font-medium pb-1">
                  {data.Media?.title?.userPreferred}
                </div>
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
          <div className="flex flex-col gap-3">
            {data.Media?.meanScore && (
              <AnimeScore score={data.Media.meanScore} />
            )}

            <div className="flex flex-col gap-1 items-end">
              <Tooltip text="Popularity" direction="left">
                <div className="flex gap-2 items-center bg-background-dark/30 border border-primary/30 py-1 px-2 rounded-full text-md">
                  {data.Media?.popularity}
                  <span className="text-blue-500">
                    <IoPeople size={20} />
                  </span>
                </div>
              </Tooltip>

              <Tooltip text="Favourites" direction="left">
                <div className="flex gap-2 items-center bg-background-dark/30 border border-primary/30 py-1 px-2 rounded-full text-md">
                  {data.Media?.favourites}
                  <span className="text-secondary/80">
                    <FaHeart size={20} />
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-start">
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
          </div>
          <div className="flex justify-center">
            <Tabs
              tabs={AnimeTabs}
              openTab={openTab}
              setOpenTab={setOpenTab}
              col={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

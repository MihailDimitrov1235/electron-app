/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import MediaCard from '@Components/Card/MediaCard';
import MediaScore from '@Components/Media/MediaScore';
import Button from '@Components/Form/Button';
import { useAuth } from '@Components/Contexts/AuthContext';
import CounterInput from '@Components/Form/CounterInput';
import GenreButton from '@Components/GenreButton';
import Tabs from '@Components/Tabs';
import Tag from '@Components/Tag';
import Tooltip from '@Components/Tooltip';
import {
  GetMediaDetailsQuery,
  MediaListEntryFragment,
  MediaListStatus,
  MediaType,
  useSaveMediaListEntryMutation,
  useToggleFavouritesMutation,
} from '@graphql/generated/types-and-hooks';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import MediaListEntryPopover from './MediaListEntryPopover';

type MediaMainDataPropsType = {
  data: GetMediaDetailsQuery['MediaDetails'];
  setData: React.Dispatch<
    React.SetStateAction<GetMediaDetailsQuery['MediaDetails'] | null>
  >;
  openTab: string;
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  MediaTabs: string[];
};

export default function MediaMainData({
  data,
  setData,
  openTab,
  setOpenTab,
  MediaTabs,
}: MediaMainDataPropsType) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [toggleFavourites, { data: toggleFavouritesData }] =
    useToggleFavouritesMutation();

  const [
    saveMediaListEntry,
    { data: saveMutationData, error: saveMutationError },
  ] = useSaveMediaListEntryMutation();

  if (saveMutationError) {
    enqueueSnackbar({ variant: 'error', message: saveMutationError.message });
  }

  const handleEntryChange = (newEntry: MediaListEntryFragment | null) => {
    setData((prev) => ({
      id: prev?.id || 0,
      isFavourite: prev?.isFavourite || false,
      ...prev,
      mediaListEntry: newEntry,
    }));
  };

  useEffect(() => {
    if (!saveMutationError && saveMutationData?.SaveMediaListEntry) {
      handleEntryChange(saveMutationData.SaveMediaListEntry);
      enqueueSnackbar({ variant: 'success', message: 'Added to list' });
    }
  }, [saveMutationData]);

  useEffect(() => {
    if (toggleFavouritesData) {
      enqueueSnackbar({ variant: 'success', message: 'Updated favourites' });
      setData((prev) => ({
        ...prev,
        id: prev?.id || 1,
        isFavourite: !prev?.isFavourite,
      }));
    }
  }, [toggleFavouritesData]);

  const [progress, setProgress] = useState<number>(0);
  const [progressVolumes, setProgressVolumes] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);
  const [openMediaListEntryPopover, setOpenMediaListEntryPopover] =
    useState(false);

  useEffect(() => {
    setProgress(data?.mediaListEntry?.progress || 0);
    setProgressVolumes(data?.mediaListEntry?.progressVolumes || 0);
    setUserScore(
      data?.mediaListEntry?.score ? data.mediaListEntry.score / 10 : 0,
    );
  }, [data]);

  const handleFavoriteChange = () => {
    if (data?.type === MediaType.Anime) {
      toggleFavourites({ variables: { animeId: data.id } });
    } else if (data?.type === MediaType.Manga) {
      toggleFavourites({ variables: { mangaId: data.id } });
    }
  };

  const handleStatusClick = () => {
    if (isLoggedIn) {
      setOpenMediaListEntryPopover(true);
    } else {
      navigate('/login');
    }
  };

  const handleApply = () => {
    if (isLoggedIn) {
      if (
        progress !== 0 ||
        userScore !== 0 ||
        progressVolumes !== 0 ||
        data?.mediaListEntry
      ) {
        saveMediaListEntry({
          variables: {
            mediaId: data?.id,
            status:
              data?.episodes === progress || data?.chapters === progress
                ? MediaListStatus.Completed
                : MediaListStatus.Current,
            scoreRaw: userScore * 10,
            progress,
            progressVolumes,
            private: false,
            notes: '',
            repeat: 0,
            startedAt: {
              year: new Date().getFullYear(),
              month: new Date().getMonth(),
              day: new Date().getDate(),
            },
            completedAt: null,
          },
        });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="relative z-10 p-8 flex gap-8">
      {data && (
        <MediaListEntryPopover
          open={openMediaListEntryPopover}
          setOpen={setOpenMediaListEntryPopover}
          entry={data?.mediaListEntry || null}
          onChange={handleEntryChange}
          media={{
            id: data.id,
            type: data.type,
            image: data.coverImage?.large,
            title: data.title?.userPreferred,
            episodes: data.episodes,
            chapters: data.chapters,
            volumes: data.volumes,
          }}
        />
      )}

      <div className="flex flex-col gap-4">
        <MediaCard
          {...data}
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
            {data?.mediaListEntry?.status === MediaListStatus.Current
              ? data.type === MediaType.Anime
                ? 'Watching'
                : 'Reading'
              : data?.mediaListEntry?.status || 'Add to list'}
          </Button>
          <Tooltip
            text={
              data?.isFavourite ? 'Remove From Favourites' : 'Add To Favourites'
            }
            direction="right"
          >
            <Button
              onClick={handleFavoriteChange}
              variant="icon-square"
              className="bg-secondary ring-primary text-primary-background"
            >
              {data?.isFavourite ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </Tooltip>
        </div>
        <div className=" flex justify-between">
          <div>{data?.type === MediaType.Anime ? 'Episodes' : 'Chapters'}</div>
          <CounterInput
            count={progress}
            setCount={setProgress}
            min={0}
            max={
              data?.type === MediaType.Anime
                ? data?.episodes || data?.nextAiringEpisode?.episode || 99999
                : data?.chapters || 99999
            }
            digitsAfterDecimal={0}
          />
        </div>
        {data?.type === MediaType.Manga && (
          <div className=" flex justify-between">
            <div>Volumes</div>
            <CounterInput
              count={progressVolumes}
              setCount={setProgressVolumes}
              min={0}
              max={data.volumes || 99999}
              digitsAfterDecimal={0}
            />
          </div>
        )}
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
                  {data?.title?.userPreferred}
                </div>
              </div>
              <div className="text-lg text-text-main font-semibold">
                {data?.format} {' - '} {data?.status}
              </div>
            </div>
            <div>
              {data?.type === 'ANIME' ? (
                <div>
                  {data?.nextAiringEpisode
                    ? `${data.nextAiringEpisode.episode - 1} / ${
                        data.episodes || '~'
                      } Episodes`
                    : `${data?.episodes} Episodes`}
                  {' - '}
                  {data?.duration} Min/Ep
                </div>
              ) : (
                <div>
                  {data?.chapters && <div>{data.chapters} Chapters</div>}{' '}
                  {data?.volumes && <div>{data.volumes} Volumes</div>}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {data?.meanScore && <MediaScore score={data.meanScore} />}

            <div className="flex flex-col gap-1 items-end">
              <Tooltip text="Popularity" direction="left">
                <div className="flex gap-2 items-center bg-background-dark/30 border border-primary/30 py-1 px-2 rounded-full text-md">
                  {data?.popularity}
                  <span className="text-blue-500">
                    <IoPeople size={20} />
                  </span>
                </div>
              </Tooltip>

              <Tooltip text="Favourites" direction="left">
                <div className="flex gap-2 items-center bg-background-dark/30 border border-primary/30 py-1 px-2 rounded-full text-md">
                  {data?.favourites}
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
            {data?.genres?.map((genre) => (
              <GenreButton
                key={genre}
                genre={genre}
                mediaType={data.type || MediaType.Anime}
              />
            ))}
          </div>
          <div className=" flex justify-between gap-4">
            <div className="flex flex-wrap gap-2 justify-between">
              {data?.tags?.map((tag) => (
                <Tag
                  key={tag?.name}
                  tag={tag}
                  mediaType={data.type || MediaType.Anime}
                />
              ))}
              <div className="flex-1" />
            </div>
          </div>
          <div className="flex justify-center">
            <Tabs
              tabs={MediaTabs}
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

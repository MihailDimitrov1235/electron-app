/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import MediaCard from '@Components/Media/MediaCard';
import MediaScore from '@Components/Media/MediaScore';
import Button from '@Components/Button';
import { useAuth } from '@Components/Contexts/AuthContext';
import CounterInput from '@Components/CounterInput';
import GenreButton from '@Components/GenreButton';
import Tabs from '@Components/Tabs';
import Tag from '@Components/Tag';
import Tooltip from '@Components/Tooltip';
import {
  GetMediaDetailsQuery,
  MediaListStatus,
  MediaType,
  useSaveMediaListEntryMutation,
  useToggleFavouriteAnimeMutation,
  useToggleFavouriteMangaMutation,
  useUpdateMediaListEntriesMutation,
} from '@graphql/generated/types-and-hooks';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import changeMediaListEntry from '@Utils/changeMediaListEntry';
import MediaListEntryPopover from './MediaListEntryPopover';

type MediaMainDataPropsType = {
  data: GetMediaDetailsQuery;
  setData: React.Dispatch<React.SetStateAction<GetMediaDetailsQuery | null>>;
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

  const [toggleFavouriteAnime, { data: toggleFavouriteAnimeData }] =
    useToggleFavouriteAnimeMutation();
  const [toggleFavouriteManga, { data: toggleFavouriteMangaData }] =
    useToggleFavouriteMangaMutation();

  const [
    saveMediaListEntry,
    { data: saveMutationData, error: saveMutationError },
  ] = useSaveMediaListEntryMutation();
  const [
    updateMediaListEntries,
    { data: updateMutationData, error: updateMutationError },
  ] = useUpdateMediaListEntriesMutation();

  useEffect(() => {
    if (!saveMutationError && saveMutationData?.SaveMediaListEntry) {
      changeMediaListEntry({
        setData,
        mediaListEntry: saveMutationData.SaveMediaListEntry,
      });
      console.log('snackbar');
    }
  }, [saveMutationData]);
  useEffect(() => {
    if (!updateMutationError && updateMutationData?.UpdateMediaListEntries) {
      changeMediaListEntry({
        setData,
        mediaListEntry: updateMutationData.UpdateMediaListEntries[0],
      });
      console.log('snackbar');
    }
  }, [updateMutationData]);

  useEffect(() => {
    const handleToggleSuccess = () => {
      setData((prev) => ({
        ...prev,
        Media: {
          ...prev?.Media,
          id: prev?.Media?.id || 1,
          isFavourite: !prev?.Media?.isFavourite,
        },
      }));
    };

    if (toggleFavouriteMangaData) {
      handleToggleSuccess();
    } else if (toggleFavouriteAnimeData) {
      handleToggleSuccess();
    }
  }, [toggleFavouriteMangaData, toggleFavouriteAnimeData]);

  const [progress, setProgress] = useState<number>(0);
  const [progressVolumes, setProgressVolumes] = useState<number>(0);
  const [userScore, setUserScore] = useState<number>(0);
  const [openMediaListEntryPopover, setOpenMediaListEntryPopover] =
    useState(false);

  useEffect(() => {
    setProgress(data?.Media?.mediaListEntry?.progress || 0);
    setProgressVolumes(data.Media?.mediaListEntry?.progressVolumes || 0);
    setUserScore(
      data?.Media?.mediaListEntry?.score
        ? data.Media.mediaListEntry.score / 10
        : 0,
    );
  }, [data]);

  const handleFavoriteChange = () => {
    if (data.Media?.type === MediaType.Anime) {
      toggleFavouriteAnime({ variables: { animeId: data.Media.id } });
    } else if (data.Media?.type === MediaType.Manga) {
      toggleFavouriteManga({ variables: { mangaId: data.Media.id } });
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
      if (progress !== 0 || userScore !== 0 || progressVolumes !== 0) {
        if (data.Media?.mediaListEntry) {
          updateMediaListEntries({
            variables: {
              ids: [data.Media.mediaListEntry.id],
              status:
                data.Media?.episodes === progress ||
                data.Media?.chapters === progress
                  ? MediaListStatus.Completed
                  : data.Media.mediaListEntry.status,
              scoreRaw: userScore * 10,
              progress,
              progressVolumes,
              private: data.Media.mediaListEntry.private,
              notes: data.Media.mediaListEntry.notes,
              repeat: data.Media.mediaListEntry.repeat,
              startedAt: {
                year: data.Media.mediaListEntry.startedAt?.year,
                month: data.Media.mediaListEntry.startedAt?.month,
                day: data.Media.mediaListEntry.startedAt?.day,
              },
              completedAt: {
                year: data.Media.mediaListEntry.completedAt?.year,
                month: data.Media.mediaListEntry.completedAt?.month,
                day: data.Media.mediaListEntry.completedAt?.day,
              },
            },
          });
        } else {
          saveMediaListEntry({
            variables: {
              mediaId: data.Media?.id,
              status:
                data.Media?.episodes === progress ||
                data.Media?.chapters === progress
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
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="relative z-10 p-8 flex gap-8">
      <MediaListEntryPopover
        open={openMediaListEntryPopover}
        setOpen={setOpenMediaListEntryPopover}
        data={data}
        setData={setData}
      />
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
            {data.Media?.mediaListEntry?.status === MediaListStatus.Current
              ? data.Media.type === MediaType.Anime
                ? 'Watching'
                : 'Reading'
              : data.Media?.mediaListEntry?.status || 'Add to list'}
          </Button>
          <Tooltip
            text={
              data.Media?.isFavourite
                ? 'Remove From Favourites'
                : 'Add To Favourites'
            }
            direction="right"
          >
            <Button
              onClick={handleFavoriteChange}
              variant="icon-square"
              className="bg-secondary ring-primary text-primary-background"
            >
              {data.Media?.isFavourite ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </Tooltip>
        </div>
        <div className=" flex justify-between">
          <div>
            {data.Media?.type === MediaType.Anime ? 'Episode' : 'Chapter'}{' '}
            Progress
          </div>
          <CounterInput
            count={progress}
            setCount={setProgress}
            min={0}
            max={
              data.Media?.type === MediaType.Anime
                ? data.Media?.episodes ||
                  data.Media?.nextAiringEpisode?.episode ||
                  99999
                : data.Media?.chapters || 99999
            }
            digitsAfterDecimal={0}
          />
        </div>
        {data.Media?.type === MediaType.Manga && (
          <div className=" flex justify-between">
            <div>Volume Progress</div>
            <CounterInput
              count={progressVolumes}
              setCount={setProgressVolumes}
              min={0}
              max={data.Media.volumes || 99999}
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
                  {data.Media?.title?.userPreferred}
                </div>
              </div>
              <div className="text-lg text-text-main font-semibold">
                {data.Media?.format} {' - '} {data.Media?.status}
              </div>
            </div>
            <div>
              {data.Media?.type === 'ANIME' ? (
                <div>
                  {data.Media?.nextAiringEpisode
                    ? `${data.Media.nextAiringEpisode.episode - 1} / ${
                        data.Media.episodes || '~'
                      } Episodes`
                    : `${data.Media?.episodes} Episodes`}
                  {' - '}
                  {data.Media?.duration} Min/Ep
                </div>
              ) : (
                <div>
                  {data.Media?.chapters && (
                    <div>{data.Media.chapters} Chapters</div>
                  )}{' '}
                  {data.Media?.volumes && (
                    <div>{data.Media.volumes} Volumes</div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {data.Media?.meanScore && (
              <MediaScore score={data.Media.meanScore} />
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

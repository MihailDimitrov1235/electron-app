/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import Dropdown from '@Components/Form/Dropdown';
import Popover from '@Components/Popover';
import TextField from '@Components/Form/TextField';
import {
  MediaListStatus,
  useSaveMediaListEntryMutation,
  useDeleteMediaListEntryMutation,
  MediaType,
  MediaListEntryFragment,
} from '@graphql/generated/types-and-hooks';
import getDateFromDateType from '@Utils/getDateFromDateType';
import React, { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from '@Components/Form/Button';
import { enqueueSnackbar } from 'notistack';

export type MediaListEntryMediaType = {
  id: number;
  type?: MediaType | null;
  image?: string | null;
  title?: string | null;
  episodes?: number | null;
  chapters?: number | null;
  volumes?: number | null;
};

type MediaListEntryPopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  media: MediaListEntryMediaType | null;
  entry: MediaListEntryFragment | null;
  onChange: (
    newEntry: MediaListEntryFragment | null,
    mediaId: number,
    lists: string[],
  ) => void;
};

export default function MediaListEntryPopover({
  open,
  setOpen,
  media,
  entry,
  onChange,
}: MediaListEntryPopoverPropsType) {
  const [moreOptions, setMoreOptions] = useState(false);
  const [
    saveMediaListEntry,
    { data: saveMutationData, error: saveMutationError },
  ] = useSaveMediaListEntryMutation();
  const [
    deleteMediaListEntry,
    { data: deleteMutationData, error: deleteMutationError },
  ] = useDeleteMediaListEntryMutation();
  const defaultFormData = {
    id: entry?.id || null,
    mediaId: media?.id,
    status: MediaListStatus.Current,
    score: 0,
    progress: 0,
    progressVolumes: 0,
    private: false,
    notes: '',
    repeat: 0,
    startedAt: null,
    completedAt: null,
  };
  const [formData, setFormData] = useState(entry || defaultFormData);
  useEffect(() => {
    setFormData(entry || defaultFormData);
  }, [entry]);

  if (saveMutationError) {
    enqueueSnackbar({ variant: 'error', message: saveMutationError.message });
  }
  if (deleteMutationError) {
    enqueueSnackbar({ variant: 'error', message: deleteMutationError.message });
  }

  const getStatusName = () => {
    switch (formData.status) {
      case MediaListStatus.Current:
        return media?.type === MediaType.Anime ? 'Watching' : 'Reading';
      case MediaListStatus.Completed:
        return 'Completed';
      case MediaListStatus.Paused:
        return 'Paused';
      case MediaListStatus.Dropped:
        return 'Dropped';
      case MediaListStatus.Planning:
        return 'Planning';
      case MediaListStatus.Repeating:
        return media?.type === MediaType.Anime ? 'Rewatching' : 'Rereading';
      default:
        return 'Custom';
    }
  };

  useEffect(() => {
    if (!saveMutationError && saveMutationData?.SaveMediaListEntry) {
      onChange(saveMutationData.SaveMediaListEntry, Number(media?.id), [
        getStatusName(),
      ]);
      enqueueSnackbar({ variant: 'success', message: 'Added to list' });
      setOpen(false);
    }
  }, [saveMutationData]);
  useEffect(() => {
    if (
      !deleteMutationError &&
      deleteMutationData?.DeleteMediaListEntry?.deleted
    ) {
      onChange(null, Number(media?.id), []);
      enqueueSnackbar({ variant: 'success', message: 'Deleted entry' });
      setOpen(false);
    }
  }, [deleteMutationData]);

  const currentKey = media?.type === MediaType.Anime ? 'Watching' : 'Reading';

  const statusDropdownOptions = {
    [currentKey]: MediaListStatus.Current,
    Completed: MediaListStatus.Completed,
    Paused: MediaListStatus.Paused,
    Dropped: MediaListStatus.Dropped,
    Planning: MediaListStatus.Planning,
    Repeating: MediaListStatus.Repeating,
  };

  const handleApply = () => {
    saveMediaListEntry({
      variables: {
        mediaId: media?.id,
        status: formData.status,
        scoreRaw: formData.score || 0,
        progress: formData.progress,
        progressVolumes: formData.progressVolumes || 0,
        private: formData.private,
        notes: formData.notes,
        repeat: formData.repeat,
        startedAt: {
          year: formData.startedAt?.year,
          month: formData.startedAt?.month,
          day: formData.startedAt?.day,
        },
        completedAt: {
          year: formData.completedAt?.year,
          month: formData.completedAt?.month,
          day: formData.completedAt?.day,
        },
      },
    });
  };
  const handleDelete = () => {
    if (entry) {
      deleteMediaListEntry({ variables: { id: entry.id } });
    }
  };

  return (
    <Popover open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-2 z-50 relative p-4 w-[1000px] mx-auto bg-background-dark/70 rounded-md mt-20 shadow-lg">
        <div className=" flex gap-4 ">
          <div
            className="h-[280px] bg-cover rounded-md"
            style={{
              backgroundImage: `url(${media?.image})`,
              aspectRatio: '2/3',
            }}
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between">
              <span className="text-lg">{media?.title}</span>
              <div className="flex gap-4">
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleApply} variant="gradient">
                  Apply
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <div>Status</div>
                  <Dropdown
                    capitalize
                    value={
                      Object.keys(statusDropdownOptions).find(
                        (key) =>
                          statusDropdownOptions[
                            key as keyof typeof statusDropdownOptions
                          ] === formData.status,
                      ) || ''
                    }
                    options={Object.keys(statusDropdownOptions)}
                    onSelect={(option) =>
                      setFormData((prev) => ({
                        ...prev,
                        status:
                          statusDropdownOptions[
                            option as keyof typeof statusDropdownOptions
                          ],
                      }))
                    }
                    className="w-full"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div>Score</div>
                  <TextField
                    title="Score"
                    endElement={<div className="flex ">/ 10</div>}
                    number={{
                      min: 0,
                      max: 10,
                      digitsAfterDecimal: 1,
                    }}
                    value={
                      formData.score ? (formData.score / 10).toString() : '0'
                    }
                    onChange={(val) => {
                      setFormData((prev) => ({
                        ...prev,
                        score: Number(val) * 10,
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <div>
                    {media?.type === MediaType.Anime ? 'Episodes' : 'Chapters'}
                  </div>
                  <TextField
                    title={
                      media?.type === MediaType.Anime ? 'Episodes' : 'Chapters'
                    }
                    endElement={
                      <div className="flex">
                        /{' '}
                        {media?.type === MediaType.Anime
                          ? media.episodes || '~'
                          : media?.chapters || '~'}
                      </div>
                    }
                    number={{
                      min: 0,
                      max: media?.chapters || media?.episodes || 99999,
                      digitsAfterDecimal: 0,
                    }}
                    value={
                      formData.progress ? formData.progress.toString() : '0'
                    }
                    onChange={(val) => {
                      setFormData((prev) => ({
                        ...prev,
                        progress: Number(val),
                      }));
                    }}
                  />
                </div>
                {media?.type === MediaType.Manga && (
                  <div className="flex-1 flex flex-col gap-1">
                    <div>Volumes</div>
                    <TextField
                      title="Volumes"
                      endElement={
                        <div className="flex">/ {media.volumes || '~'}</div>
                      }
                      number={{
                        min: 0,
                        max: media.volumes || 99999,
                        digitsAfterDecimal: 0,
                      }}
                      value={formData.progressVolumes?.toString() || '0'}
                      onChange={(val) => {
                        setFormData((prev) => ({
                          ...prev,
                          progressVolumes: Number(val),
                        }));
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex w-full gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <span>Start date</span>
                  <Datepicker
                    asSingle
                    useRange={false}
                    primaryColor="purple"
                    showShortcuts
                    containerClassName={` bg-background-main rounded-md relative`}
                    inputClassName={` bg-background-main rounded-md p-2 w-full ring-text-main focus:ring-1 outline-0`}
                    value={{
                      startDate: formData.startedAt
                        ? new Date(
                            formData.startedAt.year || new Date().getFullYear(),
                            formData.startedAt.month || new Date().getMonth(),
                            formData.startedAt.day || new Date().getDate(),
                          )
                        : null,
                      endDate: formData.startedAt
                        ? new Date(
                            formData.startedAt.year || new Date().getFullYear(),
                            formData.startedAt.month || new Date().getMonth(),
                            formData.startedAt.day || new Date().getDate(),
                          )
                        : null,
                    }}
                    onChange={(newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        id: prev.id || 0,
                        mediaId: prev.mediaId || 0,
                        startedAt: newValue?.startDate
                          ? getDateFromDateType(newValue.startDate)
                          : null,
                      }));
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <span>End date</span>
                  <Datepicker
                    asSingle
                    useRange={false}
                    primaryColor="purple"
                    showShortcuts
                    containerClassName={` bg-background-main rounded-md relative`}
                    inputClassName={` bg-background-main rounded-md p-2 w-full ring-text-main focus:ring-1 outline-0`}
                    value={{
                      startDate: formData.completedAt
                        ? new Date(
                            formData.completedAt.year ||
                              new Date().getFullYear(),
                            formData.completedAt.month || new Date().getMonth(),
                            formData.completedAt.day || new Date().getDate(),
                          )
                        : null,
                      endDate: formData.completedAt
                        ? new Date(
                            formData.completedAt.year ||
                              new Date().getFullYear(),
                            formData.completedAt.month || new Date().getMonth(),
                            formData.completedAt.day || new Date().getDate(),
                          )
                        : null,
                    }}
                    onChange={(newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        id: prev.id || 0,
                        mediaId: prev.mediaId || 0,
                        completedAt: newValue?.endDate
                          ? getDateFromDateType(newValue.endDate)
                          : null,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid transition-[grid-template-rows] duration-200 ease-in-out mb-2 ${
            moreOptions ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-2 p-[1px]">
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <div>Repeats</div>
                <TextField
                  title="Repeats"
                  endElement={<FaRepeat />}
                  value={formData.repeat?.toString() || '0'}
                  onChange={(newValue) =>
                    setFormData((prev) => ({
                      ...prev,
                      repeat: Number(newValue),
                    }))
                  }
                  number={{ min: 0, max: 99, digitsAfterDecimal: 0 }}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div>Privacy</div>
                <Dropdown
                  className="w-full"
                  options={['Private', 'Public']}
                  value={formData.private ? 'Private' : 'Public'}
                  onSelect={(option) =>
                    setFormData((prev) => ({
                      ...prev,
                      private: option === 'Private',
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div>Notes</div>
              <TextField
                textarea={{ rows: 4 }}
                className="w-full"
                title="Notes"
                value={formData.notes || ''}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: newValue,
                  }))
                }
              />
            </div>
            {entry && (
              <Button
                variant="error"
                className="ml-auto mt-6"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
        <button
          className="w-full text-xl flex justify-center items-center"
          type="button"
          onClick={() => {
            setMoreOptions((prev) => !prev);
          }}
        >
          {moreOptions ? (
            <>
              <span className="text-base mr-4">Less Options</span> <FaAngleUp />
            </>
          ) : (
            <>
              <span className="text-base mr-4">More Options</span>
              <FaAngleDown />
            </>
          )}
        </button>
      </div>
    </Popover>
  );
}

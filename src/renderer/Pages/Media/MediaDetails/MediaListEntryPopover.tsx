/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import Dropdown from '@Components/Dropdown';
import Popover from '@Components/Popover';
import TextField from '@Components/TextField';
import {
  GetMediaDetailsQuery,
  MediaListStatus,
  useSaveMediaListEntryMutation,
  useUpdateMediaListEntriesMutation,
  useDeleteMediaListEntryMutation,
  MediaType,
} from '@graphql/generated/types-and-hooks';
import getDateFromDateType from '@Utils/getDateFromDateType';
import React, { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from '@Components/Button';
import changeMediaListEntry from '@Utils/changeMediaListEntry';
import { enqueueSnackbar } from 'notistack';

type MediaListEntryPopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GetMediaDetailsQuery['MediaDetails'];
  setData: React.Dispatch<
    React.SetStateAction<GetMediaDetailsQuery['MediaDetails'] | null>
  >;
};

export default function MediaListEntryPopover({
  open,
  setOpen,
  data,
  setData,
}: MediaListEntryPopoverPropsType) {
  const [moreOptions, setMoreOptions] = useState(false);
  const [
    saveMediaListEntry,
    { data: saveMutationData, error: saveMutationError },
  ] = useSaveMediaListEntryMutation();
  const [
    updateMediaListEntries,
    { data: updateMutationData, error: updateMutationError },
  ] = useUpdateMediaListEntriesMutation();
  const [
    deleteMediaListEntry,
    { data: deleteMutationData, error: deleteMutationError },
  ] = useDeleteMediaListEntryMutation();
  const defaultFormData = {
    id: data?.mediaListEntry?.id || null,
    mediaId: data?.id,
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
  const [formData, setFormData] = useState(
    data?.mediaListEntry ?? defaultFormData,
  );
  useEffect(() => {
    setFormData(data?.mediaListEntry ?? defaultFormData);
  }, [data]);

  if (saveMutationError) {
    enqueueSnackbar({ variant: 'error', message: saveMutationError.message });
  }
  if (updateMutationError) {
    enqueueSnackbar({ variant: 'error', message: updateMutationError.message });
  }
  if (deleteMutationError) {
    enqueueSnackbar({ variant: 'error', message: deleteMutationError.message });
  }

  useEffect(() => {
    if (!saveMutationError && saveMutationData?.SaveMediaListEntry) {
      changeMediaListEntry({
        setData,
        mediaListEntry: saveMutationData.SaveMediaListEntry,
      });
      enqueueSnackbar({ variant: 'success', message: 'Added to list' });
      setOpen(false);
    }
  }, [saveMutationData]);
  useEffect(() => {
    if (!updateMutationError && updateMutationData?.UpdateMediaListEntries) {
      changeMediaListEntry({
        setData,
        mediaListEntry: updateMutationData.UpdateMediaListEntries[0],
      });
      enqueueSnackbar({ variant: 'success', message: 'Updated entry' });
      setOpen(false);
    }
  }, [updateMutationData]);
  useEffect(() => {
    if (
      !deleteMutationError &&
      deleteMutationData?.DeleteMediaListEntry?.deleted
    ) {
      changeMediaListEntry({
        setData,
        mediaListEntry: null,
      });
      enqueueSnackbar({ variant: 'success', message: 'Deleted entry' });
      setOpen(false);
    }
  }, [deleteMutationData]);

  const currentKey = data?.type === MediaType.Anime ? 'Watching' : 'Reading';

  const statusDropdownOptions = {
    [currentKey]: MediaListStatus.Current,
    Completed: MediaListStatus.Completed,
    Paused: MediaListStatus.Paused,
    Dropped: MediaListStatus.Dropped,
    Planning: MediaListStatus.Planning,
    Repeating: MediaListStatus.Repeating,
  };

  const handleApply = () => {
    if (data?.mediaListEntry) {
      updateMediaListEntries({
        variables: {
          ids: [data.mediaListEntry.id],
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
    } else {
      saveMediaListEntry({
        variables: {
          mediaId: data?.id,
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
    }
  };
  const handleDelete = () => {
    if (data?.mediaListEntry) {
      deleteMediaListEntry({ variables: { id: data.mediaListEntry.id } });
    }
  };

  return (
    <Popover open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-2 z-50 relative p-4 w-[1000px] mx-auto bg-background-dark/70 rounded-md mt-20 shadow-lg">
        <div className=" flex gap-4 ">
          <div
            className="h-[280px] bg-cover rounded-md"
            style={{
              backgroundImage: `url(${data?.coverImage?.extraLarge})`,
              aspectRatio: '2/3',
            }}
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between">
              <span className="text-lg">{data?.title?.userPreferred}</span>
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
                    name={
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
                    {data?.type === MediaType.Anime ? 'Episodes' : 'Chapters'}
                  </div>
                  <TextField
                    title={
                      data?.type === MediaType.Anime ? 'Episodes' : 'Chapters'
                    }
                    endElement={
                      <div className="flex">
                        /{' '}
                        {data?.type === MediaType.Anime
                          ? data?.nextAiringEpisode?.episode
                            ? data.nextAiringEpisode.episode - 1
                            : data.episodes || '~'
                          : data?.chapters}
                      </div>
                    }
                    number={{
                      min: 0,
                      max:
                        data?.chapters ||
                        data?.episodes ||
                        (data?.nextAiringEpisode?.episode || 0) - 1 ||
                        99999,
                      digitsAfterDecimal: 0,
                    }}
                    value={formData.progress?.toString() || '0'}
                    onChange={(val) => {
                      setFormData((prev) => ({
                        ...prev,
                        progress: Number(val),
                      }));
                    }}
                  />
                </div>
                {data?.type === MediaType.Manga && (
                  <div className="flex-1 flex flex-col gap-1">
                    <div>Volumes</div>
                    <TextField
                      title="Volumes"
                      endElement={
                        <div className="flex">/ {data.volumes || '~'}</div>
                      }
                      number={{
                        min: 0,
                        max: data?.volumes || 99999,
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
                  name={formData.private ? 'Private' : 'Public'}
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
            {data?.mediaListEntry && (
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

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
} from '@graphql/generated/types-and-hooks';
import getDateFromDateType from '@Utils/getDateFromDateType';
import React, { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from '@Components/Button';

type MediaListEntryPopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GetMediaDetailsQuery;
  setData: React.Dispatch<React.SetStateAction<GetMediaDetailsQuery | null>>;
};

export default function MediaListEntryPopover({
  open,
  setOpen,
  data,
  setData,
}: MediaListEntryPopoverPropsType) {
  const [moreOptions, setMoreOptions] = useState(false);
  const [saveMediaListEntry, { data: saveMutationData }] =
    useSaveMediaListEntryMutation();
  const [updateMediaListEntries, { data: updateMutationData }] =
    useUpdateMediaListEntriesMutation();
  const [deleteMediaListEntry, { data: deleteMutationData }] =
    useDeleteMediaListEntryMutation();
  const defaultFormData = {
    id: data.Media?.mediaListEntry?.id ?? null,
    mediaId: data.Media?.id,
    status: MediaListStatus.Current,
    score: 0,
    progress: 0,
    private: false,
    notes: '',
    repeat: 0,
    startedAt: null,
    completedAt: null,
  };
  const [formData, setFormData] = useState(
    data.Media?.mediaListEntry ?? defaultFormData,
  );

  function changeMediaListEntry(
    mediaListEntry?: {
      id: number;
      status?: MediaListStatus | null;
      score?: number | null;
      progress?: number | null;
      private?: boolean | null;
      notes?: string | null;
      repeat?: number | null;
      customLists?: any | null;
      startedAt?: {
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      completedAt?: {
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null,
  ) {
    setData((prev) => ({
      ...prev,
      Media: {
        id: prev?.Media?.id ?? 0,
        isFavourite: prev?.Media?.isFavourite ?? false,
        ...prev?.Media,
        mediaListEntry,
      },
    }));
  }
  useEffect(() => {
    if (saveMutationData?.SaveMediaListEntry) {
      changeMediaListEntry(saveMutationData.SaveMediaListEntry);
      console.log('snackbar');
      setOpen(false);
    }
  }, [saveMutationData]);
  useEffect(() => {
    if (updateMutationData?.UpdateMediaListEntries) {
      changeMediaListEntry(updateMutationData.UpdateMediaListEntries[0]);
      console.log('snackbar');
      setOpen(false);
    }
  }, [updateMutationData]);
  useEffect(() => {
    if (deleteMutationData?.DeleteMediaListEntry?.deleted) {
      changeMediaListEntry(null);
      console.log('snackbar');
      setOpen(false);
    }
  }, [deleteMutationData]);

  const statusDropdownOptions = {
    Watching: MediaListStatus.Current,
    Completed: MediaListStatus.Completed,
    Paused: MediaListStatus.Paused,
    Dropped: MediaListStatus.Dropped,
    Planning: MediaListStatus.Planning,
    Repeating: MediaListStatus.Repeating,
  };

  const handleApply = () => {
    if (data.Media?.mediaListEntry) {
      updateMediaListEntries({
        variables: { ids: [data.Media.mediaListEntry.id], ...formData },
      });
    } else {
      saveMediaListEntry({ variables: { ...formData } });
    }
  };
  const handleDelete = () => {
    if (data.Media?.mediaListEntry) {
      deleteMediaListEntry({ variables: { id: data.Media.mediaListEntry.id } });
    }
  };

  return (
    <Popover open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-2 z-50 relative p-4 w-[1000px] mx-auto bg-background-dark/70 rounded-md mt-20 shadow-lg">
        <div className=" flex gap-4 ">
          <div
            className="h-[280px] bg-cover rounded-md"
            style={{
              backgroundImage: `url(${data.Media?.coverImage?.extraLarge})`,
              aspectRatio: '2/3',
            }}
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between">
              <span className="text-lg">
                {data.Media?.title?.userPreferred}
              </span>
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
                      ) ?? ''
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
                    value={formData.score?.toString() ?? '0'}
                    onChange={(val) => {
                      setFormData((prev) => ({
                        ...prev,
                        score: Number(val),
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div>Progress</div>
                <TextField
                  title="Progress"
                  endElement={
                    <div className="flex">
                      /{' '}
                      {data.Media?.chapters ??
                        data.Media?.episodes ??
                        data.Media?.nextAiringEpisode?.episode ??
                        '~'}
                    </div>
                  }
                  number={{
                    min: 0,
                    max:
                      data.Media?.chapters ??
                      data.Media?.episodes ??
                      (data.Media?.nextAiringEpisode?.episode ?? 0) - 1 ??
                      99999,
                    digitsAfterDecimal: 0,
                  }}
                  value={formData.progress?.toString() ?? '0'}
                  onChange={(val) => {
                    setFormData((prev) => ({
                      ...prev,
                      progress: Number(val),
                    }));
                  }}
                />
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
                            formData.startedAt.year ?? new Date().getFullYear(),
                            formData.startedAt.month ?? new Date().getMonth(),
                            formData.startedAt.day ?? new Date().getDate(),
                          )
                        : null,
                      endDate: formData.startedAt
                        ? new Date(
                            formData.startedAt.year ?? new Date().getFullYear(),
                            formData.startedAt.month ?? new Date().getMonth(),
                            formData.startedAt.day ?? new Date().getDate(),
                          )
                        : null,
                    }}
                    onChange={(newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        id: prev.id ?? 0,
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
                            formData.completedAt.year ??
                              new Date().getFullYear(),
                            formData.completedAt.month ?? new Date().getMonth(),
                            formData.completedAt.day ?? new Date().getDate(),
                          )
                        : null,
                      endDate: formData.completedAt
                        ? new Date(
                            formData.completedAt.year ??
                              new Date().getFullYear(),
                            formData.completedAt.month ?? new Date().getMonth(),
                            formData.completedAt.day ?? new Date().getDate(),
                          )
                        : null,
                    }}
                    onChange={(newValue) => {
                      setFormData((prev) => ({
                        ...prev,
                        id: prev.id ?? 0,
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
                  value={formData.repeat?.toString() ?? '0'}
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
                value={formData.notes ?? ''}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: newValue,
                  }))
                }
              />
            </div>
            {data.Media?.mediaListEntry && (
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

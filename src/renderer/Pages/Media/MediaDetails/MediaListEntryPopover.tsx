/* eslint-disable react/require-default-props */
import Dropdown from '@Components/Dropdown';
import Popover from '@Components/Popover';
import TextField from '@Components/TextField';
import { FaStar } from 'react-icons/fa';
import {
  GetMediaDetailsQuery,
  MediaListStatus,
} from '@graphql/generated/types-and-hooks';
import React, { useState } from 'react';

type MediaListEntryPopoverPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GetMediaDetailsQuery;
};

export default function MediaListEntryPopover({
  open,
  setOpen,
  data,
}: MediaListEntryPopoverPropsType) {
  const [formData, setFormData] = useState(
    data.Media?.mediaListEntry || {
      id: data.Media?.id,
      status: MediaListStatus.Current,
      score: 0,
      progress: 0,
      private: false,
      notes: '',
      repeat: 0,
      startedAt: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
      },
    },
  );
  const statusDropdownOptions = {
    Watching: MediaListStatus.Current,
    Completed: MediaListStatus.Completed,
    Paused: MediaListStatus.Paused,
    Dropped: MediaListStatus.Dropped,
    Planning: MediaListStatus.Planning,
    Repeating: MediaListStatus.Repeating,
  };

  return (
    <Popover open={open} setOpen={setOpen}>
      <div className="z-50 relative p-4 w-[1000px] mx-auto bg-background-main/70 rounded-md mt-20 flex gap-4 shadow-lg">
        <div
          className="h-[300px] bg-cover rounded-md"
          style={{
            backgroundImage: `url(${data.Media?.coverImage?.extraLarge})`,
            aspectRatio: '2/3',
          }}
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="text-lg">{data.Media?.title?.userPreferred}</div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
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
              <div className="flex-1">
                <div>Score</div>
                <TextField
                  title="Score"
                  endElement={<div className="flex ">/ 10</div>}
                  number={{
                    min: 0,
                    max: 10,
                    digitsAfterDecimal: 1,
                  }}
                  value={formData.score?.toString() || '0'}
                  onChange={(val) => {
                    setFormData((prev) => ({
                      ...prev,
                      score: Number(val),
                    }));
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div>Progress</div>
              <TextField
                title="Progress"
                endElement={
                  <div className="flex">
                    / {data.Media?.chapters || data.Media?.episodes || 99999}
                  </div>
                }
                number={{
                  min: 0,
                  max: data.Media?.chapters || data.Media?.episodes || 99999,
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
          </div>
        </div>
      </div>
    </Popover>
  );
}

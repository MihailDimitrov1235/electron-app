/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import {
  MediaSeason,
  MediaSort,
  MediaStatus,
  MediaType,
  useGetMediaQuery,
} from '@graphql/generated/types-and-hooks';
import React, { useState } from 'react';
import Checkbox from '@Components/Checkbox';
import MediaCardSkeleton from '@Components/Skeletons/MediaCardSkeleton';
import MediaCard from './MediaCard';

type MediaDisplayProps = {
  title: string;
  withCheckbox?: boolean;
  mediaType: MediaType;
  sort?: [MediaSort];
  status?: MediaStatus;
  season?: MediaSeason;
  year?: number;
};

export default function MediaDisplay({
  title,
  withCheckbox,
  mediaType,
  sort,
  status,
  season,
  year,
}: MediaDisplayProps) {
  const [notOnList, setNotOnList] = useState(!withCheckbox || false);
  const { loading, error, data } = useGetMediaQuery({
    variables: {
      mediaType,
      sort,
      status,
      onList: notOnList ? false : undefined,
      season,
      year,
    },
  });
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return (
      <div className="flex flex-col gap-4">
        <div className=" text-xl flex justify-between">
          <span>{title}</span>
          <Checkbox
            checked={notOnList}
            onCheck={() => setNotOnList((prev) => !prev)}
            label="Not on list"
          />
        </div>
        <div className="flex gap-6 overflow-x-scroll pb-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <MediaCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className=" text-xl flex justify-between">
        <span>{title}</span>
        <Checkbox
          checked={notOnList}
          onCheck={() => setNotOnList((prev) => !prev)}
          label="Not on list"
        />
      </div>
      <div className="flex gap-6 overflow-x-scroll pb-4">
        {data.Page?.media?.map((media) => (
          <MediaCard key={media?.id} {...media} />
        ))}
      </div>
    </div>
  );
}

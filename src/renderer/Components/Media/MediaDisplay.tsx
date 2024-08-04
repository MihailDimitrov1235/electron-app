/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import {
  GetMediaQuery,
  MediaSeason,
  MediaSort,
  MediaStatus,
  MediaType,
  useGetMediaQuery,
} from '@graphql/generated/types-and-hooks';
import React, { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import Checkbox from '@Components/Form/Checkbox';
import MediaCardSkeleton from '@Components/Skeletons/MediaCardSkeleton';
import MediaCard from '../Card/MediaCard';

type MediaDisplayProps = {
  data: GetMediaQuery['Page'];
  title: string;
  withCheckbox?: boolean;
  mediaType: MediaType;
  sort?: [MediaSort];
  status?: MediaStatus;
  season?: MediaSeason;
  year?: number;
};

export default function MediaDisplay({
  data,
  title,
  withCheckbox,
  mediaType,
  sort,
  status,
  season,
  year,
}: MediaDisplayProps) {
  const [notOnList, setNotOnList] = useState(!withCheckbox || false);
  const [displayData, setDisplayData] = useState(data);
  const [shouldFetch, setShouldFetch] = useState(false);
  const getMediaQuery = useGetMediaQuery({
    variables: {
      mediaType,
      sort,
      status,
      onList: notOnList ? false : undefined,
      season,
      year,
    },
    skip: !shouldFetch,
  });

  const handleCheck = () => {
    setNotOnList((prev) => !prev);
    setShouldFetch(true);
  };

  useEffect(() => {
    if (getMediaQuery.data) {
      setDisplayData(getMediaQuery.data.Page);
      setShouldFetch(false);
    }
  }, [getMediaQuery.data]);

  if (getMediaQuery.error) {
    enqueueSnackbar({ variant: 'error', message: getMediaQuery.error.message });
    return <div>error</div>;
  }
  if (getMediaQuery.loading || !displayData) {
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
          onCheck={handleCheck}
          label="Not on list"
        />
      </div>
      <div className="flex gap-6 overflow-x-scroll pb-4">
        {displayData.media?.map((media) => (
          <MediaCard key={media?.id} {...media} />
        ))}
      </div>
    </div>
  );
}

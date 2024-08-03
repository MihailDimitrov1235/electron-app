import {
  GetMediaDetailsQuery,
  MediaListStatus,
} from '@graphql/generated/types-and-hooks';
import React = require('react');

type changeMediaListEntryPropsType = {
  setData: React.Dispatch<
    React.SetStateAction<GetMediaDetailsQuery['MediaDetails'] | null>
  >;
  mediaListEntry?: {
    id: number;
    status?: MediaListStatus | null;
    score?: number | null;
    progress?: number | null;
    progressVolumes?: number | null;
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
  } | null;
};

export default function changeMediaListEntry({
  setData,
  mediaListEntry,
}: changeMediaListEntryPropsType) {
  setData((prev) => ({
    id: prev?.id || 0,
    isFavourite: prev?.isFavourite || false,
    ...prev,
    mediaListEntry,
  }));
}

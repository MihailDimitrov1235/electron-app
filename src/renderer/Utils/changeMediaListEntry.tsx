import {
  GetMediaDetailsQuery,
  MediaListStatus,
} from '@graphql/generated/types-and-hooks';
import React = require('react');

type changeMediaListEntryPropsType = {
  setData: React.Dispatch<React.SetStateAction<GetMediaDetailsQuery | null>>;
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
    ...prev,
    Media: {
      id: prev?.Media?.id || 0,
      isFavourite: prev?.Media?.isFavourite || false,
      ...prev?.Media,
      mediaListEntry,
    },
  }));
}

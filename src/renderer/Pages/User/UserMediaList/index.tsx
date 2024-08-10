/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import Tabs from '@Components/Tabs';
import {
  GetUserMediaListQuery,
  MediaListSort,
  MediaListStatus,
  MediaType,
  useGetUserMediaListQuery,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import MediaListTable from './MediaListTable';
import TextField from '@Components/Form/TextField';

type MediaListEntryType = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetUserMediaListQuery['MediaListCollection']>['lists']
    >[number]
  >['entries']
>[number];

type FilterFunction = (entry: MediaListEntryType, value: any) => boolean;
type SortFunction = (a: MediaListEntryType, b: MediaListEntryType) => number;

type MediaListFiltersType = {
  sort: MediaListSort;
  status: MediaListStatus | 'All';
  search: string;
};

export default function UserMediaList({
  userId,
  mediaType,
}: {
  userId: number;
  mediaType: MediaType;
}) {
  const defaultMediaListFilters: MediaListFiltersType = {
    sort: MediaListSort.ScoreDesc,
    status: 'All',
    search: '',
  };
  const SORT_FUNCTIONS: Record<string, SortFunction> = {
    [MediaListSort.ScoreDesc]: (a, b) => (b?.score || 0) - (a?.score || 0),
    [MediaListSort.Score]: (a, b) => (a?.score || 0) - (b?.score || 0),
    [MediaListSort.ProgressDesc]: (a, b) =>
      (b?.progress || 0) - (a?.progress || 0),
    [MediaListSort.Progress]: (a, b) => (a?.progress || 0) - (b?.progress || 0),
    Title: (a, b) =>
      (a?.media?.title?.userPreferred || '').localeCompare(
        b?.media?.title?.userPreferred || '',
      ),
    // Add more sort functions as needed
  };

  const FILTER_FUNCTIONS: Record<keyof MediaListFiltersType, FilterFunction> = {
    status: (
      entry: MediaListEntryType,
      value: MediaListFiltersType['status'],
    ) => value === 'All' || entry?.status === value,
    search: (
      entry: MediaListEntryType,
      value: MediaListFiltersType['search'],
    ) =>
      !value ||
      entry?.media?.title?.userPreferred
        ?.toLowerCase()
        .includes(value.toLowerCase()) ||
      false,
    sort: () => true,
  };
  const [mediaListFilters, setMediaListFilters] = useState(
    defaultMediaListFilters,
  );
  const { data, loading, error } = useGetUserMediaListQuery({
    variables: {
      userId,
      mediaType,
    },
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar({ variant: 'error', message: error.message });
    }
  }, [error]);

  const filteredAndSortedLists = useMemo(() => {
    if (!data?.MediaListCollection?.lists) return [];

    return data.MediaListCollection.lists
      .map((list) => {
        if (!list) return null;

        let filteredEntries = list.entries ? [...list.entries] : [];

        (
          Object.keys(FILTER_FUNCTIONS) as Array<keyof MediaListFiltersType>
        ).forEach((key) => {
          if (mediaListFilters[key] !== undefined) {
            filteredEntries = filteredEntries.filter((entry) =>
              FILTER_FUNCTIONS[key](entry, mediaListFilters[key]),
            );
          }
        });

        filteredEntries.sort((a, b) => {
          if (Object.keys(SORT_FUNCTIONS).includes(mediaListFilters.sort)) {
            const primarySort = SORT_FUNCTIONS[mediaListFilters.sort](a, b);
            if (primarySort !== 0) return primarySort;
            return SORT_FUNCTIONS.Title(a, b);
          }
          return SORT_FUNCTIONS.Title(a, b);
        });

        return {
          ...list,
          entries: filteredEntries,
        };
      })
      .filter(Boolean);
  }, [data?.MediaListCollection?.lists, mediaListFilters]);

  const handleFilterChange = (
    key: keyof MediaListFiltersType,
    value: MediaListFiltersType[typeof key],
  ) => {
    setMediaListFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (loading && !data) {
    return <div>loading</div>;
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 ">
        <TextField
          title="Search"
          value={mediaListFilters.search}
          onChange={(newValue) =>
            setMediaListFilters((prev) => ({ ...prev, search: newValue }))
          }
        />
        <Tabs
          tabs={['All', ...Object.values(MediaListStatus)]}
          openTab={mediaListFilters.status}
          setOpenTab={(value) => handleFilterChange('status', value)}
          col
          small
          capitalize
        />
      </div>
      <div className="flex flex-col w-full gap-16">
        {filteredAndSortedLists.map((list) =>
          list?.entries.length && list.entries.length > 0 ? (
            <div key={list?.name} className="w-full flex flex-col gap-2">
              <span className="text-lg">{list?.name}</span>
              <MediaListTable
                list={list}
                onSort={(sort) => handleFilterChange('sort', sort)}
                currentSort={mediaListFilters.sort}
              />
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

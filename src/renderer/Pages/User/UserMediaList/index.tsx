/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useAuth } from '@Components/Contexts/AuthContext';
import Tabs from '@Components/Tabs';
import {
  GetUserMediaListQuery,
  MediaListEntryFragment,
  MediaListSort,
  MediaListStatus,
  MediaType,
  useGetUserMediaListQuery,
} from '@graphql/generated/types-and-hooks';
import TextField from '@Components/Form/TextField';
import MediaListEntryPopover, {
  type MediaListEntryMediaType,
} from '@Pages/Media/MediaDetails/MediaListEntryPopover';
import { enqueueSnackbar } from 'notistack';
import Dropdown from '@Components/Form/Dropdown';
// import Autocomplete from '@Components/Form/Autocomplete';
import MediaListTable from './MediaListTable';

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
  const { userId: authUserId, isLoggedIn } = useAuth();

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

    [MediaListSort.UpdatedTime]: (a, b) =>
      (b?.updatedAt || 0) - (a?.updatedAt || 0),
    [MediaListSort.UpdatedTimeDesc]: (a, b) =>
      (a?.updatedAt || 0) - (b?.updatedAt || 0),

    Title: (a, b) =>
      (a?.media?.title?.userPreferred || '').localeCompare(
        b?.media?.title?.userPreferred || '',
      ),
    // Add more sort functions as needed
  };

  const FILTER_FUNCTIONS: Record<keyof MediaListFiltersType, FilterFunction> = {
    status: () => true,
    search: (
      entry: MediaListEntryType,
      value: MediaListFiltersType['search'],
    ) =>
      !value ||
      (entry?.media?.title?.userPreferred &&
        entry.media.title.userPreferred
          .toLowerCase()
          .includes(value.toLowerCase())) ||
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

  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (data) {
      setDisplayData(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar({ variant: 'error', message: error.message });
    }
  }, [error]);

  const orderedLists = useMemo(() => {
    if (!displayData?.MediaListCollection?.lists) return [];

    const userSectionOrder =
      displayData.MediaListCollection.user?.mediaListOptions?.[
        mediaType === MediaType.Anime ? 'animeList' : 'mangaList'
      ]?.sectionOrder || [];

    // Create a map of list names to their original versions
    const listMap = new Map(
      displayData.MediaListCollection.lists.map((list) => [list?.name, list]),
    );

    // Create the final ordered array
    const ordered: NonNullable<
      GetUserMediaListQuery['MediaListCollection']
    >['lists'] = [];

    // First, add lists in the order specified by the user
    userSectionOrder.forEach((sectionName) => {
      const list = listMap.get(sectionName);
      if (list) {
        ordered.push(list);
        listMap.delete(sectionName);
      }
    });

    // Then, add any remaining lists that weren't in the user's order
    listMap.forEach((list) => {
      ordered.push(list);
    });

    return ordered;
  }, [displayData, mediaType]);

  const filteredAndSortedLists = useMemo(() => {
    return orderedLists
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

        // Sort entries
        filteredEntries.sort((a, b) => {
          const primarySort = SORT_FUNCTIONS[mediaListFilters.sort](a, b);
          if (primarySort !== 0) return primarySort;
          // Secondary sort by title if primary sort is equal
          return SORT_FUNCTIONS.Title(a, b);
        });

        return {
          ...list,
          entries: filteredEntries,
        };
      })
      .filter(Boolean);
  }, [orderedLists, mediaListFilters]);

  const handleFilterChange = (
    key: keyof MediaListFiltersType,
    value: MediaListFiltersType[typeof key],
  ) => {
    setMediaListFilters((prev) => ({ ...prev, [key]: value }));
  };

  const listNames = useMemo(() => {
    if (displayData?.MediaListCollection?.lists) {
      const names = displayData?.MediaListCollection?.lists?.map(
        (list) => list?.name,
      );
      return ['All', ...names];
    }
    return [];
  }, [displayData]);

  const [selectedList, setSelectedList] = useState('All');
  type PopoverState = {
    isOpen: boolean;
    entry: MediaListEntryFragment | null;
    media: MediaListEntryMediaType | null;
  };
  const [popoverState, setPopoverState] = useState<PopoverState>({
    isOpen: false,
    entry: null,
    media: null,
  });

  const handleOpenPopover = (
    entry: MediaListEntryFragment,
    media: MediaListEntryMediaType,
  ) => {
    setPopoverState({
      isOpen: true,
      entry,
      media,
    });
  };

  const handleClosePopover = () => {
    setPopoverState({
      isOpen: false,
      entry: null,
      media: null,
    });
  };

  const handleEntryChange = useCallback(
    (
      newEntry: MediaListEntryType,
      mediaId: number,
      listsWithEntry: string[],
    ) => {
      setDisplayData((prev) => {
        if (!prev?.MediaListCollection?.lists) return prev;

        const updatedLists = prev.MediaListCollection.lists.map((list) => {
          if (!list) return list;

          // Remove the entry from all lists
          let updatedEntries =
            list.entries?.filter((entry) => entry?.media?.id !== mediaId) || [];

          // Add the entry to the appropriate list
          if (listsWithEntry.includes(list.name || '')) {
            updatedEntries = [...updatedEntries, newEntry];
          }

          return {
            ...list,
            entries: updatedEntries,
          };
        });

        return {
          ...prev,
          MediaListCollection: {
            ...prev.MediaListCollection,
            lists: updatedLists,
          },
        };
      });
    },
    [setDisplayData],
  );

  if (loading && !displayData) {
    return <div>loading</div>;
  }

  return (
    <div className="flex gap-4">
      {popoverState.entry && (
        <MediaListEntryPopover
          open={popoverState.isOpen}
          setOpen={handleClosePopover}
          entry={popoverState.entry}
          media={popoverState.media}
          onChange={handleEntryChange}
        />
      )}

      <div className="flex flex-col gap-4 ">
        <TextField
          title="Search"
          value={mediaListFilters.search}
          onChange={(newValue) =>
            setMediaListFilters((prev) => ({ ...prev, search: newValue }))
          }
        />
        <Tabs
          tabs={listNames as string[]}
          openTab={selectedList}
          setOpenTab={(value) => setSelectedList(value)}
          col
          small
          capitalize
        />
        <Dropdown
          value="Sort"
          options={[
            MediaListSort.Score,
            MediaListSort.ScoreDesc,
            MediaListSort.Progress,
            MediaListSort.ProgressDesc,
            MediaListSort.UpdatedTime,
            MediaListSort.UpdatedTimeDesc,
          ]}
          onSelect={(newValue) =>
            setMediaListFilters((prev) => ({
              ...prev,
              sort: newValue as MediaListSort,
            }))
          }
          className="w-full"
          capitalize
        />
        {/* <Autocomplete options={} /> */}
      </div>
      <div className="flex flex-col w-full gap-16">
        {filteredAndSortedLists
          .filter(
            (list) =>
              list && (selectedList === 'All' || selectedList === list.name),
          )
          .map((list) => (
            <div key={list?.name} className={`w-full flex flex-col gap-2 `}>
              <span className="text-lg">{list?.name}</span>
              <MediaListTable
                list={list}
                onSort={(sort) => handleFilterChange('sort', sort)}
                currentSort={mediaListFilters.sort}
                isUser={isLoggedIn && userId === authUserId}
                handleEdit={handleOpenPopover}
                selectedList={selectedList}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

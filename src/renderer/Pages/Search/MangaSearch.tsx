/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from '@Components/Form/Autocomplete';
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  arrayFromRange,
  MangaFormats,
  MediaGenres,
  MediaSorts,
  MediaStatuses,
  MediaTags,
} from '@Utils/constants';
import { CgDetailsMore } from 'react-icons/cg';
import {
  MediaFormat,
  MediaSort,
  MediaStatus,
  MediaType,
  SearchMediaQuery,
  useSearchMediaQuery,
} from '@graphql/generated/types-and-hooks';
import Button from '@Components/Form/Button';
import MediaCard from '@Components/Card/MediaCard';
import MediaCardSkeleton from '@Components/Skeletons/MediaCardSkeleton';
import Dropdown from '@Components/Form/Dropdown';
import TextField from '@Components/Form/TextField';

export default function MangaSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldSearch, setShouldSearch] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchMediaQuery | null>(
    null,
  );
  const defaultFilters = {
    genres: [],
    tags: [],
    formats: [],
    statuses: [],
    year: undefined,
    sort: MediaSort.PopularityDesc,
    search: '',
  };
  const [selectedFilters, setSelectedFilters] = useState<{
    genres: string[];
    tags: string[];
    formats: MediaFormat[];
    statuses: MediaStatus[];
    year: string | undefined;
    sort: MediaSort;
    search: string;
  }>(defaultFilters);

  const { data, loading, error, called } = useSearchMediaQuery({
    variables: {
      mediaType: MediaType.Manga,
      genres:
        selectedFilters.genres.length > 0 ? selectedFilters.genres : undefined,
      tags: selectedFilters.tags.length > 0 ? selectedFilters.tags : undefined,
      formats:
        selectedFilters.formats.length > 0
          ? selectedFilters.formats
          : undefined,
      statuses:
        selectedFilters.statuses.length > 0
          ? selectedFilters.statuses
          : undefined,
      year: selectedFilters.year ? Number(selectedFilters.year) : undefined,
      sort: [MediaSort.SearchMatch, selectedFilters.sort],
      search: selectedFilters.search || undefined,
      page: currentPage,
      perPage: 25,
    },
    skip: !shouldSearch,
  });

  useEffect(() => {
    if (called && !loading) {
      setShouldSearch(false);
      if (data) {
        if (currentPage === 1) {
          setSearchResults(data);
        } else {
          setSearchResults((prev) => ({
            Page: {
              media: [
                ...(prev?.Page?.media || []),
                ...(data?.Page?.media || []),
              ],
            },
          }));
        }
        setCurrentPage(data.Page?.pageInfo?.currentPage || 1);
        setHasNextPage(data.Page?.pageInfo?.hasNextPage || false);
      }
    }
  }, [called, loading, data, currentPage]);

  type FilterType = keyof typeof selectedFilters;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedFilters({
      genres: searchParams.getAll('genres'),
      tags: searchParams.getAll('tags'),
      formats: searchParams.getAll('formats') as MediaFormat[],
      statuses: searchParams.getAll('statuses') as MediaStatus[],
      year: searchParams.get('year') || undefined,
      sort: (searchParams.get('sort') as MediaSort) || MediaSort.PopularityDesc,
      search: searchParams.get('search') || '',
    });
    setShouldSearch(true);
  }, []);

  const updateUrl = useCallback(
    (parameters: string[], key: FilterType) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete(key);
      parameters.forEach((param) => searchParams.append(key, param));
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true },
      );
    },
    [location.pathname, location.search, navigate],
  );

  const handleRemoveAll = useCallback(
    (type: FilterType) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete(type);
      setSelectedFilters((prev) => ({
        ...prev,
        [type]: defaultFilters[type],
      }));
      updateUrl([], type);
      setShouldSearch(false);
    },
    [location.search, selectedFilters, updateUrl],
  );

  const handleSelect = useCallback(
    (filter: string, type: FilterType) => {
      const currentFilters = selectedFilters[type];

      if (Array.isArray(currentFilters)) {
        setSelectedFilters((prev) => ({
          ...prev,
          [type]: [...currentFilters, filter],
        }));
        updateUrl([...currentFilters, filter], type);
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          [type]: filter,
        }));
        updateUrl([filter], type);
      }
      setShouldSearch(false);
    },
    [selectedFilters, updateUrl],
  );

  const handleRemove = useCallback(
    (filter: string, type: FilterType) => {
      const currentFilters = selectedFilters[type];

      if (Array.isArray(currentFilters)) {
        const updatedFilters = currentFilters.filter((f) => f !== filter);
        setSelectedFilters((prev) => ({
          ...prev,
          [type]: updatedFilters,
        }));
        updateUrl(updatedFilters, type);
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          [type]: defaultFilters[type],
        }));
        updateUrl([], type);
      }
      setShouldSearch(false);
    },
    [selectedFilters, updateUrl],
  );

  const handleSearch = () => {
    setCurrentPage(1);
    setShouldSearch(true);
  };

  return (
    <>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-2">
            <Autocomplete
              options={MediaGenres}
              onSelect={(option) => handleSelect(option, 'genres')}
              onRemove={(option) => handleRemove(option, 'genres')}
              onRemoveAll={() => handleRemoveAll('genres')}
              selectedOptions={selectedFilters.genres}
              getOptionLabel={(option) => option}
              getOptionValue={(option) => option}
              placeholder="Genres"
              className="flex-1"
            />
            <Autocomplete
              options={MediaTags}
              onSelect={(option) => handleSelect(option, 'tags')}
              onRemove={(option) => handleRemove(option, 'tags')}
              onRemoveAll={() => handleRemoveAll('tags')}
              selectedOptions={selectedFilters.tags}
              getOptionLabel={(option) => option}
              getOptionValue={(option) => option}
              placeholder="Tags"
              className="flex-1"
            />
            <Autocomplete
              options={MangaFormats}
              onSelect={(option) => handleSelect(option, 'formats')}
              onRemove={(option) => handleRemove(option, 'formats')}
              onRemoveAll={() => handleRemoveAll('formats')}
              selectedOptions={selectedFilters.formats}
              getOptionLabel={(option) => option}
              getOptionValue={(option) => option}
              placeholder="Formats"
              className="flex-1"
            />
            <Autocomplete
              options={MediaStatuses}
              onSelect={(option) => handleSelect(option, 'statuses')}
              onRemove={(option) => handleRemove(option, 'statuses')}
              onRemoveAll={() => handleRemoveAll('statuses')}
              selectedOptions={selectedFilters.statuses}
              getOptionLabel={(option) => option}
              getOptionValue={(option) => option}
              placeholder="Status"
              className="flex-1"
            />
            <Autocomplete
              options={arrayFromRange(
                new Date().getFullYear() + 1,
                1940,
                -1,
                true,
              )}
              onSelect={(option) =>
                handleSelect(option?.toString() || '', 'year')
              }
              onRemove={(option) =>
                handleRemove(option?.toString() || '', 'year')
              }
              onRemoveAll={() => handleRemoveAll('year')}
              selectedOptions={[selectedFilters.year]}
              getOptionLabel={(option) => option?.toString() || ''}
              getOptionValue={(option) => option?.toString() || ''}
              placeholder="Year"
              className="flex-1"
            />
            <Dropdown
              options={MediaSorts}
              name={selectedFilters.sort}
              onSelect={(newValue) => handleSelect(newValue, 'sort')}
              className={`flex-1 `}
              capitalize
            />
          </div>
          <TextField
            title="Search..."
            value={selectedFilters.search}
            onChange={(newValue) => {
              setSelectedFilters((prev) => ({ ...prev, search: newValue }));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
        <Button
          variant="gradient"
          className=" aspect-square"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {searchResults?.Page?.media?.length && (!loading || currentPage !== 1) ? (
        <div className="grid grid-cols-4 mt-6 w-full gap-4">
          {searchResults.Page.media.map((media) => (
            <div className="w-full" key={media?.id}>
              <MediaCard cardType="wide" key={media?.id} {...media} size={4} />
            </div>
          ))}
          {loading &&
            Array.from({ length: 4 }).map((_media, index) => (
              <div className="w-full" key={index}>
                <MediaCardSkeleton cardType="wide" size={4} />
              </div>
            ))}
          {hasNextPage && !loading && (
            <button
              type="button"
              className="rounded-md border-background-main border w-full h-[260px] flex flex-col justify-center items-center hover:bg-primary/10 transition-colors "
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
                setShouldSearch(true);
              }}
            >
              <CgDetailsMore size={70} />
              <span className="text-xl">Load More</span>
            </button>
          )}
        </div>
      ) : loading ? (
        <div className="grid grid-cols-4 mt-6 w-full gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="w-full" key={index}>
              <MediaCardSkeleton cardType="wide" size={4} />
            </div>
          ))}
        </div>
      ) : (
        searchResults?.Page?.media?.length === 0 && (
          <span className="w-full pt-20 text-center text-3xl font-semibold">
            {'No Data Found x('}
          </span>
        )
      )}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharacterSorts } from '@Utils/constants';
import { CgDetailsMore } from 'react-icons/cg';
import {
  CharacterSort,
  SearchCharacterQuery,
  useSearchCharacterQuery,
} from '@graphql/generated/types-and-hooks';
import Button from '@Components/Form/Button';
import Dropdown from '@Components/Form/Dropdown';
import TextField from '@Components/Form/TextField';
import CharacterSearchCard from '@Components/Card/CharacterSearchCard';
import CharacterSearchCardSkeleton from '@Components/Skeletons/CharacterSearchCardSkeleton';

export default function CharacterSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldSearch, setShouldSearch] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchResults, setSearchResults] =
    useState<SearchCharacterQuery | null>(null);
  const defaultFilters = {
    sort: CharacterSort.RoleDesc,
    search: '',
  };
  const [selectedFilters, setSelectedFilters] = useState<{
    sort: CharacterSort;
    search: string;
  }>(defaultFilters);

  const { data, loading, error, called } = useSearchCharacterQuery({
    variables: {
      sort: [CharacterSort.SearchMatch, selectedFilters.sort],
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
              characters: [
                ...(prev?.Page?.characters || []),
                ...(data?.Page?.characters || []),
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
      sort: (searchParams.get('sort') as CharacterSort) || defaultFilters.sort,
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

  const handleSearch = () => {
    setCurrentPage(1);
    setShouldSearch(true);
  };

  return (
    <>
      <div className="flex gap-2 w-full">
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
        <Dropdown
          options={CharacterSorts}
          name={selectedFilters.sort}
          onSelect={(newValue) => handleSelect(newValue, 'sort')}
          className={`w-[300px] `}
          capitalize
        />
        <Button variant="gradient" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {searchResults?.Page?.characters?.length &&
      (!loading || currentPage !== 1) ? (
        <div className="grid grid-cols-6 mt-6 w-full gap-4">
          {searchResults.Page.characters.map((character) => (
            <div className="w-full" key={character?.id}>
              <CharacterSearchCard data={character} />
            </div>
          ))}
          {loading &&
            Array.from({ length: 6 }).map((_media, index) => (
              <div className="w-full" key={index}>
                <CharacterSearchCardSkeleton />
              </div>
            ))}
          {hasNextPage && !loading && (
            <button
              type="button"
              className="rounded-md border-background-main border w-full h-32 flex flex-col justify-center items-center hover:bg-primary/10 transition-colors "
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
        <div className="grid grid-cols-6 mt-6 w-full gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="w-full" key={index}>
              <CharacterSearchCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        searchResults?.Page?.characters?.length === 0 && (
          <span className="w-full pt-20 text-center text-3xl font-semibold">
            {'No Data Found x('}
          </span>
        )
      )}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}

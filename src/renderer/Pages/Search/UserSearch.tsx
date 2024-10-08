/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserSorts } from '@Utils/constants';
import { CgDetailsMore } from 'react-icons/cg';
import {
  SearchUsersQuery,
  UserSort,
  useSearchUsersQuery,
} from '@graphql/generated/types-and-hooks';
import Button from '@Components/Form/Button';
import Dropdown from '@Components/Form/Dropdown';
import TextField from '@Components/Form/TextField';
import UserCard from '@Components/Card/UserCard';
import UserCardSkeleton from '@Components/Skeletons/UserCardSkeleton';

export default function UserSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldSearch, setShouldSearch] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchUsersQuery | null>(
    null,
  );
  const defaultFilters = {
    sort: UserSort.WatchedTimeDesc,
    search: '',
  };
  const [selectedFilters, setSelectedFilters] = useState<{
    sort: UserSort;
    search: string;
  }>(defaultFilters);

  const { data, loading, error, called } = useSearchUsersQuery({
    variables: {
      sort: [UserSort.SearchMatch, selectedFilters.sort],
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
              users: [
                ...(prev?.Page?.users || []),
                ...(data?.Page?.users || []),
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
      sort: (searchParams.get('sort') as UserSort) || defaultFilters.sort,
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
          options={UserSorts}
          value={selectedFilters.sort}
          onSelect={(newValue) => handleSelect(newValue, 'sort')}
          className={`w-[300px] `}
          capitalize
        />
        <Button variant="gradient" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {searchResults?.Page?.users?.length && (!loading || currentPage !== 1) ? (
        <div className="grid grid-cols-6 mt-6 w-full gap-4">
          {searchResults.Page.users.map((user) => (
            <div className="w-full" key={user?.id}>
              {user ? <UserCard data={user} /> : null}
            </div>
          ))}
          {loading &&
            Array.from({ length: 6 }).map((_media, index) => (
              <div className="w-full" key={index}>
                <UserCardSkeleton />
              </div>
            ))}
          {hasNextPage && !loading && (
            <button
              type="button"
              className="rounded-md border-background-main border w-full h-[154px] flex flex-col justify-center items-center hover:bg-primary/10 transition-colors "
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
              <UserCardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        searchResults?.Page?.users?.length === 0 && (
          <span className="w-full pt-20 text-center text-3xl font-semibold">
            {'No Data Found x('}
          </span>
        )
      )}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}

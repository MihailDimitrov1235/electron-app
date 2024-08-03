import Autocomplete from '@Components/Form/Autocomplete';
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MediaGenres, MediaTags } from '@Utils/constants';

type FilterType = 'genres' | 'tags';

export default function AnimeSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState<{
    genres: string[];
    tags: string[];
  }>({
    genres: [],
    tags: [],
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSelectedFilters({
      genres: searchParams.getAll('genres'),
      tags: searchParams.getAll('tags'),
    });
  }, [location.search]);

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
      setSelectedFilters((prev) => ({ ...prev, [type]: [] }));
      updateUrl([], type);
    },
    [location.search, updateUrl],
  );

  const handleSelect = useCallback(
    (filter: string, type: FilterType) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [type]: [...prev[type], filter],
      }));
      updateUrl([...selectedFilters[type], filter], type);
    },
    [selectedFilters, updateUrl],
  );

  const handleRemove = useCallback(
    (filter: string, type: FilterType) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [type]: prev[type].filter((f) => f !== filter),
      }));
      updateUrl(
        selectedFilters[type].filter((f) => f !== filter),
        type,
      );
    },
    [selectedFilters, updateUrl],
  );

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">Search Anime</h1>
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
        />
      </div>
    </div>
  );
}

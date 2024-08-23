/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  useGetMediaCharactersQuery,
  MediaType,
  GetMediaCharactersQuery,
} from '@graphql/generated/types-and-hooks';
import CharacterCard from '@Components/Card/CharacterCard';
import Pagination from '@Components/Pagination';

export default function Characters({
  id,
  mediaType,
  data,
  charactersPerPage,
}: {
  id: string;
  mediaType: MediaType;
  data: GetMediaCharactersQuery['Media'] | null;
  charactersPerPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchedData,
    loading,
    error,
  } = useGetMediaCharactersQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: charactersPerPage,
    },
    skip: currentPage === 1,
  });

  const displayData = currentPage === 1 ? data : fetchedData?.Media;

  if (loading && currentPage !== 1) {
    return <div>loading...</div>;
  }

  if (error && !displayData) {
    return <div>error</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Characters</div>
      <div
        className={`grid ${
          mediaType === MediaType.Manga ? 'grid-cols-6' : 'grid-cols-3'
        } gap-4`}
      >
        {displayData?.characters?.edges?.map((edge) => (
          <CharacterCard
            key={edge?.node?.id}
            role={edge?.role}
            voiceActors={edge?.voiceActors}
            {...edge?.node}
          />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          pages={-1}
          hasNextPage={!!displayData?.characters?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

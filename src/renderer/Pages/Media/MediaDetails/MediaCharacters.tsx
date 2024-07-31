/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  useGetMediaCharactersQuery,
  MediaType,
} from '@graphql/generated/types-and-hooks';
import CharacterCard from '@Components/Card/CharacterCard';
import Pagination from '@Components/Pagination';

export default function Characters({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useGetMediaCharactersQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      page: currentPage,
      perPage: mediaType === MediaType.Anime ? 6 : 12,
    },
  });
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-lg font-semibold">Characters</div>
      <div
        className={`grid ${
          mediaType === MediaType.Manga ? 'grid-cols-6' : 'grid-cols-3'
        } gap-4`}
      >
        {data.Media?.characters?.edges?.map((edge) => (
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
          hasNextPage={!!data.Media?.characters?.pageInfo?.hasNextPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

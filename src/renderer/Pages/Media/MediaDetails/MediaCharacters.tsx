/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useGetMediaCharactersQuery } from '@graphql/generated/operations';
import CharacterCard from '@Components/Card/CharacterCard';
import { MediaType } from '@graphql/generated/types';

export default function Characters({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { loading, error, data } = useGetMediaCharactersQuery({
    variables: { mediaId: Number(id), mediaType },
  });
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">Characters</div>
      <div className="grid grid-cols-3 gap-4">
        {data.Media?.characters?.edges?.map((edge) => (
          <CharacterCard
            key={edge?.node?.id}
            role={edge?.role}
            voiceActors={edge?.voiceActors}
            {...edge?.node}
          />
        ))}
      </div>
    </div>
  );
}

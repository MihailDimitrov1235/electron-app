import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  AnimeDetailsData,
  GET_ANIME_DETAILS,
} from '../../graphql/queries/animeQueries';

export default function AnimeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery<AnimeDetailsData>(
    GET_ANIME_DETAILS,
    {
      variables: { mediaId: id },
    },
  );
  if (!data) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <div className="w-full h-24">
        <img
          src={data.Media.bannerImage || data.Media.coverImage?.extraLarge}
          alt="banner"
        />
      </div>
    </div>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAnimeDetailsQuery } from '../../graphql/generated/operations';

export default function AnimeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useGetAnimeDetailsQuery({
    variables: { mediaId: id },
  });
  if (!data) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <div className="w-full h-24">
        <img
          src={
            data.Media?.bannerImage ||
            data.Media?.coverImage?.extraLarge ||
            undefined
          }
          alt="banner"
        />
      </div>
    </div>
  );
}

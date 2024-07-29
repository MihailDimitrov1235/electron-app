/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TruncatedText from '@Components/TruncatedText';
import { useGetMediaInfoQuery } from '@graphql/generated/operations';
import MediaCard from '@Components/Media/MediaCard';
import { MediaType } from '@graphql/generated/types';

// eslint-disable-next-line react/require-default-props
export default function MediaInfo({
  id,
  mediaType,
}: {
  id: string;
  mediaType: MediaType;
}) {
  const { loading, error, data } = useGetMediaInfoQuery({
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
    <div className="flex flex-col w-full overflow-hidden gap-8">
      <TruncatedText html={data.Media?.description || ''} />

      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">Relations</span>
        <div className="flex gap-4 overflow-x-scroll pb-2">
          {data.Media?.relations?.edges?.map((edge) => (
            <MediaCard
              key={edge?.node?.id}
              relationship={edge?.relationType?.toString()}
              withEpisodes={false}
              withType
              {...edge?.node}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">Recommendations</span>
        <div className="flex gap-4 overflow-x-scroll pb-2">
          {data.Media?.recommendations?.nodes?.map((recommendation) => (
            <MediaCard
              key={recommendation?.mediaRecommendation?.id}
              {...recommendation?.mediaRecommendation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

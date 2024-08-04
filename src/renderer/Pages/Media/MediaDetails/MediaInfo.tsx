/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TruncatedText from '@Components/TruncatedText';
import { GetMediaDetailsQuery } from '@graphql/generated/types-and-hooks';
import MediaCard from '@Components/Card/MediaCard';

// eslint-disable-next-line react/require-default-props
export default function MediaInfo({
  data,
}: {
  data: GetMediaDetailsQuery['MediaInfo'] | null;
}) {
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col w-full overflow-hidden gap-8">
      <TruncatedText html={data.description || ''} />

      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">Relations</span>
        <div className="flex gap-4 overflow-x-scroll pb-2">
          {data.relations?.edges?.map((edge) => (
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
          {data.recommendations?.nodes?.map((recommendation) => (
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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TruncatedText from '@Components/TruncatedText';
import { useGetAnimeInfoQuery } from '@graphql/generated/operations';
import AnimeCard from '@Components/Anime/AnimeCard';

// eslint-disable-next-line react/require-default-props
export default function AnimeInfo({ id }: { id: string }) {
  const { loading, error, data } = useGetAnimeInfoQuery({
    variables: { mediaId: id },
  });
  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div className="px-8 flex gap-10">
      <div className="w-[230px] h-full flex flex-col gap-2 shrink-0">
        <div className="flex justify-between w-full">
          <div className="text-text-light">Season</div>
          <div>{data.Media?.season}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-text-light">Season Year</div>
          <div>{data.Media?.seasonYear}</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-text-light">Start date</div>
          <div>
            {data.Media?.startDate?.day}/{data.Media?.startDate?.month}/
            {data.Media?.startDate?.year}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-text-light">End date</div>
          <div>
            {data.Media?.endDate?.day}/{data.Media?.endDate?.month}/
            {data.Media?.endDate?.year}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full overflow-hidden gap-8">
        <TruncatedText html={data.Media?.description || ''} />

        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold">Relations</span>
          <div className="flex gap-4 overflow-x-scroll pb-2">
            {data.Media?.relations?.edges?.map((edge) => (
              <AnimeCard
                key={edge?.node?.id}
                relationship={edge?.relationType}
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
              <AnimeCard
                key={recommendation?.mediaRecommendation?.id}
                {...recommendation?.mediaRecommendation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMediaDetailsQuery } from '@graphql/generated/types-and-hooks';
import { MediaType } from '@graphql/generated/types-and-hooks';
import MediaInfo from './MediaInfo';
import MediaShortInfo from './MediaShortInfo';
import MediaMainData from './MediaMainData';
import Characters from './MediaCharacters';

const MediaTabs = ['Info', 'Characters', 'Staff', 'Reviews'];

export default function MediaDetails({ mediaType }: { mediaType: MediaType }) {
  const { id } = useParams();
  const { loading, error, data } = useGetMediaDetailsQuery({
    variables: { mediaId: Number(id), mediaType },
  });

  const [openTab, setOpenTab] = useState<string>(MediaTabs[0]);

  if (error) {
    console.error(error);
    return <div>error</div>;
  }
  if (loading || !data) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative w-full pb-8">
      {data.Media?.bannerImage && (
        <div
          className="w-full h-[450px] blur-sm absolute z-0 bg-cover"
          style={{
            backgroundImage: `url(${
              data.Media?.bannerImage || data.Media.coverImage?.extraLarge
            })`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-background-light/55 to-background-dark" />
        </div>
      )}
      <MediaMainData
        data={data}
        openTab={openTab}
        setOpenTab={setOpenTab}
        MediaTabs={MediaTabs}
      />
      <div className="px-8 flex gap-10">
        <MediaShortInfo data={data} />
        {(() => {
          switch (openTab) {
            case MediaTabs[0]:
              return <MediaInfo id={id || ''} mediaType={mediaType} />;
            case MediaTabs[1]:
              return <Characters id={id || ''} mediaType={mediaType} />;
            case MediaTabs[2]:
              return <MediaInfo id={id || ''} mediaType={mediaType} />;
            default:
              return <div>Unknown component type</div>;
          }
        })()}
      </div>
    </div>
  );
}

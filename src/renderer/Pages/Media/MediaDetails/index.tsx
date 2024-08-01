/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetMediaDetailsQuery,
  MediaType,
  GetMediaDetailsQuery,
} from '@graphql/generated/types-and-hooks';
import { enqueueSnackbar } from 'notistack';
import MediaInfo from './MediaInfo';
import MediaShortInfo from './MediaShortInfo';
import MediaMainData from './MediaMainData';
import Characters from './MediaCharacters';
import MediaStaff from './MediaStaff';
import MediaReviews from './MediaReviews';

const MediaTabs = ['Info', 'Characters', 'Staff', 'Reviews'];

export default function MediaDetails({ mediaType }: { mediaType: MediaType }) {
  const { id } = useParams();
  const { loading, error, data } = useGetMediaDetailsQuery({
    variables: { mediaId: Number(id), mediaType },
  });
  const [displayData, setDisplayData] = useState<GetMediaDetailsQuery | null>(
    null,
  );
  useEffect(() => {
    if (data) {
      setDisplayData(data);
    }
  }, [data]);

  const openTabSessionKey = `${mediaType}${id}openTab`;
  const [openTab, setOpenTab] = useState<string>(
    sessionStorage.getItem(openTabSessionKey) || MediaTabs[0],
  );

  useEffect(() => {
    sessionStorage.setItem(openTabSessionKey, openTab);
  }, [openTab, openTabSessionKey]);

  if (error) {
    enqueueSnackbar({ variant: 'error', message: error.message });
    return <div>error</div>;
  }
  if (loading || !displayData) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative w-full pb-8">
      {(displayData.Media?.bannerImage ||
        displayData.Media?.coverImage?.extraLarge) && (
        <div
          className="w-full h-[450px] blur-sm absolute z-0 bg-cover"
          style={{
            backgroundImage: `url(${
              displayData.Media?.bannerImage ||
              displayData.Media.coverImage?.extraLarge
            })`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-background-light/55 to-background-dark" />
        </div>
      )}
      <MediaMainData
        data={displayData}
        setData={setDisplayData}
        openTab={openTab}
        setOpenTab={setOpenTab}
        MediaTabs={MediaTabs}
      />
      <div className="px-8 flex gap-10">
        <MediaShortInfo data={displayData} />
        {(() => {
          switch (openTab) {
            case MediaTabs[0]:
              return <MediaInfo id={id || ''} mediaType={mediaType} />;
            case MediaTabs[1]:
              return <Characters id={id || ''} mediaType={mediaType} />;
            case MediaTabs[2]:
              return <MediaStaff id={id || ''} mediaType={mediaType} />;
            case MediaTabs[3]:
              return <MediaReviews id={id || ''} mediaType={mediaType} />;
            default:
              return <div>Unknown component type</div>;
          }
        })()}
      </div>
    </div>
  );
}

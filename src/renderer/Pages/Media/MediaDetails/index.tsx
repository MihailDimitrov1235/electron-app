/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetMediaDetailsQuery,
  MediaType,
  GetMediaDetailsQuery,
  GetMediaCharactersQuery,
  GetMediaStaffQuery,
  GetMediaReviewsQuery,
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
  const itemsPerPage = {
    characters: { ANIME: 24, MANGA: 18 },
    staff: 25,
    reviews: 24,
  };
  const MediaDetailsQuery = useGetMediaDetailsQuery({
    variables: {
      mediaId: Number(id),
      mediaType,
      charactersPerPage: itemsPerPage.characters[mediaType],
      staffPerPage: itemsPerPage.staff,
      reviewsPerPage: itemsPerPage.reviews,
    },
  });
  const [displayData, setDisplayData] = useState<
    GetMediaDetailsQuery['MediaDetails'] | null
  >(null);
  useEffect(() => {
    if (MediaDetailsQuery.data) {
      setDisplayData(MediaDetailsQuery.data.MediaDetails);
    }
  }, [MediaDetailsQuery.data]);

  const openTabSessionKey = `${mediaType}${id}openTab`;
  const [openTab, setOpenTab] = useState<string>(
    sessionStorage.getItem(openTabSessionKey) || MediaTabs[0],
  );

  useEffect(() => {
    sessionStorage.setItem(openTabSessionKey, openTab);
  }, [openTab, openTabSessionKey]);

  if (MediaDetailsQuery.error) {
    enqueueSnackbar({
      variant: 'error',
      message: MediaDetailsQuery.error.message,
    });
    return <div>error</div>;
  }
  if (MediaDetailsQuery.loading || !displayData) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative w-full pb-8">
      {(displayData.bannerImage || displayData.coverImage?.extraLarge) && (
        <div
          className="w-full h-[450px] blur-sm absolute z-0 bg-cover"
          style={{
            backgroundImage: `url(${
              displayData.bannerImage || displayData.coverImage?.extraLarge
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
        <MediaShortInfo
          data={displayData}
          following={MediaDetailsQuery.data?.Following}
        />
        {(() => {
          switch (openTab) {
            case MediaTabs[0]:
              return (
                <MediaInfo data={MediaDetailsQuery.data?.MediaInfo || null} />
              );
            case MediaTabs[1]:
              return (
                <Characters
                  id={id || ''}
                  mediaType={mediaType}
                  data={
                    MediaDetailsQuery.data
                      ?.MediaCharacters as GetMediaCharactersQuery['Media']
                  }
                  charactersPerPage={itemsPerPage.characters[mediaType]}
                />
              );
            case MediaTabs[2]:
              return (
                <MediaStaff
                  id={id || ''}
                  mediaType={mediaType}
                  data={
                    MediaDetailsQuery.data
                      ?.MediaStaff as GetMediaStaffQuery['Media']
                  }
                  staffPerPage={itemsPerPage.staff}
                />
              );
            case MediaTabs[3]:
              return (
                <MediaReviews
                  id={id || ''}
                  mediaType={mediaType}
                  data={
                    MediaDetailsQuery.data
                      ?.MediaReviews as GetMediaReviewsQuery['Media']
                  }
                  reviewsPerPage={itemsPerPage.reviews}
                />
              );
            default:
              return <div>Unknown component type</div>;
          }
        })()}
      </div>
    </div>
  );
}

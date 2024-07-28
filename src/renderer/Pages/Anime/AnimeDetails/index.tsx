/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAnimeDetailsQuery } from '@graphql/generated/operations';
import AnimeInfo from './AnimeInfo';
import AnimeShortInfo from './AnimeShortInfo';
import AnimeMainData from './AnimeMainData';

const AnimeTabs = ['Info', 'Characters', 'Staff', 'Reviews'];

export default function AnimeDetails() {
  const { id } = useParams();
  const { loading, error, data } = useGetAnimeDetailsQuery({
    variables: { mediaId: id },
  });

  const [openTab, setOpenTab] = useState<string>(AnimeTabs[0]);

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
      <AnimeMainData
        data={data}
        openTab={openTab}
        setOpenTab={setOpenTab}
        AnimeTabs={AnimeTabs}
      />
      <div className="px-8 flex gap-10">
        <AnimeShortInfo data={data} />
        {(() => {
          switch (openTab) {
            case AnimeTabs[0]:
              return <AnimeInfo id={id || ''} />;
            case AnimeTabs[1]:
              return <AnimeInfo id={id || ''} />;
            case AnimeTabs[2]:
              return <AnimeInfo id={id || ''} />;
            default:
              return <div>Unknown component type</div>;
          }
        })()}
      </div>
    </div>
  );
}

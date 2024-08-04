/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import {
  MediaListSort,
  MediaListStatus,
  MediaType,
  useGetViewerMediaQuery,
} from '@graphql/generated/types-and-hooks';
import { useAuth } from '@Components/Contexts/AuthContext';
import MediaCard from '@Components/Card/MediaCard';
import { enqueueSnackbar } from 'notistack';

export default function Home() {
  const { userId } = useAuth();
  const { loading, error, data } = useGetViewerMediaQuery({
    variables: {
      userId,
      mediaType: MediaType.Anime,
      status: MediaListStatus.Current,
      sort: [MediaListSort.UpdatedTimeDesc],
    },
  });
  if (error) {
    enqueueSnackbar({ variant: 'error', message: error.message });
    return <p>No data available</p>;
  }
  if (loading || !data) {
    return <p>loading</p>;
  }
  return (
    <div className="m-4 flex flex-col gap-4 overflow-hidden">
      <div className="text-lg">Currently watching Anime</div>
      <div className="flex flex-wrap gap-y-4 justify-start mx-auto">
        {data.MediaListCollection?.lists &&
          data.MediaListCollection?.lists[0]?.entries?.map((entry) => (
            <div key={entry?.id} className="flex-grow-0 flex-shrink-0 pr-4">
              <MediaCard size={2.1} {...entry?.media} />
            </div>
          ))}
      </div>
    </div>
  );
}

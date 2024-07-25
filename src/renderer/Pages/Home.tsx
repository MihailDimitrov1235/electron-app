/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useGetCurrentAnimeQuery } from '../graphql/generated/operations';
import { useAuth } from '../Components/Contexts/AuthContext';
import AnimeCard from '../Components/Anime/AnimeCard';

export default function Home() {
  const { userId } = useAuth();
  const { loading, error, data } = useGetCurrentAnimeQuery({
    variables: { userId },
  });
  if (error) {
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
              <AnimeCard size={2.2} {...entry?.media} />
            </div>
          ))}
      </div>
    </div>
  );
}

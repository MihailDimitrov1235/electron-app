/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useQuery } from '@apollo/client';
import { useAuth } from '../Components/Contexts/AuthContext';
import {
  GET_WATCHING_ANIME,
  WatchingAnimeData,
} from '../graphql/queries/animeQueries';
import AnimeCard from '../Components/Anime/AnimeCard';

export default function Home() {
  const { isLoggedIn, userId } = useAuth();
  const { loading, error, data } = useQuery<WatchingAnimeData>(
    GET_WATCHING_ANIME,
    {
      variables: { userId },
    },
  );
  if (error) {
    return <p>No data available</p>;
  }
  if (loading || !data) {
    return <p>loading</p>;
  }
  return (
    <div className="m-4 flex flex-col gap-4 overflow-hidden">
      <div className="text-lg">Currently watching Anime</div>
      <div className="flex flex-wrap gap-y-4 justify-between">
        {data.MediaListCollection.lists[0].entries.map(({ media: anime }) => (
          <div key={anime.id} className="flex-grow-0 flex-shrink-0 px-2">
            <AnimeCard size={2.2} {...anime} />
          </div>
        ))}
      </div>
    </div>
  );
}

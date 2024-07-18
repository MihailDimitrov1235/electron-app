import { useQuery } from '@apollo/client';
import { useAuth } from '../Components/Contexts/AuthContext';
import {
  GET_WATCHING_ANIME,
  WatchingAnimeData,
} from '../graphql/queries/animeQueries';

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
  console.log(data);
  return <div>dasdsa</div>;
}

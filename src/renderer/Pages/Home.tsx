import { useAuth } from '../Components/Contexts/AuthContext';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return <div>loggedin: {isLoggedIn ? 'true' : 'false'}</div>;
}

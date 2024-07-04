import ThemeSelector from '../Components/ThemeSelector';
import { useAuth } from '../Components/Contexts/AuthContext';

export default function Home() {
  const { token } = useAuth();
  return (
    <div>
      <a href="https://anilist.co/api/v2/oauth/authorize?client_id=19640&response_type=token">
        Login with AniList
      </a>
      <br />
      {token} - token
      <ThemeSelector />
    </div>
  );
}

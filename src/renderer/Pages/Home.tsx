import ThemeSelector from '../Components/ThemeSelector';
import { useAuth } from '../Components/Contexts/AuthContext';
import { useMainUtils } from '../Components/Contexts/MainUtilsContext';
import Button from '../Components/Button';

export default function Home() {
  const { token } = useAuth();
  const { openUrl } = useMainUtils();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          openUrl(
            'https://anilist.co/api/v2/oauth/authorize?client_id=19640&response_type=token',
          )
        }
      >
        Login with AniList
      </button>
      <ThemeSelector />

      <Button variant="default">default</Button>
      <Button variant="gradient">default</Button>
      <Button variant="outline">default</Button>
    </div>
  );
}

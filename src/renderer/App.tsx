import 'tailwindcss/tailwind.css';
import RouteHandler from './RouteHandler';
import { ThemeProvider, useTheme } from './Components/Contexts/ThemeContext';
import { AuthProvider } from './Components/Contexts/AuthContext';
import { MainUtilsProvider } from './Components/Contexts/MainUtilsContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} w-[100vw] h-[100vh] text-text-main`}>
      <RouteHandler />
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainUtilsProvider>
          <App />
        </MainUtilsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

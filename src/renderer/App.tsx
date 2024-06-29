import 'tailwindcss/tailwind.css';
import RouteHandler from './RouteHandler';
import { ThemeProvider, useTheme } from './Components/Contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <RouteHandler />
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

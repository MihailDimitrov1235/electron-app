import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import RouteHandler from './RouteHandler';
import { ThemeProvider, useTheme } from './Components/Contexts/ThemeContext';
import { AuthProvider } from './Components/Contexts/AuthContext';
import { MainUtilsProvider } from './Components/Contexts/MainUtilsContext';
import './global.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} w-[100vw] h-[100vh] text-text-main`}>
      <RouteHandler />
    </div>
  );
}

export default function RootApp() {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',

    cache: new InMemoryCache(),
  });
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <MainUtilsProvider>
            <App />
          </MainUtilsProvider>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

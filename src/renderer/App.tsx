import 'tailwindcss/tailwind.css';
import { useMemo } from 'react';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, useTheme } from '@Components/Contexts/ThemeContext';
import { AuthProvider, useAuth } from '@Components/Contexts/AuthContext';
import { MainUtilsProvider } from '@Components/Contexts/MainUtilsContext';
import Snackbar from '@Components/Snackbar';
import RouteHandler from './RouteHandler';
import './global.css';

function App() {
  const { theme } = useTheme();
  const { token } = useAuth();

  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: 'https://graphql.anilist.co',
      // fetchOptions: {
      //   mode: 'no-cors', // no-cors, *cors, same-origin
      // },
    });

    const authLink = setContext((_, { headers }) => {
      if (token) {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${token}`,
          },
        };
      }
      return {
        headers: {
          ...headers,
        },
      };
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }, [token]);

  return (
    <ApolloProvider client={client}>
      <MainUtilsProvider>
        <div className={`${theme} w-[100vw] h-[100vh] text-text-main`}>
          <RouteHandler />
        </div>
      </MainUtilsProvider>
    </ApolloProvider>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <SnackbarProvider
        maxSnack={10}
        Components={{
          default: Snackbar,
          error: Snackbar,
          success: Snackbar,
          warning: Snackbar,
          info: Snackbar,
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        // preventDuplicate
        autoHideDuration={2500}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

import 'tailwindcss/tailwind.css';
import { useMemo } from 'react';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import { ThemeProvider, useTheme } from '@Components/Contexts/ThemeContext';
import { AuthProvider, useAuth } from '@Components/Contexts/AuthContext';
import { MainUtilsProvider } from '@Components/Contexts/MainUtilsContext';
import Snackbar from '@Components/Snackbar';
import RouteHandler from './RouteHandler';
import './global.css';

function App() {
  const { theme } = useTheme();
  const { token } = useAuth();
  // const port = useRef(8080);

  // useEffect(() => {
  //   const removeListener = window.electronAPI.handleSetPort((message) => {
  //     console.log(message);
  //     port.current = message;
  //   });

  //   return () => {
  //     removeListener();
  //   };
  // });

  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: 'https://graphql.anilist.co',
      // uri: `http://localhost:${port.current}/api`,
    });

    const rateLimitLink = new ApolloLink((operation, forward) => {
      return forward(operation).map((response) => {
        const context = operation.getContext();
        const headers = context.response?.headers;

        if (headers) {
          // Extract rate limit information from headers
          const rateLimitRemaining = headers.get('X-RateLimit-Remaining');
          const rateLimitReset = headers.get('X-RateLimit-Reset');

          if (rateLimitRemaining) {
            console.log('Rate Limit Remaining:', rateLimitRemaining);
          }
          if (rateLimitReset) {
            console.log('Rate Limit Reset Time:', rateLimitReset);
            enqueueSnackbar({
              variant: 'error',
              message: `Too many requests. Try again in ${rateLimitReset} seconds.`,
            });
          }
        } else {
          console.log('No headers found in response.');
        }

        return response;
      });
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    return new ApolloClient({
      link: token
        ? ApolloLink.from([authLink, rateLimitLink, httpLink])
        : ApolloLink.from([rateLimitLink, httpLink]),
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

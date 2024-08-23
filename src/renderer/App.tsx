import 'tailwindcss/tailwind.css';
import { useMemo } from 'react';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import { DialogProvider } from '@Components/Contexts/DialogContext';
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

    const retryLink = new RetryLink({
      delay: {
        initial: 300,
        max: Infinity,
        jitter: true,
      },
      attempts: {
        max: 2,
        retryIf: (error) => !!error && error.statusCode !== 400,
      },
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

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          );
          enqueueSnackbar({ variant: 'error', message });
        });
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        // enqueueSnackbar({
        //   variant: 'error',
        //   message: 'Network error occurred. Retrying...',
        // });
      }
    });

    return new ApolloClient({
      link: token
        ? ApolloLink.from([
            errorLink,
            retryLink,
            authLink,
            rateLimitLink,
            httpLink,
          ])
        : ApolloLink.from([errorLink, retryLink, rateLimitLink, httpLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all',
        },
      },
    });
  }, [token]);

  return (
    <ApolloProvider client={client}>
      <MainUtilsProvider>
        <div id="App" className={`${theme} w-[100vw] h-[100vh] text-text-main`}>
          <DialogProvider>
            <RouteHandler />
          </DialogProvider>
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
        preventDuplicate
        autoHideDuration={2500}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

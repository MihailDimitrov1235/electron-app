import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
  isLoggedIn: boolean;
  userId: number | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const createApolloClient = (token: string) => {
  const httpLink = createHttpLink({
    uri: 'https://graphql.anilist.co',
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }));

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

const GET_USER_ID = gql`
  query {
    Viewer {
      id
    }
  }
`;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });
  const [userId, setUserId] = useState<number | null>(() => {
    const storageUserId = localStorage.getItem('userId');
    return storageUserId ? Number(storageUserId) : null;
  });

  useEffect(() => {
    if (token) {
      const client = createApolloClient(token);
      client
        .query({ query: GET_USER_ID })
        .then(({ data }) => {
          const fetchedUserId = data.Viewer.id;
          setUserId(fetchedUserId);
          localStorage.setItem('userId', fetchedUserId.toString());
          return 0;
        })
        .catch((error) => {
          console.error('Error fetching user ID:', error);
          // Handle error (e.g., invalid token)
          setToken(null);
          setUserId(null);
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        });
    }
  }, [token]);

  function changeToken(newToken: string | null) {
    if (newToken === null) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setUserId(null);
    } else {
      localStorage.setItem('token', newToken);
    }
    setToken(newToken);
  }

  const value = useMemo(
    () => ({
      token,
      setToken: changeToken,
      isLoggedIn: token != null,
      userId,
    }),
    [token, userId],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

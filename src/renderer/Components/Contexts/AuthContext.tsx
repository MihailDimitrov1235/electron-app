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
      avatar {
        large
      }
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
  const [userAvatar, setUserAvatar] = useState<string | null>(() => {
    const storageUserAvatar = localStorage.getItem('userAvatar');
    return storageUserAvatar || null;
  });

  function removeAuth() {
    setToken(null);
    setUserId(null);
    setUserAvatar(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userAvatar');
  }

  useEffect(() => {
    if (token) {
      const client = createApolloClient(token);
      client
        .query({ query: GET_USER_ID })
        .then(({ data, error }) => {
          if (error) {
            removeAuth();
          }
          const fetchedUserId = data.Viewer.id;
          setUserId(fetchedUserId);
          localStorage.setItem('userId', fetchedUserId.toString());

          const fetchedUserAvatar = data.Viewer.avatar.large;
          setUserAvatar(fetchedUserAvatar);
          localStorage.setItem('userAvatar', fetchedUserAvatar);

          return 0;
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          removeAuth();
        });
    }
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      setToken: (newToken: string | null) => {
        if (!newToken) {
          removeAuth();
        } else {
          localStorage.setItem('token', newToken);
          setToken(newToken);
        }
      },
      isLoggedIn: !!userId,
      userId,
      userAvatar,
    }),
    [token, userId, userAvatar],
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

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { useAuth } from '@Components/Contexts/AuthContext';
import Layout from '@Components/Layout';
import LogIn from '@Pages/LogIn';
import Home from '@Pages/Home';
import MediaHome from '@Pages/Media';
import Page404 from '@Pages/Page404';
import MediaDetails from '@Pages/Media/MediaDetails';
import { MediaType } from '@graphql/generated/types';

export default function RouteHandler() {
  const { isLoggedIn } = useAuth();

  async function redirectIfNotLoggedIn() {
    if (!isLoggedIn) {
      return redirect('/login');
    }
    return null;
  }

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '/',
          loader: redirectIfNotLoggedIn,
          element: <Home />,
        },
        {
          path: '/login',
          loader: () => {
            if (isLoggedIn) {
              redirect('/');
            }
            return null;
          },
          element: <LogIn />,
        },
        {
          path: '/user',
          loader: redirectIfNotLoggedIn,
          element: <Home />,
        },
        {
          path: '/anime',
          children: [
            { path: '', element: <MediaHome mediaType={MediaType.Anime} /> },
            {
              path: ':id',
              element: <MediaDetails mediaType={MediaType.Anime} />,
            },
          ],
        },
        {
          path: '/manga',
          children: [
            { path: '', element: <MediaHome mediaType={MediaType.Manga} /> },
            {
              path: ':id',
              element: <MediaDetails mediaType={MediaType.Manga} />,
            },
          ],
        },
        {
          path: '*',
          element: <Page404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

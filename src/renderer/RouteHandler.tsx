import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import { useAuth } from '@Components/Contexts/AuthContext';
import Layout from '@Components/Layout';
import LogIn from '@Pages/LogIn';
import Home from '@Pages/Home';
import AnimeHome from '@Pages/Anime';
import Page404 from '@Pages/Page404';
import AnimeDetails from '@Pages/Anime/AnimeDetails';

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
            { path: '', element: <AnimeHome /> },
            { path: ':id', element: <AnimeDetails /> },
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

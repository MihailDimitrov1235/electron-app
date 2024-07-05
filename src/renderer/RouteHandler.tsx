import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import { useAuth } from './Components/Contexts/AuthContext';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';

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
          element: <LogIn />,
        },
        {
          path: '/user',
          loader: redirectIfNotLoggedIn,
          element: <Home />,
        },
        {
          path: '/index.html',
          element: <Navigate to="/" replace />,
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

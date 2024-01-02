import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Page404 = lazy(() => import('lib/pages/404'));
const HomePage = lazy(() => import('lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

import { Skeleton } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export const Routings = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
      </Routes>
    </Suspense>
  );
};

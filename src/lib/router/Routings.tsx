import { Skeleton } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';

const Routings = () => {
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

export default Routings;

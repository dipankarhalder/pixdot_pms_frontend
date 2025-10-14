import { RouterProvider } from 'react-router-dom';
import { routers } from '@/routers';

export const RoutePath = () => {
  return <RouterProvider router={routers} />;
};

import { createBrowserRouter } from 'react-router-dom';

import { HomePage, NotFoundPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

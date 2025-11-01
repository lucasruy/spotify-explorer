import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import { ReactQueryProvider } from '@/app/providers';

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
}

export default App;

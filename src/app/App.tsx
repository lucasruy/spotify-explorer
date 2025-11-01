import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import { ReactQueryProvider, I18nProvider } from '@/app/providers';

function App() {
  return (
    <I18nProvider>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </I18nProvider>
  );
}

export default App;

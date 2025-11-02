import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import {
  ReactQueryProvider,
  I18nProvider,
  ThemeProvider,
} from '@/app/providers';

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <ReactQueryProvider>
          <RouterProvider router={router} />
        </ReactQueryProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;

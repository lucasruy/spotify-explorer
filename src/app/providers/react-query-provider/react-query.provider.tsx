import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { DEFAULT_QUERY_OPTIONS } from './react-query.constants';

export const ReactQueryProvider = (
  { children }: React.PropsWithChildren
) => {
  return (
    <QueryClientProvider client={DEFAULT_QUERY_OPTIONS}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

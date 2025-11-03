import { notFound } from 'next/navigation';

import { DevShowcasePage } from '@/page/dev-showcase';

const isProduction = process.env.NODE_ENV === 'production';

export default function ComponentsDevPage() {
  if (isProduction) {
    notFound();
  }

  return <DevShowcasePage />;
}

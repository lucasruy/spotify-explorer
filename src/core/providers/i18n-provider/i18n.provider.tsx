'use client';

import { useEffect, useState } from 'react';

import { initializeI18n } from '@/shared/i18n';
import { registerPagesI18nResources } from '@/page/register-i18n-resources';

export const I18nProvider = ({ children }: React.PropsWithChildren) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const setupI18n = async () => {
      try {
        await initializeI18n();

        registerPagesI18nResources();
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing i18n:', error);
        setIsInitialized(true);
      }
    };

    setupI18n();
  }, []);

  if (!isInitialized) {
    return (
      //TODO: Incluir spinner posteriormente
      <div>Spinner</div>
    );
  }

  return children;
};

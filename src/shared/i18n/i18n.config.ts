import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './i18n.types';

export const registerI18nResources = (
  namespace: string,
  resources: Record<string, unknown>
) => {
  Object.entries(resources).forEach(([language, resource]) => {
    i18n.addResourceBundle(language, namespace, resource, true, true);
  })
};

export const initializeI18n = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: import.meta.env.DEV,
      fallbackLng: FALLBACK_LANGUAGE,
      supportedLngs: SUPPORTED_LANGUAGES,

      /**
       * Configurações de detecção de idioma
       */
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
      },

      /**
       * Configurações de interpolaçã
       */
      interpolation: {
        escapeValue: false,
      },

      /**
       * Configurações de namespace
       */
      defaultNS: 'common',
      fallbackNS: 'common',

      /**
       * Configurações de recursos
       */
      resources: {},

      /**
       * Configurações de comportamento
       */
      returnEmptyString: false,
      returnNull: false,
      returnObjects: false,
      joinArrays: ' ',

      /**
       * Configurações de performance
       */
      cleanCode: true,

      /**
       * Configurações específicas do React
       */
      react: {
        useSuspense: false,
      },
    });

  return i18n;
};

export { i18n };

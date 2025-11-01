import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from './i18n.types';

/**
 * Hook customizado para tradução com tipagem melhorada
 * @param namespace - Namespace específico para as traduções
 * @returns Objeto com função de tradução e utilitários
 */
export const useI18n = (namespace?: string) => {
  const { t, i18n } = useTranslation(namespace);

  const changeLanguage = (language: SupportedLanguage) => {
    return i18n.changeLanguage(language);
  };

  const getCurrentLanguage = (): SupportedLanguage => {
    return i18n.language as SupportedLanguage;
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isLoading: i18n.isInitialized === false,
  };
};

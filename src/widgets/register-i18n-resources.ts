import { registerI18nResources } from '@/shared/i18n';

import { navbarLocales } from './navbar/locales';

export const registerWidgetsI18nResources = () => {
  registerI18nResources('navbar', navbarLocales);
};

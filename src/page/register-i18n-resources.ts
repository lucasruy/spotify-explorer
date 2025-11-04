import { registerI18nResources } from '@/shared/i18n';

import { homePageLocales } from './home';
import { loginPageLocales } from './login';
import { notFoundLocales } from './not-found';
import { profilePageLocales } from './profile';
import { artistListingPageLocales } from './artist-listing';
import { artistDetailsPageLocales } from './artist-details';
import { devShowcasePageLocales } from './dev-showcase';
import { searchPageLocales } from './search';

/**
 * Registra todos os recursos de tradução das páginas
 * Esta função deve ser chamada durante a inicialização da aplicação
 */
export const registerPagesI18nResources = () => {
  registerI18nResources('home-page', homePageLocales);
  registerI18nResources('login-page', loginPageLocales);
  registerI18nResources('profile-page', profilePageLocales);
  registerI18nResources('not-found-page', notFoundLocales);
  registerI18nResources('artist-listing-page', artistListingPageLocales);
  registerI18nResources('artist-details-page', artistDetailsPageLocales);
  registerI18nResources('dev-showcase-page', devShowcasePageLocales);
  registerI18nResources('search-page', searchPageLocales);
};

export interface LocaleResource {
  [key: string]: string | LocaleResource;
}

export interface LocaleResourcesMap {
  [namespace: string]: LocaleResource;
}

export type SupportedLanguage = 'pt-BR' | 'en-US';

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['pt-BR', 'en-US'];

export const DEFAULT_LANGUAGE = 'pt-BR' as const;

export const FALLBACK_LANGUAGE = 'pt-BR' as const;

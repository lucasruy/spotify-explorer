import {
  useI18n,
  type SupportedLanguage,
  SUPPORTED_LANGUAGES,
} from '@/shared/i18n';
import { Select, type SelectOption } from '@/shared/ui/select';

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  'pt-BR': 'Português',
  'en-US': 'English',
};

const LANGUAGE_OPTIONS: SelectOption[] = SUPPORTED_LANGUAGES.map(language => ({
  value: language,
  label: LANGUAGE_LABELS[language],
}));

export const LanguageSelector = () => {
  const { changeLanguage, getCurrentLanguage } = useI18n();
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (language: SupportedLanguage) => {
    changeLanguage(language);
  };

  return (
    <Select
      value={currentLanguage}
      onChange={event =>
        handleLanguageChange(event.target.value as SupportedLanguage)
      }
      options={LANGUAGE_OPTIONS}
    />
  );
};

import {
  useI18n,
  type SupportedLanguage,
  SUPPORTED_LANGUAGES,
} from '@/shared/i18n';

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  'pt-BR': 'Português',
  'en-US': 'English',
};

// TODO: Substituir select nativo pelo novo componente Select
export const LanguageSelector = () => {
  const { changeLanguage, getCurrentLanguage } = useI18n();
  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (language: SupportedLanguage) => {
    changeLanguage(language);
  };

  return (
    <div>
      <select
        value={currentLanguage}
        onChange={e =>
          handleLanguageChange(e.target.value as SupportedLanguage)
        }
      >
        {SUPPORTED_LANGUAGES.map(language => (
          <option key={language} value={language}>
            {LANGUAGE_LABELS[language]}
          </option>
        ))}
      </select>
    </div>
  );
};

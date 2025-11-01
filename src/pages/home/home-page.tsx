import { useI18n } from '@/shared/i18n';
import { LanguageSelector } from '@/shared/ui/language-selector';

export const HomePage = () => {
  const { t } = useI18n('home-page');

  return (
    <div>
      <LanguageSelector />
      <div>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </div>
    </div>
  );
};

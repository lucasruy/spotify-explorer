import { useI18n } from '@/shared/i18n';
import { LanguageSelector } from '@/shared/ui/language-selector';
import { ThemeToggle } from '@/shared/ui';

export const HomePage = () => {
  const { t } = useI18n('home-page');

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-4xl font-bold">{t('title')}</h1>
            <p className="text-muted-foreground">{t('subtitle')}</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import Link from 'next/link';

import { useI18n } from '@/shared/i18n';
import { LanguageSelector } from '@/shared/ui/language-selector';

export const NotFoundPage = () => {
  const { t } = useI18n('not-found-page');

  return (
    <div>
      <div>
        <LanguageSelector />
        <h1>{t('errorCode')}</h1>
        <h2>{t('title')}</h2>
        <p>{t('message')}</p>
        <Link href="/">{t('backToHome')}</Link>
      </div>
    </div>
  );
};

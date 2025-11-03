'use client';

import Link from 'next/link';

import { useI18n } from '@/shared/i18n';
import { Button, Card } from '@/shared/ui';

export const NotFoundPage = () => {
  const { t } = useI18n('not-found-page');

  const suggestionLinks = [
    {
      id: 'artists',
      title: t('tips.items.artists.title'),
      description: t('tips.items.artists.description'),
      href: '/artists',
    },
    {
      id: 'profile',
      title: t('tips.items.profile.title'),
      description: t('tips.items.profile.description'),
      href: '/profile',
    },
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <header className="mb-12 space-y-6 text-center md:mb-16 md:space-y-8">
          <span className="border-border/70 text-muted-foreground inline-flex items-center justify-center rounded-full border border-dashed px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
            {t('hero.badge')}
          </span>
          <div className="space-y-3 text-balance">
            <h1 className="text-foreground text-3xl font-semibold md:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-sm md:text-lg">
              {t('hero.description')}
            </p>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            {t('hero.hint')}
          </p>
        </header>

        <main className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <section className="space-y-6">
            <div className="border-border/60 bg-card/40 rounded-3xl border p-6 shadow-sm">
              <div className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold md:text-2xl">
                  {t('actions.title')}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {t('actions.description')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/">{t('actions.primary')}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/artists">{t('actions.secondary')}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-border/60 bg-card/40 rounded-3xl border p-6 shadow-sm">
              <div className="space-y-4">
                <h2 className="text-foreground text-xl font-semibold md:text-2xl">
                  {t('tips.title')}
                </h2>
                <ul className="space-y-4">
                  {suggestionLinks.map(item => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="border-border/60 hover:border-primary/60 hover:bg-primary/5 flex flex-col gap-2 rounded-2xl border p-4 transition"
                      >
                        <span className="text-foreground text-base font-semibold">
                          {item.title}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <aside>
            <Card
              className="h-full justify-between"
              title={t('status.messageTitle')}
              subtitle={t('status.codeLabel')}
              description={t('status.messageBody')}
              media={
                <div className="border-primary/60 bg-primary/10 text-primary flex h-24 w-24 items-center justify-center rounded-2xl border text-4xl font-semibold">
                  {t('status.codeValue')}
                </div>
              }
            >
              <p className="text-muted-foreground text-sm">
                {t('status.help')}
              </p>
            </Card>
          </aside>
        </main>
      </div>
    </div>
  );
};

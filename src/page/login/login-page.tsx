'use client';

import Link from 'next/link';

import { useI18n } from '@/shared/i18n';
import { Button, LanguageSelector, ThemeToggle } from '@/shared/ui';

type ProfilePageProps = {
  isLogged: boolean;
};

export const LoginPage = ({ isLogged }: ProfilePageProps) => {
  const { t } = useI18n('login-page');

  const loginLink = isLogged ? '/profile' : '/api/auth/spotify/login';

  const highlights = [
    {
      id: 'secure',
      label: t('hero.highlights.secure'),
    },
    {
      id: 'fast',
      label: t('hero.highlights.fast'),
    },
    {
      id: 'preview',
      label: t('hero.highlights.preview'),
    },
  ];

  const steps = [
    {
      id: 'connect',
      title: t('sections.steps.items.connect.title'),
      description: t('sections.steps.items.connect.description'),
    },
    {
      id: 'review',
      title: t('sections.steps.items.review.title'),
      description: t('sections.steps.items.review.description'),
    },
    {
      id: 'sync',
      title: t('sections.steps.items.sync.title'),
      description: t('sections.steps.items.sync.description'),
    },
  ];

  return (
    <div className="bg-background">
      <div className="relative">
        <div className="from-primary/15 pointer-events-none absolute inset-0 bg-linear-to-b via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16">
          <header className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="border-primary/40 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
                  {t('hero.badge')}
                </span>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
                    {t('tagline')}
                  </p>
                  <h1 className="text-foreground text-4xl leading-tight font-semibold text-balance md:text-6xl">
                    {t('title')}
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-3xl text-lg text-balance md:text-xl">
                  {t('subtitle')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-8">
                  <Link href={loginLink}>
                    {isLogged
                      ? t('cta.primary.connected')
                      : t('cta.primary.disconnected')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link
                    href="https://developer.spotify.com/documentation/web-api/howtos/web-app-profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('cta.secondary')}
                  </Link>
                </Button>
              </div>

              <ul className="text-muted-foreground grid gap-2 text-sm sm:grid-cols-3 sm:text-base">
                {highlights.map(highlight => (
                  <li key={highlight.id} className="flex items-center gap-2">
                    <span
                      className="bg-primary inline-flex h-2 w-2 rounded-full"
                      aria-hidden
                    />
                    <span>{highlight.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-end gap-3">
                <ThemeToggle />
                <LanguageSelector />
              </div>
              <div className="border-border bg-card/40 rounded-3xl border p-6 shadow-lg backdrop-blur">
                <div className="space-y-4">
                  <h2 className="text-foreground text-lg font-semibold">
                    {t('hero.card.title')}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {t('hero.card.description')}
                  </p>
                  <div className="space-y-3">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className="border-border/60 bg-background/40 rounded-2xl border p-4"
                      >
                        <div className="text-foreground flex items-center justify-between text-sm font-semibold">
                          <span>{step.title}</span>
                          <span className="text-muted-foreground text-xs">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="grid gap-12 pb-16 md:grid-cols-2">
            <section className="space-y-5">
              <h2 className="text-foreground text-2xl font-semibold md:text-3xl">
                {t('sections.security.title')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                {t('sections.security.description')}
              </p>
              <div className="border-primary/40 bg-primary/10 rounded-3xl border p-6">
                <h3 className="text-primary text-lg font-semibold">
                  {t('sections.security.callout.title')}
                </h3>
                <p className="text-primary/90 mt-2 text-sm">
                  {t('sections.security.callout.description')}
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-foreground text-2xl font-semibold md:text-3xl">
                {t('sections.support.title')}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                {t('sections.support.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="ghost"
                  className="border-border border px-6"
                >
                  <Link href="mailto:contato@spotify-explorer.app">
                    {t('sections.support.actions.contact')}
                  </Link>
                </Button>
                <Button asChild variant="link" className="text-primary px-0">
                  <Link href="/">{t('sections.support.actions.back')}</Link>
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

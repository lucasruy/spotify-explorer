'use client';

import Link from 'next/link';

import { useI18n } from '@/shared/i18n';
import { Button, LanguageSelector, ThemeToggle } from '@/shared/ui';

import {
  getFeatureCards,
  getHeroHighlights,
  getMetricCards,
  getUpcomingItems,
} from './home-page.helpers';

export const HomePage = () => {
  const { t } = useI18n('home-page');

  const heroHighlights = getHeroHighlights(t);
  const features = getFeatureCards(t);
  const metrics = getMetricCards(t);
  const upcomingItems = getUpcomingItems(t);

  return (
    <div className="bg-background">
      <div className="relative">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-linear-to-b via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16">
          <header className="grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,2fr)] md:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="border-primary/40 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase">
                  {t('hero.badge')}
                </span>
                <div className="space-y-3">
                  <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
                    {t('tagline')}
                  </p>
                  <h1 className="text-foreground text-4xl leading-tight font-semibold text-balance md:text-6xl">
                    {t('title')}
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl text-lg text-balance md:text-xl">
                  {t('subtitle')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-8">
                  <Link href="/login">{t('cta.primary')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="#features">{t('cta.secondary')}</Link>
                </Button>
              </div>

              <ul className="text-muted-foreground grid gap-2 text-sm sm:grid-cols-3 sm:text-base">
                {heroHighlights.map(highlight => (
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
              <div className="border-border bg-card/30 rounded-3xl border p-6 shadow-lg backdrop-blur">
                <div className="space-y-4">
                  <h2 className="text-foreground text-lg font-semibold">
                    {t('hero.preview.title')}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {t('hero.preview.description')}
                  </p>
                  <div className="border-primary/40 bg-primary/10 text-primary rounded-2xl border border-dashed p-4 text-sm">
                    {t('hero.preview.placeholder')}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-20 pb-16">
            <section
              id="features"
              aria-labelledby="features-heading"
              className="space-y-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <h2
                    id="features-heading"
                    className="text-foreground text-2xl font-semibold md:text-4xl"
                  >
                    {t('sections.features.title')}
                  </h2>
                  <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
                    {t('sections.features.description')}
                  </p>
                </div>
                <Button asChild variant="link" className="px-0">
                  <Link href="#upcoming">{t('sections.features.cta')}</Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map(feature => (
                  <article
                    key={feature.id}
                    className="group border-border bg-card/40 hover:border-primary/60 rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-foreground text-lg font-semibold md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                      {feature.description}
                    </p>
                    <Button variant="link" className="text-primary mt-4 px-0">
                      {feature.ctaLabel}
                    </Button>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="metrics"
              aria-labelledby="metrics-heading"
              className="space-y-8"
            >
              <div className="space-y-3">
                <h2
                  id="metrics-heading"
                  className="text-foreground text-2xl font-semibold md:text-4xl"
                >
                  {t('sections.metrics.title')}
                </h2>
                <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
                  {t('sections.metrics.description')}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {metrics.map(metric => (
                  <div
                    key={metric.id}
                    className="border-border bg-card/40 rounded-3xl border p-6 text-center shadow-sm"
                  >
                    <p className="text-foreground text-4xl font-semibold md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="upcoming"
              aria-labelledby="upcoming-heading"
              className="space-y-8"
            >
              <div className="space-y-3">
                <h2
                  id="upcoming-heading"
                  className="text-foreground text-2xl font-semibold md:text-4xl"
                >
                  {t('sections.upcoming.title')}
                </h2>
                <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
                  {t('sections.upcoming.description')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {upcomingItems.map(item => (
                  <article
                    key={item.id}
                    className="border-border bg-card/40 rounded-3xl border p-6 shadow-sm"
                  >
                    <h3 className="text-foreground text-lg font-semibold md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="border-primary/40 bg-primary/10 rounded-3xl border p-6 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-primary text-lg font-semibold md:text-xl">
                      {t('sections.upcoming.apiCallout.title')}
                    </h3>
                    <p className="text-primary/90 mt-1 text-sm md:text-base">
                      {t('sections.upcoming.apiCallout.description')}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/60 text-primary"
                  >
                    <Link
                      href="https://developer.spotify.com/documentation/web-api/howtos/web-app-profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('sections.upcoming.apiCallout.linkLabel')}
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

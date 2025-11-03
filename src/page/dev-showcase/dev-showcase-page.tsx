'use client';

import { useState } from 'react';

import { useI18n } from '@/shared/i18n';
import { Button, Card, Input, Pagination, ThemeToggle } from '@/shared/ui';

const BUTTON_VARIANTS = [
  {
    id: 'primary',
    labelKey: 'sections.buttons.variants.primary',
    variant: 'primary' as const,
  },
  {
    id: 'secondary',
    labelKey: 'sections.buttons.variants.secondary',
    variant: 'secondary' as const,
  },
  {
    id: 'outline',
    labelKey: 'sections.buttons.variants.outline',
    variant: 'outline' as const,
  },
  {
    id: 'inverted',
    labelKey: 'sections.buttons.variants.inverted',
    variant: 'inverted' as const,
  },
  {
    id: 'ghost',
    labelKey: 'sections.buttons.variants.ghost',
    variant: 'ghost' as const,
  },
  {
    id: 'destructive',
    labelKey: 'sections.buttons.variants.destructive',
    variant: 'destructive' as const,
  },
  {
    id: 'link',
    labelKey: 'sections.buttons.variants.link',
    variant: 'link' as const,
  },
];

const BUTTON_SIZES = [
  { id: 'xs', labelKey: 'sections.buttons.sizes.xs', size: 'xs' as const },
  { id: 'sm', labelKey: 'sections.buttons.sizes.sm', size: 'sm' as const },
  { id: 'md', labelKey: 'sections.buttons.sizes.md', size: 'md' as const },
  { id: 'lg', labelKey: 'sections.buttons.sizes.lg', size: 'lg' as const },
];

export const DevShowcasePage = () => {
  const { t } = useI18n('dev-showcase-page');
  const [activePage, setActivePage] = useState(3);

  return (
    <div className="bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="space-y-3 text-balance text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-dashed border-border/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t('hero.badge')}
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              {t('hero.description')}
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t('sections.buttons.title')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('sections.buttons.subtitle')}
              </p>
            </div>
            <ThemeToggle />
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t('sections.buttons.variantsTitle')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {BUTTON_VARIANTS.map(item => (
                  <Button key={item.id} variant={item.variant}>
                    {t(item.labelKey)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t('sections.buttons.sizesTitle')}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {BUTTON_SIZES.map(item => (
                  <Button key={item.id} size={item.size}>
                    {t(item.labelKey)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              {t('sections.card.title')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('sections.card.subtitle')}
            </p>
            <div className="mt-6">
              <Card
                title={t('sections.card.card.title')}
                subtitle={t('sections.card.card.subtitle')}
                description={t('sections.card.card.description')}
                media={
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-semibold text-primary">
                    LP
                  </div>
                }
                actions={
                  <>
                    <Button size="sm" variant="secondary">
                      {t('sections.card.card.follow')}
                    </Button>
                    <Button size="sm" variant="outline">
                      {t('sections.card.card.viewProfile')}
                    </Button>
                  </>
                }
              >
                <p className="text-sm text-muted-foreground">
                  {t('sections.card.card.content')}
                </p>
              </Card>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              {t('sections.input.title')}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('sections.input.subtitle')}
            </p>
            <div className="mt-6 space-y-4">
              <label className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                  {t('sections.input.searchLabel')}
                </span>
                <Input placeholder={t('sections.input.searchPlaceholder')} />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                  {t('sections.input.disabledLabel')}
                </span>
                <Input placeholder={t('sections.input.disabledPlaceholder')} disabled />
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {t('sections.pagination.title')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('sections.pagination.subtitle')}
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t('sections.pagination.currentPage', { value: activePage })}
            </span>
          </div>
          <div className="mt-6">
            <Pagination
              page={activePage}
              totalPages={8}
              onPageChange={setActivePage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

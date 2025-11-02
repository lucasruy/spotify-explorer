import type { HomePageTranslator, FeatureCard, MetricCard, UpcomingItem, Highlight } from "./home-page.types";

export const getHeroHighlights = (t: HomePageTranslator): Highlight[] => {
  return [
    {
      id: 'realtime-insights',
      label: t('hero.highlights.realtime'),
    },
    {
      id: 'localized-experience',
      label: t('hero.highlights.localized'),
    },
    {
      id: 'saved-favorites',
      label: t('hero.highlights.favorites'),
    },
  ];
};

export const getFeatureCards = (t: HomePageTranslator): FeatureCard[] => {
  return [
    {
      id: 'discovery-engine',
      title: t('sections.features.items.discovery.title'),
      description: t('sections.features.items.discovery.description'),
      ctaLabel: t('sections.features.items.discovery.cta'),
    },
    {
      id: 'precision-filters',
      title: t('sections.features.items.filters.title'),
      description: t('sections.features.items.filters.description'),
      ctaLabel: t('sections.features.items.filters.cta'),
    },
    {
      id: 'profile-studio',
      title: t('sections.features.items.details.title'),
      description: t('sections.features.items.details.description'),
      ctaLabel: t('sections.features.items.details.cta'),
    },
    {
      id: 'favorites-hub',
      title: t('sections.features.items.favorites.title'),
      description: t('sections.features.items.favorites.description'),
      ctaLabel: t('sections.features.items.favorites.cta'),
    },
  ];
};

export const getMetricCards = (t: HomePageTranslator): MetricCard[] => {
  return [
    {
      id: 'catalog',
      value: t('sections.metrics.items.catalog.value'),
      label: t('sections.metrics.items.catalog.label'),
    },
    {
      id: 'localization',
      value: t('sections.metrics.items.localization.value'),
      label: t('sections.metrics.items.localization.label'),
    },
    {
      id: 'favorites',
      value: t('sections.metrics.items.favorites.value'),
      label: t('sections.metrics.items.favorites.label'),
    },
  ];
};

export const getUpcomingItems = (t: HomePageTranslator): UpcomingItem[] => {
  return [
    {
      id: 'analytics',
      title: t('sections.upcoming.items.analytics.title'),
      description: t('sections.upcoming.items.analytics.description'),
    },
    {
      id: 'collaboration',
      title: t('sections.upcoming.items.collaboration.title'),
      description: t('sections.upcoming.items.collaboration.description'),
    },
    {
      id: 'integrations',
      title: t('sections.upcoming.items.integrations.title'),
      description: t('sections.upcoming.items.integrations.description'),
    },
  ];
};

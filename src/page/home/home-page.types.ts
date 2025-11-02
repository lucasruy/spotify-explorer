import type { TFunction } from 'i18next';

export type HomePageTranslator = TFunction<'home-page'>;

export type Highlight = {
  id: string;
  label: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export type MetricCard = {
  id: string;
  value: string;
  label: string;
};

export type UpcomingItem = {
  id: string;
  title: string;
  description: string;
};

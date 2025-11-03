import type { HTMLAttributes, ReactNode } from 'react';

export type CardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  media?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

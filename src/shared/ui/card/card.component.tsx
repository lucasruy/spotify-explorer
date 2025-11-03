import { forwardRef } from 'react';

import { cn } from '@/shared/lib';

import type { CardProps } from './card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      description,
      media,
      actions,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <article
        ref={ref}
        className={cn(
          'group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 shadow-sm transition hover:border-primary/60 hover:shadow-lg',
          className
        )}
        {...props}
      >
        {media ? (
          <div className="mb-4 flex items-center justify-center">
            {media}
          </div>
        ) : null}

        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {subtitle ?? 'Artist'}
          </p>
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">
            {title}
          </h3>
        </header>

        {description ? (
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}

        {children ? (
          <div className="mt-4 flex-1 text-sm text-muted-foreground">
            {children}
          </div>
        ) : null}

        {actions ? (
          <footer className="mt-6 flex items-center gap-3">
            {actions}
          </footer>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </article>
    );
  }
);

Card.displayName = 'Card';

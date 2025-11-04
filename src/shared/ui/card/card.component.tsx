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
          'group border-border/60 bg-card/50 hover:border-primary/60 relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 shadow-sm transition hover:shadow-lg',
          className
        )}
        {...props}
      >
        <div className="flex flex-1 flex-col">
          {media ? (
            <div className="mb-4 flex items-center justify-center">{media}</div>
          ) : null}

          <header className="space-y-1">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
              {subtitle ?? 'Artist'}
            </p>
            <h3 className="text-foreground text-xl font-semibold md:text-2xl">
              {title}
            </h3>
          </header>

          {description ? (
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              {description}
            </p>
          ) : null}

          {children ? (
            <div className="text-muted-foreground mt-4 text-sm">{children}</div>
          ) : null}
        </div>

        {actions ? (
          <footer className="mt-auto flex items-center gap-3 pt-6">
            {actions}
          </footer>
        ) : null}

        <div className="via-primary/40 pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </article>
    );
  }
);

Card.displayName = 'Card';

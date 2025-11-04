import type { RefObject } from 'react';

type SearchHeroSectionProps = {
  badge: string;
  title: string;
  description: string;
  headerRef:
    | RefObject<HTMLDivElement | null>
    | null;
};

export const SearchHeroSection = ({
  badge,
  title,
  description,
  headerRef,
}: SearchHeroSectionProps) => {
  return (
    <header
      ref={headerRef}
      className="mb-10 space-y-4 text-center md:mb-12 md:space-y-6"
    >
      <p className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
        {badge}
      </p>
      <div className="space-y-3 text-balance">
        <h1 className="text-foreground text-3xl font-semibold md:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
};

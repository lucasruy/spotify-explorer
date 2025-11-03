export const devShowcasePageEnUS = {
  hero: {
    badge: 'Dev only',
    title: 'Shared UI showcase',
    description:
      'Quick preview of shared UI primitives. Use this page during development to validate styles and interactions before shipping them to features.',
  },
  sections: {
    buttons: {
      title: 'Buttons',
      subtitle: 'Available variants and sizes for the shared button component.',
      variantsTitle: 'Variants',
      variants: {
        primary: 'Primary',
        secondary: 'Secondary',
        outline: 'Outline',
        inverted: 'Inverted',
        ghost: 'Ghost',
        destructive: 'Destructive',
        link: 'Link',
      },
      sizesTitle: 'Sizes',
      sizes: {
        xs: 'XS',
        sm: 'SM',
        md: 'MD',
        lg: 'LG',
      },
    },
    card: {
      title: 'Card',
      subtitle: 'Example with media, description, and actions.',
      card: {
        title: 'Favorite artist',
        subtitle: 'Indie / Pop',
        description: 'Cards handle layout, elevation, and hover accents.',
        follow: 'Follow',
        viewProfile: 'View profile',
        content:
          'Use the children slot to extend the card content with any React nodes.',
      },
    },
    input: {
      title: 'Input',
      subtitle: 'Ready for React Hook Form integration.',
      searchLabel: 'Search query',
      searchPlaceholder: 'Type to search...',
      disabledLabel: 'Disabled state',
      disabledPlaceholder: 'Disabled',
    },
    pagination: {
      title: 'Pagination',
      subtitle: 'Interactive component that keeps state between pages.',
      currentPage: 'Current page: {{value}}',
    },
  },
};

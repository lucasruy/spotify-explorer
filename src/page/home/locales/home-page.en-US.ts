export const homePageEnUS = {
  tagline: 'Artist analytics for modern teams',
  title: 'Launch artist intelligence for Spotify audiences',
  subtitle:
    'Spotify Explorer turns Spotify catalogue signals into a polished discovery experience with filters, favorites and charts ready for production.',
  hero: {
    badge: 'Open beta',
    highlights: {
      realtime: 'Realtime-ready caching with TanStack Query',
      localized: 'Localized copy for English and Portuguese',
      favorites: 'Favorites with validation and persistence',
    },
    preview: {
      title: 'Unified control center',
      description:
        'Monitor artist reach, spotlight top tracks and curate playlists from a single responsive dashboard.',
      placeholder: 'Live preview coming with the Spotify Web API connection.',
    },
  },
  cta: {
    primary: 'Get started now',
    secondary: 'Review the Spotify API plan',
  },
  sections: {
    features: {
      title: 'Purpose-built for discovery teams',
      description:
        'Deliver a premium Spotify browsing experience that respects performance, accessibility and growth targets.',
      cta: 'See what launches next',
      items: {
        discovery: {
          title: 'Discovery engine',
          description:
            'Beautiful artist cards with 20 results per page, seamless pagination and mobile-first layouts.',
          cta: 'Preview discovery flows',
        },
        filters: {
          title: 'Precision filters',
          description:
            'Debounced search by artist or album, contextual feedback and empty states designed for clarity.',
          cta: 'Refine catalog instantly',
        },
        details: {
          title: 'Profile studio',
          description:
            'Rich artist profiles with top tracks or albums, responsive tables and guided navigation patterns.',
          cta: 'Dive into artist insights',
        },
        favorites: {
          title: 'Favorites hub',
          description:
            'Curate favorite tracks with React Hook Form, Zod validations and Local Storage persistence.',
          cta: 'Capture favorite songs',
        },
      },
    },
    metrics: {
      title: 'Ready for a fast launch',
      description:
        'Every metric is grounded in the roadmap so you can move to production with confidence.',
      items: {
        catalog: {
          value: '20+',
          label: 'artists per page out of the box',
        },
        localization: {
          value: '2',
          label: 'languages fully localized on launch',
        },
        favorites: {
          value: 'Unlimited',
          label: 'favorites stored with client persistence',
        },
      },
    },
    upcoming: {
      title: 'On the launchpad',
      description:
        'We are extending the platform to become the go-to workspace for Spotify artist operations.',
      items: {
        analytics: {
          title: 'Interactive analytics',
          description:
            'Charts that highlight popularity spikes, follower trends and release momentum.',
        },
        collaboration: {
          title: 'Team collaboration',
          description:
            'Shared collections and review flows powered by Context API with useReducer.',
        },
        integrations: {
          title: 'Direct integrations',
          description:
            'Native Spotify Web API support starting with the Web App Profile guide.',
        },
      },
      apiCallout: {
        title: 'Spotify integration is almost live',
        description:
          'We are aligning with the official Web App Profile flow to deliver secure auth and rich artist metadata.',
        linkLabel: 'Open Spotify Web API · Web App Profile',
      },
    },
  },
} as const;

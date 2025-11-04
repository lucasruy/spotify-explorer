export const homePageEnUS = {
  tagline: 'Artist marketing powered by Spotify data',
  title: 'Turn discovery moments into unforgettable launches',
  subtitle:
    'Spotify Explorer combines curated listings, smart search and rich artist profiles to accelerate campaigns, delight fans and impress partners.',
  hero: {
    badge: 'Ready for marketing squads',
    highlights: {
      realtime: 'Connect with Spotify in under a minute',
      localized: 'Bilingual experience designed to expand into new territories',
      favorites: 'Light and dark themes that follow your brand identity',
    },
    preview: {
      title: 'Interactive showcase',
      description:
        'Blend highlights, metrics and CTAs inside a responsive dashboard crafted for commercial storytelling.',
      placeholder:
        'Sign in with Spotify to watch real data animate the experience.',
    },
  },
  cta: {
    primary: 'Sign in with Spotify',
    secondary: 'Explore the features',
  },
  sections: {
    features: {
      title: 'Crafted for memorable artist launches',
      description:
        'Charm press, partners and superfans with a complete journey—from discovery to deep artist storytelling.',
      cta: 'See what is coming next',
      items: {
        discovery: {
          title: 'Premium artist collection',
          description:
            'Showcase talent with immersive cards, smooth pagination and fully responsive layouts ready for showcases.',
          cta: 'Explore the collection',
        },
        filters: {
          title: 'Unified smart search',
          description:
            'Find artists, albums and tracks in one flow with contextual filters, guided suggestions and instant feedback.',
          cta: 'Try the unified search',
        },
        details: {
          title: 'Context-rich profiles',
          description:
            'Deliver popularity metrics, biographies and tailored calls-to-action in a layout designed for media moments.',
          cta: 'Open an artist profile',
        },
        favorites: {
          title: 'Personalized experience',
          description:
            'Benefit from customizable themes, intuitive navigation and localized copy tailored to each market.',
          cta: 'View the bilingual journey',
        },
      },
    },
    metrics: {
      title: 'Ready to present from day one',
      description:
        'Key indicators that prove Spotify Explorer delivers value the moment you sign in.',
      items: {
        catalog: {
          value: '3',
          label: 'core experiences live (discovery, search, profile)',
        },
        localization: {
          value: '2',
          label: 'languages with native copy at launch',
        },
        favorites: {
          value: 'Light & Dark',
          label: 'themes ready to activate your brand',
        },
      },
    },
    upcoming: {
      title: 'Roadmap built around activation',
      description:
        'Upcoming modules keep empowering marketing campaigns, reporting and partnerships around Spotify artists.',
      items: {
        analytics: {
          title: 'Engagement analytics',
          description:
            'Visual insights with top tracks, follower growth and campaign evolution ready for stakeholder decks.',
        },
        collaboration: {
          title: 'Shared collections',
          description:
            'Collaborative spaces where squads save highlights, align strategies and plan upcoming releases.',
        },
        integrations: {
          title: 'Connected playlists',
          description:
            'Import public playlists, spotlight followers and connect every action to ongoing campaigns.',
        },
      },
      apiCallout: {
        title: 'Official Spotify integration',
        description:
          'Fully compatible with Authorization Code + PKCE for secure authentication and trustworthy data straight from Spotify.',
        linkLabel: 'Read the Spotify Web API guide',
      },
    },
  },
} as const;

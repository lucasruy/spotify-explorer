export const profilePageEnUS = {
  tagline: 'Your Spotify workspace is live',
  title: 'Welcome back, {{name}}',
  subtitle:
    'Review your account details, monitor followers and confirm that everything is ready before exploring the catalog analytics.',
  hero: {
    badge: 'Connected account',
    avatarAlt: 'Spotify avatar for {{name}}',
  },
  cta: {
    primary: 'Open on Spotify',
    secondary: 'Return to home',
  },
  sections: {
    details: {
      title: 'Account information',
      description:
        'We only request the minimum data required to personalize your experience. Review and update the metadata anytime from your Spotify account.',
      email: 'Email',
      country: 'Country',
      plan: 'Plan',
      empty: 'Not provided',
    },
    followers: {
      title: 'Audience overview',
      description:
        'Keep an eye on your organic reach. This number helps calibrate the recommendations and reporting modules.',
      caption: 'Followers connected to this Spotify profile',
    },
  },
} as const;

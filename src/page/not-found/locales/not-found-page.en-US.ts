export const notFoundPageEnUS = {
  hero: {
    badge: '404 • Not found',
    title: 'We could not find that page',
    description:
      'The address you entered may have moved or no longer exists. Keep exploring Spotify Explorer using the suggestions below.',
    hint: 'Choose one of the shortcuts or return to the home page to continue.',
  },
  actions: {
    title: 'Where would you like to go next?',
    description:
      'Navigate using our primary routes or jump straight into the artist discovery flow.',
    primary: 'Back to home',
    secondary: 'Browse artists',
  },
  tips: {
    title: 'Suggested destinations',
    items: {
      artists: {
        title: 'Artists listing',
        description:
          'Meet the most popular creators fetched directly from the Spotify API.',
      },
      profile: {
        title: 'Your profile',
        description:
          'Review your Spotify information and quick actions once you are signed in.',
      },
    },
  },
  status: {
    codeLabel: 'Error code',
    codeValue: '404',
    messageTitle: 'What happened?',
    messageBody:
      'We checked across the site but could not match this URL to any existing page.',
    help: 'Need something else? Use the shortcuts or update the address in the browser.',
  },
} as const;
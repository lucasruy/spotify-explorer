export const artistListingPageEnUS = {
  hero: {
    badge: 'Trending artists',
    title: 'Explore popular artists on Spotify',
    description:
      'Track the creators listeners revisit the most and stay ahead of new releases powered by Spotify data.',
    filtersNotice: 'Showing artists for the default Spotify genre "{{genre}}".',
  },
  states: {
    loading: 'Loading popular artists...',
    error: 'We could not load artists right now.',
    unauthorized: 'Sign in to unlock the artist listing.',
    retry: 'Try again',
    empty: 'No artists found for these filters.',
    updating: 'Refreshing results...',
  },
  pagination: {
    summary: 'Page {{current}} of {{total}} • {{count}} artists',
  },
  card: {
    subtitleFallback: 'Popular artist',
    popularity: 'Popularity • {{value}}/100',
    mediaAlt: '{{name}} artist photo',
    spotifyCta: 'Open on Spotify',
    detailsCta: 'View details',
    followers: {
      label: 'Followers',
    },
    genres: {
      label: 'Genres',
    },
  },
};

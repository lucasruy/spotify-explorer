export const artistListingPageEnUS = {
  hero: {
    badge: 'Trending artists',
    title: 'Explore popular artists on Spotify',
    description:
      'Track the creators listeners revisit the most and stay ahead of new releases powered by Spotify data.',
    filtersNotice: 'Showing artists for the default Spotify genre "{{genre}}".',
    activeFilters: 'Active filters • Artist: {{artist}} • Genre: {{genre}}',
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
    previous: 'Previous',
    next: 'Next',
    current: 'Page {{page}}',
    summary: 'Showing {{start}} - {{end}} of {{total}} artists',
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
  filters: {
    title: 'Refine the results',
    description: 'Filter quickly by the artist name you want to investigate.',
    emptyValue: 'None',
    artistName: {
      label: 'Artist name',
      placeholder: 'Type an artist name',
    },
    genre: {
      label: 'Artist genre',
      placeholder: 'Select a genre',
      options: {
        pop: 'Pop',
        rock: 'Rock',
        'hip-hop': 'Hip Hop',
        electronic: 'Electronic',
        indie: 'Indie',
        metal: 'Metal',
        jazz: 'Jazz',
        latin: 'Latin',
        country: 'Country',
        'k-pop': 'K-Pop',
      },
    },
    actions: {
      apply: 'Apply filters',
      clear: 'Clear filters',
    },
  },
};

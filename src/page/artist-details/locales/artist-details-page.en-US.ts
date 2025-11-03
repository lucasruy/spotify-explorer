export const artistDetailsPageEnUS = {
  hero: {
    badge: 'Artist overview',
    description:
      'Genres: {{genres}}',
    backToListing: 'Back to artists',
    openSpotify: 'Open artist on Spotify',
    mediaAlt: '{{name}} artist photo',
  },
  sections: {
    about: {
      title: 'About this artist',
      subtitle:
        'Key metrics fetched directly from the Spotify API to help you understand the artist audience.',
      followersLabel: 'Followers',
      popularityLabel: 'Popularity',
      popularityValue: '{{value}} / 100',
      genresLabel: 'Genres',
      emptyGenres: 'No genres registered for this artist.',
    },
    quickActions: {
      title: 'Quick actions',
      subtitle: 'Need to keep exploring?',
      description: 'Jump to Spotify or go back to the artist listing.',
      spotifyCta: 'Open on Spotify',
      listingCta: 'Back to listing',
      helper:
        'More details will arrive soon, including top tracks and albums. For now, explore using the actions below.',
    },
  },
};

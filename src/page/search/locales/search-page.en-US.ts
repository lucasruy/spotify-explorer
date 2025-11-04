export const searchPageEnUS = {
  hero: {
    badge: 'Discovery lab',
    title: 'Search across artists, albums, and tracks',
    description:
      'Switch the filter to explore live data from the Spotify Search API.',
  },
  filters: {
    title: 'Choose which catalog to explore',
    description: 'Pick the content type you want to preview for this search.',
    select: {
      label: 'Content type',
    },
    options: {
      artists: 'Artists',
      albums: 'Albums',
      tracks: 'Tracks',
    },
  },
  results: {
    summary: 'Showing {{start}} - {{end}} of {{total}} {{category}}',
  },
  states: {
    loading: 'Loading search results…',
    error: 'We could not load this catalog right now.',
    retry: 'Try again',
    empty: 'No results found for this selection.',
    updating: 'Updating results…',
  },
  pagination: {
    previous: 'Previous',
    next: 'Next',
    current: 'Page {{page}}',
  },
  cards: {
    actions: {
      openSpotify: 'Open in Spotify',
    },
    mediaAlt: '{{name}} artwork',
    artists: {
      subtitleFallback: 'Genre unavailable',
      description: '{{followers}} followers • Popularity {{popularity}}',
    },
    albums: {
      subtitleFallback: 'Various artists',
      releaseFallback: 'Unknown year',
      description: 'Released {{releaseYear}} • {{totalTracks}} tracks',
    },
    tracks: {
      subtitleFallback: 'Various artists',
      albumFallback: 'Unknown album',
      description: '{{album}} • {{duration}}',
      explicitTag: 'Explicit',
    },
  },
} as const;

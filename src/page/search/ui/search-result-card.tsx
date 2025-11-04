import Link from 'next/link';

import type { SearchItem } from '@/features/search';
import { Button, Card, SpotifyIcon } from '@/shared/ui';

import {
  formatDuration,
  formatFollowers,
  getInitials,
  joinValues,
} from '../search-page.helpers';

type Translate = (key: string, params?: Record<string, unknown>) => string;

type SearchResultCardProps = {
  entry: SearchItem;
  t: Translate;
};

const CARD_LAYOUT_CLASSNAME = 'h-full min-h-[240px] md:min-h-[280px]';

const resolveMedia = (entry: SearchItem, t: Translate) => {
  const name = entry.item.name;
  const imageUrl =
    entry.type === 'artists'
      ? entry.item.imageUrl
      : entry.type === 'albums'
        ? entry.item.imageUrl
        : entry.item.album?.imageUrl;

  if (imageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageUrl}
        alt={t('cards.mediaAlt', { name })}
        className="h-20 w-20 rounded-2xl object-cover shadow-lg"
        width={80}
        height={80}
      />
    );
  }

  return (
    <div className="border-border/60 bg-muted text-muted-foreground flex h-20 w-20 items-center justify-center rounded-2xl border border-dashed text-lg font-semibold">
      {getInitials(name)}
    </div>
  );
};

const renderArtistCard = (
  entry: Extract<SearchItem, { type: 'artists' }>,
  t: Translate
) => {
  const genres = entry.item.genres.slice(0, 2);
  const subtitle = genres.length
    ? joinValues(genres)
    : t('cards.artists.subtitleFallback');

  const description = t('cards.artists.description', {
    followers: formatFollowers(entry.item.followers),
    popularity: entry.item.popularity,
  });

  return (
    <Card
      key={entry.item.id}
      title={entry.item.name}
      subtitle={subtitle}
      description={description}
      media={resolveMedia(entry, t)}
      actions={
        <Button asChild variant="secondary" kind="icon" size="sm">
          <Link
            href={entry.item.externalUrl}
            target="_blank"
            rel="noreferrer"
            title={t('cards.actions.openSpotify')}
          >
            <SpotifyIcon className="h-4 w-4" />
          </Link>
        </Button>
      }
      className={CARD_LAYOUT_CLASSNAME}
    />
  );
};

const renderAlbumCard = (
  entry: Extract<SearchItem, { type: 'albums' }>,
  t: Translate
) => {
  const artists = entry.item.artists.map(artist => artist.name);
  const subtitle = artists.length
    ? joinValues(artists)
    : t('cards.albums.subtitleFallback');

  const description = t('cards.albums.description', {
    releaseYear: entry.item.releaseYear ?? t('cards.albums.releaseFallback'),
    totalTracks: entry.item.totalTracks,
  });

  return (
    <Card
      key={entry.item.id}
      title={entry.item.name}
      subtitle={subtitle}
      description={description}
      media={resolveMedia(entry, t)}
      actions={
        <Button asChild variant="secondary" kind="icon" size="sm">
          <Link
            href={entry.item.externalUrl}
            target="_blank"
            rel="noreferrer"
            title={t('cards.actions.openSpotify')}
          >
            <SpotifyIcon className="h-4 w-4" />
          </Link>
        </Button>
      }
      className={CARD_LAYOUT_CLASSNAME}
    />
  );
};

const renderTrackCard = (
  entry: Extract<SearchItem, { type: 'tracks' }>,
  t: Translate
) => {
  const artists = entry.item.artists.map(artist => artist.name);
  const subtitle = artists.length
    ? joinValues(artists)
    : t('cards.tracks.subtitleFallback');

  const baseDescription = t('cards.tracks.description', {
    album: entry.item.album?.name ?? t('cards.tracks.albumFallback'),
    duration: formatDuration(entry.item.durationMs),
  });

  const description = entry.item.explicit
    ? `${baseDescription} · ${t('cards.tracks.explicitTag')}`
    : baseDescription;

  return (
    <Card
      key={entry.item.id}
      title={entry.item.name}
      subtitle={subtitle}
      description={description}
      media={resolveMedia(entry, t)}
      actions={
        <Button asChild variant="secondary" kind="icon" size="sm">
          <Link
            href={entry.item.externalUrl}
            target="_blank"
            rel="noreferrer"
            title={t('cards.actions.openSpotify')}
          >
            <SpotifyIcon className="h-4 w-4" />
          </Link>
        </Button>
      }
      className={CARD_LAYOUT_CLASSNAME}
    />
  );
};

export const SearchResultCard = ({ entry, t }: SearchResultCardProps) => {
  if (entry.type === 'artists') {
    return renderArtistCard(entry, t);
  }

  if (entry.type === 'albums') {
    return renderAlbumCard(entry, t);
  }

  return renderTrackCard(entry, t);
};

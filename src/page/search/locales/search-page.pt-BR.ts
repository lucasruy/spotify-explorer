export const searchPagePtBR = {
  hero: {
    badge: 'Modo preview',
    title: 'Pesquise artistas, álbuns e faixas',
    description:
      'Alterne o filtro para visualizar dados reais vindos da Spotify Search API.',
  },
  filters: {
    title: 'Escolha qual catálogo explorar',
    description: 'Defina o tipo de conteúdo que deseja testar nesta busca.',
    select: {
      label: 'Tipo de conteúdo',
    },
    options: {
      artists: 'Artistas',
      albums: 'Álbuns',
      tracks: 'Faixas',
    },
  },
  results: {
    summary: 'Exibindo {{start}} - {{end}} de {{total}} {{category}}',
  },
  states: {
    loading: 'Carregando resultados…',
    error: 'Não foi possível carregar este catálogo agora.',
    retry: 'Tentar novamente',
    empty: 'Nenhum resultado encontrado para esta seleção.',
    updating: 'Atualizando resultados…',
  },
  pagination: {
    previous: 'Anterior',
    next: 'Próxima',
    current: 'Página {{page}}',
  },
  cards: {
    actions: {
      openSpotify: 'Abrir no Spotify',
    },
    mediaAlt: 'Arte de {{name}}',
    artists: {
      subtitleFallback: 'Gênero indisponível',
      description: '{{followers}} seguidores • Popularidade {{popularity}}',
    },
    albums: {
      subtitleFallback: 'Vários artistas',
      releaseFallback: 'Ano desconhecido',
      description: 'Lançado em {{releaseYear}} • {{totalTracks}} faixas',
    },
    tracks: {
      subtitleFallback: 'Vários artistas',
      albumFallback: 'Álbum desconhecido',
      description: '{{album}} • {{duration}}',
      explicitTag: 'Explícita',
    },
  },
} as const;

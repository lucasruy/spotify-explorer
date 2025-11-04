export const artistListingPagePtBR = {
  hero: {
    badge: 'Artistas em destaque',
    title: 'Descubra artistas populares no Spotify',
    description:
      'Explore os artistas mais reproduzidos e acompanhe o que está em alta diretamente da API oficial do Spotify.',
    filtersNotice:
      'Listagem baseada no gênero padrão "{{genre}}" fornecido pelo Spotify.',
    activeFilters: 'Filtros ativos • Nome: {{artist}} • Gênero: {{genre}}',
  },
  states: {
    loading: 'Carregando artistas populares...',
    error: 'Não foi possível carregar os artistas agora.',
    unauthorized: 'Faça login para visualizar esta listagem.',
    retry: 'Tentar novamente',
    empty: 'Nenhum artista encontrado para este filtro.',
    updating: 'Atualizando resultados...',
  },
  pagination: {
    previous: 'Anterior',
    next: 'Próxima',
    current: 'Página {{page}}',
    summary: 'Exibindo {{start}} - {{end}} de {{total}} artistas',
  },
  card: {
    subtitleFallback: 'Artista popular',
    popularity: 'Popularidade • {{value}}/100',
    mediaAlt: 'Foto do artista {{name}}',
    spotifyCta: 'Abrir no Spotify',
    detailsCta: 'Ver detalhes',
    followers: {
      label: 'Seguidores',
    },
    genres: {
      label: 'Gêneros',
    },
  },
  filters: {
    title: 'Refine os resultados',
    description: 'Filtre rapidamente pelo nome do artista que deseja explorar.',
    emptyValue: 'Nenhum',
    artistName: {
      label: 'Nome do artista',
      placeholder: 'Digite o nome do artista',
    },
    genre: {
      label: 'Gênero musical',
      placeholder: 'Selecione um gênero',
      options: {
        pop: 'Pop',
        rock: 'Rock',
        'hip-hop': 'Hip Hop',
        electronic: 'Eletrônico',
        indie: 'Indie',
        metal: 'Metal',
        jazz: 'Jazz',
        latin: 'Latino',
        country: 'Country',
        'k-pop': 'K-Pop',
      },
    },
    actions: {
      apply: 'Aplicar filtros',
      clear: 'Limpar filtros',
    },
  },
};

export const artistListingPagePtBR = {
  hero: {
    badge: 'Artistas em destaque',
    title: 'Descubra artistas populares no Spotify',
    description:
      'Explore os artistas mais reproduzidos e acompanhe o que está em alta diretamente da API oficial do Spotify.',
    filtersNotice:
      'Listagem baseada no gênero padrão "{{genre}}" fornecido pelo Spotify.',
  },
  states: {
    loading: 'Carregando artistas populares...',
    error: 'Não foi possível carregar os artistas agora.',
    unauthorized: 'Faça login para visualizar esta listagem.',
    retry: 'Tentar novamente',
    empty: 'Nenhum artista encontrado para este filtro.',
    updating: 'Atualizando resultados...',
  },
  card: {
    subtitleFallback: 'Artista popular',
    popularity: 'Popularidade • {{value}}/100',
    mediaAlt: 'Foto do artista {{name}}',
    spotifyCta: 'Abrir no Spotify',
    followers: {
      label: 'Seguidores',
    },
    genres: {
      label: 'Gêneros',
    },
  },
};

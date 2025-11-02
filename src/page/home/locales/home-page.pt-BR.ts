export const homePagePtBR = {
  tagline: 'Inteligência de artistas para times modernos',
  title: 'Lance uma experiência premium para o público do Spotify',
  subtitle:
    'Spotify Explorer transforma sinais do catálogo da Spotify em descoberta elegante com filtros, favoritos e gráficos prontos para produção.',
  hero: {
    badge: 'Beta aberto',
    highlights: {
      realtime: 'Cache em tempo real com TanStack Query',
      localized: 'Conteúdo localizado em português e inglês',
      favorites: 'Favoritos com validação e persistência',
    },
    preview: {
      title: 'Painel unificado',
      description:
        'Monitore alcance, destaque top faixas e monte playlists em um dashboard responsivo.',
      placeholder: 'Preview ao vivo chega com a conexão Spotify Web API.',
    },
  },
  cta: {
    primary: 'Começar agora',
    secondary: 'Veja os recursos disponíveis',
  },
  sections: {
    features: {
      title: 'Feito sob medida para squads de descoberta',
      description:
        'Entregue uma navegação premium no Spotify respeitando performance, acessibilidade e metas de crescimento.',
      cta: 'Veja o que está chegando',
      items: {
        discovery: {
          title: 'Motor de descoberta',
          description:
            'Cards impecáveis com 20 resultados por página, paginação fluida e layout mobile-first.',
          cta: 'Explorar fluxos de descoberta',
        },
        filters: {
          title: 'Filtros de precisão',
          description:
            'Busca com debounce por artista ou álbum, feedback contextual e estados vazios claros.',
          cta: 'Refinar catálogo em segundos',
        },
        details: {
          title: 'Estúdio de perfis',
          description:
            'Perfis ricos com top faixas ou álbuns, tabelas responsivas e navegação guiada.',
          cta: 'Mergulhar nos insights',
        },
        favorites: {
          title: 'Hub de favoritos',
          description:
            'Curadoria de músicas com React Hook Form, validações Zod e persistência em Local Storage.',
          cta: 'Registrar faixas queridinhas',
        },
      },
    },
    metrics: {
      title: 'Pronto para um go-live ágil',
      description:
        'Cada métrica reflete o roadmap para você liberar em produção com confiança.',
      items: {
        catalog: {
          value: '20+',
          label: 'artistas por página nativamente',
        },
        localization: {
          value: '2',
          label: 'idiomas totalmente localizados',
        },
        favorites: {
          value: 'Ilimitado',
          label: 'favoritos com persistência no cliente',
        },
      },
    },
    upcoming: {
      title: 'Na pista de lançamento',
      description:
        'Estamos expandindo a plataforma para ser o cockpit definitivo de operações com artistas da Spotify.',
      items: {
        analytics: {
          title: 'Analytics interativos',
          description:
            'Gráficos que destacam picos de popularidade, seguidores e ritmo de lançamentos.',
        },
        collaboration: {
          title: 'Colaboração em equipe',
          description:
            'Coleções compartilhadas e revisões usando Context API com useReducer.',
        },
        integrations: {
          title: 'Integrações diretas',
          description:
            'Suporte nativo à Spotify Web API a partir do guia Web App Profile.',
        },
      },
      apiCallout: {
        title: 'Integração Spotify quase no ar',
        description:
          'Estamos alinhando com o fluxo oficial Web App Profile para entregar autenticação segura e metadados ricos.',
        linkLabel: 'Abrir Spotify Web API · Web App Profile',
      },
    },
  },
} as const;
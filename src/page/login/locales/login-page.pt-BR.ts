export const loginPagePtBR = {
  tagline: 'Acesso seguro à inteligência de artistas',
  title: 'Conecte seu perfil Spotify em segundos',
  subtitle:
    'Autentique com a Spotify para liberar dashboards personalizados, analytics curados e favoritos alinhados ao seu catálogo.',
  hero: {
    badge: 'Single sign-on com Spotify',
    highlights: {
      secure: 'OAuth 2.0 Authorization Code com PKCE',
      fast: 'Login em um clique e renovação automática da sessão',
      preview: 'Prévias dos insights e gráficos que estão chegando',
    },
    card: {
      title: 'Como a conexão funciona',
      description:
        'Guiamos você por um fluxo enxuto que preserva segurança e mantém toda a experiência com a cara do produto.',
    },
  },
  cta: {
    primary: {
      connected: 'Acessar perfil',
      disconnected: 'Conectar com Spotify',
    },
    secondary: 'Ver guia de integração',
  },
  sections: {
    steps: {
      items: {
        connect: {
          title: 'Autorize o acesso',
          description:
            'Você é redirecionado para a Spotify para conceder leitura do seu perfil público e e-mail.',
        },
        review: {
          title: 'Confira a conta',
          description:
            'Confirmamos sua identidade e armazenamos tokens com cookies HttpOnly criptografados.',
        },
        sync: {
          title: 'Sincronize seu workspace',
          description:
            'Em instantes a sessão está pronta e as consultas de dados são liberadas no app.',
        },
      },
    },
    security: {
      title: 'Pensado para ser seguro',
      description:
        'Tokens nunca tocam o local storage. Usamos cookies HttpOnly, tokens de curta duração e renovação sob demanda.',
      callout: {
        title: 'Transparência total',
        description:
          'Você pode revogar o acesso quando quiser pelo dashboard da Spotify e a sessão é encerrada imediatamente aqui.',
      },
    },
    support: {
      title: 'Precisa de ajuda para começar?',
      description:
        'Nosso time está pronto para orientar a conexão ou um onboarding corporativo caso precise de uma configuração sob medida.',
      actions: {
        contact: 'Falar com o time',
        back: 'Voltar para home',
      },
    },
  },
} as const;

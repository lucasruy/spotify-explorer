export const notFoundPagePtBR = {
  hero: {
    badge: '404 • Não encontrada',
    title: 'Não encontramos esta página',
    description:
      'O endereço informado pode ter sido movido ou não existe mais. Continue explorando o Spotify Explorer com as sugestões abaixo.',
    hint: 'Escolha um dos atalhos ou volte para a página inicial para seguir navegando.',
  },
  actions: {
    title: 'Para onde você quer ir agora?',
    description:
      'Use os principais caminhos da aplicação ou retome a descoberta de artistas.',
    primary: 'Voltar para a página inicial',
    secondary: 'Ir para a listagem de artistas',
  },
  tips: {
    title: 'Sugestões de navegação',
    items: {
      artists: {
        title: 'Listagem de artistas',
        description:
          'Descubra os artistas mais populares diretamente da API do Spotify.',
      },
      profile: {
        title: 'Seu perfil',
        description:
          'Revise seus dados do Spotify e ações rápidas após fazer login.',
      },
    },
  },
  status: {
    codeLabel: 'Código do erro',
    codeValue: '404',
    messageTitle: 'O que aconteceu?',
    messageBody:
      'Verificamos toda a aplicação, mas não encontramos nenhuma página com este endereço.',
    help: 'Precisa de algo diferente? Use os atalhos ou ajuste o endereço no navegador.',
  },
} as const;
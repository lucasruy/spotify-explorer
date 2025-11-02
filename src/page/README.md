# Pages Layer

O **Pages Layer** representa as páginas/rotas da aplicação (também conhecidas como telas ou atividades). É onde as páginas são compostas usando widgets, features e entities.

## Responsabilidades

- **UI da Página**: Interface da página incluindo estados de loading e error boundaries
- **Data Fetching**: Requisições de busca e mutação de dados específicos da página
- **Navegação**: Lógica de navegação específica da página
- **SEO**: Meta tags, títulos e otimizações específicas da página
- **Estado Local**: Pequenos bits de estado podem ser mantidos nos próprios componentes

## Características

- **Uma página por slice**: Geralmente uma página corresponde a uma slice
- **Páginas similares podem ser agrupadas**: Ex: registro e login em uma slice
- **Sem limite de código**: Desde que a equipe consiga navegar facilmente
- **UI não reutilizada**: Se um bloco de UI não é reutilizado, pode ficar dentro da página

## Exemplos de Pages

- **HomePage**: Página inicial com dashboard
- **ProfilePage**: Página de perfil do usuário
- **NotFoundPage**: Página de erro 404

## Estrutura Típica

```text
pages/
├── home/
│   ├── ui/             # Interface da página
│   ├── api/            # Data fetching específico (opcional)
│   └── index.ts
├── auth/               # Agrupamento de páginas similares
│   ├── ui/
│   │   ├── login.tsx
│   │   └── register.tsx
│   └── index.ts
└── error/
    ├── ui/
    └── index.ts
```

## Princípios

- **Pode** importar de todas as camadas inferiores (widgets, features, entities, shared)
- **Não é comum** ter um modelo de dados dedicado
- Foca na experiência completa do usuário
- Deve mapear para rotas específicas da aplicação

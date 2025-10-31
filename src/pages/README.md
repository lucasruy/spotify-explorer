# Pages Layer

O **Pages Layer** representa as páginas/rotas da aplicação. É a camada mais alta que orquestra widgets, features e entities para compor uma tela completa.

## Responsabilidades

- **Route Components**: Componentes que representam rotas específicas
- **Page Layout**: Layout específico de cada página
- **Data Fetching**: Carregamento de dados necessários para a página
- **SEO**: Meta tags, títulos e otimizações específicas
- **Navigation**: Lógica de navegação específica da página

## Características

- **Orquestração**: Combina widgets e features para formar uma página
- **Route-Specific**: Cada página corresponde a uma rota específica
- **Top-Level**: Camada mais alta da aplicação
- **User Journey**: Representa pontos do fluxo do usuário

## Exemplos de Pages

- **HomePage**: Página inicial com dashboard ou landing
- **ProductListPage**: Listagem de produtos com filtros
- **ProfilePage**: Página de perfil do usuário
- **NotFoundPage**: Página de erro 404

## Estrutura Típica

```text
pages/
├── home/
│   ├── home.page.tsx
│   ├── home.types.ts
│   └── index.ts
├── product/
│   ├── product-list.page.tsx
│   ├── product-detail.page.tsx
│   └── index.ts
├── auth/
│   ├── login.page.tsx
│   ├── register.page.tsx
│   └── index.ts
└── error/
    ├── not-found.page.tsx
    ├── error.page.tsx
    └── index.ts
```

## Princípios

- **Pode** importar de todas as camadas inferiores
- Deve ser mapeada para rotas específicas
- Foca na experiência completa do usuário
- Não deve conter lógica de negócio complexa (delegar para features)

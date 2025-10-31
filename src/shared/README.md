# Shared Layer

O **Shared Layer** contém código reutilizável que pode ser usado por qualquer camada superior da arquitetura FSD.

## Responsabilidades

### API

- **Client HTTP**: Configuração de clientes HTTP (axios, fetch)
- **Interceptors**: Middleware para requisições e respostas
- **Types**: Interfaces e tipos relacionados à API
- **Error Handling**: Tratamento centralizado de erros de API

### Lib

- **Configurações**: Setup de bibliotecas externas (React Query, i18n, etc.)
- **Adapters**: Adaptação de bibliotecas para o projeto
- **Constants**: Constantes específicas de bibliotecas

### Utils

- **Helpers**: Funções utilitárias gerais
- **Formatters**: Formatação de dados (datas, números, strings)
- **Validators**: Validadores reutilizáveis
- **Constants**: Constantes globais da aplicação

## Estrutura Típica

```text
shared/
├── api/
│   ├── client.ts          # Cliente HTTP configurado
│   ├── types.ts           # Types de API
│   └── interceptors.ts    # Interceptors
├── lib/
│   ├── react-query.ts     # Configuração React Query
│   ├── i18n.ts            # Configuração internacionalização
│   └── validation.ts      # Schemas de validação
└── utils/
    ├── formatters.ts      # Formatadores
    ├── helpers.ts         # Funções auxiliares
    └── constants.ts       # Constantes globais
```

## Princípios

- **Não deve** importar de `features`, `widgets`, `pages` ou `app`
- **Pode** importar apenas de outras partes do `shared` ou `entities`
- Deve ser agnóstico ao domínio da aplicação
- Todo código deve ser reutilizável e sem efeitos colaterais

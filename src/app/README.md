# App Layer

O **App Layer** é a camada mais alta da arquitetura FSD, responsável pela configuração global e inicialização da aplicação.

## Responsabilidades

- **Providers**: Configuração de context providers globais (estado, tema, autenticação)
- **Router**: Configuração das rotas principais da aplicação
- **Layout Global**: Estrutura base que envolve todas as páginas
- **Configurações**: Setup de bibliotecas globais e configurações de ambiente
- **Error Boundaries**: Tratamento de erros a nível de aplicação

## Estrutura Típica

```bash
app/
├── providers/          # Context providers globais
├── router/             # Configuração de rotas
├── layouts/            # Layouts base da aplicação
└── config/             # Configurações globais
```

## Princípios

- **Não deve** importar de `features`, `widgets`, `pages` ou `entities`
- **Pode** importar apenas de `shared`
- Deve ser o ponto de entrada da aplicação
- Mantém configurações que afetam toda a aplicação

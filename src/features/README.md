# Features Layer

O **Features Layer** contém as principais interações da aplicação - as coisas que os usuários realmente querem fazer. Essas interações frequentemente envolvem entidades de negócio.

## Princípio Fundamental

**Nem tudo precisa ser uma feature.** Um bom indicador de que algo deve ser uma feature é o fato de ser **reutilizada em várias páginas**.

## Responsabilidades

- **UI de Interação**: Interface para realizar a interação (ex: formulários)
- **API Calls**: Chamadas de API necessárias para executar a ação
- **Validação**: Validação e estado interno da feature
- **Feature Flags**: Configurações específicas da funcionalidade

## Características de uma Feature

- **Reutilizável**: Deve ser usada em múltiplas páginas
- **Interação do Usuário**: Representa algo que o usuário quer fazer
- **Isolada**: Não depende de outras features do mesmo nível
- **Descobrível**: Um newcomer deve descobrir funcionalidades olhando pages e features

## Estrutura Típica de uma Feature

```bash
feature-name/
├── ui/                 # Interface para realizar a interação
│   └── feature-form.tsx
├── api/                # Chamadas de API necessárias
│   └── create-something.api.ts
├── model/              # Validação e estado interno
│   ├── feature.schema.ts
│   └── feature.store.ts
├── config/             # Feature flags (opcional)
│   └── feature-flags.ts
└── index.ts            # API pública da feature
```

## Exemplos de Features

- **Comments**: Sistema de comentários usado em múltiplos editores
- **Authentication**: Login, logout, registro
- **Search**: Busca com filtros, usada em várias páginas

## Princípios

- **Pode** importar de `entities` e `shared`
- **Não deve** importar de `widgets`, `pages` ou `app`  
- **Não pode** importar diretamente de outras features (apenas via API pública)
- Deve expor uma API pública clara através do `index.ts`
- Otimize para a experiência de um newcomer descobrir áreas importantes do código

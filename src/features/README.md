# Features Layer

O **Features Layer** contém funcionalidades isoladas e específicas da aplicação. Cada feature representa uma capacidade completa do sistema.

## Responsabilidades

- **API**: Chamadas de API específicas da funcionalidade
- **Hooks**: Custom hooks relacionados à funcionalidade
- **Lib**: Utilitários exclusivos da feature
- **Model**: Modelo de dados da funcionalidade: schemas, interfaces, stores e lógica de negócios
- **UI**: Componentes de UI específicos da funcionalidade

## Características de uma Feature

- **Isolada**: Não depende de outras features
- **Completa**: Implementa uma funcionalidade do início ao fim
- **Reutilizável**: Pode ser usada em diferentes contextos
- **Testável**: Fácil de testar de forma isolada

## Estrutura Típica de uma Feature

```bash
feature-name/
├── api/
│   └── create-something.api.ts
├── hooks/
│   └── use-something.hook.ts
├── lib/
│   └── format-date.utils.ts
├── model/
│   └── feature.constants.ts
│   └── feature.store.ts
│   └── feature.types.ts
├── ui/
│   ├── feature-component.tsx
│   └── feature-form.tsx
└── index.ts                        # API pública da funcionalidade
```

## Exemplos de Features

- **Authentication**: Login, logout, registro
- **Profile Management**: Edição de perfil, upload de avatar
- **Search**: Busca com filtros e ordenação

## Princípios

- **Não deve** importar de `widgets`, `pages` ou `app`
- **Pode** importar de `shared` e `entities`
- **Pode** importar de outras `features` apenas através do `index.ts`
- Deve expor uma API pública clara através do `index.ts`

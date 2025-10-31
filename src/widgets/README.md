# Widgets Layer

O **Widgets Layer** contém componentes complexos que combinam múltiplas features ou entidades para criar funcionalidades compostas.

## Responsabilidades

- **Composite Components**: Componentes que agregam várias features
- **Layout Components**: Estruturas complexas de layout
- **Business Components**: Componentes com lógica de negócio específica
- **Integration**: Integração entre diferentes features

## Características

- **Composição**: Combina features e entities
- **Complexidade**: Mais complexos que componentes simples
- **Reutilização**: Podem ser reutilizados em diferentes páginas
- **Alto Nível**: Abstraem complexidade de implementação

## Exemplos de Widgets

- **Header**: Navegação + autenticação + busca
- **Sidebar**: Sidebar + menu
- **Comment Section**: Comentários + formulário + paginação
- **Dashboard Summary**: Múltiplas métricas e gráficos

## Estrutura Típica

```text
widgets/
├── header/
│   ├── header.widget.tsx
│   └── index.ts
├── sidebar/
│   ├── sidebar.widget.tsx
│   └── index.ts
└── dashboard-summary/
    ├── dashboard-summary.widget.tsx
    └── index.ts
```

## Princípios

- **Não deve** importar de `pages` ou `app`
- **Pode** importar de `features`, `entities` e `shared`
- Deve ser agnóstico à rota/página onde será usado
- Foca na composição, integração de funcionalidades e não implementa lógica complexa

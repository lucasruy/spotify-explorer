# Widgets Layer

O **Widgets Layer** é destinado a blocos grandes e autossuficientes de UI. São mais úteis quando reutilizados em múltiplas páginas ou quando uma página tem múltiplos blocos grandes e independentes.

## Responsabilidades

- **Blocos UI Autossuficientes**: Componentes complexos que funcionam independentemente
- **Layout Components**: Estruturas complexas de layout (ex: page layouts)
- **Reutilização Cross-Page**: Componentes usados em múltiplas páginas
- **Blocos Router**: Para sistemas de roteamento aninhado, podem funcionar como blocos completos de router

## Quando Usar

- ✅ **Reutilizado** em múltiplas páginas
- ✅ **Blocos independentes grandes** dentro de uma página
- ✅ **Page layouts** para organização
- ❌ **Conteúdo principal** de uma página que nunca é reutilizado

## Exemplos de Widgets

- **Header**: Navegação + autenticação + busca
- **Sidebar**: Menu lateral complexo
- **Dashboard Summary**: Múltiplas métricas e gráficos
- **Page Layout**: Layout base para páginas específicas

## Estrutura Típica

```text
widgets/
├── header/
│   ├── ui/
│   │   └── header.tsx
│   ├── api/            # Data fetching (opcional)
│   ├── model/          # Estado interno (opcional)
│   └── index.ts
├── sidebar/
│   ├── ui/
│   └── index.ts
└── page-layout/
    ├── ui/
    └── index.ts
```

## Princípios

- **Pode** importar de `features`, `entities` e `shared`
- **Não deve** importar de `pages` ou `app`
- Deve ser agnóstico à rota/página onde será usado
- Foca na composição e integração de funcionalidades

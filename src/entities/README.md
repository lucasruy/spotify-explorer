# Entities Layer

O **Entities Layer** representa as entidades de negócio e modelos de domínio da aplicação. É onde ficam os dados e a lógica de negócio pura.

## Responsabilidades

- **Models**: Definição de interfaces e tipos de entidades
- **Business Logic**: Lógica de negócio pura, sem dependências externas
- **Validation**: Regras de validação específicas das entidades
- **Transformers**: Transformação de dados entre diferentes formatos
- **Constants**: Constantes específicas do domínio

## Características

- **Agnósticos de Framework**: Não dependem de React, Vue, etc.
- **Independentes**: Não importam de outras camadas
- **Reutilizáveis**: Podem ser usados em qualquer contexto
- **Puros**: Sem efeitos colaterais ou dependências externas

## Estrutura Típica

```text
entities/
├── user/
│   ├── model.ts           # Interface User
│   ├── validation.ts      # Validações do User
│   └── constants.ts       # Constantes relacionadas
├── product/
│   ├── model.ts           # Interface Product
│   ├── business-logic.ts  # Regras de negócio
│   └── transformers.ts    # Transformações de dados
└── order/
    ├── model.ts           # Interface Order
    └── calculations.ts    # Cálculos de pedido
```

## Princípios

- **Não deve** importar de nenhuma outra camada
- **Pode** importar apenas tipos básicos e bibliotecas puras (como zod)
- Deve conter apenas lógica de domínio
- Não deve ter conhecimento sobre UI, API ou framework

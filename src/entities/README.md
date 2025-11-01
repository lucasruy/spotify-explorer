# Entities Layer

O **Entities Layer** representa conceitos do mundo real com os quais o projeto trabalha. Normalmente são os termos que o negócio usa para descrever o produto.

## Responsabilidades

- **Data Storage**: Armazenamento de dados
- **Data Validation**: Schemas de validação
- **API Requests**: Funções de requisição relacionadas à entidade
- **Visual Representation**: Representação visual da entidade na interface

## Características

- **Conceitos Reais**: Representam entidades do domínio de negócio
- **Reutilização Visual**: UI focada em reutilizar a mesma aparência em várias páginas
- **Sem Lógica Complexa**: UI não produz blocos completos, apenas representação base, pura

## Relacionamentos Entre Entities

Por padrão, slices não podem conhecer umas às outras. Porém, quando entidades se relacionam, use a **notação @x** para tornar a conexão explícita:

```typescript
// entities/artist/model/artist.ts
import type { Song } from "entities/song/@x/artist";

export interface Artist {
  name: string;
  songs: Array<Song>;
}

// entities/song/@x/artist.ts  
export type { Song } from "../model/song.ts";
```

## Estrutura Típica

```text
entities/
├── artist/
│   ├── @x/
│   │   └── song.ts           # Cross-import para Song entity
│   ├── model/
│   │   ├── artist.types.ts   # Interface Artist
│   │   └── artist.schema.ts  # Validações Zod
│   ├── api/
│   │   └── artist.api.ts     # Requests relacionadas ao Artist
│   ├── ui/
│   │   ├── artist-card.tsx   # Componente visual do Artist
│   │   └── artist-avatar.tsx
│   └── index.ts
├── song/
│   ├── @x/
│   │   └── artist.ts         # Cross-import para Artist entity
│   ├── model/
│   │   ├── song.types.ts     # Interface Song
│   │   └── song.schema.ts    # Validações Zod
│   ├── api/
│   │   └── song.api.ts       # API calls do Song
│   ├── ui/
│   │   ├── song-item.tsx     # Representação visual
│   │   └── song-duration.tsx
│   └── index.ts
└── user/
    ├── model/
    │   ├── user.types.ts
    │   ├── user.schema.ts
    │   └── user.hooks.ts     # Hooks específicos da entidade
    ├── api/
    │   └── user.api.ts
    ├── ui/
    │   ├── user-profile.tsx
    │   └── user-avatar.tsx
    └── index.ts
```

## Princípios

- **Não pode** importar de nenhuma outra camada
- **Representação visual** deve ser reutilizável, não blocos completos de UI
- **Relacionamentos** devem usar notação @x quando necessário
- **Lógica de interação** entre entidades fica em camadas superiores (Features/Pages)

## Quando NÃO é uma Entity

- **Dados de formulário temporários** (usar features ou pages)
- **Estados de UI** como loading, modais (usar shared/ui)
- **Configurações de aplicação** (usar shared/config)

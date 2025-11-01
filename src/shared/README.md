# Shared Layer

O **Shared Layer** forma a base da aplicação. É um lugar para criar conexões com o mundo externo (backends, bibliotecas de terceiros, ambiente) e definir bibliotecas próprias altamente contidas.

## Características Especiais

- **Não contém slices**, apenas segmentos diretamente
- **Não há domínios de negócio** nesta camada
- **Segmentos podem importar entre si livremente**
- **Base para toda a aplicação**

## Segmentos Típicos

### 📁 API

- **Cliente de API**: Configuração de clientes HTTP (axios, fetch)  
- **Funções de endpoints**: Funções para fazer requisições a endpoints específicos do backend

### 📁 UI

- **UI Kit da aplicação**: Componentes que não contêm lógica de negócio
- **Componentes business-themed**: Ex: logo da empresa, layout de página

### 📁 Lib

- **Bibliotecas internas**: Cada biblioteca deve ter uma área de foco (dates, colors, text)
- **Não é para helpers/utilities**: Evite que vire um "dump"
- **Documentação obrigatória**: Cada lib deve ter README explicando seu foco

### 📁 Config

- **Variáveis de ambiente**
- **Feature flags globais**
- **Configurações globais da aplicação**

### 📁 Routes

- **Constantes de rotas**
- **Padrões para matching de rotas**

### 📁 i18n

- **Setup de traduções**
- **Strings de tradução globais**

## Estrutura Típica

```text
shared/
├── api/
│   ├── client.ts          # Cliente HTTP configurado
│   └── endpoints.ts       # Funções para endpoints específicos
├── ui/
│   ├── button/            # Componente base
│   ├── input/             # Componente base  
│   └── layout/            # Layout base
├── lib/
│   ├── dates/             # Biblioteca focada em datas
│   │   ├── README.md      # Documentação da lib
│   │   └── index.ts
│   ├── validation/        # Schemas de validação
│   └── react-query/       # Configuração React Query
├── config/
│   └── env.ts             # Variáveis de ambiente
├── routes/
│   └── constants.ts       # Constantes de rotas
└── i18n/
    └── setup.ts           # Setup de traduções
```

## Princípios

- **Pode** importar apenas de outras partes do `shared`
- **Nomes descrevem propósito**, não essência (❌ components, hooks, types)
- **Agnóstico ao domínio** da aplicação
- **Todo código deve ser reutilizável** e sem efeitos colaterais

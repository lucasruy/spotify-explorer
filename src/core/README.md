# Core Layer

O **Core Layer** representa uma adaptação da camada **App Layer** do FSD para trabalhar com Next.js. Esta adaptação é necessária porque o Next.js já possui sua própria estrutura de App Router em `/src/app`, então o Core Layer concentra as configurações globais e lógica de aplicação que não estão diretamente relacionadas ao roteamento.

## Responsabilidades

- **Providers**: Configuração de context providers globais (estado, tema, autenticação)
- **Store**: Configuração do store global
- **Styles**: Estilos globais da aplicação
- **Error Boundaries**: Tratamento de erros a nível de aplicação
- **Analytics**: Configurações de analytics e métricas globais

## Segmentos Típicos

```bash
core/                   # Equivale ao App Layer do FSD
├── providers/          # Context providers globais
├── store/              # Configuração do store global
├── styles/             # Estilos globais
└── config/             # Configurações da aplicação

app/                    # Next.js App Router (fora do Core)
├── layout.tsx          # Layout raiz com providers
├── page.tsx            # Página inicial
└── [...routes]/        # Demais rotas
```

> **Nota**: No Next.js, separamos o **Core Layer** (configurações) do **App Router** (roteamento) para manter a compatibilidade com ambas as arquiteturas.

## Características

- **Adaptação FSD + Next.js**: Complementa o App Router do Next.js sem conflitar
- **Não contém slices**, apenas segmentos diretamente
- **Segmentos podem importar entre si livremente**
- **Pode** importar de todas as camadas inferiores quando necessário
- Combina todos os domínios de negócio da aplicação
- Centraliza configurações globais que não pertencem ao roteamento

# Spotify Explorer

## Visão Geral

Spotify Explorer é uma aplicação Next.js 16 focada em descoberta de artistas da Spotify Web API. O projeto usa arquitetura Feature-Sliced Design (FSD) para organizar páginas, features, entidades e widgets, expõe uma UI responsiva com Tailwind CSS 4 e já suporta internacionalização em português e inglês.

## Stack Principal

### Runtime

- Next.js 16.0.1 (App Router) com React 19.2
- TypeScript 5.9 configurado em modo `strict`
- Tailwind CSS 4.1 com `@tailwindcss/postcss`
- Shadcn UI (componentes em `src/shared/ui`) sobre `class-variance-authority`
- TanStack React Query 5.90 + Devtools
- React Hook Form 7.65 com validação Zod 4.1
- i18next 25 + `react-i18next` 16 com detector de idioma
- Fetch nativo encapsulado no `HttpClient` (`src/shared/api/http-client.ts`)

### Ferramentas e Qualidade

- ESLint 9 (`eslint-config-next` core-web-vitals)
- Prettier 3 + `prettier-plugin-tailwindcss`
- pnpm (lockfile `pnpm-lock.yaml`)
- Fonts Geist (Next Fonts)

## Arquitetura (FSD)

- `src/app`: rotas, handlers `route.ts` e entrypoints do App Router
- `src/core`: providers globais (Tema, i18n, React Query)
- `src/page`: composições de página + registros de tradução para páginas
- `src/features`: lógica de domínio orientada a casos de uso (auth, artist listing, artist details, user)
- `src/entities`: modelos e mapeamentos da Spotify API
- `src/widgets`: blocos de UI com dependências de múltiplas camadas (`Navbar`)
- `src/shared`: UI kit, client HTTP, i18n, utilitários e helpers
- `public`: assets estáticos

## Recursos Concluídos

- **Home** marketing (`src/page/home/home-page.tsx`) com highlights, métricas e roadmap
- **Autenticação Spotify** via PKCE (`src/app/api/auth/spotify/login/route.ts`, `src/app/api/auth/spotify/callback/route.ts`, helpers em `src/features/auth`)
- **Navbar dinâmica** com avatar, toggle de tema e seletor de idioma (`src/widgets/navbar`)
- **Listagem de artistas populares** com filtros por nome/genre, paginação e feedback states (`src/page/artist-listing/artist-listing-page.tsx` + hook `usePopularArtists`)
- **Detalhes de artista** com ações rápidas e métricas (`src/page/artist-details/artist-details-page.tsx`)
- **Perfil do usuário autenticado** com dados normalizados (`src/page/profile/profile-page.tsx` + `src/features/user/api/get-current-user.api.ts`)
- **Dev Showcase** para inspeção de componentes compartilhados (rota `src/app/dev/components/page.tsx`, disponível apenas em desenvolvimento)
- **Internacionalização** centralizada (`src/page/register-i18n-resources.ts`, hook `useI18n`) com `LanguageSelector`
- **Tema claro/escuro** persistido em `localStorage` (`src/core/providers/theme-provider`) e `ThemeToggle`

## Backlog Imediato

- Página de listagem de artistas, albuns e músicas
- Evolução da página de detalhes de artista:
  - Com top tracks e álbuns do artista
  - Tabela paginada de músicas/álbuns
  - Gráficos com picos de popularidade do artista
- Formulário de favoritos com React Hook Form + persistência local
- Melhorias na listagem (responsividade mobile-first mais rigorosa)
- Evolução página de perfil:
  - Buscar playlists públicas
  - Artistas mais ouvidos
- Refresh token para o fluxo de autenticação (atualmente apenas acessa tokens válidos armazenados)

## Requisitos

- Node.js 18.17 ou superior
- pnpm 10.x (`corepack enable` recomendado)
- Conta Spotify com aplicativo registrado (Client ID/Secret e Redirect URI)

## Instalação

```bash
pnpm install
```

## Variáveis de Ambiente

Crie `.env.local` a partir de `.env.example` e informe:

- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REDIRECT_URI` (ex.: `http://127.0.0.1:3000/api/auth/spotify/callback`)
- `SPOTIFY_SCOPES` (opcional; se omitido usa `SPOTIFY_DEFAULT_SCOPES` definidos em `src/features/auth/config/auth.config.ts`)

> Guia oficial da Spotify Web API para criar `Client ID` e `Client Secret`: [Register your app](https://developer.spotify.com/documentation/web-api/concepts/apps#register-your-app)

A validação acontece em `getSpotifyEnv` (`src/features/auth/model/auth.model.ts`). Variáveis ausentes derrubam o fluxo de login e retornam 500 nos handlers `route.ts`.

## Ambiente Local e Spotify

Durante o desenvolvimento use **sempre** `http://127.0.0.1:3000`. A dashboard da Spotify compara o domínio do navegador com o `redirect_uri` cadastrado. Alguns navegadores resolvem `http://localhost` para IPv6 (`http://[::1]`), o que quebra a correspondência exata e resulta em erro de callback. Forçar `127.0.0.1` evita esse desalinhamento e garante o sucesso do PKCE.

## Execução e Build

```bash
# Ambiente de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Servir build localmente
pnpm start
```

## Scripts Disponíveis

| Script | Descrição |
| --- | --- |
| `pnpm dev` | Sobe o Next.js em modo desenvolvimento na porta 3000 |
| `pnpm build` | Gera a build de produção do Next.js |
| `pnpm start` | Executa `next start` utilizando a build gerada |
| `pnpm lint` | Roda o ESLint com as regras core-web-vitals |
| `pnpm lint:fix` | Executa ESLint com `--fix` |
| `pnpm format` | Aplica Prettier em todo o projeto |
| `pnpm format:check` | Verifica formatação com Prettier |
| `pnpm preview` | Script legado (usa `vite preview` e não está funcional no setup atual) |

Verifique [package.json](package.json) para detalhes adicionais.

## Fluxo de Autorização Spotify

> Referência oficial da Spotify Web API: [Authorization guide](https://developer.spotify.com/documentation/web-api/concepts/authorization)

1. `/api/auth/spotify/login` inicia o fluxo Authorization Code PKCE: gera `code_verifier` (`generateCodeVerifier`), cria o hash `code_challenge`, persiste o verifier em cookie HttpOnly (`setCodeVerifierCookie`) e redireciona o usuário para o consentimento.
2. O usuário concede acesso e a Spotify devolve `code` para `/api/auth/spotify/callback`. A rota recupera o verifier (`readCodeVerifier`), chama `exchangeCodeForTokens` para trocar o `code` pelos tokens e persiste `access_token`, `refresh_token` (quando fornecido) e data de expiração via `storeTokens`.
3. Em requests server-side subsequentes, `getValidAccessToken` (`src/features/auth/model/auth-server.helpers.ts`) tenta ler o token e checar expiração (`isAccessTokenExpired`). Se estiver válido, é reutilizado na chamada para a Web API.
4. Ainda não há estratégia de refresh automático: quando o token expira, o usuário precisa reiniciar o fluxo para obter novos tokens.

## Integração com a Spotify Web API

- **Listagem**: `src/app/api/artists/popular/route.ts` chama `https://api.spotify.com/v1/search`, aplica normalização e devolve `PopularArtistsResponse` consumido pelo hook `usePopularArtists`.
- **Detalhes**: `src/features/artist-details/api/get-artist-details.api.ts` acessa `https://api.spotify.com/v1/artists/{id}` e reusa o mapper `mapArtist` (`src/entities/artist`).
- **Perfil**: `src/features/user/api/get-current-user.api.ts` consome `https://api.spotify.com/v1/me` e mapeia com `mapUserProfile` (`src/entities/user`).

Todos os mapeamentos são centralizados em `src/entities` para manter dados normalizados nas camadas superiores.

## Internacionalização

- Recursos registrados dinamicamente por namespace via `registerPagesI18nResources` (`src/page/register-i18n-resources.ts`).
- Idiomas suportados: `pt-BR` (padrão/fallback) e `en-US` (`src/shared/i18n/i18n.types.ts`).
- Detecção de idioma por `localStorage`, navigator e tag HTML (ver `initializeI18n`).
- Usuário pode alternar manualmente pelo `LanguageSelector` (`src/shared/ui/language-selector`).

## Tema e Design System

- Paleta clara e escura declarada em `src/app/globals.css` usando `@theme` do Tailwind 4.
- `ThemeProvider` (`src/core/providers/theme-provider/theme.provider.tsx`) salva a preferência no `localStorage` e aplica a classe (`light` ou `dark`) na raiz.
- Componentes base (Button, Card, Input, Pagination, ThemeToggle, SpotifyIcon) ficam em `src/shared/ui` seguindo o estilo Shadcn, com variantes configuradas via `class-variance-authority`.

## Dados e Cache

- TanStack Query inicializado em `ReactQueryProvider` (`src/core/providers/react-query-provider`) com `staleTime` de 5 minutos e Devtools habilitados em desenvolvimento.
- `HttpClient` (`src/shared/api/http-client.ts`) padroniza chamadas `fetch`, headers e políticas de cache; a instância `artistListingClient` encapsula o acesso aos handlers internos.
- A camada de features cuida da sanitização e validação com Zod (`artistListingFiltersSchema`) antes de disparar requisições.

## Boas Práticas e Qualidade

- Lint obrigatório via `pnpm lint`; use `pnpm lint:fix` para autofix.
- Formatação garantida com `pnpm format`.
- Testes automatizados ainda não foram implementados; consulte [ROADMAP.md](ROADMAP.md) para o planejamento.
- A estrutura FSD e convenções adicionais estão documentadas em [SCOPE.md](SCOPE.md) e [AGENTS.md](AGENTS.md).

## Deploy na Vercel

- A Vercel executa `pnpm install`, `pnpm build` e `next start` automaticamente.
- Configure as variáveis de ambiente (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REDIRECT_URI`, `SPOTIFY_SCOPES`) na dashboard da Vercel.
- O `redirect_uri` público deve apontar para `https://<dominio>/api/auth/spotify/callback` e ser registrado também na dashboard da Spotify.
- Preview deployments são habilitados por branch; a rota `/dev/components` é protegida para não vazar em produção (`notFound()` quando `NODE_ENV === 'production'`).

## Próximos Passos

- Priorizar itens P0/P1 do roadmap (favoritos, gráficos, refinamentos de listagem).
- Revisar o script `pnpm preview` ou removê-lo para evitar ruídos.
- Implementar refresh token e expirations para melhorar UX autenticada.
- Cobrir features críticas com testes (React Testing Library + Jest) seguindo o guia em `AGENTS.md`.

# Sistema de Internacionalização (i18n)

## Arquitetura

O sistema de i18n foi projetado seguindo os princípios do **Feature Sliced Design (FSD)** e boas práticas de escalabilidade:

### Estrutura Organizacional

A organização atual implementa um **padrão híbrido** que combina:

1. **Organização por pasta**: Cada página/feature tem sua própria pasta
2. **Agrupamento de locales**: Locales organizados por idioma em um único objeto
3. **Registro simplificado**: Uma única função para registrar todos os idiomas de um namespace

### Vantagens da Estrutura Atual

- ✅ **Escalabilidade**: Fácil adição de novas páginas e idiomas
- ✅ **Manutenibilidade**: Código relacionado fica junto (colocation)
- ✅ **Type Safety**: Tipagem forte com `as const`
- ✅ **Performance**: Registro otimizado com uma única chamada por namespace
- ✅ **Organização**: Estrutura clara e previsível

### Estrutura de Camadas

```bash
src/
├── shared/lib/i18n/                      # Configuração base do i18n (shared layer)
│   ├── i18n.config.ts                    # Configuração do i18next
│   ├── i18n.types.ts                     # Tipos e constantes
│   ├── use-i18n.hooks.ts                 # Hook customizado
│   ├── README.md                         # Documentação
│   └── index.ts                          # Exportações públicas
├── app/providers/i18n-provider/          # Provider do i18n (app layer)
├── pages/[slug]/locales/                 # Traduções específicas das páginas
│   └── register-i18n-resources.ts        # Registro centralizado
└── shared/components/language-selector/  # Componente de seleção de idioma
```

## Como Usar

### 1. Nas Páginas (Pages Layer)

```typescript
// src/pages/my-page.tsx
import { useI18n } from '@/shared/lib/i18n';

export const MyPage = () => {
  const { t } = useI18n('my-page'); // namespace específico da página
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};
```

### 2. Criando Novos Locales

Para adicionar uma nova página com traduções, siga a estrutura organizada:

**1. Crie a estrutura de pastas:**

```bash
src/pages/my-page/
├── locales/
│   ├── my-page.pt-BR.ts
│   ├── my-page.en-US.ts
│   └── index.ts              # Agrupa os locales por idioma
├── my-page.tsx
└── index.ts                  # Exports da página
```

**2. Crie os arquivos de locale:**

```typescript
// src/pages/my-page/locales/my-page.pt-BR.ts
export const myPagePtBR = {
  title: 'Minha Página',
  description: 'Descrição da página',
} as const;

// src/pages/my-page/locales/my-page.en-US.ts
export const myPageEnUS = {
  title: 'My Page',
  description: 'Page description',
} as const;
```

**3. Agrupe os locales por idioma:**

```typescript
// src/pages/my-page/locales/index.ts
import { myPageEnUS } from "./my-page.en-US";
import { myPagePtBR } from "./my-page.pt-BR";

export const myPageLocales = {
  'pt-BR': myPagePtBR,
  'en-US': myPageEnUS,
};
```

**4. Exporte da página:**

```typescript
// src/pages/my-page/index.ts
export { MyPage } from "./my-page";
export { myPageLocales } from "./locales";
```

**5. Registre os recursos:**

```typescript
// src/pages/register-i18n-resources.ts
import { myPageLocales } from './my-page';

export const registerPagesI18nResources = () => {
  // ... recursos existentes
  
  // Novos recursos
  registerI18nResources('my-page', myPageLocales);
};
```

### 3. Para Features (Features Layer)

Quando criar features mais complexas, siga o mesmo padrão organizacional:

```bash
src/features/artist-listing/
├── locales/
│   ├── artist-listing.pt-BR.ts
│   ├── artist-listing.en-US.ts
│   └── index.ts                    # Agrupa locales por idioma
├── components/
│   └── artist-card.tsx
├── register-i18n-resources.ts      # Registro específico da feature
└── index.ts                        # Exports da feature
```

**Estrutura do registro da feature:**

```typescript
// src/features/artist-listing/register-i18n-resources.ts
import { registerI18nResources } from '@/shared/lib/i18n';
import { artistListingLocales } from './locales';

export const registerArtistListingI18nResources = () => {
  registerI18nResources('artist-listing', artistListingLocales);
};
```

## Princípios de Design

### 1. **Separação por Domínio**

- Cada camada (pages, features, widgets) mantém seus próprios locales
- Evita centralização de locales em um único arquivo

### 2. **Namespaces Específicos**

- Cada página/feature/widget tem seu próprio namespace
- Previne conflitos de chaves de tradução

### 3. **Registro Dinâmico**

- Recursos são registrados dinamicamente durante a inicialização
- Permite carregamento lazy de traduções no futuro

### 4. **Type Safety**

- Uso do `as const` para garantir tipagem estrita
- Tipos específicos para idiomas suportados

## 🔧 Funcionalidades

### Hook Customizado

```typescript
const { t, changeLanguage, getCurrentLanguage, isLoading } = useI18n('namespace');
```

### Função de Registro Melhorada

A função `registerI18nResources` foi criada para aceitar um objeto com todos os idiomas de uma vez:

```typescript
// Assinatura da função
registerI18nResources(
  namespace: string,
  resources: Record<string, unknown>
)

// Exemplo de uso
const myPageLocales = {
  'pt-BR': myPagePtBR,
  'en-US': myPageEnUS,
};

registerI18nResources('my-page', myPageLocales);
```

### Detecção Automática de Idioma

- Prioridade: localStorage → navegador → fallback (pt-BR)
- Persistência automática no localStorage

### Fallback Inteligente

- Sistema de fallback para chaves não encontradas
- Fallback de idioma para pt-BR

## Expandindo o Sistema

### Para Widgets ou Shared Components

```typescript
// src/widgets/header/locales/header.pt-BR.ts
export const headerPtBR = {
  navigation: {
    home: 'Início',
    search: 'Buscar',
    favorites: 'Favoritos',
  },
} as const;
```

### Para Validações e Formulários

```typescript
// src/features/search-form/locales/validation.pt-BR.ts
export const validationPtBR = {
  required: 'Campo obrigatório',
  minLength: 'Mínimo de {{count}} caracteres',
  email: 'Email inválido',
} as const;

// Uso com interpolação
t('minLength', { count: 3 }) // "Mínimo de 3 caracteres"
```

### Para Features com Sub-componentes

```typescript
// Estrutura recomendada para features grandes
src/features/artist-search/
├── locales/
│   ├── artist-search.pt-BR.ts    # Textos principais
│   ├── filters-panel.pt-BR.ts    # Textos dos filtros
│   ├── results-grid.pt-BR.ts     # Textos dos resultados
│   ├── artist-search.en-US.ts    # Textos principais (EN)
│   ├── filters-panel.en-US.ts    # Textos dos filtros (EN)
│   ├── results-grid.en-US.ts     # Textos dos resultados (EN)
│   └── index.ts                  # Agrupa todos os locales
├── ui/
│   ├── search-form/
│   ├── filters-panel/
│   └── results-grid/
├── register-i18n-resources.ts
└── index.ts
```

**Exemplo de agrupamento de múltiplos namespaces:**

```typescript
// src/features/artist-search/locales/index.ts
import { artistSearchPtBR } from './artist-search.pt-BR';
import { filtersPtBR } from './filters-panel.pt-BR';
import { resultsPtBR } from './results-grid.pt-BR';
import { artistSearchEnUS } from './artist-search.en-US';
import { filtersEnUS } from './filters-panel.en-US';
import { resultsEnUS } from './results-grid.en-US';

export const artistSearchLocales = {
  'pt-BR': artistSearchPtBR,
  'en-US': artistSearchEnUS,
};

export const filtersLocales = {
  'pt-BR': filtersPtBR,
  'en-US': filtersEnUS,
};

export const resultsLocales = {
  'pt-BR': resultsPtBR,
  'en-US': resultsEnUS,
};
```

**Registro de múltiplos namespaces:**

```typescript
// src/features/artist-search/register-i18n-resources.ts
import { registerI18nResources } from '@/shared/lib/i18n';
import { 
  artistSearchLocales, 
  filtersLocales, 
  resultsLocales 
} from './locales';

export const registerArtistSearchI18nResources = () => {
  registerI18nResources('artist-search', artistSearchLocales);
  registerI18nResources('artist-filters', filtersLocales);
  registerI18nResources('search-results', resultsLocales);
};
```

## Idiomas Suportados

- **pt-BR**: Português (Brasil) - Padrão
- **en-US**: Inglês (Estados Unidos)

### Adicionando Novos Idiomas

**1. Adicione o idioma em `i18n.types.ts`:**

```typescript
export type SupportedLanguage = 'pt-BR' | 'en-US' | 'es-ES';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['pt-BR', 'en-US', 'es-ES'];
```

2. Crie os novos arquivos de locale seguindo o padrão organizacional

3. Registre os recursos nos helpers de registro

## Componente de Seleção de Idioma

O `LanguageSelector` está disponível em `shared/components` e pode ser usado em qualquer lugar da aplicação para permitir que o usuário troque o idioma.

## Debugging

Em modo de desenvolvimento, o i18next estará em modo debug, mostrando informações úteis no console para ajudar na identificação de problemas com traduções.

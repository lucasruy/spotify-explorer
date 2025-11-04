# React Query Provider

Este provider centraliza a configuração do TanStack React Query para toda a aplicação. Ele vive no **Core Layer** porque expõe dependências transversais (cache, retries, devtools) que devem estar disponíveis para qualquer página ou feature sem duplicar setup.

## Responsabilidades

- Instanciar um `QueryClient` único com as opções padrão do projeto
- Distribuir o client via `QueryClientProvider` no `layout.tsx` do App Router
- Acoplar o React Query Devtools para apoiar inspeções em desenvolvimento
- Garantir que todos os hooks (`useQuery`, `useMutation`, etc.) compartilhem as mesmas políticas de cache

## Configurações Padrão

As opções vivem em `react-query.constants.ts`:

```ts
export const DEFAULT_QUERY_OPTIONS = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
```

- `retry: 1` evita loops agressivos de retry em falhas consecutivas
- `refetchOnWindowFocus: false` impede refetch automático ao alternar abas, preservando UX em páginas grandes
- `staleTime: 5 min` mantém dados frescos o suficiente para flows de discovery sem bater na API a cada navegação

Se precisar ajustes pontuais, use `useQuery` com `options` específicos sem alterar o client global.

## Uso

O provider é aplicado em `src/app/layout.tsx`:

```tsx
<ReactQueryProvider>
  {children}
</ReactQueryProvider>
```

Dentro de qualquer componente é possível usar hooks da TanStack normalmente. Não crie novos `QueryClient`s em features ou pages; isso quebraria o cache compartilhado.

## Boas Práticas

- Prefira chaves (`queryKey`) estáveis e declarativas (`['artists', filters]`)
- Use `queryClient.invalidateQueries` em actions (mutations) para notificações pós-escrita
- Evite manipular `DEFAULT_QUERY_OPTIONS` diretamente fora do Core; se o comportamento global mudar, ajuste o constants e comunique no changelog

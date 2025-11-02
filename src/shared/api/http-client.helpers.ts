/**
 * Constrói URL completa com base e parâmetros
 */
export function buildUrl(
  baseURL: string,
  endpoint: string
): string {
  const base = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${base}${path}`;

  return url;
}

/**
 * Merge simples de headers em formato de objetos
 */
export function mergeHeaders(
  defaultHeaders: Record<string, string> = {},
  requestHeaders: Record<string, string> = {}
): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    ...defaultHeaders,
    ...requestHeaders,
  };
}

/**
 * Cria configuração de cache para Next.js
 */
export function buildCacheConfig(
  cache?: RequestCache,
  revalidate?: number | false
): { cache?: RequestCache; next?: { revalidate?: number | false } } {
  const config: { cache?: RequestCache; next?: { revalidate?: number | false } } = {};

  if (cache) {
    config.cache = cache;
  }

  if (revalidate !== undefined) {
    config.next = { revalidate };
  }

  return config;
}

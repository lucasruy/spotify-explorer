import {
  type HttpConfig,
  type HttpResponse,
  type HttpRequest,
} from './http-client.types';
import {
  buildUrl,
  mergeHeaders,
  buildCacheConfig,
} from './http-client.helpers';

/**
 * Cliente HTTP simples para Next.js
 */
export class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private defaultCache?: RequestCache;
  private defaultRevalidate?: number | false;

  constructor(config: HttpConfig = {}) {
    this.baseURL = config.baseURL || '';
    this.defaultHeaders = config.headers || {};
    this.defaultCache = config.cache;
    this.defaultRevalidate = config.revalidate;
  }

  /**
   * Realiza uma requisição HTTP
   */
  private async request<T>(
    method: string,
    endpoint: string,
    options: HttpRequest = {}
  ): Promise<HttpResponse<T>> {
    const {
      cache = this.defaultCache,
      revalidate = this.defaultRevalidate,
      headers: requestHeaders = {},
      next,
      ...fetchOptions
    } = options;

    try {
      const url = buildUrl(this.baseURL, endpoint);
      const headers = mergeHeaders(this.defaultHeaders, requestHeaders);
      const cacheConfig = buildCacheConfig(cache, revalidate);

      const requestConfig: RequestInit = {
        method,
        headers,
        ...cacheConfig,
        ...fetchOptions,
      };

      if (next) {
        requestConfig.next = { ...requestConfig.next, ...next };
      }

      const response = await fetch(url, requestConfig);

      if (!response.ok) {
        throw `HTTP ${response.status}: ${response.statusText}`;
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };

    } catch (error) {
      throw error
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, options?: HttpRequest): Promise<HttpResponse<T>> {
    return this.request<T>('GET', endpoint, options);
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: HttpRequest
  ): Promise<HttpResponse<T>> {
    return this.request<T>('POST', endpoint, {
      ...options,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: HttpRequest
  ): Promise<HttpResponse<T>> {
    return this.request<T>('PUT', endpoint, {
      ...options,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: HttpRequest
  ): Promise<HttpResponse<T>> {
    return this.request<T>('PATCH', endpoint, {
      ...options,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options?: HttpRequest): Promise<HttpResponse<T>> {
    return this.request<T>('DELETE', endpoint, options);
  }

  /**
   * Atualiza headers padrão
   */
  setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  /**
   * Remove header padrão
   */
  removeDefaultHeader(key: string): void {
    delete this.defaultHeaders[key];
  }

  /**
   * Obtém uma cópia dos headers padrão
   */
  getDefaultHeaders(): Record<string, string> {
    return { ...this.defaultHeaders };
  }
}

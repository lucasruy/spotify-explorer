export interface HttpConfig {
  baseURL?: string;
  headers?: Record<string, string>;
  cache?: RequestCache;
  revalidate?: number | false;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export interface HttpRequest extends Omit<RequestInit, 'method' | 'headers'> {
  headers?: Record<string, string>;
  cache?: RequestCache;
  revalidate?: number | false;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

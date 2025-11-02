# Cliente HTTP para Next.js

Cliente HTTP simples para Next.js com suporte a cache.

## Características

- Zero dependências externas - Usa apenas Fetch API nativa
- Suporte completo ao cache do Next.js - Cache, revalidate, tags
- Headers globais e por requisição - Flexibilidade total
- Extremamente simples - API intuitiva e limpa

## Uso Básico

```typescript
import { HttpClient } from '@/shared/api';

// Cliente simples
const client = new HttpClient({
  baseURL: 'https://api.exemplo.com',
  headers: {
    'Authorization': 'Bearer token123'
  }
});

// GET request
try {
  const response = await client.get<User[]>('/users');
  console.log(response.data); // User[]
  console.log(response.status); // 200
  console.log(response.statusText); // 'OK'
} catch (error) {
  console.error('Erro na requisição:', error);
}

// POST request
const response = await client.post<User>('/users', {
  name: 'João',
  email: 'joao@exemplo.com'
});
```

## Cache do Next.js

```typescript
// Cache por 1 hora
const response = await client.get('/users', {
  cache: 'force-cache',
  revalidate: 3600
});

// Cache com tags (para revalidateTag)
const response = await client.get('/posts', {
  next: {
    revalidate: 60,
    tags: ['posts']
  }
});

// Sem cache (sempre fresh)
const response = await client.get('/dynamic-data', {
  cache: 'no-store'
});
```

## Todos os Métodos HTTP

```typescript
// GET
const users = await client.get<User[]>('/users');

// POST
const newUser = await client.post<User>('/users', userData);

// PUT
const updatedUser = await client.put<User>('/users/123', userData);

// PATCH
const partialUser = await client.patch<User>('/users/123', { name: 'Novo Nome' });

// DELETE
const result = await client.delete<void>('/users/123');
```

## Gerenciamento de Headers

```typescript
const client = new HttpClient({
  baseURL: 'https://api.exemplo.com',
  headers: {
    'Authorization': 'Bearer token123'
  }
});

// Adicionar headers padrão
client.setDefaultHeaders({
  'X-Custom-Header': 'valor'
});

// Remover header padrão
client.removeDefaultHeader('Authorization');

// Obter headers atuais
const currentHeaders = client.getDefaultHeaders();

// Headers específicos por requisição
const response = await client.get('/users', {
  headers: {
    'X-Request-ID': 'abc123'
  }
});
```

## Estrutura da Resposta

Todas as requisições retornam um objeto `HttpResponse<T>`:

```typescript
interface HttpResponse<T = unknown> {
  data: T;             // Dados da resposta
  status: number;      // Código de status HTTP
  statusText: string;  // Texto do status
  headers: Headers;    // Headers da resposta
}
```

## Exemplo Completo

```typescript
import { HttpClient } from '@/shared/api';

interface User {
  id: string;
  name: string;
  email: string;
}

const client = new HttpClient({
  baseURL: 'https://api.exemplo.com',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  cache: 'default',
  revalidate: 60
});

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await client.get<User[]>('/users', {
      cache: 'force-cache',
      revalidate: 3600,
      next: {
        tags: ['users']
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}
```

# Usage

### 1. Initialize your HTTP client once in your app entry point

```ts
import { HttpClientFactory } from 'http-client-adapter';

HttpClientFactory.init('axios', 'https://api.example.com');
// or
HttpClientFactory.init('fetch', 'https://api.example.com');
```

### 2. Use the client anywhere in your app

```ts
const client = HttpClientFactory.getInstance();

async function fetchData() {
  try {
    const data = await client.get('/items');
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
```

---

# API

The client interface supports the following methods:

| Method | Description                          | Signature                           |
| ------ | ---------------------------------- | --------------------------------- |
| get    | Perform a GET request               | `get<T>(url: string, config?)`    |
| post   | Perform a POST request              | `post<T>(url: string, data, config?)` |
| put    | Perform a PUT request               | `put<T>(url: string, data, config?)`  |
| patch  | Perform a PATCH request             | `patch<T>(url: string, data, config?)`|
| delete | Perform a DELETE request            | `delete<T>(url: string, config?)`      |

---

# Development

### Build

```bash
npm run build
```

---

# Run tests (Vitest)

```bash
npm test
```

---

# Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/http-client-adapter/issues).
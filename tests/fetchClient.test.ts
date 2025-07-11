import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FetchClient } from '../src/FetchClient';

describe('FetchClient', () => {
  const globalAny = globalThis as any;

  let client: FetchClient;

  beforeEach(() => {
    client = new FetchClient('https://api.example.com');

    globalAny.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => 'fetchedData',
    });
  });

  it('should GET data', async () => {
    const res = await client.get('/test');
    expect(res).toBe('fetchedData');
  });

  it('should POST data', async () => {
    const res = await client.post('/test', { a: 1 });
    expect(res).toBe('fetchedData');
  });

  it('should PUT data', async () => {
    const res = await client.put('/test', { b: 2 });
    expect(res).toBe('fetchedData');
  });

  it('should PATCH data', async () => {
    const res = await client.patch('/test', { c: 3 });
    expect(res).toBe('fetchedData');
  });

  it('should DELETE data', async () => {
    const res = await client.delete('/test');
    expect(res).toBe('fetchedData');
  });
});

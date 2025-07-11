import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { AxiosClient } from '../src/AxiosClient';

vi.mock('axios');

describe('AxiosClient', () => {
  const mockAxios = axios as unknown as {
    create: () => any;
  };

  let client: AxiosClient;
  let instanceMock: any;

  beforeEach(() => {
    instanceMock = {
      get: vi.fn().mockResolvedValue({ data: 'getData' }),
      post: vi.fn().mockResolvedValue({ data: 'postData' }),
      put: vi.fn().mockResolvedValue({ data: 'putData' }),
      patch: vi.fn().mockResolvedValue({ data: 'patchData' }),
      delete: vi.fn().mockResolvedValue({ data: 'deleteData' }),
    };

    mockAxios.create = vi.fn(() => instanceMock);

    client = new AxiosClient('https://api.example.com');
  });

  it('should GET data', async () => {
    const res = await client.get('/test');
    expect(res).toBe('getData');
  });

  it('should POST data', async () => {
    const res = await client.post('/test', { a: 1 });
    expect(res).toBe('postData');
  });

  it('should PUT data', async () => {
    const res = await client.put('/test', { b: 2 });
    expect(res).toBe('putData');
  });

  it('should PATCH data', async () => {
    const res = await client.patch('/test', { c: 3 });
    expect(res).toBe('patchData');
  });

  it('should DELETE data', async () => {
    const res = await client.delete('/test');
    expect(res).toBe('deleteData');
  });
});

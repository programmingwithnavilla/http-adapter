import { describe, it, expect, beforeEach } from 'vitest';
import HttpClientFactory from '../src/HttpClientFactory';
import { AxiosClient } from '../src/AxiosClient';
import { FetchClient } from '../src/FetchClient';

describe('HttpClientFactory', () => {
  beforeEach(() => {
    // Reset private static instance before each test
    (HttpClientFactory as any).instance = null;
  });

  it('should throw if getInstance called before init', () => {
    expect(() => {
      HttpClientFactory.getInstance();
    }).toThrow('HttpClient not initialized. Call init() first.');
  });

  it('should initialize AxiosClient when clientType is axios', () => {
    HttpClientFactory.init('axios', 'https://api.example.com');
    const client = HttpClientFactory.getInstance();
    expect(client).toBeInstanceOf(AxiosClient);
  });

  it('should initialize FetchClient when clientType is fetch', () => {
    HttpClientFactory.init('fetch', 'https://api.example.com');
    const client = HttpClientFactory.getInstance();
    expect(client).toBeInstanceOf(FetchClient);
  });

  it('should throw error for invalid clientType', () => {
    expect(() => {
      // @ts-expect-error testing invalid input
      HttpClientFactory.init('invalid', 'https://api.example.com');
    }).toThrow('Invalid client type');
  });

  it('should keep the same instance after init', () => {
    HttpClientFactory.init('axios', 'https://api.example.com');
    const client1 = HttpClientFactory.getInstance();
    const client2 = HttpClientFactory.getInstance();
    expect(client1).toBe(client2);
  });
});

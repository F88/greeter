import { describe, it, expect } from 'vitest';
import * as index from '../src/index.js';

// src/index.test.ts

describe('NAME constant', () => {
  it('should be exported from the module', () => {
    expect('NAME' in index).toBe(true);
  });

  it('should have the value "NAME"', () => {
    expect(index.NAME).toBe('NAME');
  });

  it('should be of type string', () => {
    expect(typeof index.NAME).toBe('string');
  });

  it('should be immutable', () => {
    expect(() => {
      // @ts-ignore
      index.NAME = 'CHANGED';
    }).toThrow();
    expect(index.NAME).toBe('NAME');
  });
});

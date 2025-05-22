import { describe, it, expect } from 'vitest';
import { NAME } from '../src/index.js';

// src/index.test.ts

describe('NAME constant', () => {
  it('should have the value "NAME"', () => {
    expect(NAME).toBe('NAME');
  });

  it('should be of type string', () => {
    expect(typeof NAME).toBe('string');
  });
});

import { describe, it, expect } from 'vitest';
import { greet } from '../src/greet.js';

describe('greet', () => {
  it('should return "Hello!!!, World!" when called with no arguments', () => {
    expect(greet()).toBe('😺Hello!!!, World!');
  });

  it('should use custom shout if provided', () => {
    expect(greet({ shout: 'Hi' })).toBe('Hi!!!, World!');
  });

  it('should use custom whom if provided', () => {
    expect(greet({ whom: 'Copilot' })).toBe('😺Hello!!!, Copilot!');
  });

  it('should use both custom shout and whom if provided', () => {
    expect(greet({ shout: 'Hey', whom: 'Copilot' })).toBe('Hey!!!, Copilot!');
  });

  it('should use default values when empty object is provided', () => {
    expect(greet({})).toBe('😺Hello!!!, World!');
  });

  it('should handle special characters in inputs', () => {
    expect(greet({ shout: 'Hello&<>"\'', whom: 'World&<>"\'' })).toBe(
      'Hello&<>"\'!!!, World&<>"\'!',
    );
  });

  it('should handle emoji in inputs', () => {
    expect(greet({ shout: '👋', whom: '🌍' })).toBe('👋!!!, 🌍!');
  });

  it('should handle long strings', () => {
    const longShout = 'Hello'.repeat(20);
    const longWhom = 'World'.repeat(20);
    expect(greet({ shout: longShout, whom: longWhom })).toBe(
      `${longShout}!!!, ${longWhom}!`,
    );
  });

  it('should handle different languages', () => {
    expect(greet({ shout: 'こんにちは', whom: '世界' })).toBe(
      'こんにちは!!!, 世界!',
    );
    expect(greet({ shout: 'مرحبا', whom: 'العالم' })).toBe('مرحبا!!!, العالم!');
    expect(greet({ shout: 'Привет', whom: 'мир' })).toBe('Привет!!!, мир!');
  });

  it('should handle strings with whitespace', () => {
    expect(greet({ shout: '  Hello  ', whom: '  World  ' })).toBe(
      '  Hello  !!!,   World  !',
    );
  });

  it('should treat undefined parameters as default values', () => {
    expect(greet({ shout: undefined, whom: 'Friend' })).toBe(
      '😺Hello!!!, Friend!',
    );
    expect(greet({ shout: 'Hi', whom: undefined })).toBe('Hi!!!, World!');
    expect(greet({ shout: undefined, whom: undefined })).toBe(
      '😺Hello!!!, World!',
    );
  });
});

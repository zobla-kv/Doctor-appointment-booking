import { describe, it, expect } from 'vitest';
import { formatList } from '../../src/utils/format';

describe('formatList', () => {
  it('joins a list of strings with commas', () => {
    expect(formatList(['09:00', '10:00', '11:00'])).toBe('09:00, 10:00, 11:00');
  });

  it('returns an empty string for an empty array', () => {
    expect(formatList([])).toBe('');
  });

  it('handles a single item array', () => {
    expect(formatList(['09:00'])).toBe('09:00');
  });

  it('handles duplicate values', () => {
    expect(formatList(['09:00', '09:00'])).toBe('09:00, 09:00');
  });
});

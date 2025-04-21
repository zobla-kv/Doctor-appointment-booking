import { describe, it, expect } from 'vitest';
import {
  sortSpecialtiesAsc,
  sortDatesAsc,
  sortTimesAsc,
  capitalize,
} from '../../src/utils/transform';

describe('sortSpecialtiesAsc', () => {
  it('sorts strings alphabetically', () => {
    expect(
      sortSpecialtiesAsc(['Cardiology', 'Anesthesiology', 'Dermatology'])
    ).toEqual(['Anesthesiology', 'Cardiology', 'Dermatology']);
  });

  it('handles empty array', () => {
    expect(sortSpecialtiesAsc([])).toEqual([]);
  });
});

describe('sortDatesAsc', () => {
  it('sorts dates by month and day', () => {
    expect(sortDatesAsc(['04.05', '03.20', '04.01'])).toEqual([
      '03.20',
      '04.01',
      '04.05',
    ]);
  });

  it('handles same month with different days', () => {
    expect(sortDatesAsc(['05.15', '05.01', '05.10'])).toEqual([
      '05.01',
      '05.10',
      '05.15',
    ]);
  });
});

describe('sortTimesAsc', () => {
  it('sorts times from earliest to latest', () => {
    expect(sortTimesAsc(['10:30', '09:15', '11:00'])).toEqual([
      '09:15',
      '10:30',
      '11:00',
    ]);
  });

  it('handles times within same hour', () => {
    expect(sortTimesAsc(['09:45', '09:15', '09:30'])).toEqual([
      '09:15',
      '09:30',
      '09:45',
    ]);
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('derMaToLogy')).toBe('Dermatology');
  });

  it('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles already capitalized strings', () => {
    expect(capitalize('Cardiology')).toBe('Cardiology');
  });

  it('handles all uppercase strings', () => {
    expect(capitalize('NEUROLOGY')).toBe('Neurology');
  });
});

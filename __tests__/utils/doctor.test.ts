import { describe, it, expect } from 'vitest';
import { Doctor } from '../../src/types/Doctor';
import {
  getUniqueSpecialties,
  getUniqueAvailabilityDates,
  getUniqueAvailabilityTimes,
} from '../../src/utils/doctor';

const doctors: Doctor[] = [
  {
    name: 'Dr. Alice',
    specialty: 'Cardiology',
    location: 'Clinic A',
    rating: 5,
    photo: '',
    availability: [
      { date: '04.22', times: ['09:00', '10:00'] },
      { date: '04.23', times: ['11:00'] },
    ],
  },
  {
    name: 'Dr. Bob',
    specialty: 'Neurology',
    location: 'Clinic B',
    rating: 4.7,
    photo: 'photo2.jpg',
    availability: [{ date: '04.22', times: ['09:00', '12:00'] }],
  },
  {
    name: 'Dr. Carol',
    specialty: 'Cardiology',
    location: 'Clinic C',
    rating: 4.2,
    photo: 'photo3.jpg',
    availability: [{ date: '04.24', times: ['10:00', '13:00'] }],
  },
];

describe('filter utilities', () => {
  it('returns unique specialties', () => {
    const result = getUniqueSpecialties(doctors);
    expect(result).toEqual(['Cardiology', 'Neurology']);
  });

  it('returns unique availability dates', () => {
    const result = getUniqueAvailabilityDates(doctors);
    expect(result).toEqual(['04.22', '04.23', '04.24']);
  });

  it('returns unique availability times', () => {
    const result = getUniqueAvailabilityTimes(doctors);
    expect(result).toEqual(['09:00', '10:00', '11:00', '12:00', '13:00']);
  });

  it('returns empty arrays for empty input', () => {
    expect(getUniqueSpecialties([])).toEqual([]);
    expect(getUniqueAvailabilityDates([])).toEqual([]);
    expect(getUniqueAvailabilityTimes([])).toEqual([]);
  });
});

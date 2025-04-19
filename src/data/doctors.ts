import { Doctor } from '../types/Doctor';

export const doctors: Doctor[] = [
  {
    name: 'Emily Zhang',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Dermatologist',
    availability: [
      {
        date: '04.12',
        times: ['09:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
      },
      { date: '04.15', times: ['10:00', '13:00'] },
      { date: '04.18', times: ['09:30', '15:00'] },
      { date: '04.22', times: ['08:00', '12:00'] },
    ],
    location: 'San Francisco, CA',
    rating: 4,
  },
  {
    name: 'Marcus Lee',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Cardiologist',
    availability: [{ date: '04.10', times: ['09:00'] }],
    location: 'New York, NY',
    rating: 6,
  },
  {
    name: 'Aisha Patel',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Neurologist',
    availability: [
      { date: '04.09', times: ['08:00', '12:00'] },
      { date: '04.13', times: ['09:30', '14:30'] },
    ],
    location: 'Chicago, IL',
    rating: 8,
  },
  {
    name: 'John Kim',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Pediatrician',
    availability: [
      { date: '04.11', times: ['09:00', '12:00'] },
      { date: '04.14', times: ['10:30', '13:30'] },
      { date: '04.21', times: ['09:00', '15:00'] },
      { date: '04.25', times: ['08:00', '14:00'] },
    ],
    location: 'Seattle, WA',
    rating: 7,
  },
  {
    name: 'Sarah Thompson',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Orthopedic Surgeon',
    availability: [
      { date: '04.08', times: ['09:00', '10:00'] },
      { date: '04.12', times: ['11:00', '13:00'] },
      { date: '04.17', times: ['10:00', '15:00'] },
      { date: '04.30', times: ['08:00', '12:00'] },
    ],
    location: 'Austin, TX',
    rating: 10,
  },
  {
    name: 'Javier Morales',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Psychiatrist',
    availability: [
      { date: '04.07', times: ['09:00', '12:30'] },
      { date: '04.13', times: ['10:00', '11:30'] },
      { date: '04.19', times: ['13:00', '15:30'] },
      { date: '04.26', times: ['09:00', '14:00'] },
    ],
    location: 'Miami, FL',
    rating: 5,
  },
  {
    name: 'Olivia Bennett',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Endocrinologist',
    availability: [
      { date: '04.10', times: ['08:30', '10:30'] },
      { date: '04.18', times: ['09:00', '11:00'] },
      { date: '04.23', times: ['10:00', '14:00'] },
      { date: '04.29', times: ['11:30', '13:30'] },
    ],
    location: 'Denver, CO',
    rating: 10,
  },
  {
    name: 'David Nguyen',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Gastroenterologist',
    availability: [
      { date: '04.06', times: ['08:00', '09:30'] },
      { date: '04.12', times: ['10:00', '11:00'] },
      { date: '04.20', times: ['13:00', '15:00'] },
      { date: '04.27', times: ['09:00', '12:00'] },
    ],
    location: 'Boston, MA',
    rating: 9,
  },
  {
    name: 'Lily Chen',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Rheumatologist',
    availability: [
      { date: '04.09', times: ['10:00', '13:00'] },
      { date: '04.15', times: ['09:00', '11:00'] },
      { date: '04.22', times: ['12:00', '14:30'] },
      { date: '04.28', times: ['11:00', '13:00'] },
    ],
    location: 'San Diego, CA',
    rating: 8,
  },
  {
    name: 'Noah Brooks',
    photo: 'https://i.pravatar.cc/100',
    specialty: 'Ophthalmologist',
    availability: [
      { date: '04.08', times: ['10:00', '12:00'] },
      { date: '04.16', times: ['09:30', '14:30'] },
      { date: '04.21', times: ['11:00', '15:00'] },
      { date: '04.30', times: ['08:30', '10:30'] },
    ],
    location: 'Portland, OR',
    rating: 7,
  },
];

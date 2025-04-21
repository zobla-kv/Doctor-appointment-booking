import { Doctor } from '../types/Doctor';

export const doctors: Doctor[] = [
  {
    name: 'Emily Zhang',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Dermatologist',
    availability: [
      { date: '04.10', times: ['08:00', '11:20', '14:28', '15:23'] },
      { date: '04.15', times: ['08:00', '11:20', '15:00'] },
      { date: '04.20', times: ['09:30', '12:00', '15:00'] },
      { date: '05.02', times: ['08:00', '12:00', '15:00'] },
    ],
    location: 'San Francisco, CA',
    rating: 4,
  },
  {
    name: 'Marcus Lee',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Cardiologist',
    availability: [{ date: '04.10', times: ['08:00', '11:00'] }],
    location: 'New York, NY',
    rating: 6,
  },
  {
    name: 'Aisha Patel',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Neurologist',
    availability: [
      { date: '04.12', times: ['08:00', '11:00'] },
      { date: '04.15', times: ['09:30', '11:20'] },
      { date: '04.20', times: ['11:20', '15:23'] },
      { date: '05.03', times: ['09:30', '15:23'] },
    ],
    location: 'Chicago, IL',
    rating: 8,
  },
  {
    name: 'John Kim',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Psychiatrist',
    availability: [
      { date: '04.11', times: ['09:00', '11:00'] },
      { date: '04.15', times: ['09:30', '15:23'] },
      { date: '04.20', times: ['08:00', '14:00'] },
      { date: '05.02', times: ['11:20', '15:23'] },
    ],
    location: 'Seattle, WA',
    rating: 7,
  },
  {
    name: 'Sarah Thompson',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Orthopedic Surgeon',
    availability: [
      { date: '04.10', times: ['09:00', '09:30'] },
      { date: '04.12', times: ['09:30', '15:23'] },
      { date: '04.16', times: ['11:00', '14:28'] },
      { date: '05.01', times: ['08:00', '15:23'] },
    ],
    location: 'Austin, TX',
    rating: 10,
  },
  {
    name: 'Javier Morales',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Psychiatrist',
    availability: [
      { date: '04.10', times: ['09:30', '12:30'] },
      { date: '04.15', times: ['11:20', '14:28'] },
      { date: '04.20', times: ['09:30', '15:23'] },
      { date: '05.05', times: ['11:00', '15:23'] },
    ],
    location: 'Miami, FL',
    rating: 5,
  },
  {
    name: 'Olivia Bennett',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Cardiologist',
    availability: [
      { date: '04.10', times: ['09:00', '11:00'] },
      { date: '04.15', times: ['09:30', '11:00'] },
      { date: '04.20', times: ['09:00', '15:23'] },
      { date: '05.03', times: ['09:30', '14:28'] },
    ],
    location: 'Denver, CO',
    rating: 10,
  },
  {
    name: 'David Nguyen',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Gastroenterologist',
    availability: [
      { date: '04.06', times: ['09:00', '11:00'] },
      { date: '04.10', times: ['09:00', '14:28'] },
      { date: '04.15', times: ['09:30', '15:23'] },
      { date: '05.01', times: ['09:30', '13:00'] },
    ],
    location: 'Boston, MA',
    rating: 9,
  },
  {
    name: 'Lily Chen',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Cardiologist',
    availability: [
      { date: '04.10', times: ['09:00', '11:00'] },
      { date: '04.15', times: ['09:32', '11:20'] },
      { date: '04.18', times: ['13:00', '14:28'] },
      { date: '05.05', times: ['09:00', '13:00'] },
    ],
    location: 'San Diego, CA',
    rating: 8,
  },
  {
    name: 'Noah Brooks',
    photo:
      'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?semt=ais_hybrid&w=740',
    specialty: 'Ophthalmologist',
    availability: [
      { date: '04.10', times: ['10:00', '12:00'] },
      { date: '04.15', times: ['09:30', '11:00'] },
      { date: '04.20', times: ['11:00', '11:20'] },
      { date: '05.01', times: ['09:30', '15:23'] },
    ],
    location: 'Portland, OR',
    rating: 7,
  },
];

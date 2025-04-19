import { Doctor } from './Doctor';

export interface Appointment {
  doctor: Doctor;
  timeSlot: TimeSlot;
}

export interface TimeSlot {
  date: string;
  time: string;
}

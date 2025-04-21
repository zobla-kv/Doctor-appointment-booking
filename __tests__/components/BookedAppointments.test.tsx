import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookedAppointments from '../../src/components/BookedAppointments';
import { Appointment } from '../../src/types/Appointment';

const mockAppointments: Appointment[] = [
  {
    doctor: {
      name: 'Dr. Alice',
      specialty: 'Cardiology',
      location: 'Clinic A',
      availability: [],
      photo: '',
      rating: 10,
    },
    timeSlot: {
      date: '04.21',
      time: '09:00',
    },
  },
  {
    doctor: {
      name: 'Dr. Bob',
      specialty: 'Dermatology',
      location: 'Clinic B',
      availability: [],
      photo: '',
      rating: 10,
    },
    timeSlot: {
      date: '04.20',
      time: '11:00',
    },
  },
];

describe('BookedAppointments', () => {
  it('displays message when there are no appointments', () => {
    render(<BookedAppointments appointments={[]} />);
    expect(screen.getByText('No appointments booked yet.')).toBeInTheDocument();
  });

  it('groups and sorts appointments by date', () => {
    render(<BookedAppointments appointments={mockAppointments} />);

    const dates = screen
      .getAllByLabelText('appointment date')
      .map((el) => el.textContent);
    expect(dates).toEqual(['04.20', '04.21']);

    const timeElements = screen
      .getAllByLabelText('appointment time')
      .map((el) => el.textContent);
    expect(timeElements).toEqual(['11:00', '09:00']);
  });

  it('displays doctor info for each appointment', () => {
    render(<BookedAppointments appointments={mockAppointments} />);
    expect(screen.getByText('Dr. Alice')).toBeInTheDocument();
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
    expect(screen.getByText('Clinic A')).toBeInTheDocument();
    expect(screen.getByText('09:00')).toBeInTheDocument();

    expect(screen.getByText('Dr. Bob')).toBeInTheDocument();
    expect(screen.getByText('Dermatology')).toBeInTheDocument();
    expect(screen.getByText('Clinic B')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
  });

  it('renders list items with tabIndex=0 for accessibility', () => {
    render(<BookedAppointments appointments={mockAppointments} />);
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toHaveAttribute('tabIndex', '0');
    });
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppointmentModal from '../../src/components/AppointmentModal';
import { Doctor } from '../../src/types/Doctor';

const mockDoctor: Doctor = {
  name: 'Dr. Jane Smith',
  photo: '',
  location: '',
  specialty: '',
  rating: 10,
  availability: [
    {
      date: '2025-05-01',
      times: ['09:00', '10:00'],
    },
    {
      date: '2025-05-02',
      times: ['13:00', '14:00'],
    },
  ],
};

describe('AppointmentModal', () => {
  it('renders modal with doctor name and time slots', () => {
    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={true}
        bookedTime={null}
        onSubmit={vi.fn()}
        onClose={vi.fn()}
      />
    );

    expect(screen.getByText('Dr. Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={false}
        bookedTime={null}
        onSubmit={vi.fn()}
        onClose={vi.fn()}
      />
    );

    expect(screen.queryByText('Dr. Jane Smith')).not.toBeInTheDocument();
  });

  it('pre-selects a booked time if provided', () => {
    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={true}
        bookedTime={{ date: '2025-05-01', time: '10:00' }}
        onSubmit={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const radio = screen.getByDisplayValue('10:00') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it('updates selected time on user click', () => {
    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={true}
        bookedTime={null}
        onSubmit={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const radio = screen.getByDisplayValue('13:00') as HTMLInputElement;
    fireEvent.click(radio);
    expect(radio.checked).toBe(true);
  });

  it('submits selected time on form submission', () => {
    const handleSubmit = vi.fn();
    const handleClose = vi.fn();

    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={true}
        bookedTime={null}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    );

    const radio = screen.getByDisplayValue('09:00');
    fireEvent.click(radio);

    const confirmBtn = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmBtn);

    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2025-05-01',
      time: '09:00',
    });
    expect(handleClose).toHaveBeenCalled();
  });

  it('alerts if form is submitted without selecting a time', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(
      <AppointmentModal
        doctor={mockDoctor}
        isOpen={true}
        bookedTime={null}
        onSubmit={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const confirmBtn = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmBtn);

    expect(alertSpy).toHaveBeenCalledWith('Please select a time');
    alertSpy.mockRestore();
  });
});

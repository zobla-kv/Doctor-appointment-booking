import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DoctorFilter from '../../src/components/DoctorFilter';
import { FilterOptions } from '../../src/types/Filter';

const filters: FilterOptions = {
  specialty: ['Cardiology', 'Neurology'],
  date: ['04.22', '04.23'],
  time: ['09:00', '10:00'],
};

describe('DoctorFilter', () => {
  it('renders filter legend and select elements', () => {
    render(<DoctorFilter filters={filters} onSelect={vi.fn()} />);
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByLabelText('specialty')).toBeInTheDocument();
    expect(screen.getByLabelText('date')).toBeInTheDocument();
    expect(screen.getByLabelText('time')).toBeInTheDocument();
  });

  it('renders all options for specialty', () => {
    render(<DoctorFilter filters={filters} onSelect={vi.fn()} />);
    filters.specialty.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  it('renders all options for date', () => {
    render(<DoctorFilter filters={filters} onSelect={vi.fn()} />);
    filters.date.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  it('renders all options for time', () => {
    render(<DoctorFilter filters={filters} onSelect={vi.fn()} />);
    filters.time.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  it('calls onSelect with correct filter when specialty changes', () => {
    const onSelectMock = vi.fn();
    render(<DoctorFilter filters={filters} onSelect={onSelectMock} />);
    const select = screen.getByLabelText('specialty');
    fireEvent.change(select, { target: { value: 'Cardiology' } });
    expect(onSelectMock).toHaveBeenCalledWith({
      name: 'specialty',
      value: 'Cardiology',
    });
  });

  it('calls onSelect with correct filter when date changes', () => {
    const onSelectMock = vi.fn();
    render(<DoctorFilter filters={filters} onSelect={onSelectMock} />);
    const select = screen.getByLabelText('date');
    fireEvent.change(select, { target: { value: '04.23' } });
    expect(onSelectMock).toHaveBeenCalledWith({
      name: 'date',
      value: '04.23',
    });
  });

  it('calls onSelect with correct filter when time changes', () => {
    const onSelectMock = vi.fn();
    render(<DoctorFilter filters={filters} onSelect={onSelectMock} />);
    const select = screen.getByLabelText('time');
    fireEvent.change(select, { target: { value: '10:00' } });
    expect(onSelectMock).toHaveBeenCalledWith({
      name: 'time',
      value: '10:00',
    });
  });
});

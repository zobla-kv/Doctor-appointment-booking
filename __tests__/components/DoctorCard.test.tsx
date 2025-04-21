import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DoctorCard from '../../src/components/DoctorCard';
import { Doctor } from '../../src/types/Doctor';

const mockDoctor: Doctor = {
  name: 'Jane Smith',
  specialty: 'Neurology',
  location: 'Clinic C',
  rating: 6,
  photo: 'https://example.com/photo.jpg',
  availability: [
    {
      date: '04.22',
      times: ['09:00', '10:00'],
    },
    {
      date: '04.23',
      times: ['11:00'],
    },
  ],
};

describe('DoctorCard', () => {
  it('renders doctor photo with alt text', () => {
    render(<DoctorCard doctor={mockDoctor} onBook={vi.fn()} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockDoctor.photo);
    expect(img).toHaveAttribute(
      'alt',
      `Dr. ${mockDoctor.name}, ${mockDoctor.specialty}`
    );
  });

  it('displays doctor name and fields', () => {
    render(<DoctorCard doctor={mockDoctor} onBook={vi.fn()} />);
    expect(screen.getByText(mockDoctor.name)).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.specialty)).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.location)).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.rating.toString())).toBeInTheDocument();
  });

  it('displays formatted availability slots', () => {
    render(<DoctorCard doctor={mockDoctor} onBook={vi.fn()} />);
    expect(screen.getByText('04.22')).toBeInTheDocument();
    expect(screen.getByText('09:00, 10:00')).toBeInTheDocument();
    expect(screen.getByText('04.23')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
  });

  it('calls onBook with doctor when Book button is clicked', () => {
    const onBookMock = vi.fn();
    render(<DoctorCard doctor={mockDoctor} onBook={onBookMock} />);
    const button = screen.getByRole('button', {
      name: `book a meeting with Dr. ${mockDoctor.name}`,
    });
    fireEvent.click(button);
    expect(onBookMock).toHaveBeenCalledWith(mockDoctor);
  });

  it('renders all fields with proper aria-labels', () => {
    render(<DoctorCard doctor={mockDoctor} onBook={vi.fn()} />);
    expect(screen.getByLabelText("Doctor's specialty:")).toBeInTheDocument();
    expect(screen.getByLabelText("Doctor's location:")).toBeInTheDocument();
    expect(screen.getByLabelText("Doctor's rating:")).toBeInTheDocument();
    expect(screen.getByLabelText("Doctor's availability:")).toBeInTheDocument();
  });
});

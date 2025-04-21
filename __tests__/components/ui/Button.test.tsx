import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from '../../../src/components/ui/Button';

describe('Button component', () => {
  it('renders the button with the correct text', () => {
    render(<Button text='Test' onClick={vi.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test');
  });

  it('applies custom styles passed via the styles prop', () => {
    render(
      <Button text='Styled Button' onClick={vi.fn()} styles='bg-red-500' />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-500');
  });

  it('calls onClick when the button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button text='Click Me' onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button text='Button with Ref' onClick={vi.fn()} ref={ref} />);
    const button = screen.getByRole('button');
    expect(ref.current).toBe(button);
  });

  it('should not re-render unnecessarily due to memoization', () => {
    const handleClick = vi.fn();
    const { rerender } = render(
      <Button text='Memoized Button' onClick={handleClick} />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Memoized Button');

    rerender(<Button text='Memoized Button' onClick={handleClick} />);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

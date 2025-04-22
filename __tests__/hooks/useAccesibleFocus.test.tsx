import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useRef } from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { useAccessibleFocus } from '../../src/hooks/useAccesibleFocus';

const className = 'focus-outline';

const TestComponent = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useAccessibleFocus(ref);

  return <button ref={ref}>Focus Me</button>;
};

describe('useAccessibleFocus', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should not add the class on mouse focus', () => {
    render(<TestComponent />);
    const button = screen.getByRole('button');

    fireEvent.mouseDown(window);
    button.focus();
    expect(button).not.toHaveClass(className);
  });

  it('should add the class on keyboard (Tab) focus', () => {
    render(<TestComponent />);
    const button = screen.getByRole('button');

    fireEvent.keyDown(window, { key: 'Tab' });
    button.focus();
    expect(button).toHaveClass(className);
  });

  it('should clean up global listeners on unmount', () => {
    const keydownSpy = vi.spyOn(window, 'removeEventListener');
    const mousedownSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(keydownSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(mousedownSpy).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function)
    );
  });
});

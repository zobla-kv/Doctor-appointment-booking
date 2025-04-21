import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Modal from '../../../src/components/ui/Modal';
import Button from '../../../src/components/ui/Button';

describe('Modal component', () => {
  it('renders the modal when isOpen is true', () => {
    render(
      <Modal
        title='Test Modal'
        isOpen={true}
        description='This is a test description.'
        focusableElements={[]}
        onConfirm={vi.fn()}
        onClose={vi.fn()}
      >
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(
      <Modal
        title='Test Modal'
        isOpen={false}
        description='This is a test description.'
        focusableElements={[]}
        onConfirm={vi.fn()}
        onClose={vi.fn()}
      >
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('calls onClose when Escape key is pressed', async () => {
    const handleClose = vi.fn();
    render(
      <Modal
        title='Test Modal'
        isOpen={true}
        description='This is a test description.'
        focusableElements={[]}
        onConfirm={vi.fn()}
        onClose={handleClose}
      >
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => expect(handleClose).toHaveBeenCalledTimes(1));
  });

  it('focuses the first focusable element when Tab is pressed', async () => {
    const firstInput = document.createElement('input');
    const secondInput = document.createElement('input');

    document.body.appendChild(firstInput);
    document.body.appendChild(secondInput);

    const focusableElements = [firstInput, secondInput];

    render(
      <Modal
        title='Test Modal'
        isOpen={true}
        description='This is a test description.'
        focusableElements={focusableElements}
        onConfirm={vi.fn()}
        onClose={vi.fn()}
      >
        <p>Modal content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Tab' });
    expect(firstInput).toHaveFocus();

    document.body.removeChild(firstInput);
    document.body.removeChild(secondInput);
  });

  it('focuses back to the first element if Tab is pressed on the last element', async () => {
    const firstInput = document.createElement('input');
    const secondInput = document.createElement('input');

    document.body.appendChild(firstInput);
    document.body.appendChild(secondInput);

    const focusableElements = [firstInput, secondInput];

    render(
      <Modal
        title='Test Modal'
        isOpen={true}
        description='This is a test description.'
        focusableElements={focusableElements}
        onConfirm={vi.fn()}
        onClose={vi.fn()}
      >
        <Button
          text='Confirm'
          onClick={() => {}}
          data-testid='confirm-button'
        />
      </Modal>
    );

    const button = screen.getByTestId('confirm-button');

    button.focus();

    fireEvent.keyDown(document, { key: 'Tab' });
    expect(firstInput).toHaveFocus();

    document.body.removeChild(firstInput);
    document.body.removeChild(secondInput);
  });

  it('calls onConfirm when the Confirm button is clicked', () => {
    const handleConfirm = vi.fn();
    render(
      <Modal
        title='Test Modal'
        isOpen={true}
        description='This is a test description.'
        focusableElements={[]}
        onConfirm={handleConfirm}
        onClose={vi.fn()}
      >
        <p>Modal Content</p>
      </Modal>
    );

    fireEvent.click(screen.getByText('Confirm'));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});

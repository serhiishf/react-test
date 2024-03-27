import { describe, expect, it } from 'vitest';
import ErrorMessage from './ErrorMessage';
import { render, screen } from '@testing-library/react';

describe('ErrorMessage', () => {
  it('renders default error state', () => {
    render(<ErrorMessage />);
    expect(screen.getByTestId('message-container')).toHaveTextContent('Something went wrong');
    screen.debug();
  });
});

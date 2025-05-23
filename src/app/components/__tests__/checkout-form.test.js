import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from '../checkout-form';

// Mock fetch since it's used in the component
global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe('CheckoutForm component', () => {
  it('renders form elements', () => {
    render(<CheckoutForm />);
    
    // Check if key form elements are rendered
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip code/i)).toBeInTheDocument();
    
    // Check for the submit button
    expect(screen.getByRole('button', { name: /Continue to Payment/i })).toBeInTheDocument();
  });
});
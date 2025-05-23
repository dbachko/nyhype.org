import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CheckoutForm from '../checkout-form'

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ url: 'https://test-url.com' }),
  })
)

// Mock the window.location
const mockLocation = {
  href: '',
}
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
})

describe('CheckoutForm', () => {
  it('renders the form with initial values', () => {
    render(<CheckoutForm />)
    
    // Check that form fields are rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/state/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/zip code/i)).toBeInTheDocument()
    
    // Check submit button
    expect(screen.getByRole('button', { name: /continue to payment/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<CheckoutForm />)
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }))
    
    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText(/email is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/first name is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/last name is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/address is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/city is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/state is required!/i)).toBeInTheDocument()
      expect(screen.getByText(/zip is required!/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<CheckoutForm />)
    
    // Fill in an invalid email
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    })
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }))
    
    // Check for email validation error
    await waitFor(() => {
      expect(screen.getByText(/e-mail is not valid!/i)).toBeInTheDocument()
    })
  })

  it('validates zip code format', async () => {
    render(<CheckoutForm />)
    
    // Fill in an invalid zip code (letters)
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: 'abcde' },
    })
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }))
    
    // Check for zip validation error
    await waitFor(() => {
      expect(screen.getByText(/invalid zip!/i)).toBeInTheDocument()
    })
    
    // Fill in an invalid zip code (too short)
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: '123' },
    })
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }))
    
    // Check for zip validation error
    await waitFor(() => {
      expect(screen.getByText(/invalid zip!/i)).toBeInTheDocument()
    })
  })

  it('submits the form with valid data', async () => {
    render(<CheckoutForm />)
    
    // Fill in all required fields
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    })
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    })
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: '123 Main St' },
    })
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: 'New York' },
    })
    
    // Select a state
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: 'NY' },
    })
    
    fireEvent.change(screen.getByLabelText(/zip code/i), {
      target: { value: '10001' },
    })
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }))
    
    // Wait for the form submission
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('/.netlify/functions/payment', expect.any(Object))
    })
    
    // Check that the redirection happens
    await waitFor(() => {
      expect(window.location.href).toBe('https://test-url.com')
    })
  })
})
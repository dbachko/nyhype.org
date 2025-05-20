import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../footer'

// Mock gatsby's Link component
jest.mock('gatsby', () => ({
  Link: jest.fn().mockImplementation(
    ({
      children,
      to,
      ...rest
    }) =>
      React.createElement(
        'a',
        {
          ...rest,
          href: to,
        },
        children
      )
  ),
}))

describe('Footer', () => {
  it('renders the copyright notice with current year', () => {
    // Mock the current year for consistent testing
    const originalDate = Date
    global.Date = class extends Date {
      constructor() {
        super()
      }
      getFullYear() {
        return 2023
      }
    }

    render(<Footer />)
    expect(screen.getByText(/© 2023 NYHype\.org/)).toBeInTheDocument()

    // Restore the original Date
    global.Date = originalDate
  })

  it('contains navigation links', () => {
    render(<Footer />)
    
    // Check for Contact link
    const contactLink = screen.getByRole('link', { name: /contact/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', '/contact/')
    
    // Check for Privacy Policy link
    const privacyLink = screen.getByRole('link', { name: /privacy/i })
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute('href', '/privacy/')
  })

  it('contains the "Made with ♥ in NYC" text', () => {
    render(<Footer />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByText(/♥/)).toBeInTheDocument()
    expect(screen.getByText(/in nyc/i)).toBeInTheDocument()
  })
})
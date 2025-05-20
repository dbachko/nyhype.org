import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../header'

// Mock gatsby's Link component
jest.mock('gatsby', () => ({
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
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

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header siteTitle="NYHYPE" />)
    expect(screen.getByText('NYHYPE')).toBeInTheDocument()
  })

  it('renders with default props', () => {
    render(<Header />)
    // Default siteTitle is an empty string
    expect(screen.getByRole('link', { name: '' })).toBeInTheDocument()
  })

  it('contains navigation links', () => {
    render(<Header siteTitle="NYHYPE" />)
    
    // Check for Products link
    const productsLink = screen.getByRole('link', { name: /products/i })
    expect(productsLink).toBeInTheDocument()
    expect(productsLink).toHaveAttribute('href', '/products/')
    
    // Check for About Us link
    const aboutLink = screen.getByRole('link', { name: /about us/i })
    expect(aboutLink).toBeInTheDocument()
    expect(aboutLink).toHaveAttribute('href', '/about/')
  })
})
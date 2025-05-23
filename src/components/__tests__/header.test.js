import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../header'

// The gatsby mock is handled by the global __mocks__/gatsby.js file

describe('Header component', () => {
  it('renders site title', () => {
    render(<Header siteTitle="NYHYPE" />)

    const titleElement = screen.getByText(/NYHYPE/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders with default props', () => {
    render(<Header />)

    // The header should still render even without a siteTitle
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })
})

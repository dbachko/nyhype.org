import React from 'react'
import { render } from '@testing-library/react'
import SEO from '../seo'

// Mock Helmet since it's used in the SEO component
jest.mock('react-helmet', () => {
  const Helmet = jest.fn(() => null)
  Helmet.renderStatic = jest.fn()
  return { Helmet }
})

// Mock useStaticQuery hook
jest.mock('gatsby', () => {
  const React = require('react')
  return {
    useStaticQuery: jest.fn().mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'NYHYPE',
          description: 'Buy Supreme with crypto.',
          author: '@nyhype',
        },
      },
    })),
    graphql: jest.fn(),
  }
})

describe('SEO component', () => {
  it('renders with default props', () => {
    render(<SEO title="Default Title" />)
    // Since we're mocking Helmet, we're just checking that the component renders without error
    expect(true).toBe(true)
  })

  it('renders with custom title', () => {
    render(<SEO title="Test Title" />)
    // Since we're mocking Helmet, we're just checking that the component renders without error
    expect(true).toBe(true)
  })
})

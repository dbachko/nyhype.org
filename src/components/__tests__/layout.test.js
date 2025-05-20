import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../layout'

// Mock the StaticQuery
jest.mock('gatsby', () => ({
  StaticQuery: jest.fn().mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'NYHYPE',
        },
      },
    })
  ),
  graphql: jest.fn(),
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

// Mock the Header and Footer components
jest.mock('../header', () => ({ siteTitle }) => (
  <div data-testid="header">Header: {siteTitle}</div>
))

jest.mock('../footer', () => () => <div data-testid="footer">Footer</div>)

// Mock the CSS import
jest.mock('../scss/spectre.scss', () => ({}))

describe('Layout', () => {
  it('renders the header and footer', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    )
    
    // Check for header with site title
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByText('Header: NYHYPE')).toBeInTheDocument()
    
    // Check for footer
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the children', () => {
    render(
      <Layout>
        <div data-testid="test-content">Test content</div>
      </Layout>
    )
    
    // Check for content
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
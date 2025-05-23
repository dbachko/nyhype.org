import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../layout'

// The gatsby mock is handled by the global __mocks__/gatsby.js file

// Mock the Header and Footer components
jest.mock('../header', () => {
  return function DummyHeader() {
    return <div data-testid="header">Header</div>
  }
})

jest.mock('../footer', () => {
  return function DummyFooter() {
    return <div data-testid="footer">Footer</div>
  }
})

describe('Layout component', () => {
  it('renders children', () => {
    render(
      <Layout>
        <main>Test content</main>
      </Layout>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders header and footer', () => {
    render(
      <Layout>
        <main>Test content</main>
      </Layout>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

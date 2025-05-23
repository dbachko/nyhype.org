import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';

// Mock gatsby's useStaticQuery
jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'NYHYPE',
      },
    },
  })),
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => 
      React.createElement("a", {
        ...rest,
        href: to,
      })
    ),
}));

// Mock the Header and Footer components
jest.mock('../header', () => {
  return function DummyHeader() {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock('../footer', () => {
  return function DummyFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

describe('Layout component', () => {
  it('renders children', () => {
    render(
      <Layout>
        <main>Test content</main>
      </Layout>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders header and footer', () => {
    render(
      <Layout>
        <main>Test content</main>
      </Layout>
    );
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
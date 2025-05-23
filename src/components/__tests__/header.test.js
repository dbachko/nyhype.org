import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';

// Mock gatsby's Link component
jest.mock('gatsby', () => ({
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

describe('Header component', () => {
  it('renders site title', () => {
    render(<Header siteTitle="NYHYPE" />);
    
    const titleElement = screen.getByText(/NYHYPE/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders with default props', () => {
    render(<Header />);
    
    // The header should still render even without a siteTitle
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
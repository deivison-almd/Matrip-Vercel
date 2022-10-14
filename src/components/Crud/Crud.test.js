import React from 'react';
import { render, screen } from '@testing-library/react';
import Crud from './Crud';

test('renders learn react link', () => {
  render(<Crud />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

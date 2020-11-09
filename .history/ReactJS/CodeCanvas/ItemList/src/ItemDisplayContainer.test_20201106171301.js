import { render, screen } from '@testing-library/react';
import ItemDisplayContainer from './ItemDisplayContainer';

test('renders learn react link', () => {
  render(<ItemDisplayContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

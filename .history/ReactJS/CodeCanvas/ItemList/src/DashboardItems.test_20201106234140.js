import { render, screen } from '@testing-library/react';
import DashboardItems from './DashboardItems';

test('renders learn react link', () => {
  render(<DashboardItems />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

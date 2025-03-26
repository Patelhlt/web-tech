import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header, sidebar, main content, and footer', () => {
  render(<App />);
  expect(screen.getByText(/this is header/i)).toBeInTheDocument();
  expect(screen.getByText(/side section/i)).toBeInTheDocument();
  expect(screen.getByText(/body/i)).toBeInTheDocument();
  expect(screen.getByText(/this is footer/i)).toBeInTheDocument();
});


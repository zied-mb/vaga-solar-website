import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VagaSolar heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/VagaSolar/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to VagaSolar/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders counter section', () => {
  render(<App />);
  const counterElement = screen.getByText(/Interactive Counter/i);
  expect(counterElement).toBeInTheDocument();
}); 
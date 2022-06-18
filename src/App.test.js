import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi there', () => {
  render(<App />);
  const text = screen.getByText(/hi there/i);
  expect(text).toBeInTheDocument();
});

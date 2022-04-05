import { render, screen } from '@testing-library/react';
import App from './App';
import Task from './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  it('testa se task é uma função', () => {
    expect(typeof Task()).toBe('function')
  })
});

import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ path, element }) => (path === '*' ? null : element),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useLocation: () => ({ pathname: '/' })
}), { virtual: true });

jest.mock('./components/home', () => () => <div>Home Screen</div>);
jest.mock('./components/NotFound', () => () => <div>Not Found</div>);
jest.mock('./components/ScrollToTop', () => () => null);

test('renders home route element', () => {
  render(<App />);
  const linkElement = screen.getByText(/home screen/i);
  expect(linkElement).toBeInTheDocument();
});

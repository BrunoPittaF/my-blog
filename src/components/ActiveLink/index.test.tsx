import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActiveLink from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '/',
    };
  },
}));

describe('ActiveLink component tests', () => {
  it('renders without crashing', () => {
    render(
      <ActiveLink activeClassName="active" href="experience">
        <span>Experience</span>
      </ActiveLink>
    );

    const activeLink = screen.getByText('Experience');

    expect(activeLink).toBeInTheDocument();
  });
});

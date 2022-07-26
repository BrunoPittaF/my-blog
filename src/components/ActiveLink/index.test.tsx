import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActiveLink from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementationOnce(() => ({
  asPath: '/',
}));

describe('ActiveLink component tests', () => {
  test('renders without crashing', () => {
    render(
      <ActiveLink activeClassName="active" href="experience">
        <span>Experience</span>
      </ActiveLink>
    );

    const activeLink = screen.getByText('Experience');

    expect(activeLink).toBeInTheDocument();
  });
});

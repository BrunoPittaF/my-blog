// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './index';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementationOnce(() => ({
  asPath: '/',
}));

describe('Header', () => {
  it('it is a rendering', async () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Experiência')).toBeInTheDocument();
    expect(screen.getByText('Artigos')).toBeInTheDocument();
  });
});

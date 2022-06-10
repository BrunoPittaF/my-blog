// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './index';

describe('Header', () => {
  it('it is a rendering', async () => {
    render(<Header />);
    const menuHome = await screen.findAllByText(/Home/i);

    menuHome.forEach((element) => {
      expect(element.textContent).toEqual('Home');
    });
  });
});

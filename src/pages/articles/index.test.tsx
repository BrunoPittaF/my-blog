import { render, screen, act, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom';
import Articles from './index';
import api from '../../services/api';
import { articlesMock } from '../../mocks/articlesMocks';

const apiMock = new MockAdapter(api);

describe('Articles List', () => {
  it('it is a rendering without crashing with request', async () => {
    act(() => {
      apiMock.onGet('/articles').reply(200, [{ ...articlesMock }]);
    });

    render(<Articles response={[articlesMock]} />);

    const titleArticle = screen.getByText('Article 1');
    const descriptionArticle = screen.getByText('This is a description');
    const dateArticle = screen.getByText('31 de dez. de 2017');

    await waitFor(() => {
      expect(titleArticle).toBeInTheDocument();
      expect(descriptionArticle).toBeInTheDocument();
      expect(dateArticle).toBeInTheDocument();
    });
  });
});

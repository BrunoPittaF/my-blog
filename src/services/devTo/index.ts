import api from '../api';

const username: string = 'brunopittaf';

export const devToService = {
  async getArticles(page: number): Promise<any> {
    try {
      const response = await api.get('/articles', {
        params: {
          username: username,
          per_page: 10,
          page: page,
          state: 'all',
        },
      });

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

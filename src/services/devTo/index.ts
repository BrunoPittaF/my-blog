import api from '../api';

const username: string = 'brunopittaf';

export const devToService = {
  async getArticlesList(page: number): Promise<any> {
    try {
      const response = await api.get('/articles', {
        params: {
          username: username,
          per_page: 9,
          page: page,
          state: 'fresh',
        },
      });

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getAllArticles(): Promise<any> {
    try {
      const response = await api.get('/articles', {
        params: {
          username: username,
          per_page: 9,
          page: 1,
          state: 'all',
        },
      });

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async getArticle(id: number): Promise<any> {
    try {
      const response = await api.get(`/articles/${id}`, {
        params: {
          username: username,
        },
      });

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

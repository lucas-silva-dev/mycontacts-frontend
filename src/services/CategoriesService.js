import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4004');
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });

    return categories.map(CategoryMapper.toDomain);
  }

  showContact(id) {
    return this.httpClient.get(`/categories/${id}`);
  }
}

export default new CategoriesService();

import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4004');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }

  async showContact(id) {
    return this.httpClient.get(`/categories/${id}`);
  }
}

export default new CategoriesService();

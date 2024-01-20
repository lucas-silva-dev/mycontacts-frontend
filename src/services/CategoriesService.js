import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4004');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }

  showContact(id) {
    return this.httpClient.get(`/categories/${id}`);
  }
}

export default new CategoriesService();

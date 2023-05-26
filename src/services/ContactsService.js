import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4004');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'mytoken',
      },
    });
  }

  async showContact(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  async CreateContact(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }
}

export default new ContactsService();

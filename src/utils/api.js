import { users } from './data';

export default class API {
  static async getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  static async createUsers() {
    localStorage.setItem('users', JSON.stringify(users));
  }
}

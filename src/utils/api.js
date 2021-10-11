import { todos, users } from './data';

export default class API {
  static async createUsers() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  static async getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  static async createTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static async getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }
}

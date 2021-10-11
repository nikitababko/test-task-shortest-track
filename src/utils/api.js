import { todos, users } from './data';

export default class API {
  static async createUsers() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  static async getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  static async createTodos(newTodos) {
    localStorage.setItem('todos', JSON.stringify(newTodos ? newTodos : todos));
  }

  static async getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }
}

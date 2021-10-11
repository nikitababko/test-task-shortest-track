import { AuthContainer, TodoFormContainer } from 'containers';
import { Home } from './components';

export const RouteNames = {
  AUTH: '/auth',
  HOME: '/',
  ADD_TODO: '/add_todo',
};

export const publicRoutes = [
  {
    path: RouteNames.AUTH,
    exact: true,
    component: AuthContainer,
  },
];

export const privateRoutes = [
  {
    path: RouteNames.HOME,
    exact: true,
    component: Home,
  },
  {
    path: RouteNames.ADD_TODO,
    exact: true,
    component: TodoFormContainer,
  },
];

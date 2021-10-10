import Auth from './components/Auth';
import Home from './components/Home';

export const RouteNames = {
  AUTH: '/auth',
  HOME: '/',
};

export const publicRoutes = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: Auth,
  },
];

export const privateRoutes = [
  {
    path: RouteNames.HOME,
    exact: true,
    component: Home,
  },
];

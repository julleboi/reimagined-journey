import Users from './Users'
import Projects from './Projects';

export const fallback = '/users';

const routes = [
  {
    name: 'Users',
    path: '/users',
    component: Users
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects
  }
];

export default routes;
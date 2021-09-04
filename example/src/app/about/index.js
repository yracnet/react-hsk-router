import { History } from './History';
import { Mission } from './Mission';

export const route = {
  path: '/about',
  title: 'About',
  defaultTo: '/history',
  children: [
    { path: '/history', title: 'History', component: History },
    { path: '/mission', title: 'Mission', component: Mission },
  ],
};

import { Product1 } from './Product1';
import { Product2 } from './Product2';

export const route = {
  path: '/product',
  title: 'Product',
  children: [
    { path: '/p1', title: 'Producto 1', component: Product1 },
    { path: '/p2', title: 'Producto 2', component: Product2 },
    { path: '/pp', title: 'Producto X' },
  ],
};

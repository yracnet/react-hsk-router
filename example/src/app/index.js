import { PageContainer, MainContainer } from './Container';
import { route as aboutRoute } from './about';
import { route as productRoute } from './products';
import { route as serviceRoute } from './services';

export const route = {
  title: 'Example Aplication',
  container: PageContainer,
  defaultTo: '/about',
  children: [
    { ...aboutRoute, container: MainContainer },
    { ...productRoute, container: MainContainer },
    { ...serviceRoute, container: MainContainer },
  ],
};

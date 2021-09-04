import { ItemRender, DebugContainer, Item } from '../module';
import { Config } from '../module/config';
import { WrapperContainer } from '../module/container';

export const module1: Item = {
  title: 'Module',
  path: '/module',
  defaultTo: '/m1',
  container: DebugContainer,
  children: [
    {
      path: '/m1',
      component: () => <h1>Hola....M1..</h1>,
    },
    {
      title: 'M2 - Not Found',
      path: '/m2',
      defaultTo: '/sm3',
      container: DebugContainer,
      children: [
        {
          title: 'SM1 - Not Defined',
          path: '/sm1',
        },
        {
          path: '/sm2',
          component: () => <h1>Hola....SM2..</h1>,
        },
      ],
    },
  ],
};
export const wizard1: Config = [
  {
    title: 'W1 - Simple',
    path: '/w1',
    component: () => <h1>Hola....W1..</h1>,
  },
  {
    title: 'W2 - Not Found',
    path: '/w2',
    defaultTo: '/ws3',
    container: DebugContainer,
    children: [
      {
        title: 'WS1 - Not Defined',
        path: '/ws1',
      },
      {
        path: '/ws2',
        component: () => <h1>Hola....WS2..</h1>,
      },
    ],
  },
];
export const app: Item = {
  title: 'App',
  defaultTo: '/a1',
  container: DebugContainer,
  children: [
    {
      path: '/a0',
      component: () => <h1>Hola....A0..</h1>,
    },
    {
      path: '/a1',
      component: () => <h1>Hola....A1..</h1>,
    },
    {
      title: 'A2 - Children',
      path: '/a2',
      defaultTo: '/b2',
      container: DebugContainer,
      children: [
        {
          title: 'B1 - Not Found',
          path: '/b1',
          defaultTo: '/c3',
          container: DebugContainer,
          children: [
            {
              path: '/c1',
              component: () => <h1>Hola....C1..</h1>,
            },
            {
              title: 'C2 - Not Defined',
              path: '/c2',
            },
          ],
        },
        {
          path: '/b2',
          component: () => <h1>Hola....B2..</h1>,
        },
        {
          path: '/b3',
          component: () => <h1>Hola....B3..</h1>,
        },
      ],
    },
    module1,
    {
      path: '/remote',
      title: 'Remote',
      relative: true,
      component: () => <ItemRender value={module1} />,
    },
  ],
};

export const nivel: Item = {
  defaultTo: '/n1-a',
  container: DebugContainer,
  wrapper: WrapperContainer,
  children: [
    {
      path: '/n1-a',
      component: () => <h1>Hola....N1-A</h1>,
    },
    {
      path: '/n1-b',
      component: () => <h1>Hola....N1-B</h1>,
    },
    {
      path: '/n1-c',
      container: DebugContainer,
      wrapper: WrapperContainer,
      defaultTo: '/n2-a',
      children: [
        {
          path: '/n2-a',
          component: () => <h1>Hola....N2-A</h1>,
        },
        {
          path: '/n2-b',
          component: () => <h1>Hola....N2-B</h1>,
        },
        {
          path: '/n2-c',
          container: DebugContainer,
          wrapper: WrapperContainer,
          defaultTo: '/n3-z',
          children: [
            {
              path: '/n3-a',
              component: () => <h1>Hola....N3-A</h1>,
            },
            {
              path: '/n3-b',
              component: () => <h1>Hola....N3-B</h1>,
            },
            {
              path: '/n3-c',
              container: DebugContainer,
              wrapper: WrapperContainer,
              children: [
                {
                  path: '/n4-a',
                  component: () => <h1>Hola....N4-A</h1>,
                },
                {
                  path: '/n4-b',
                  component: () => <h1>Hola....N4-B</h1>,
                },
                {
                  path: '/n4-c',
                  container: DebugContainer,
                  wrapper: WrapperContainer,
                  children: [
                    {
                      path: '/n5-a',
                      component: () => <h1>Hola....N5-A</h1>,
                    },
                    {
                      path: '/n5-b',
                      component: () => <h1>Hola....N5-B</h1>,
                    },
                    {
                      path: '/n5-c',
                      container: DebugContainer,
                      wrapper: WrapperContainer,
                      children: [
                        {
                          path: '/n6-a',
                          component: () => <h1>Hola....N6-A</h1>,
                        },
                        {
                          path: '/n6-b',
                          component: () => <h1>Hola....N6-B</h1>,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

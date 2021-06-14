# React Router Navegation

Permite definir la estructura de navegacion de un proyecto basado en un objeto (routers)

## Ejemplo

Codigo ejemplo: [codigo](./example):

Aplicacion ejemplo: [online](http://yracnte.github.io/react-router-nav/):

## Configuracion basica

### Definicion de routers

Para cada modulo/grupo de opciones se debe definir el siguiente objeto:

Ejemplo: [example/src/app/about/index.js](./example/src/app/about/index.js):

```javascript:./example/src/app/about/index.js
export const routes = [
    { path: '/history', title: 'History', component: HistoryComponent },
    { path: '/mission', title: 'Mission', component: MissionComponent }
]
```
Esta declaracion se repite en otros directorios como:

See [example/src/app/products/index.js](./example/src/app/products/index.js) as:

See [example/src/app/services/index.js](./example/src/app/services/index.js) as:

La ruta **path** es relativa al directorio.


### Componente de Navegacion

Utilice el componente **NavContainer** para renderizar los componentes.

```javascript:./example/src/app/about/index.js
export const AboutComponent = (props) => (
    <NavContainer {...props}
                  value={routes}
                  defaultTo="/history" />
)
```
Este componente suprime la invocacion de Switch y Route de **react-router**

Adicionalmente permite envolver los componentes definidos en **routers** con el componente **container**.

```javascript:./example/src/app/about/index.js
export const AboutComponent = (props) => (
    <NavContainer {...props}
                  value={routes}
                  container={AppContainer}
                  notFound={NotFound}
                  notDefined={NotDefined}
                  defaultTo="/history" />
)
```

Tambien puede definir componentes comunes como:
- **defaultTo**: Cuando la ruta no esta definida
- **notFound**: Cuando la ruta no esta definida y tampoco el atributo **defaultTo**
- **notDefined**: Cuando el atributo **component** no exista








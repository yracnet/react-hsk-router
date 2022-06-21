# React Router Navegation

Permite definir la estructura de navegacion de un proyecto basado en un objeto (routers)

La navegacion es RELATIVA por lo cual puede crear modulos con navegacion de forma independiente y comodarlos a una ruta padre

Proporciona hooks para el manejo de la navegacion y la obtener las cofiguracion realizadas

## Ejemplo

Aplicacion ejemplo: [online](http://yracnet.github.io/react-hsk-router/):

Codigo ejemplo: [codigo](./example):

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

Utilice el componente **RenderRoute** para renderizar los componentes.

```javascript:./example/src/app/about/index.js
export const AboutComponent = (props) => (
    <RenderRoute {...props}
                  value={routes}
                  defaultTo="/history" />
)
```

Este componente suprime la invocacion de Switch y Route de **react-router**

Adicionalmente permite envolver los componentes definidos en **routers** con el componente **container**.

```javascript:./example/src/app/about/index.js
export const AboutComponent = (props) => (
    <RenderRoute {...props}
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


### Historial de Navegacion

Utilice el hooks **useHistory** para acceder al historial de navegacion y navegar.

```javascript:./example/src/app/about/index.js
    const history = useHistory();
    //basename: Current PATH
    //push:     Navega a una ruta RELATIVA
    //replace:  Remplaza la rula Actual
    //onClick:  Utilitario para componentes <button value="/relative/new/path" onClick={history.onClick}/> o <a href="/relative/new/path" onClick={history.onClick}/>
    //go:       Navega a otra ruta relativa
    //goBack:   Retrocede
  }
```

### Configuracion Relativa

Utilice el hooks **useRelative** para acceder al objeto de configuracion router definido y que embuelbe al componente actual.

```javascript:./example/src/app/about/index.js
export const routes = [
    { path: '/history', title: 'History', component: HistoryComponent },
    { path: '/mission', title: 'Mission', component: MissionComponent, <<...other props>> } //RelativeCurrent
]
```
```javascript:./example/src/app/about/index.js
    const relative = useRelative();
    //basename: Relative Path
    //rule:     Informacion del react-router <<path, exact, strict, sensitive>>
    //current:  RelativeCurrent;
  }
```
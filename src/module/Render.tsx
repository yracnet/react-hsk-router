import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Relative, RelativeInstance } from './context';
import { RouteConfig, RouteItem } from './factory';

export const Render: React.FC<RouteItem> = React.memo(
    ({ mode, rule, current, define, items }) => {
        const { container: Container, component: Component, notFound, redirect } = define;
        const instance: RelativeInstance = { basename: current.uri, rule, current }
        return mode === 'simple' ?
            <Container>
                <Component />
            </Container>
            :
            <Relative.Provider value={instance}>
                <Container>
                    {
                        mode === 'recursive' ?
                            <RenderSwitch value={items} notFound={notFound} redirect={redirect} />
                            :
                            <Component />
                    }
                </Container>
            </Relative.Provider>
    }
)

interface DefaultRouteProps {
    notFound: React.FC;
    redirect: string;
}
interface RenderRouteProps extends DefaultRouteProps {
    value: RouteConfig;
}
const RenderSwitch: React.FC<RenderRouteProps> = ({ value, notFound, redirect }) => {
    return (
        <Switch>
            {
                value.map(it => (
                    <Route {...it.rule}
                        component={() => <Render {...it} />} />
                ))
            }
            <DefaultRoute notFound={notFound} redirect={redirect} />
        </Switch>
    )
}

//Prevent reload main compoment cause by useLocation
const DefaultRoute: React.FC<DefaultRouteProps> = ({ notFound: NotFound, redirect }) => {
    const { pathname } = useLocation();
    const isRedirect = !pathname.startsWith(redirect);
    return (
        <Route>
            <NotFound />
            {isRedirect && <Redirect to={redirect} />}
        </Route>
    )
}
import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { NotContainer, NotFound, NotDefined } from './Default'
import { createRelative, Relative } from './Relative'
import { NavConfig, NavItem } from './Config'


export interface ContainerProps {
    value: NavConfig;
    relative: NavConfig;
    [prop: string]: any;
}

export interface NavContainerProps {
    value: NavConfig | NavItem;
    basename?: string;
    defaultTo?: string;
    container?: React.FC<any>;
    notFound?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}

export const NavContainer: React.FC<NavContainerProps> = ({ container, defaultTo, ...props }) => {
    let { value, basename, notFound, notDefined } = props
    const relative = createRelative(basename)
    defaultTo = relative.path(defaultTo)
    const config: NavConfig = relative.config(value);
    const Container = container || NotContainer
    return (
        <Relative.Provider value={relative}>
            <Container key="container" {...props} value={config} relative={value}>
                <Switch>
                    {config.map(it => <NavRoute key={it.path} {...it} notDefined={notDefined} />)}
                    <NavRouteDefault redirectTo={defaultTo} content={notFound} />
                </Switch>
            </Container>
        </Relative.Provider>
    )
}


export interface NavRouteProps {
    path?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    component?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}

export const NavRoute: React.FC<NavRouteProps> = (props) => {
    const { path, exact, strict, sensitive, component, notDefined, ...others } = props
    const DefaultContent = component || notDefined || NotDefined
    return <Route path={path}
        exact={exact}
        sensitive={sensitive}
        strict={strict}
        component={() => <DefaultContent basename={path} {...others} />}
    />
}

export interface NavRouteDefaultProps {
    redirectTo?: string;
    content?: React.FC<any>;
    [prop: string]: any;
}


const NavRouteDefault: React.FC<NavRouteDefaultProps> = ({ redirectTo, content, ...props }) => {
    const { pathname } = useLocation();
    if (redirectTo === pathname) {
        redirectTo = undefined;
    }
    const DefaultContent = content || NotFound
    return (
        <Route {...props}>
            <DefaultContent />
            {redirectTo !== undefined && <Redirect to={redirectTo} />}
        </Route>
    )
}
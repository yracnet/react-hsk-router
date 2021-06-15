import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { NotDefined, NotFound } from './Default'

export interface NavRouteProps {
    path?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    component?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}

const NavRouteRaw: React.FC<NavRouteProps> = (props) => {
    const { path, exact, strict, sensitive, component, notDefined, ...others } = props
    const DefaultContent = component || notDefined || NotDefined
    return <Route path={path}
        exact={exact}
        sensitive={sensitive}
        strict={strict}
        component={() => <DefaultContent basename={path} {...others} />}
    />
}
const areEqualNavRouter = (a: NavRouteProps, b: NavRouteProps) => {
    //console.log('areEqualNavRouter--->', a, b);
    return a.path === b.path &&
        a.exact === b.exact &&
        a.strict === b.strict &&
        a.sensitive === b.sensitive &&
        a.component === b.component &&
        a.notDefined === b.notDefined;
}
export const NavRoute = React.memo(NavRouteRaw, areEqualNavRouter)

export interface NavRouteDefaultProps {
    redirectTo?: string;
    content?: React.FC<any>;
    [prop: string]: any;
}

const NavRouteDefaultRaw: React.FC<NavRouteDefaultProps> = ({ redirectTo, content, ...props }) => {
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
const areEqualNavRouterDefault = (a: NavRouteDefaultProps, b: NavRouteDefaultProps) => {
    //console.log('areEqualNavRouterDefault--->', a, b);
    return a.redirectTo === b.redirectTo && a.content === b.content;
}
export const NavRouteDefault = React.memo(NavRouteDefaultRaw, areEqualNavRouterDefault)
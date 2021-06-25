import { Config, Item } from "./config";
import { NotContainer, NotDefined, NotFound } from "./container";
import assert from "./assert";

export interface RouteRule {
    key: string;
    path: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
}

export interface RouteDefine {
    //relative: boolean;
    container: React.FC;
    notFound: React.FC;
    component: React.FC;
    redirect: string;
}

export interface RouteCurrent {
    uri: string;
    path: string;
    views: RouteCurrent[];
    [key: string]: any;
}

export interface RouteItem {
    mode: 'recursive' | 'relative' | 'simple';
    rule: RouteRule;
    define: RouteDefine;
    current: RouteCurrent;
    items: RouteConfig;
}

export type RouteConfig = RouteItem[];

const getRouteConfig = (items: Config = [], basename: string): RouteConfig => {
    return items.map((item, ix) => getRouteItem(item, basename, ix + 1))
}

export const getRouteItem = (item: Item, basename: string, index: number = 1): RouteItem => {
    let {
        path, exact, strict, sensitive,
        component, defaultTo, children, container, notFound, notDefined,
        relative,
        ...others } = item;
    const key = assert.key(item.id, path, index);
    const routePath = path = assert.path(path);
    const routeURI = assert.join(basename, path);
    const routeTo = assert.join(routeURI, defaultTo);
    const routeItems = getRouteConfig(children, routeURI);
    const mode = routeItems.length > 0 ? 'recursive' : relative ? 'relative' : 'simple'
    const rule: RouteRule = {
        key,
        path: routeURI,
        exact,
        strict,
        sensitive,
    }
    const define: RouteDefine = {
        container: container || NotContainer,
        notFound: notFound || NotFound,
        component: component || notDefined || NotDefined,
        redirect: routeTo,
    }
    const current: RouteCurrent = {
        uri: routeURI,
        path: routePath,
        views: routeItems.map(it => it.current),
        ...others
    };
    return {
        mode,
        rule,
        define,
        current,
        items: routeItems
    }
}
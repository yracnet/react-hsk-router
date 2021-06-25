/// <reference types="react" />
import { Item } from "./config";
export interface RouteRule {
    key: string;
    path: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
}
export interface RouteDefine {
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
export declare type RouteConfig = RouteItem[];
export declare const getRouteItem: (item: Item, basename: string, index?: number) => RouteItem;

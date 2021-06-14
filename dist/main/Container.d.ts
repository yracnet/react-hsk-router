import React from 'react';
import { NavConfig, NavItem } from './Config';
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
export declare const NavContainer: React.FC<NavContainerProps>;
export interface NavRouteProps {
    path?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    component?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}
export declare const NavRoute: React.FC<NavRouteProps>;
export interface NavRouteDefaultProps {
    redirectTo?: string;
    content?: React.FC<any>;
    [prop: string]: any;
}

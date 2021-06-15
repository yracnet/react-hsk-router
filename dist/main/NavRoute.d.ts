import React from 'react';
export interface NavRouteProps {
    path?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    component?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}
export declare const NavRoute: React.NamedExoticComponent<NavRouteProps>;
export interface NavRouteDefaultProps {
    redirectTo?: string;
    content?: React.FC<any>;
    [prop: string]: any;
}
export declare const NavRouteDefault: React.NamedExoticComponent<NavRouteDefaultProps>;

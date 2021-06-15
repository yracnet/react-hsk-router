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
export declare const NavContainer: React.NamedExoticComponent<NavContainerProps>;

import { FC } from 'react';
export interface NavItem {
    id?: string;
    title?: string;
    description?: string;
    path: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    component?: NavComponent;
    container?: NavComponent;
    notFound?: NavComponent;
    notDefined?: NavComponent;
    disabled?: boolean;
    children?: NavConfig;
    grant?: string[];
    [prop: string]: any;
}
export declare type NavConfig = NavItem[];
export declare type NavValue = NavConfig | NavItem;
export interface NavComponentProps {
    value: NavConfig;
    [prop: string]: any;
}
export declare type NavComponent = FC<NavComponentProps>;

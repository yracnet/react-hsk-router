import { FC } from 'react'

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

export type NavConfig = NavItem[]

export type NavValue = NavConfig | NavItem

export interface NavComponentProps {
    value: NavConfig;
    [prop: string]: any;
}

export type NavComponent = FC<NavComponentProps>;

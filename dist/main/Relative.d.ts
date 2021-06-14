import React from 'react';
import { NavValue, NavConfig } from './Config';
export declare type RelativePathFN = (path: any, basename?: string) => string;
export declare type RelativeConfigFN = (value: NavValue, basename?: string) => NavConfig;
export declare const relativePath: RelativePathFN;
export declare const relativeConfig: RelativeConfigFN;
export interface RelativeType {
    basename: string;
    path: RelativePathFN;
    config: RelativeConfigFN;
}
export declare const createRelative: (basename?: string | undefined) => RelativeType;
export declare const Relative: React.Context<RelativeType>;

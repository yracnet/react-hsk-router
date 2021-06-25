import React from "react";
export interface RelativeInstance {
    basename: string;
    rule: RelativeRule;
    current: RelativeCurrent;
}
export interface RelativeRule {
    path: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
}
export interface RelativeCurrent {
    uri: string;
    path: string;
    views: RelativeCurrent[];
    [key: string]: any;
}
export declare const Relative: React.Context<RelativeInstance>;
export declare const useRelative: () => RelativeInstance;

import React from 'react';
import { RelativeType } from "./Relative";
export declare type UseRelative = (context?: React.Context<RelativeType>) => RelativeType;
export declare type UseBasename = (context?: React.Context<RelativeType>) => string;
export declare const useRelative: UseRelative;
export declare const useBasename: UseBasename;

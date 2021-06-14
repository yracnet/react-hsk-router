import React from 'react'
import { NavValue, NavConfig } from './Config'

export type RelativePathFN = (path: any, basename?: string) => string
export type RelativeConfigFN = (value: NavValue, basename?: string) => NavConfig

export const relativePath: RelativePathFN = (path, basename) => {
    path = path || ''
    basename = basename || ''
    if (!path.startsWith('/')) {
        path = '/' + path
    }
    return basename + path
}

export const relativeConfig: RelativeConfigFN = (value, basename) => {
    const rValue: NavConfig = Array.isArray(value) ? value : value ? [value] : []
    return rValue
        .map(it => ({ ...it, path: relativePath(it.path, basename) }))
}

export interface RelativeType {
    basename: string;
    path: RelativePathFN;
    config: RelativeConfigFN;
}

export const createRelative = (basename?: string): RelativeType => {
    basename = basename || ""
    return {
        basename,
        path: (name) => relativePath(name, basename),
        config: (value) => relativeConfig(value, basename)
    }
}

const ROOT = createRelative();

export const Relative: React.Context<RelativeType> = React.createContext(ROOT);

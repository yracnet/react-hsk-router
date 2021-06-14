import React from 'react'
import { RelativeType, Relative } from "./Relative"

export type UseRelative = (context?: React.Context<RelativeType>) => RelativeType

export type UseBasename = (context?: React.Context<RelativeType>) => string

export const useRelative: UseRelative = (current = Relative) => {
    return React.useContext(current)
}

export const useBasename: UseBasename = (current = Relative) => {
    return React.useContext(current)?.basename
}
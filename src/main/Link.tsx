import React, { FC } from 'react'
import { Link as RRDLink, LinkProps as RRDLinkProps } from 'react-router-dom'
import { NavLink as RRDNavLink, NavLinkProps as RRDNavLinkProps } from 'react-router-dom'
import { useRelative } from './Hooks'

export const NavLink: FC<RRDNavLinkProps> = ({ to, ...props }) => {
    const relative = useRelative();
    const relativeTo = relative.path(to);
    return <RRDLink to={relativeTo} {...props} />
}

export const Link: FC<RRDLinkProps> = ({ to, ...props }) => {
    const relative = useRelative();
    const relativeTo = relative.path(to);
    return <RRDNavLink to={relativeTo} {...props} />
}


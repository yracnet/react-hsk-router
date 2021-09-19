import React from 'react';
import { LinkProps as RRDLinkProps } from 'react-router-dom';
import { NavLinkProps as RRDNavLinkProps } from 'react-router-dom';
interface NavLinkProps extends RRDNavLinkProps {
    to: string;
}
export declare const NavLink: React.FC<NavLinkProps>;
interface LinkProps extends RRDLinkProps {
    to: string;
}
export declare const Link: React.FC<LinkProps>;
export {};

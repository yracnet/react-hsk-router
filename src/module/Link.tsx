import React from 'react';
import { Link as RRDLink, LinkProps as RRDLinkProps } from 'react-router-dom';
import { NavLink as RRDNavLink, NavLinkProps as RRDNavLinkProps } from 'react-router-dom';
import { useRelative } from './context';
import assert from './assert';

interface NavLinkProps extends RRDNavLinkProps {
  to: string;
}
export const NavLink: React.FC<NavLinkProps> = ({ to, ...props }) => {
  const { basename } = useRelative();
  const relativeTo = assert.join(basename, to);
  return <RRDNavLink to={relativeTo} {...props} />;
};
interface LinkProps extends RRDLinkProps {
  to: string;
}
export const Link: React.FC<LinkProps> = ({ to, ...props }) => {
  const { basename } = useRelative();
  const relativeTo = assert.join(basename, to);
  return <RRDLink to={relativeTo} {...props} />;
};

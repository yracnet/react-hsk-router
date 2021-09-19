import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

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

const NONE: RelativeInstance = {
  basename: '',
  current: {
    uri: '',
    path: '',
    views: [],
  },
  rule: {
    path: '',
  },
};
export const Relative = React.createContext<RelativeInstance>(NONE);

export const useRelative = (): RelativeInstance => {
  return React.useContext(Relative);
};

export const useCurrent = (): RelativeCurrent | any => {
  const { current } = React.useContext(Relative);
  const { pathname } = useLocation();
  return current.views.find((it) => matchPath(pathname, it.uri)) || {};
};

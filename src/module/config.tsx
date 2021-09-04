import React from 'react';
import { Render } from './Render';
import { useRelative } from './context';
import { getRouteItem } from './factory';

export interface Item {
  id?: string;
  //RULE
  path?: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  relative?: boolean;
  //DEFINED
  component?: React.FC;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  wrapper?: React.FC;
  children?: Config;
  defaultTo?: string;
  [key: string]: any;
}

export type Config = Item[];

interface ItemRenderProps {
  value: Item;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  defaultTo?: string;
  [key: string]: any;
}

export const ItemRender: React.FC<ItemRenderProps> = ({ value, children, ...props }) => {
  const item: Item = {
    ...value,
    ...props,
  };
  const { basename } = useRelative();
  const route = getRouteItem(item, basename);
  //console.log('ItemRender--->', route);
  return <Render {...route} />;
};

interface ConfigRenderProps {
  value: Config;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  defaultTo?: string;
  [key: string]: any;
}
export const ConfigRender: React.FC<ConfigRenderProps> = ({ value, children, ...props }) => {
  const item: Item = {
    children: value,
    ...props,
  };
  const { basename } = useRelative();
  const route = getRouteItem(item, basename);
  //console.log('ConfigRender--->', route);
  return <Render {...route} />;
};

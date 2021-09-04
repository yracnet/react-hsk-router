import React from 'react';
export interface Item {
  id?: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  relative?: boolean;
  component?: React.FC;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  wrapper?: React.FC;
  children?: Config;
  defaultTo?: string;
  [key: string]: any;
}
export declare type Config = Item[];
interface ItemRenderProps {
  value: Item;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  defaultTo?: string;
  [key: string]: any;
}
export declare const ItemRender: React.FC<ItemRenderProps>;
interface ConfigRenderProps {
  value: Config;
  container?: React.FC;
  notFound?: React.FC;
  notDefined?: React.FC;
  defaultTo?: string;
  [key: string]: any;
}
export declare const ConfigRender: React.FC<ConfigRenderProps>;
export {};

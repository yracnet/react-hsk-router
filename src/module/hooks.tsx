import { useHistory as useHistoryRouter } from 'react-router';
import assert from './assert';
import { useRelative } from './context';

interface ClickEvent {
  target: {
    name?: string;
    type?: string;
    value?: string;
    href?: string;
  };
}

export const useHistory = () => {
  const { basename } = useRelative();
  const delegate = useHistoryRouter();
  const delegatePush = (path: string) => {
    path = basename + assert.path(path);
    delegate.push(path);
  };
  const delegateReplace = (path: string) => {
    path = basename + assert.path(path);
    delegate.replace(path);
  };
  const delegateGoBack = () => {
    delegate.goBack();
  };
  const delegateOnClick = ({ target }: ClickEvent) => {
    const { value, href } = target;
    const path = value || href;
    if (path) {
      delegatePush(path);
    }
  };
  return {
    length: delegate.length,
    basename: basename,
    push: delegatePush,
    replace: delegateReplace,
    onClick: delegateOnClick,
    go: delegate.go,
    goBack: delegateGoBack,
    goForward: delegate.goForward,
  };
};

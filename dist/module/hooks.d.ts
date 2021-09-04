interface ClickEvent {
  target: {
    name?: string;
    type?: string;
    value?: string;
    href?: string;
  };
}
export declare const useHistory: () => {
  length: number;
  basename: string;
  push: (path: string) => void;
  replace: (path: string) => void;
  onClick: ({ target }: ClickEvent) => void;
  go: (n: number) => void;
  goBack: () => void;
  goForward: () => void;
};
export {};

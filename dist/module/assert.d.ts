declare type Name = string | undefined;
declare const assert: {
    path: (name?: Name) => string;
    basename: (name?: Name) => string;
    redirect: (name?: Name) => string;
    name: (name: Name) => Name;
    join: (...names: Name[]) => string;
    key: (...names: any[]) => string;
};
export default assert;

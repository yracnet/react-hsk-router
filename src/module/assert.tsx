type Name = string | undefined;

const assertPath = (name: Name = '/'): string => {
  return !name.startsWith('/') ? '/' + name : name;
};

const assertBasename = (name: Name = ''): string => {
  return name.endsWith('/') ? name.substring(0, name.length - 1) : name;
};

const assertRedirect = (name: Name = ''): string => {
  return name.endsWith('/') ? name.substring(0, name.length - 1) : name;
};

const assertName = (name: Name) => {
  if (name?.startsWith('/')) {
    name = name.substring(1);
  }
  if (name?.endsWith('/')) {
    name = name.substring(0, name.length - 1);
  }
  return name;
};

const assertJoin = (...names: Name[]): string => {
  const name =
    '/' +
    names
      .map(assertName)
      .filter((it) => !!it)
      .join('/');
  //console.log('assertJoin', names, '===>', name);
  return name;
};

const assertKey = (...names: any[]): string => {
  return (
    names
      .filter((it) => !!it)
      .map((it) => it.toString())
      .find((it) => !!it) || '99'
  );
};

const assert = {
  path: assertPath,
  basename: assertBasename,
  redirect: assertRedirect,
  name: assertName,
  join: assertJoin,
  key: assertKey,
};

export default assert;

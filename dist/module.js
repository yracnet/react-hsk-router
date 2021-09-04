define('react-hsk-router', [
  'react/jsx-runtime',
  'react-router-dom',
  'react',
  '@babel/runtime/helpers/esm/defineProperty',
  '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose',
  'react-router',
], function (e, t, n, r, i, o) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 6))
    );
  })([
    function (e, t) {
      e.exports = require('react/jsx-runtime');
    },
    function (e, t) {
      e.exports = require('react-router-dom');
    },
    function (e, t) {
      e.exports = require('react');
    },
    function (e, t) {
      e.exports = require('@babel/runtime/helpers/esm/defineProperty');
    },
    function (e, t) {
      e.exports = require('@babel/runtime/helpers/esm/objectWithoutPropertiesLoose');
    },
    function (e, t) {
      e.exports = require('react-router');
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'ItemRender', function () {
          return R;
        }),
        n.d(t, 'ConfigRender', function () {
          return q;
        }),
        n.d(t, 'NotContainer', function () {
          return x;
        }),
        n.d(t, 'NotWrapper', function () {
          return g;
        }),
        n.d(t, 'NotFound', function () {
          return y;
        }),
        n.d(t, 'NotDefined', function () {
          return N;
        }),
        n.d(t, 'WrapperContainer', function () {
          return P;
        }),
        n.d(t, 'DebugContainer', function () {
          return w;
        }),
        n.d(t, 'Relative', function () {
          return j;
        }),
        n.d(t, 'useRelative', function () {
          return h;
        }),
        n.d(t, 'useHistory', function () {
          return T;
        }),
        n.d(t, 'getRouteItem', function () {
          return S;
        }),
        n.d(t, 'NavLink', function () {
          return I;
        }),
        n.d(t, 'Link', function () {
          return A;
        });
      var r = n(3),
        i = n.n(r);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var u = n(4),
        a = n.n(u);
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = a()(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var l = n(2),
        d = n.n(l),
        f = n(1),
        b = { basename: '', current: { uri: '', path: '', views: [] }, rule: { path: '' } },
        j = d.a.createContext(b),
        h = function () {
          return d.a.useContext(j);
        },
        p = n(0),
        v = d.a.memo(function (e) {
          var t = e.mode,
            n = e.rule,
            r = e.current,
            i = e.define,
            o = e.items,
            c = i.container,
            u = i.component,
            a = i.notFound,
            s = i.redirect,
            l = { basename: r.uri, rule: n, current: r };
          return 'simple' === t
            ? Object(p.jsx)(c, { children: Object(p.jsx)(u, {}) })
            : Object(p.jsx)(j.Provider, {
                value: l,
                children: Object(p.jsx)(c, {
                  children:
                    'recursive' === t ? Object(p.jsx)(m, { value: o, notFound: a, redirect: s }) : Object(p.jsx)(u, {}),
                }),
              });
        }),
        m = function (e) {
          var t = e.value,
            n = e.notFound,
            r = e.redirect;
          return Object(p.jsxs)(f.Switch, {
            children: [
              t.map(function (e) {
                return Object(p.jsx)(
                  f.Route,
                  c(
                    c({}, e.rule),
                    {},
                    {
                      component: function () {
                        return Object(p.jsx)(v, c({}, e));
                      },
                    }
                  )
                );
              }),
              Object(p.jsx)(O, { notFound: n, redirect: r }),
            ],
          });
        },
        O = function (e) {
          var t = e.notFound,
            n = e.redirect,
            r = !Object(f.useLocation)().pathname.startsWith(n);
          return Object(p.jsxs)(f.Route, {
            children: [Object(p.jsx)(t, {}), r && Object(p.jsx)(f.Redirect, { to: n })],
          });
        },
        x = function (e) {
          return e.children;
        },
        g = function (e) {
          return e.children;
        },
        y = function () {
          var e = Object(f.useLocation)().pathname;
          return Object(p.jsxs)('div', {
            className: 'not-found',
            children: [
              Object(p.jsx)('h1', { children: 'Rule Not Found' }),
              Object(p.jsxs)('h3', { children: ['The ', Object(p.jsx)('b', { children: e }), ' not found'] }),
            ],
          });
        },
        N = function () {
          var e = Object(f.useLocation)().pathname;
          return Object(p.jsxs)('div', {
            className: 'not-defined',
            children: [
              Object(p.jsx)('h1', { children: 'Component Not Defined' }),
              Object(p.jsxs)('h3', {
                children: ['The ', Object(p.jsx)('b', { children: e }), ' does not defined a component'],
              }),
            ],
          });
        },
        P = function (e) {
          var t = e.children,
            n = Math.random();
          return Object(p.jsxs)('div', {
            className: 'p-2 border border-primary',
            children: [t, Object(p.jsxs)('sub', { children: ['Wrapper Container: ', n] })],
          });
        },
        w = function (e) {
          var t = e.children,
            n = Math.random(),
            r = h();
          console.debug('DebugContainer', n, '=>', r);
          var i = r.current,
            o = r.rule;
          return Object(p.jsx)('div', {
            className: 'm-2',
            children: Object(p.jsxs)('div', {
              className: 'card',
              children: [
                Object(p.jsx)('div', {
                  className: 'card-header',
                  children: Object(p.jsxs)('ul', {
                    className: 'nav nav-pills',
                    children: [
                      Object(p.jsx)('li', {
                        className: 'nav-item',
                        children: Object(p.jsx)('b', { className: 'nav-link disabled', children: i.title || i.path }),
                      }),
                      i.views.map(function (e) {
                        return Object(p.jsx)(
                          'li',
                          {
                            className: 'nav-item',
                            children: Object(p.jsx)(
                              f.NavLink,
                              c(c({ to: e.uri }, o), {}, { className: 'nav-link', children: e.title || e.path })
                            ),
                          },
                          e.path
                        );
                      }),
                    ],
                  }),
                }),
                Object(p.jsxs)('div', {
                  className: 'card-body',
                  children: [t, Object(p.jsxs)('sub', { children: ['Debug Container: ', n] })],
                }),
              ],
            }),
          });
        },
        k = function (e) {
          var t, n;
          return (
            (null === (t = e) || void 0 === t ? void 0 : t.startsWith('/')) && (e = e.substring(1)),
            (null === (n = e) || void 0 === n ? void 0 : n.endsWith('/')) && (e = e.substring(0, e.length - 1)),
            e
          );
        },
        F = {
          path: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/';
            return e.startsWith('/') ? e : '/' + e;
          },
          basename: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            return e.endsWith('/') ? e.substring(0, e.length - 1) : e;
          },
          redirect: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            return e.endsWith('/') ? e.substring(0, e.length - 1) : e;
          },
          name: k,
          join: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r =
              '/' +
              t
                .map(k)
                .filter(function (e) {
                  return !!e;
                })
                .join('/');
            return r;
          },
          key: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return (
              t
                .filter(function (e) {
                  return !!e;
                })
                .map(function (e) {
                  return e.toString();
                })
                .find(function (e) {
                  return !!e;
                }) || '99'
            );
          },
        },
        C = [
          'path',
          'exact',
          'strict',
          'sensitive',
          'component',
          'defaultTo',
          'children',
          'container',
          'notFound',
          'notDefined',
          'relative',
        ],
        D = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return e.map(function (e, r) {
            return S(e, t, r + 1, n);
          });
        },
        S = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = e.path,
            o = e.exact,
            u = e.strict,
            a = e.sensitive,
            l = e.component,
            d = e.defaultTo,
            f = e.children,
            b = e.container,
            j = e.notFound,
            h = e.notDefined,
            p = e.relative,
            v = s(e, C),
            m = F.key(e.id, i, n),
            O = (i = F.path(i)),
            g = F.join(t, i),
            P = F.join(g, d),
            w = D(f, g, e.wrapper),
            k = w.length > 0 ? 'recursive' : p ? 'relative' : 'simple',
            S = { key: m, path: g, exact: o, strict: u, sensitive: a },
            W = { container: b || r || x, notFound: j || y, component: l || h || N, redirect: P },
            L = c(
              {
                uri: g,
                path: O,
                views: w.map(function (e) {
                  return e.current;
                }),
              },
              v
            );
          return { mode: k, rule: S, define: W, current: L, items: w };
        },
        W = ['value', 'children'],
        L = ['value', 'children'],
        R = function (e) {
          var t = e.value,
            n = (e.children, s(e, W)),
            r = c(c({}, t), n),
            i = h().basename,
            o = S(r, i);
          return Object(p.jsx)(v, c({}, o));
        },
        q = function (e) {
          var t = e.value,
            n = (e.children, c({ children: t }, s(e, L))),
            r = h().basename,
            i = S(n, r);
          return Object(p.jsx)(v, c({}, i));
        },
        M = n(5),
        T = function () {
          var e = h().basename,
            t = Object(M.useHistory)(),
            n = function (n) {
              (n = e + F.path(n)), t.push(n);
            };
          return {
            length: t.length,
            basename: e,
            push: n,
            replace: function (n) {
              (n = e + F.path(n)), t.replace(n);
            },
            onClick: function (e) {
              var t = e.target,
                r = t.value,
                i = t.href,
                o = r || i;
              o && n(o);
            },
            go: t.go,
            goBack: function () {
              t.goBack();
            },
            goForward: t.goForward,
          };
        },
        _ = ['to'],
        E = ['to'],
        I = function (e) {
          var t = e.to,
            n = s(e, _),
            r = h().basename,
            i = F.join(r, t);
          return Object(p.jsx)(f.NavLink, c({ to: i }, n));
        },
        A = function (e) {
          var t = e.to,
            n = s(e, E),
            r = h().basename,
            i = F.join(r, t);
          return Object(p.jsx)(f.Link, c({ to: i }, n));
        };
    },
  ]);
});

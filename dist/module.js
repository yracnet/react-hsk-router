define("react-hsk-router", ["react/jsx-runtime","react-router-dom","react","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose","react-router"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ItemRender", function() { return /* reexport */ config_ItemRender; });
__webpack_require__.d(__webpack_exports__, "ConfigRender", function() { return /* reexport */ config_ConfigRender; });
__webpack_require__.d(__webpack_exports__, "NotContainer", function() { return /* reexport */ NotContainer; });
__webpack_require__.d(__webpack_exports__, "NotWrapper", function() { return /* reexport */ NotWrapper; });
__webpack_require__.d(__webpack_exports__, "NotFound", function() { return /* reexport */ container_NotFound; });
__webpack_require__.d(__webpack_exports__, "NotDefined", function() { return /* reexport */ container_NotDefined; });
__webpack_require__.d(__webpack_exports__, "WrapperContainer", function() { return /* reexport */ container_WrapperContainer; });
__webpack_require__.d(__webpack_exports__, "DebugContainer", function() { return /* reexport */ container_DebugContainer; });
__webpack_require__.d(__webpack_exports__, "Relative", function() { return /* reexport */ Relative; });
__webpack_require__.d(__webpack_exports__, "useRelative", function() { return /* reexport */ context_useRelative; });
__webpack_require__.d(__webpack_exports__, "useHistory", function() { return /* reexport */ hooks_useHistory; });
__webpack_require__.d(__webpack_exports__, "getRouteItem", function() { return /* reexport */ factory_getRouteItem; });
__webpack_require__.d(__webpack_exports__, "NavLink", function() { return /* reexport */ Link_NavLink; });
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* reexport */ Link_Link; });

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/defineProperty"
var defineProperty_ = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"
var objectWithoutPropertiesLoose_ = __webpack_require__(4);
var objectWithoutPropertiesLoose_default = /*#__PURE__*/__webpack_require__.n(objectWithoutPropertiesLoose_);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose_default()(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/module/context.tsx
var NONE={basename:"",current:{uri:"",path:"",views:[]},rule:{path:""}};var Relative=/*#__PURE__*/external_react_default.a.createContext(NONE);var context_useRelative=function useRelative(){return external_react_default.a.useContext(Relative);};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/module/Render.tsx
var Render=/*#__PURE__*/external_react_default.a.memo(function(_ref){var mode=_ref.mode,rule=_ref.rule,current=_ref.current,define=_ref.define,items=_ref.items;var Container=define.container,Component=define.component,notFound=define.notFound,redirect=define.redirect;var instance={basename:current.uri,rule:rule,current:current};return mode==='simple'?/*#__PURE__*/Object(jsx_runtime_["jsx"])(Container,{children:/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component,{})}):/*#__PURE__*/Object(jsx_runtime_["jsx"])(Relative.Provider,{value:instance,children:/*#__PURE__*/Object(jsx_runtime_["jsx"])(Container,{children:mode==='recursive'?/*#__PURE__*/Object(jsx_runtime_["jsx"])(Render_RenderSwitch,{value:items,notFound:notFound,redirect:redirect}):/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component,{})})});});var Render_RenderSwitch=function RenderSwitch(_ref2){var value=_ref2.value,notFound=_ref2.notFound,redirect=_ref2.redirect;return/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_router_dom_["Switch"],{children:[value.map(function(it){return/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Route"],_objectSpread2(_objectSpread2({},it.rule),{},{component:function component(){return/*#__PURE__*/Object(jsx_runtime_["jsx"])(Render,_objectSpread2({},it));}}));}),/*#__PURE__*/Object(jsx_runtime_["jsx"])(Render_DefaultRoute,{notFound:notFound,redirect:redirect})]});};//Prevent reload main compoment cause by useLocation
var Render_DefaultRoute=function DefaultRoute(_ref3){var NotFound=_ref3.notFound,redirect=_ref3.redirect;var _useLocation=Object(external_react_router_dom_["useLocation"])(),pathname=_useLocation.pathname;var isRedirect=!pathname.startsWith(redirect);return/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_router_dom_["Route"],{children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])(NotFound,{}),isRedirect&&/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Redirect"],{to:redirect})]});};
// CONCATENATED MODULE: ./src/module/container.tsx
var NotContainer=function NotContainer(_ref){var children=_ref.children;return children;};var NotWrapper=function NotWrapper(_ref2){var children=_ref2.children;return children;};var container_NotFound=function NotFound(){var _useLocation=Object(external_react_router_dom_["useLocation"])(),pathname=_useLocation.pathname;return/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"not-found",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1",{children:"Rule Not Found"}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3",{children:["The ",/*#__PURE__*/Object(jsx_runtime_["jsx"])("b",{children:pathname})," not found"]})]});};var container_NotDefined=function NotDefined(){var _useLocation2=Object(external_react_router_dom_["useLocation"])(),pathname=_useLocation2.pathname;return/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"not-defined",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1",{children:"Component Not Defined"}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3",{children:["The ",/*#__PURE__*/Object(jsx_runtime_["jsx"])("b",{children:pathname})," does not defined a component"]})]});};var container_WrapperContainer=function WrapperContainer(_ref3){var children=_ref3.children;var random=Math.random();return/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"p-2 border border-primary",children:[children,/*#__PURE__*/Object(jsx_runtime_["jsxs"])("sub",{children:["Wrapper Container: ",random]})]});};var container_DebugContainer=function DebugContainer(_ref4){var children=_ref4.children;var random=Math.random();var instance=context_useRelative();console.debug('DebugContainer',random,'=>',instance);var current=instance.current,rule=instance.rule;return/*#__PURE__*/Object(jsx_runtime_["jsx"])("div",{className:"m-2",children:/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"card",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("div",{className:"card-header",children:/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul",{className:"nav nav-pills",children:[/*#__PURE__*/Object(jsx_runtime_["jsx"])("li",{className:"nav-item",children:/*#__PURE__*/Object(jsx_runtime_["jsx"])("b",{className:"nav-link disabled",children:current.title||current.path})}),current.views.map(function(it){return/*#__PURE__*/Object(jsx_runtime_["jsx"])("li",{className:"nav-item",children:/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["NavLink"],_objectSpread2(_objectSpread2({to:it.uri},rule),{},{className:"nav-link",children:it.title||it.path}))},it.path);})]})}),/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div",{className:"card-body",children:[children,/*#__PURE__*/Object(jsx_runtime_["jsxs"])("sub",{children:["Debug Container: ",random]})]})]})});};
// CONCATENATED MODULE: ./src/module/assert.tsx
var assertPath=function assertPath(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/";return!name.startsWith('/')?'/'+name:name;};var assertBasename=function assertBasename(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return name.endsWith('/')?name.substring(0,name.length-1):name;};var assertRedirect=function assertRedirect(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return name.endsWith('/')?name.substring(0,name.length-1):name;};var assertName=function assertName(name){var _name,_name2;if((_name=name)===null||_name===void 0?void 0:_name.startsWith('/')){name=name.substring(1);}if((_name2=name)===null||_name2===void 0?void 0:_name2.endsWith('/')){name=name.substring(0,name.length-1);}return name;};var assertJoin=function assertJoin(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++){names[_key]=arguments[_key];}var name='/'+names.map(assertName).filter(function(it){return!!it;}).join('/');//console.log('assertJoin', names, '===>', name);
return name;};var assertKey=function assertKey(){for(var _len2=arguments.length,names=new Array(_len2),_key2=0;_key2<_len2;_key2++){names[_key2]=arguments[_key2];}return names.filter(function(it){return!!it;}).map(function(it){return it.toString();}).find(function(it){return!!it;})||'99';};var assert={path:assertPath,basename:assertBasename,redirect:assertRedirect,name:assertName,join:assertJoin,key:assertKey};/* harmony default export */ var module_assert = (assert);
// CONCATENATED MODULE: ./src/module/factory.tsx
var _excluded=["path","exact","strict","sensitive","component","defaultTo","children","container","notFound","notDefined","relative"];var getRouteConfig=function getRouteConfig(){var items=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var basename=arguments.length>1?arguments[1]:undefined;var wrapper=arguments.length>2?arguments[2]:undefined;return items.map(function(item,ix){return factory_getRouteItem(item,basename,ix+1,wrapper);});};var factory_getRouteItem=function getRouteItem(item,basename){var index=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var wrapper=arguments.length>3?arguments[3]:undefined;var path=item.path,exact=item.exact,strict=item.strict,sensitive=item.sensitive,component=item.component,defaultTo=item.defaultTo,children=item.children,container=item.container,notFound=item.notFound,notDefined=item.notDefined,relative=item.relative,others=_objectWithoutProperties(item,_excluded);var key=module_assert.key(item.id,path,index);var routePath=path=module_assert.path(path);var routeURI=module_assert.join(basename,path);var routeTo=module_assert.join(routeURI,defaultTo);var routeItems=getRouteConfig(children,routeURI,item.wrapper);var mode=routeItems.length>0?'recursive':relative?'relative':'simple';var rule={key:key,path:routeURI,exact:exact,strict:strict,sensitive:sensitive};var define={container:container||wrapper||NotContainer,notFound:notFound||container_NotFound,component:component||notDefined||container_NotDefined,redirect:routeTo};var current=_objectSpread2({uri:routeURI,path:routePath,views:routeItems.map(function(it){return it.current;})},others);return{mode:mode,rule:rule,define:define,current:current,items:routeItems};};
// CONCATENATED MODULE: ./src/module/config.tsx
var config_excluded=["value","children"],_excluded2=["value","children"];var config_ItemRender=function ItemRender(_ref){var value=_ref.value,children=_ref.children,props=_objectWithoutProperties(_ref,config_excluded);var item=_objectSpread2(_objectSpread2({},value),props);var _useRelative=context_useRelative(),basename=_useRelative.basename;var route=factory_getRouteItem(item,basename);//console.log('ItemRender--->', route);
return/*#__PURE__*/Object(jsx_runtime_["jsx"])(Render,_objectSpread2({},route));};var config_ConfigRender=function ConfigRender(_ref2){var value=_ref2.value,children=_ref2.children,props=_objectWithoutProperties(_ref2,_excluded2);var item=_objectSpread2({children:value},props);var _useRelative2=context_useRelative(),basename=_useRelative2.basename;var route=factory_getRouteItem(item,basename);//console.log('ConfigRender--->', route);
return/*#__PURE__*/Object(jsx_runtime_["jsx"])(Render,_objectSpread2({},route));};
// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/module/hooks.tsx
var hooks_useHistory=function useHistory(){var _useRelative=context_useRelative(),basename=_useRelative.basename;var delegate=Object(external_react_router_["useHistory"])();var delegatePush=function delegatePush(path){path=basename+module_assert.path(path);delegate.push(path);};var delegateReplace=function delegateReplace(path){path=basename+module_assert.path(path);delegate.replace(path);};var delegateGoBack=function delegateGoBack(){delegate.goBack();};var delegateOnClick=function delegateOnClick(_ref){var target=_ref.target;var value=target.value,href=target.href;var path=value||href;if(path){delegatePush(path);}};return{length:delegate.length,basename:basename,push:delegatePush,replace:delegateReplace,onClick:delegateOnClick,go:delegate.go,goBack:delegateGoBack,goForward:delegate.goForward};};
// CONCATENATED MODULE: ./src/module/Link.tsx
var Link_excluded=["to"],Link_excluded2=["to"];var Link_NavLink=function NavLink(_ref){var to=_ref.to,props=_objectWithoutProperties(_ref,Link_excluded);var _useRelative=context_useRelative(),basename=_useRelative.basename;var relativeTo=module_assert.join(basename,to);return/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["NavLink"],_objectSpread2({to:relativeTo},props));};var Link_Link=function Link(_ref2){var to=_ref2.to,props=_objectWithoutProperties(_ref2,Link_excluded2);var _useRelative2=context_useRelative(),basename=_useRelative2.basename;var relativeTo=module_assert.join(basename,to);return/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_router_dom_["Link"],_objectSpread2({to:relativeTo},props));};
// CONCATENATED MODULE: ./src/module.tsx


/***/ })
/******/ ])});;
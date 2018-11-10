"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _commonUtils=require("./common-utils");function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))}ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}// Tiny Enum to bypass the circular dependency shithole
var Enum=function Enum(typeNames){return _objectSpread({match:_commonUtils.matchPattern,isConstructor:(0,_commonUtils.isConstructor)(typeNames)},(0,_commonUtils.listToObject)(function(name){return name},function(name){return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return{name:name,args:args}}},typeNames))};var _default=Enum;exports.default=_default;
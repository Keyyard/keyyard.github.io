var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var i={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=s(t,a(r)))}return t}function a(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)i.call(t,r)&&t[r]&&(e=s(e,r));return e}function s(t,e){return e?t?t+" "+e:t+e:t}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(f);var p=f.exports;export{p as a,l as c,u as g};

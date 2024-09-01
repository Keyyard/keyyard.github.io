import{r,R as T}from"./react-DbyNheCD.js";import"./react-dom-Zyrof2Bc.js";import{R as w}from"./react-router-CzqSCzGF.js";import{c as p}from"./@remix-run-BdN856KK.js";/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F="6";try{window.__reactRouterVersion=F}catch{}const U="startTransition",l=T[U];function _(t){let{basename:S,children:f,future:o,window:h}=t,s=r.useRef();s.current==null&&(s.current=p({window:h,v5Compat:!0}));let e=s.current,[n,i]=r.useState({action:e.action,location:e.location}),{v7_startTransition:c}=o||{},a=r.useCallback(u=>{c&&l?l(()=>i(u)):i(u)},[i,c]);return r.useLayoutEffect(()=>e.listen(a),[e,a]),r.createElement(w,{basename:S,children:f,location:n.location,navigationType:n.action,navigator:e,future:o})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var R;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(R||(R={}));export{_ as B};

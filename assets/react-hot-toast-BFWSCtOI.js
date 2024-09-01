import{r as s}from"./react-DbyNheCD.js";import{h as m,m as O,u as P,j as f}from"./goober-vt3s6TGe.js";var C=t=>typeof t=="function",$=(t,e)=>C(t)?t(e):t,N=(()=>{let t=0;return()=>(++t).toString()})(),A=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),T=20,x=new Map,M=1e3,D=t=>{if(x.has(t))return;let e=setTimeout(()=>{x.delete(t),y({type:4,toastId:t})},M);x.set(t,e)},j=t=>{let e=x.get(t);e&&clearTimeout(e)},z=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,T)};case 1:return e.toast.id&&j(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?z(t,{type:1,toast:a}):z(t,{type:0,toast:a});case 3:let{toastId:o}=e;return o?D(o):t.toasts.forEach(r=>{D(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},w=[],E={toasts:[],pausedAt:void 0},y=t=>{E=z(E,t),w.forEach(e=>{e(E)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},H=(t={})=>{let[e,a]=s.useState(E);s.useEffect(()=>(w.push(a),()=>{let i=w.indexOf(a);i>-1&&w.splice(i,1)}),[e]);let o=e.toasts.map(i=>{var r,l;return{...t,...t[i.type],...i,duration:i.duration||((r=t[i.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||S[i.type],style:{...t.style,...(l=t[i.type])==null?void 0:l.style,...i.style}}});return{...e,toasts:o}},U=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||N()}),g=t=>(e,a)=>{let o=U(e,t,a);return y({type:2,toast:o}),o.id},c=(t,e)=>g("blank")(t,e);c.error=g("error");c.success=g("success");c.loading=g("loading");c.custom=g("custom");c.dismiss=t=>{y({type:3,toastId:t})};c.remove=t=>y({type:4,toastId:t});c.promise=(t,e,a)=>{let o=c.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(i=>(c.success($(e.success,i),{id:o,...a,...a==null?void 0:a.success}),i)).catch(i=>{c.error($(e.error,i),{id:o,...a,...a==null?void 0:a.error})}),t};var _=(t,e)=>{y({type:1,toast:{id:t,height:e}})},F=()=>{y({type:5,time:Date.now()})},L=t=>{let{toasts:e,pausedAt:a}=H(t);s.useEffect(()=>{if(a)return;let r=Date.now(),l=e.map(n=>{if(n.duration===1/0)return;let p=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(p<0){n.visible&&c.dismiss(n.id);return}return setTimeout(()=>c.dismiss(n.id),p)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[e,a]);let o=s.useCallback(()=>{a&&y({type:6,time:Date.now()})},[a]),i=s.useCallback((r,l)=>{let{reverseOrder:n=!1,gutter:p=8,defaultPosition:d}=l||{},h=e.filter(u=>(u.position||d)===(r.position||d)&&u.height),k=h.findIndex(u=>u.id===r.id),b=h.filter((u,I)=>I<k&&u.visible).length;return h.filter(u=>u.visible).slice(...n?[b+1]:[0,b]).reduce((u,I)=>u+(I.height||0)+p,0)},[e]);return{toasts:e,handlers:{updateHeight:_,startPause:F,endPause:o,calculateOffset:i}}},R=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=m`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=m`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,V=m`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=m`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=f("div")`
  position: absolute;
`,q=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=m`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tt=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:t})=>{let{icon:e,type:a,iconTheme:o}=t;return e!==void 0?typeof e=="string"?s.createElement(tt,null,e):e:a==="blank"?null:s.createElement(q,null,s.createElement(Q,{...o}),a!=="loading"&&s.createElement(Z,null,a==="error"?s.createElement(G,{...o}):s.createElement(X,{...o})))},at=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,rt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ot="0%{opacity:0;} 100%{opacity:1;}",it="0%{opacity:1;} 100%{opacity:0;}",st=f("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,nt=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,lt=(t,e)=>{let a=t.includes("top")?1:-1,[o,i]=A()?[ot,it]:[at(a),rt(a)];return{animation:e?`${m(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${m(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},dt=s.memo(({toast:t,position:e,style:a,children:o})=>{let i=t.height?lt(t.position||e||"top-center",t.visible):{opacity:0},r=s.createElement(et,{toast:t}),l=s.createElement(nt,{...t.ariaProps},$(t.message,t));return s.createElement(st,{className:t.className,style:{...i,...a,...t.style}},typeof o=="function"?o({icon:r,message:l}):s.createElement(s.Fragment,null,r,l))});O(s.createElement);var ct=({id:t,className:e,style:a,onHeightUpdate:o,children:i})=>{let r=s.useCallback(l=>{if(l){let n=()=>{let p=l.getBoundingClientRect().height;o(t,p)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return s.createElement("div",{ref:r,className:e,style:a},i)},pt=(t,e)=>{let a=t.includes("top"),o=a?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...o,...i}},ut=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,v=16,yt=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:o,children:i,containerStyle:r,containerClassName:l})=>{let{toasts:n,handlers:p}=L(a);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:v,left:v,right:v,bottom:v,pointerEvents:"none",...r},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},n.map(d=>{let h=d.position||e,k=p.calculateOffset(d,{reverseOrder:t,gutter:o,defaultPosition:e}),b=pt(h,k);return s.createElement(ct,{id:d.id,key:d.id,onHeightUpdate:p.updateHeight,className:d.visible?ut:"",style:b},d.type==="custom"?$(d.message,d):i?i(d):s.createElement(dt,{toast:d,position:h}))}))},ht=c;export{yt as I,ht as _,c as n};

import{r as P,j as D}from"./react-DbyNheCD.js";import{L as ae,T as Ye,R as Ke,U as Je,a as Qe,O as Ze,P as et,S as Ee,b as ce,N as tt,A as rt,B as nt,M as ot,C as it,W as st,c as at,d as ct,e as lt,V as ft,f as Y,g as ut,h as dt,i as pt}from"./three-DouXCBQv.js";import{c as Se}from"./debounce-ByVpbp5w.js";import{F as vt,u as ht}from"./its-fine-DGKsi9_d.js";import{R as mt,c as G}from"./react-reconciler-Bf6JOwEi.js";import{s as Pe}from"./scheduler-CzFDRTuY.js";import"./react-dom-Zyrof2Bc.js";import"./maath-CHXMaFB-.js";import{G as _e,D as gt,M as le}from"./three-stdlib-DD6Odp8E.js";import{c as wt}from"./zustand-C0kZ24wx.js";import{s as yt,p as _t,c as bt}from"./suspend-react-BKIKQNXN.js";const be={},Ct=e=>void Object.assign(be,e);function Et(e,t){function o(r,{args:n=[],attach:a,...v},h){let g=`${r[0].toUpperCase()}${r.slice(1)}`,p;if(r==="primitive"){if(v.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const i=v.object;p=N(i,{type:r,root:h,attach:a,primitive:!0})}else{const i=be[g];if(!i)throw new Error(`R3F: ${g} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(n))throw new Error("R3F: The args prop must be an array!");p=N(new i(...n),{type:r,root:h,attach:a,memoizedProps:{args:n}})}return p.__r3f.attach===void 0&&(p instanceof nt?p.__r3f.attach="geometry":p instanceof ot&&(p.__r3f.attach="material")),g!=="inject"&&de(p,v),p}function s(r,n){let a=!1;if(n){var v,h;(v=n.__r3f)!=null&&v.attach?ue(r,n,n.__r3f.attach):n.isObject3D&&r.isObject3D&&(r.add(n),a=!0),a||(h=r.__r3f)==null||h.objects.push(n),n.__r3f||N(n,{}),n.__r3f.parent=r,ye(n),q(n)}}function c(r,n,a){let v=!1;if(n){var h,g;if((h=n.__r3f)!=null&&h.attach)ue(r,n,n.__r3f.attach);else if(n.isObject3D&&r.isObject3D){n.parent=r,n.dispatchEvent({type:"added"}),r.dispatchEvent({type:"childadded",child:n});const p=r.children.filter(u=>u!==n),i=p.indexOf(a);r.children=[...p.slice(0,i),n,...p.slice(i)],v=!0}v||(g=r.__r3f)==null||g.objects.push(n),n.__r3f||N(n,{}),n.__r3f.parent=r,ye(n),q(n)}}function d(r,n,a=!1){r&&[...r].forEach(v=>_(n,v,a))}function _(r,n,a){if(n){var v,h,g;if(n.__r3f&&(n.__r3f.parent=null),(v=r.__r3f)!=null&&v.objects&&(r.__r3f.objects=r.__r3f.objects.filter(b=>b!==n)),(h=n.__r3f)!=null&&h.attach)je(r,n,n.__r3f.attach);else if(n.isObject3D&&r.isObject3D){var p;r.remove(n),(p=n.__r3f)!=null&&p.root&&At(oe(n),n)}const u=(g=n.__r3f)==null?void 0:g.primitive,w=!u&&(a===void 0?n.dispose!==null:a);if(!u){var i;d((i=n.__r3f)==null?void 0:i.objects,n,w),d(n.children,n,w)}if(delete n.__r3f,w&&n.dispose&&n.type!=="Scene"){const b=()=>{try{n.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?Pe.unstable_scheduleCallback(Pe.unstable_IdlePriority,b):b()}q(r)}}function l(r,n,a,v){var h;const g=(h=r.__r3f)==null?void 0:h.parent;if(!g)return;const p=o(n,a,r.__r3f.root);if(r.children){for(const i of r.children)i.__r3f&&s(p,i);r.children=r.children.filter(i=>!i.__r3f)}r.__r3f.objects.forEach(i=>s(p,i)),r.__r3f.objects=[],r.__r3f.autoRemovedBeforeAppend||_(g,r),p.parent&&(p.__r3f.autoRemovedBeforeAppend=!0),s(g,p),p.raycast&&p.__r3f.eventCount&&oe(p).getState().internal.interaction.push(p),[v,v.alternate].forEach(i=>{i!==null&&(i.stateNode=p,i.ref&&(typeof i.ref=="function"?i.ref(p):i.ref.current=p))})}const f=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:mt({createInstance:o,removeChild:_,appendChild:s,appendInitialChild:s,insertBefore:c,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(r,n)=>{if(!n)return;const a=r.getState().scene;a.__r3f&&(a.__r3f.root=r,s(a,n))},removeChildFromContainer:(r,n)=>{n&&_(r.getState().scene,n)},insertInContainerBefore:(r,n,a)=>{if(!n||!a)return;const v=r.getState().scene;v.__r3f&&c(v,n,a)},getRootHostContext:()=>null,getChildHostContext:r=>r,finalizeInitialChildren(r){var n;return!!((n=r==null?void 0:r.__r3f)!=null?n:{}).handlers},prepareUpdate(r,n,a,v){var h;if(((h=r==null?void 0:r.__r3f)!=null?h:{}).primitive&&v.object&&v.object!==r)return[!0];{const{args:p=[],children:i,...u}=v,{args:w=[],children:b,...E}=a;if(!Array.isArray(p))throw new Error("R3F: the args prop must be an array!");if(p.some((O,j)=>O!==w[j]))return[!0];const C=He(r,u,E,!0);return C.changes.length?[!1,C]:null}},commitUpdate(r,[n,a],v,h,g,p){n?l(r,v,g,p):de(r,a)},commitMount(r,n,a,v){var h;const g=(h=r.__r3f)!=null?h:{};r.raycast&&g.handlers&&g.eventCount&&oe(r).getState().internal.interaction.push(r)},getPublicInstance:r=>r,prepareForCommit:()=>null,preparePortalMount:r=>N(r.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(r){var n;const{attach:a,parent:v}=(n=r.__r3f)!=null?n:{};a&&v&&je(v,r,a),r.isObject3D&&(r.visible=!1),q(r)},unhideInstance(r,n){var a;const{attach:v,parent:h}=(a=r.__r3f)!=null?a:{};v&&h&&ue(h,r,v),(r.isObject3D&&n.visible==null||n.visible)&&(r.visible=!0),q(r)},createTextInstance:f,hideTextInstance:f,unhideTextInstance:f,getCurrentEventPriority:()=>t?t():G.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&M.fun(performance.now)?performance.now:M.fun(Date.now)?Date.now:()=>0,scheduleTimeout:M.fun(setTimeout)?setTimeout:void 0,cancelTimeout:M.fun(clearTimeout)?clearTimeout:void 0}),applyProps:de}}var Me,Oe;const fe=e=>"colorSpace"in e||"outputColorSpace"in e,ke=()=>{var e;return(e=be.ColorManagement)!=null?e:null},De=e=>e&&e.isOrthographicCamera,St=e=>e&&e.hasOwnProperty("current"),K=typeof window<"u"&&((Me=window.document)!=null&&Me.createElement||((Oe=window.navigator)==null?void 0:Oe.product)==="ReactNative")?P.useLayoutEffect:P.useEffect;function ze(e){const t=P.useRef(e);return K(()=>void(t.current=e),[e]),t}function Pt({set:e}){return K(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}class Fe extends P.Component{constructor(...t){super(...t),this.state={error:!1}}componentDidCatch(t){this.props.set(t)}render(){return this.state.error?null:this.props.children}}Fe.getDerivedStateFromError=()=>({error:!0});const Be="__default",xe=new Map,Mt=e=>e&&!!e.memoized&&!!e.changes;function Ie(e){var t;const o=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],o),e[1]):e}const X=e=>{var t;return(t=e.__r3f)==null?void 0:t.root.getState()};function oe(e){let t=e.__r3f.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}const M={obj:e=>e===Object(e)&&!M.arr(e)&&typeof e!="function",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",boo:e=>typeof e=="boolean",und:e=>e===void 0,arr:e=>Array.isArray(e),equ(e,t,{arrays:o="shallow",objects:s="reference",strict:c=!0}={}){if(typeof e!=typeof t||!!e!=!!t)return!1;if(M.str(e)||M.num(e)||M.boo(e))return e===t;const d=M.obj(e);if(d&&s==="reference")return e===t;const _=M.arr(e);if(_&&o==="reference")return e===t;if((_||d)&&e===t)return!0;let l;for(l in e)if(!(l in t))return!1;if(d&&o==="shallow"&&s==="shallow"){for(l in c?t:e)if(!M.equ(e[l],t[l],{strict:c,objects:"reference"}))return!1}else for(l in c?t:e)if(e[l]!==t[l])return!1;if(M.und(l)){if(_&&e.length===0&&t.length===0||d&&Object.keys(e).length===0&&Object.keys(t).length===0)return!0;if(e!==t)return!1}return!0}};function Ot(e){const t={nodes:{},materials:{}};return e&&e.traverse(o=>{o.name&&(t.nodes[o.name]=o),o.material&&!t.materials[o.material.name]&&(t.materials[o.material.name]=o.material)}),t}function xt(e){e.dispose&&e.type!=="Scene"&&e.dispose();for(const t in e)t.dispose==null||t.dispose(),delete e[t]}function N(e,t){const o=e;return o.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...t},e}function we(e,t){let o=e;if(t.includes("-")){const s=t.split("-"),c=s.pop();return o=s.reduce((d,_)=>d[_],e),{target:o,key:c}}else return{target:o,key:t}}const Re=/-\d+$/;function ue(e,t,o){if(M.str(o)){if(Re.test(o)){const d=o.replace(Re,""),{target:_,key:l}=we(e,d);Array.isArray(_[l])||(_[l]=[])}const{target:s,key:c}=we(e,o);t.__r3f.previousAttach=s[c],s[c]=t}else t.__r3f.previousAttach=o(e,t)}function je(e,t,o){var s,c;if(M.str(o)){const{target:d,key:_}=we(e,o),l=t.__r3f.previousAttach;l===void 0?delete d[_]:d[_]=l}else(s=t.__r3f)==null||s.previousAttach==null||s.previousAttach(e,t);(c=t.__r3f)==null||delete c.previousAttach}function He(e,{children:t,key:o,ref:s,...c},{children:d,key:_,ref:l,...f}={},m=!1){const r=e.__r3f,n=Object.entries(c),a=[];if(m){const h=Object.keys(f);for(let g=0;g<h.length;g++)c.hasOwnProperty(h[g])||n.unshift([h[g],Be+"remove"])}n.forEach(([h,g])=>{var p;if((p=e.__r3f)!=null&&p.primitive&&h==="object"||M.equ(g,f[h]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(h))return a.push([h,g,!0,[]]);let i=[];h.includes("-")&&(i=h.split("-")),a.push([h,g,!1,i]);for(const u in c){const w=c[u];u.startsWith(`${h}-`)&&a.push([u,w,!1,u.split("-")])}});const v={...c};return r!=null&&r.memoizedProps&&r!=null&&r.memoizedProps.args&&(v.args=r.memoizedProps.args),r!=null&&r.memoizedProps&&r!=null&&r.memoizedProps.attach&&(v.attach=r.memoizedProps.attach),{memoized:v,changes:a}}const Rt=typeof process<"u"&&!1;function de(e,t){var o;const s=e.__r3f,c=s==null?void 0:s.root,d=c==null||c.getState==null?void 0:c.getState(),{memoized:_,changes:l}=Mt(t)?t:He(e,t),f=s==null?void 0:s.eventCount;e.__r3f&&(e.__r3f.memoizedProps=_);for(let r=0;r<l.length;r++){let[n,a,v,h]=l[r];if(fe(e)){const u="srgb",w="srgb-linear";n==="encoding"?(n="colorSpace",a=a===3001?u:w):n==="outputEncoding"&&(n="outputColorSpace",a=a===3001?u:w)}let g=e,p=g[n];if(h.length&&(p=h.reduce((i,u)=>i[u],e),!(p&&p.set))){const[i,...u]=h.reverse();g=u.reverse().reduce((w,b)=>w[b],e),n=i}if(a===Be+"remove")if(g.constructor){let i=xe.get(g.constructor);i||(i=new g.constructor,xe.set(g.constructor,i)),a=i[n]}else a=0;if(v&&s)a?s.handlers[n]=a:delete s.handlers[n],s.eventCount=Object.keys(s.handlers).length;else if(p&&p.set&&(p.copy||p instanceof ae)){if(Array.isArray(a))p.fromArray?p.fromArray(a):p.set(...a);else if(p.copy&&a&&a.constructor&&(Rt?p.constructor.name===a.constructor.name:p.constructor===a.constructor))p.copy(a);else if(a!==void 0){const i=p instanceof it;!i&&p.setScalar?p.setScalar(a):p instanceof ae&&a instanceof ae?p.mask=a.mask:p.set(a),!ke()&&d&&!d.linear&&i&&p.convertSRGBToLinear()}}else if(g[n]=a,g[n]instanceof Ye&&g[n].format===Ke&&g[n].type===Je&&d){const i=g[n];fe(i)&&fe(d.gl)?i.colorSpace=d.gl.outputColorSpace:i.encoding=d.gl.outputEncoding}q(e)}if(s&&s.parent&&e.raycast&&f!==s.eventCount){const r=oe(e).getState().internal,n=r.interaction.indexOf(e);n>-1&&r.interaction.splice(n,1),s.eventCount&&r.interaction.push(e)}return!(l.length===1&&l[0][0]==="onUpdate")&&l.length&&(o=e.__r3f)!=null&&o.parent&&ye(e),e}function q(e){var t,o;const s=(t=e.__r3f)==null||(o=t.root)==null||o.getState==null?void 0:o.getState();s&&s.internal.frames===0&&s.invalidate()}function ye(e){e.onUpdate==null||e.onUpdate(e)}function jt(e,t){e.manual||(De(e)?(e.left=t.width/-2,e.right=t.width/2,e.top=t.height/2,e.bottom=t.height/-2):e.aspect=t.width/t.height,e.updateProjectionMatrix(),e.updateMatrixWorld())}function te(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function Tt(){var e;const t=typeof self<"u"&&self||typeof window<"u"&&window;if(!t)return G.DefaultEventPriority;switch((e=t.event)==null?void 0:e.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return G.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return G.ContinuousEventPriority;default:return G.DefaultEventPriority}}function Ne(e,t,o,s){const c=o.get(t);c&&(o.delete(t),o.size===0&&(e.delete(s),c.target.releasePointerCapture(s)))}function At(e,t){const{internal:o}=e.getState();o.interaction=o.interaction.filter(s=>s!==t),o.initialHits=o.initialHits.filter(s=>s!==t),o.hovered.forEach((s,c)=>{(s.eventObject===t||s.object===t)&&o.hovered.delete(c)}),o.capturedMap.forEach((s,c)=>{Ne(o.capturedMap,t,s,c)})}function Lt(e){function t(f){const{internal:m}=e.getState(),r=f.offsetX-m.initialClick[0],n=f.offsetY-m.initialClick[1];return Math.round(Math.sqrt(r*r+n*n))}function o(f){return f.filter(m=>["Move","Over","Enter","Out","Leave"].some(r=>{var n;return(n=m.__r3f)==null?void 0:n.handlers["onPointer"+r]}))}function s(f,m){const r=e.getState(),n=new Set,a=[],v=m?m(r.internal.interaction):r.internal.interaction;for(let i=0;i<v.length;i++){const u=X(v[i]);u&&(u.raycaster.camera=void 0)}r.previousRoot||r.events.compute==null||r.events.compute(f,r);function h(i){const u=X(i);if(!u||!u.events.enabled||u.raycaster.camera===null)return[];if(u.raycaster.camera===void 0){var w;u.events.compute==null||u.events.compute(f,u,(w=u.previousRoot)==null?void 0:w.getState()),u.raycaster.camera===void 0&&(u.raycaster.camera=null)}return u.raycaster.camera?u.raycaster.intersectObject(i,!0):[]}let g=v.flatMap(h).sort((i,u)=>{const w=X(i.object),b=X(u.object);return!w||!b?i.distance-u.distance:b.events.priority-w.events.priority||i.distance-u.distance}).filter(i=>{const u=te(i);return n.has(u)?!1:(n.add(u),!0)});r.events.filter&&(g=r.events.filter(g,r));for(const i of g){let u=i.object;for(;u;){var p;(p=u.__r3f)!=null&&p.eventCount&&a.push({...i,eventObject:u}),u=u.parent}}if("pointerId"in f&&r.internal.capturedMap.has(f.pointerId))for(let i of r.internal.capturedMap.get(f.pointerId).values())n.has(te(i.intersection))||a.push(i.intersection);return a}function c(f,m,r,n){const a=e.getState();if(f.length){const v={stopped:!1};for(const h of f){const g=X(h.object)||a,{raycaster:p,pointer:i,camera:u,internal:w}=g,b=new Y(i.x,i.y,0).unproject(u),E=S=>{var y,R;return(y=(R=w.capturedMap.get(S))==null?void 0:R.has(h.eventObject))!=null?y:!1},C=S=>{const y={intersection:h,target:m.target};w.capturedMap.has(S)?w.capturedMap.get(S).set(h.eventObject,y):w.capturedMap.set(S,new Map([[h.eventObject,y]])),m.target.setPointerCapture(S)},O=S=>{const y=w.capturedMap.get(S);y&&Ne(w.capturedMap,h.eventObject,y,S)};let j={};for(let S in m){let y=m[S];typeof y!="function"&&(j[S]=y)}let x={...h,...j,pointer:i,intersections:f,stopped:v.stopped,delta:r,unprojectedPoint:b,ray:p.ray,camera:u,stopPropagation(){const S="pointerId"in m&&w.capturedMap.get(m.pointerId);if((!S||S.has(h.eventObject))&&(x.stopped=v.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(y=>y.eventObject===h.eventObject))){const y=f.slice(0,f.indexOf(h));d([...y,h])}},target:{hasPointerCapture:E,setPointerCapture:C,releasePointerCapture:O},currentTarget:{hasPointerCapture:E,setPointerCapture:C,releasePointerCapture:O},nativeEvent:m};if(n(x),v.stopped===!0)break}}return f}function d(f){const{internal:m}=e.getState();for(const r of m.hovered.values())if(!f.length||!f.find(n=>n.object===r.object&&n.index===r.index&&n.instanceId===r.instanceId)){const a=r.eventObject.__r3f,v=a==null?void 0:a.handlers;if(m.hovered.delete(te(r)),a!=null&&a.eventCount){const h={...r,intersections:f};v.onPointerOut==null||v.onPointerOut(h),v.onPointerLeave==null||v.onPointerLeave(h)}}}function _(f,m){for(let r=0;r<m.length;r++){const n=m[r].__r3f;n==null||n.handlers.onPointerMissed==null||n.handlers.onPointerMissed(f)}}function l(f){switch(f){case"onPointerLeave":case"onPointerCancel":return()=>d([]);case"onLostPointerCapture":return m=>{const{internal:r}=e.getState();"pointerId"in m&&r.capturedMap.has(m.pointerId)&&requestAnimationFrame(()=>{r.capturedMap.has(m.pointerId)&&(r.capturedMap.delete(m.pointerId),d([]))})}}return function(r){const{onPointerMissed:n,internal:a}=e.getState();a.lastEvent.current=r;const v=f==="onPointerMove",h=f==="onClick"||f==="onContextMenu"||f==="onDoubleClick",p=s(r,v?o:void 0),i=h?t(r):0;f==="onPointerDown"&&(a.initialClick=[r.offsetX,r.offsetY],a.initialHits=p.map(w=>w.eventObject)),h&&!p.length&&i<=2&&(_(r,a.interaction),n&&n(r)),v&&d(p);function u(w){const b=w.eventObject,E=b.__r3f,C=E==null?void 0:E.handlers;if(E!=null&&E.eventCount)if(v){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const O=te(w),j=a.hovered.get(O);j?j.stopped&&w.stopPropagation():(a.hovered.set(O,w),C.onPointerOver==null||C.onPointerOver(w),C.onPointerEnter==null||C.onPointerEnter(w))}C.onPointerMove==null||C.onPointerMove(w)}else{const O=C[f];O?(!h||a.initialHits.includes(b))&&(_(r,a.interaction.filter(j=>!a.initialHits.includes(j))),O(w)):h&&a.initialHits.includes(b)&&_(r,a.interaction.filter(j=>!a.initialHits.includes(j)))}}c(p,r,i,u)}}return{handlePointer:l}}const qe=e=>!!(e!=null&&e.render),Ge=P.createContext(null),kt=(e,t)=>{const o=wt((l,f)=>{const m=new Y,r=new Y,n=new Y;function a(i=f().camera,u=r,w=f().size){const{width:b,height:E,top:C,left:O}=w,j=b/E;u instanceof Y?n.copy(u):n.set(...u);const x=i.getWorldPosition(m).distanceTo(n);if(De(i))return{width:b/i.zoom,height:E/i.zoom,top:C,left:O,factor:1,distance:x,aspect:j};{const S=i.fov*Math.PI/180,y=2*Math.tan(S/2)*x,R=y*(b/E);return{width:R,height:y,top:C,left:O,factor:b/R,distance:x,aspect:j}}}let v;const h=i=>l(u=>({performance:{...u.performance,current:i}})),g=new ut;return{set:l,get:f,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(i=1)=>e(f(),i),advance:(i,u)=>t(i,u,f()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new dt,pointer:g,mouse:g,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const i=f();v&&clearTimeout(v),i.performance.current!==i.performance.min&&h(i.performance.min),v=setTimeout(()=>h(f().performance.max),i.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:a},setEvents:i=>l(u=>({...u,events:{...u.events,...i}})),setSize:(i,u,w,b,E)=>{const C=f().camera,O={width:i,height:u,top:b||0,left:E||0,updateStyle:w};l(j=>({size:O,viewport:{...j.viewport,...a(C,r,O)}}))},setDpr:i=>l(u=>{const w=Ie(i);return{viewport:{...u.viewport,dpr:w,initialDpr:u.viewport.initialDpr||w}}}),setFrameloop:(i="always")=>{const u=f().clock;u.stop(),u.elapsedTime=0,i!=="never"&&(u.start(),u.elapsedTime=0),l(()=>({frameloop:i}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:P.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(i,u,w)=>{const b=f().internal;return b.priority=b.priority+(u>0?1:0),b.subscribers.push({ref:i,priority:u,store:w}),b.subscribers=b.subscribers.sort((E,C)=>E.priority-C.priority),()=>{const E=f().internal;E!=null&&E.subscribers&&(E.priority=E.priority-(u>0?1:0),E.subscribers=E.subscribers.filter(C=>C.ref!==i))}}}}}),s=o.getState();let c=s.size,d=s.viewport.dpr,_=s.camera;return o.subscribe(()=>{const{camera:l,size:f,viewport:m,gl:r,set:n}=o.getState();if(f.width!==c.width||f.height!==c.height||m.dpr!==d){var a;c=f,d=m.dpr,jt(l,f),r.setPixelRatio(m.dpr);const v=(a=f.updateStyle)!=null?a:typeof HTMLCanvasElement<"u"&&r.domElement instanceof HTMLCanvasElement;r.setSize(f.width,f.height,v)}l!==_&&(_=l,n(v=>({viewport:{...v.viewport,...v.viewport.getCurrentViewport(l)}})))}),o.subscribe(l=>e(l)),o};let re,Dt=new Set,zt=new Set,Ft=new Set;function pe(e,t){if(e.size)for(const{callback:o}of e.values())o(t)}function $(e,t){switch(e){case"before":return pe(Dt,t);case"after":return pe(zt,t);case"tail":return pe(Ft,t)}}let ve,he;function me(e,t,o){let s=t.clock.getDelta();for(t.frameloop==="never"&&typeof e=="number"&&(s=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),ve=t.internal.subscribers,re=0;re<ve.length;re++)he=ve[re],he.ref.current(he.store.getState(),s,o);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}function Bt(e){let t=!1,o=!1,s,c,d;function _(m){c=requestAnimationFrame(_),t=!0,s=0,$("before",m),o=!0;for(const n of e.values()){var r;d=n.store.getState(),d.internal.active&&(d.frameloop==="always"||d.internal.frames>0)&&!((r=d.gl.xr)!=null&&r.isPresenting)&&(s+=me(m,d))}if(o=!1,$("after",m),s===0)return $("tail",m),t=!1,cancelAnimationFrame(c)}function l(m,r=1){var n;if(!m)return e.forEach(a=>l(a.store.getState(),r));(n=m.gl.xr)!=null&&n.isPresenting||!m.internal.active||m.frameloop==="never"||(r>1?m.internal.frames=Math.min(60,m.internal.frames+r):o?m.internal.frames=2:m.internal.frames=1,t||(t=!0,requestAnimationFrame(_)))}function f(m,r=!0,n,a){if(r&&$("before",m),n)me(m,n,a);else for(const v of e.values())me(m,v.store.getState());r&&$("after",m)}return{loop:_,invalidate:l,advance:f}}function It(){const e=P.useContext(Ge);if(!e)throw new Error("R3F: Hooks can only be used within the Canvas component!");return e}function cr(e,t=0){const o=It(),s=o.getState().internal.subscribe,c=ze(e);return K(()=>s(c,t,o),[t,s,o]),null}const Te=new WeakMap;function Ue(e,t){return function(o,...s){let c=Te.get(o);return c||(c=new o,Te.set(o,c)),e&&e(c),Promise.all(s.map(d=>new Promise((_,l)=>c.load(d,f=>{f.scene&&Object.assign(f,Ot(f.scene)),_(f)},t,f=>l(new Error(`Could not load ${d}: ${f==null?void 0:f.message}`))))))}}function J(e,t,o,s){const c=Array.isArray(t)?t:[t],d=yt(Ue(o,s),[e,...c],{equal:M.equ});return Array.isArray(t)?d:d[0]}J.preload=function(e,t,o){const s=Array.isArray(t)?t:[t];return _t(Ue(o),[e,...s])};J.clear=function(e,t){const o=Array.isArray(t)?t:[t];return bt([e,...o])};const U=new Map,{invalidate:Ae,advance:Le}=Bt(U),{reconciler:ie,applyProps:I}=Et(U,Tt),H={objects:"shallow",strict:!1},Ht=(e,t)=>{const o=typeof e=="function"?e(t):e;return qe(o)?o:new st({powerPreference:"high-performance",canvas:t,antialias:!0,alpha:!0,...e})};function Nt(e,t){const o=typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement;if(t){const{width:s,height:c,top:d,left:_,updateStyle:l=o}=t;return{width:s,height:c,top:d,left:_,updateStyle:l}}else if(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement&&e.parentElement){const{width:s,height:c,top:d,left:_}=e.parentElement.getBoundingClientRect();return{width:s,height:c,top:d,left:_,updateStyle:o}}else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height,top:0,left:0,updateStyle:o};return{width:0,height:0,top:0,left:0}}function qt(e){const t=U.get(e),o=t==null?void 0:t.fiber,s=t==null?void 0:t.store;t&&console.warn("R3F.createRoot should only be called once!");const c=typeof reportError=="function"?reportError:console.error,d=s||kt(Ae,Le),_=o||ie.createContainer(d,G.ConcurrentRoot,null,!1,null,"",c,null);t||U.set(e,{fiber:_,store:d});let l,f=!1,m;return{configure(r={}){let{gl:n,size:a,scene:v,events:h,onCreated:g,shadows:p=!1,linear:i=!1,flat:u=!1,legacy:w=!1,orthographic:b=!1,frameloop:E="always",dpr:C=[1,2],performance:O,raycaster:j,camera:x,onPointerMissed:S}=r,y=d.getState(),R=y.gl;y.gl||y.set({gl:R=Ht(n,e)});let k=y.raycaster;k||y.set({raycaster:k=new Qe});const{params:W,...Q}=j||{};if(M.equ(Q,k,H)||I(k,{...Q}),M.equ(W,k.params,H)||I(k,{params:{...k.params,...W}}),!y.camera||y.camera===m&&!M.equ(m,x,H)){m=x;const L=x instanceof at,T=L?x:b?new Ze(0,0,0,0,.1,1e3):new et(75,0,.1,1e3);L||(T.position.z=5,x&&(I(T,x),("aspect"in x||"left"in x||"right"in x||"bottom"in x||"top"in x)&&(T.manual=!0,T.updateProjectionMatrix())),!y.camera&&!(x!=null&&x.rotation)&&T.lookAt(0,0,0)),y.set({camera:T}),k.camera=T}if(!y.scene){let L;v instanceof Ee?L=v:(L=new Ee,v&&I(L,v)),y.set({scene:N(L)})}if(!y.xr){var V;const L=(A,se)=>{const ee=d.getState();ee.frameloop!=="never"&&Le(A,!0,ee,se)},T=()=>{const A=d.getState();A.gl.xr.enabled=A.gl.xr.isPresenting,A.gl.xr.setAnimationLoop(A.gl.xr.isPresenting?L:null),A.gl.xr.isPresenting||Ae(A)},B={connect(){const A=d.getState().gl;A.xr.addEventListener("sessionstart",T),A.xr.addEventListener("sessionend",T)},disconnect(){const A=d.getState().gl;A.xr.removeEventListener("sessionstart",T),A.xr.removeEventListener("sessionend",T)}};typeof((V=R.xr)==null?void 0:V.addEventListener)=="function"&&B.connect(),y.set({xr:B})}if(R.shadowMap){const L=R.shadowMap.enabled,T=R.shadowMap.type;if(R.shadowMap.enabled=!!p,M.boo(p))R.shadowMap.type=ce;else if(M.str(p)){var Z;const B={basic:ct,percentage:lt,soft:ce,variance:ft};R.shadowMap.type=(Z=B[p])!=null?Z:ce}else M.obj(p)&&Object.assign(R.shadowMap,p);(L!==R.shadowMap.enabled||T!==R.shadowMap.type)&&(R.shadowMap.needsUpdate=!0)}const z=ke();z&&("enabled"in z?z.enabled=!w:"legacyMode"in z&&(z.legacyMode=w)),f||I(R,{outputEncoding:i?3e3:3001,toneMapping:u?tt:rt}),y.legacy!==w&&y.set(()=>({legacy:w})),y.linear!==i&&y.set(()=>({linear:i})),y.flat!==u&&y.set(()=>({flat:u})),n&&!M.fun(n)&&!qe(n)&&!M.equ(n,R,H)&&I(R,n),h&&!y.events.handlers&&y.set({events:h(d)});const F=Nt(e,a);return M.equ(F,y.size,H)||y.setSize(F.width,F.height,F.updateStyle,F.top,F.left),C&&y.viewport.dpr!==Ie(C)&&y.setDpr(C),y.frameloop!==E&&y.setFrameloop(E),y.onPointerMissed||y.set({onPointerMissed:S}),O&&!M.equ(O,y.performance,H)&&y.set(L=>({performance:{...L.performance,...O}})),l=g,f=!0,this},render(r){return f||this.configure(),ie.updateContainer(D.jsx(Gt,{store:d,children:r,onCreated:l,rootElement:e}),_,null,()=>{}),d},unmount(){We(e)}}}function Gt({store:e,children:t,onCreated:o,rootElement:s}){return K(()=>{const c=e.getState();c.set(d=>({internal:{...d.internal,active:!0}})),o&&o(c),e.getState().events.connected||c.events.connect==null||c.events.connect(s)},[]),D.jsx(Ge.Provider,{value:e,children:t})}function We(e,t){const o=U.get(e),s=o==null?void 0:o.fiber;if(s){const c=o==null?void 0:o.store.getState();c&&(c.internal.active=!1),ie.updateContainer(null,s,null,()=>{c&&setTimeout(()=>{try{var d,_,l,f;c.events.disconnect==null||c.events.disconnect(),(d=c.gl)==null||(_=d.renderLists)==null||_.dispose==null||_.dispose(),(l=c.gl)==null||l.forceContextLoss==null||l.forceContextLoss(),(f=c.gl)!=null&&f.xr&&c.xr.disconnect(),xt(c),U.delete(e)}catch{}},500)})}}ie.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:P.version});const ge={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function Ut(e){const{handlePointer:t}=Lt(e);return{priority:1,enabled:!0,compute(o,s,c){s.pointer.set(o.offsetX/s.size.width*2-1,-(o.offsetY/s.size.height)*2+1),s.raycaster.setFromCamera(s.pointer,s.camera)},connected:void 0,handlers:Object.keys(ge).reduce((o,s)=>({...o,[s]:t(s)}),{}),update:()=>{var o;const{events:s,internal:c}=e.getState();(o=c.lastEvent)!=null&&o.current&&s.handlers&&s.handlers.onPointerMove(c.lastEvent.current)},connect:o=>{var s;const{set:c,events:d}=e.getState();d.disconnect==null||d.disconnect(),c(_=>({events:{..._.events,connected:o}})),Object.entries((s=d.handlers)!=null?s:[]).forEach(([_,l])=>{const[f,m]=ge[_];o.addEventListener(f,l,{passive:m})})},disconnect:()=>{const{set:o,events:s}=e.getState();if(s.connected){var c;Object.entries((c=s.handlers)!=null?c:[]).forEach(([d,_])=>{if(s&&s.connected instanceof HTMLElement){const[l]=ge[d];s.connected.removeEventListener(l,_)}}),o(d=>({events:{...d.events,connected:void 0}}))}}}}function Wt({debounce:e,scroll:t,polyfill:o,offsetSize:s}={debounce:0,scroll:!1,offsetSize:!1}){const c=o||typeof window<"u"&&window.ResizeObserver,[d,_]=P.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0});if(!c)return d.width=1280,d.height=800,[()=>{},d,()=>{}];const l=P.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d}),f=e?typeof e=="number"?e:e.scroll:null,m=e?typeof e=="number"?e:e.resize:null,r=P.useRef(!1);P.useEffect(()=>(r.current=!0,()=>void(r.current=!1)));const[n,a,v]=P.useMemo(()=>{const i=()=>{if(!l.current.element)return;const{left:u,top:w,width:b,height:E,bottom:C,right:O,x:j,y:x}=l.current.element.getBoundingClientRect(),S={left:u,top:w,width:b,height:E,bottom:C,right:O,x:j,y:x};l.current.element instanceof HTMLElement&&s&&(S.height=l.current.element.offsetHeight,S.width=l.current.element.offsetWidth),Object.freeze(S),r.current&&!Yt(l.current.lastBounds,S)&&_(l.current.lastBounds=S)};return[i,m?Se(i,m):i,f?Se(i,f):i]},[_,s,f,m]);function h(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(i=>i.removeEventListener("scroll",v,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function g(){l.current.element&&(l.current.resizeObserver=new c(v),l.current.resizeObserver.observe(l.current.element),t&&l.current.scrollContainers&&l.current.scrollContainers.forEach(i=>i.addEventListener("scroll",v,{capture:!0,passive:!0})))}const p=i=>{!i||i===l.current.element||(h(),l.current.element=i,l.current.scrollContainers=Ve(i),g())};return Xt(v,!!t),Vt(a),P.useEffect(()=>{h(),g()},[t,v,a]),P.useEffect(()=>h,[]),[p,d,n]}function Vt(e){P.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function Xt(e,t){P.useEffect(()=>{if(t){const o=e;return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)}},[e,t])}function Ve(e){const t=[];if(!e||e===document.body)return t;const{overflow:o,overflowX:s,overflowY:c}=window.getComputedStyle(e);return[o,s,c].some(d=>d==="auto"||d==="scroll")&&t.push(e),[...t,...Ve(e.parentElement)]}const $t=["x","y","top","bottom","left","right","width","height"],Yt=(e,t)=>$t.every(o=>e[o]===t[o]),Kt=P.forwardRef(function({children:t,fallback:o,resize:s,style:c,gl:d,events:_=Ut,eventSource:l,eventPrefix:f,shadows:m,linear:r,flat:n,legacy:a,orthographic:v,frameloop:h,dpr:g,performance:p,raycaster:i,camera:u,scene:w,onPointerMissed:b,onCreated:E,...C},O){P.useMemo(()=>Ct(pt),[]);const j=ht(),[x,S]=Wt({scroll:!0,debounce:{scroll:50,resize:0},...s}),y=P.useRef(null),R=P.useRef(null);P.useImperativeHandle(O,()=>y.current);const k=ze(b),[W,Q]=P.useState(!1),[V,Z]=P.useState(!1);if(W)throw W;if(V)throw V;const z=P.useRef(null);K(()=>{const L=y.current;S.width>0&&S.height>0&&L&&(z.current||(z.current=qt(L)),z.current.configure({gl:d,events:_,shadows:m,linear:r,flat:n,legacy:a,orthographic:v,frameloop:h,dpr:g,performance:p,raycaster:i,camera:u,scene:w,size:S,onPointerMissed:(...T)=>k.current==null?void 0:k.current(...T),onCreated:T=>{T.events.connect==null||T.events.connect(l?St(l)?l.current:l:R.current),f&&T.setEvents({compute:(B,A)=>{const se=B[f+"X"],ee=B[f+"Y"];A.pointer.set(se/A.size.width*2-1,-(ee/A.size.height)*2+1),A.raycaster.setFromCamera(A.pointer,A.camera)}}),E==null||E(T)}}),z.current.render(D.jsx(j,{children:D.jsx(Fe,{set:Z,children:D.jsx(P.Suspense,{fallback:D.jsx(Pt,{set:Q}),children:t})})})))}),P.useEffect(()=>{const L=y.current;if(L)return()=>We(L)},[]);const F=l?"none":"auto";return D.jsx("div",{ref:R,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:F,...c},...C,children:D.jsx("div",{ref:x,style:{width:"100%",height:"100%"},children:D.jsx("canvas",{ref:y,style:{display:"block"},children:o})})})}),lr=P.forwardRef(function(t,o){return D.jsx(vt,{children:D.jsx(Kt,{...t,ref:o})})});let ne=null,Xe="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function $e(e,t,o){return s=>{o&&o(s),e&&(ne||(ne=new gt),ne.setDecoderPath(typeof e=="string"?e:Xe),s.setDRACOLoader(ne)),t&&s.setMeshoptDecoder(typeof le=="function"?le():le)}}function Ce(e,t=!0,o=!0,s){return J(_e,e,$e(t,o,s))}Ce.preload=(e,t=!0,o=!0,s)=>J.preload(_e,e,$e(t,o,s));Ce.clear=e=>J.clear(_e,e);Ce.setDecoderPath=e=>{Xe=e};export{lr as C,cr as a,Ce as u};
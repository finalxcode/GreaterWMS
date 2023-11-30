import{c as z}from"./selection.fa80983d.js";import{r as W,a8 as M,ap as y,aq as S,ar as w,w as m,o as $,n as C,g as P,as as _,at as x,au as E,av as A,E as B,aw as K,ax as N,ay as I}from"./index.6ae0d646.js";const U={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function F({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:u}=P(),i=W(null);let c;function s(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){M(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),y(a),S(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:y,mobileTouch(a){if(r.mobileCleanup(a),s(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const h=a.target;w(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),clearTimeout(c),e.value===!0&&a!==void 0&&z()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],w(r,"anchor",h)});function d(){_(r,"anchor")}function q(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function b(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)q(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return m(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),m(()=>n.target,()=>{i.value!==null&&d(),b()}),m(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),$(()=>{b(),t!==!0&&n.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),C(()=>{clearTimeout(c),d()}),{anchorEl:i,canShow:s,anchorEvents:r}}function Q(e,t){const o=W(null);let n;function l(c,s){const r=`${s!==void 0?"add":"remove"}EventListener`,d=s!==void 0?s:n;c!==window&&c[r]("scroll",d,x.passive),window[r]("scroll",d,x.passive),n=s}function u(){o.value!==null&&(l(o.value),o.value=null)}const i=m(()=>e.noParentEvent,()=>{o.value!==null&&(u(),t())});return C(i),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:l}}let k;const{notPassiveCapture:v}=x,f=[];function p(e){clearTimeout(k);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=E.length-1;for(;o>=0;){const n=E[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=f.length-1;n>=0;n--){const l=f[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function X(e){f.push(e),f.length===1&&(document.addEventListener("mousedown",p,v),document.addEventListener("touchstart",p,v))}function Y(e){const t=f.findIndex(o=>o===e);t>-1&&(f.splice(t,1),f.length===0&&(clearTimeout(k),document.removeEventListener("mousedown",p,v),document.removeEventListener("touchstart",p,v)))}let H,L;function G(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function J(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const g={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{g[`${e}#ltr`]=e,g[`${e}#rtl`]=e});function Z(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:g[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function R(e,t){let{top:o,left:n,right:l,bottom:u,width:i,height:c}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],u+=t[1],l+=t[0],i+=t[0],c+=t[1]),{top:o,left:n,right:l,bottom:u,width:i,height:c,middle:n+(l-n)/2,center:o+(u-o)/2}}function V(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ee(e){if(A.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:s,offsetTop:r}=window.visualViewport;s!==H&&(c.setProperty("--q-pe-left",s+"px"),H=s),r!==L&&(c.setProperty("--q-pe-top",r+"px"),L=r)}let t;const{scrollLeft:o,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=R(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:c,left:s}=e.anchorEl.getBoundingClientRect(),r=c+e.absoluteOffset.top,d=s+e.absoluteOffset.left;t={top:r,left:d,width:1,height:1,right:d+1,center:r,middle:d,bottom:r+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const u=V(e.el),i={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};j(i,t,u,e.anchorOrigin,e.selfOrigin),l={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(l.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(l.minHeight=l.maxHeight)),i.maxWidth!==void 0&&(l.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function j(e,t,o,n,l){const u=o.bottom,i=o.right,c=B(),s=window.innerHeight-c,r=document.body.clientWidth;if(e.top<0||e.top+u>s)if(l.vertical==="center")e.top=t[n.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(t[n.vertical]>s/2){const d=Math.min(s,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=t[n.horizontal]>r/2?Math.max(0,r-i):0;else if(t[n.horizontal]>r/2){const d=Math.min(r,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,r-e.left)}function T(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var te=K({name:"close-popup",beforeMount(e,{value:t}){const o={depth:T(t),handler(n){o.depth!==0&&setTimeout(()=>{const l=N(e);l!==void 0&&I(l,n,o.depth)})},handlerKey(n){M(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=T(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{te as C,J as a,Q as b,F as c,X as d,Z as p,Y as r,ee as s,U as u,G as v};

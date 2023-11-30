import{i as Ge,r as _,c as v,n as De,o as Ee,aD as Qe,$ as ne,aE as Je,h as T,a5 as G,a4 as Ze,aF as et,Q as ae,x as tt,g as oe,aG as nt,l as at,j as ie,a7 as ve,a8 as Le,t as be,w as H,B as ot,I as it,H as lt,k as le,as as rt,ar as Y,aH as st,an as ee,aI as me,ac as _e,ao as ge,am as ut,ah as ct,aJ as dt,aK as ft,a0 as vt,a2 as mt,aL as gt,_ as ht,az as bt,J as pt,M as yt,V as $t,aA as he,f as k,R as z,F as wt,Y as Ct,X as Tt,aB as te,aC as qt,m as Ae}from"./index.7b4d2431.js";import{Q as Pt}from"./QResizeObserver.59a76f41.js";import{r as kt}from"./rtl.b51694b1.js";import{g as Re,s as Ie}from"./touch.70a9dd44.js";import{c as St}from"./selection.3f90489b.js";import{Q as Lt}from"./QPage.7b920579.js";import{Q as Be}from"./QPageSticky.27e1046f.js";let _t=0;const At=["click","keydown"],Rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${_t++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function It(e,t,d,u){const o=Ge(Qe,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:a}=oe(),i=_(null),$=_(null),B=_(null),x=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),b=v(()=>o.currentModel.value===e.name),D=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(b.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),g=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=v(()=>e.disable===!0||o.hasFocus.value===!0||b.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(c,h){if(h!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&G(c);return}if(u===void 0){o.updateModel({name:e.name}),d("click",c);return}if(u.hasRouterLink.value===!0){const I=(S={})=>{let A;const K=S.to===void 0||nt(S.to,e.to)===!0?o.avoidRouteWatcher=at():null;return u.navigateToRouterLink(c,{...S,returnRouterError:!0}).catch(P=>{A=P}).then(P=>{if(K===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,A===void 0&&(P===void 0||P.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),S.returnRouterError===!0)return A!==void 0?Promise.reject(A):P})};d("click",c,I),c.defaultPrevented!==!0&&I();return}d("click",c)}function R(c){Ze(c,[13,32])?q(c,!0):et(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&o.onKbdNavigate(c.keyCode,a.$el)===!0&&G(c),d("keydown",c)}function V(){const c=o.tabProps.value.narrowIndicator,h=[],I=T("div",{ref:B,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push(T(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?T(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&h.push(I);const S=[T("div",{class:"q-focus-helper",tabindex:-1,ref:i}),T("div",{class:g.value},tt(t.default,h))];return c===!1&&S.push(I),S}const E={name:v(()=>e.name),rootRef:$,tabIndicatorRef:B,routeData:u};De(()=>{o.unregisterTab(E)}),Ee(()=>{o.registerTab(E)});function j(c,h){const I={ref:$,class:D.value,tabindex:w.value,role:"tab","aria-selected":b.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:R,...h};return ne(T(c,I,V()),[[Je,x.value]])}return{renderTab:j,$tabs:o}}var Ve=ie({name:"QTab",props:Rt,emits:At,setup(e,{slots:t,emit:d}){const{renderTab:u}=It(e,t,d);return()=>u("div")}});function Bt(e,t,d){const u=d===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const Vt=["left","center","right","justify"];var Mt=ie({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Vt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:d}){const{proxy:u}=oe(),{$q:o}=u,{registerTick:a}=ve(),{registerTick:i}=ve(),{registerTick:$}=ve(),{registerTimeout:B,removeTimeout:x}=Le(),{registerTimeout:b,removeTimeout:D}=Le(),g=_(null),w=_(null),q=_(e.modelValue),R=_(!1),V=_(!0),E=_(!1),j=_(!1),c=v(()=>o.platform.is.desktop===!0||e.mobileArrows===!0),h=[],I=_(0),S=_(!1);let A,K,P,Q=c.value===!0?ye:be;const re=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Bt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),se=v(()=>{const n=I.value,l=q.value;for(let r=0;r<n;r++)if(h[r].name.value===l)return!0;return!1}),s=v(()=>`q-tabs__content--align-${R.value===!0?"left":j.value===!0?"justify":e.align}`),p=v(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${c.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),M=v(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+s.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(o.platform.is.mobile===!0?" scroll":"")),N=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),J=v(()=>e.vertical!==!0&&o.lang.rtl===!0),ue=v(()=>kt===!1&&J.value===!0);H(J,Q),H(()=>e.modelValue,n=>{ce({name:n,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,()=>{X()}),H(c,n=>{Q=n===!0?ye:be,X()});function ce({name:n,setCurrent:l,skipEmit:r,fromRoute:y}){q.value!==n&&(r!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",n),(l===!0||e["onUpdate:modelValue"]===void 0)&&(Ne(q.value,n),q.value=n))}function X(){a(()=>{pe({width:g.value.offsetWidth,height:g.value.offsetHeight})})}function pe(n){if(N.value===void 0||w.value===null)return;const l=n[N.value.container],r=Math.min(w.value[N.value.scroll],Array.prototype.reduce.call(w.value.children,(C,m)=>C+(m[N.value.content]||0),0)),y=l>0&&r>l;R.value=y,y===!0&&i(Q),j.value=l<parseInt(e.breakpoint,10)}function Ne(n,l){const r=n!=null&&n!==""?h.find(C=>C.name.value===n):null,y=l!=null&&l!==""?h.find(C=>C.name.value===l):null;if(r&&y){const C=r.tabIndicatorRef.value,m=y.tabIndicatorRef.value;clearTimeout(A),C.style.transition="none",C.style.transform="none",m.style.transition="none",m.style.transform="none";const f=C.getBoundingClientRect(),L=m.getBoundingClientRect();m.style.transform=e.vertical===!0?`translate3d(0,${f.top-L.top}px,0) scale3d(1,${L.height?f.height/L.height:1},1)`:`translate3d(${f.left-L.left}px,0,0) scale3d(${L.width?f.width/L.width:1},1,1)`,$(()=>{A=setTimeout(()=>{m.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",m.style.transform="none"},70)})}y&&R.value===!0&&O(y.rootRef.value)}function O(n){const{left:l,width:r,top:y,height:C}=w.value.getBoundingClientRect(),m=n.getBoundingClientRect();let f=e.vertical===!0?m.top-y:m.left-l;if(f<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(f),Q();return}f+=e.vertical===!0?m.height-C:m.width-r,f>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(f),Q())}function ye(){const n=w.value;if(n!==null){const l=n.getBoundingClientRect(),r=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);J.value===!0?(V.value=Math.ceil(r+l.width)<n.scrollWidth-1,E.value=r>0):(V.value=r>0,E.value=e.vertical===!0?Math.ceil(r+l.height)<n.scrollHeight:Math.ceil(r+l.width)<n.scrollWidth)}}function $e(n){F(),K=setInterval(()=>{Ue(n)===!0&&F()},5)}function we(){$e(ue.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ce(){$e(ue.value===!0?0:Number.MAX_SAFE_INTEGER)}function F(){clearInterval(K)}function Fe(n,l){const r=Array.prototype.filter.call(w.value.children,L=>L===l||L.matches&&L.matches(".q-tab.q-focusable")===!0),y=r.length;if(y===0)return;if(n===36)return O(r[0]),r[0].focus(),!0;if(n===35)return O(r[y-1]),r[y-1].focus(),!0;const C=n===(e.vertical===!0?38:37),m=n===(e.vertical===!0?40:39),f=C===!0?-1:m===!0?1:void 0;if(f!==void 0){const L=J.value===!0?-1:1,W=r.indexOf(l)+f*L;return W>=0&&W<y&&(O(r[W]),r[W].focus({preventScroll:!0})),!0}}const We=v(()=>ue.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,l)=>{n.scrollLeft=-l}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,l)=>{n.scrollTop=l}}:{get:n=>n.scrollLeft,set:(n,l)=>{n.scrollLeft=l}});function Ue(n){const l=w.value,{get:r,set:y}=We.value;let C=!1,m=r(l);const f=n<m?-1:1;return m+=f*5,m<0?(C=!0,m=0):(f===-1&&m<=n||f===1&&m>=n)&&(C=!0,m=n),y(l,m),Q(),C}function Te(n,l){for(const r in n)if(n[r]!==l[r])return!1;return!0}function je(){let n=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const r=h.filter(f=>f.routeData!==void 0&&f.routeData.hasRouterLink.value===!0),{hash:y,query:C}=u.$route,m=Object.keys(C).length;for(const f of r){const L=f.routeData.exact.value===!0;if(f.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:de,matched:Xe,href:Ye}=f.routeData.resolvedLink.value,fe=Object.keys(de).length;if(L===!0){if(W!==y||fe!==m||Te(C,de)===!1)continue;n=f.name.value;break}if(W!==""&&W!==y||fe!==0&&Te(de,C)===!1)continue;const U={matchedLen:Xe.length,queryDiff:m-fe,hrefLen:Ye.length-W.length};if(U.matchedLen>l.matchedLen){n=f.name.value,l=U;continue}else if(U.matchedLen!==l.matchedLen)continue;if(U.queryDiff<l.queryDiff)n=f.name.value,l=U;else if(U.queryDiff!==l.queryDiff)continue;U.hrefLen>l.hrefLen&&(n=f.name.value,l=U)}n===null&&h.some(f=>f.routeData===void 0&&f.name.value===q.value)===!0||ce({name:n,setCurrent:!0})}function Ke(n){if(x(),S.value!==!0&&g.value!==null&&n.target&&typeof n.target.closest=="function"){const l=n.target.closest(".q-tab");l&&g.value.contains(l)===!0&&(S.value=!0,R.value===!0&&O(l))}}function ze(){B(()=>{S.value=!1},30)}function Z(){Pe.avoidRouteWatcher===!1?b(je):D()}function qe(){if(P===void 0){const n=H(()=>u.$route.fullPath,Z);P=()=>{n(),P=void 0}}}function Oe(n){h.push(n),I.value++,X(),n.routeData===void 0?b(()=>{if(R.value===!0){const l=q.value,r=l!=null&&l!==""?h.find(y=>y.name.value===l):null;r&&O(r.rootRef.value)}}):(qe(),n.routeData.hasRouterLink.value===!0&&Z())}function He(n){h.splice(h.indexOf(n),1),I.value--,X(),P!==void 0&&n.routeData!==void 0&&(h.every(l=>l.routeData===void 0)===!0&&P(),Z())}const Pe={currentModel:q,tabProps:re,hasFocus:S,hasActiveTab:se,registerTab:Oe,unregisterTab:He,verifyRouteModel:Z,updateModel:ce,onKbdNavigate:Fe,avoidRouteWatcher:!1};ot(Qe,Pe);function ke(){clearTimeout(A),F(),P!==void 0&&P()}let Se;return De(ke),it(()=>{Se=P!==void 0,ke()}),lt(()=>{Se===!0&&qe(),X()}),()=>{const n=[T(Pt,{onResize:pe}),T("div",{ref:w,class:M.value,onScroll:Q},le(t.default))];return c.value===!0&&n.push(T(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F}),T(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F})),T("div",{ref:g,class:p.value,role:"tablist",onFocusin:Ke,onFocusout:ze},n)}}});function xt(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,u)=>{const o=parseFloat(d);o&&(t[u]=o)}),t}var Dt=rt({name:"touch-swipe",beforeMount(e,{value:t,arg:d,modifiers:u}){if(u.mouse!==!0&&Y.has.touch!==!0)return;const o=u.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:xt(d),direction:Re(u),noop:be,mouseStart(i){Ie(i,a)&&st(i)&&(ee(a,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(i,!0))},touchStart(i){if(Ie(i,a)){const $=i.target;ee(a,"temp",[[$,"touchmove","move","notPassiveCapture"],[$,"touchcancel","end","notPassiveCapture"],[$,"touchend","end","notPassiveCapture"]]),a.start(i)}},start(i,$){Y.is.firefox===!0&&me(e,!0);const B=_e(i);a.event={x:B.left,y:B.top,time:Date.now(),mouse:$===!0,dir:!1}},move(i){if(a.event===void 0)return;if(a.event.dir!==!1){G(i);return}const $=Date.now()-a.event.time;if($===0)return;const B=_e(i),x=B.left-a.event.x,b=Math.abs(x),D=B.top-a.event.y,g=Math.abs(D);if(a.event.mouse!==!0){if(b<a.sensitivity[1]&&g<a.sensitivity[1]){a.end(i);return}}else if(b<a.sensitivity[2]&&g<a.sensitivity[2])return;const w=b/$,q=g/$;a.direction.vertical===!0&&b<g&&b<100&&q>a.sensitivity[0]&&(a.event.dir=D<0?"up":"down"),a.direction.horizontal===!0&&b>g&&g<100&&w>a.sensitivity[0]&&(a.event.dir=x<0?"left":"right"),a.direction.up===!0&&b<g&&D<0&&b<100&&q>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&b<g&&D>0&&b<100&&q>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&b>g&&x<0&&g<100&&w>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&b>g&&x>0&&g<100&&w>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(G(i),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),St(),a.styleCleanup=R=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const V=()=>{document.body.classList.remove("no-pointer-events--children")};R===!0?setTimeout(V,50):V()}),a.handler({evt:i,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:$,distance:{x:b,y:g}})):a.end(i)},end(i){a.event!==void 0&&(ge(a,"temp"),Y.is.firefox===!0&&me(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),i!==void 0&&a.event.dir!==!1&&G(i),a.event=void 0)}};e.__qtouchswipe=a,u.mouse===!0&&ee(a,"main",[[e,"mousedown","mouseStart",`passive${o}`]]),Y.has.touch===!0&&ee(a,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const d=e.__qtouchswipe;d!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&d.end(),d.handler=t.value),d.direction=Re(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ge(t,"main"),ge(t,"temp"),Y.is.firefox===!0&&me(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Et(){const e=new Map;return{getCache:function(t,d){return e[t]===void 0?e[t]=d:e[t]},getCacheWithFn:function(t,d){return e[t]===void 0?e[t]=d():e[t]}}}const Qt={name:{required:!0},disable:Boolean},Me={setup(e,{slots:t}){return()=>T("div",{class:"q-panel scroll",role:"tabpanel"},le(t.default))}},Nt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ft=["update:modelValue","before-transition","transition"];function Wt(){const{props:e,emit:t,proxy:d}=oe(),{getCacheWithFn:u}=Et();let o,a;const i=_(null),$=_(null);function B(s){const p=e.vertical===!0?"up":"left";A((d.$q.lang.rtl===!0?-1:1)*(s.direction===p?1:-1))}const x=v(()=>[[Dt,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),b=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),D=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),R=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);H(()=>e.modelValue,(s,p)=>{const M=c(s)===!0?h(s):-1;a!==!0&&S(M===-1?0:M<h(p)?-1:1),i.value!==M&&(i.value=M,t("before-transition",s,p),ut(()=>{t("transition",s,p)}))});function V(){A(1)}function E(){A(-1)}function j(s){t("update:modelValue",s)}function c(s){return s!=null&&s!==""}function h(s){return o.findIndex(p=>p.props.name===s&&p.props.disable!==""&&p.props.disable!==!0)}function I(){return o.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function S(s){const p=s!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(s===-1?b.value:D.value):null;$.value!==p&&($.value=p)}function A(s,p=i.value){let M=p+s;for(;M>-1&&M<o.length;){const N=o[M];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){S(s),a=!0,t("update:modelValue",N.props.name),setTimeout(()=>{a=!1});return}M+=s}e.infinite===!0&&o.length>0&&p!==-1&&p!==o.length&&A(s,s===-1?o.length:-1)}function K(){const s=h(e.modelValue);return i.value!==s&&(i.value=s),!0}function P(){const s=c(e.modelValue)===!0&&K()&&o[i.value];return e.keepAlive===!0?[T(ft,q.value,[T(R.value===!0?u(w.value,()=>({...Me,name:w.value})):Me,{key:w.value,style:g.value},()=>s)])]:[T("div",{class:"q-panel scroll",style:g.value,key:w.value,role:"tabpanel"},[s])]}function Q(){if(o.length!==0)return e.animated===!0?[T(ct,{name:$.value},P)]:P()}function re(s){return o=dt(le(s.default,[])).filter(p=>p.props!==null&&p.props.slot===void 0&&c(p.props.name)===!0),o.length}function se(){return o}return Object.assign(d,{next:V,previous:E,goTo:j}),{panelIndex:i,panelDirectives:x,updatePanelsList:re,updatePanelIndex:K,getPanelContent:Q,getEnabledPanels:I,getPanels:se,isValidPanelName:c,keepAliveProps:q,needsUniqueKeepAliveWrapper:R,goToPanelByOffset:A,goToPanel:j,nextPanel:V,previousPanel:E}}var xe=ie({name:"QTabPanel",props:Qt,setup(e,{slots:t}){return()=>T("div",{class:"q-tab-panel"},le(t.default))}}),Ut=ie({name:"QTabPanels",props:{...Nt,...vt},emits:Ft,setup(e,{slots:t}){const d=oe(),u=mt(e,d.proxy.$q),{updatePanelsList:o,getPanelContent:a,panelDirectives:i}=Wt(),$=v(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(t),gt("div",{class:$.value},a(),"pan",e.swipeable,()=>i.value))}});const jt=bt({data(){return{staff_name:"",check_code:"",adminlogin:{name:"",password:""},login_mode:0}},computed:{screenwidth:{get(){return this.$store.state.screenchange.screenwidth}},screenheight:{get(){return this.$store.state.screenchange.screenheight}},lang:{get(){return this.$store.state.langchange.lang}},authin:{get(){return this.$store.state.loginauth.authin},set(e){this.$store.commit("loginauth/loginAuth",e)}},login_name:{get(){return this.$store.state.loginauth.login_name},set(e){this.$store.commit("loginauth/loginName",e)}},operator:{get(){return this.$store.state.loginauth.operator},set(e){this.$store.commit("loginauth/loginId",e)}},openid:{get(){return this.$store.state.settings.openid},set(e){this.$store.commit("settings/Openid",e)}},baseurl:{get(){return this.$store.state.settings.server}}},methods:{LoginMode(e){var t=this;t.login_mode=e,e===0?(t.adminlogin.name.length!==0&&(t.adminlogin.name=""),t.adminlogin.password.length!==0&&(t.adminlogin.password="")):(t.staff_name.length!==0&&(t.staff_name=""),t.check_code.length!==0&&(t.check_code=""))},LoginCancel(){var e=this;e.staff_name="",e.check_code="",e.adminlogin={name:"",password:""}},Login(){var e=this;e.login_mode===0?e.staffLogin():e.adminLogin()},staffLogin(){var e=this;e.openid.length===0?e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice5")}):e.staff_name.length===0?e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice3")}):e.check_code.length===0?e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice4")}):e.$axios.get(e.baseurl+"staff/?staff_name="+e.staff_name+"&check_code="+e.check_code,{headers:{"Content-Type":'application/json, charset="utf-8"',token:e.openid,language:e.lang}}).then(t=>{t.data.count===1?(e.$store.commit("loginauth/loginAuth","1"),e.$store.commit("loginauth/loginName",e.staff_name),e.$store.commit("loginauth/loginId",t.data.results[0].id),e.$q.notify({message:e.$t("notice.mobile_userlogin.notice6")}),e.$router.push({name:"home"})):e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice8")})}).catch(t=>{e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice8")})})},adminLogin(){var e=this;e.adminlogin.name.length===0?e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice1")}):e.adminlogin.password.length===0?e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice2")}):e.$axios.post(e.baseurl+"login/",e.adminlogin).then(t=>{t.data.code==="200"?(e.$store.commit("settings/Openid",t.data.data.openid),e.$store.commit("loginauth/loginAuth","1"),e.$store.commit("loginauth/loginName",t.data.data.name),e.$store.commit("loginauth/loginId",t.data.data.user_id),e.$q.notify({message:e.$t("notice.mobile_userlogin.notice6")}),e.$router.push({name:"home"})):e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice7")})}).catch(t=>{e.$q.notify({type:"negative",message:e.$t("notice.mobile_userlogin.notice7")})})}},setup(){const e=pt(),t=v({get:()=>e.state.fabchange.fab1}),d=v({get:()=>e.state.fabchange.fab2}),u=v({get:()=>e.state.fabchange.fab3}),o=v({get:()=>e.state.fabchange.fab4});return Ee(()=>{}),{fab1:t,fab2:d,fab3:u,fab4:o,tab:_("stafflogin")}}});function Kt(e,t,d,u,o,a){return yt(),$t(wt,null,[ne(k(Lt,{class:"flex flex-top"},{default:z(()=>[Ct("div",{style:qt({width:e.screenwidth+"px",height:e.screenheight-160+"px",marginTop:"10px"})},[k(Mt,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=i=>e.tab=i),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:z(()=>[k(Ve,{name:"stafflogin",label:e.$t("index.login")},null,8,["label"]),k(Ve,{name:"adminlogin",label:e.$t("index.admin_login")},null,8,["label"])]),_:1},8,["modelValue"]),k(Tt),k(Ut,{modelValue:e.tab,"onUpdate:modelValue":t[9]||(t[9]=i=>e.tab=i),animated:""},{default:z(()=>[k(xe,{name:"stafflogin"},{default:z(()=>[k(te,{dense:"",outlined:"",square:"",modelValue:e.staff_name,"onUpdate:modelValue":[t[1]||(t[1]=i=>e.staff_name=i),t[2]||(t[2]=i=>e.LoginMode(0))],label:e.$t("index.staff_name")},null,8,["modelValue","label"]),k(te,{dense:"",outlined:"",square:"",modelValue:e.check_code,"onUpdate:modelValue":[t[3]||(t[3]=i=>e.check_code=i),t[4]||(t[4]=i=>e.LoginMode(0))],label:e.$t("staff.check_code"),style:{"margin-top":"15px"}},null,8,["modelValue","label"])]),_:1}),k(xe,{name:"adminlogin"},{default:z(()=>[k(te,{dense:"",outlined:"",square:"",modelValue:e.adminlogin.name,"onUpdate:modelValue":[t[5]||(t[5]=i=>e.adminlogin.name=i),t[6]||(t[6]=i=>e.LoginMode(1))],label:e.$t("index.admin_name")},null,8,["modelValue","label"]),k(te,{dense:"",outlined:"",square:"",modelValue:e.adminlogin.password,"onUpdate:modelValue":[t[7]||(t[7]=i=>e.adminlogin.password=i),t[8]||(t[8]=i=>e.LoginMode(1))],label:e.$t("index.password"),style:{"margin-top":"15px"}},null,8,["modelValue","label"])]),_:1})]),_:1},8,["modelValue"])],4)]),_:1},512),[[he,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]]),ne(k(Be,{position:"bottom-left",offset:[18,120]},{default:z(()=>[k(Ae,{square:"",color:"primary",label:e.$t("index.cancel"),onClick:e.LoginCancel},null,8,["label","onClick"])]),_:1},512),[[he,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]]),ne(k(Be,{position:"bottom-right",offset:[18,120]},{default:z(()=>[k(Ae,{square:"",color:"primary",label:e.$t("index.submit"),onClick:e.Login},null,8,["label","onClick"])]),_:1},512),[[he,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])],64)}var Zt=ht(jt,[["render",Kt]]);export{Zt as default};

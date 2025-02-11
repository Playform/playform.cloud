const e={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return t(this.context.count)},getNextContextId(){return t(this.context.count++)}};function t(t){const n=String(t),r=n.length-1;return e.context.id+(r?String.fromCharCode(96+r):"")+n}function n(t){e.context=t}const r=Symbol("solid-proxy"),o=Symbol("solid-track"),l={equals:(e,t)=>e===t};let s=F;const i=1,u=2,c={owned:null,cleanups:null,context:null,owner:null};var f=null;let a,d=null,h=null,g=null,p=null,y=0;function b(e,t){const n=h,r=f,o=0===e.length,l=void 0===t?r:t,s=o?c:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=o?e:()=>e((()=>x((()=>I(s)))));f=s,h=null;try{return _(i,!0)}finally{h=n,f=r}}function v(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},l,t):l).equals||void 0};return[T.bind(n),e=>("function"==typeof e&&(e=e(n.value)),N(n,e))]}function A(e,t,n){C(k(e,t,!1,1))}function w(e,t,n){n=n?Object.assign({},l,n):l;const r=k(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,C(r),T.bind(r)}function x(e){if(null===h)return e();const t=h;h=null;try{return e()}finally{h=t}}function m(){return h}function S(e,t){const n=Symbol("context");return{id:n,Provider:B(n),defaultValue:e}}function O(e){const t=w(e),n=w((()=>L(t())));return n.toArray=()=>{const e=n();return Array.isArray(e)?e:null!=e?[e]:[]},n}function j(){return a||(a=S())}function T(){if(this.sources&&this.state)if(1===this.state)C(this);else{const e=g;g=null,_((()=>P(this)),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function N(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&_((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=d&&d.running;r&&d.disposed.has(n),(r?n.tState:n.state)||(n.pure?g.push(n):p.push(n),n.observers&&E(n)),r||(n.state=1)}if(g.length>1e6)throw g=[],new Error}),!1)),t}function C(e){if(!e.fn)return;I(e);const t=y;!function(e,t,n){let r;const o=f,l=h;h=f=e;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=1,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=n+1,R(t)}finally{h=l,f=o}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?N(e,r):e.value=r,e.updatedAt=n)}(e,e.value,t)}function k(e,t,n,r=1,o){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:f,context:f?f.context:null,pure:n};return null===f||f!==c&&(f.owned?f.owned.push(l):f.owned=[l]),l}function $(e){if(0===e.state)return;if(2===e.state)return P(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)C(e);else if(2===e.state){const n=g;g=null,_((()=>P(e,t[0])),!1),g=n}}function _(e,t){if(g)return e();let n=!1;t||(g=[]),p?n=!0:p=[],y++;try{const t=e();return function(e){if(g&&(F(g),g=null),e)return;const t=p;p=null,t.length&&_((()=>s(t)),!1)}(n),t}catch(e){n||(p=null),g=null,R(e)}}function F(e){for(let t=0;t<e.length;t++)$(e[t])}function P(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const e=r.state;1===e?r!==t&&(!r.updatedAt||r.updatedAt<y)&&$(r):2===e&&P(r,t)}}}function E(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?g.push(n):p.push(n),n.observers&&E(n))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)I(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function R(e,t=f){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}function L(e){if("function"==typeof e&&!e.length)return L(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=L(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function B(e,t){return function(t){let n;return A((()=>n=x((()=>(f.context={...f.context,[e]:t.value},O((()=>t.children)))))),void 0),n}}let H=!1;function M(t,r){if(H&&e.context){const o=e.context;n({...e.context,id:e.getNextContextId(),count:0});const l=x((()=>t(r||{})));return n(o),l}return x((()=>t(r||{})))}const q=S();function D(t){let r,o,l,s,i,u=0;const[c,a]=v(!1),d=j(),h={increment:()=>{1==++u&&a(!0)},decrement:()=>{0==--u&&a(!1)},inFallback:c,effects:[],resolved:!1},g=f;if(e.context&&e.load){const t=e.getContextId();let r=e.load(t);if(r&&("object"!=typeof r||"success"!==r.status?l=r:e.gather(t)),l&&"$$f"!==l){const[r,u]=v(void 0,{equals:!1});s=r,l.then((()=>{if(e.done)return u();e.gather(t),n(o),u(),n()}),(e=>{i=e,u()}))}}const y=function(e){let t;return f&&f.context&&void 0!==(t=f.context[e.id])?t:e.defaultValue}(q);let A;var x;return y&&(r=y.register(h.inFallback)),x=()=>A&&A(),null===f||(null===f.cleanups?f.cleanups=[x]:f.cleanups.push(x)),M(d.Provider,{value:h,get children(){return w((()=>{if(i)throw i;if(o=e.context,s)return s(),s=void 0;o&&"$$f"===l&&n();const u=w((()=>t.children));return w((e=>{const s=h.inFallback(),{showContent:i=!0,showFallback:c=!0}=r?r():{};return(!s||l&&"$$f"!==l)&&i?(h.resolved=!0,A&&A(),A=o=l=void 0,f=h.effects,p.push.apply(p,f),f.length=0,u()):c?A?e:b((e=>(A=e,o&&(n({id:o.id+"F",count:0}),o=void 0),t.fallback)),g):void 0;var f}))}))}})}const Y=Symbol("store-raw"),K=Symbol("store-node"),W=Symbol("store-has"),z=Symbol("store-self");function V(e){let t=e[r];if(!t&&(Object.defineProperty(e,r,{value:t=new Proxy(e,Z)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,l=n.length;o<l;o++){const l=n[o];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(t)})}}return t}function J(e){let t;return null!=e&&"object"==typeof e&&(e[r]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,r,o,l;if(n=null!=e&&e[Y])return n;if(!J(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,l=e.length;n<l;n++)o=e[n],(r=U(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,u=n.length;i<u;i++)l=n[i],s[l].get||(o=e[l],(r=U(o,t))!==o&&(e[l]=r))}return e}function G(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Q(e,t,n){if(e[t])return e[t];const[r,o]=v(n,{equals:!1,internal:!0});return r.$=o,e[t]=r}function X(e){m()&&Q(G(e,K),z)()}const Z={get(e,t,n){if(t===Y)return e;if(t===r)return n;if(t===o)return X(e),n;const l=G(e,K),s=l[t];let i=s?s():e[t];if(t===K||t===W||"__proto__"===t)return i;if(!s){const n=Object.getOwnPropertyDescriptor(e,t);!m()||"function"==typeof i&&!e.hasOwnProperty(t)||n&&n.get||(i=Q(l,t,i)())}return J(i)?V(i):i},has:(e,t)=>t===Y||t===r||t===o||t===K||t===W||"__proto__"===t||(m()&&Q(G(e,W),t)(),t in e),set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return X(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==r&&t!==K?(delete n.value,delete n.writable,n.get=()=>e[r][t],n):n}};function ee(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],l=e.length;void 0===n?(delete e[t],e[W]&&e[W][t]&&void 0!==o&&e[W][t].$()):(e[t]=n,e[W]&&e[W][t]&&void 0===o&&e[W][t].$());let s,i=G(e,K);if((s=Q(i,t,o))&&s.$((()=>n)),Array.isArray(e)&&e.length!==l){for(let t=e.length;t<l;t++)(s=i[t])&&s.$();(s=Q(i,"length",l))&&s.$(e.length)}(s=i[z])&&s.$()}function te(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];ee(e,o,t[o])}}function ne(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const l=typeof r,s=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)ne(e,[r[o]].concat(t),n);return}if(s&&"function"===l){for(let o=0;o<e.length;o++)r(e[o],o)&&ne(e,[o].concat(t),n);return}if(s&&"object"===l){const{from:o=0,to:l=e.length-1,by:s=1}=r;for(let r=o;r<=l;r+=s)ne(e,[r].concat(t),n);return}if(t.length>1)return void ne(e[r],t,[r].concat(n));o=e[r],n=[r].concat(n)}let l=t[0];"function"==typeof l&&(l=l(o,n),l===o)||void 0===r&&null==l||(l=U(l),void 0===r||J(o)&&J(l)&&!Array.isArray(l)?te(o,l):ee(e,r,l))}function re(...[e,t]){const n=U(e||{}),r=Array.isArray(n);return[V(n),function(...e){_((()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),t=U(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const r=t[n];e[n]!==r&&ee(e,n,r)}ee(e,"length",r)}else te(e,t)}(n,e[0]):ne(n,e)}),!1)}]}const oe=Symbol("store-root");function le(e,t,n,r,o){const l=t[n];if(e===l)return;const s=Array.isArray(e);if(n!==oe&&(!J(e)||!J(l)||s!==Array.isArray(l)||o&&e[o]!==l[o]))return void ee(t,n,e);if(s){if(e.length&&l.length&&(!r||o&&e[0]&&null!=e[0][o])){let t,n,s,i,u,c,f,a;for(s=0,i=Math.min(l.length,e.length);s<i&&(l[s]===e[s]||o&&l[s]&&e[s]&&l[s][o]===e[s][o]);s++)le(e[s],l,s,r,o);const d=new Array(e.length),h=new Map;for(i=l.length-1,u=e.length-1;i>=s&&u>=s&&(l[i]===e[u]||o&&l[i]&&e[u]&&l[i][o]===e[u][o]);i--,u--)d[u]=l[i];if(s>u||s>i){for(n=s;n<=u;n++)ee(l,n,e[n]);for(;n<e.length;n++)ee(l,n,d[n]),le(e[n],l,n,r,o);return void(l.length>e.length&&ee(l,"length",e.length))}for(f=new Array(u+1),n=u;n>=s;n--)c=e[n],a=o&&c?c[o]:c,t=h.get(a),f[n]=void 0===t?-1:t,h.set(a,n);for(t=s;t<=i;t++)c=l[t],a=o&&c?c[o]:c,n=h.get(a),void 0!==n&&-1!==n&&(d[n]=l[t],n=f[n],h.set(a,n));for(n=s;n<e.length;n++)n in d?(ee(l,n,d[n]),le(e[n],l,n,r,o)):ee(l,n,e[n])}else for(let t=0,n=e.length;t<n;t++)le(e[t],l,t,r,o);return void(l.length>e.length&&ee(l,"length",e.length))}const i=Object.keys(e);for(let t=0,n=i.length;t<n;t++)le(e[i[t]],l,i[t],r,o);const u=Object.keys(l);for(let t=0,n=u.length;t<n;t++)void 0===e[u[t]]&&ee(l,u[t],void 0)}function se(e,t={}){const{merge:n,key:r="id"}=t,o=U(e);return e=>{if(!J(e)||!J(o))return o;const t=le(o,{[oe]:e},oe,n,r);return void 0===t?e:t}}function ie(e,t,n,r={}){let o;return b((r=>{o=r,t===document?e():function(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return ue(e,t,r,n);A((r=>ue(e,t(),r,n)),r)}(t,e(),t.firstChild?null:void 0,n)}),r.owner),()=>{o(),t.textContent=""}}function ue(t,n,r,o,l){const s=(i=t,!!e.context&&!e.done&&(!i||i.isConnected));var i;if(s){!r&&(r=[...t.childNodes]);let e=[];for(let t=0;t<r.length;t++){const n=r[t];8===n.nodeType&&"!$"===n.data.slice(0,2)?n.remove():e.push(n)}r=e}for(;"function"==typeof r;)r=r();if(n===r)return r;const u=typeof n,c=void 0!==o;if(t=c&&r[0]&&r[0].parentNode||t,"string"===u||"number"===u){if(s)return r;if("number"===u&&(n=n.toString())===r)return r;if(c){let e=r[0];e&&3===e.nodeType?e.data!==n&&(e.data=n):e=document.createTextNode(n),r=ae(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===u){if(s)return r;r=ae(t,r,o)}else{if("function"===u)return A((()=>{let e=n();for(;"function"==typeof e;)e=e();r=ue(t,e,r,o)})),()=>r;if(Array.isArray(n)){const e=[],i=r&&Array.isArray(r);if(ce(e,n,r,l))return A((()=>r=ue(t,e,r,o,!0))),()=>r;if(s){if(!e.length)return r;if(void 0===o)return r=[...t.childNodes];let n=e[0];if(n.parentNode!==t)return r;const l=[n];for(;(n=n.nextSibling)!==o;)l.push(n);return r=l}if(0===e.length){if(r=ae(t,r,o),c)return r}else i?0===r.length?fe(t,e,o):function(e,t,n){let r=n.length,o=t.length,l=r,s=0,i=0,u=t[o-1].nextSibling,c=null;for(;s<o||i<l;)if(t[s]!==n[i]){for(;t[o-1]===n[l-1];)o--,l--;if(o===s){const t=l<r?i?n[i-1].nextSibling:n[l-i]:u;for(;i<l;)e.insertBefore(n[i++],t)}else if(l===i)for(;s<o;)c&&c.has(t[s])||t[s].remove(),s++;else if(t[s]===n[l-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=i;for(;e<l;)c.set(n[e],e++)}const r=c.get(t[s]);if(null!=r)if(i<r&&r<l){let u,f=s,a=1;for(;++f<o&&f<l&&null!=(u=c.get(t[f]))&&u===r+a;)a++;if(a>r-i){const o=t[s];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[s++])}else s++;else t[s++].remove()}}else s++,i++}(t,r,e):(r&&ae(t),fe(t,e));r=e}else if(n.nodeType){if(s&&n.parentNode)return r=c?[n]:n;if(Array.isArray(r)){if(c)return r=ae(t,r,o,n);ae(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function ce(e,t,n,r){let o=!1;for(let l=0,s=t.length;l<s;l++){let s,i=t[l],u=n&&n[e.length];if(null==i||!0===i||!1===i);else if("object"==(s=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ce(e,i,u)||o;else if("function"===s)if(r){for(;"function"==typeof i;)i=i();o=ce(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||o}else e.push(i),o=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return o}function fe(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ae(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&s.remove():t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function de(t,n){const r=t.querySelectorAll("*[data-hk]");for(let t=0;t<r.length;t++){const o=r[t],l=o.getAttribute("data-hk");n&&!l.startsWith(n)||e.registry.has(l)||e.registry.set(l,o)}}const he=(...t)=>(H=!0,function(t,n,r={}){if(globalThis._$HY.done)return ie(t,n,[...n.childNodes],r);e.completed=globalThis._$HY.completed,e.events=globalThis._$HY.events,e.load=e=>globalThis._$HY.r[e],e.has=e=>e in globalThis._$HY.r,e.gather=e=>de(n,e),e.registry=new Map,e.context={id:r.renderId||"",count:0};try{return de(n,r.renderId),ie(t,n,[...n.childNodes],r)}finally{e.context=null}}(...t)),ge=new WeakMap;var pe=e=>(t,n,r,{client:o})=>{if(!e.hasAttribute("ssr"))return;const l="only"!==o,s=l?he:ie;let i,u={};if(Object.keys(r).length>0){if("only"!==o){const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,(t=>t===e?NodeFilter.FILTER_SKIP:"ASTRO-SLOT"===t.nodeName?NodeFilter.FILTER_ACCEPT:"ASTRO-ISLAND"===t.nodeName?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP));for(;i=t.nextNode();)u[i.getAttribute("name")||"default"]=i}for(const[e,t]of Object.entries(r))u[e]||(u[e]=document.createElement("astro-slot"),"default"!==e&&u[e].setAttribute("name",e),u[e].innerHTML=t)}const{default:c,...f}=u,a=e.dataset.solidRenderId;if(ge.has(e))ge.get(e)(se({...n,...f,children:c}));else{const[r,o]=re({...n,...f,children:c});ge.set(e,o);const i=s((()=>{const e=()=>M(t,r);return l?M(D,{get children(){return e()}}):e()}),e,{renderId:a});e.addEventListener("astro:unmount",(()=>i()),{once:!0})}};export{pe as default};
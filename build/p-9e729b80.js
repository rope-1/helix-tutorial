let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),r=(e,t,n)=>{n&&n.map((([n,l,s])=>{const c=e,i=a(t,s),r=u(n);o.ael(c,l,i,r),(t.o=t.o||[]).push((()=>o.rel(c,l,i,r)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){I(e)}},u=e=>0!=(2&e),f=new WeakMap,h=e=>"sc-"+e.h,d={},$=e=>"object"==(e=typeof e)||"function"===e,y=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!$(l))&&(l+=""),s&&o?c[c.length-1].$+=l:c.push(s?p(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=p(e,null);return r.p=t,c.length>0&&(r.m=c),r},p=(e,t)=>({t:0,S:e,$:t,g:null,m:null,p:null}),m={},b=(e,t,n,s,c,i)=>{if(n!==s){let r=G(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=S(n),o=S(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if(r||"o"!==t[0]||"n"!==t[1]){const l=$(s);if((r||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&i||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):G(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},w=/\s/,S=e=>e?e.split(w):[],g=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.p||d,c=t.p||d;for(l in o)l in c||b(s,l,o[l],void 0,n,t.t);for(l in c)b(s,l,o[l],c[l],n,t.t)},j=(t,n,l)=>{let o,c,i=n.m[l],r=0;if(null!==i.$)o=i.g=s.createTextNode(i.$);else if(o=i.g=s.createElement(i.S),g(null,i,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.m)for(r=0;r<i.m.length;++r)c=j(t,i,r),c&&o.appendChild(c);return o},v=(e,n,l,s,o,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=c;++o)s[o]&&(i=j(null,l,o),i&&(s[o].g=i,r.insertBefore(i,n)))},M=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.g.remove()},k=(e,t)=>e.S===t.S,C=(e,t)=>{const n=t.g=e.g,l=e.m,s=t.m,o=t.$;null===o?("slot"===t.S||g(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,i=t.length-1,r=t[0],a=t[i],u=l.length-1,f=l[0],h=l[u];for(;o<=i&&c<=u;)null==r?r=t[++o]:null==a?a=t[--i]:null==f?f=l[++c]:null==h?h=l[--u]:k(r,f)?(C(r,f),r=t[++o],f=l[++c]):k(a,h)?(C(a,h),a=t[--i],h=l[--u]):k(r,h)?(C(r,h),e.insertBefore(r.g,a.g.nextSibling),r=t[++o],h=l[--u]):k(a,f)?(C(a,f),e.insertBefore(a.g,r.g),a=t[--i],f=l[++c]):(s=j(t&&t[c],n,c),f=l[++c],s&&r.g.parentNode.insertBefore(s,r.g));o>i?v(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&M(t,o,i)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),v(n,null,t,s,0,s.length-1)):null!==l&&M(l,0,l.length-1)):e.$!==o&&(n.data=o)},O=e=>_(e).j,L=(e,t,n)=>{const l=O(e);return{emit:e=>P(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},P=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},x=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},E=(e,t)=>{if(e.t|=16,!(4&e.t))return x(e,e.M),le((()=>T(e,t)));e.t|=512},T=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>U(n,e,t))),e.u=null),l=U(n,"componentWillLoad")),q(l,(()=>W(e,n,t)))},W=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.j,l=t.t,o=((e,t)=>{let n=h(t),l=Q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=f.get(e=e.head||e);o||f.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);A(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>H(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},A=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.j,o=n.C||p(null,null),c=(e=>e&&e.S===m)(l)?l:y(null,null,l);t=s.tagName,c.S=null,c.t|=4,n.C=c,c.g=o.g=s.shadowRoot||s,e=s["s-sc"],C(o,c)})(n,l)}catch(e){I(e,n.j)}return null},H=e=>{const t=e.j,n=e.i,l=e.M;64&e.t||(e.t|=64,D(t),U(n,"componentDidLoad"),e.O(t),l||R()),e.v&&(e.v(),e.v=void 0),512&e.t&&ne((()=>E(e,!1))),e.t&=-517},R=()=>{D(s.documentElement),ne((()=>P(l,"appload",{detail:{namespace:"web-components"}})))},U=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){I(e)}},q=(e,t)=>e&&e.then?e.then(t):t(),D=e=>e.classList.add("hydrated"),F=(e,t,n)=>{if(t.L){e.watchers&&(t.P=e.watchers);const l=Object.entries(t.L),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>_(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=_(e),o=s.j,c=s.T.get(t),i=s.t,r=s.i;if(n=((e,t)=>null==e||$(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.L[t][0]),!(8&i&&void 0!==c||n===c)&&(s.T.set(t,n),r)){if(l.P&&128&i){const e=l.P[t];e&&e.map((e=>{try{r[e](n,c,t)}catch(e){I(e,o)}}))}2==(18&i)&&E(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},N=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),$=[];let y,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],h:t[1],L:t[2],W:t[3]};l.L=t[2],l.W=t[3],l.P={};const s=l.h,u=class extends HTMLElement{constructor(e){super(e),B(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),p?$.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=_(e),n=t.k,l=()=>{};if(1&t.t)r(e,t,n.W);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t.M=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=K(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,F(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){I(e)}t.t&=-9,t.t|=128,e()}if(s.style){let e=s.style;const t=h(n);if(!Q.has(t)){const l=()=>{};((e,t,n)=>{let l=Q.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>E(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{if(0==(1&o.t)){const e=_(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return _(this).A}};l.H=e[0],c.includes(s)||a.get(s)||(n.push(s),a.define(s,F(u,l,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),p=!1,$.length?$.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(R,30)))},V=new WeakMap,_=e=>V.get(e),z=(e,t)=>V.set(t.i=e,t),B=(e,t)=>{const n={t:0,j:e,k:t,T:new Map};return n.A=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],r(e,n,t.W),V.set(e,n)},G=(e,t)=>t in e,I=(e,t)=>(0,console.error)(e,t),J=new Map,K=e=>{const t=e.h.replace(/-/g,"_"),n=e.H,l=J.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(J.set(n,e),e[t])),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ne(te):o.raf(te))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){I(e)}e.length=0},te=()=>{ee(X),ee(Y),(n=X.length>0)&&o.raf(te)},ne=e=>c().then(e),le=Z(Y,!0);export{m as H,N as b,L as c,O as g,y as h,c as p,z as r}
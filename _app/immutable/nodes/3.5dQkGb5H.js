import{_ as O}from"../chunks/preload-helper.0HuHagjb.js";import{s as Z,C as tt,A as G,a as V,e as T,t as j,b as H,c as I,m as A,o as N,h as d,f as E,i as S,p as v,D as et,q as X,x as st,w as ot,d as Y,y as x}from"../chunks/scheduler.5vhQhv7p.js";import{S as at,i as rt,b as F,d as nt,m as J,a as K,c as lt,t as Q,e as W,g as it}from"../chunks/index.gtf_sdc3.js";async function ct({params:a}){try{const c=await Object.assign({"/src/posts/about.md":()=>O(()=>import("../chunks/about.TnXEdQMK.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/posts/fablab-final.md":()=>O(()=>import("../chunks/fablab-final.cVmo-k3I.js"),__vite__mapDeps([3,1,2]),import.meta.url),"/src/posts/fablab-one.md":()=>O(()=>import("../chunks/fablab-one.-_fJfCkt.js"),__vite__mapDeps([4,1,2]),import.meta.url),"/src/posts/fablab-two.md":()=>O(()=>import("../chunks/fablab-two.TLfYtH4I.js"),__vite__mapDeps([5,1,2]),import.meta.url),"/src/posts/karta.md":()=>O(()=>import("../chunks/karta.2MHRsuWA.js"),__vite__mapDeps([6,1,2]),import.meta.url)})[`/src/posts/${a.slug}.md`](),{title:s,date:u,categories:l,tags:_,cover:n}=c.metadata;return{content:c.default,title:s,date:u,categories:l,tags:_,cover:n}}catch(e){throw console.error(`Error loading post ${a.slug}:`,e),e}}const ht=Object.freeze(Object.defineProperty({__proto__:null,load:ct},Symbol.toStringTag,{value:"Module"}));function ut(a){let e,c;return{c(){e=T("img"),this.h()},l(s){e=I(s,"IMG",{class:!0,src:!0}),this.h()},h(){E(e,"class","cover-banner svelte-udbtud"),Y(e.src,c=a[0].cover)||E(e,"src",c),x(e,"transform",`translate3d(0, ${a[1]/2}px, 0)`)},m(s,u){S(s,e,u)},p(s,u){u&1&&!Y(e.src,c=s[0].cover)&&E(e,"src",c),u&2&&x(e,"transform",`translate3d(0, ${s[1]/2}px, 0)`)},d(s){s&&d(e)}}}function dt(a){let e=!1,c=()=>{e=!1},s,u,l,_,n=a[0].title+"",i,m,f,$,g=a[0].date+"",b,D,p,C,M,w,o,L,R,U;tt(a[3]);let h=!a[2]&&ut(a);var y=a[0].content;function z(t,r){return{}}return y&&(o=G(y,z())),{c(){h&&h.c(),u=V(),l=T("div"),_=T("h1"),i=j(n),m=V(),f=T("p"),$=j("Published: "),b=j(g),D=V(),p=T("div"),C=T("div"),M=V(),w=T("article"),o&&F(o.$$.fragment),this.h()},l(t){h&&h.l(t),u=H(t),l=I(t,"DIV",{class:!0});var r=A(l);_=I(r,"H1",{});var P=A(_);i=N(P,n),P.forEach(d),m=H(r),f=I(r,"P",{class:!0});var k=A(f);$=N(k,"Published: "),b=N(k,g),k.forEach(d),r.forEach(d),D=H(t),p=I(t,"DIV",{class:!0});var q=A(p);C=I(q,"DIV",{class:!0}),A(C).forEach(d),M=H(q),w=I(q,"ARTICLE",{class:!0});var B=A(w);o&&nt(o.$$.fragment,B),B.forEach(d),q.forEach(d),this.h()},h(){E(f,"class","date svelte-udbtud"),E(l,"class","post-header "+(a[2]?"no-banner":"")+" svelte-udbtud"),E(C,"class","toc svelte-udbtud"),E(w,"class","post svelte-udbtud"),E(p,"class","centered-container svelte-udbtud")},m(t,r){h&&h.m(t,r),S(t,u,r),S(t,l,r),v(l,_),v(_,i),v(l,m),v(l,f),v(f,$),v(f,b),S(t,D,r),S(t,p,r),v(p,C),v(p,M),v(p,w),o&&J(o,w,null),L=!0,R||(U=et(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(c,100),a[3]()}),R=!0)},p(t,[r]){if(r&2&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,t[1]),s=setTimeout(c,100)),t[2]||h.p(t,r),(!L||r&1)&&n!==(n=t[0].title+"")&&X(i,n),(!L||r&1)&&g!==(g=t[0].date+"")&&X(b,g),r&1&&y!==(y=t[0].content)){if(o){it();const P=o;K(P.$$.fragment,1,0,()=>{W(P,1)}),lt()}y?(o=G(y,z()),F(o.$$.fragment),Q(o.$$.fragment,1),J(o,w,null)):o=null}},i(t){L||(o&&Q(o.$$.fragment,t),L=!0)},o(t){o&&K(o.$$.fragment,t),L=!1},d(t){t&&(d(u),d(l),d(D),d(p)),h&&h.d(t),o&&W(o),R=!1,U()}}}function ft(a,e,c){let{data:s}=e;st(()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((i,m)=>{if(i.textContent!==null){const f=i.textContent.toLowerCase().replace(/ /g,"-");i.id=f}})}),ot(()=>{const n=document.querySelector("h3");if(n){const i=n.nextElementSibling;if(i&&i.tagName==="UL"){let m=document.querySelector(".toc");m!==null&&(m.innerHTML="",m.appendChild(n),m.appendChild(i)),i.querySelectorAll("li").forEach($=>{const g=Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).find(b=>b.textContent===$.textContent);if(g){const b=$.innerHTML;$.innerHTML=`<a href="#${g.id}">${b}</a>`}})}}});const u=s.tags&&s.tags.includes("no-banner");let l=0;function _(){c(1,l=window.pageYOffset)}return a.$$set=n=>{"data"in n&&c(0,s=n.data)},[s,l,u,_]}class vt extends at{constructor(e){super(),rt(this,e,ft,dt,Z,{data:0})}}export{vt as component,ht as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/about.TnXEdQMK.js","../chunks/scheduler.5vhQhv7p.js","../chunks/index.gtf_sdc3.js","../chunks/fablab-final.cVmo-k3I.js","../chunks/fablab-one.-_fJfCkt.js","../chunks/fablab-two.TLfYtH4I.js","../chunks/karta.2MHRsuWA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

const __vite__fileDeps=["../chunks/about.BEo3XfwO.js","../chunks/scheduler.VDxU6aNK.js","../chunks/index.CMIy7L5C.js","../chunks/fablab-00.NqJTIas0.js","../chunks/fablab-01.BP0nkKd2.js","../chunks/fablab-02.DV2YuZlE.js","../chunks/fablab-03.j-lHI7id.js","../chunks/fablab-04.CQZw0mzq.js","../chunks/fablab-05.But8Ghsj.js","../chunks/fablab-06.DoEUvvmp.js","../chunks/fablab-07.B7Fr5w5f.js","../chunks/fablab-08.C_LAPNe1.js","../chunks/fablab-09.CytGUGYd.js","../chunks/fablab-10.Cq0GNrMe.js","../chunks/fablab-11-group.BXkvN_gs.js","../chunks/karta.D-uVr3kN.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_}from"../chunks/preload-helper.D6kgxu3v.js";import{s as Z,D as tt,x as U,a as z,e as P,t as M,b as S,c as A,j as D,l as N,h,f as I,i as R,m as g,E as et,o as G,u as st,r as ot,d as X,v as Y,y as rt}from"../chunks/scheduler.VDxU6aNK.js";import{S as at,i as lt,b as F,d as it,m as J,t as K,c as nt,a as Q,e as W,g as ct}from"../chunks/index.CMIy7L5C.js";async function _t({params:r}){try{const t=Object.assign({"/src/posts/about.md":()=>_(()=>import("../chunks/about.BEo3XfwO.js"),__vite__mapDeps([0,1,2]),import.meta.url),"/src/posts/fablab-00.md":()=>_(()=>import("../chunks/fablab-00.NqJTIas0.js"),__vite__mapDeps([3,1,2]),import.meta.url),"/src/posts/fablab-01.md":()=>_(()=>import("../chunks/fablab-01.BP0nkKd2.js"),__vite__mapDeps([4,1,2]),import.meta.url),"/src/posts/fablab-02.md":()=>_(()=>import("../chunks/fablab-02.DV2YuZlE.js"),__vite__mapDeps([5,1,2]),import.meta.url),"/src/posts/fablab-03.md":()=>_(()=>import("../chunks/fablab-03.j-lHI7id.js"),__vite__mapDeps([6,1,2]),import.meta.url),"/src/posts/fablab-04.md":()=>_(()=>import("../chunks/fablab-04.CQZw0mzq.js"),__vite__mapDeps([7,1,2]),import.meta.url),"/src/posts/fablab-05.md":()=>_(()=>import("../chunks/fablab-05.But8Ghsj.js"),__vite__mapDeps([8,1,2]),import.meta.url),"/src/posts/fablab-06.md":()=>_(()=>import("../chunks/fablab-06.DoEUvvmp.js"),__vite__mapDeps([9,1,2]),import.meta.url),"/src/posts/fablab-07.md":()=>_(()=>import("../chunks/fablab-07.B7Fr5w5f.js"),__vite__mapDeps([10,1,2]),import.meta.url),"/src/posts/fablab-08.md":()=>_(()=>import("../chunks/fablab-08.C_LAPNe1.js"),__vite__mapDeps([11,1,2]),import.meta.url),"/src/posts/fablab-09.md":()=>_(()=>import("../chunks/fablab-09.CytGUGYd.js"),__vite__mapDeps([12,1,2]),import.meta.url),"/src/posts/fablab-10.md":()=>_(()=>import("../chunks/fablab-10.Cq0GNrMe.js"),__vite__mapDeps([13,1,2]),import.meta.url),"/src/posts/fablab-11-group.md":()=>_(()=>import("../chunks/fablab-11-group.BXkvN_gs.js"),__vite__mapDeps([14,1,2]),import.meta.url),"/src/posts/karta.md":()=>_(()=>import("../chunks/karta.D-uVr3kN.js"),__vite__mapDeps([15,1,2]),import.meta.url)});if(!t[`/src/posts/${r.slug}.md`]){console.error(`Post ${r.slug} does not exist`);return}const m=await t[`/src/posts/${r.slug}.md`](),{title:s,date:u,categories:i,tags:v,cover:l}=m.metadata;return{content:m.default,title:s,date:u,categories:i,tags:v,cover:l}}catch(t){throw console.error(`Error loading post ${r.slug}:`,t),t}}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:_t},Symbol.toStringTag,{value:"Module"}));function mt(r){let t,m;return{c(){t=P("img"),this.h()},l(s){t=A(s,"IMG",{class:!0,src:!0}),this.h()},h(){I(t,"class","cover-banner svelte-12zqzs0"),X(t.src,m=r[0].cover)||I(t,"src",m),Y(t,"transform",`translate3d(0, ${r[1]/2}px, 0)`)},m(s,u){R(s,t,u)},p(s,u){u&1&&!X(t.src,m=s[0].cover)&&I(t,"src",m),u&2&&Y(t,"transform",`translate3d(0, ${s[1]/2}px, 0)`)},d(s){s&&h(t)}}}function ut(r){let t=!1,m=()=>{t=!1},s,u,i,v,l=r[0].title+"",f,n,c,p,d=r[0].date+"",T,q,E,V,C,L,o,$,k,j;tt(r[3]);let b=!r[2]&&mt(r);var O=r[0].content;function x(e,a){return{}}return O&&(o=U(O,x())),{c(){b&&b.c(),u=z(),i=P("div"),v=P("h1"),f=M(l),n=z(),c=P("p"),p=M("Published: "),T=M(d),q=z(),E=P("div"),V=P("div"),C=z(),L=P("article"),o&&F(o.$$.fragment),this.h()},l(e){b&&b.l(e),u=S(e),i=A(e,"DIV",{class:!0});var a=D(i);v=A(a,"H1",{});var w=D(v);f=N(w,l),w.forEach(h),n=S(a),c=A(a,"P",{class:!0});var H=D(c);p=N(H,"Published: "),T=N(H,d),H.forEach(h),a.forEach(h),q=S(e),E=A(e,"DIV",{class:!0});var y=D(E);V=A(y,"DIV",{class:!0}),D(V).forEach(h),C=S(y),L=A(y,"ARTICLE",{class:!0});var B=D(L);o&&it(o.$$.fragment,B),B.forEach(h),y.forEach(h),this.h()},h(){I(c,"class","date svelte-12zqzs0"),I(i,"class","post-header "+(r[2]?"no-banner":"")+" svelte-12zqzs0"),I(V,"class","toc svelte-12zqzs0"),I(L,"class","post svelte-12zqzs0"),I(E,"class","centered-container svelte-12zqzs0")},m(e,a){b&&b.m(e,a),R(e,u,a),R(e,i,a),g(i,v),g(v,f),g(i,n),g(i,c),g(c,p),g(c,T),R(e,q,a),R(e,E,a),g(E,V),g(E,C),g(E,L),o&&J(o,L,null),$=!0,k||(j=et(window,"scroll",()=>{t=!0,clearTimeout(s),s=setTimeout(m,100),r[3]()}),k=!0)},p(e,[a]){if(a&2&&!t&&(t=!0,clearTimeout(s),scrollTo(window.pageXOffset,e[1]),s=setTimeout(m,100)),e[2]||b.p(e,a),(!$||a&1)&&l!==(l=e[0].title+"")&&G(f,l),(!$||a&1)&&d!==(d=e[0].date+"")&&G(T,d),a&1&&O!==(O=e[0].content)){if(o){ct();const w=o;K(w.$$.fragment,1,0,()=>{W(w,1)}),nt()}O?(o=U(O,x()),F(o.$$.fragment),Q(o.$$.fragment,1),J(o,L,null)):o=null}},i(e){$||(o&&Q(o.$$.fragment,e),$=!0)},o(e){o&&K(o.$$.fragment,e),$=!1},d(e){e&&(h(u),h(i),h(q),h(E)),b&&b.d(e),o&&W(o),k=!1,j()}}}function dt(r,t,m){let{data:s}=t;st(async()=>{document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((n,c)=>{if(n.textContent!==null){const p=n.textContent.toLowerCase().replace(/ /g,"-");n.id=p}}),await rt(),document.querySelectorAll(".centered-container :global(.img.cap)").forEach(n=>{const c=n,p=c.alt,d=document.createElement("div");d.className="caption",d.textContent=p,c.parentNode&&c.parentNode.insertBefore(d,c.nextSibling)})}),ot(()=>{const l=document.querySelector("h3");if(l){const f=l.nextElementSibling;if(f&&f.tagName==="UL"){let n=document.querySelector(".toc");n!==null&&(n.innerHTML="",n.appendChild(l),n.appendChild(f)),f.querySelectorAll("li").forEach(p=>{const d=Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).find(T=>T.textContent===p.textContent);if(d){const T=p.innerHTML;p.innerHTML=`<a href="#${d.id}">${T}</a>`}})}}});const u=s.tags&&s.tags.includes("no-banner");let i=0;function v(){m(1,i=window.pageYOffset)}return r.$$set=l=>{"data"in l&&m(0,s=l.data)},[s,i,u,v]}class Et extends at{constructor(t){super(),lt(this,t,dt,ut,Z,{data:0})}}export{Et as component,vt as universal};

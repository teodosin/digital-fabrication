import{s as E,e as b,t as _,a as S,c as d,l as f,m as g,d as p,b as q,i as u,o as h,p as v,n as $,q as x}from"../chunks/scheduler.E8Kv5yxe.js";import{S as y,i as C}from"../chunks/index.1aMfTX8a.js";import{s as H}from"../chunks/entry.26Cn156u.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=f(t);o=g(a,r),a.forEach(p),n=q(e),i=d(e,"P",{});var m=f(i);l=g(m,c),m.forEach(p)},m(e,a){u(e,t,a),h(t,o),u(e,n,a),u(e,i,a),h(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(l,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return x(s,j,n=>r(0,o=n)),[o]}let D=class extends y{constructor(t){super(),C(this,t,w,k,E,{})}};export{D as component};
import{D as $,n as _,E as y,j as S,h as E,F as I,G as w,I as O,J as p,K as b,L as j,M as x,N as C,O as L,P as M,Q as N,R as P}from"./scheduler.RSEvhASz.js";const u=new Set;let f;function K(){f={r:0,c:[],p:f}}function Q(){f.r||$(f.c),f=f.p}function R(t,e){t&&t.i&&(u.delete(t),t.i(e))}function U(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),f.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function V(t){t&&t.c()}function z(t,e){t&&t.l(e)}function B(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),p(()=>{const d=t.$$.on_mount.map(C).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function D(t,e){const n=t.$$;n.fragment!==null&&(b(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){t.$$.dirty[0]===-1&&(L.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,n,a,i,d,c=null,v=[-1]){const o=j;x(t);const s=t.$$={fragment:null,ctx:[],props:d,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,h,...g)=>{const m=g.length?g[0]:h;return s.ctx&&i(s.ctx[r],s.ctx[r]=m)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](m),l&&F(t,r)),h}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){N();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(E)}else s.fragment&&s.fragment.c();e.intro&&R(t.$$.fragment),B(t,e.target,e.anchor),P(),I()}x(o)}class H{$$=void 0;$$set=void 0;$destroy(){D(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(G);export{H as S,U as a,V as b,Q as c,z as d,D as e,K as g,A as i,B as m,R as t};

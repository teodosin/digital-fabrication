import{C as $,n as _,D as y,f as S,d as E,E as C,F as w,G as I,I as p,J as O,K as b,L as x,M as L,N as M,O as N,P,Q as j}from"./scheduler.05SfK33l.js";const u=new Set;let f;function Q(){f={r:0,c:[],p:f}}function R(){f.r||$(f.c),f=f.p}function B(t,e){t&&t.i&&(u.delete(t),t.i(e))}function U(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),f.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function V(t){t&&t.c()}function z(t,e){t&&t.l(e)}function D(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),p(()=>{const d=t.$$.on_mount.map(L).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function F(t,e){const n=t.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(t,e,n,a,i,d,c=null,v=[-1]){const o=b;x(t);const s=t.$$={fragment:null,ctx:[],props:d,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,h,...g)=>{const m=g.length?g[0]:h;return s.ctx&&i(s.ctx[r],s.ctx[r]=m)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](m),l&&G(t,r)),h}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){P();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(E)}else s.fragment&&s.fragment.c();e.intro&&B(t.$$.fragment),D(t,e.target,e.anchor),j(),C()}x(o)}class H{$$=void 0;$$set=void 0;$destroy(){F(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(J);export{H as S,U as a,V as b,R as c,z as d,F as e,Q as g,A as i,D as m,B as t};

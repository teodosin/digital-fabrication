import{s as Z,e as n,a as s,c as a,g as o,b as r,i as l,n as F,h as i}from"./scheduler.5vhQhv7p.js";import{S as $,i as tt}from"./index.gtf_sdc3.js";function et(X){let u,S="A pair of glove controllers for VR and non-VR use.",_,h,z="Table of Contents",g,f,D='<li><a href="#introduction">Introduction</a></li> <li><a href="#motivation">Motivation</a></li>',L,m,U="Introduction",k,p,G="I am an absolute beginner with electronics. So I can’t really tell <em>exactly</em> how ambitious this project really is for the time that we are given and my skill level. So the scope of it is variable. I will try to keep the minimum level for the project small enough that it is somewhat realistic for me to achieve. If it turns out that there’s time to do a little more, it should be straightforward to spend that time adding a feature or two.",T,d,Y="At a minimum:",H,c,B="<li>A controller for each hand, with flex sensors (or a functional equivalent) on each finger and the ability to send this data to a nearby computer with low latency.</li>",M,v,E="Additionally:",j,w,J="<li>Ability to detect the independend bends of the knuckles the fingers</li> <li>Positional tracking</li> <li>Ability to detect splay of the fingers</li>",P,x,K="Motivation",q,b,N="For quite a few years I’ve dreamed of being able to interact with digital creative tools as naturally and gesturally as I can with something like clay. I want to be able to push and pull and grab and throw particles and vertices, and I want the experience of building muscle memory with gestures, so that with enough practice I can work as fast as I can think.",A,C,O='I thought for quite a while that this wasn’t currently attainable for me, so it remained a dream. Then I came across <a href="https://github.com/LucidVR/lucidgloves" rel="nofollow">LucidVR</a>, an open-source do-it-yourself VR glove project. It showed me that it was possible, and I soon saw quite a few other DIY gloves online. I considered following the tutorial for the LucidGloves but wanted to wait until the tutorial for the next prototype was released.',R,y,Q="It’s been over year, and we’re all still waiting for the official tutorial. The parts list and bare-bones instructions have been released, but I don’t trust my technical skills in following them.",V,I,W="The Digital Fabrication minor presents the perfect opportunity to finally attempt to make these controller gloves. It does not necessarily mean following the aforementioned instructions. Haptics aren’t that important to me, for example. And it may be the wrong direction for me in other ways, though I don’t know what those ways are. I am reliant on my teachers and classmates to point me in the right direction.";return{c(){u=n("p"),u.textContent=S,_=s(),h=n("h3"),h.textContent=z,g=s(),f=n("ul"),f.innerHTML=D,L=s(),m=n("h2"),m.textContent=U,k=s(),p=n("p"),p.innerHTML=G,T=s(),d=n("p"),d.textContent=Y,H=s(),c=n("ul"),c.innerHTML=B,M=s(),v=n("p"),v.textContent=E,j=s(),w=n("ul"),w.innerHTML=J,P=s(),x=n("h2"),x.textContent=K,q=s(),b=n("p"),b.textContent=N,A=s(),C=n("p"),C.innerHTML=O,R=s(),y=n("p"),y.textContent=Q,V=s(),I=n("p"),I.textContent=W},l(t){u=a(t,"P",{"data-svelte-h":!0}),o(u)!=="svelte-1z0jnix"&&(u.textContent=S),_=r(t),h=a(t,"H3",{"data-svelte-h":!0}),o(h)!=="svelte-sbwzft"&&(h.textContent=z),g=r(t),f=a(t,"UL",{"data-svelte-h":!0}),o(f)!=="svelte-1sjfl64"&&(f.innerHTML=D),L=r(t),m=a(t,"H2",{"data-svelte-h":!0}),o(m)!=="svelte-1ukekoe"&&(m.textContent=U),k=r(t),p=a(t,"P",{"data-svelte-h":!0}),o(p)!=="svelte-1e4sat8"&&(p.innerHTML=G),T=r(t),d=a(t,"P",{"data-svelte-h":!0}),o(d)!=="svelte-iwd1nw"&&(d.textContent=Y),H=r(t),c=a(t,"UL",{"data-svelte-h":!0}),o(c)!=="svelte-1q6kn2j"&&(c.innerHTML=B),M=r(t),v=a(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-7o8o98"&&(v.textContent=E),j=r(t),w=a(t,"UL",{"data-svelte-h":!0}),o(w)!=="svelte-1g1i763"&&(w.innerHTML=J),P=r(t),x=a(t,"H2",{"data-svelte-h":!0}),o(x)!=="svelte-19l56be"&&(x.textContent=K),q=r(t),b=a(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-fn95sw"&&(b.textContent=N),A=r(t),C=a(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-10gtzb9"&&(C.innerHTML=O),R=r(t),y=a(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-f2uox"&&(y.textContent=Q),V=r(t),I=a(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-ud8xqf"&&(I.textContent=W)},m(t,e){l(t,u,e),l(t,_,e),l(t,h,e),l(t,g,e),l(t,f,e),l(t,L,e),l(t,m,e),l(t,k,e),l(t,p,e),l(t,T,e),l(t,d,e),l(t,H,e),l(t,c,e),l(t,M,e),l(t,v,e),l(t,j,e),l(t,w,e),l(t,P,e),l(t,x,e),l(t,q,e),l(t,b,e),l(t,A,e),l(t,C,e),l(t,R,e),l(t,y,e),l(t,V,e),l(t,I,e)},p:F,i:F,o:F,d(t){t&&(i(u),i(_),i(h),i(g),i(f),i(L),i(m),i(k),i(p),i(T),i(d),i(H),i(c),i(M),i(v),i(j),i(w),i(P),i(x),i(q),i(b),i(A),i(C),i(R),i(y),i(V),i(I))}}}const nt={title:"Glove Controllers",date:"2024-01-18",description:"The final project for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication","long-form"],cover:["gloves_sketch.jpg"]};class at extends ${constructor(u){super(),tt(this,u,null,et,Z,{})}}export{at as default,nt as metadata};
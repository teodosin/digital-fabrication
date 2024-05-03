import{s as oe,e as n,a,H as re,c as s,g as r,b as o,j as ue,k as he,h as l,f as u,d as f,i,n as Tt}from"./scheduler.VDxU6aNK.js";import{S as fe,i as pe}from"./index.CMIy7L5C.js";function ce(se){let h,Ht="Table of Contents",U,p,It='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#concept--modeling">Concept &amp; Modeling</a></li> <li><a href="#printing">Printing</a></li> <li><a href="#molding">Molding</a></li> <li><a href="#casting">Casting</a></li>',Z,c,kt="Assignment",K,m,W,ae=`<code class="language-undefined">* Review the safety data sheets for at least two of labs molding and casting materials.
* Make and compare test casts with each of them.
* Design a 3D mold around the stock and tooling that you&#39;ll be using.
* 3D print it using FDM printers
* Use it to cast parts.
* Include a hero shot and source files of your design in your documentation.
* Submit a link to your assignment page here.</code>`,Y,d,Lt="Group",Q,v,Pt='This week it was my turn to handle the group assignment page. <a href="fablab-11-group">Here it is.</a>',V,x,Gt="Concept & Modeling",X,C,jt='I went through many options for what to do for this assignment. It was too early still to try to make a casing or anything practical for my <a href="fablab-00">final project</a>. Decided to make a gear for the as of yet hypothetical card scanner project which I made the board for during <a href="fablab-09">output devices week</a>.',$,w,St="I did not know what the idiomatic or proper way was to attach things to the motor axle. Since this was just a practice project for molding and casting, and I wasn’t actually making the scanner machine yet, I didn’t worry too much about it.",tt,b,At="This time I went with Blender instead of Ondsel for the modeling. Getting a simple procedural gear setup was much simpler here than it would’ve been in Ondsel/FreeCAD.",et,g,qt,lt,_,Dt="The process begins with a <code>Star</code> node, which creates a star shaped curve.",it,y,Ft,nt,M,zt="The <code>Fillet Curve</code> node then trims the sharp edges of the star and creates the gear shape.",st,T,Et="A small <code>Curve Circle</code> node creates the hole for the motor axle. Joining the fillet and circle outputs with a <code>Join Geometry</code> and feeding that to a <code>Fill Curve</code> then turns the curves into a mesh and correctly assumes that the inner circle should be empty.",at,H,Nt,ot,I,Jt="That is the entire node setup for the gear (without thickness). It could be even simpler, without the multiply, but I added that to make setting the fillet value easier because its value is too small to be visible on the node itself.",rt,k,Rt,ut,L,Bt="Now for the mold mold. The casing into which the rubber mold will be cast.",ht,P,Ot="Start from a <code>Grid</code> from which you <code>Extrude Mesh</code>, but with no offset. The <code>Extrude Mesh</code> node has handy outputs with which you can select the top or side faces of the new mesh. This can be used to selectively scale only the top face of the extrusion with <code>Scale Elements</code>, which effectively allows us to inset the face. Blender doesn’t have an inset node, so this was a simple workaround for that.",ft,G,Ut,pt,j,Zt="We can also utilise the side selection socket to extrude the walls of the box.",ct,S,Kt,mt,A,Wt="Chaining these extrusions and scale elements also makes creating the inner groove simple.",dt,q,Yt,vt,D,Qt="A boolean group input can be used with an <code>Index Switch</code> to easily toggle between two values. I needed this to be able to invert the groove in the mold for the other half. I then collapsed the entire node network into a <code>Node Group</code> so I could reuse it.",xt,F,Vt,Ct,z,Xt="The entire node network you saw before, along with the index switch stuff had been collapsed into a NodeGroup and copied once, just with the groove inversion set. It’s small in the image, but you can see how in the two copies, one groove is inverted and the other is not.",wt,E,$t,bt,N,te="I went back to make the boxes narrower by tweaking a couple parameters. No point in wasting all that material.",gt,J,ee='The source .blend and .stl files are available, at the time of writing, through <a href="https://1drv.ms/f/s!AsIbu0Zh1uJNiYhLAK8lIZjRifk8xg?e=yC4wFI" rel="nofollow">this link</a>.',_t,R,le="Printing",yt,B,ie="Molding",Mt,O,ne="Casting";return{c(){h=n("h3"),h.textContent=Ht,U=a(),p=n("ul"),p.innerHTML=It,Z=a(),c=n("h1"),c.textContent=kt,K=a(),m=n("pre"),W=new re(!1),Y=a(),d=n("h1"),d.textContent=Lt,Q=a(),v=n("p"),v.innerHTML=Pt,V=a(),x=n("h1"),x.textContent=Gt,X=a(),C=n("p"),C.innerHTML=jt,$=a(),w=n("p"),w.textContent=St,tt=a(),b=n("p"),b.textContent=At,et=a(),g=n("img"),lt=a(),_=n("p"),_.innerHTML=Dt,it=a(),y=n("img"),nt=a(),M=n("p"),M.innerHTML=zt,st=a(),T=n("p"),T.innerHTML=Et,at=a(),H=n("img"),ot=a(),I=n("p"),I.textContent=Jt,rt=a(),k=n("img"),ut=a(),L=n("p"),L.textContent=Bt,ht=a(),P=n("p"),P.innerHTML=Ot,ft=a(),G=n("img"),pt=a(),j=n("p"),j.textContent=Zt,ct=a(),S=n("img"),mt=a(),A=n("p"),A.textContent=Wt,dt=a(),q=n("img"),vt=a(),D=n("p"),D.innerHTML=Qt,xt=a(),F=n("img"),Ct=a(),z=n("p"),z.textContent=Xt,wt=a(),E=n("img"),bt=a(),N=n("p"),N.textContent=te,gt=a(),J=n("p"),J.innerHTML=ee,_t=a(),R=n("h1"),R.textContent=le,yt=a(),B=n("h1"),B.textContent=ie,Mt=a(),O=n("h1"),O.textContent=ne,this.h()},l(t){h=s(t,"H3",{"data-svelte-h":!0}),r(h)!=="svelte-sbwzft"&&(h.textContent=Ht),U=o(t),p=s(t,"UL",{"data-svelte-h":!0}),r(p)!=="svelte-j18ky8"&&(p.innerHTML=It),Z=o(t),c=s(t,"H1",{"data-svelte-h":!0}),r(c)!=="svelte-g9rspt"&&(c.textContent=kt),K=o(t),m=s(t,"PRE",{class:!0});var e=ue(m);W=he(e,!1),e.forEach(l),Y=o(t),d=s(t,"H1",{"data-svelte-h":!0}),r(d)!=="svelte-kxioer"&&(d.textContent=Lt),Q=o(t),v=s(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-rx8ccp"&&(v.innerHTML=Pt),V=o(t),x=s(t,"H1",{"data-svelte-h":!0}),r(x)!=="svelte-ez44ox"&&(x.textContent=Gt),X=o(t),C=s(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1cbywzm"&&(C.innerHTML=jt),$=o(t),w=s(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-153tcmj"&&(w.textContent=St),tt=o(t),b=s(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-iqbf59"&&(b.textContent=At),et=o(t),g=s(t,"IMG",{src:!0,alt:!0}),lt=o(t),_=s(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1psr0bn"&&(_.innerHTML=Dt),it=o(t),y=s(t,"IMG",{src:!0,alt:!0}),nt=o(t),M=s(t,"P",{"data-svelte-h":!0}),r(M)!=="svelte-nouph1"&&(M.innerHTML=zt),st=o(t),T=s(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1izicpc"&&(T.innerHTML=Et),at=o(t),H=s(t,"IMG",{src:!0,alt:!0}),ot=o(t),I=s(t,"P",{"data-svelte-h":!0}),r(I)!=="svelte-ngv3rw"&&(I.textContent=Jt),rt=o(t),k=s(t,"IMG",{src:!0,alt:!0}),ut=o(t),L=s(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-jsn6s8"&&(L.textContent=Bt),ht=o(t),P=s(t,"P",{"data-svelte-h":!0}),r(P)!=="svelte-29y9ak"&&(P.innerHTML=Ot),ft=o(t),G=s(t,"IMG",{src:!0,alt:!0}),pt=o(t),j=s(t,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1vxczls"&&(j.textContent=Zt),ct=o(t),S=s(t,"IMG",{src:!0,alt:!0}),mt=o(t),A=s(t,"P",{"data-svelte-h":!0}),r(A)!=="svelte-tf7afu"&&(A.textContent=Wt),dt=o(t),q=s(t,"IMG",{src:!0,alt:!0}),vt=o(t),D=s(t,"P",{"data-svelte-h":!0}),r(D)!=="svelte-5gf8g0"&&(D.innerHTML=Qt),xt=o(t),F=s(t,"IMG",{src:!0,alt:!0}),Ct=o(t),z=s(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-sbvua0"&&(z.textContent=Xt),wt=o(t),E=s(t,"IMG",{src:!0,alt:!0}),bt=o(t),N=s(t,"P",{"data-svelte-h":!0}),r(N)!=="svelte-6o5ppx"&&(N.textContent=te),gt=o(t),J=s(t,"P",{"data-svelte-h":!0}),r(J)!=="svelte-1lxtsny"&&(J.innerHTML=ee),_t=o(t),R=s(t,"H1",{"data-svelte-h":!0}),r(R)!=="svelte-1819b2h"&&(R.textContent=le),yt=o(t),B=s(t,"H1",{"data-svelte-h":!0}),r(B)!=="svelte-fxeqiq"&&(B.textContent=ie),Mt=o(t),O=s(t,"H1",{"data-svelte-h":!0}),r(O)!=="svelte-j2pqdx"&&(O.textContent=ne),this.h()},h(){W.a=null,u(m,"class","language-undefined"),f(g.src,qt="fab11/02.png")||u(g,"src",qt),u(g,"alt","sorry, no alt found"),f(y.src,Ft="fab11/03.png")||u(y,"src",Ft),u(y,"alt","sorry, no alt found"),f(H.src,Nt="fab11/01.png")||u(H,"src",Nt),u(H,"alt","sorry, no alt found"),f(k.src,Rt="fab11/04.png")||u(k,"src",Rt),u(k,"alt","sorry, no alt found"),f(G.src,Ut="fab11/05.png")||u(G,"src",Ut),u(G,"alt","sorry, no alt found"),f(S.src,Kt="fab11/06.png")||u(S,"src",Kt),u(S,"alt","sorry, no alt found"),f(q.src,Yt="fab11/07.png")||u(q,"src",Yt),u(q,"alt","sorry, no alt found"),f(F.src,Vt="fab11/08.png")||u(F,"src",Vt),u(F,"alt","sorry, no alt found"),f(E.src,$t="fab11/09.png")||u(E,"src",$t),u(E,"alt","sorry, no alt found")},m(t,e){i(t,h,e),i(t,U,e),i(t,p,e),i(t,Z,e),i(t,c,e),i(t,K,e),i(t,m,e),W.m(ae,m),i(t,Y,e),i(t,d,e),i(t,Q,e),i(t,v,e),i(t,V,e),i(t,x,e),i(t,X,e),i(t,C,e),i(t,$,e),i(t,w,e),i(t,tt,e),i(t,b,e),i(t,et,e),i(t,g,e),i(t,lt,e),i(t,_,e),i(t,it,e),i(t,y,e),i(t,nt,e),i(t,M,e),i(t,st,e),i(t,T,e),i(t,at,e),i(t,H,e),i(t,ot,e),i(t,I,e),i(t,rt,e),i(t,k,e),i(t,ut,e),i(t,L,e),i(t,ht,e),i(t,P,e),i(t,ft,e),i(t,G,e),i(t,pt,e),i(t,j,e),i(t,ct,e),i(t,S,e),i(t,mt,e),i(t,A,e),i(t,dt,e),i(t,q,e),i(t,vt,e),i(t,D,e),i(t,xt,e),i(t,F,e),i(t,Ct,e),i(t,z,e),i(t,wt,e),i(t,E,e),i(t,bt,e),i(t,N,e),i(t,gt,e),i(t,J,e),i(t,_t,e),i(t,R,e),i(t,yt,e),i(t,B,e),i(t,Mt,e),i(t,O,e)},p:Tt,i:Tt,o:Tt,d(t){t&&(l(h),l(U),l(p),l(Z),l(c),l(K),l(m),l(Y),l(d),l(Q),l(v),l(V),l(x),l(X),l(C),l($),l(w),l(tt),l(b),l(et),l(g),l(lt),l(_),l(it),l(y),l(nt),l(M),l(st),l(T),l(at),l(H),l(ot),l(I),l(rt),l(k),l(ut),l(L),l(ht),l(P),l(ft),l(G),l(pt),l(j),l(ct),l(S),l(mt),l(A),l(dt),l(q),l(vt),l(D),l(xt),l(F),l(Ct),l(z),l(wt),l(E),l(bt),l(N),l(gt),l(J),l(_t),l(R),l(yt),l(B),l(Mt),l(O))}}}const ve={title:"Molding & Casting",date:"2024-04-30",description:"The eleventh assignment.",categories:["projects"],tags:["digital-fabrication"],cover:"fab11/01.png"};class xe extends fe{constructor(h){super(),pe(this,h,null,ce,oe,{})}}export{xe as default,ve as metadata};

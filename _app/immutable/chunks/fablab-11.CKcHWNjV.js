import{s as Ne,e as s,a,H as Je,c as n,g as r,b as o,j as Oe,k as Re,h as l,f as u,d as f,i,n as Kt}from"./scheduler.VDxU6aNK.js";import{S as Be,i as Ue}from"./index.CMIy7L5C.js";function Ze(qe){let m,Wt="Table of Contents",lt,p,Yt='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#concept--modeling">Concept &amp; Modeling</a></li> <li><a href="#printing">Printing</a></li> <li><a href="#molding">Molding</a></li>',it,c,Qt="Assignment",st,h,nt,Ee=`<code class="language-undefined">* Review the safety data sheets for at least two of labs molding and casting materials.
* Make and compare test casts with each of them.
* Design a 3D mold around the stock and tooling that you&#39;ll be using.
* 3D print it using FDM printers
* Use it to cast parts.
* Include a hero shot and source files of your design in your documentation.
* Submit a link to your assignment page here.</code>`,at,v,Vt="Group",ot,d,Xt='This week it was my turn to handle the group assignment page. <a href="fablab-11-group">Here it is.</a>',ut,x,$t="Concept & Modeling",rt,g,te='I went through many options for what to do for this assignment. It was too early still to try to make a casing or anything practical for my <a href="fablab-00">final project</a>. Decided to make a gear for the as of yet hypothetical card scanner project which I made the board for during <a href="fablab-09">output devices week</a>.',ft,_,ee="I did not know what the idiomatic or proper way was to attach things to the motor axle. Since this was just a practice project for molding and casting, and I wasn’t actually making the scanner machine yet, I didn’t worry too much about it.",mt,C,le="This time I went with Blender instead of Ondsel for the modeling. Getting a simple procedural gear setup was much simpler here than it would’ve been in Ondsel/FreeCAD.",pt,b,ie,ct,w,se="The process begins with a <code>Star</code> node, which creates a star shaped curve.",ht,y,ne,vt,M,ae="The <code>Fillet Curve</code> node then trims the sharp edges of the star and creates the gear shape.",dt,I,oe="A small <code>Curve Circle</code> node creates the hole for the motor axle. Joining the fillet and circle outputs with a <code>Join Geometry</code> and feeding that to a <code>Fill Curve</code> then turns the curves into a mesh and correctly assumes that the inner circle should be empty.",xt,T,ue,gt,H,re="That is the entire node setup for the gear (without thickness). It could be even simpler, without the multiply, but I added that to make setting the fillet value easier because its value is too small to be visible on the node itself.",_t,k,fe,Ct,G,me="Now for the mold mold. The casing into which the rubber mold will be cast.",bt,P,pe="Start from a <code>Grid</code> from which you <code>Extrude Mesh</code>, but with no offset. The <code>Extrude Mesh</code> node has handy outputs with which you can select the top or side faces of the new mesh. This can be used to selectively scale only the top face of the extrusion with <code>Scale Elements</code>, which effectively allows us to inset the face. Blender doesn’t have an inset node, so this was a simple workaround for that.",wt,L,ce,yt,j,he="We can also utilise the side selection socket to extrude the walls of the box.",Mt,A,ve,It,S,de="Chaining these extrusions and scale elements also makes creating the inner groove simple.",Tt,F,xe,Ht,z,ge="A boolean group input can be used with an <code>Index Switch</code> to easily toggle between two values. I needed this to be able to invert the groove in the mold for the other half. I then collapsed the entire node network into a <code>Node Group</code> so I could reuse it.",kt,D,_e,Gt,q,Ce="The entire node network you saw before, along with the index switch stuff had been collapsed into a NodeGroup and copied once, just with the groove inversion set. It’s small in the image, but you can see how in the two copies, one groove is inverted and the other is not.",Pt,E,be,Lt,N,we="I went back to make the boxes narrower by tweaking a couple parameters. No point in wasting all that material.",jt,J,ye='The source .blend and .stl files are available, at the time of writing, through <a href="https://1drv.ms/f/s!AsIbu0Zh1uJNiYhLAK8lIZjRifk8xg?e=yC4wFI" rel="nofollow">this link</a>.',At,O,Me="Printing",St,K,Ie,Ft,W,Te,zt,Y,He,Dt,R,ke="The attempted print on the Prusa Mk4 was a failure. I moved to the Prusa mini.",qt,Q,Ge,Et,V,Pe,Nt,X,Le,Jt,B,je="Finished printed molds.",Ot,$,Ae,Rt,U,Se="Molding",Bt,Z,Fe="I had left the rest of this assignment to the end of the course, and unfortunately, I couldn’t arrange the time to complete the casting. It’s the same process as the molding, which I barely managed to complete. On the day I worked on this, the materials had almost run out, so I only had enough for one mold. At least it was enough to see the casting and curing process complete once.",Ut,tt,ze,Zt,et,De;return{c(){m=s("h3"),m.textContent=Wt,lt=a(),p=s("ul"),p.innerHTML=Yt,it=a(),c=s("h1"),c.textContent=Qt,st=a(),h=s("pre"),nt=new Je(!1),at=a(),v=s("h1"),v.textContent=Vt,ot=a(),d=s("p"),d.innerHTML=Xt,ut=a(),x=s("h1"),x.textContent=$t,rt=a(),g=s("p"),g.innerHTML=te,ft=a(),_=s("p"),_.textContent=ee,mt=a(),C=s("p"),C.textContent=le,pt=a(),b=s("img"),ct=a(),w=s("p"),w.innerHTML=se,ht=a(),y=s("img"),vt=a(),M=s("p"),M.innerHTML=ae,dt=a(),I=s("p"),I.innerHTML=oe,xt=a(),T=s("img"),gt=a(),H=s("p"),H.textContent=re,_t=a(),k=s("img"),Ct=a(),G=s("p"),G.textContent=me,bt=a(),P=s("p"),P.innerHTML=pe,wt=a(),L=s("img"),yt=a(),j=s("p"),j.textContent=he,Mt=a(),A=s("img"),It=a(),S=s("p"),S.textContent=de,Tt=a(),F=s("img"),Ht=a(),z=s("p"),z.innerHTML=ge,kt=a(),D=s("img"),Gt=a(),q=s("p"),q.textContent=Ce,Pt=a(),E=s("img"),Lt=a(),N=s("p"),N.textContent=we,jt=a(),J=s("p"),J.innerHTML=ye,At=a(),O=s("h1"),O.textContent=Me,St=a(),K=s("img"),Ft=a(),W=s("img"),zt=a(),Y=s("img"),Dt=a(),R=s("p"),R.textContent=ke,qt=a(),Q=s("img"),Et=a(),V=s("img"),Nt=a(),X=s("img"),Jt=a(),B=s("p"),B.textContent=je,Ot=a(),$=s("img"),Rt=a(),U=s("h1"),U.textContent=Se,Bt=a(),Z=s("p"),Z.textContent=Fe,Ut=a(),tt=s("img"),Zt=a(),et=s("img"),this.h()},l(t){m=n(t,"H3",{"data-svelte-h":!0}),r(m)!=="svelte-sbwzft"&&(m.textContent=Wt),lt=o(t),p=n(t,"UL",{"data-svelte-h":!0}),r(p)!=="svelte-c6sr31"&&(p.innerHTML=Yt),it=o(t),c=n(t,"H1",{"data-svelte-h":!0}),r(c)!=="svelte-g9rspt"&&(c.textContent=Qt),st=o(t),h=n(t,"PRE",{class:!0});var e=Oe(h);nt=Re(e,!1),e.forEach(l),at=o(t),v=n(t,"H1",{"data-svelte-h":!0}),r(v)!=="svelte-kxioer"&&(v.textContent=Vt),ot=o(t),d=n(t,"P",{"data-svelte-h":!0}),r(d)!=="svelte-rx8ccp"&&(d.innerHTML=Xt),ut=o(t),x=n(t,"H1",{"data-svelte-h":!0}),r(x)!=="svelte-ez44ox"&&(x.textContent=$t),rt=o(t),g=n(t,"P",{"data-svelte-h":!0}),r(g)!=="svelte-1cbywzm"&&(g.innerHTML=te),ft=o(t),_=n(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-153tcmj"&&(_.textContent=ee),mt=o(t),C=n(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-iqbf59"&&(C.textContent=le),pt=o(t),b=n(t,"IMG",{src:!0,alt:!0}),ct=o(t),w=n(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-1psr0bn"&&(w.innerHTML=se),ht=o(t),y=n(t,"IMG",{src:!0,alt:!0}),vt=o(t),M=n(t,"P",{"data-svelte-h":!0}),r(M)!=="svelte-nouph1"&&(M.innerHTML=ae),dt=o(t),I=n(t,"P",{"data-svelte-h":!0}),r(I)!=="svelte-1izicpc"&&(I.innerHTML=oe),xt=o(t),T=n(t,"IMG",{src:!0,alt:!0}),gt=o(t),H=n(t,"P",{"data-svelte-h":!0}),r(H)!=="svelte-ngv3rw"&&(H.textContent=re),_t=o(t),k=n(t,"IMG",{src:!0,alt:!0}),Ct=o(t),G=n(t,"P",{"data-svelte-h":!0}),r(G)!=="svelte-jsn6s8"&&(G.textContent=me),bt=o(t),P=n(t,"P",{"data-svelte-h":!0}),r(P)!=="svelte-29y9ak"&&(P.innerHTML=pe),wt=o(t),L=n(t,"IMG",{src:!0,alt:!0}),yt=o(t),j=n(t,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1vxczls"&&(j.textContent=he),Mt=o(t),A=n(t,"IMG",{src:!0,alt:!0}),It=o(t),S=n(t,"P",{"data-svelte-h":!0}),r(S)!=="svelte-tf7afu"&&(S.textContent=de),Tt=o(t),F=n(t,"IMG",{src:!0,alt:!0}),Ht=o(t),z=n(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-5gf8g0"&&(z.innerHTML=ge),kt=o(t),D=n(t,"IMG",{src:!0,alt:!0}),Gt=o(t),q=n(t,"P",{"data-svelte-h":!0}),r(q)!=="svelte-sbvua0"&&(q.textContent=Ce),Pt=o(t),E=n(t,"IMG",{src:!0,alt:!0}),Lt=o(t),N=n(t,"P",{"data-svelte-h":!0}),r(N)!=="svelte-6o5ppx"&&(N.textContent=we),jt=o(t),J=n(t,"P",{"data-svelte-h":!0}),r(J)!=="svelte-1lxtsny"&&(J.innerHTML=ye),At=o(t),O=n(t,"H1",{"data-svelte-h":!0}),r(O)!=="svelte-1819b2h"&&(O.textContent=Me),St=o(t),K=n(t,"IMG",{src:!0}),Ft=o(t),W=n(t,"IMG",{src:!0}),zt=o(t),Y=n(t,"IMG",{src:!0}),Dt=o(t),R=n(t,"P",{"data-svelte-h":!0}),r(R)!=="svelte-l27nvb"&&(R.textContent=ke),qt=o(t),Q=n(t,"IMG",{src:!0}),Et=o(t),V=n(t,"IMG",{src:!0}),Nt=o(t),X=n(t,"IMG",{src:!0}),Jt=o(t),B=n(t,"P",{"data-svelte-h":!0}),r(B)!=="svelte-zywpu1"&&(B.textContent=je),Ot=o(t),$=n(t,"IMG",{src:!0}),Rt=o(t),U=n(t,"H1",{"data-svelte-h":!0}),r(U)!=="svelte-fxeqiq"&&(U.textContent=Se),Bt=o(t),Z=n(t,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-dhhmey"&&(Z.textContent=Fe),Ut=o(t),tt=n(t,"IMG",{src:!0}),Zt=o(t),et=n(t,"IMG",{src:!0}),this.h()},h(){nt.a=null,u(h,"class","language-undefined"),f(b.src,ie="fab11/02.png")||u(b,"src",ie),u(b,"alt","sorry, no alt found"),f(y.src,ne="fab11/03.png")||u(y,"src",ne),u(y,"alt","sorry, no alt found"),f(T.src,ue="fab11/01.png")||u(T,"src",ue),u(T,"alt","sorry, no alt found"),f(k.src,fe="fab11/04.png")||u(k,"src",fe),u(k,"alt","sorry, no alt found"),f(L.src,ce="fab11/05.png")||u(L,"src",ce),u(L,"alt","sorry, no alt found"),f(A.src,ve="fab11/06.png")||u(A,"src",ve),u(A,"alt","sorry, no alt found"),f(F.src,xe="fab11/07.png")||u(F,"src",xe),u(F,"alt","sorry, no alt found"),f(D.src,_e="fab11/08.png")||u(D,"src",_e),u(D,"alt","sorry, no alt found"),f(E.src,be="fab11/09.png")||u(E,"src",be),u(E,"alt","sorry, no alt found"),f(K.src,Ie="fab11/12.jpg")||u(K,"src",Ie),f(W.src,Te="fab11/13.jpg")||u(W,"src",Te),f(Y.src,He="fab11/14.jpg")||u(Y,"src",He),f(Q.src,Ge="fab11/15.jpg")||u(Q,"src",Ge),f(V.src,Pe="fab11/16.jpg")||u(V,"src",Pe),f(X.src,Le="fab11/17.jpg")||u(X,"src",Le),f($.src,Ae="fab11/18.jpg")||u($,"src",Ae),f(tt.src,ze="fab11/20.jpg")||u(tt,"src",ze),f(et.src,De="fab11/21.jpg")||u(et,"src",De)},m(t,e){i(t,m,e),i(t,lt,e),i(t,p,e),i(t,it,e),i(t,c,e),i(t,st,e),i(t,h,e),nt.m(Ee,h),i(t,at,e),i(t,v,e),i(t,ot,e),i(t,d,e),i(t,ut,e),i(t,x,e),i(t,rt,e),i(t,g,e),i(t,ft,e),i(t,_,e),i(t,mt,e),i(t,C,e),i(t,pt,e),i(t,b,e),i(t,ct,e),i(t,w,e),i(t,ht,e),i(t,y,e),i(t,vt,e),i(t,M,e),i(t,dt,e),i(t,I,e),i(t,xt,e),i(t,T,e),i(t,gt,e),i(t,H,e),i(t,_t,e),i(t,k,e),i(t,Ct,e),i(t,G,e),i(t,bt,e),i(t,P,e),i(t,wt,e),i(t,L,e),i(t,yt,e),i(t,j,e),i(t,Mt,e),i(t,A,e),i(t,It,e),i(t,S,e),i(t,Tt,e),i(t,F,e),i(t,Ht,e),i(t,z,e),i(t,kt,e),i(t,D,e),i(t,Gt,e),i(t,q,e),i(t,Pt,e),i(t,E,e),i(t,Lt,e),i(t,N,e),i(t,jt,e),i(t,J,e),i(t,At,e),i(t,O,e),i(t,St,e),i(t,K,e),i(t,Ft,e),i(t,W,e),i(t,zt,e),i(t,Y,e),i(t,Dt,e),i(t,R,e),i(t,qt,e),i(t,Q,e),i(t,Et,e),i(t,V,e),i(t,Nt,e),i(t,X,e),i(t,Jt,e),i(t,B,e),i(t,Ot,e),i(t,$,e),i(t,Rt,e),i(t,U,e),i(t,Bt,e),i(t,Z,e),i(t,Ut,e),i(t,tt,e),i(t,Zt,e),i(t,et,e)},p:Kt,i:Kt,o:Kt,d(t){t&&(l(m),l(lt),l(p),l(it),l(c),l(st),l(h),l(at),l(v),l(ot),l(d),l(ut),l(x),l(rt),l(g),l(ft),l(_),l(mt),l(C),l(pt),l(b),l(ct),l(w),l(ht),l(y),l(vt),l(M),l(dt),l(I),l(xt),l(T),l(gt),l(H),l(_t),l(k),l(Ct),l(G),l(bt),l(P),l(wt),l(L),l(yt),l(j),l(Mt),l(A),l(It),l(S),l(Tt),l(F),l(Ht),l(z),l(kt),l(D),l(Gt),l(q),l(Pt),l(E),l(Lt),l(N),l(jt),l(J),l(At),l(O),l(St),l(K),l(Ft),l(W),l(zt),l(Y),l(Dt),l(R),l(qt),l(Q),l(Et),l(V),l(Nt),l(X),l(Jt),l(B),l(Ot),l($),l(Rt),l(U),l(Bt),l(Z),l(Ut),l(tt),l(Zt),l(et))}}}const Ye={title:"Molding & Casting",date:"2024-04-30",description:"The eleventh assignment.",categories:["projects"],tags:["digital-fabrication"],cover:"fab11/01.png"};class Qe extends Be{constructor(m){super(),Ue(this,m,null,Ze,Ne,{})}}export{Qe as default,Ye as metadata};

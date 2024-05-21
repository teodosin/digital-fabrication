import{s as Be,e as n,a,H as ze,c as s,g as u,b as o,j as Ee,k as Fe,h as l,f as r,d as h,i,n as Wt}from"./scheduler.VDxU6aNK.js";import{S as Oe,i as Re}from"./index.CMIy7L5C.js";function Ue(qe){let p,Xt="Table of Contents",et,m,Zt='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#milling">Milling</a></li> <li><a href="#soldering">Soldering</a></li> <li><a href="#software-test">Software Test</a></li> <li><a href="#soldering-detour">Soldering Detour</a></li>',lt,f,Jt="Assignment",it,d,Kt="This week it was time to get started with the basics of electronics: milling a PCB from scratch and soldering on components.",nt,c,st,Ae=`<code class="language-undefined">* Demonstrate understanding of PCB production technology by completing the group assignment.
* Mill a circuit board from existing design using Fablab equipment.
* Populate the board you made, solder all the parts using electronics workbenches at the Fablab.
* Upload basic code to the attached XIAO board to make sure if you can blink LED on your PCB and detect button pushes.
* Document your process on your documentation website with photos and screenshots.</code>`,at,g,Qt="Group",ot,v,Vt='For starters, here is our <a href="https://l-lu-u.gitlab.io/2024-digital-fabrication/weekly-assignments/week-06--group/" rel="nofollow">Group Assignment page</a>, courtesy of Lu Chen.',rt,b,Yt="Milling",ut,w,$t,ht,x,te="I took a plate from the stack that was prepared for us and headed on over to the <strong>Roland MDX-40</strong>. Our direct instruction was on the other machine, the SRM-20, but we were assured that the wiki would have all the necessary information. That turned out to be the case, for the most part. There were a lot of steps in the whole process, so I took a bit of time to orient myself.",pt,C,ee="I scrubbed the protective layer off the copper plate with the metal scrubber. I placed the double-sided tape on the opposite side and just in time I remembered to measure the plate before placing it inside the machine.",mt,_,le,ft,y,ie,dt,I,ne,ct,M,se="Preparing the tool paths went mostly according to the instructions. One step confused me, however. Generating the contours for the paths. Imagine my surprise when I saw this:",gt,T,ae,vt,j,oe="As I understood it, the particular tool for the engraving that was mentioned in the wiki wasn’t available at the lab. The lab was out of tool #1, so in it’s stead we were to use #3. I assumed we were also to replace #1 with #3 in all the settings. This was not the case. Leaving tool #1 in the relevant settings allowed the contours to get generated like they were supposed to.",bt,P,re,wt,k,ue="I luckily didn’t have serious further issues with the actual milling. The machine followed the paths and the drill holes were properly aligned. Before the cutting I did accidentally set the Z origin at the wrong step, causing the machine to drill in thin air. Got a slight chuckle out of me.",xt,S,he,Ct,H,pe,_t,G,me="When the cutting job was done, it turned out it wasn’t <em>quite</em> deep enough. The board remained fixed to the plate by a thin layer of material, and the drill holes also had that layer. They were easily removed by hand using the same drill tool.",yt,L,fe,It,D,de="Soldering",Mt,q,ce,Tt,A,ge="I considered, briefly, not putting in the rivets. I was very nervous to do so, as I didn’t want to ruin by board and to have to make another one. Eventually I begrudgingly decided I’d be doing myself a disservice by not practicing it, and went ahead. The rivets didn’t end up touching, but they were very close. The ones in the above picture weren’t even the ones that were closed. I was surprised by just how much the rivets changed shape when they were hammered in.",jt,B,ve="I practiced soldering a little bit on a scrap board and continued with my real board after lunch.",Pt,z,be,kt,E,we="Starting with the smallest components, moving upward.",St,F,xe,Ht,O,Ce="There were some hiccups during the process. One of the larger components that the chip would get attached to got soldered at a slight angle. It was just forgivable enough that the component could bend a bit to still accomodate the chip. Definitely a point of improvement for the future.",Gt,R,_e="All the circuits I tested with the multimeter seemed fine. It was time to head home and try it out.",Lt,U,ye,Dt,N,Ie="Software Test",qt,W,Me="With the board plugged into my PC, I proceeded with the rest of the instructions. I couldn’t find the board in my devices, and from researching online I found out I had misinterpreted the instruction to first hold the boot button and then plug the chip in with the USB. I did those separately. But it was important to plug it in <strong>while still holding the boot button</strong>. Not sure if I was the only one confused by that bit.",At,X,Te,Bt,Z,je="After trying to get the hello_tarantino script to work and only getting undefined behavior from the light and the button, it was pointed out to me that my board was missing a resistor. Delightful. I had soldered on all the components from my box, but hadn’t bothered to double-check the example board or the schematic.",zt,J,Pe="Soldering Detour",Et,K,ke="I got an extra resistor at the fablab and soldered it on.",Ft,Q,Se="Tested it out again back at home.",Ot,V,He="At first I thought it wasn’t working again. I had booted it up and uploaded <code>hello_tarantino.ino</code> to it, but the light was behaving weirdly. It went on an off not from when I pressed the button, but from when I tapped one of the corners of the chip with my finger.",Rt,Y,Ge="Removing the plug and plugging it back in, only without the boot button pressed, was more promising. Now the light got properly toggled when the big button was pressed.",Ut,$,Le,Nt,tt,De;return{c(){p=n("h3"),p.textContent=Xt,et=a(),m=n("ul"),m.innerHTML=Zt,lt=a(),f=n("h1"),f.textContent=Jt,it=a(),d=n("p"),d.textContent=Kt,nt=a(),c=n("pre"),st=new ze(!1),at=a(),g=n("h1"),g.textContent=Qt,ot=a(),v=n("p"),v.innerHTML=Vt,rt=a(),b=n("h1"),b.textContent=Yt,ut=a(),w=n("img"),ht=a(),x=n("p"),x.innerHTML=te,pt=a(),C=n("p"),C.textContent=ee,mt=a(),_=n("img"),ft=a(),y=n("img"),dt=a(),I=n("img"),ct=a(),M=n("p"),M.textContent=se,gt=a(),T=n("img"),vt=a(),j=n("p"),j.textContent=oe,bt=a(),P=n("img"),wt=a(),k=n("p"),k.textContent=ue,xt=a(),S=n("img"),Ct=a(),H=n("img"),_t=a(),G=n("p"),G.innerHTML=me,yt=a(),L=n("img"),It=a(),D=n("h1"),D.textContent=de,Mt=a(),q=n("img"),Tt=a(),A=n("p"),A.textContent=ge,jt=a(),B=n("p"),B.textContent=ve,Pt=a(),z=n("img"),kt=a(),E=n("p"),E.textContent=we,St=a(),F=n("img"),Ht=a(),O=n("p"),O.textContent=Ce,Gt=a(),R=n("p"),R.textContent=_e,Lt=a(),U=n("img"),Dt=a(),N=n("h1"),N.textContent=Ie,qt=a(),W=n("p"),W.innerHTML=Me,At=a(),X=n("img"),Bt=a(),Z=n("p"),Z.textContent=je,zt=a(),J=n("h1"),J.textContent=Pe,Et=a(),K=n("p"),K.textContent=ke,Ft=a(),Q=n("p"),Q.textContent=Se,Ot=a(),V=n("p"),V.innerHTML=He,Rt=a(),Y=n("p"),Y.textContent=Ge,Ut=a(),$=n("img"),Nt=a(),tt=n("img"),this.h()},l(t){p=s(t,"H3",{"data-svelte-h":!0}),u(p)!=="svelte-sbwzft"&&(p.textContent=Xt),et=o(t),m=s(t,"UL",{"data-svelte-h":!0}),u(m)!=="svelte-1fzcfls"&&(m.innerHTML=Zt),lt=o(t),f=s(t,"H1",{"data-svelte-h":!0}),u(f)!=="svelte-g9rspt"&&(f.textContent=Jt),it=o(t),d=s(t,"P",{"data-svelte-h":!0}),u(d)!=="svelte-lwggge"&&(d.textContent=Kt),nt=o(t),c=s(t,"PRE",{class:!0});var e=Ee(c);st=Fe(e,!1),e.forEach(l),at=o(t),g=s(t,"H1",{"data-svelte-h":!0}),u(g)!=="svelte-kxioer"&&(g.textContent=Qt),ot=o(t),v=s(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-1b8lhj5"&&(v.innerHTML=Vt),rt=o(t),b=s(t,"H1",{"data-svelte-h":!0}),u(b)!=="svelte-10znkaw"&&(b.textContent=Yt),ut=o(t),w=s(t,"IMG",{src:!0,alt:!0}),ht=o(t),x=s(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1nf1a6n"&&(x.innerHTML=te),pt=o(t),C=s(t,"P",{"data-svelte-h":!0}),u(C)!=="svelte-a5nm1"&&(C.textContent=ee),mt=o(t),_=s(t,"IMG",{src:!0,alt:!0}),ft=o(t),y=s(t,"IMG",{src:!0,alt:!0}),dt=o(t),I=s(t,"IMG",{src:!0,alt:!0}),ct=o(t),M=s(t,"P",{"data-svelte-h":!0}),u(M)!=="svelte-1pnsyju"&&(M.textContent=se),gt=o(t),T=s(t,"IMG",{src:!0,alt:!0}),vt=o(t),j=s(t,"P",{"data-svelte-h":!0}),u(j)!=="svelte-16xme2i"&&(j.textContent=oe),bt=o(t),P=s(t,"IMG",{src:!0,alt:!0}),wt=o(t),k=s(t,"P",{"data-svelte-h":!0}),u(k)!=="svelte-1nvkstp"&&(k.textContent=ue),xt=o(t),S=s(t,"IMG",{src:!0,alt:!0}),Ct=o(t),H=s(t,"IMG",{src:!0,alt:!0}),_t=o(t),G=s(t,"P",{"data-svelte-h":!0}),u(G)!=="svelte-42lhge"&&(G.innerHTML=me),yt=o(t),L=s(t,"IMG",{src:!0,alt:!0}),It=o(t),D=s(t,"H1",{"data-svelte-h":!0}),u(D)!=="svelte-rlms3v"&&(D.textContent=de),Mt=o(t),q=s(t,"IMG",{src:!0,alt:!0}),Tt=o(t),A=s(t,"P",{"data-svelte-h":!0}),u(A)!=="svelte-1sr3y5z"&&(A.textContent=ge),jt=o(t),B=s(t,"P",{"data-svelte-h":!0}),u(B)!=="svelte-dbo1je"&&(B.textContent=ve),Pt=o(t),z=s(t,"IMG",{src:!0,alt:!0}),kt=o(t),E=s(t,"P",{"data-svelte-h":!0}),u(E)!=="svelte-q2q335"&&(E.textContent=we),St=o(t),F=s(t,"IMG",{src:!0,alt:!0}),Ht=o(t),O=s(t,"P",{"data-svelte-h":!0}),u(O)!=="svelte-1tlw2as"&&(O.textContent=Ce),Gt=o(t),R=s(t,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1pjva9q"&&(R.textContent=_e),Lt=o(t),U=s(t,"IMG",{src:!0,alt:!0}),Dt=o(t),N=s(t,"H1",{"data-svelte-h":!0}),u(N)!=="svelte-1ib9n73"&&(N.textContent=Ie),qt=o(t),W=s(t,"P",{"data-svelte-h":!0}),u(W)!=="svelte-dskwoo"&&(W.innerHTML=Me),At=o(t),X=s(t,"IMG",{src:!0,alt:!0}),Bt=o(t),Z=s(t,"P",{"data-svelte-h":!0}),u(Z)!=="svelte-1w7th3k"&&(Z.textContent=je),zt=o(t),J=s(t,"H1",{"data-svelte-h":!0}),u(J)!=="svelte-ybfx8s"&&(J.textContent=Pe),Et=o(t),K=s(t,"P",{"data-svelte-h":!0}),u(K)!=="svelte-19nlqfi"&&(K.textContent=ke),Ft=o(t),Q=s(t,"P",{"data-svelte-h":!0}),u(Q)!=="svelte-wpzf1l"&&(Q.textContent=Se),Ot=o(t),V=s(t,"P",{"data-svelte-h":!0}),u(V)!=="svelte-c6f104"&&(V.innerHTML=He),Rt=o(t),Y=s(t,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-10v8nj2"&&(Y.textContent=Ge),Ut=o(t),$=s(t,"IMG",{src:!0,alt:!0}),Nt=o(t),tt=s(t,"IMG",{src:!0,alt:!0}),this.h()},h(){st.a=null,r(c,"class","language-undefined"),h(w.src,$t="fab4/01.jpg")||r(w,"src",$t),r(w,"alt","Sorry no alt"),h(_.src,le="fab4/02.jpg")||r(_,"src",le),r(_,"alt","Sorry no alt"),h(y.src,ie="fab4/03.jpg")||r(y,"src",ie),r(y,"alt","Sorry no alt"),h(I.src,ne="fab4/04.jpg")||r(I,"src",ne),r(I,"alt","Sorry no alt"),h(T.src,ae="fab4/05.jpg")||r(T,"src",ae),r(T,"alt","Sorry no alt"),h(P.src,re="fab4/06.jpg")||r(P,"src",re),r(P,"alt","Sorry no alt"),h(S.src,he="fab4/07.jpg")||r(S,"src",he),r(S,"alt","Sorry no alt"),h(H.src,pe="fab4/08.jpg")||r(H,"src",pe),r(H,"alt","Sorry no alt"),h(L.src,fe="fab4/09.jpg")||r(L,"src",fe),r(L,"alt","Sorry no alt"),h(q.src,ce="fab4/10.jpg")||r(q,"src",ce),r(q,"alt","Sorry no alt"),h(z.src,be="fab4/11.jpg")||r(z,"src",be),r(z,"alt","Sorry no alt"),h(F.src,xe="fab4/12.jpg")||r(F,"src",xe),r(F,"alt","Sorry no alt"),h(U.src,ye="fab4/14.jpg")||r(U,"src",ye),r(U,"alt","Sorry no alt"),h(X.src,Te="fab4/15.jpg")||r(X,"src",Te),r(X,"alt","Sorry no alt"),h($.src,Le="fab4/16.jpg")||r($,"src",Le),r($,"alt","sorry, no alt found"),h(tt.src,De="fab4/17.jpg")||r(tt,"src",De),r(tt,"alt","sorry, no alt found")},m(t,e){i(t,p,e),i(t,et,e),i(t,m,e),i(t,lt,e),i(t,f,e),i(t,it,e),i(t,d,e),i(t,nt,e),i(t,c,e),st.m(Ae,c),i(t,at,e),i(t,g,e),i(t,ot,e),i(t,v,e),i(t,rt,e),i(t,b,e),i(t,ut,e),i(t,w,e),i(t,ht,e),i(t,x,e),i(t,pt,e),i(t,C,e),i(t,mt,e),i(t,_,e),i(t,ft,e),i(t,y,e),i(t,dt,e),i(t,I,e),i(t,ct,e),i(t,M,e),i(t,gt,e),i(t,T,e),i(t,vt,e),i(t,j,e),i(t,bt,e),i(t,P,e),i(t,wt,e),i(t,k,e),i(t,xt,e),i(t,S,e),i(t,Ct,e),i(t,H,e),i(t,_t,e),i(t,G,e),i(t,yt,e),i(t,L,e),i(t,It,e),i(t,D,e),i(t,Mt,e),i(t,q,e),i(t,Tt,e),i(t,A,e),i(t,jt,e),i(t,B,e),i(t,Pt,e),i(t,z,e),i(t,kt,e),i(t,E,e),i(t,St,e),i(t,F,e),i(t,Ht,e),i(t,O,e),i(t,Gt,e),i(t,R,e),i(t,Lt,e),i(t,U,e),i(t,Dt,e),i(t,N,e),i(t,qt,e),i(t,W,e),i(t,At,e),i(t,X,e),i(t,Bt,e),i(t,Z,e),i(t,zt,e),i(t,J,e),i(t,Et,e),i(t,K,e),i(t,Ft,e),i(t,Q,e),i(t,Ot,e),i(t,V,e),i(t,Rt,e),i(t,Y,e),i(t,Ut,e),i(t,$,e),i(t,Nt,e),i(t,tt,e)},p:Wt,i:Wt,o:Wt,d(t){t&&(l(p),l(et),l(m),l(lt),l(f),l(it),l(d),l(nt),l(c),l(at),l(g),l(ot),l(v),l(rt),l(b),l(ut),l(w),l(ht),l(x),l(pt),l(C),l(mt),l(_),l(ft),l(y),l(dt),l(I),l(ct),l(M),l(gt),l(T),l(vt),l(j),l(bt),l(P),l(wt),l(k),l(xt),l(S),l(Ct),l(H),l(_t),l(G),l(yt),l(L),l(It),l(D),l(Mt),l(q),l(Tt),l(A),l(jt),l(B),l(Pt),l(z),l(kt),l(E),l(St),l(F),l(Ht),l(O),l(Gt),l(R),l(Lt),l(U),l(Dt),l(N),l(qt),l(W),l(At),l(X),l(Bt),l(Z),l(zt),l(J),l(Et),l(K),l(Ft),l(Q),l(Ot),l(V),l(Rt),l(Y),l(Ut),l($),l(Nt),l(tt))}}}const Xe={title:"Electronics Production",date:"2024-02-21",description:"The fourth assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab4/14.jpg"};class Ze extends Oe{constructor(p){super(),Re(this,p,null,Ue,Be,{})}}export{Ze as default,Xe as metadata};
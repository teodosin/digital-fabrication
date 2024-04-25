import{s as hi,e as s,a,H as ci,c as n,g as r,b as o,j as vi,k as di,h as l,f,d as u,i,n as Ye}from"./scheduler.WqRDolvd.js";import{S as gi,i as wi}from"./index.0NVKo1ab.js";function xi(pi){let p,Je="Table of Contents",Pt,m,Ne='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#datasheet">Datasheet</a></li> <li><a href="#multiplexer">Multiplexer</a></li> <li><a href="#imu">IMU</a></li> <li><a href="#routing">Routing</a></li> <li><a href="#milling">Milling</a></li>',Gt,h,Qe="Assignment",Lt,c,jt,mi=`<code class="language-undefined">Group assignment
1. Join one of the introduction sessions on Mon, Tue or Wed and document the probing of several different input devices.
2. Pick a group leader who has to create and populate the group assignment page. 

Individual assignment
1. Link to the group assignment page and describe what you learned from the group assignment.
2. Add a sensor to a microcontroller board that you have designed and read it.</code>`,Ft,v,Ve="Group",St,d,Ze="I was unfortunately sick on the day that my group had their introduction session. I will link to it here still, once it is posted.",zt,g,$e="Datasheet",At,w,tl='My <a href="fablab-00">final project, the glove controllers</a>, consists only of input devices and a microcontroller capable of transimitting that data. So this week was the perfect time to finally attempt the first iteration of the board.',Dt,x,el='For the board, I thought I’d again use the ESP32C3, like in the <a href="fablab-08">electronic design week’s project</a>. Back then I naively thought I could just plug in the flex sensors into the analog pins and ground and it would work. Only after making the board did I look into how flex sensors are supposed to be used. So this was my opportunity to correct that mistake.',Et,_,ll='I used <a href="https://www.youtube.com/watch?v=_tXWoplbqWo" rel="nofollow">this video</a> as a reference for figuring out the circuit for the flex sensors.',Ut,$,il,qt,b,sl="So I needed 5 analog pins per glove just for the flex sensors. For the That was more than the ESP32 had available, and I thought I needed multiple chips intercommunicating for that. Instead I was recommended to use a <strong>multiplexer</strong> to multiply the amount of pins.",Bt,C,nl="There were no footprints in the fablab library for the multiplexers, so I took a stab at making the one for the one I needed.",Wt,I,al='Taking a look at the <a href="https://www.ti.com/lit/ds/symlink/cd74hc4051.pdf?HQS=dis-dk-null-digikeymode-dsf-pf-null-wwe&amp;ts=1713092472891&amp;ref_url=https%253A%252F%252Fwww.ti.com%252Fgeneral%252Fdocs%252Fsuppproductinfo.tsp%253FdistId%253D10%2526gotoUrl%253Dhttps%253A%252F%252Fwww.ti.com%252Flit%252Fgpn%252Fcd74hc4051" rel="nofollow">datasheet</a>, the two main pieces of information I’m looking for are the <strong>pin configuration</strong> and the <strong>footprint</strong>. Finding the pin configuration was already somewhat confusing, as there were three different layouts in the datasheet. Figuring out which one was correct took a while, until I took a closer look at the numbering scheme of the component:',Ot,tt,ol,Kt,et,rl,Rt,y,fl="The pin configurations were labeled _4051B, _4052B and _4053B (underscore means I omitted identical strings). 4051 matches the code on the Digikey product site. I hoped this was correct.",Xt,M,ul="Then, finding the footprint. There were multiple diagrams of the physical dimensions of the component, and they too were different.",Yt,lt,pl,Jt,it,ml,Nt,k,hl="Multiplexer",Qt,T,cl="On to KiCad.",Vt,H,vl='I was following <a href="https://www.youtube.com/watch?v=pV-4ElYoXYU&amp;t=62s" rel="nofollow">this tutorial</a> to learn the basics of symbol and footprint creation.',Zt,P,dl="I opened the Aalto fablab kicad library repository and added a new footprint.",$t,G,gl="According to the datasheet, the distance between centres of pins is 1.27mm. I created a new grid with that spacing.",te,st,wl,ee,L,xl="I created a new <strong>pad</strong> in the centre of the grid with the following settings. The dimensions of the pads come from the datasheet as well. Not shown is the <strong>pad clearance</strong>, which I set to 0.5mm.",le,nt,_l,ie,j,bl="I immediately deleted the grid I had and made a new one with the correct horizontal offset of 7mm.",se,at,Cl,ne,ot,Il,ae,F,yl="The numbering of the pads was also clear in the datasheet.",oe,rt,Ml,re,S,kl="After the footprint, the symbol. A simple rectangle, like most other component symbols.",fe,ft,Tl,ue,z,Hl="Pin properties. Default settings except for the pin names, numbers and electrical types. I tried to match them to the types declared in the datasheet, even though they weren’t one to one matches. I/O became bidirectional, and the different powers pins all became power inputs in KiCad.",pe,ut,Pl,me,A,Gl="Below, the table I referenced.",he,pt,Ll,ce,mt,jl,ve,D,Fl="A test connection showed that the footprint wasn’t correctly linked to the symbol, so it wasn’t appearing in the PCB editor. Also, the other components in the fablab library had a courtyard, so I added that too.",de,ht,Sl,ge,ct,zl,we,E,Al='At this point I noticed and referred to the <a href="https://klc.kicad.org/" rel="nofollow">KiCad Library Conventions</a> and oh dear, was there a lot of things to still go through. I didn’t have time to check absolutely everything at this point, so I skimmed through to look for the things that seemed most relevant or important.',xe,U,Dl="Grouping the pins in the symbol better was a logical change.",_e,vt,El,be,q,Ul="IMU",Ce,B,ql='For tracking the position and orientation of a glove I picked an Inertial Measurement Unit with an accelerometer and a gyroscope. Specifically, the <a href="https://www.adafruit.com/product/4438" rel="nofollow">LSM6DSOX</a>.',Ie,W,Bl='The unit itself was intimidating with its large number of pins. Learning about the I2C protocol and referencing the <a href="https://learn.adafruit.com/adafruit-lsm6dsox-3d-accelerometer-gyroscope-breakout/wiring-and-test" rel="nofollow">wiring guide</a> was a bit of a challenge, but I eventually found the diagrams that showed the wiring clearly.',ye,dt,Wl,Me,gt,Ol,ke,O,Kl="The connector type on the IMU is called <strong>Stemma</strong>. I found a wire bundle with a stemma on one end and four standard male headers on the other. I would use these for the first iteration of the board. This would also spare me from having to create another new footprint, since I was already a bit behind on the assignments.",Te,wt,Rl,He,K,Xl="So the only four pins relevant to the I2C protocol are the power and ground pins, and the SDA and SCL pins for data transfer and clock speed respectively.",Pe,xt,Yl,Ge,R,Jl="Routing",Le,X,Nl="I had all the components placed in the schematic, so I could start routing.",je,_t,Ql,Fe,Y,Vl="The multiplexer, even with many of its pins unused, was a dense and difficult routing job. Even figuring out the correct orientation for it took a while. I had to move a lot of pins around.",Se,bt,Zl,ze,J,$l="When most of it was routed, I was still missing some ground connections that I had no way of routing. I resorted to using three 0 ohm resistors to jump across some routes and connect the ground to the remaining flex sensor pads.",Ae,Ct,ti,De,It,ei,Ee,yt,li,Ue,N,ii="Edge cuts and mounting holes left, and then the design was done.",qe,Mt,si,Be,Q,ni="Milling",We,V,ai='Milling went much better than with the <a href="fablab-09">previous assignment</a>. I did mess up one board, still. The bottom of the circuit was barely getting milled but the top half looked fine. The difference was too great to fix with repeated passes, since then the top would get milled too much. I stopped the job and placed another plate.',Oe,kt,oi,Ke,Z,ri="The second board was successful. I made a point to place the board bottom edge first, and then bending it backwards to try to make the tape connect fully along the whole length of it. With a bit of force, it seemed to work and the board got milled evenly everywhere.",Re,Tt,fi,Xe,Ht,ui;return{c(){p=s("h3"),p.textContent=Je,Pt=a(),m=s("ul"),m.innerHTML=Ne,Gt=a(),h=s("h1"),h.textContent=Qe,Lt=a(),c=s("pre"),jt=new ci(!1),Ft=a(),v=s("h1"),v.textContent=Ve,St=a(),d=s("p"),d.textContent=Ze,zt=a(),g=s("h1"),g.textContent=$e,At=a(),w=s("p"),w.innerHTML=tl,Dt=a(),x=s("p"),x.innerHTML=el,Et=a(),_=s("p"),_.innerHTML=ll,Ut=a(),$=s("img"),qt=a(),b=s("p"),b.innerHTML=sl,Bt=a(),C=s("p"),C.textContent=nl,Wt=a(),I=s("p"),I.innerHTML=al,Ot=a(),tt=s("img"),Kt=a(),et=s("img"),Rt=a(),y=s("p"),y.textContent=fl,Xt=a(),M=s("p"),M.textContent=ul,Yt=a(),lt=s("img"),Jt=a(),it=s("img"),Nt=a(),k=s("h1"),k.textContent=hl,Qt=a(),T=s("p"),T.textContent=cl,Vt=a(),H=s("p"),H.innerHTML=vl,Zt=a(),P=s("p"),P.textContent=dl,$t=a(),G=s("p"),G.textContent=gl,te=a(),st=s("img"),ee=a(),L=s("p"),L.innerHTML=xl,le=a(),nt=s("img"),ie=a(),j=s("p"),j.textContent=bl,se=a(),at=s("img"),ne=a(),ot=s("img"),ae=a(),F=s("p"),F.textContent=yl,oe=a(),rt=s("img"),re=a(),S=s("p"),S.textContent=kl,fe=a(),ft=s("img"),ue=a(),z=s("p"),z.textContent=Hl,pe=a(),ut=s("img"),me=a(),A=s("p"),A.textContent=Gl,he=a(),pt=s("img"),ce=a(),mt=s("img"),ve=a(),D=s("p"),D.textContent=Fl,de=a(),ht=s("img"),ge=a(),ct=s("img"),we=a(),E=s("p"),E.innerHTML=Al,xe=a(),U=s("p"),U.textContent=Dl,_e=a(),vt=s("img"),be=a(),q=s("h1"),q.textContent=Ul,Ce=a(),B=s("p"),B.innerHTML=ql,Ie=a(),W=s("p"),W.innerHTML=Bl,ye=a(),dt=s("img"),Me=a(),gt=s("img"),ke=a(),O=s("p"),O.innerHTML=Kl,Te=a(),wt=s("img"),He=a(),K=s("p"),K.textContent=Xl,Pe=a(),xt=s("img"),Ge=a(),R=s("h1"),R.textContent=Jl,Le=a(),X=s("p"),X.textContent=Nl,je=a(),_t=s("img"),Fe=a(),Y=s("p"),Y.textContent=Vl,Se=a(),bt=s("img"),ze=a(),J=s("p"),J.textContent=$l,Ae=a(),Ct=s("img"),De=a(),It=s("img"),Ee=a(),yt=s("img"),Ue=a(),N=s("p"),N.textContent=ii,qe=a(),Mt=s("img"),Be=a(),Q=s("h1"),Q.textContent=ni,We=a(),V=s("p"),V.innerHTML=ai,Oe=a(),kt=s("img"),Ke=a(),Z=s("p"),Z.textContent=ri,Re=a(),Tt=s("img"),Xe=a(),Ht=s("img"),this.h()},l(t){p=n(t,"H3",{"data-svelte-h":!0}),r(p)!=="svelte-sbwzft"&&(p.textContent=Je),Pt=o(t),m=n(t,"UL",{"data-svelte-h":!0}),r(m)!=="svelte-z70ovl"&&(m.innerHTML=Ne),Gt=o(t),h=n(t,"H1",{"data-svelte-h":!0}),r(h)!=="svelte-g9rspt"&&(h.textContent=Qe),Lt=o(t),c=n(t,"PRE",{class:!0});var e=vi(c);jt=di(e,!1),e.forEach(l),Ft=o(t),v=n(t,"H1",{"data-svelte-h":!0}),r(v)!=="svelte-kxioer"&&(v.textContent=Ve),St=o(t),d=n(t,"P",{"data-svelte-h":!0}),r(d)!=="svelte-gc9m5b"&&(d.textContent=Ze),zt=o(t),g=n(t,"H1",{"data-svelte-h":!0}),r(g)!=="svelte-13sfz2j"&&(g.textContent=$e),At=o(t),w=n(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-7dgeha"&&(w.innerHTML=tl),Dt=o(t),x=n(t,"P",{"data-svelte-h":!0}),r(x)!=="svelte-zhebox"&&(x.innerHTML=el),Et=o(t),_=n(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1x9o0o6"&&(_.innerHTML=ll),Ut=o(t),$=n(t,"IMG",{src:!0}),qt=o(t),b=n(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-1svnyss"&&(b.innerHTML=sl),Bt=o(t),C=n(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1jietxd"&&(C.textContent=nl),Wt=o(t),I=n(t,"P",{"data-svelte-h":!0}),r(I)!=="svelte-1b9jual"&&(I.innerHTML=al),Ot=o(t),tt=n(t,"IMG",{src:!0}),Kt=o(t),et=n(t,"IMG",{src:!0}),Rt=o(t),y=n(t,"P",{"data-svelte-h":!0}),r(y)!=="svelte-nmgvw6"&&(y.textContent=fl),Xt=o(t),M=n(t,"P",{"data-svelte-h":!0}),r(M)!=="svelte-1ecdaw7"&&(M.textContent=ul),Yt=o(t),lt=n(t,"IMG",{src:!0}),Jt=o(t),it=n(t,"IMG",{src:!0}),Nt=o(t),k=n(t,"H1",{"data-svelte-h":!0}),r(k)!=="svelte-1u679xf"&&(k.textContent=hl),Qt=o(t),T=n(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-7tgjys"&&(T.textContent=cl),Vt=o(t),H=n(t,"P",{"data-svelte-h":!0}),r(H)!=="svelte-646xof"&&(H.innerHTML=vl),Zt=o(t),P=n(t,"P",{"data-svelte-h":!0}),r(P)!=="svelte-1fpga0m"&&(P.textContent=dl),$t=o(t),G=n(t,"P",{"data-svelte-h":!0}),r(G)!=="svelte-nl482s"&&(G.textContent=gl),te=o(t),st=n(t,"IMG",{src:!0}),ee=o(t),L=n(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-hbiy1z"&&(L.innerHTML=xl),le=o(t),nt=n(t,"IMG",{src:!0}),ie=o(t),j=n(t,"P",{"data-svelte-h":!0}),r(j)!=="svelte-pr0lus"&&(j.textContent=bl),se=o(t),at=n(t,"IMG",{src:!0}),ne=o(t),ot=n(t,"IMG",{src:!0}),ae=o(t),F=n(t,"P",{"data-svelte-h":!0}),r(F)!=="svelte-f9yzfy"&&(F.textContent=yl),oe=o(t),rt=n(t,"IMG",{src:!0}),re=o(t),S=n(t,"P",{"data-svelte-h":!0}),r(S)!=="svelte-1wfkhqn"&&(S.textContent=kl),fe=o(t),ft=n(t,"IMG",{src:!0}),ue=o(t),z=n(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-sz8ag1"&&(z.textContent=Hl),pe=o(t),ut=n(t,"IMG",{src:!0}),me=o(t),A=n(t,"P",{"data-svelte-h":!0}),r(A)!=="svelte-1yjwulo"&&(A.textContent=Gl),he=o(t),pt=n(t,"IMG",{src:!0}),ce=o(t),mt=n(t,"IMG",{src:!0}),ve=o(t),D=n(t,"P",{"data-svelte-h":!0}),r(D)!=="svelte-o97rf6"&&(D.textContent=Fl),de=o(t),ht=n(t,"IMG",{src:!0}),ge=o(t),ct=n(t,"IMG",{src:!0}),we=o(t),E=n(t,"P",{"data-svelte-h":!0}),r(E)!=="svelte-1pyvspi"&&(E.innerHTML=Al),xe=o(t),U=n(t,"P",{"data-svelte-h":!0}),r(U)!=="svelte-m4v02d"&&(U.textContent=Dl),_e=o(t),vt=n(t,"IMG",{src:!0}),be=o(t),q=n(t,"H1",{"data-svelte-h":!0}),r(q)!=="svelte-lz9zfd"&&(q.textContent=Ul),Ce=o(t),B=n(t,"P",{"data-svelte-h":!0}),r(B)!=="svelte-oryw7y"&&(B.innerHTML=ql),Ie=o(t),W=n(t,"P",{"data-svelte-h":!0}),r(W)!=="svelte-y7njwm"&&(W.innerHTML=Bl),ye=o(t),dt=n(t,"IMG",{src:!0}),Me=o(t),gt=n(t,"IMG",{src:!0}),ke=o(t),O=n(t,"P",{"data-svelte-h":!0}),r(O)!=="svelte-ysw5b0"&&(O.innerHTML=Kl),Te=o(t),wt=n(t,"IMG",{src:!0}),He=o(t),K=n(t,"P",{"data-svelte-h":!0}),r(K)!=="svelte-571vwm"&&(K.textContent=Xl),Pe=o(t),xt=n(t,"IMG",{src:!0}),Ge=o(t),R=n(t,"H1",{"data-svelte-h":!0}),r(R)!=="svelte-1fyu4mc"&&(R.textContent=Jl),Le=o(t),X=n(t,"P",{"data-svelte-h":!0}),r(X)!=="svelte-guqgmk"&&(X.textContent=Nl),je=o(t),_t=n(t,"IMG",{src:!0}),Fe=o(t),Y=n(t,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-87pk2m"&&(Y.textContent=Vl),Se=o(t),bt=n(t,"IMG",{src:!0}),ze=o(t),J=n(t,"P",{"data-svelte-h":!0}),r(J)!=="svelte-3z9eez"&&(J.textContent=$l),Ae=o(t),Ct=n(t,"IMG",{src:!0}),De=o(t),It=n(t,"IMG",{src:!0}),Ee=o(t),yt=n(t,"IMG",{src:!0}),Ue=o(t),N=n(t,"P",{"data-svelte-h":!0}),r(N)!=="svelte-1vaaxm"&&(N.textContent=ii),qe=o(t),Mt=n(t,"IMG",{src:!0}),Be=o(t),Q=n(t,"H1",{"data-svelte-h":!0}),r(Q)!=="svelte-10znkaw"&&(Q.textContent=ni),We=o(t),V=n(t,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1l9q92d"&&(V.innerHTML=ai),Oe=o(t),kt=n(t,"IMG",{src:!0}),Ke=o(t),Z=n(t,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-cv03bb"&&(Z.textContent=ri),Re=o(t),Tt=n(t,"IMG",{src:!0}),Xe=o(t),Ht=n(t,"IMG",{src:!0}),this.h()},h(){jt.a=null,f(c,"class","language-undefined"),u($.src,il="fab10/01.png")||f($,"src",il),u(tt.src,ol="fab10/05.png")||f(tt,"src",ol),u(et.src,rl="fab10/06.png")||f(et,"src",rl),u(lt.src,pl="fab10/03.png")||f(lt,"src",pl),u(it.src,ml="fab10/04.png")||f(it,"src",ml),u(st.src,wl="fab10/08.png")||f(st,"src",wl),u(nt.src,_l="fab10/09.png")||f(nt,"src",_l),u(at.src,Cl="fab10/11.png")||f(at,"src",Cl),u(ot.src,Il="fab10/10.png")||f(ot,"src",Il),u(rt.src,Ml="fab10/02.png")||f(rt,"src",Ml),u(ft.src,Tl="fab10/12.png")||f(ft,"src",Tl),u(ut.src,Pl="fab10/13.png")||f(ut,"src",Pl),u(pt.src,Ll="fab10/14.png")||f(pt,"src",Ll),u(mt.src,jl="fab10/15.png")||f(mt,"src",jl),u(ht.src,Sl="fab10/16.png")||f(ht,"src",Sl),u(ct.src,zl="fab10/17.png")||f(ct,"src",zl),u(vt.src,El="fab10/18.png")||f(vt,"src",El),u(dt.src,Wl="fab10/19.png")||f(dt,"src",Wl),u(gt.src,Ol="fab10/20.png")||f(gt,"src",Ol),u(wt.src,Rl="fab10/21.jpg")||f(wt,"src",Rl),u(xt.src,Yl="fab10/22.png")||f(xt,"src",Yl),u(_t.src,Ql="fab10/23.png")||f(_t,"src",Ql),u(bt.src,Zl="fab10/24.png")||f(bt,"src",Zl),u(Ct.src,ti="fab10/25.png")||f(Ct,"src",ti),u(It.src,ei="fab10/26.png")||f(It,"src",ei),u(yt.src,li="fab10/27.png")||f(yt,"src",li),u(Mt.src,si="fab10/28.png")||f(Mt,"src",si),u(kt.src,oi="fab10/29.jpg")||f(kt,"src",oi),u(Tt.src,fi="fab10/30.jpg")||f(Tt,"src",fi),u(Ht.src,ui="fab10/31.jpg")||f(Ht,"src",ui)},m(t,e){i(t,p,e),i(t,Pt,e),i(t,m,e),i(t,Gt,e),i(t,h,e),i(t,Lt,e),i(t,c,e),jt.m(mi,c),i(t,Ft,e),i(t,v,e),i(t,St,e),i(t,d,e),i(t,zt,e),i(t,g,e),i(t,At,e),i(t,w,e),i(t,Dt,e),i(t,x,e),i(t,Et,e),i(t,_,e),i(t,Ut,e),i(t,$,e),i(t,qt,e),i(t,b,e),i(t,Bt,e),i(t,C,e),i(t,Wt,e),i(t,I,e),i(t,Ot,e),i(t,tt,e),i(t,Kt,e),i(t,et,e),i(t,Rt,e),i(t,y,e),i(t,Xt,e),i(t,M,e),i(t,Yt,e),i(t,lt,e),i(t,Jt,e),i(t,it,e),i(t,Nt,e),i(t,k,e),i(t,Qt,e),i(t,T,e),i(t,Vt,e),i(t,H,e),i(t,Zt,e),i(t,P,e),i(t,$t,e),i(t,G,e),i(t,te,e),i(t,st,e),i(t,ee,e),i(t,L,e),i(t,le,e),i(t,nt,e),i(t,ie,e),i(t,j,e),i(t,se,e),i(t,at,e),i(t,ne,e),i(t,ot,e),i(t,ae,e),i(t,F,e),i(t,oe,e),i(t,rt,e),i(t,re,e),i(t,S,e),i(t,fe,e),i(t,ft,e),i(t,ue,e),i(t,z,e),i(t,pe,e),i(t,ut,e),i(t,me,e),i(t,A,e),i(t,he,e),i(t,pt,e),i(t,ce,e),i(t,mt,e),i(t,ve,e),i(t,D,e),i(t,de,e),i(t,ht,e),i(t,ge,e),i(t,ct,e),i(t,we,e),i(t,E,e),i(t,xe,e),i(t,U,e),i(t,_e,e),i(t,vt,e),i(t,be,e),i(t,q,e),i(t,Ce,e),i(t,B,e),i(t,Ie,e),i(t,W,e),i(t,ye,e),i(t,dt,e),i(t,Me,e),i(t,gt,e),i(t,ke,e),i(t,O,e),i(t,Te,e),i(t,wt,e),i(t,He,e),i(t,K,e),i(t,Pe,e),i(t,xt,e),i(t,Ge,e),i(t,R,e),i(t,Le,e),i(t,X,e),i(t,je,e),i(t,_t,e),i(t,Fe,e),i(t,Y,e),i(t,Se,e),i(t,bt,e),i(t,ze,e),i(t,J,e),i(t,Ae,e),i(t,Ct,e),i(t,De,e),i(t,It,e),i(t,Ee,e),i(t,yt,e),i(t,Ue,e),i(t,N,e),i(t,qe,e),i(t,Mt,e),i(t,Be,e),i(t,Q,e),i(t,We,e),i(t,V,e),i(t,Oe,e),i(t,kt,e),i(t,Ke,e),i(t,Z,e),i(t,Re,e),i(t,Tt,e),i(t,Xe,e),i(t,Ht,e)},p:Ye,i:Ye,o:Ye,d(t){t&&(l(p),l(Pt),l(m),l(Gt),l(h),l(Lt),l(c),l(Ft),l(v),l(St),l(d),l(zt),l(g),l(At),l(w),l(Dt),l(x),l(Et),l(_),l(Ut),l($),l(qt),l(b),l(Bt),l(C),l(Wt),l(I),l(Ot),l(tt),l(Kt),l(et),l(Rt),l(y),l(Xt),l(M),l(Yt),l(lt),l(Jt),l(it),l(Nt),l(k),l(Qt),l(T),l(Vt),l(H),l(Zt),l(P),l($t),l(G),l(te),l(st),l(ee),l(L),l(le),l(nt),l(ie),l(j),l(se),l(at),l(ne),l(ot),l(ae),l(F),l(oe),l(rt),l(re),l(S),l(fe),l(ft),l(ue),l(z),l(pe),l(ut),l(me),l(A),l(he),l(pt),l(ce),l(mt),l(ve),l(D),l(de),l(ht),l(ge),l(ct),l(we),l(E),l(xe),l(U),l(_e),l(vt),l(be),l(q),l(Ce),l(B),l(Ie),l(W),l(ye),l(dt),l(Me),l(gt),l(ke),l(O),l(Te),l(wt),l(He),l(K),l(Pe),l(xt),l(Ge),l(R),l(Le),l(X),l(je),l(_t),l(Fe),l(Y),l(Se),l(bt),l(ze),l(J),l(Ae),l(Ct),l(De),l(It),l(Ee),l(yt),l(Ue),l(N),l(qe),l(Mt),l(Be),l(Q),l(We),l(V),l(Oe),l(kt),l(Ke),l(Z),l(Re),l(Tt),l(Xe),l(Ht))}}}const Ci={title:"Input Devices",date:"2024-03-21",description:"The tenth assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab10/31.jpg"};class Ii extends gi{constructor(p){super(),wi(this,p,null,xi,hi,{})}}export{Ii as default,Ci as metadata};

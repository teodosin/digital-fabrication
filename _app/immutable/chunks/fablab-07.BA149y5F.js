import{s as oi,e as s,a,H as ri,c as n,g as u,b as o,j as ui,k as fi,h as l,f as r,d as f,i,n as Re}from"./scheduler.VDxU6aNK.js";import{S as mi,i as hi}from"./index.CMIy7L5C.js";function pi(ni){let m,We="Table of Contents",Mt,h,Je='<li><a href="#assignment">Assignment</a></li> <li><a href="#design">Design</a></li> <li><a href="#milling">Milling</a></li>',Tt,p,Ue="Assignment",Pt,d,Gt,ai=`<code class="language-undefined">* Document the safety introduction details and general flow of using the machine.
* Make (design+mill+assemble) something big using a 15 mm thick and 120x120 cm big soft plywood sheet.
* Do a fitting test with a simple design first so that your parts are snug fit when assembling them and to avoid spoiling material. You will get one plywood sheet.
* Make sure you choose the right depth of cut (1/2 diameter of tool is safe) and calculate the feed rate (FR = SS * CL * NF) accordingly to avoid breaking the tool.</code>`,Ht,c,Ye="Design",Lt,v,Be="It took me a long time to decide what I wanted to make this week. It felt like every idea I had was either overly ambitious for the amount of material and time we had or plainly uninteresting and not useful.",St,g,Xe="Simple and useful was the goal, then. I decided to try to improve the organisation at my desk at home. My desktop PC was just on the floor next to my desk, so a simple stand could lift it up a bit and create some additional storage beneath it for my painting easel and tripod, which I had just been randomly stashing away somewhere nearby. Additionally I wanted an extra shelf above the small bookshelf under the desk for some generic storage space.",qt,b,Ze,zt,w,Ke="I made a couple sketches for the stand but quickly moved to Ondsel to just get started with the models. Legs connected with finger joints to the top board and opposing legs connected to each other.",At,y,Qe,Dt,C,$e="Beginning with measurements and inputting them into Ondsel’s spreadsheet.",Ft,x,tl,Nt,_,el="The workflow was quite familiar at this point. Create sketches, reference the spreadsheet’s cells to get the correct dimensions.",Et,I,ll,Ot,k,il='Even though the basic structure is dead-simple, I made an attempt to make it look at least a bit interesting by curving the legs in a similar style as I did with my <a href="fablab-03">previous cutting project</a>. It looked odd though. The contrast of the curved and straight edges ended up looking somewhat jarring, I think. I didn’t want to spend too much time on just the design, so I moved on. I also didn’t want to risk the stability of the final object by adding too many holes and curves and making it too weird. A fair tradeoff considering my lack of experience.',Vt,j,sl,Rt,M,nl="I added a bit of curve to the cross-beams though. Getting appropriate constraints placed for the b-splines was a bit tedious. I wasn’t aware of any mirror or copy tool in the sketcher workspace so I just placed identical constraints on both sides.",Wt,T,al,Jt,P,ol="Finished PC stand design. Lifting it just 20 cm off the floor. It still had to fit under the edge of my desk.",Ut,G,rl,Yt,H,ul="The shelf design was also really simple. Just two legs on the sides and a piece of wood in the corner to add some stability.",Bt,L,fl="I created the shelf as a separate file. Spreadsheets in Ondsel (so presumably in FreeCAD also) are tied to a particular file, but they can still be referenced from other files. The autocomplete is fairly good, but roughly you would reference a cell like this:",Xt,S,ml="<code>&lt;&lt;file_name&gt;&gt;#Spreadsheet.parameter_name</code>",Zt,q,hl="So I just referenced the shelf parameters in the original spreadsheet and didn’t have to create a new one.",Kt,z,pl,Qt,A,dl="I used the boolean <strong>Cut</strong> operator in the <strong>Part</strong> workbench for the cutouts for the finger joints. It’s a much quicker workflow than using shape binders for this purpose and I also find it more intuitive. It creates a bit of nesting in the tree view, but with this level of complexity it’s perfectly manageable.",$t,D,cl,te,F,vl='I roughly followed the process presented in the <a href="https://www.youtube.com/watch?v=kbu4pEzIPl4" rel="nofollow">nesting and tool paths tutorial</a> for assembling the pieces into the final layout. I saved each body as its own file, created a new file for the assembly and used the <strong>A2plus</strong> workbench (which had to be enabled from the addon manager) to import the files back. The workbench has a handy selection of constraints for positioning the pieces onto the same level.',ee,N,gl,le,E,bl="From the <strong>draft workbench</strong> I then selected all the pieces and created Shape2DViews out of them and exported them out as a .dxf.",ie,O,wl="Milling",se,V,yl,ne,R,Cl="The most important thing to remember about CNC milling is to never do it alone. Someone should always be there when you’re in the room in case something goes wrong. The CNC machine is the most dangerous machine at the lab, and violent things can happen if clothes or hair or fingers get caught in it.",ae,W,xl,oe,J,_l="The first actual step of the process is importing the .dxf files to VCarve to create the tool paths. The imported file has to be converted into a curve, and then ungrouped because the conversion will turn everything into a single curve. The ungrouped path segments can then be merged by distance.",re,U,Il,ue,Y,kl="Calculating the correct <strong>feed rate</strong> is important and is done by multiplying three values together.",fe,B,jl="<li>Spindle speed is how fast the tool rotates. Predetermined for the machine, as I undestand.</li> <li>Chip load is determined by the material being milled. 0.6 - 0.7 is the range for soft and hard woods respectively.</li> <li>Number of cutting edges on the tool. In this case 2.</li>",me,X,Ml,he,Z,Tl="Since the milling tool has a thickness, and is round, sharp inner corners are impossible to create. Outer corners are doable. To compensate for this and to allow for such joints to fit together, fillets have to be cut in the inner corners to accommodate for the sharp edge that’s coming in. These can be created in VCarve or already in the CAD phase.",pe,K,Pl,de,Q,Gl="In my case, I had just exported the .dxf with sharp corners, so I had to add the fillets in VCarve. Problem was, the curve conversion turned turned even visually straight lines into bezier curves with handles. The dog bone fillet wouldn’t work on those. Thankfully these could be easily converted to straight lines just by hitting the <code>l</code> key. There will be a squiggle next to the cursor showing you can do this.",ce,$,Hl,ve,tt,Ll,ge,et,Sl="Tabs are also useful to add. Just a couple of tabs can stop a piece from moving after being cut out.",be,lt,ql="VCarve will show you a 3D preview of the cutting job, toolpaths and all.",we,it,zl,ye,st,Al="For my project, there were some paths that had to be set to cut from the outside, and some from the inside. These were separated into two different toolpaths, but exported to the same file because there was no need to switch out tools for my project.",Ce,nt,Dl,xe,at,Fl="Remember to wear gloves when handling the materials. Especially in the case of wood, when you can get splinters.",_e,ot,Nl,Ie,rt,El="We set the origin positions on the XY-axis to the bottom left corner. The Z-axis was set with the help of an additional tool, a small cylinder-like object hanging on the left of the machine. The machine knows the height of the object and lowers the tool onto it to determine the top of the material.",ke,ut,Ol,je,ft,Vl="The cutting job had started. It was not necessary to be in the room while machine is running.",Me,mt,Rl,Te,ht,Wl="For a couple pieces it turned out that they weren’t set to be cut from the outside like they should, resulting in tabs that were too small. They were small enough to fit on the leftover section of the plywood stock, so we could just create a new toolpath with just the two shapes, properly set to cut on the outside.",Pe,pt,Jl,Ge,dt,Ul="When the job was finished, I removed the pieces from the tabs with a chisel. I was slightly hasty with this, so for a couple pieces I ended up trying to rip them out before a tab was cut off. This caused a bit of damage, but nothing too bad. Those parts wouldn’t be visible anyway.",He,ct,Yl,Le,vt,Bl="The CNC cut edges end up being quite jaggy, so some sanding was needed to finish the surfaces before gluing.",Se,gt,Xl,qe,bt,Zl="All pieces in a pile.",ze,wt,Kl,Ae,yt,Ql="One layer in the slots wasn’t cut, for some reason. A chisel was fine enough to finish them.",De,Ct,$l,Fe,xt,ti="Assembly test. No offset was needed, and the pieces were a decently snug fit. Not tight enough to be sturdy without glue.",Ne,_t,ei,Ee,It,li,Oe,kt,ii,Ve,jt,si="When the glue dried, both the shelf and the stand were nice and sturdy. I still wanted to sand them a bit and paint them a nicer color, but that had to wait.";return{c(){m=s("h3"),m.textContent=We,Mt=a(),h=s("ul"),h.innerHTML=Je,Tt=a(),p=s("h1"),p.textContent=Ue,Pt=a(),d=s("pre"),Gt=new ri(!1),Ht=a(),c=s("h1"),c.textContent=Ye,Lt=a(),v=s("p"),v.textContent=Be,St=a(),g=s("p"),g.textContent=Xe,qt=a(),b=s("img"),zt=a(),w=s("p"),w.textContent=Ke,At=a(),y=s("img"),Dt=a(),C=s("p"),C.textContent=$e,Ft=a(),x=s("img"),Nt=a(),_=s("p"),_.textContent=el,Et=a(),I=s("img"),Ot=a(),k=s("p"),k.innerHTML=il,Vt=a(),j=s("img"),Rt=a(),M=s("p"),M.textContent=nl,Wt=a(),T=s("img"),Jt=a(),P=s("p"),P.textContent=ol,Ut=a(),G=s("img"),Yt=a(),H=s("p"),H.textContent=ul,Bt=a(),L=s("p"),L.textContent=fl,Xt=a(),S=s("p"),S.innerHTML=ml,Zt=a(),q=s("p"),q.textContent=hl,Kt=a(),z=s("img"),Qt=a(),A=s("p"),A.innerHTML=dl,$t=a(),D=s("img"),te=a(),F=s("p"),F.innerHTML=vl,ee=a(),N=s("img"),le=a(),E=s("p"),E.innerHTML=bl,ie=a(),O=s("h1"),O.textContent=wl,se=a(),V=s("img"),ne=a(),R=s("p"),R.textContent=Cl,ae=a(),W=s("img"),oe=a(),J=s("p"),J.textContent=_l,re=a(),U=s("img"),ue=a(),Y=s("p"),Y.innerHTML=kl,fe=a(),B=s("ul"),B.innerHTML=jl,me=a(),X=s("img"),he=a(),Z=s("p"),Z.textContent=Tl,pe=a(),K=s("img"),de=a(),Q=s("p"),Q.innerHTML=Gl,ce=a(),$=s("img"),ve=a(),tt=s("img"),ge=a(),et=s("p"),et.textContent=Sl,be=a(),lt=s("p"),lt.textContent=ql,we=a(),it=s("img"),ye=a(),st=s("p"),st.textContent=Al,Ce=a(),nt=s("img"),xe=a(),at=s("p"),at.textContent=Fl,_e=a(),ot=s("img"),Ie=a(),rt=s("p"),rt.textContent=El,ke=a(),ut=s("img"),je=a(),ft=s("p"),ft.textContent=Vl,Me=a(),mt=s("img"),Te=a(),ht=s("p"),ht.textContent=Wl,Pe=a(),pt=s("img"),Ge=a(),dt=s("p"),dt.textContent=Ul,He=a(),ct=s("img"),Le=a(),vt=s("p"),vt.textContent=Bl,Se=a(),gt=s("img"),qe=a(),bt=s("p"),bt.textContent=Zl,ze=a(),wt=s("img"),Ae=a(),yt=s("p"),yt.textContent=Ql,De=a(),Ct=s("img"),Fe=a(),xt=s("p"),xt.textContent=ti,Ne=a(),_t=s("img"),Ee=a(),It=s("img"),Oe=a(),kt=s("img"),Ve=a(),jt=s("p"),jt.textContent=si,this.h()},l(t){m=n(t,"H3",{"data-svelte-h":!0}),u(m)!=="svelte-sbwzft"&&(m.textContent=We),Mt=o(t),h=n(t,"UL",{"data-svelte-h":!0}),u(h)!=="svelte-6l8uzx"&&(h.innerHTML=Je),Tt=o(t),p=n(t,"H1",{"data-svelte-h":!0}),u(p)!=="svelte-g9rspt"&&(p.textContent=Ue),Pt=o(t),d=n(t,"PRE",{class:!0});var e=ui(d);Gt=fi(e,!1),e.forEach(l),Ht=o(t),c=n(t,"H1",{"data-svelte-h":!0}),u(c)!=="svelte-rhbf2e"&&(c.textContent=Ye),Lt=o(t),v=n(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-mg81il"&&(v.textContent=Be),St=o(t),g=n(t,"P",{"data-svelte-h":!0}),u(g)!=="svelte-j55pkp"&&(g.textContent=Xe),qt=o(t),b=n(t,"IMG",{src:!0,alt:!0}),zt=o(t),w=n(t,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1ia4sup"&&(w.textContent=Ke),At=o(t),y=n(t,"IMG",{src:!0,alt:!0}),Dt=o(t),C=n(t,"P",{"data-svelte-h":!0}),u(C)!=="svelte-1tnt5bo"&&(C.textContent=$e),Ft=o(t),x=n(t,"IMG",{src:!0,alt:!0}),Nt=o(t),_=n(t,"P",{"data-svelte-h":!0}),u(_)!=="svelte-5l5ktj"&&(_.textContent=el),Et=o(t),I=n(t,"IMG",{src:!0,alt:!0}),Ot=o(t),k=n(t,"P",{"data-svelte-h":!0}),u(k)!=="svelte-1xlwwjf"&&(k.innerHTML=il),Vt=o(t),j=n(t,"IMG",{src:!0,alt:!0}),Rt=o(t),M=n(t,"P",{"data-svelte-h":!0}),u(M)!=="svelte-l9lp3i"&&(M.textContent=nl),Wt=o(t),T=n(t,"IMG",{src:!0,alt:!0}),Jt=o(t),P=n(t,"P",{"data-svelte-h":!0}),u(P)!=="svelte-1io6zyb"&&(P.textContent=ol),Ut=o(t),G=n(t,"IMG",{src:!0,alt:!0}),Yt=o(t),H=n(t,"P",{"data-svelte-h":!0}),u(H)!=="svelte-3p5s41"&&(H.textContent=ul),Bt=o(t),L=n(t,"P",{"data-svelte-h":!0}),u(L)!=="svelte-13uqvfc"&&(L.textContent=fl),Xt=o(t),S=n(t,"P",{"data-svelte-h":!0}),u(S)!=="svelte-sw9rnj"&&(S.innerHTML=ml),Zt=o(t),q=n(t,"P",{"data-svelte-h":!0}),u(q)!=="svelte-qzgnon"&&(q.textContent=hl),Kt=o(t),z=n(t,"IMG",{src:!0,alt:!0}),Qt=o(t),A=n(t,"P",{"data-svelte-h":!0}),u(A)!=="svelte-165wkut"&&(A.innerHTML=dl),$t=o(t),D=n(t,"IMG",{src:!0,alt:!0}),te=o(t),F=n(t,"P",{"data-svelte-h":!0}),u(F)!=="svelte-uxtw80"&&(F.innerHTML=vl),ee=o(t),N=n(t,"IMG",{src:!0,alt:!0}),le=o(t),E=n(t,"P",{"data-svelte-h":!0}),u(E)!=="svelte-1ubzyo6"&&(E.innerHTML=bl),ie=o(t),O=n(t,"H1",{"data-svelte-h":!0}),u(O)!=="svelte-10znkaw"&&(O.textContent=wl),se=o(t),V=n(t,"IMG",{src:!0,alt:!0}),ne=o(t),R=n(t,"P",{"data-svelte-h":!0}),u(R)!=="svelte-9yb1ky"&&(R.textContent=Cl),ae=o(t),W=n(t,"IMG",{src:!0,alt:!0}),oe=o(t),J=n(t,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1bwoq6l"&&(J.textContent=_l),re=o(t),U=n(t,"IMG",{src:!0,alt:!0}),ue=o(t),Y=n(t,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-1tdk5zv"&&(Y.innerHTML=kl),fe=o(t),B=n(t,"UL",{"data-svelte-h":!0}),u(B)!=="svelte-1ju52a9"&&(B.innerHTML=jl),me=o(t),X=n(t,"IMG",{src:!0,alt:!0}),he=o(t),Z=n(t,"P",{"data-svelte-h":!0}),u(Z)!=="svelte-11kkbdx"&&(Z.textContent=Tl),pe=o(t),K=n(t,"IMG",{src:!0,alt:!0}),de=o(t),Q=n(t,"P",{"data-svelte-h":!0}),u(Q)!=="svelte-rrwdvd"&&(Q.innerHTML=Gl),ce=o(t),$=n(t,"IMG",{src:!0,alt:!0}),ve=o(t),tt=n(t,"IMG",{src:!0,alt:!0}),ge=o(t),et=n(t,"P",{"data-svelte-h":!0}),u(et)!=="svelte-1cvvnm5"&&(et.textContent=Sl),be=o(t),lt=n(t,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-1mzah3a"&&(lt.textContent=ql),we=o(t),it=n(t,"IMG",{src:!0,alt:!0}),ye=o(t),st=n(t,"P",{"data-svelte-h":!0}),u(st)!=="svelte-g6roo8"&&(st.textContent=Al),Ce=o(t),nt=n(t,"IMG",{src:!0,alt:!0}),xe=o(t),at=n(t,"P",{"data-svelte-h":!0}),u(at)!=="svelte-n4wmof"&&(at.textContent=Fl),_e=o(t),ot=n(t,"IMG",{src:!0,alt:!0}),Ie=o(t),rt=n(t,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-12rlsfy"&&(rt.textContent=El),ke=o(t),ut=n(t,"IMG",{src:!0,alt:!0}),je=o(t),ft=n(t,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-8w26wi"&&(ft.textContent=Vl),Me=o(t),mt=n(t,"IMG",{src:!0,alt:!0}),Te=o(t),ht=n(t,"P",{"data-svelte-h":!0}),u(ht)!=="svelte-yhwlsd"&&(ht.textContent=Wl),Pe=o(t),pt=n(t,"IMG",{src:!0,alt:!0}),Ge=o(t),dt=n(t,"P",{"data-svelte-h":!0}),u(dt)!=="svelte-1copstf"&&(dt.textContent=Ul),He=o(t),ct=n(t,"IMG",{src:!0,alt:!0}),Le=o(t),vt=n(t,"P",{"data-svelte-h":!0}),u(vt)!=="svelte-18rx2u"&&(vt.textContent=Bl),Se=o(t),gt=n(t,"IMG",{src:!0,alt:!0}),qe=o(t),bt=n(t,"P",{"data-svelte-h":!0}),u(bt)!=="svelte-gly85g"&&(bt.textContent=Zl),ze=o(t),wt=n(t,"IMG",{src:!0,alt:!0}),Ae=o(t),yt=n(t,"P",{"data-svelte-h":!0}),u(yt)!=="svelte-1cvi4f7"&&(yt.textContent=Ql),De=o(t),Ct=n(t,"IMG",{src:!0,alt:!0}),Fe=o(t),xt=n(t,"P",{"data-svelte-h":!0}),u(xt)!=="svelte-19i4yyi"&&(xt.textContent=ti),Ne=o(t),_t=n(t,"IMG",{src:!0,alt:!0}),Ee=o(t),It=n(t,"IMG",{src:!0,alt:!0}),Oe=o(t),kt=n(t,"IMG",{src:!0,alt:!0}),Ve=o(t),jt=n(t,"P",{"data-svelte-h":!0}),u(jt)!=="svelte-6ni3ks"&&(jt.textContent=si),this.h()},h(){Gt.a=null,r(d,"class","language-undefined"),f(b.src,Ze="fab7/01.jpg")||r(b,"src",Ze),r(b,"alt","sorry, no alt found"),f(y.src,Qe="fab7/02.png")||r(y,"src",Qe),r(y,"alt","sorry, no alt found"),f(x.src,tl="fab7/03.png")||r(x,"src",tl),r(x,"alt","sorry, no alt found"),f(I.src,ll="fab7/04.png")||r(I,"src",ll),r(I,"alt","sorry, no alt found"),f(j.src,sl="fab7/05.png")||r(j,"src",sl),r(j,"alt","sorry, no alt found"),f(T.src,al="fab7/06.png")||r(T,"src",al),r(T,"alt","sorry, no alt found"),f(G.src,rl="fab7/07.png")||r(G,"src",rl),r(G,"alt","sorry, no alt found"),f(z.src,pl="fab7/08.png")||r(z,"src",pl),r(z,"alt","sorry, no alt found"),f(D.src,cl="fab7/09.png")||r(D,"src",cl),r(D,"alt","sorry, no alt found"),f(N.src,gl="fab7/10.png")||r(N,"src",gl),r(N,"alt","sorry, no alt found"),f(V.src,yl="fab7/4.jpg")||r(V,"src",yl),r(V,"alt","sorry, no alt found"),f(W.src,xl="fab7/1.jpg")||r(W,"src",xl),r(W,"alt","sorry, no alt found"),f(U.src,Il="fab7/2.jpg")||r(U,"src",Il),r(U,"alt","sorry, no alt found"),f(X.src,Ml="fab7/3.jpg")||r(X,"src",Ml),r(X,"alt","sorry, no alt found"),f(K.src,Pl="fab7/5.jpg")||r(K,"src",Pl),r(K,"alt","sorry, no alt found"),f($.src,Hl="fab7/6.jpg")||r($,"src",Hl),r($,"alt","sorry, no alt found"),f(tt.src,Ll="fab7/7.jpg")||r(tt,"src",Ll),r(tt,"alt","sorry, no alt found"),f(it.src,zl="fab7/11.jpg")||r(it,"src",zl),r(it,"alt","sorry, no alt found"),f(nt.src,Dl="fab7/8.jpg")||r(nt,"src",Dl),r(nt,"alt","sorry, no alt found"),f(ot.src,Nl="fab7/10.jpg")||r(ot,"src",Nl),r(ot,"alt","sorry, no alt found"),f(ut.src,Ol="fab7/12.jpg")||r(ut,"src",Ol),r(ut,"alt","sorry, no alt found"),f(mt.src,Rl="fab7/13.jpg")||r(mt,"src",Rl),r(mt,"alt","sorry, no alt found"),f(pt.src,Jl="fab7/14.jpg")||r(pt,"src",Jl),r(pt,"alt","sorry, no alt found"),f(ct.src,Yl="fab7/15.jpg")||r(ct,"src",Yl),r(ct,"alt","sorry, no alt found"),f(gt.src,Xl="fab7/16.jpg")||r(gt,"src",Xl),r(gt,"alt","sorry, no alt found"),f(wt.src,Kl="fab7/17.jpg")||r(wt,"src",Kl),r(wt,"alt","sorry, no alt found"),f(Ct.src,$l="fab7/19.jpg")||r(Ct,"src",$l),r(Ct,"alt","sorry, no alt found"),f(_t.src,ei="fab7/20.jpg")||r(_t,"src",ei),r(_t,"alt","sorry, no alt found"),f(It.src,li="fab7/21.jpg")||r(It,"src",li),r(It,"alt","sorry, no alt found"),f(kt.src,ii="fab7/22.jpg")||r(kt,"src",ii),r(kt,"alt","sorry, no alt found")},m(t,e){i(t,m,e),i(t,Mt,e),i(t,h,e),i(t,Tt,e),i(t,p,e),i(t,Pt,e),i(t,d,e),Gt.m(ai,d),i(t,Ht,e),i(t,c,e),i(t,Lt,e),i(t,v,e),i(t,St,e),i(t,g,e),i(t,qt,e),i(t,b,e),i(t,zt,e),i(t,w,e),i(t,At,e),i(t,y,e),i(t,Dt,e),i(t,C,e),i(t,Ft,e),i(t,x,e),i(t,Nt,e),i(t,_,e),i(t,Et,e),i(t,I,e),i(t,Ot,e),i(t,k,e),i(t,Vt,e),i(t,j,e),i(t,Rt,e),i(t,M,e),i(t,Wt,e),i(t,T,e),i(t,Jt,e),i(t,P,e),i(t,Ut,e),i(t,G,e),i(t,Yt,e),i(t,H,e),i(t,Bt,e),i(t,L,e),i(t,Xt,e),i(t,S,e),i(t,Zt,e),i(t,q,e),i(t,Kt,e),i(t,z,e),i(t,Qt,e),i(t,A,e),i(t,$t,e),i(t,D,e),i(t,te,e),i(t,F,e),i(t,ee,e),i(t,N,e),i(t,le,e),i(t,E,e),i(t,ie,e),i(t,O,e),i(t,se,e),i(t,V,e),i(t,ne,e),i(t,R,e),i(t,ae,e),i(t,W,e),i(t,oe,e),i(t,J,e),i(t,re,e),i(t,U,e),i(t,ue,e),i(t,Y,e),i(t,fe,e),i(t,B,e),i(t,me,e),i(t,X,e),i(t,he,e),i(t,Z,e),i(t,pe,e),i(t,K,e),i(t,de,e),i(t,Q,e),i(t,ce,e),i(t,$,e),i(t,ve,e),i(t,tt,e),i(t,ge,e),i(t,et,e),i(t,be,e),i(t,lt,e),i(t,we,e),i(t,it,e),i(t,ye,e),i(t,st,e),i(t,Ce,e),i(t,nt,e),i(t,xe,e),i(t,at,e),i(t,_e,e),i(t,ot,e),i(t,Ie,e),i(t,rt,e),i(t,ke,e),i(t,ut,e),i(t,je,e),i(t,ft,e),i(t,Me,e),i(t,mt,e),i(t,Te,e),i(t,ht,e),i(t,Pe,e),i(t,pt,e),i(t,Ge,e),i(t,dt,e),i(t,He,e),i(t,ct,e),i(t,Le,e),i(t,vt,e),i(t,Se,e),i(t,gt,e),i(t,qe,e),i(t,bt,e),i(t,ze,e),i(t,wt,e),i(t,Ae,e),i(t,yt,e),i(t,De,e),i(t,Ct,e),i(t,Fe,e),i(t,xt,e),i(t,Ne,e),i(t,_t,e),i(t,Ee,e),i(t,It,e),i(t,Oe,e),i(t,kt,e),i(t,Ve,e),i(t,jt,e)},p:Re,i:Re,o:Re,d(t){t&&(l(m),l(Mt),l(h),l(Tt),l(p),l(Pt),l(d),l(Ht),l(c),l(Lt),l(v),l(St),l(g),l(qt),l(b),l(zt),l(w),l(At),l(y),l(Dt),l(C),l(Ft),l(x),l(Nt),l(_),l(Et),l(I),l(Ot),l(k),l(Vt),l(j),l(Rt),l(M),l(Wt),l(T),l(Jt),l(P),l(Ut),l(G),l(Yt),l(H),l(Bt),l(L),l(Xt),l(S),l(Zt),l(q),l(Kt),l(z),l(Qt),l(A),l($t),l(D),l(te),l(F),l(ee),l(N),l(le),l(E),l(ie),l(O),l(se),l(V),l(ne),l(R),l(ae),l(W),l(oe),l(J),l(re),l(U),l(ue),l(Y),l(fe),l(B),l(me),l(X),l(he),l(Z),l(pe),l(K),l(de),l(Q),l(ce),l($),l(ve),l(tt),l(ge),l(et),l(be),l(lt),l(we),l(it),l(ye),l(st),l(Ce),l(nt),l(xe),l(at),l(_e),l(ot),l(Ie),l(rt),l(ke),l(ut),l(je),l(ft),l(Me),l(mt),l(Te),l(ht),l(Pe),l(pt),l(Ge),l(dt),l(He),l(ct),l(Le),l(vt),l(Se),l(gt),l(qe),l(bt),l(ze),l(wt),l(Ae),l(yt),l(De),l(Ct),l(Fe),l(xt),l(Ne),l(_t),l(Ee),l(It),l(Oe),l(kt),l(Ve),l(jt))}}}const vi={title:"Computer-Controlled Machining",date:"2024-03-18",description:"The seventh assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab7/19.jpg"};class gi extends mi{constructor(m){super(),hi(this,m,null,pi,oi,{})}}export{gi as default,vi as metadata};
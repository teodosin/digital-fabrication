import{s as oi,e as s,a,H as ui,c as n,g as u,b as o,j as ri,k as fi,h as l,f as r,d as f,i,n as Re}from"./scheduler.WqRDolvd.js";import{S as mi,i as hi}from"./index.0NVKo1ab.js";function pi(ni){let m,We="Table of Contents",Mt,h,Je='<li><a href="#assignment">Assignment</a></li> <li><a href="#design">Design</a></li> <li><a href="#milling">Milling</a></li>',Tt,p,Ue="Assignment",Pt,c,Gt,ai=`<code class="language-undefined">* Document the safety introduction details and general flow of using the machine.
* Make (design+mill+assemble) something big using a 15 mm thick and 120x120 cm big soft plywood sheet.
* Do a fitting test with a simple design first so that your parts are snug fit when assembling them and to avoid spoiling material. You will get one plywood sheet.
* Make sure you choose the right depth of cut (1/2 diameter of tool is safe) and calculate the feed rate (FR = SS * CL * NF) accordingly to avoid breaking the tool.</code>`,Ht,d,Ye="Design",Lt,v,Be="It took me a long time to decide what I wanted to make this week. It felt like every idea I had was either overly ambitious for the amount of material and time we had or plainly uninteresting and not useful.",St,g,Xe="Simple and useful was the goal, then. I decided to try to improve the organisation at my desk at home. My desktop PC was just on the floor next to my desk, so a simple stand could lift it up a bit and create some additional storage beneath it for my painting easel and tripod, which I had just been randomly stashing away somewhere nearby. Additionally I wanted an extra shelf above the small bookshelf under the desk for some generic storage space.",qt,K,Ze,zt,b,Ke="I made a couple sketches for the stand but quickly moved to Ondsel to just get started with the models. Legs connected with finger joints to the top board and opposing legs connected to each other.",At,Q,Qe,Dt,w,$e="Beginning with measurements and inputting them into Ondsel’s spreadsheet.",Ft,$,tl,Nt,C,el="The workflow was quite familiar at this point. Create sketches, reference the spreadsheet’s cells to get the correct dimensions.",Et,tt,ll,Ot,x,il='Even though the basic structure is dead-simple, I made an attempt to make it look at least a bit interesting by curving the legs in a similar style as I did with my <a href="fablab-03">previous cutting project</a>. It looked odd though. The contrast of the curved and straight edges ended up looking somewhat jarring, I think. I didn’t want to spend too much time on just the design, so I moved on. I also didn’t want to risk the stability of the final object by adding too many holes and curves and making it too weird. A fair tradeoff considering my lack of experience.',Vt,et,sl,Rt,_,nl="I added a bit of curve to the cross-beams though. Getting appropriate constraints placed for the b-splines was a bit tedious. I wasn’t aware of any mirror or copy tool in the sketcher workspace so I just placed identical constraints on both sides.",Wt,lt,al,Jt,y,ol="Finished PC stand design. Lifting it just 20 cm off the floor. It still had to fit under the edge of my desk.",Ut,it,ul,Yt,I,rl="The shelf design was also really simple. Just two legs on the sides and a piece of wood in the corner to add some stability.",Bt,k,fl="I created the shelf as a separate file. Spreadsheets in Ondsel (so presumably in FreeCAD also) are tied to a particular file, but they can still be referenced from other files. The autocomplete is fairly good, but roughly you would reference a cell like this:",Xt,j,ml="<code>&lt;&lt;file_name&gt;&gt;#Spreadsheet.parameter_name</code>",Zt,M,hl="So I just referenced the shelf parameters in the original spreadsheet and didn’t have to create a new one.",Kt,st,pl,Qt,T,cl="I used the boolean <strong>Cut</strong> operator in the <strong>Part</strong> workbench for the cutouts for the finger joints. It’s a much quicker workflow than using shape binders for this purpose and I also find it more intuitive. It creates a bit of nesting in the tree view, but with this level of complexity it’s perfectly manageable.",$t,nt,dl,te,P,vl='I roughly followed the process presented in the <a href="https://www.youtube.com/watch?v=kbu4pEzIPl4" rel="nofollow">nesting and tool paths tutorial</a> for assembling the pieces into the final layout. I saved each body as its own file, created a new file for the assembly and used the <strong>A2plus</strong> workbench (which had to be enabled from the addon manager) to import the files back. The workbench has a handy selection of constraints for positioning the pieces onto the same level.',ee,at,gl,le,G,bl="From the <strong>draft workbench</strong> I then selected all the pieces and created Shape2DViews out of them and exported them out as a .dxf.",ie,H,wl="Milling",se,ot,Cl,ne,L,xl="The most important thing to remember about CNC milling is to never do it alone. Someone should always be there when you’re in the room in case something goes wrong. The CNC machine is the most dangerous machine at the lab, and violent things can happen if clothes or hair or fingers get caught in it.",ae,ut,_l,oe,S,yl="The first actual step of the process is importing the .dxf files to VCarve to create the tool paths. The imported file has to be converted into a curve, and then ungrouped because the conversion will turn everything into a single curve. The ungrouped path segments can then be merged by distance.",ue,rt,Il,re,q,kl="Calculating the correct <strong>feed rate</strong> is important and is done by multiplying three values together.",fe,z,jl="<li>Spindle speed is how fast the tool rotates. Predetermined for the machine, as I undestand.</li> <li>Chip load is determined by the material being milled. 0.6 - 0.7 is the range for soft and hard woods respectively.</li> <li>Number of cutting edges on the tool. In this case 2.</li>",me,ft,Ml,he,A,Tl="Since the milling tool has a thickness, and is round, sharp inner corners are impossible to create. Outer corners are doable. To compensate for this and to allow for such joints to fit together, fillets have to be cut in the inner corners to accommodate for the sharp edge that’s coming in. These can be created in VCarve or already in the CAD phase.",pe,mt,Pl,ce,D,Gl="In my case, I had just exported the .dxf with sharp corners, so I had to add the fillets in VCarve. Problem was, the curve conversion turned turned even visually straight lines into bezier curves with handles. The dog bone fillet wouldn’t work on those. Thankfully these could be easily converted to straight lines just by hitting the <code>l</code> key. There will be a squiggle next to the cursor showing you can do this.",de,ht,Hl,ve,pt,Ll,ge,F,Sl="Tabs are also useful to add. Just a couple of tabs can stop a piece from moving after being cut out.",be,N,ql="VCarve will show you a 3D preview of the cutting job, toolpaths and all.",we,ct,zl,Ce,E,Al="For my project, there were some paths that had to be set to cut from the outside, and some from the inside. These were separated into two different toolpaths, but exported to the same file because there was no need to switch out tools for my project.",xe,dt,Dl,_e,O,Fl="Remember to wear gloves when handling the materials. Especially in the case of wood, when you can get splinters.",ye,vt,Nl,Ie,V,El="We set the origin positions on the XY-axis to the bottom left corner. The Z-axis was set with the help of an additional tool, a small cylinder-like object hanging on the left of the machine. The machine knows the height of the object and lowers the tool onto it to determine the top of the material.",ke,gt,Ol,je,R,Vl="The cutting job had started. It was not necessary to be in the room while machine is running.",Me,bt,Rl,Te,W,Wl="For a couple pieces it turned out that they weren’t set to be cut from the outside like they should, resulting in tabs that were too small. They were small enough to fit on the leftover section of the plywood stock, so we could just create a new toolpath with just the two shapes, properly set to cut on the outside.",Pe,wt,Jl,Ge,J,Ul="When the job was finished, I removed the pieces from the tabs with a chisel. I was slightly hasty with this, so for a couple pieces I ended up trying to rip them out before a tab was cut off. This caused a bit of damage, but nothing too bad. Those parts wouldn’t be visible anyway.",He,Ct,Yl,Le,U,Bl="The CNC cut edges end up being quite jaggy, so some sanding was needed to finish the surfaces before gluing.",Se,xt,Xl,qe,Y,Zl="All pieces in a pile.",ze,_t,Kl,Ae,B,Ql="One layer in the slots wasn’t cut, for some reason. A chisel was fine enough to finish them.",De,yt,$l,Fe,X,ti="Assembly test. No offset was needed, and the pieces were a decently snug fit. Not tight enough to be sturdy without glue.",Ne,It,ei,Ee,kt,li,Oe,jt,ii,Ve,Z,si="When the glue dried, both the shelf and the stand were nice and sturdy. I still wanted to sand them a bit and paint them a nicer color, but that had to wait.";return{c(){m=s("h3"),m.textContent=We,Mt=a(),h=s("ul"),h.innerHTML=Je,Tt=a(),p=s("h1"),p.textContent=Ue,Pt=a(),c=s("pre"),Gt=new ui(!1),Ht=a(),d=s("h1"),d.textContent=Ye,Lt=a(),v=s("p"),v.textContent=Be,St=a(),g=s("p"),g.textContent=Xe,qt=a(),K=s("img"),zt=a(),b=s("p"),b.textContent=Ke,At=a(),Q=s("img"),Dt=a(),w=s("p"),w.textContent=$e,Ft=a(),$=s("img"),Nt=a(),C=s("p"),C.textContent=el,Et=a(),tt=s("img"),Ot=a(),x=s("p"),x.innerHTML=il,Vt=a(),et=s("img"),Rt=a(),_=s("p"),_.textContent=nl,Wt=a(),lt=s("img"),Jt=a(),y=s("p"),y.textContent=ol,Ut=a(),it=s("img"),Yt=a(),I=s("p"),I.textContent=rl,Bt=a(),k=s("p"),k.textContent=fl,Xt=a(),j=s("p"),j.innerHTML=ml,Zt=a(),M=s("p"),M.textContent=hl,Kt=a(),st=s("img"),Qt=a(),T=s("p"),T.innerHTML=cl,$t=a(),nt=s("img"),te=a(),P=s("p"),P.innerHTML=vl,ee=a(),at=s("img"),le=a(),G=s("p"),G.innerHTML=bl,ie=a(),H=s("h1"),H.textContent=wl,se=a(),ot=s("img"),ne=a(),L=s("p"),L.textContent=xl,ae=a(),ut=s("img"),oe=a(),S=s("p"),S.textContent=yl,ue=a(),rt=s("img"),re=a(),q=s("p"),q.innerHTML=kl,fe=a(),z=s("ul"),z.innerHTML=jl,me=a(),ft=s("img"),he=a(),A=s("p"),A.textContent=Tl,pe=a(),mt=s("img"),ce=a(),D=s("p"),D.innerHTML=Gl,de=a(),ht=s("img"),ve=a(),pt=s("img"),ge=a(),F=s("p"),F.textContent=Sl,be=a(),N=s("p"),N.textContent=ql,we=a(),ct=s("img"),Ce=a(),E=s("p"),E.textContent=Al,xe=a(),dt=s("img"),_e=a(),O=s("p"),O.textContent=Fl,ye=a(),vt=s("img"),Ie=a(),V=s("p"),V.textContent=El,ke=a(),gt=s("img"),je=a(),R=s("p"),R.textContent=Vl,Me=a(),bt=s("img"),Te=a(),W=s("p"),W.textContent=Wl,Pe=a(),wt=s("img"),Ge=a(),J=s("p"),J.textContent=Ul,He=a(),Ct=s("img"),Le=a(),U=s("p"),U.textContent=Bl,Se=a(),xt=s("img"),qe=a(),Y=s("p"),Y.textContent=Zl,ze=a(),_t=s("img"),Ae=a(),B=s("p"),B.textContent=Ql,De=a(),yt=s("img"),Fe=a(),X=s("p"),X.textContent=ti,Ne=a(),It=s("img"),Ee=a(),kt=s("img"),Oe=a(),jt=s("img"),Ve=a(),Z=s("p"),Z.textContent=si,this.h()},l(t){m=n(t,"H3",{"data-svelte-h":!0}),u(m)!=="svelte-sbwzft"&&(m.textContent=We),Mt=o(t),h=n(t,"UL",{"data-svelte-h":!0}),u(h)!=="svelte-6l8uzx"&&(h.innerHTML=Je),Tt=o(t),p=n(t,"H1",{"data-svelte-h":!0}),u(p)!=="svelte-g9rspt"&&(p.textContent=Ue),Pt=o(t),c=n(t,"PRE",{class:!0});var e=ri(c);Gt=fi(e,!1),e.forEach(l),Ht=o(t),d=n(t,"H1",{"data-svelte-h":!0}),u(d)!=="svelte-rhbf2e"&&(d.textContent=Ye),Lt=o(t),v=n(t,"P",{"data-svelte-h":!0}),u(v)!=="svelte-mg81il"&&(v.textContent=Be),St=o(t),g=n(t,"P",{"data-svelte-h":!0}),u(g)!=="svelte-j55pkp"&&(g.textContent=Xe),qt=o(t),K=n(t,"IMG",{src:!0}),zt=o(t),b=n(t,"P",{"data-svelte-h":!0}),u(b)!=="svelte-1ia4sup"&&(b.textContent=Ke),At=o(t),Q=n(t,"IMG",{src:!0}),Dt=o(t),w=n(t,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1tnt5bo"&&(w.textContent=$e),Ft=o(t),$=n(t,"IMG",{src:!0}),Nt=o(t),C=n(t,"P",{"data-svelte-h":!0}),u(C)!=="svelte-5l5ktj"&&(C.textContent=el),Et=o(t),tt=n(t,"IMG",{src:!0}),Ot=o(t),x=n(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1xlwwjf"&&(x.innerHTML=il),Vt=o(t),et=n(t,"IMG",{src:!0}),Rt=o(t),_=n(t,"P",{"data-svelte-h":!0}),u(_)!=="svelte-l9lp3i"&&(_.textContent=nl),Wt=o(t),lt=n(t,"IMG",{src:!0}),Jt=o(t),y=n(t,"P",{"data-svelte-h":!0}),u(y)!=="svelte-1io6zyb"&&(y.textContent=ol),Ut=o(t),it=n(t,"IMG",{src:!0}),Yt=o(t),I=n(t,"P",{"data-svelte-h":!0}),u(I)!=="svelte-3p5s41"&&(I.textContent=rl),Bt=o(t),k=n(t,"P",{"data-svelte-h":!0}),u(k)!=="svelte-13uqvfc"&&(k.textContent=fl),Xt=o(t),j=n(t,"P",{"data-svelte-h":!0}),u(j)!=="svelte-sw9rnj"&&(j.innerHTML=ml),Zt=o(t),M=n(t,"P",{"data-svelte-h":!0}),u(M)!=="svelte-qzgnon"&&(M.textContent=hl),Kt=o(t),st=n(t,"IMG",{src:!0}),Qt=o(t),T=n(t,"P",{"data-svelte-h":!0}),u(T)!=="svelte-165wkut"&&(T.innerHTML=cl),$t=o(t),nt=n(t,"IMG",{src:!0}),te=o(t),P=n(t,"P",{"data-svelte-h":!0}),u(P)!=="svelte-uxtw80"&&(P.innerHTML=vl),ee=o(t),at=n(t,"IMG",{src:!0}),le=o(t),G=n(t,"P",{"data-svelte-h":!0}),u(G)!=="svelte-1ubzyo6"&&(G.innerHTML=bl),ie=o(t),H=n(t,"H1",{"data-svelte-h":!0}),u(H)!=="svelte-10znkaw"&&(H.textContent=wl),se=o(t),ot=n(t,"IMG",{src:!0}),ne=o(t),L=n(t,"P",{"data-svelte-h":!0}),u(L)!=="svelte-9yb1ky"&&(L.textContent=xl),ae=o(t),ut=n(t,"IMG",{src:!0}),oe=o(t),S=n(t,"P",{"data-svelte-h":!0}),u(S)!=="svelte-1bwoq6l"&&(S.textContent=yl),ue=o(t),rt=n(t,"IMG",{src:!0}),re=o(t),q=n(t,"P",{"data-svelte-h":!0}),u(q)!=="svelte-1tdk5zv"&&(q.innerHTML=kl),fe=o(t),z=n(t,"UL",{"data-svelte-h":!0}),u(z)!=="svelte-1ju52a9"&&(z.innerHTML=jl),me=o(t),ft=n(t,"IMG",{src:!0}),he=o(t),A=n(t,"P",{"data-svelte-h":!0}),u(A)!=="svelte-11kkbdx"&&(A.textContent=Tl),pe=o(t),mt=n(t,"IMG",{src:!0}),ce=o(t),D=n(t,"P",{"data-svelte-h":!0}),u(D)!=="svelte-rrwdvd"&&(D.innerHTML=Gl),de=o(t),ht=n(t,"IMG",{src:!0}),ve=o(t),pt=n(t,"IMG",{src:!0}),ge=o(t),F=n(t,"P",{"data-svelte-h":!0}),u(F)!=="svelte-1cvvnm5"&&(F.textContent=Sl),be=o(t),N=n(t,"P",{"data-svelte-h":!0}),u(N)!=="svelte-1mzah3a"&&(N.textContent=ql),we=o(t),ct=n(t,"IMG",{src:!0}),Ce=o(t),E=n(t,"P",{"data-svelte-h":!0}),u(E)!=="svelte-g6roo8"&&(E.textContent=Al),xe=o(t),dt=n(t,"IMG",{src:!0}),_e=o(t),O=n(t,"P",{"data-svelte-h":!0}),u(O)!=="svelte-n4wmof"&&(O.textContent=Fl),ye=o(t),vt=n(t,"IMG",{src:!0}),Ie=o(t),V=n(t,"P",{"data-svelte-h":!0}),u(V)!=="svelte-12rlsfy"&&(V.textContent=El),ke=o(t),gt=n(t,"IMG",{src:!0}),je=o(t),R=n(t,"P",{"data-svelte-h":!0}),u(R)!=="svelte-8w26wi"&&(R.textContent=Vl),Me=o(t),bt=n(t,"IMG",{src:!0}),Te=o(t),W=n(t,"P",{"data-svelte-h":!0}),u(W)!=="svelte-yhwlsd"&&(W.textContent=Wl),Pe=o(t),wt=n(t,"IMG",{src:!0}),Ge=o(t),J=n(t,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1copstf"&&(J.textContent=Ul),He=o(t),Ct=n(t,"IMG",{src:!0}),Le=o(t),U=n(t,"P",{"data-svelte-h":!0}),u(U)!=="svelte-18rx2u"&&(U.textContent=Bl),Se=o(t),xt=n(t,"IMG",{src:!0}),qe=o(t),Y=n(t,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-gly85g"&&(Y.textContent=Zl),ze=o(t),_t=n(t,"IMG",{src:!0}),Ae=o(t),B=n(t,"P",{"data-svelte-h":!0}),u(B)!=="svelte-1cvi4f7"&&(B.textContent=Ql),De=o(t),yt=n(t,"IMG",{src:!0}),Fe=o(t),X=n(t,"P",{"data-svelte-h":!0}),u(X)!=="svelte-19i4yyi"&&(X.textContent=ti),Ne=o(t),It=n(t,"IMG",{src:!0}),Ee=o(t),kt=n(t,"IMG",{src:!0}),Oe=o(t),jt=n(t,"IMG",{src:!0}),Ve=o(t),Z=n(t,"P",{"data-svelte-h":!0}),u(Z)!=="svelte-6ni3ks"&&(Z.textContent=si),this.h()},h(){Gt.a=null,r(c,"class","language-undefined"),f(K.src,Ze="fab7/01.jpg")||r(K,"src",Ze),f(Q.src,Qe="fab7/02.png")||r(Q,"src",Qe),f($.src,tl="fab7/03.png")||r($,"src",tl),f(tt.src,ll="fab7/04.png")||r(tt,"src",ll),f(et.src,sl="fab7/05.png")||r(et,"src",sl),f(lt.src,al="fab7/06.png")||r(lt,"src",al),f(it.src,ul="fab7/07.png")||r(it,"src",ul),f(st.src,pl="fab7/08.png")||r(st,"src",pl),f(nt.src,dl="fab7/09.png")||r(nt,"src",dl),f(at.src,gl="fab7/10.png")||r(at,"src",gl),f(ot.src,Cl="fab7/4.jpg")||r(ot,"src",Cl),f(ut.src,_l="fab7/1.jpg")||r(ut,"src",_l),f(rt.src,Il="fab7/2.jpg")||r(rt,"src",Il),f(ft.src,Ml="fab7/3.jpg")||r(ft,"src",Ml),f(mt.src,Pl="fab7/5.jpg")||r(mt,"src",Pl),f(ht.src,Hl="fab7/6.jpg")||r(ht,"src",Hl),f(pt.src,Ll="fab7/7.jpg")||r(pt,"src",Ll),f(ct.src,zl="fab7/11.jpg")||r(ct,"src",zl),f(dt.src,Dl="fab7/8.jpg")||r(dt,"src",Dl),f(vt.src,Nl="fab7/10.jpg")||r(vt,"src",Nl),f(gt.src,Ol="fab7/12.jpg")||r(gt,"src",Ol),f(bt.src,Rl="fab7/13.jpg")||r(bt,"src",Rl),f(wt.src,Jl="fab7/14.jpg")||r(wt,"src",Jl),f(Ct.src,Yl="fab7/15.jpg")||r(Ct,"src",Yl),f(xt.src,Xl="fab7/16.jpg")||r(xt,"src",Xl),f(_t.src,Kl="fab7/17.jpg")||r(_t,"src",Kl),f(yt.src,$l="fab7/19.jpg")||r(yt,"src",$l),f(It.src,ei="fab7/20.jpg")||r(It,"src",ei),f(kt.src,li="fab7/21.jpg")||r(kt,"src",li),f(jt.src,ii="fab7/22.jpg")||r(jt,"src",ii)},m(t,e){i(t,m,e),i(t,Mt,e),i(t,h,e),i(t,Tt,e),i(t,p,e),i(t,Pt,e),i(t,c,e),Gt.m(ai,c),i(t,Ht,e),i(t,d,e),i(t,Lt,e),i(t,v,e),i(t,St,e),i(t,g,e),i(t,qt,e),i(t,K,e),i(t,zt,e),i(t,b,e),i(t,At,e),i(t,Q,e),i(t,Dt,e),i(t,w,e),i(t,Ft,e),i(t,$,e),i(t,Nt,e),i(t,C,e),i(t,Et,e),i(t,tt,e),i(t,Ot,e),i(t,x,e),i(t,Vt,e),i(t,et,e),i(t,Rt,e),i(t,_,e),i(t,Wt,e),i(t,lt,e),i(t,Jt,e),i(t,y,e),i(t,Ut,e),i(t,it,e),i(t,Yt,e),i(t,I,e),i(t,Bt,e),i(t,k,e),i(t,Xt,e),i(t,j,e),i(t,Zt,e),i(t,M,e),i(t,Kt,e),i(t,st,e),i(t,Qt,e),i(t,T,e),i(t,$t,e),i(t,nt,e),i(t,te,e),i(t,P,e),i(t,ee,e),i(t,at,e),i(t,le,e),i(t,G,e),i(t,ie,e),i(t,H,e),i(t,se,e),i(t,ot,e),i(t,ne,e),i(t,L,e),i(t,ae,e),i(t,ut,e),i(t,oe,e),i(t,S,e),i(t,ue,e),i(t,rt,e),i(t,re,e),i(t,q,e),i(t,fe,e),i(t,z,e),i(t,me,e),i(t,ft,e),i(t,he,e),i(t,A,e),i(t,pe,e),i(t,mt,e),i(t,ce,e),i(t,D,e),i(t,de,e),i(t,ht,e),i(t,ve,e),i(t,pt,e),i(t,ge,e),i(t,F,e),i(t,be,e),i(t,N,e),i(t,we,e),i(t,ct,e),i(t,Ce,e),i(t,E,e),i(t,xe,e),i(t,dt,e),i(t,_e,e),i(t,O,e),i(t,ye,e),i(t,vt,e),i(t,Ie,e),i(t,V,e),i(t,ke,e),i(t,gt,e),i(t,je,e),i(t,R,e),i(t,Me,e),i(t,bt,e),i(t,Te,e),i(t,W,e),i(t,Pe,e),i(t,wt,e),i(t,Ge,e),i(t,J,e),i(t,He,e),i(t,Ct,e),i(t,Le,e),i(t,U,e),i(t,Se,e),i(t,xt,e),i(t,qe,e),i(t,Y,e),i(t,ze,e),i(t,_t,e),i(t,Ae,e),i(t,B,e),i(t,De,e),i(t,yt,e),i(t,Fe,e),i(t,X,e),i(t,Ne,e),i(t,It,e),i(t,Ee,e),i(t,kt,e),i(t,Oe,e),i(t,jt,e),i(t,Ve,e),i(t,Z,e)},p:Re,i:Re,o:Re,d(t){t&&(l(m),l(Mt),l(h),l(Tt),l(p),l(Pt),l(c),l(Ht),l(d),l(Lt),l(v),l(St),l(g),l(qt),l(K),l(zt),l(b),l(At),l(Q),l(Dt),l(w),l(Ft),l($),l(Nt),l(C),l(Et),l(tt),l(Ot),l(x),l(Vt),l(et),l(Rt),l(_),l(Wt),l(lt),l(Jt),l(y),l(Ut),l(it),l(Yt),l(I),l(Bt),l(k),l(Xt),l(j),l(Zt),l(M),l(Kt),l(st),l(Qt),l(T),l($t),l(nt),l(te),l(P),l(ee),l(at),l(le),l(G),l(ie),l(H),l(se),l(ot),l(ne),l(L),l(ae),l(ut),l(oe),l(S),l(ue),l(rt),l(re),l(q),l(fe),l(z),l(me),l(ft),l(he),l(A),l(pe),l(mt),l(ce),l(D),l(de),l(ht),l(ve),l(pt),l(ge),l(F),l(be),l(N),l(we),l(ct),l(Ce),l(E),l(xe),l(dt),l(_e),l(O),l(ye),l(vt),l(Ie),l(V),l(ke),l(gt),l(je),l(R),l(Me),l(bt),l(Te),l(W),l(Pe),l(wt),l(Ge),l(J),l(He),l(Ct),l(Le),l(U),l(Se),l(xt),l(qe),l(Y),l(ze),l(_t),l(Ae),l(B),l(De),l(yt),l(Fe),l(X),l(Ne),l(It),l(Ee),l(kt),l(Oe),l(jt),l(Ve),l(Z))}}}const vi={title:"Computer-Controlled Machining",date:"2024-03-18",description:"The seventh assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab7/19.jpg"};class gi extends mi{constructor(m){super(),hi(this,m,null,pi,oi,{})}}export{gi as default,vi as metadata};
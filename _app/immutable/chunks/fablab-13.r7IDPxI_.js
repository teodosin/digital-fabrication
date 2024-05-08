import{s as fs,e as a,a as p,H as lt,c as o,g as i,b as l,j as it,k as ct,h as n,f as c,d as pt,i as e,n as rn}from"./scheduler.WqRDolvd.js";import{S as ms,i as ws}from"./index.0NVKo1ab.js";function vs(cs){let k,kn="Table of Contents",ut,h,hn='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#concept">Concept</a></li> <li><a href="#process">Process</a><ul><li><a href="#ble">BLE</a></li> <li><a href="#mux">MUX</a></li></ul></li> <li><a href="#code">Code</a><ul><li><a href="#esp32">ESP32</a></li> <li><a href="#bevy">Bevy</a></li></ul></li>',rt,d,dn="Assignment",kt,f,ht,us=`<code class="language-undefined">Group assignment
* Join one of the introduction sessions.
* Elect a group leader.
* Document hands-on exercise with available interface examples.
* Optionally discuss an additional example that you have used in the past or wish to explore.

Individual assignment
* Link to the group assignment page.
* Describe what you learned from the group assignment on your documentation page briefly.
* Write an application that interfaces a user with an input and/or output device that you made.
* Include a hero video and source files of the application in your documentation.</code>`,dt,m,fn="Group",ft,w,mn="Group assignment this week was handled by Miro Keimiöniemi (link pending)",mt,v,wn="Concept",wt,x,vn='The agenda for this week was to set up the initial working version of the debug app for my final project, <a href="fablab-00">the gloves</a>.',vt,b,xn='I chose the Rust based <a href="https://bevyengine.org/" rel="nofollow">Bevy game engine</a> for this project. Using it feels more like using a framework than an engine, really, since there’s no standalone editor or other executable that you run to make things. Instead, you add it as a dependency like any other crate in your project. If using a game engine sounds like overkill for a simple app, you can pick and choose only the features your project needs, making it potentially quite lightweight.',xt,g,bn='To use this engine, you of course would need Rust installed on your machine. I’m using the <a href="https://rustup.rs/" rel="nofollow">Rustup</a> tool to manage Rust installations.',bt,y,gn='Then you would be best served by following along with the <a href="https://bevyengine.org/learn/quick-start/getting-started/" rel="nofollow">Bevy book</a>. Create a rust project, add Bevy as a dependency, and then add Bevy’s recommended optimisations to the cargo.toml file. It’s all explained in the book.',gt,_,yn="I’ve used Bevy before, but never anything async or with networking. Those aspects would be new to me and useful for my future projects using the engine.",yt,C,_n='For the code going into the ESP32, I first thought I’d be following the tutorials mentioned in the <a href="fablab-12">previous assignment post</a>. The ESP32 was going to be here, at first, an <a href="https://dev.to/apollolabsbin/embedded-rust-bluetooth-on-esp-ble-server-1no8" rel="nofollow">unsecure BLE server.</a>. There were however some compiler issues that I was unable to solve at first. So in the interest of time I opted for <a href="https://github.com/bjoernQ/bleps" rel="nofollow">Bleps</a>, which I did manage to get working sooner.',_t,P,Cn='For the code going into the Bevy app, I need two things. First, a library to handle connecting to bluetooth devices. The one I found and got working was <a href="https://github.com/deviceplug/btleplug" rel="nofollow">btleplug</a>. Since that crate seemed to heavily use async, I also needed <a href="https://github.com/EkardNT/bevy-tokio-tasks/tree/master" rel="nofollow">bevy-tokio-tasks</a> to provide better async support for Bevy. That crate was somewhat old but it was relatively trivial to update to work with the latest version of Bevy.',Ct,I,Pn="Process",Pt,T,In="There was a lot of frustration while getting these things to work. I didn’t document all the struggles with the compiler, as there’s way too many individual stumbling blocks there to effectively list here. Things to do with choosing the correct compilation targets, reconciling incompatible dependencies between examples found online etc. Instead I’ll start with the debugging I did with the bluetooth connection, and then the multiplexer. Final working code will be appended at the end of this post once it is, well, working.",It,M,Tn="BLE",Tt,H,Mn="BLE = Bluetooth Low Energy.",Mt,L,Hn="Once the Bevy app and embedded program were up, I tried getting them to connect to each other. Eventually, it was successful, and I was able to send some hard-coded messages from the ESP32 to the Bevy app via bluetooth.",Ht,E,Ln,Lt,B,En="The connection was highly unreliable, and I didn’t know why. There were issues with timeouts and local connection aborts that I didn’t know how to debug. So let’s attempt to make sense of some of them.",Et,A,Bt,rs=`<code class="language-undefined">Starting scan on hci0 (usb:v1D6Bp0246d0540)...
Peripheral &quot;Ruka&quot; is connected: false
Connecting to peripheral &quot;Ruka&quot;...
Error connecting to peripheral, skipping: Service discovery timed out</code>`,At,j,Bn="Service discovery timed out.",jt,S,An="(WIP)",St,q,jn="MUX",qt,G,Sn='This was the first time I tried programming the <a href="fablab-10">input board</a>. I was behind on that assignment and getting the physical board finished, so I didn’t have time to test it until this week. And when testing, it seemed there were problems with the multiplexer.',Gt,R,qn,Rt,D,Gn="I wasn’t at the lab when I encountered all these issues, so I had to improvise a bit with the debugging. The input board didn’t have an LED, but my previously designed board did. I connected the two boards with alligator clips and poked around to see which pins and traces were being powered and which weren’t.",Dt,O,Rn="For reference, here is the PCB footprint of the board. I was mostly testing the thumb flex sensor connected to sockets labeled <code>J1</code>. I had a piece of code that read the value on the analog pin, which was connected to the multiplexer. At one point I cycled through all the possible selector values and read the output from all of the multiplexer pins, and none of them were reacting to the flex sensor.",Ot,F,Dn,Ft,U,On="The intended circuit was that the power is first drawn from the <code>5V</code> pin, lead through the <code>R1</code> resistor, then the flex sensor at <code>J1</code> (which is a variable resistor, essentially) and then to ground. The route to the multiplexer pin <code>A4</code> in the corner of the mux starts from between the two resistors. My understanding is that which resistor is on the power side and which on the ground side doesn’t really matter, since I’ve seen sources with both setups.",Ut,z,Fn="The first issue was quickly found and easily fixed. I had selected the wrong pins to be the selector pins for the multiplexer. I only noticed when I connected a pin that wasn’t being used at all to the LED, and it lit up. It was being used as one of the selectors. Unfortunately, switching to the correct selector pins wasn’t enough to fix the issue.",zt,W,Un='The second thing I checked was whether there was power coming out of the flex sensor circuit. There wasn’t, at least not enough to turn on the LED. There was power going into the resistor <code>R1</code>, lighting up the LED brightly. The trace after the resistor lit it up dimly, and the trace after the flex sensor, not at all. So one hypothesis for what could be wrong is that the resistance is too much and there isn’t anything left for the analog pin to measure. The resistor is 47k0hms, a value that was recommended by <a href="https://learn.sparkfun.com/tutorials/flex-sensor-hookup-guide/all" rel="nofollow">this source</a> for example. <a href="https://www.youtube.com/watch?v=_tXWoplbqWo" rel="nofollow">This video</a> has the order of resistors flipped, and an even higher Ohm resistor. It seemed unlikely that this was the issue, but I couldn’t rule it out just yet.',Wt,V,zn="The multiplexer has a pin labeled <code>!E</code>, which is the enable pin. When that pin is powered, the entire multiplexer is off. So it should be unpowered for the circuit to work. I had connected that pin, as well as the Ground and Negative Power pins all to ground.",Vt,J,Wn="Finally I tried to measure the com pin on the multiplexer to see if it could output any power.",Jt,X,Vn="This was all desperate work, and in hindsight I don’t think I understood how the multiplexer should be debugged. Back at the lab I got help, and we went to the oscilloscope to properly look at the voltages.",Xt,N,Jn,Nt,u,Xn="",Nn,Yt,r,Yn="",Kn,Kt,Y,Qn="Yeah. Turned out the circuits were fine. There was a 2V difference in the voltage of the analog pin when the flex sensor was bent. So the problem had to be in the software.",Qt,K,Zn="Code",Zt,Q,$n="Both of the programs are split into multiple files. I don’t understand a lot of it. Most is hacked together from examples.",$t,Z,ts="ESP32",tn,$,nn,ks=`<code class="language-rust"><span class="token comment">// main.rs</span>

<span class="token comment">// Pending, doesn't read the analog inputs properly yet</span></code>`,sn,tt,en,hs=`<code class="language-rust"><span class="token comment">// hand.rs</span>

<span class="token comment">// Abstraction that connects fingers to specific pins on the multiplexer. </span>
<span class="token comment">// Useful in case the pins change in future iterations or when </span>
<span class="token comment">// switching to the other hand. </span></code>`,an,nt,on,ds=`<code class="language-rust"><span class="token comment">// mux.rs</span>

<span class="token comment">// Code that handles the multiplexer </span>

<span class="token keyword">use</span> <span class="token namespace">esp_hal<span class="token punctuation">::</span>gpio<span class="token punctuation">::</span></span><span class="token punctuation">&#123;</span><span class="token class-name">GpioPin</span><span class="token punctuation">,</span> <span class="token class-name">Output</span><span class="token punctuation">,</span> <span class="token class-name">PushPull</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">MuxPins</span> <span class="token punctuation">&#123;</span>
    <span class="token constant">A0</span><span class="token punctuation">,</span>
    <span class="token constant">A1</span><span class="token punctuation">,</span>
    <span class="token constant">A2</span><span class="token punctuation">,</span>
    <span class="token constant">A3</span><span class="token punctuation">,</span>
    <span class="token constant">A4</span><span class="token punctuation">,</span>
    <span class="token constant">A5</span><span class="token punctuation">,</span>
    <span class="token constant">A6</span><span class="token punctuation">,</span>
    <span class="token constant">A7</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/// Struct for the selector pins, mostly just to pass</span>
<span class="token comment">/// them in more easily as a single argument to pin_set_mux_selector</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Selector</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">pub</span> s2<span class="token punctuation">:</span> <span class="token class-name">GpioPin</span><span class="token operator">&lt;</span><span class="token class-name">Output</span><span class="token operator">&lt;</span><span class="token class-name">PushPull</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> s1<span class="token punctuation">:</span> <span class="token class-name">GpioPin</span><span class="token operator">&lt;</span><span class="token class-name">Output</span><span class="token operator">&lt;</span><span class="token class-name">PushPull</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> s0<span class="token punctuation">:</span> <span class="token class-name">GpioPin</span><span class="token operator">&lt;</span><span class="token class-name">Output</span><span class="token operator">&lt;</span><span class="token class-name">PushPull</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/// Set the selector pins correctly based on the desired mux pin</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">pin_set_mux_selector</span><span class="token punctuation">(</span>pin<span class="token punctuation">:</span> <span class="token class-name">MuxPins</span><span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Selector</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> <span class="token class-name">Selector</span> <span class="token punctuation">&#123;</span> <span class="token keyword">ref</span> <span class="token keyword">mut</span> s0<span class="token punctuation">,</span> <span class="token keyword">ref</span> <span class="token keyword">mut</span> s1<span class="token punctuation">,</span> <span class="token keyword">ref</span> <span class="token keyword">mut</span> s2 <span class="token punctuation">&#125;</span> <span class="token operator">=</span> s<span class="token punctuation">;</span>
    
    <span class="token keyword">match</span> pin <span class="token punctuation">&#123;</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A0</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A1</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A2</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A3</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A4</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A5</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A6</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_low</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token class-name">MuxPins</span><span class="token punctuation">::</span><span class="token constant">A7</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
            s2<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s1<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s0<span class="token punctuation">.</span><span class="token function">set_high</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pn,st,ns="Bevy",ln,et,ss="I will show screenshots of the app and then the final working code at the end.",cn,at,es="I wanted to learn how to use the [Bevy Hanabi] GPU particle plugin, so I started my project from their portal example.",un,ot,as;return{c(){k=a("h3"),k.textContent=kn,ut=p(),h=a("ul"),h.innerHTML=hn,rt=p(),d=a("h1"),d.textContent=dn,kt=p(),f=a("pre"),ht=new lt(!1),dt=p(),m=a("h1"),m.textContent=fn,ft=p(),w=a("p"),w.textContent=mn,mt=p(),v=a("h1"),v.textContent=wn,wt=p(),x=a("p"),x.innerHTML=vn,vt=p(),b=a("p"),b.innerHTML=xn,xt=p(),g=a("p"),g.innerHTML=bn,bt=p(),y=a("p"),y.innerHTML=gn,gt=p(),_=a("p"),_.textContent=yn,yt=p(),C=a("p"),C.innerHTML=_n,_t=p(),P=a("p"),P.innerHTML=Cn,Ct=p(),I=a("h1"),I.textContent=Pn,Pt=p(),T=a("p"),T.textContent=In,It=p(),M=a("h2"),M.textContent=Tn,Tt=p(),H=a("p"),H.textContent=Mn,Mt=p(),L=a("p"),L.textContent=Hn,Ht=p(),E=a("img"),Lt=p(),B=a("p"),B.textContent=En,Et=p(),A=a("pre"),Bt=new lt(!1),At=p(),j=a("p"),j.textContent=Bn,jt=p(),S=a("p"),S.textContent=An,St=p(),q=a("h2"),q.textContent=jn,qt=p(),G=a("p"),G.innerHTML=Sn,Gt=p(),R=a("img"),Rt=p(),D=a("p"),D.textContent=Gn,Dt=p(),O=a("p"),O.innerHTML=Rn,Ot=p(),F=a("img"),Ft=p(),U=a("p"),U.innerHTML=On,Ut=p(),z=a("p"),z.textContent=Fn,zt=p(),W=a("p"),W.innerHTML=Un,Wt=p(),V=a("p"),V.innerHTML=zn,Vt=p(),J=a("p"),J.textContent=Wn,Jt=p(),X=a("p"),X.textContent=Vn,Xt=p(),N=a("img"),Nt=p(),u=a("video"),u.innerHTML=Xn,Yt=p(),r=a("video"),r.innerHTML=Yn,Kt=p(),Y=a("p"),Y.textContent=Qn,Qt=p(),K=a("h1"),K.textContent=Zn,Zt=p(),Q=a("p"),Q.textContent=$n,$t=p(),Z=a("h2"),Z.textContent=ts,tn=p(),$=a("pre"),nn=new lt(!1),sn=p(),tt=a("pre"),en=new lt(!1),an=p(),nt=a("pre"),on=new lt(!1),pn=p(),st=a("h2"),st.textContent=ns,ln=p(),et=a("p"),et.textContent=ss,cn=p(),at=a("p"),at.textContent=es,un=p(),ot=a("img"),this.h()},l(t){k=o(t,"H3",{"data-svelte-h":!0}),i(k)!=="svelte-sbwzft"&&(k.textContent=kn),ut=l(t),h=o(t,"UL",{"data-svelte-h":!0}),i(h)!=="svelte-dh8wkx"&&(h.innerHTML=hn),rt=l(t),d=o(t,"H1",{"data-svelte-h":!0}),i(d)!=="svelte-g9rspt"&&(d.textContent=dn),kt=l(t),f=o(t,"PRE",{class:!0});var s=it(f);ht=ct(s,!1),s.forEach(n),dt=l(t),m=o(t,"H1",{"data-svelte-h":!0}),i(m)!=="svelte-kxioer"&&(m.textContent=fn),ft=l(t),w=o(t,"P",{"data-svelte-h":!0}),i(w)!=="svelte-i7hnr2"&&(w.textContent=mn),mt=l(t),v=o(t,"H1",{"data-svelte-h":!0}),i(v)!=="svelte-z7urna"&&(v.textContent=wn),wt=l(t),x=o(t,"P",{"data-svelte-h":!0}),i(x)!=="svelte-1vuoxka"&&(x.innerHTML=vn),vt=l(t),b=o(t,"P",{"data-svelte-h":!0}),i(b)!=="svelte-lv9v89"&&(b.innerHTML=xn),xt=l(t),g=o(t,"P",{"data-svelte-h":!0}),i(g)!=="svelte-ftk1zm"&&(g.innerHTML=bn),bt=l(t),y=o(t,"P",{"data-svelte-h":!0}),i(y)!=="svelte-mtmm8d"&&(y.innerHTML=gn),gt=l(t),_=o(t,"P",{"data-svelte-h":!0}),i(_)!=="svelte-cyysea"&&(_.textContent=yn),yt=l(t),C=o(t,"P",{"data-svelte-h":!0}),i(C)!=="svelte-ge8jc"&&(C.innerHTML=_n),_t=l(t),P=o(t,"P",{"data-svelte-h":!0}),i(P)!=="svelte-wwxbvg"&&(P.innerHTML=Cn),Ct=l(t),I=o(t,"H1",{"data-svelte-h":!0}),i(I)!=="svelte-18meajt"&&(I.textContent=Pn),Pt=l(t),T=o(t,"P",{"data-svelte-h":!0}),i(T)!=="svelte-bwhlq2"&&(T.textContent=In),It=l(t),M=o(t,"H2",{"data-svelte-h":!0}),i(M)!=="svelte-1s4d19d"&&(M.textContent=Tn),Tt=l(t),H=o(t,"P",{"data-svelte-h":!0}),i(H)!=="svelte-1d72qdo"&&(H.textContent=Mn),Mt=l(t),L=o(t,"P",{"data-svelte-h":!0}),i(L)!=="svelte-hn33mf"&&(L.textContent=Hn),Ht=l(t),E=o(t,"IMG",{src:!0,alt:!0}),Lt=l(t),B=o(t,"P",{"data-svelte-h":!0}),i(B)!=="svelte-be1lxd"&&(B.textContent=En),Et=l(t),A=o(t,"PRE",{class:!0});var os=it(A);Bt=ct(os,!1),os.forEach(n),At=l(t),j=o(t,"P",{"data-svelte-h":!0}),i(j)!=="svelte-1iqn70s"&&(j.textContent=Bn),jt=l(t),S=o(t,"P",{"data-svelte-h":!0}),i(S)!=="svelte-18ky0p3"&&(S.textContent=An),St=l(t),q=o(t,"H2",{"data-svelte-h":!0}),i(q)!=="svelte-83alt0"&&(q.textContent=jn),qt=l(t),G=o(t,"P",{"data-svelte-h":!0}),i(G)!=="svelte-4eifmj"&&(G.innerHTML=Sn),Gt=l(t),R=o(t,"IMG",{src:!0,alt:!0}),Rt=l(t),D=o(t,"P",{"data-svelte-h":!0}),i(D)!=="svelte-qkjezy"&&(D.textContent=Gn),Dt=l(t),O=o(t,"P",{"data-svelte-h":!0}),i(O)!=="svelte-pu8eem"&&(O.innerHTML=Rn),Ot=l(t),F=o(t,"IMG",{src:!0,alt:!0}),Ft=l(t),U=o(t,"P",{"data-svelte-h":!0}),i(U)!=="svelte-1st0tvc"&&(U.innerHTML=On),Ut=l(t),z=o(t,"P",{"data-svelte-h":!0}),i(z)!=="svelte-v7gjjf"&&(z.textContent=Fn),zt=l(t),W=o(t,"P",{"data-svelte-h":!0}),i(W)!=="svelte-tdqmkb"&&(W.innerHTML=Un),Wt=l(t),V=o(t,"P",{"data-svelte-h":!0}),i(V)!=="svelte-1oswdia"&&(V.innerHTML=zn),Vt=l(t),J=o(t,"P",{"data-svelte-h":!0}),i(J)!=="svelte-1vidx0w"&&(J.textContent=Wn),Jt=l(t),X=o(t,"P",{"data-svelte-h":!0}),i(X)!=="svelte-lbzbg2"&&(X.textContent=Vn),Xt=l(t),N=o(t,"IMG",{src:!0,alt:!0}),Nt=l(t),u=o(t,"VIDEO",{src:!0,"data-svelte-h":!0}),i(u)!=="svelte-11d2cw1"&&(u.innerHTML=Xn),Yt=l(t),r=o(t,"VIDEO",{src:!0,"data-svelte-h":!0}),i(r)!=="svelte-1b6j8m8"&&(r.innerHTML=Yn),Kt=l(t),Y=o(t,"P",{"data-svelte-h":!0}),i(Y)!=="svelte-13c84qb"&&(Y.textContent=Qn),Qt=l(t),K=o(t,"H1",{"data-svelte-h":!0}),i(K)!=="svelte-1ae1dy5"&&(K.textContent=Zn),Zt=l(t),Q=o(t,"P",{"data-svelte-h":!0}),i(Q)!=="svelte-8d3la0"&&(Q.textContent=$n),$t=l(t),Z=o(t,"H2",{"data-svelte-h":!0}),i(Z)!=="svelte-1b4cfnx"&&(Z.textContent=ts),tn=l(t),$=o(t,"PRE",{class:!0});var ps=it($);nn=ct(ps,!1),ps.forEach(n),sn=l(t),tt=o(t,"PRE",{class:!0});var ls=it(tt);en=ct(ls,!1),ls.forEach(n),an=l(t),nt=o(t,"PRE",{class:!0});var is=it(nt);on=ct(is,!1),is.forEach(n),pn=l(t),st=o(t,"H2",{"data-svelte-h":!0}),i(st)!=="svelte-3xpkxq"&&(st.textContent=ns),ln=l(t),et=o(t,"P",{"data-svelte-h":!0}),i(et)!=="svelte-1lsorsu"&&(et.textContent=ss),cn=l(t),at=o(t,"P",{"data-svelte-h":!0}),i(at)!=="svelte-1dgm0bl"&&(at.textContent=es),un=l(t),ot=o(t,"IMG",{src:!0,alt:!0}),this.h()},h(){ht.a=null,c(f,"class","language-undefined"),pt(E.src,Ln="fab13/01.png")||c(E,"src",Ln),c(E,"alt","successful data send"),Bt.a=null,c(A,"class","language-undefined"),pt(R.src,qn="fab13/02.jpg")||c(R,"src",qn),c(R,"alt","DIY debug setup"),pt(F.src,Dn="fab13/03.png")||c(F,"src",Dn),c(F,"alt","Footprint of the input board"),pt(N.src,Jn="fab13/04.jpg")||c(N,"src",Jn),c(N,"alt","Oscilloscope screenshot"),pt(u.src,Nn="fab13/05r.mp4")||c(u,"src",Nn),u.autoplay="autoplay",u.loop="loop",pt(r.src,Kn="fab13/06r.mp4")||c(r,"src",Kn),r.autoplay="autoplay",r.loop="loop",nn.a=null,c($,"class","language-rust"),en.a=null,c(tt,"class","language-rust"),on.a=null,c(nt,"class","language-rust"),pt(ot.src,as="fab13/s01.png")||c(ot,"src",as),c(ot,"alt","Bevy Hanabi example")},m(t,s){e(t,k,s),e(t,ut,s),e(t,h,s),e(t,rt,s),e(t,d,s),e(t,kt,s),e(t,f,s),ht.m(us,f),e(t,dt,s),e(t,m,s),e(t,ft,s),e(t,w,s),e(t,mt,s),e(t,v,s),e(t,wt,s),e(t,x,s),e(t,vt,s),e(t,b,s),e(t,xt,s),e(t,g,s),e(t,bt,s),e(t,y,s),e(t,gt,s),e(t,_,s),e(t,yt,s),e(t,C,s),e(t,_t,s),e(t,P,s),e(t,Ct,s),e(t,I,s),e(t,Pt,s),e(t,T,s),e(t,It,s),e(t,M,s),e(t,Tt,s),e(t,H,s),e(t,Mt,s),e(t,L,s),e(t,Ht,s),e(t,E,s),e(t,Lt,s),e(t,B,s),e(t,Et,s),e(t,A,s),Bt.m(rs,A),e(t,At,s),e(t,j,s),e(t,jt,s),e(t,S,s),e(t,St,s),e(t,q,s),e(t,qt,s),e(t,G,s),e(t,Gt,s),e(t,R,s),e(t,Rt,s),e(t,D,s),e(t,Dt,s),e(t,O,s),e(t,Ot,s),e(t,F,s),e(t,Ft,s),e(t,U,s),e(t,Ut,s),e(t,z,s),e(t,zt,s),e(t,W,s),e(t,Wt,s),e(t,V,s),e(t,Vt,s),e(t,J,s),e(t,Jt,s),e(t,X,s),e(t,Xt,s),e(t,N,s),e(t,Nt,s),e(t,u,s),e(t,Yt,s),e(t,r,s),e(t,Kt,s),e(t,Y,s),e(t,Qt,s),e(t,K,s),e(t,Zt,s),e(t,Q,s),e(t,$t,s),e(t,Z,s),e(t,tn,s),e(t,$,s),nn.m(ks,$),e(t,sn,s),e(t,tt,s),en.m(hs,tt),e(t,an,s),e(t,nt,s),on.m(ds,nt),e(t,pn,s),e(t,st,s),e(t,ln,s),e(t,et,s),e(t,cn,s),e(t,at,s),e(t,un,s),e(t,ot,s)},p:rn,i:rn,o:rn,d(t){t&&(n(k),n(ut),n(h),n(rt),n(d),n(kt),n(f),n(dt),n(m),n(ft),n(w),n(mt),n(v),n(wt),n(x),n(vt),n(b),n(xt),n(g),n(bt),n(y),n(gt),n(_),n(yt),n(C),n(_t),n(P),n(Ct),n(I),n(Pt),n(T),n(It),n(M),n(Tt),n(H),n(Mt),n(L),n(Ht),n(E),n(Lt),n(B),n(Et),n(A),n(At),n(j),n(jt),n(S),n(St),n(q),n(qt),n(G),n(Gt),n(R),n(Rt),n(D),n(Dt),n(O),n(Ot),n(F),n(Ft),n(U),n(Ut),n(z),n(zt),n(W),n(Wt),n(V),n(Vt),n(J),n(Jt),n(X),n(Xt),n(N),n(Nt),n(u),n(Yt),n(r),n(Kt),n(Y),n(Qt),n(K),n(Zt),n(Q),n($t),n(Z),n(tn),n($),n(sn),n(tt),n(an),n(nt),n(pn),n(st),n(ln),n(et),n(cn),n(at),n(un),n(ot))}}}const gs={title:"Application Programming",date:"2024-05-05",description:"The thirteenth assignment.",categories:["projects"],tags:["digital-fabrication"],cover:"fab13/s01.png"};class ys extends ms{constructor(k){super(),ws(this,k,null,vs,fs,{})}}export{ys as default,gs as metadata};

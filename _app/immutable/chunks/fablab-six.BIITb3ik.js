import{s as Y,e as s,a as l,H as R,c as o,g as c,b as i,j as W,k as q,h as e,f as z,i as a,n as P}from"./scheduler.WqRDolvd.js";import{S as J,i as K}from"./index.0NVKo1ab.js";function Q(B){let p,M="Table of Contents",x,u,I='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#programming">Programming</a></li>',_,r,A="Assignment",y,d,b,X=`<code class="language-undefined">Group assignment:

* Look at the datasheet of the RP2040 and reflect on what you learned.
* Try and compare other MCU&#39;s, such as other XIAO boards and ATtiny and SAMD boards.
* Look at Saskia&#39;s documentation where ATtiny and SAMD hello boards are explored.
* You may do this individually or in group, feel free to choose what is best for you this time.

Do the following to complete the assignment.

* Program the XIAO board you made in Electronics Production week to do something with all available output devices on the board (R, G and B LEDs, NEOPIXEL LED). You need to have your board ready and functioning at this point.
* Write code to detect a button press to switch between several modes.
* Write code to send to and receive messages from the board using the Serial class.</code>`,w,k,S="Group",C,m,G="Programming",E,h,U="My goal for the programming assigment to make the button on the board cycle through a few predetermined combinations of LEDs. So pretty much exactly what the assigment requires.",L,f,O="To do that though, I first had to make sure my LED’s were working properly.",D,v,j="I modified <code>hello_tarantino.ino</code> a bit to try to access and activate two of the board’s LED’s at once.",T,g,H,F=`<code class="language-c">
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LED1</span> <span class="token expression">D0</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LED2</span> <span class="token expression">D7</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BTN</span> <span class="token expression">D1</span></span>

bool led1_state <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
bool led2_state <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
bool btn_state <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// put your setup code here, to run once:</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED1<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED2<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>BTN<span class="token punctuation">,</span> INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Set initial state of our LEDs</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED1<span class="token punctuation">,</span> led1_state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED2<span class="token punctuation">,</span> led2_state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// put your main code here, to run repeatedly:</span>

<span class="token punctuation">&#125;</span></code>`;return{c(){p=s("h3"),p.textContent=M,x=l(),u=s("ul"),u.innerHTML=I,_=l(),r=s("h1"),r.textContent=A,y=l(),d=s("pre"),b=new R(!1),w=l(),k=s("h1"),k.textContent=S,C=l(),m=s("h1"),m.textContent=G,E=l(),h=s("p"),h.textContent=U,L=l(),f=s("p"),f.textContent=O,D=l(),v=s("p"),v.innerHTML=j,T=l(),g=s("pre"),H=new R(!1),this.h()},l(t){p=o(t,"H3",{"data-svelte-h":!0}),c(p)!=="svelte-sbwzft"&&(p.textContent=M),x=i(t),u=o(t,"UL",{"data-svelte-h":!0}),c(u)!=="svelte-1rzt84x"&&(u.innerHTML=I),_=i(t),r=o(t,"H1",{"data-svelte-h":!0}),c(r)!=="svelte-g9rspt"&&(r.textContent=A),y=i(t),d=o(t,"PRE",{class:!0});var n=W(d);b=q(n,!1),n.forEach(e),w=i(t),k=o(t,"H1",{"data-svelte-h":!0}),c(k)!=="svelte-kxioer"&&(k.textContent=S),C=i(t),m=o(t,"H1",{"data-svelte-h":!0}),c(m)!=="svelte-w3tvz5"&&(m.textContent=G),E=i(t),h=o(t,"P",{"data-svelte-h":!0}),c(h)!=="svelte-15tikqn"&&(h.textContent=U),L=i(t),f=o(t,"P",{"data-svelte-h":!0}),c(f)!=="svelte-1vjf0ca"&&(f.textContent=O),D=i(t),v=o(t,"P",{"data-svelte-h":!0}),c(v)!=="svelte-1e8rh74"&&(v.innerHTML=j),T=i(t),g=o(t,"PRE",{class:!0});var N=W(g);H=q(N,!1),N.forEach(e),this.h()},h(){b.a=null,z(d,"class","language-undefined"),H.a=null,z(g,"class","language-c")},m(t,n){a(t,p,n),a(t,x,n),a(t,u,n),a(t,_,n),a(t,r,n),a(t,y,n),a(t,d,n),b.m(X,d),a(t,w,n),a(t,k,n),a(t,C,n),a(t,m,n),a(t,E,n),a(t,h,n),a(t,L,n),a(t,f,n),a(t,D,n),a(t,v,n),a(t,T,n),a(t,g,n),H.m(F,g)},p:P,i:P,o:P,d(t){t&&(e(p),e(x),e(u),e(_),e(r),e(y),e(d),e(w),e(k),e(C),e(m),e(E),e(h),e(L),e(f),e(D),e(v),e(T),e(g))}}}const $={title:"Embedded Programming",date:"2024-03-02",description:"The fifth assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab4/14.jpg"};class tt extends J{constructor(p){super(),K(this,p,null,Q,Y,{})}}export{tt as default,$ as metadata};

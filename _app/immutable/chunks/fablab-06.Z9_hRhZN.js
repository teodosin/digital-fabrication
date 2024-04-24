import{s as At,e,a as p,H as J,c as o,g as l,b as i,j as V,k as Z,h as t,f as c,d as Bn,i as a,n as Xn}from"./scheduler.WqRDolvd.js";import{S as Rt,i as Ot}from"./index.0NVKo1ab.js";function Ut(Lt){let u,qn="Table of Contents",Q,r,zn='<li><a href="#assignment">Assignment</a></li> <li><a href="#group">Group</a></li> <li><a href="#programming">Programming</a></li>',$,k,Fn="Assignment",nn,d,tn,St=`<code class="language-undefined">Group assignment:

* Look at the datasheet of the RP2040 and reflect on what you learned.
* Try and compare other MCU&#39;s, such as other XIAO boards and ATtiny and SAMD boards.
* Look at Saskia&#39;s documentation where ATtiny and SAMD hello boards are explored.
* You may do this individually or in group, feel free to choose what is best for you this time.

Do the following to complete the assignment.

* Program the XIAO board you made in Electronics Production week to do something with all available output devices on the board (R, G and B LEDs, NEOPIXEL LED). You need to have your board ready and functioning at this point.
* Write code to detect a button press to switch between several modes.
* Write code to send to and receive messages from the board using the Serial class.</code>`,sn,h,Kn="Group",an,m,Yn="I decided to attempt to complete this individually, in order to hopefully learn more. Skimming through the datasheet, here is what stood out to me.",en,f,Jn="<li>The model name of the chip is actually descriptive of its features. <ul><li>RP - Stands for Raspberry Pi</li> <li>2 - The number of processor cores</li> <li>0 - The type of processor (M0+ in this case)</li> <li>4 - A number derived from the amount of RAM via the formula <code>floor(log2(ram / 16k))</code></li> <li>0 - Onboard volatile storage</li></ul></li> <li>It is important to always use valid UF2 files when writing to the chip. Not doing so could cause files to be partially written and then silently fail.</li> <li>The processor uses ARM architecture, which is highly efficient in terms of power. I remember reading about this when Apple’s M1 processor was announced and talked about, since it also uses it. ARM has a smaller set of basic instructions/operations than x86 chips which most desktop processors use. A perhaps more elegant architecture that took a long time to be pushed to the extent that the M-series chips are pushing it.</li> <li>“Interrupts” are an often mentioned concept. I don’t understand the full scope of it, but it makes sense that being able to interrupt the various processes is important for making an actually usable processor.</li> <li></li>",on,g,Vn="It was really difficult to parse through and make sense of such a detailed document. I lacked <em>so</em> much context.",pn,w,Zn="I tried to use ChatGPT to get some more foundational understanding of the RP2040 and of how it compares to the others MCU’s. Here’s what it gave me:",ln,v,cn,Et=`<code class="language-undefined">RP2040 Datasheet Review:

* The RP2040 is a dual-core ARM Cortex-M0+ microcontroller developed by Raspberry Pi.
It features two cores running at up to 133MHz, providing ample processing power for various applications.
* The RP2040 offers a generous amount of on-chip SRAM (264KB) and has no built-in flash memory, relying instead on external flash for program storage.
* It includes a wide range of peripherals such as UART, SPI, I2C, PWM, ADC, and GPIO pins, making it versatile for interfacing with external devices.
* The RP2040 supports various low-power modes for efficient power management in battery-operated applications.
* It features flexible clocking options and supports external crystal oscillators for precise timing requirements.
Reflection on RP2040:

* The RP2040&#39;s dual-core architecture and high clock speed make it suitable for multitasking applications or tasks requiring real-time processing.
* Its ample SRAM allows for complex program execution and data manipulation without frequent accesses to external memory.
* The wide range of peripherals makes it adaptable to different project requirements, from simple sensor interfacing to complex communication protocols.
* Its low-power modes enable energy-efficient operation, extending battery life in portable or low-power applications.
* The availability of external flash memory allows for flexible program storage options, accommodating projects with varying program sizes.
Comparison with Other MCUs:

Comparing the RP2040 with other MCUs like those in XIAO boards, ATtiny, and SAMD boards:
* XIAO boards: RP2040 offers higher processing power, more memory, and a wider range of peripherals compared to XIAO boards, making it suitable for more demanding applications.
* ATtiny: RP2040 outperforms ATtiny in terms of processing power, memory size, and peripheral support, but ATtiny may be preferable for ultra-low-power applications due to its lower power consumption.
* SAMD boards: RP2040 competes favorably with SAMD boards in terms of processing power and peripheral support, offering similar capabilities with potential cost advantages.</code>`,un,b,Qn="Some of these points don’t apply directly to the Xiao that we have. The Xiao has for example 2MB of flash memory for storing programs on it.",rn,y,$n="Side note: working with these really puts into perspective how much memory PC’s have.",kn,x,nt="The <strong>Seeed Studio XIAO SAMD21</strong> is a close comparison to the RP2040, being from the same manufacturer. It the “smallest of the Seeduino family” with approximately 1/8 of the SRAM and flash memory of the RP2040.",dn,C,tt="ATtiny chips have another order of magnitude less memory and processing power to work with, but carry the benefit of being, well, tiny. They could fit into form factors and boards that SAMD and RP chips simply can’t. An ATtiny chip could have as little as 8KB of SRAM. The processors also often being only 8bit means they’re not suited for crunching large numbers.",hn,P,st="I don’t see the benefit in listing out every technical difference without an understanding of what’s important and what could influence one’s choice of chip. More experience with working with these devices is needed.",mn,_,at="Of course the power requirements of the project in question would impact the choice, as well as how compute intensive the program is that is supposed to run on the chip.",fn,T,et="Programming",gn,I,ot="My goal for the programming assigment to make the button on the board cycle through a few predetermined combinations of LEDs. So pretty much exactly what the assigment requires.",wn,L,pt="To do that though, I first had to make sure my LED’s were working properly.",vn,S,it,bn,E,lt="I modified <code>hello_tarantino.ino</code> a bit to try to access and activate two of the board’s LED’s at once. Using the above image as a reference and looking at the board, it seemed the <strong>D7</strong> pin was connected to the LED on the right.",yn,M,xn,Mt=`<code class="language-c">
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

<span class="token punctuation">&#125;</span></code>`,Cn,D,ct="I also tried to access the third LED which seemed to be connected to D6. It didn’t work, and I didn’t know enough about how the circuits actually functioned to debug this. The second LED did light up though.",Pn,H,ut,_n,A,rt="However, it was clear that something was off with my board again. The button didn’t work at all, and the lights only toggled when I touched the corner of the chip with my finger. After a bit of poking around with my finger and a paperclip, I found the issue. The lights only toggled when I touched the top of the <strong>D1</strong> header, as well as the bottom mass of solder. But it didn’t trigger on the path to the button. The solder had come off the board beneath, leaving a gap unless the chip was pressed firmly enough to close it.",Tn,R,kt="I had to return to soldering yet again. While there I also got help troubleshooting why the third LED didn’t work. Turns out it might be a design flaw in the actual Tarantino board: the third LED isn’t connected to ground. Manually bridging it to some ground made it work. At the time of writing this I am still waiting for confirmation on whether this is an actual design flaw or just a misunderstanding on the purpose of that third LED.",In,K,dt,Ln,O,ht="Back to coding.",Sn,U,mt="Before I go through the finished the code, I want to go over an issue I ran into with using Serial.",En,G,ft="My issue with using Serial was about not having proper permissions to connect to the port.",Mn,N,gt="The solutions are specific to Linux. I can’t comment on other platforms. First, someone suggested adding permissions to the port using this command:",Dn,W,wt="<code>sudo chmod a+rw /dev/ttyACM0</code>",Hn,j,vt="This didn’t work, however.",An,B,Rn,Dt=`<code class="language-undefined">In a terminal, with the board plugged in, enter.
ls -l /dev/ttyACM*, this will show the group that has access to the port.

Example: crw-rw-r-- 1 root dialout ... /dev/ttyACM0, root is owner, dialout is the group with access.

Entering the command, groups, in a terminal will show the groups you belong to.

sudo adduser YourUserName GroupToJoin Will fix things if you need to join a group, logout and login after you run adduser.</code>`,On,X,bt="This did. After logging out, I was member of the proper group and the serial messages upon state changes were properly displayed in the Serial Monitor.",Un,Y,yt,Gn,q,xt="I also tried for a while to get the communication working the other way. I wanted to be able to type the number of a state into the serial monitor and change the state directly. I couldn’t get it to work in a reasonable time though.",Nn,z,Ct="Here is the final working code for the state machine. Sufficiently commented to be understandable, I would hope.",Wn,F,jn,Ht=`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;Adafruit_NeoPixel.h></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LED</span> <span class="token expression">D0</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LED2</span> <span class="token expression">D6 </span><span class="token comment">// There might be a design flaw with the board. This LED has no ground. </span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LED3</span> <span class="token expression">D7</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BTN</span> <span class="token expression">D1</span></span>

bool ledState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span> <span class="token comment">// HIGH, true and 1 mean the same</span>
bool ledState2 <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
bool ledState3 <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
bool btnState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span> <span class="token comment">// button is high as it is connected to 3.3V via a pull-up resistor</span>

<span class="token keyword">int</span> currentState <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> topState <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// The highest possible state, after which it loops back</span>
<span class="token keyword">int</span> stLi <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// Intensity of the NeoPixel light</span>

<span class="token keyword">int</span> neoPow <span class="token operator">=</span> NEOPIXEL_POWER<span class="token punctuation">;</span>
<span class="token keyword">int</span> neoPin  <span class="token operator">=</span> PIN_NEOPIXEL<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NUMPIXELS</span> <span class="token expression"><span class="token number">1</span></span></span>

Adafruit_NeoPixel <span class="token function">pixels</span><span class="token punctuation">(</span>NUMPIXELS<span class="token punctuation">,</span> neoPin<span class="token punctuation">,</span> NEO_GRB <span class="token operator">+</span> NEO_KHZ800<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Setup boilerplate for the NeoPixel</span>
  pixels<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>neoPow<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>neoPow<span class="token punctuation">,</span> HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED2<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>LED3<span class="token punctuation">,</span> OUTPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">pinMode</span><span class="token punctuation">(</span>BTN<span class="token punctuation">,</span> INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>

  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">9600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// while(!Serial.available());</span>

  <span class="token comment">// set initial state of our LED</span>
  <span class="token function">writeLEDs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  bool btnReading <span class="token operator">=</span> <span class="token function">digitalRead</span><span class="token punctuation">(</span>BTN<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// we want to do something only if the reading and the state are different</span>
  <span class="token comment">// in this case they are the same and we exit the loop immediatly</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>btnReading <span class="token operator">==</span> btnState<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span> 
  <span class="token punctuation">&#125;</span>
 
  <span class="token keyword">if</span><span class="token punctuation">(</span>btnReading <span class="token operator">==</span> LOW<span class="token punctuation">)</span><span class="token punctuation">&#123;</span> <span class="token comment">// LOW means button is pressed on Tarantino</span>
    btnState <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
    currentState<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">></span> topState<span class="token punctuation">)</span><span class="token punctuation">&#123;</span> 
      currentState <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
    btnState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">// Brightness of the NeoPixel determined by currentState</span>
  stLi <span class="token operator">=</span> <span class="token function">floor</span><span class="token punctuation">(</span>currentState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// The state machine. Based on the current state, set the LEDs according </span>
  <span class="token comment">// to some configurations. </span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>currentState <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    ledState <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
    ledState3 <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
    Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In state ONE"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    ledState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
    ledState3 <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
    Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In state TWO"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">&#125;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    ledState <span class="token operator">=</span> LOW<span class="token punctuation">;</span>
    ledState3 <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
    Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In state THREE"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>currentState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    ledState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
    ledState <span class="token operator">=</span> HIGH<span class="token punctuation">;</span>
    Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"In state FOUR"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">writeLEDs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">writeLEDs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  pixels<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  pixels<span class="token punctuation">.</span><span class="token function">setPixelColor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> pixels<span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span>stLi<span class="token punctuation">,</span> stLi<span class="token punctuation">,</span> stLi<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  pixels<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED<span class="token punctuation">,</span> ledState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED2<span class="token punctuation">,</span> ledState2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">digitalWrite</span><span class="token punctuation">(</span>LED3<span class="token punctuation">,</span> ledState3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){u=e("h3"),u.textContent=qn,Q=p(),r=e("ul"),r.innerHTML=zn,$=p(),k=e("h1"),k.textContent=Fn,nn=p(),d=e("pre"),tn=new J(!1),sn=p(),h=e("h1"),h.textContent=Kn,an=p(),m=e("p"),m.textContent=Yn,en=p(),f=e("ul"),f.innerHTML=Jn,on=p(),g=e("p"),g.innerHTML=Vn,pn=p(),w=e("p"),w.textContent=Zn,ln=p(),v=e("pre"),cn=new J(!1),un=p(),b=e("p"),b.textContent=Qn,rn=p(),y=e("p"),y.textContent=$n,kn=p(),x=e("p"),x.innerHTML=nt,dn=p(),C=e("p"),C.textContent=tt,hn=p(),P=e("p"),P.textContent=st,mn=p(),_=e("p"),_.textContent=at,fn=p(),T=e("h1"),T.textContent=et,gn=p(),I=e("p"),I.textContent=ot,wn=p(),L=e("p"),L.textContent=pt,vn=p(),S=e("img"),bn=p(),E=e("p"),E.innerHTML=lt,yn=p(),M=e("pre"),xn=new J(!1),Cn=p(),D=e("p"),D.textContent=ct,Pn=p(),H=e("img"),_n=p(),A=e("p"),A.innerHTML=rt,Tn=p(),R=e("p"),R.textContent=kt,In=p(),K=e("img"),Ln=p(),O=e("p"),O.textContent=ht,Sn=p(),U=e("p"),U.textContent=mt,En=p(),G=e("p"),G.textContent=ft,Mn=p(),N=e("p"),N.textContent=gt,Dn=p(),W=e("p"),W.innerHTML=wt,Hn=p(),j=e("p"),j.textContent=vt,An=p(),B=e("pre"),Rn=new J(!1),On=p(),X=e("p"),X.textContent=bt,Un=p(),Y=e("img"),Gn=p(),q=e("p"),q.textContent=xt,Nn=p(),z=e("p"),z.textContent=Ct,Wn=p(),F=e("pre"),jn=new J(!1),this.h()},l(n){u=o(n,"H3",{"data-svelte-h":!0}),l(u)!=="svelte-sbwzft"&&(u.textContent=qn),Q=i(n),r=o(n,"UL",{"data-svelte-h":!0}),l(r)!=="svelte-1rzt84x"&&(r.innerHTML=zn),$=i(n),k=o(n,"H1",{"data-svelte-h":!0}),l(k)!=="svelte-g9rspt"&&(k.textContent=Fn),nn=i(n),d=o(n,"PRE",{class:!0});var s=V(d);tn=Z(s,!1),s.forEach(t),sn=i(n),h=o(n,"H1",{"data-svelte-h":!0}),l(h)!=="svelte-kxioer"&&(h.textContent=Kn),an=i(n),m=o(n,"P",{"data-svelte-h":!0}),l(m)!=="svelte-1yebu46"&&(m.textContent=Yn),en=i(n),f=o(n,"UL",{"data-svelte-h":!0}),l(f)!=="svelte-1pgnuuq"&&(f.innerHTML=Jn),on=i(n),g=o(n,"P",{"data-svelte-h":!0}),l(g)!=="svelte-or1u7"&&(g.innerHTML=Vn),pn=i(n),w=o(n,"P",{"data-svelte-h":!0}),l(w)!=="svelte-fbs6jh"&&(w.textContent=Zn),ln=i(n),v=o(n,"PRE",{class:!0});var Pt=V(v);cn=Z(Pt,!1),Pt.forEach(t),un=i(n),b=o(n,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1dgx0f1"&&(b.textContent=Qn),rn=i(n),y=o(n,"P",{"data-svelte-h":!0}),l(y)!=="svelte-1nskz1x"&&(y.textContent=$n),kn=i(n),x=o(n,"P",{"data-svelte-h":!0}),l(x)!=="svelte-12l643c"&&(x.innerHTML=nt),dn=i(n),C=o(n,"P",{"data-svelte-h":!0}),l(C)!=="svelte-p1mjjl"&&(C.textContent=tt),hn=i(n),P=o(n,"P",{"data-svelte-h":!0}),l(P)!=="svelte-fux3zq"&&(P.textContent=st),mn=i(n),_=o(n,"P",{"data-svelte-h":!0}),l(_)!=="svelte-mf186g"&&(_.textContent=at),fn=i(n),T=o(n,"H1",{"data-svelte-h":!0}),l(T)!=="svelte-w3tvz5"&&(T.textContent=et),gn=i(n),I=o(n,"P",{"data-svelte-h":!0}),l(I)!=="svelte-15tikqn"&&(I.textContent=ot),wn=i(n),L=o(n,"P",{"data-svelte-h":!0}),l(L)!=="svelte-1vjf0ca"&&(L.textContent=pt),vn=i(n),S=o(n,"IMG",{src:!0,alt:!0}),bn=i(n),E=o(n,"P",{"data-svelte-h":!0}),l(E)!=="svelte-ln3fiy"&&(E.innerHTML=lt),yn=i(n),M=o(n,"PRE",{class:!0});var _t=V(M);xn=Z(_t,!1),_t.forEach(t),Cn=i(n),D=o(n,"P",{"data-svelte-h":!0}),l(D)!=="svelte-3toh0m"&&(D.textContent=ct),Pn=i(n),H=o(n,"IMG",{src:!0,alt:!0}),_n=i(n),A=o(n,"P",{"data-svelte-h":!0}),l(A)!=="svelte-1kxo3fy"&&(A.innerHTML=rt),Tn=i(n),R=o(n,"P",{"data-svelte-h":!0}),l(R)!=="svelte-182frz"&&(R.textContent=kt),In=i(n),K=o(n,"IMG",{src:!0}),Ln=i(n),O=o(n,"P",{"data-svelte-h":!0}),l(O)!=="svelte-4fw7qs"&&(O.textContent=ht),Sn=i(n),U=o(n,"P",{"data-svelte-h":!0}),l(U)!=="svelte-107bt94"&&(U.textContent=mt),En=i(n),G=o(n,"P",{"data-svelte-h":!0}),l(G)!=="svelte-npenjn"&&(G.textContent=ft),Mn=i(n),N=o(n,"P",{"data-svelte-h":!0}),l(N)!=="svelte-10yah90"&&(N.textContent=gt),Dn=i(n),W=o(n,"P",{"data-svelte-h":!0}),l(W)!=="svelte-1hmmbb1"&&(W.innerHTML=wt),Hn=i(n),j=o(n,"P",{"data-svelte-h":!0}),l(j)!=="svelte-ed1trv"&&(j.textContent=vt),An=i(n),B=o(n,"PRE",{class:!0});var Tt=V(B);Rn=Z(Tt,!1),Tt.forEach(t),On=i(n),X=o(n,"P",{"data-svelte-h":!0}),l(X)!=="svelte-9yfvoo"&&(X.textContent=bt),Un=i(n),Y=o(n,"IMG",{src:!0}),Gn=i(n),q=o(n,"P",{"data-svelte-h":!0}),l(q)!=="svelte-17ljdd4"&&(q.textContent=xt),Nn=i(n),z=o(n,"P",{"data-svelte-h":!0}),l(z)!=="svelte-13mj134"&&(z.textContent=Ct),Wn=i(n),F=o(n,"PRE",{class:!0});var It=V(F);jn=Z(It,!1),It.forEach(t),this.h()},h(){tn.a=null,c(d,"class","language-undefined"),cn.a=null,c(v,"class","language-undefined"),Bn(S.src,it="fab6/xinpin.jpg")||c(S,"src",it),c(S,"alt","Xiao RP2040"),xn.a=null,c(M,"class","language-c"),Bn(H.src,ut="fab6/19.jpg")||c(H,"src",ut),c(H,"alt","Two LED's on"),Bn(K.src,dt="fab6/27.jpg")||c(K,"src",dt),Rn.a=null,c(B,"class","language-undefined"),Bn(Y.src,yt="fab6/serial.png")||c(Y,"src",yt),jn.a=null,c(F,"class","language-c")},m(n,s){a(n,u,s),a(n,Q,s),a(n,r,s),a(n,$,s),a(n,k,s),a(n,nn,s),a(n,d,s),tn.m(St,d),a(n,sn,s),a(n,h,s),a(n,an,s),a(n,m,s),a(n,en,s),a(n,f,s),a(n,on,s),a(n,g,s),a(n,pn,s),a(n,w,s),a(n,ln,s),a(n,v,s),cn.m(Et,v),a(n,un,s),a(n,b,s),a(n,rn,s),a(n,y,s),a(n,kn,s),a(n,x,s),a(n,dn,s),a(n,C,s),a(n,hn,s),a(n,P,s),a(n,mn,s),a(n,_,s),a(n,fn,s),a(n,T,s),a(n,gn,s),a(n,I,s),a(n,wn,s),a(n,L,s),a(n,vn,s),a(n,S,s),a(n,bn,s),a(n,E,s),a(n,yn,s),a(n,M,s),xn.m(Mt,M),a(n,Cn,s),a(n,D,s),a(n,Pn,s),a(n,H,s),a(n,_n,s),a(n,A,s),a(n,Tn,s),a(n,R,s),a(n,In,s),a(n,K,s),a(n,Ln,s),a(n,O,s),a(n,Sn,s),a(n,U,s),a(n,En,s),a(n,G,s),a(n,Mn,s),a(n,N,s),a(n,Dn,s),a(n,W,s),a(n,Hn,s),a(n,j,s),a(n,An,s),a(n,B,s),Rn.m(Dt,B),a(n,On,s),a(n,X,s),a(n,Un,s),a(n,Y,s),a(n,Gn,s),a(n,q,s),a(n,Nn,s),a(n,z,s),a(n,Wn,s),a(n,F,s),jn.m(Ht,F)},p:Xn,i:Xn,o:Xn,d(n){n&&(t(u),t(Q),t(r),t($),t(k),t(nn),t(d),t(sn),t(h),t(an),t(m),t(en),t(f),t(on),t(g),t(pn),t(w),t(ln),t(v),t(un),t(b),t(rn),t(y),t(kn),t(x),t(dn),t(C),t(hn),t(P),t(mn),t(_),t(fn),t(T),t(gn),t(I),t(wn),t(L),t(vn),t(S),t(bn),t(E),t(yn),t(M),t(Cn),t(D),t(Pn),t(H),t(_n),t(A),t(Tn),t(R),t(In),t(K),t(Ln),t(O),t(Sn),t(U),t(En),t(G),t(Mn),t(N),t(Dn),t(W),t(Hn),t(j),t(An),t(B),t(On),t(X),t(Un),t(Y),t(Gn),t(q),t(Nn),t(z),t(Wn),t(F))}}}const Wt={title:"Embedded Programming",date:"2024-03-09",description:"The sixth assignment for the Digital Fabrication minor.",categories:["projects"],tags:["digital-fabrication"],cover:"fab6/19.jpg"};class jt extends Rt{constructor(u){super(),Ot(this,u,null,Ut,At,{})}}export{jt as default,Wt as metadata};
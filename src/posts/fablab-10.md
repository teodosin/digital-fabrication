---
title: "Input Devices"
date: "2024-03-21"
description: "The tenth assignment for the Digital Fabrication minor."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab10/31.jpg"
---

### Table of Contents

# Assignment

```
Group assignment
1. Join one of the introduction sessions on Mon, Tue or Wed and document the probing of several different input devices.
2. Pick a group leader who has to create and populate the group assignment page. 

Individual assignment
1. Link to the group assignment page and describe what you learned from the group assignment.
2. Add a sensor to a microcontroller board that you have designed and read it.
```

# Group

I was unfortunately sick on the day that my group had their introduction session. I will link to it here still, once it is posted. 

# Datasheet

My [final project, the glove controllers](fablab-00), consists only of input devices and a microcontroller capable of transimitting that data. So this week was the perfect time to finally attempt the first iteration of the board. 

For the board, I thought I'd again use the ESP32C3, like in the [electronic design week's project](fablab-08). Back then I naively thought I could just plug in the flex sensors into the analog pins and ground and it would work. Only after making the board did I look into how flex sensors are supposed to be used. So this was my opportunity to correct that mistake. 

I used [this video](https://www.youtube.com/watch?v=_tXWoplbqWo) as a reference for figuring out the circuit for the flex sensors. 

![sorry, no alt found](fab10/01.png)

So I needed 5 analog pins per glove just for the flex sensors. For the That was more than the ESP32 had available, and I thought I needed multiple chips intercommunicating for that. Instead I was recommended to use a **multiplexer** to multiply the amount of pins. 

There were no footprints in the fablab library for the multiplexers, so I took a stab at making the one for the one I needed. 

Taking a look at the [datasheet](https://www.ti.com/lit/ds/symlink/cd74hc4051.pdf?HQS=dis-dk-null-digikeymode-dsf-pf-null-wwe&ts=1713092472891&ref_url=https%253A%252F%252Fwww.ti.com%252Fgeneral%252Fdocs%252Fsuppproductinfo.tsp%253FdistId%253D10%2526gotoUrl%253Dhttps%253A%252F%252Fwww.ti.com%252Flit%252Fgpn%252Fcd74hc4051), the two main pieces of information I'm looking for are the **pin configuration** and the **footprint**. Finding the pin configuration was already somewhat confusing, as there were three different layouts in the datasheet. Figuring out which one was correct took a while, until I took a closer look at the numbering scheme of the component:

![sorry, no alt found](fab10/05.png)
![sorry, no alt found](fab10/06.png)

The pin configurations were labeled _4051B, _4052B and _4053B (underscore means I omitted identical strings). 4051 matches the code on the Digikey product site. I hoped this was correct. 

Then, finding the footprint. There were multiple diagrams of the physical dimensions of the component, and they too were different. 

![sorry, no alt found](fab10/03.png)
![sorry, no alt found](fab10/04.png)

# Multiplexer

On to KiCad. 

I was following [this tutorial](https://www.youtube.com/watch?v=pV-4ElYoXYU&t=62s) to learn the basics of symbol and footprint creation.    

I opened the Aalto fablab kicad library repository and added a new footprint.

According to the datasheet, the distance between centres of pins is 1.27mm. I created a new grid with that spacing. 

![sorry, no alt found](fab10/08.png)

I created a new **pad** in the centre of the grid with the following settings. The dimensions of the pads come from the datasheet as well. Not shown is the **pad clearance**, which I set to 0.5mm. 

![sorry, no alt found](fab10/09.png)

I immediately deleted the grid I had and made a new one with the correct horizontal offset of 7mm. 

![sorry, no alt found](fab10/11.png)
![sorry, no alt found](fab10/10.png)

The numbering of the pads was also clear in the datasheet. 

![sorry, no alt found](fab10/02.png)

After the footprint, the symbol. A simple rectangle, like most other component symbols. 

![sorry, no alt found](fab10/12.png)

Pin properties. Default settings except for the pin names, numbers and electrical types. I tried to match them to the types declared in the datasheet, even though they weren't one to one matches. I/O became bidirectional, and the different powers pins all became power inputs in KiCad. 

![sorry, no alt found](fab10/13.png)

Below, the table I referenced. 

![sorry, no alt found](fab10/14.png)

![sorry, no alt found](fab10/15.png)

A test connection showed that the footprint wasn't correctly linked to the symbol, so it wasn't appearing in the PCB editor. Also, the other components in the fablab library had a courtyard, so I added that too. 

![sorry, no alt found](fab10/16.png)

![sorry, no alt found](fab10/17.png)

At this point I noticed and referred to the [KiCad Library Conventions](https://klc.kicad.org/) and oh dear, was there a lot of things to still go through. I didn't have time to check absolutely everything at this point, so I skimmed through to look for the things that seemed most relevant or important. 

Grouping the pins in the symbol better was a logical change.

![sorry, no alt found](fab10/18.png)

# IMU

For tracking the position and orientation of a glove I picked an Inertial Measurement Unit with an accelerometer and a gyroscope. Specifically, the [LSM6DSOX](https://www.adafruit.com/product/4438). 

The unit itself was intimidating with its large number of pins. Learning about the I2C protocol and referencing the [wiring guide](https://learn.adafruit.com/adafruit-lsm6dsox-3d-accelerometer-gyroscope-breakout/wiring-and-test) was a bit of a challenge, but I eventually found the diagrams that showed the wiring clearly.

![sorry, no alt found](fab10/19.png)
![sorry, no alt found](fab10/20.png)

The connector type on the IMU is called **Stemma**. I found a wire bundle with a stemma on one end and four standard male headers on the other. I would use these for the first iteration of the board. This would also spare me from having to create another new footprint, since I was already a bit behind on the assignments. 

![sorry, no alt found](fab10/21.jpg)   

So the only four pins relevant to the I2C protocol are the power and ground pins, and the SDA and SCL pins for data transfer and clock speed respectively. 

![sorry, no alt found](fab10/22.png)

# Routing

I had all the components placed in the schematic, so I could start routing. 

![sorry, no alt found](fab10/23.png)

The multiplexer, even with many of its pins unused, was a dense and difficult routing job. Even figuring out the correct orientation for it took a while. I had to move a lot of pins around. 

![sorry, no alt found](fab10/24.png)

When most of it was routed, I was still missing some ground connections that I had no way of routing. I resorted to using three 0 ohm resistors to jump across some routes and connect the ground to the remaining flex sensor pads. 

![sorry, no alt found](fab10/25.png)
![sorry, no alt found](fab10/26.png)
![sorry, no alt found](fab10/27.png)

Edge cuts and mounting holes left, and then the design was done. 

![sorry, no alt found](fab10/28.png)

# Milling

Milling went much better than with the [previous assignment](fablab-09). I did mess up one board, still. The bottom of the circuit was barely getting milled but the top half looked fine. The difference was too great to fix with repeated passes, since then the top would get milled too much. I stopped the job and placed another plate. 

![sorry, no alt found](fab10/29.jpg)

The second board was successful. I made a point to place the board bottom edge first, and then bending it backwards to try to make the tape connect fully along the whole length of it. With a bit of force, it seemed to work and the board got milled evenly everywhere. 

![sorry, no alt found](fab10/30.jpg)
![sorry, no alt found](fab10/31.jpg)


---
title: "Glove Controller(s)"
date: "2024-01-18"
description: "The final project for the Digital Fabrication minor."
categories: ["projects"]
tags: ["digital-fabrication", "long-form"]
cover: ["gloves_sketch.jpg"]
---

A pair of glove controllers for VR and non-VR use. 

### Table of Contents

## Introduction

I was an absolute beginner with electronics. So I couldn't really tell _exactly_ how ambitious this project really was for the time that we were given and my skill level. So the scope of it was variable. I tried to keep the minimum level for the project small enough that it is somewhat realistic for me to achieve. If it turned out that there's time to do a little more, it should've been straightforward to spend that time adding a feature or two. 

At a minimum: 
* A controller for each hand, with flex sensors (or a functional equivalent) on each finger and the ability to send this data to a nearby computer with low latency. 

Additionally on my wishlist were:
* Ability to detect the independent bends of the knuckles and first joints of the fingers
* Positional tracking
* Ability to detect splay of the fingers

In the end splay and first finger joint detection were left out of scope. 

## Motivation

For quite a few years I've dreamed of being able to interact with digital creative tools as naturally and gesturally as I can with something like clay. I wanted to be able to push and pull and grab and throw particles and vertices, and I wanted the experience of building muscle memory with gestures, so that with enough practice I can work as fast as I can think. 

I thought for quite a while that this wasn't currently attainable for me, so it remained a dream. Then I came across [LucidVR](https://github.com/LucidVR/lucidgloves), an open-source do-it-yourself VR glove project. It showed me that it was possible, and I soon saw quite a few other DIY gloves online. I considered following the tutorial for the LucidGloves but wanted to wait until the tutorial for the next prototype was released. 

It had been over year and the official tutorial hadn't been released yet. The glove design was still in beta; the parts list and bare-bones instructions have been released, but I didn't trust my technical skills in following them. 

The Digital Fabrication minor presented the perfect opportunity to finally attempt to make these controller gloves. Not the LucidVR design though, but my own design. Force feedback wasn't that important to me, for example. 

## The Initial Sketch

![An artistic sketch of the gloves](gloves_sketch.jpg)

The sketch first sketch was not meant to be realistic. I expected the real thing to be much bulkier and complex in many ways. The sketch is an abstraction of the parts I imagined the project will consist of:
* I am assuming the most natural place for the circuit board would be the back of the hand. 
* I'd like the circuit board to be enclosed in a casing and not exposed.
* Finger and knuckle bends would be measured with flex sensors.
* Splay would be measured with some sort of angular sensors on the knuckles.
* There doesn't necessarily have to be a glove covering the entire hand, unless it turns out it is better for there to be fabric between the hand and the electronics.
* Finger caps would help the flex sensors to stay in place and also bring the parts together aesthetically. 
* The goal is for the gloves to allow the tactile and gesture-driven manipulation of digital material. 

## Revised Plan

A few months into the courses, I had a clearer idea of what is feasible and how the actual gloves should be built. 

Two flex sensors per finger would have added a lot of complexity to the build without adding all that many features. Getting splay to work would be an entirely different challenge in addition to that. So the revised scope of the project was as follows:

* 1 flex sensor per finger. 
* A 6-axis accelorometer for hand tracking (orientation + movement).

Getting the bend of each knuckle as well as the rotation and movement of each hand should be enough to support interesting gestures for interaction. 

At the start of the Studio course I also discovered a highly interesting glove project dubbed [ImmersiveGloves](https://github.com/ras-marques/ImmersiveGloves). This project used IMUs on each finger to track the finger movements. They've showed very accurate tracking of fingers, including splay. Currently they're adding a second set of IMUs for each finger, which would capture both of the independent ranges of motion that the fingers have. The project is impressive, to say the least. I would love to take inspiration from it, but I discovered it too late to fit it into my scope. So that will have to happen on my own time. 

Knowing that I wanted to try producing a similar IMU based design also eased my eventual decision to produce only one glove for this final project. Scoping down like that wouldn't cut down on the technical challenges but would shorten the time needed for production. 

## Assignments

A lot of the groundwork was laid during the weekly assignments. 

Made the first iteration of the board during the [input devices week](fablab-10).

Figured out a plausible networking solution during the [networking](fablab-12) and [app programming](fablab-13) weeks. Eventually discarded the Rust implementation and went back to Arduino for its more mature ecosystem. 



## 1st Assembly

![work glove](fab0/02.jpg)

I bought a pair of work gloves from a hardware store to modify and build on. I had tried quite a few pairs also from clothing stores, but they were not suitable for a project like this. Woolen gloves would be too warm and the only thin indoor gloves I could find were designed for arthritis and therefore very tight and uncomfortable. The work gloves struck a decent balance, being quite thin and light and fitting nicely around the hand without being tight. 

![cut off fingertips](fab0/03.jpg)

Cut off the ends of the fingers mostly for aesthetic reasons, though that might also help with cooling the hand. Also cut out a hole around the palm for further cooling. Then it was time to figure out how to attach the flex sensors firmly. 

![sensor pocket](fab0/05.jpg)

Being unfamiliar with solutions like fabric glue, I first tried sowing. I used one of the cut off fingertips to sow on a sort of pocket below a knuckle and slid a flex sensor in, then naively sower the other side of the sensor to the glove. It was an okay but insufficient attempt; the sensor moved around too much and slid out of the pocket. It was also not easy to sow that much directly on the glove. A better solution would also have to account for the displacement of the sensor when the knuckle is bent.

My next idea was to first enclose each flex sensor completely into fabric and then attach that fabric to the glove as minimally as I could get away with. That would keep the sensors in place but also loose enough from one end that they could follow the bend of the knuckle nicely. 

![](fab0/08.jpg)

Got some leftover fabric and string from the costume workshop above the fablab. In hindsight I probably should have chosen something yellow to match the glove, but the brown isn't too bad either. 

![](fab0/10.jpg)

Using a paperclip, I kept in place and sowed shut the underside of each flex sensor pocket/enclosure. 

![](fab0/11.jpg)

Finished pocket compared to the first naive attempt. Significant improvement in aesthetics, but also usability. The sensor can still slide out of the pocket, so it could be slid out for more easy soldering to a wire or later on if one needs to be replaced, it can be. 

![](fab0/12.jpg)

All sensors sowed onto the glove. At this point they were attached at two points, both on the side of the finger joint. The other end would be held down with a buckle or the PCB enclosure. 

At this point, I unfortunately sprained my right thumb during a training session. I moved on to working on software things while it healed. 

## Integration

After the sprain, I finished the [application programming assignment](fablab-13) by finally getting the bluetooth data to the app. 

Also there was [systems integration week](fablab-15), during which I made mockups of the glove and decided on some important details. It was beginning to look like the gloves were circling back to a design more similar to my initial sketch. 

![](fab15/06.png)

[Applications & Implications week](fablab-16) helped zoom out to see the big picture of the project again, after being so 

## 2nd PCB

I had begun work on the 2nd PCB design. Thanks to the nRF52 making most of the previous board redundant, I could reduce the board size by a lot. 

![PCB](fab0/15.png)

The bulk of the PCB would be just the voltage divider circuits for all the flex sensors. It's possible that a multiplexer and only one analog pin could still be made very small, since that would theoretically only require one voltage divider. I didn't experiment with that though. 

![PCB Schemdone](fab0/17.png)

Added the JST connector pads for the battery, the power switch and the extra button. 

![PCB footprints](fab0/16.png)

Routing the footprints was challenging and took some iteration. I wanted the PCB to be as small as possible, and for aesthetic reasons, circular. The nRF52 would also be soldered directly onto the board instead of being lifted up on headers. At this scale, even though the JST sockets are small, they would take up a lot of space and needed to be efficiently placed along the circle. The pads of the unused nRF52 pins were scaled down so they could be routed around more compactly. 

I eventually managed to fit all the components and routes into a circle with a radius of 20mm, diameter 40mm. For reference, the board I made during [electronics design week](fablab-08), laying on the back of my hand. It's rectangular, with the shorter side being just under 40mm.

![Old board on back of hand](fab0/19.jpg)

The new PCB would be even smaller, and lower profile because the nRF would be soldered directly onto the board without headers supporting it. 

![](fab0/26.jpg)

When I was about to mill at the lab, it was suggested that I remove the routes for the battery and power switch and instead cut a hole in the PCB instead, and just get wires to come in from below

![](fab0/25.png)

Some last minute changes to the footprint. I had added mounting holes just in case I'd need them, adjusting their placement here, and removed the routes from the top and added edge cuts around the battery pins. 

![](fab0/27.jpg)

The footprint for the Xiao had these holes in the pads which I hadn't realised. I didn't think I'd need them, so I removed them and began the milling process. I had also somehow forgotten to update the clearance from the default 0.2mm to 0.4mm, and had to adjust many routes. I had rushed to go do the milling, overconfident about my design. It took just under two hours to make the required fixes before I could actually mill the board.

![](fab0/28.jpg)

Then, surprisingly, the board came out perfect on the first attempt. Helps that it was so small there wasn't even room for the PCB to bend. 

![](fab0/29.jpg)

Size comparison between the first and second iteration boards. 

![](fab0/30.jpg)

Resistors and nRF52 soldered on, as well as two flex sensors for testing purposes. The sensors were soldered onto silicon wires and the attachment covered with the thinnest heatshrink that was available at the lab. The wires would still have to be shortened when the final casing was done.

# Frame

I had first tried using Blender and its geometry nodes to make the frame. It had been several weeks since I last used Ondsel and Blender was fresher in my mind. Eventually I gave up on the nodes: it was much too cumbersome to do even simple things like make edge cuts and extrude from specific spots. 

![](fab0/22.png)

Then, still clinging onto Blender, I tried [CAD sketcher](www.cadsketcher.com), a Blender addon for CAD modeling. It was missing a couple constraints that were important to my previous Ondsel workflows, so I gave up on it also quite quickly. Know that it exists though, it's based on Solvespace and could still be useful for some simpler projects. 

![](fab0/23.png)

Back in Ondsel, my workflow was simple. Nothing new compared to previous weeks, so I won't go in depth here. Create sketch, pad it, create another sketch on top of a previous face, pad it, rinse and repeat. I used a boolean once to cut out a hole for the rubber ban. A few fillets at the end to make it look just a bit nicer. 

We had done a few tests (can't find the pictures) to determine the optimal thickness for the flex frame to make it flexible. 0.4mm was the ideal amount, and that's what this initial design used. 

![](fab0/31.jpg)

The print came out alright, but it was clear the gaps were too small. The Formlabs resin had collapsed and closed the spots where the flex sensor was meant to snap into. The slot for the rubber band was also just slightly too tight to fit it comfortably. I didn't want to have to crumple it up and force it through. 

![](fab0/32.jpg)
![](fab0/33.jpg)

I modified some parameters to grow all gaps by fractions of millimetres. Then tried again. Somewhat horrifyingly, the print lasted four hours. I was nervous about how long the casing would take to print, let alone the full frame that should cover the whole hand. 

The next day the print had cured, and I saw that it was again a failure. 

I made the choice to fall back on the cloth glove I had prepared earlier. The flexible frame was a neat idea, but I started with it too late to get through the necessary iterations to get it right. A whole day for a single flex sensor frame was too much

# Casing

![](fab0/40.png)
![](fab0/41.png)
![](fab0/42.png)
![](fab0/43.png)
![](fab0/44.png)
![](fab0/45.png)
![](fab0/46.png)
![](fab0/47.png)
![](fab0/48.png)
![](fab0/49.png)
![](fab0/50.png)
![](fab0/51.png)

I worked on my laptop at the lab so I could get to printing as soon as possible. At this point, every single new sketch I tried to make, to add a curved base for example and grooves to attach the case to the hand with, resulted in Ondsel processing and freezing for half a minute at a time. I opted to just print and then make the part that would be sewn onto the glove separately, and then glue them together at the end. 

![](fab0/61.jpg)
![](fab0/63.jpg)
![](fab0/65.jpg)

After making adjustments to the model, its printing failed several times.

![](fab0/64.jpg)
![](fab0/66.jpg)
![](fab0/67.jpg)

![](fab0/52.png)
![](fab0/53.png)

I went through a few iterations of the print that would be sewn onto the glove. My first idea was to have these slots under the piece. It was pointed out to me that this would be difficult to sew.

![](fab0/54.png)

Better. Printed fine as well. 

It was time for the final assembly. 

# Assembly

![](fab0/62.jpg)

I soldered the thinnest silicone wire available to the flex sensors and put pieces of the thinnest heatshrink on top, then soldered the other ends of the wires to the PCB. I didn't heat the heatshrinks yet before I had tested the sensors, to maintain the option to resolder if needed. 

There was a detour before the final assembly. I wanted to test battery powering the board, because I noticed that the casing wouldn't be easy to take apart once assembled. It didn't work, not with battery power nor via usb from a power bank. When connected to a computer it worked fine.  Debugging and testing with another nrf52 and an rp2040, made it seem like the battery charging circuit had been fried. I got help with desoldering my nrf52 from the PCB, resoldering a new one, placing tapes underneath to make sure nothing was being shorted, and when that was all done, running the blink example, it seemed the issue went away. So I went ahead to work on the battery terminal. 

![](fab0/68.jpg)

The idea was to take pieces of nickel tape for both ends of the terminal and melt them into the plastic of the casing. I tested it first with a failed print, seeing how well the heated nickel piece would sink into the plastic. 

![](fab0/71.jpg)

First piece in, and the power switch glued into its slot. 

![](fab0/60.jpg)

The second nickel piece went in more easily, with a different strategy. Instead of heating the nickel away from the casing and then quickly trying to push it in while it was hot, I placed the piece directly onto the casing and used the hot air gun locally. I was hesitant to do this at first because of the risk of the surrounding casing also deforming. The air gun was set to just below 200 degrees, slightly above the melting point of the PLA plastic. Turned out well. 

![](fab0/69.jpg)

Soldered wires to the button.

![](fab0/70.jpg)

Tested the solder joints with a multimeter.

![](fab0/72.jpg)

The battery fit right in. I uploaded my code, and it didn't work again! Highly suspicious. I uploaded the example blinking code again, and it worked. 

So the whole detour earlier was a red herring. The issue was with my code. And it turned out it was a very simple mistake. 

In the Arduino setup code, I called

`while (!Serial);`

This was in the base code since the beginning, so I didn't think much of it. But what it does is that it stops the code and loops in place until there's a serial connection. A serial connection is only established when connected to a computer (and presumably with the Arduino IDE open, but I'm not sure). It was only logical that the blinking code wouldn't work, since those lines were after this one. Removing it was enough to make everything work again. 

![](fab0/73.jpg)

Everything ready. 

![](fab0/74.jpg)

Sewed it onto the glove. 

![](fab0/76.jpeg)

Inserted the flex sensors into the pockets and secured them in bit a bit of thread. Then I glued the casing on. 

![](fab0/75.jpg)

Finally. Finished. 


# Application

The final application was a simple Bevy app that loads a Gaussian Spat scan (using an existing library) and allows the user to turn the camera whenever they make a fist. 

I will not go over the code of the application, but you can view the source code [here](https://www.github.com/teodosin/glove_debug). The arduino code for the glove is [here](https://www.github.com/teodosin/glove_ard).

<video
src="fab0/gausr.mp4"
autoplay="autoplay"
loop="loop"
>
</video>

<video
src="presentation.mp4"
>
</video>

# Conclusion

This was an in-depth and broad learning experience. I enjoyed it greatly. It was interesting to watch my expectations and conceptions of electronics change and get corrected. Inevitably the project fell short of my initial ambitions, but I'm still satisfied with the result. There's room to improve with the next iteration. And I do hope that I'll get around to producing an improved design, and for both hands. I will likely base it on the ImmersiveGloves project, if not outright follow it. 

In the mean time, there's plenty to do on the software side with this glove still. The bluetooth settings could possibly be altered to improve latency. The IMU data could be processed better to lead to a more accurate, less jerky gesture recognition system. 

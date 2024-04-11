---
title: "Output Devices"
date: "2024-03-21"
description: "The ninth assignment for the Digital Fabrication minor."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab9/04.jpg"
---

### Table of Contents

# Assignment

```
Individual assignment

* Add an output device to a microcontroller board you've designed, and program it to do something. 
* If you have not produced and tested a board in the Electronics Design week yet, you can improve its design to include an output device and produce one working board for both of the weeks (Electronics Design and Output Devices).
* Include a hero shot and source files of your board in your documentation (such as KiCad project and Arduino test code). 
* Submit a link to your assignment page here.
```

# Concept

I had an idea for a project that I wasn't sure if I had time to finish. It could probably be a final project by itself, since getting it to actually work as intended would undoubtedly take multiple iterations of trial and error. But I might as well make the board needed for it. 

The concept is a card scanner. It could take in a card from a deck of cards, photograph it, flip it over, photograph again, then spit it out the other end. The setup would need a camera and preferably two motors. With some clever gear mechanisms all the motions could maybe be done with a single motor, but I decided to play it space. Trade in some mechanical complexity for circuit complexity. 

So two motor drivers and an **ESP32S3** microcontroller, which has a camera module available. 

# KiCad

I followed the lecture recording to get started and made two copies of essentially the same circuit for the two motors. It was quite a bit more complex than the previous boards, so I didn't manage to build a full understanding of what was going on. **Capacitors** are there to deal with voltage fluctuations, and **potentiometers** are there to split the incoming voltage. 


![](fab9/01.png)

I knew that for my use case I wasn't going to need a whole lot of power for the motors, so I explored the option of drawing power to them directly from the ESP32. It had a 5V power output, and using it would mean that I could power the whole device just with the usb port to the ESP32. 

![](fab9/04.jpg)

I tested running a motor directly from the ESP32 and it worked. I also tested placing a small piece of thin plywood onto the end of the motor (forgot to take a photo of it though) to get some intuition about how much force the motor could exert. It was plenty enough for my (hypothetical) use-case.

![](fab9/02.png)

Routing the two sets of motor components was tricky. It took quite a few attempts and switching around of pins to get everything connected. I read somewhere online that connecting all ground pins to the surrounding copper board like we did during [electronics design week](fablab-08) wasn't actually best practice. I couldn't confirm or deny that at that point, so I made the effort to actually route the ground pins, just in case. 

![](fab9/03.png)

One leg of the droid done. In my mind, the board would be sitting vertically on a wall of the enclosure in which the photos would be taken, so the ESP32 and its connected camera would be mounted on the top of the enclosure, and the motors would be below it, spinning the wheels that move the cards and operating the flipper that turns them over. 

![](fab9/05.png)

Routing was mostly done by this point. Added the heatsinks for each motor driver still. 

![](fab9/06.png)

The design rules checker alerted me to some insufficient clearance issues with the board edge cut and the heatsinks. Moving them a bit further fixed the issues and left behind only the silkscreen warnings, which I presumed could still be safely ignored. 

![](fab9/07.png)

Then I noticed I had forgotten the mounting holes. 

![](fab9/08.png)

# Milling
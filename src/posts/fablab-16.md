---
title: "Applications & Implications"
date: "2024-05-05"
description: "The sixteenth assignment."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab15/11.jpg"
---

### Table of Contents

# Assignment

```
* Answer the following questions related to your final project.
         What will it do?
         Who's done what beforehand?
         What will you design?
         What materials and components will be used?
         Where will come from?
         How much will they cost?
         What parts and systems will be made?
         What processes will be used?
         What questions need to be answered?
         How will it be evaluated?
* Make sure that...
      Your project should incorporate 2D and 3D design,
         additive and subtractive fabrication processes,
         electronics design and production,
         embedded microcontroller interfacing and programming,
         system integration and packaging
      Where possible, you should make rather than buy
         the parts of your project
      Projects can be separate or joint, but need to show individual 
         mastery of the skills, and be independently operable 
```

A big picture reflection on the [Glove Controller final project](fablab-00).

# Overview

My final project is a single glove for the right hand that would measure movement, rotation and flexion of the fingers in real time, and transmit that data over Bluetooth to a PC. This would allow a user to potentially have more intuitive analog control over software applications, provided there is support for them. Originally the plan was to create a pair of gloves, but the scope had to be reduced from this due to time constraints.  

The intended use-case is for creative applications. Digital sculpting, painting, and general navigation and manipulation of 3D space were the aspirational applications for the gloves. For a single glove the possibilities are simplified, but an example use-case could be using gestures to control digital painting settings such as brush size, opacity, colour and so on, while the other hand is free to use a stylus.

Glove controllers are by no means an original idea. Several projects have inspired this one. 

[The LucidGloves](https://github.com/LucidVR/lucidgloves/tree/proto5) are a glove project that focuses on haptic feedback for VR gaming, in addition to the sensors. This was the initial inspiration, showing that something like this is possible. 

[The MiMu Gloves](https://www.mimugloves.com/) are a commercial product which allow musicians to create music with their hands. This is so far the only glove project I've come across that was developed for something other than VR gaming. The technology is also almost the same as what my project ended up using, namely flex sensors for finger tracking and accelerometer+gyroscope for hand tracking. 

[The ImmersiveGloves](https://github.com/ras-marques/ImmersiveGloves) are, in terms of fidelity and accuracy, the most impressive I've come across. The project utilises IMUs on each finger, allowing tracking of orientation for each in all directions. Looking ahead, this project is what I would want to take inspiration from for when I have the opportunity to make a proper pair of gloves.

These projects aren't being looked at beyond basic specs. So each piece of the project will be designed by me from scratch:
* The PCB schematic and design 
* The frame that all the components will attach to. Either a resin exoskeleton, or if that fails, a cloth glove. 
* The enclosure for the PCB, placed at the back of the hand
* The enclosure for the battery, placed either on the back of the hand as well or just below the wrist
* The basic debugging application on the receiving end 

The bill of materials is as follows.

![Bill of materials](fab16/bill.png)

During the project, several modules will be completed that will fit together into the complete controller glove. 
* The custom PCB, designed milled and soldered
* The casing of the PCB
* The casing for the battery
* The frame or glove for the flex sensors

Various digital fabrication processes will be used:
* Digital circuit board design with KiCad
* CAD modeling with Ondsel
* PCB milling with the Roland MDX-40
* Hand-soldering of components onto the PCB
* 3D printing with Formlabs printers and their resin

On the software side, embedded programming will be done with the Arduino IDE compiled to the nRF52, and on the receiving debug application side Rust and Bevy will be used. The communication protocol will be Bluetooth Low Energy. 

This project is intended to be an initial prototype for future iterations of controller gloves. It seeks to answer a few important questions:

* How well can an IMU be used for hand tracking? How well will it work with just an accelerometer and gyroscope, without a magnetometer? 

* How suitable is the Bluetooth Low Energy connection for this use-case? Is the latency acceptable? Can it transmit the required amount of data, even taking into account future glove iterations which will have more parameters?

* Should the resin frame get completed, how comfortable and practical is it? Can the fingers bend laterally as well? How reliable and sturdy is the attachment of the PCB case to the back of the hand?

What questions?
Can accelerometer? No mag?
Can bluetooth? Latency and data?

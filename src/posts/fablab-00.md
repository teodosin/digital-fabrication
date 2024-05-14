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

## Timeline

Here's the project schedule, updated last wherever the white line is.

![Task timeline](fab0/sched_513.png)
---
title: "Glove Controllers"
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

Additionally:
* Ability to detect the independent bends of the knuckles the fingers
* Positional tracking
* Ability to detect splay of the fingers

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

* 1 flex sensor per finger, so 5 per hand. 
* A 6-axis accelorometer per hand. 

Getting the bend of each knuckle as well as the rotation and movement of each hand should be enough to support interesting gestures for interaction. 

At the start of the Studio course I also discovered a highly interesting glove project dubbed [ImmersiveGloves](https://github.com/ras-marques/ImmersiveGloves). This project used IMUs on each finger to track the finger movements. They've showed very accurate tracking of fingers, including splay. Currently they're adding a second set of IMUs for each finger, which would capture both of the independent ranges of motion that the fingers have. The project is impressive, to say the least. I would love to take inspiration from it, but I discovered it too late to fit it into my scope. So that will have to happen on my own time. 


The steps remaining:
* Figure out the networking solution [networking week](fablab-12)
* First iteration of the board from [input devices week](fablab-10)
* Working code for the input board
* Quick and dirty glove
* Second iteration board design
* 2nd board milling
* 2nd board soldering
* 2nd board casing design
* 2nd board casing printing
* Assembly
* Write a simple app to check correctness 
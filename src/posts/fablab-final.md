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

I am an absolute beginner with electronics. So I can't really tell _exactly_ how ambitious this project really is for the time that we are given and my skill level. So the scope of it is variable. I will try to keep the minimum level for the project small enough that it is somewhat realistic for me to achieve. If it turns out that there's time to do a little more, it should be straightforward to spend that time adding a feature or two. 

At a minimum: 
* A controller for each hand, with flex sensors (or a functional equivalent) on each finger and the ability to send this data to a nearby computer with low latency. 

Additionally:
* Ability to detect the independent bends of the knuckles the fingers
* Positional tracking
* Ability to detect splay of the fingers

## Motivation

For quite a few years I've dreamed of being able to interact with digital creative tools as naturally and gesturally as I can with something like clay. I want to be able to push and pull and grab and throw particles and vertices, and I want the experience of building muscle memory with gestures, so that with enough practice I can work as fast as I can think. 

I thought for quite a while that this wasn't currently attainable for me, so it remained a dream. Then I came across [LucidVR](https://github.com/LucidVR/lucidgloves), an open-source do-it-yourself VR glove project. It showed me that it was possible, and I soon saw quite a few other DIY gloves online. I considered following the tutorial for the LucidGloves but wanted to wait until the tutorial for the next prototype was released. 

It's been over year, and we're all still waiting for the official tutorial. The parts list and bare-bones instructions have been released, but I don't trust my technical skills in following them. 

The Digital Fabrication minor presents the perfect opportunity to finally attempt to make these controller gloves. It does not necessarily mean following the aforementioned instructions. Haptics aren't that important to me, for example. And it may be the wrong direction for me in other ways, though I don't know what those ways are. I am reliant on my teachers and classmates to point me in the right direction. 

## The Initial Sketch

![An artistic sketch of the gloves](gloves_sketch.jpg)

The sketch is not meant to be realistic. I expect the real thing to be much bulkier and complex in many ways. The sketch is an abstraction of the parts I imagine the project will consist of:
* I am assuming the most natural place for the circuit board would be the back of the hand. 
* I'd like the circuit board to be enclosed in a casing and not exposed.
* Finger and knuckle bends would be measured with flex sensors.
* Splay would be measured with some sort of angular sensors on the knuckles.
* There doesn't necessarily have to be a glove covering the entire hand, unless it turns out it is better for there to be fabric between the hand and the electronics.
* Finger caps would help the flex sensors to stay in place and also bring the parts together aesthetically. 
* The goal is for the gloves to allow the tactile and gesture-driven manipulation of digital material. 

Give or take whatever turns out to be feasible or not. 

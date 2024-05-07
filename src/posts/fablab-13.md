---
title: "Application Programming"
date: "2024-05-05"
description: "The thirteenth assignment."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab11/01.png"
---

### Table of Contents

# Assignment

```
Group assignment
* Join one of the introduction sessions.
* Elect a group leader.
* Document hands-on exercise with available interface examples.
* Optionally discuss an additional example that you have used in the past or wish to explore.

Individual assignment
* Link to the group assignment page.
* Describe what you learned from the group assignment on your documentation page briefly.
* Write an application that interfaces a user with an input and/or output device that you made.
* Include a hero video and source files of the application in your documentation.
```

# Group

Group assignment this week was handled by Miro Keimiöniemi (link pending)

# Concept

The agenda for this week was to set up the initial working version of the debug app for my final project, [the gloves](fablab-00).

I chose the Rust based [Bevy game engine](https://bevyengine.org/) for this project. Using it feels more like using a framework than an engine, really, since there's no standalone editor or other executable that you run to make things. Instead, you add it as a dependency like any other crate in your project. If using a game engine sounds like overkill for a simple app, you can pick and choose only the features your project needs, making it potentially quite lightweight.

To use this engine, you of course would need Rust installed on your machine. I'm using the [Rustup](https://rustup.rs/) tool to manage Rust installations.

Then you would be best served by following along with the [Bevy book](https://bevyengine.org/learn/quick-start/getting-started/). Create a rust project, add Bevy as a dependency, and then add Bevy's recommended optimisations to the cargo.toml file. It's all explained in the book. 

I've used Bevy before, but never anything async or with networking. Those aspects would be new to me and useful for my future projects using the engine. 

For the code going into the ESP32, I first thought I'd be following the tutorials mentioned in the [previous assignment post](fablab-12). The ESP32 was going to be here, at first, an [unsecure BLE server.](https://dev.to/apollolabsbin/embedded-rust-bluetooth-on-esp-ble-server-1no8). There were however some compiler issues that I was unable to solve at first. So in the interest of time I opted for [Bleps](https://github.com/bjoernQ/bleps), which I did manage to get working sooner. 

For the code going into the Bevy app, I need two things. First, a library to handle connecting to bluetooth devices. The one I found and got working was [btleplug](https://github.com/deviceplug/btleplug). Since that crate seemed to heavily use async, I also needed [bevy-tokio-tasks](https://github.com/EkardNT/bevy-tokio-tasks/tree/master) to provide better async support for Bevy. That crate was somewhat old but it was relatively trivial to update to work with the latest version of Bevy. Having a CC0 license is pretty nice. 

# Code

There was a lot of frustration while getting these things to work. I didn't document all that trial and error, but I'll try to point out the most critical parts while going over the code. 

## ESP32



![hooplooptoops](fab13/01.png)

## PC
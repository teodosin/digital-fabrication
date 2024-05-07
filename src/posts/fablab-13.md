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


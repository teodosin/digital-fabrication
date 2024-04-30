---
title: "Networking"
date: "2024-05-05"
description: "The twelfth assignment."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab11/01.png"
---

### Table of Contents

# Assignment

```
Group assignment

* Join a introduction session to get an overview of networking possibilities with XIAO ESP32
* Pick a group leader who is going to populate the group assignment page

Individual assignment

* Link to the group assignment page and describe what did you learn individually.
* Explore the WiFi capabilities of the XIAO ESP32C3 board.
* Plug it into one of the boards you produced earlier.
* Program the XIAO board to spawn an Access Point and create a simple REST API.
* The REST API should have endpoints for controlling output device(s) of your board as well as reading input.
* Document as you go and publish content on a page on your documentation website.
```

# Group

# Research

Still going with Rust, building on the experience from the last two test programs on the [ESP32-C3](fablab-08) and [ESP32-S3](fablab-09) respectively. This week the intent was to get these boards to talk to each other. Simply, pressing the button on the C3 board should activate the motor on the S3 board. 

Because of my choice of programming language, I couldn't directly follow the instructions on the Xiao getting started guides. So my starting point was the [Awesome ESP Rust](https://github.com/esp-rs/awesome-esp-rust) repository, which would hopefully have example projects. 

The relevant crate for wifi and so on is [esp-wifi](https://github.com/esp-rs/esp-wifi). It's actual [README](https://github.com/esp-rs/esp-wifi/blob/main/esp-wifi/README.md) is of course highly relevant. 

The crate has an [example for creating an Access Point](https://github.com/esp-rs/esp-wifi/blob/main/esp-wifi/examples/access_point.rs). 

Let's break down the task a bit. No need to immediately jump to board-to-board communication. Let's first try to print a message to the computer screen every time the button is pressed. 

# Button Print

I hacked together a modification of the above access point example. There was an issue with the compilation:

```rust
error[E0463]: can't find crate for `std`
 --> /home/viktor/.cargo/registry/src/index.crates.io-6f17d22bba15001f/managed-0.8.0/src/lib.rs:7:1
  |
7 | extern crate std;
  | ^^^^^^^^^^^^^^^^^ can't find crate
  |

```

The `managed`crate is a dependency of `smoltcp`. This crate was used in the example as well as in my code. 

```rust
esp-wifi = { version = "0.5.1", features = ["esp32c3", "wifi", "esp-now"] }
```


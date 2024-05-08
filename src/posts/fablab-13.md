---
title: "Application Programming"
date: "2024-05-05"
description: "The thirteenth assignment."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab13/s01.png"
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

For the code going into the Bevy app, I need two things. First, a library to handle connecting to bluetooth devices. The one I found and got working was [btleplug](https://github.com/deviceplug/btleplug). Since that crate seemed to heavily use async, I also needed [bevy-tokio-tasks](https://github.com/EkardNT/bevy-tokio-tasks/tree/master) to provide better async support for Bevy. That crate was somewhat old but it was relatively trivial to update to work with the latest version of Bevy.  

# Process

There was a lot of frustration while getting these things to work. I didn't document all the struggles with the compiler, as there's way too many individual stumbling blocks there to effectively list here. Things to do with choosing the correct compilation targets, reconciling incompatible dependencies between examples found online etc. Instead I'll start with the debugging I did with the bluetooth connection, and then the multiplexer. Final working code will be appended at the end of this post once it is, well, working. 

## BLE

BLE = Bluetooth Low Energy. 

Once the Bevy app and embedded program were up, I tried getting them to connect to each other. Eventually, it was successful, and I was able to send some hard-coded messages from the ESP32 to the Bevy app via bluetooth. 

![successful data send](fab13/01.png)

The connection was highly unreliable, and I didn't know why. There were issues with timeouts and local connection aborts that I didn't know how to debug. So let's attempt to make sense of some of them. 

```
Starting scan on hci0 (usb:v1D6Bp0246d0540)...
Peripheral "Ruka" is connected: false
Connecting to peripheral "Ruka"...
Error connecting to peripheral, skipping: Service discovery timed out
```

Service discovery timed out. 

(WIP)

## MUX

This was the first time I tried programming the [input board](fablab-10). I was behind on that assignment and getting the physical board finished, so I didn't have time to test it until this week. And when testing, it seemed there were problems with the multiplexer. 

![DIY debug setup](fab13/02.jpg)

I wasn't at the lab when I encountered all these issues, so I had to improvise a bit with the debugging. The input board didn't have an LED, but my previously designed board did. I connected the two boards with alligator clips and poked around to see which pins and traces were being powered and which weren't. 

For reference, here is the PCB footprint of the board. I was mostly testing the thumb flex sensor connected to sockets labeled `J1`. I had a piece of code that read the value on the analog pin, which was connected to the multiplexer. At one point I cycled through all the possible selector values and read the output from all of the multiplexer pins, and none of them were reacting to the flex sensor.

![Footprint of the input board](fab13/03.png)

The intended circuit was that the power is first drawn from the `5V` pin, lead through the `R1` resistor, then the flex sensor at `J1` (which is a variable resistor, essentially) and then to ground. The route to the multiplexer pin `A4` in the corner of the mux starts from between the two resistors. My understanding is that which resistor is on the power side and which on the ground side doesn't really matter, since I've seen sources with both setups. 

The first issue was quickly found and easily fixed. I had selected the wrong pins to be the selector pins for the multiplexer. I only noticed when I connected a pin that wasn't being used at all to the LED, and it lit up. It was being used as one of the selectors. Unfortunately, switching to the correct selector pins wasn't enough to fix the issue. 

The second thing I checked was whether there was power coming out of the flex sensor circuit. There wasn't, at least not enough to turn on the LED. There was power going into the resistor `R1`, lighting up the LED brightly. The trace after the resistor lit it up dimly, and the trace after the flex sensor, not at all. So one hypothesis for what could be wrong is that the resistance is too much and there isn't anything left for the analog pin to measure. The resistor is 47k0hms, a value that was recommended by [this source](https://learn.sparkfun.com/tutorials/flex-sensor-hookup-guide/all) for example. [This video](https://www.youtube.com/watch?v=_tXWoplbqWo) has the order of resistors flipped, and an even higher Ohm resistor. It seemed unlikely that this was the issue, but I couldn't rule it out just yet. 

The multiplexer has a pin labeled `!E`, which is the enable pin. When that pin is powered, the entire multiplexer is off. So it should be unpowered for the circuit to work. I had connected that pin, as well as the Ground and Negative Power pins all to ground. 

Finally I tried to measure the com pin on the multiplexer to see if it could output any power. 

This was all desperate work, and in hindsight I don't think I understood how the multiplexer should be debugged. Back at the lab I got help, and we went to the oscilloscope to properly look at the voltages. 

![Oscilloscope screenshot](fab13/04.jpg)

<video
src="fab13/05r.mp4"
autoplay="autoplay"
loop="loop"
>
</video>

<video
src="fab13/06r.mp4"
autoplay="autoplay"
loop="loop"
>
</video>

Yeah. Turned out the circuits were fine. There was a 2V difference in the voltage of the analog pin when the flex sensor was bent. So the problem had to be in the software. 

# Code

Both of the programs are split into multiple files. I don't understand a lot of it. Most is hacked together from examples. 



## ESP32

```rust
// main.rs

// Not final doesn't read the analog inputs properly yet
// read_oneshot() doesn't work

#![no_std]
#![no_main]

mod utils;
use utils::hal;

mod hand;
mod mux;

use bleps::{
    ad_structure::{
        create_advertising_data, AdStructure, BR_EDR_NOT_SUPPORTED, LE_GENERAL_DISCOVERABLE,
    },
    attribute_server::{AttributeServer, NotificationData, WorkResult},
    gatt, Ble, HciConnector,
};
use esp_backtrace as _;
use esp_println::println;
use esp_wifi::{ble::controller::BleConnector, initialize, EspWifiInitFor};
use hal::{
    analog::adc::{AdcConfig, Attenuation, ADC},
    clock::ClockControl,
    delay::{self, Delay},
    gpio::IO,
    peripherals::*,
    prelude::*,
    rng::Rng,
};

use crate::{hand::Fingers, mux::pin_set_mux_selector};

#[entry]
fn main() -> ! {
    #[cfg(feature = "log")]
    esp_println::logger::init_logger(log::LevelFilter::Info);

    let peripherals = Peripherals::take();

    let system = peripherals.SYSTEM.split();
    let clocks = ClockControl::max(system.clock_control).freeze();
    let delay = Delay::new(&clocks);

    #[cfg(target_arch = "xtensa")]
    let timer = hal::timer::TimerGroup::new(peripherals.TIMG1, &clocks, None).timer0;
    #[cfg(target_arch = "riscv32")]
    let timer = hal::systimer::SystemTimer::new(peripherals.SYSTIMER).alarm0;
    let init = initialize(
        EspWifiInitFor::Ble,
        timer,
        Rng::new(peripherals.RNG),
        system.radio_clock_control,
        &clocks,
    )
    .unwrap();

    let io = IO::new(peripherals.GPIO, peripherals.IO_MUX);

    let mut selector = mux::Selector {
        s2: io.pins.gpio2.into_push_pull_output(),
        s1: io.pins.gpio3.into_push_pull_output(),
        s0: io.pins.gpio4.into_push_pull_output(),
    };

    let btn = io.pins.gpio8.into_pull_up_input();

    let mut debounce_cnt = 500;

    let mut bluetooth = peripherals.BT;

    let apin = io.pins.gpio5.into_analog();

    let mut adc_conf = AdcConfig::new();
    let mut adc_pin = adc_conf.enable_pin(apin, Attenuation::Attenuation11dB);
    let mut adc1 = ADC::<ADC1>::new(peripherals.ADC1, adc_conf);

    pin_set_mux_selector(Fingers::Thumb.to_pin(), &mut selector);

    loop {
        let val: u16 = nb::block!(adc1.read_oneshot(&mut adc_pin)).unwrap();
        println!("Value read: {:?}", val);

        let connector = BleConnector::new(&init, &mut bluetooth);
        let hci = HciConnector::new(connector, esp_wifi::current_millis);
        let mut ble = Ble::new(&hci);

        println!("{:?}", ble.init());
        println!("{:?}", ble.cmd_set_le_advertising_parameters());
        println!(
            "{:?}",
            ble.cmd_set_le_advertising_data(
                create_advertising_data(&[
                    AdStructure::Flags(LE_GENERAL_DISCOVERABLE | BR_EDR_NOT_SUPPORTED),
                    AdStructure::ServiceUuids16(&[Uuid::Uuid16(0x1809)]),
                    AdStructure::CompleteLocalName(utils::SOC_NAME),
                ])
                .unwrap()
            )
        );
        println!("{:?}", ble.cmd_set_le_advertise_enable(true));

        println!("started advertising");

        let mut rbtn = |_offset: usize, data: &mut [u8]| {
            if btn.is_high() {
                data[..2].copy_from_slice(&222_u8.to_le_bytes());
            } else {
                data[..2].copy_from_slice(&111_u8.to_le_bytes());
            }
            data[..2].copy_from_slice(&val.to_le_bytes());
            2
        };

        let mut rf = |_offset: usize, data: &mut [u8]| {
            data[..20].copy_from_slice(&b"Hello Bare-Metal BLE"[..]);
            17
        };
        let mut wf = |offset: usize, data: &[u8]| {
            println!("RECEIVED: {} {:?}", offset, data);
        };

        let mut wf2 = |offset: usize, data: &[u8]| {
            println!("RECEIVED: {} {:?}", offset, data);
        };

        let mut rf3 = |_offset: usize, data: &mut [u8]| {
            data[..5].copy_from_slice(&b"Hola!"[..]);
            5
        };
        let mut wf3 = |offset: usize, data: &[u8]| {
            println!("RECEIVED: Offset {}, data {:?}", offset, data);
        };

        // let mut rval = |offset: usize, data: &mut [u8]| {
        //     let val = nb::block!(adc1.read_oneshot(&mut adc_pin)).unwrap();
        //     data[..2].copy_from_slice(&val.to_le_bytes());
        //     2
        // };

        gatt!([service {
            uuid: "937312e0-2354-11eb-9f10-fbc30a62cf38",
            characteristics: [
                // characteristic {
                //     uuid: "937312e0-2354-11eb-9f10-fbc30a62cf38",
                //     read: rval,
                // },
                characteristic {
                    uuid: "937312e0-2354-11eb-9f10-fbc30a62cf38",
                    read: rbtn,
                },
                characteristic {
                    uuid: "937312e0-2354-11eb-9f10-fbc30a62cf38",
                    read: rf,
                    write: wf,
                },
                characteristic {
                    uuid: "957312e0-2354-11eb-9f10-fbc30a62cf38",
                    write: wf2,
                },
                characteristic {
                    name: "my_characteristic",
                    uuid: "987312e0-2354-11eb-9f10-fbc30a62cf38",
                    notify: true,
                    read: rf3,
                    write: wf3,
                },
            ],
        },]);

        let mut rng = bleps::no_rng::NoRng;
        let mut srv = AttributeServer::new(&mut ble, &mut gatt_attributes, &mut rng);

        loop {
            let mut notification = None;

            println!(
                "Selector set to {}, {}, {}, should be high, low, low",
                selector.s2.is_set_high(),
                selector.s1.is_set_high(),
                selector.s0.is_set_high()
            );

            let val = nb::block!(adc1.read_oneshot(&mut adc_pin)).unwrap();
            println!("Value read: {:?}", val);
            delay.delay_millis(500);

            match srv.do_work_with_notification(notification) {
                Ok(res) => {
                    if let WorkResult::GotDisconnected = res {
                        break;
                    }
                }
                Err(err) => {
                    println!("{:?}", err);
                }
            }
        }
    }
}

```

```rust
// hand.rs

// Abstraction that connects fingers to specific pins on the multiplexer. 
// Useful in case the pins change in future iterations or when 
// switching to the other hand. 
```

```rust
// mux.rs

// Code that handles the multiplexer 

use esp_hal::gpio::{GpioPin, Output, PushPull};

#[derive(Debug)]
pub enum MuxPins {
    A0,
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
}

/// Struct for the selector pins, mostly just to pass
/// them in more easily as a single argument to pin_set_mux_selector
pub struct Selector {
    pub s2: GpioPin<Output<PushPull>, 2>,
    pub s1: GpioPin<Output<PushPull>, 3>,
    pub s0: GpioPin<Output<PushPull>, 4>,
}

/// Set the selector pins correctly based on the desired mux pin
pub fn pin_set_mux_selector(pin: MuxPins, s: &mut Selector) {
    let Selector { ref mut s0, ref mut s1, ref mut s2 } = s;
    
    match pin {
        MuxPins::A0 => {
            s2.set_low();
            s1.set_low();
            s0.set_low();
        },
        MuxPins::A1 => {
            s2.set_low();
            s1.set_low();
            s0.set_high();
        },
        MuxPins::A2 => {
            s2.set_low();
            s1.set_high();
            s0.set_low();
        },
        MuxPins::A3 => {
            s2.set_low();
            s1.set_high();
            s0.set_high();
        },
        MuxPins::A4 => {
            s2.set_high();
            s1.set_low();
            s0.set_low();
        },
        MuxPins::A5 => {
            s2.set_high();
            s1.set_low();
            s0.set_high();
        },
        MuxPins::A6 => {
            s2.set_high();
            s1.set_high();
            s0.set_low();
        },
        MuxPins::A7 => {
            s2.set_high();
            s1.set_high();
            s0.set_high();
        },
    }
}
```

## Bevy

I will show screenshots of the app and then the final working code at the end. 

I wanted to learn how to use the [Bevy Hanabi] GPU particle plugin, so I started my project from their portal example. 

![Bevy Hanabi example](fab13/s01.png)

```rust
// main.rs

mod asyncs;
mod ble;
mod particles;

use asyncs::{TaskContext, TokioTasksPlugin, TokioTasksRuntime};
use bevy::prelude::*;
use btleplug::api::{Central, Manager as _, Peripheral, ScanFilter};
use btleplug::platform::Manager;
use particles::ParticlePlugin;
use std::time::Duration;
use tokio::time;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(TokioTasksPlugin::default())
        .add_plugins(ParticlePlugin)
        

        .add_systems(Startup, connect)
        .add_systems(Update, listen)
    .run();
}

fn connect(runtime: ResMut<TokioTasksRuntime>, mut commands: Commands) {
    // do the bluetooth connection thingy
    runtime.spawn_background_task(try_connect);

}

fn listen() {
    // nothing right now
}

async fn try_connect(mut ctx: TaskContext) {
    let manager = Manager::new().await.expect("Failed to create BLE manager");
    let adapter_list = manager.adapters().await.expect("Failed to get adapter list");
    if adapter_list.is_empty() {
        eprintln!("No Bluetooth adapters found");
        return;
    }

    for adapter in adapter_list.iter() {
        println!("Starting scan on {}...", adapter.adapter_info().await.expect("Failed to get adapter info"));
        
        
        adapter
            .start_scan(ScanFilter::default())
            .await
            .expect("Can't scan BLE adapter for connected devices...");


        time::sleep(Duration::from_secs(20)).await;
        let peripherals = adapter.peripherals().await.expect("Failed to get peripherals");
        if peripherals.is_empty() {
            eprintln!("->>> BLE peripheral devices were not found, sorry. Exiting...");
        } else {

            let target_name = "Ruka";

            // All peripheral devices in range
            for peripheral in peripherals.iter() {
                let properties = peripheral.properties().await.expect("Failed to get peripheral properties");
                let is_connected = peripheral.is_connected().await.expect("Failed to get connection status");
                let local_name = properties
                    .unwrap()
                    .local_name
                    .unwrap_or(String::from("(peripheral name unknown)"));

                if local_name != target_name {
                    continue;
                }

                println!(
                    "Peripheral {:?} is connected: {:?}",
                    local_name, is_connected
                );
                if !is_connected {
                    println!("Connecting to peripheral {:?}...", &local_name);
                    if let Err(err) = peripheral.connect().await {
                        eprintln!("Error connecting to peripheral, skipping: {}", err);
                        continue;
                    }
                }
                let is_connected = peripheral.is_connected().await.expect("Failed to get connection status");
                println!(
                    "Now connected ({:?}) to peripheral {:?}...",
                    is_connected, &local_name
                );
                peripheral.discover_services().await.expect("Failed to discover services");
                println!("Discover peripheral {:?} services...", &local_name);
                for service in peripheral.services() {
                    println!(
                        "Service UUID {}, primary: {}",
                        service.uuid, service.primary
                    );
                    for characteristic in service.characteristics {
                        println!("Trying to read {:?}", characteristic);
                        let read_result = peripheral.read(&characteristic).await;
                        match read_result {
                            Ok(data) => {
                                let string = unsafe { std::str::from_utf8_unchecked(&data)};
                                println!("Read result: {:?}", string);
                            }
                            Err(err) => {
                                eprintln!("Error reading characteristic: {}", err);
                            }
                        }
                        for descriptor in characteristic.descriptors {
                            println!("    Descriptor UUID: {}", descriptor);
                        }
                    }
                }
                if is_connected {
                    println!("Disconnecting from peripheral {:?}...", &local_name);
                    peripheral
                        .disconnect()
                        .await
                        .expect("Error disconnecting from BLE peripheral");
                }
            }
        }
    }
}
```

```rust
// asyncs.rs is practically identical to 
// https://github.com/EkardNT/bevy-tokio-tasks/blob/master/src/lib.rs
```

```rust
// particles.rs

// This module has the graphical stuff
// (Currently just the bevy_hanabi portal example)

use bevy::{app::{App, Plugin, Startup}, asset::Assets, core::Name, core_pipeline::{bloom::BloomSettings, core_3d::Camera3dBundle, tonemapping::Tonemapping}, ecs::system::{Commands, ResMut}, math::{Vec2, Vec3, Vec4}, prelude::default, render::{camera::Camera, color::Color}, transform::components::Transform};
use bevy_hanabi::{Attribute, ColorOverLifetimeModifier, EffectAsset, ExprWriter, Gradient, HanabiPlugin, LinearDragModifier, OrientMode, OrientModifier, ParticleEffect, ParticleEffectBundle, SetAttributeModifier, SetPositionCircleModifier, ShapeDimension, SizeOverLifetimeModifier, Spawner, TangentAccelModifier};


pub struct ParticlePlugin;

impl Plugin for ParticlePlugin {
    fn build(&self, app: &mut App) {
        app
            .add_plugins(HanabiPlugin)
            .add_systems(Startup, setup)
        ;
    }
}

fn setup(mut commands: Commands, mut effects: ResMut<Assets<EffectAsset>>) {
    commands.spawn((
        Camera3dBundle {
            transform: Transform::from_translation(Vec3::new(0., 0., 25.)),
            camera: Camera {
                hdr: true,
                clear_color: Color::BLACK.into(),
                ..default()
            },
            tonemapping: Tonemapping::None,
            ..default()
        },
        BloomSettings::default(),
    ));

    let mut color_gradient1 = Gradient::new();
    color_gradient1.add_key(0.0, Vec4::new(4.0, 4.0, 4.0, 1.0));
    color_gradient1.add_key(0.1, Vec4::new(4.0, 4.0, 0.0, 1.0));
    color_gradient1.add_key(0.9, Vec4::new(4.0, 0.0, 0.0, 1.0));
    color_gradient1.add_key(1.0, Vec4::new(4.0, 0.0, 0.0, 0.0));

    let mut size_gradient1 = Gradient::new();
    size_gradient1.add_key(0.3, Vec2::new(0.2, 0.02));
    size_gradient1.add_key(1.0, Vec2::splat(0.0));

    let writer = ExprWriter::new();

    let init_pos = SetPositionCircleModifier {
        center: writer.lit(Vec3::ZERO).expr(),
        axis: writer.lit(Vec3::Z).expr(),
        radius: writer.lit(4.).expr(),
        dimension: ShapeDimension::Surface,
    };

    let age = writer.lit(0.).expr();
    let init_age = SetAttributeModifier::new(Attribute::AGE, age);

    // Give a bit of variation by randomizing the lifetime per particle
    let lifetime = writer.lit(0.6).uniform(writer.lit(1.3)).expr();
    let init_lifetime = SetAttributeModifier::new(Attribute::LIFETIME, lifetime);

    // Add drag to make particles slow down a bit after the initial acceleration
    let drag = writer.lit(2.).expr();
    let update_drag = LinearDragModifier::new(drag);

    let mut module = writer.finish();

    let tangent_accel = TangentAccelModifier::constant(&mut module, Vec3::ZERO, Vec3::Z, 30.);

    let effect1 = effects.add(
        EffectAsset::new(16384, Spawner::rate(5000.0.into()), module)
            .with_name("portal")
            .init(init_pos)
            .init(init_age)
            .init(init_lifetime)
            .update(update_drag)
            .update(tangent_accel)
            .render(ColorOverLifetimeModifier {
                gradient: color_gradient1,
            })
            .render(SizeOverLifetimeModifier {
                gradient: size_gradient1,
                screen_space_size: false,
            })
            .render(OrientModifier::new(OrientMode::AlongVelocity)),
    );

    commands.spawn((
        Name::new("portal"),
        ParticleEffectBundle {
            effect: ParticleEffect::new(effect1),
            transform: Transform::IDENTITY,
            ..Default::default()
        },
    ));
}
```

```rust
```

```rust
```
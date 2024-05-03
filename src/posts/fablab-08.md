---
title: "Electronics Design"
date: "2024-03-28"
description: "The eighth assignment for the Digital Fabrication minor."
categories: ["projects"]
tags: ["digital-fabrication"]
cover: "fab8/11.png"
---

### Table of Contents

# Assignment

```
Group assignment

* Join one of the test equipment introduction session.
* Use the test equipment (benchtop power supply, oscilloscope, logic analyzer) at the Fablab to observe the operation of a microcontroller circuit board.
* Check operating voltage on the board with multimeter or voltmeter.
* Elect a group leader who will be responsible for creating group assignment page.
* Help group leader with adding relevant information to the group assignment page.

Individual assignment

* Add link to the group assignment to your documentation page along with a paragraph of text about what you learned.
* Design and make a circuit board using KiCad or equivalent electronics design automation (EDA) software. 
* You can use XIAO, ATtiny, D11C microcontrollers as core components.
* As a minimum, add a LED, a button and a 2x2 connector for serial communication with other boards that you will make in following weeks.
* Break out all the unused pins of the microcontroller you are using as the core.
* Calculate the ideal value of a current limiting resistor for the LED you are using on your board. 
```

# Group 

The group assignment responsibilities for this week were handled by [Tomi Monahan](https://tomimonahan.gitlab.io/digital-fabrication/electronics-design-group-assignment.html)


# KiCad

For my first board, I wanted something general purpose. I didn't want to attempt to make a board for my [final project](fablab-00) just yet, at least not directly. I needed more practice before that.

I went with the XIAO ESP32 for this board due to its wireless capabilities. A plausible use case I thought of was a wireless remote or controller for some other project. This would give me the opportunity to try out wireless data transfer, because I would be needing it for the glove controllers. I'd get to test the bandwidth and latency and hopefully also test the flex sensors and an accelorometer. 

![sorry, no alt found](fab8/01.png)

The power pins on this chip are outputs, unlike the power pins on the Attiny, which are inputs. Well, these ones also _can_ be used as inputs because the chip supports being battery powered. Not applicable here, I didn't want the added complexity. 

The pins labeled A0 - A3 are analog pins, which would preferrably be used for analog sensors such as the flex sensors. The pins prefixed with D are just digital pins. Some also have been labeled SDA, SCL, TX, RX, MOSI, MISO, SCK. These all apparently relate to communication between other chips, so they weren't relevant here. 

![sorry, no alt found](fab8/02.png)

I added the first two essential components in **KiCad**'s schematic editor. The Xiao chip itself, and the 2x02 pin header that was requested for networking purposes. 

![sorry, no alt found](fab8/03.png)

Then, the rest of the required components. An LED and a button. The analog pins would be lead to sockets and a header. 

![sorry, no alt found](fab8/04.png)

My understanding was that each sensor or switch I would want to connect would need its own ground. So I needed 8 pins in total. I originally wanted to use the horizontal socket, but the labels on its pins scared me off. I opted for two 4pin vertical sockets instead. 

![sorry, no alt found](fab8/05.png)
![sorry, no alt found](fab8/06.png)

With this small number of components, the layout wasn't going to present difficulties in a technical sense. It did take some time to decide where to put the sockets though, without a clear use-case in mind for the board. 

![sorry, no alt found](fab8/07.png)

Ended up simply putting the sockets at the opposite end of Xiao's USB-C port. The button went to the corner for easy access when holding the board in one's hand. 

![sorry, no alt found](fab8/08.png)

Set the clearance and track width to 0.4mm from the default 0.2mm, as recommended in the lecture. 

![sorry, no alt found](fab8/09.png)

Of course, during routing it can become clear that some pins should be switched around to be better in line with their destinations.

![sorry, no alt found](fab8/10.png)

Entered a fillet radius of 3mm. 

![sorry, no alt found](fab8/11.png)

Everything routed at this point, except for the ground. 

![sorry, no alt found](fab8/12.png)

The design rules checker seemed fine with everything. The silkscreen stuff was irrelevant for this board. 

![sorry, no alt found](fab8/13.png)

Settings used for the export of gerbers. 

![sorry, no alt found](fab8/14.png)

All ground pins were connected to the base plate, as suggested in the lecture. It is nice to not have to worry about routing the ground pins, makes the work quite a bit simpler. 

![sorry, no alt found](fab8/15.jpg)

Time for milling. My board was supposedly even a bit smaller than the Tarantino, so I got one of the last remaining small copper plates for it. 

![sorry, no alt found](fab8/16.jpg)

The plate must have been ever so slightly bent, because the milling didn't go through the copper layer at the edges of the plate. Twice I had to increase the depth slightly and go again until all of the routes were properly milled. You could tell by the color and reflectivity of the gaps whether they had gone through the copper all the way. 

![sorry, no alt found](fab8/17.jpg)

Three milling passes and it was done. In the future it might be worth increasing the milling depth by default, and of course take more care to ensure the plate is as straight as possible. 

![sorry, no alt found](fab8/18.jpg)

Finished milling. 

![sorry, no alt found](fab8/19.jpg)

The pin sockets were in these long pieces that were supposed to be cut to specified sizes. 

![sorry, no alt found](fab8/20.jpg)

I went with two 4pin pieces for the analog inputs and with two 7pin pieces for the Xiao. I chose to have the 7 together in one component despite it being harder to solder, because the tradeoff of them being better aligned with each other was worth it for me. 

![sorry, no alt found](fab8/21.jpg)

Soldering work in progress. 

![sorry, no alt found](fab8/22.jpg)

Soldering finished. I allowed the ground pin connections to be sloppy, assuming that wouldn't matter since those were connected to the entire base copper layer anyway. 

# Coding

It was three weeks after completing the board that I tried programming it. At the time of writing, I had been learning to program in [Rust](https://www.rust-lang.org/) for about a year. I did several projects with it and then started making my thesis software prototype with it also. Given Rust's reputation with also being a great language for embedded programming, I wanted to try it. 

I found a lot of resources to just get started. Here were the main ones:

[Github community for Rust on ESP](https://github.com/esp-rs)  
[Main book for the above](https://docs.esp-rs.org/book/introduction.html)   
[Book for ESP without Rust's standard library](https://docs.esp-rs.org/no_std-training/01_intro.html)

The "std" in "no_std" refers to Rust's standard library, which provides a lot of common functions and tools. It is not required for bare metal programming, but can be used for convenience. One of the chapters in the above book mentions that it can add overhead and some latency to projects, so I opted to go without. Latency was important to mitigate for my [final project](fablab00).

I won't go through the setup process here, since I just directly followed the book. Simply, I started my project using the no_std template, installed all the dependencies and then tried to blink an LED. I'm using Linux, so I followed the instructions for that. 

```rust
#![no_std]
#![no_main]

use esp_backtrace as _;
use esp_hal::{clock::ClockControl, delay::Delay, gpio::IO, peripherals::Peripherals, prelude::*};

#[entry]
fn main() -> ! {        
    let peripherals = Peripherals::take();
    let io = IO::new(peripherals.GPIO, peripherals.IO_MUX);
    let system = peripherals.SYSTEM.split();
    let clocks = ClockControl::boot_defaults(system.clock_control).freeze();

    let delay = Delay::new(&clocks);

    esp_println::logger::init_logger_from_env();

    let mut led9 = io.pins.gpio9.into_push_pull_output();

    // Set led to high
    led9.set_high();

    loop {
        log::info!("Hello world!");
        delay.delay(1000.millis());
        led9.toggle();
    }
}
```

Then I plugged in the ESP32, ran `cargo run` to run the Rust code, and it flashed! It found the microcontroller, and started spamming Hello World in the terminal. I was expecting issues with this step, but it was much easier than my previous experience with the Arduino IDE. 

Unfortunately, there still was an issue. The LED didn't blink. I swapped the ESP32 onto the Tarantino board to try with that board's lights, and it worked fine. So the issue was evidently with my newly designed board. 

Something might have been wrong with my Tarantino board as well. This came up when I was trying to read the button press on both boards. On my design, the button didn't work at all. But with the Tarantino, the button did not register, but randomly touching the board on some places did trigger its input pin and terminal went crazy. 

I went to debug my design with a multimeter and noticed that the ground pin on the header simply wasn't touching the copper. The lump of solder was hanging in the air, the gap barely visible with the naked eye. I fixed it with the ugliest solder joint you've ever seen, out of spite (allowed because the entire copper plate belongs to ground). The button header pin also seemed like it wasn't properly connected, so I fixed that too. 

![please forgive me](fab8/23.jpg)

There might be more issues still, but this at least allowed me to get the button and LED to work. Here was the final Rust code that makes the LED toggle on and off on each button release:

```rust
#![no_std]
#![no_main]

use esp_backtrace as _;
use esp_hal::{
    clock::ClockControl, delay::Delay, gpio::IO, peripherals::Peripherals, prelude::*,
};

#[entry]
fn main() -> ! {
    let peripherals = Peripherals::take();
    let io = IO::new(peripherals.GPIO, peripherals.IO_MUX);
    let system = peripherals.SYSTEM.split();

    // Not used right now. You would use these to make delays. 
    let clocks = ClockControl::boot_defaults(system.clock_control).freeze();
    let _delay = Delay::new(&clocks);

    // Initialise logger to allow printing to terminal.
    esp_println::logger::init_logger_from_env();

    // Initialise pins
    let mut led9 = io.pins.gpio9.into_push_pull_output();
    let btn = io.pins.gpio8.into_pull_up_input();

    let mut toggle_state: bool = false;

    loop {
        // Read button state
        let btn_read = !btn.is_high();

        // If button state is the same as the previous state, reset loop
        if toggle_state == btn_read {
            continue;
        }

        // This could probably be more robust, so don't take it as gospel
        if btn.is_low() {
            toggle_state = true;
            log::info!("Button pressed");
        } else if toggle_state == true {
            toggle_state = false;
            led9.toggle();
            log::info!("Button released");
        }
    }
}
```

One thing to note here is that the Rust libraries expose many more options for even the pin settings than Arduino code does. You can see from the initialisers above, the functions `into_push_pull_output()` and `into_pull_up_input()` are used to set the pin modes. These weren't something that I recognised from Arduino, which simply had you set the pin mode to `INPUT` or `OUTPUT`. There are multiple other function options not shown here, and it took a bit of trial and error and searching around to figure out the appropriate ones. I didn't understand them fully at this point yet, but they did the trick. 
---
layout: post
title: Nightwatch + Webpack
cover: nightwatch.jpg
date:   2017-08-25 12:00:00
categories: posts
---

### Intro

So you've started a fancy new JavaScript project and the first thing you're probably thinking about is setting up a proper integration testing suite right? Of course you are, because [test driven development](https://softwareengineering.stackexchange.com/questions/41409/why-does-tdd-work) is the bee's knees!

Why are integration tests so much better than unit tests? Well, the answer is simple, why test parts of a tech stack separately when you could just test the whole solution from end-to-end!

[Nightwatch](http://nightwatchjs.org/) is a great end-to-end testing framework that works alongside Selenium (for more info on Selenium read [this](http://www.seleniumhq.org/)). However, Nightwatch can be a bit tricky to set up now that it no-longer comes with the GeckoDriver by default anymore. It is especially tricky to set up on a gui-less dev environment, as it throws some pretty nasty errors. It is for these reasons that I chose to write up a quick summary of how I got it to work on a gui-less Ubuntu box for a vanilla Webpack project.


### Prerequsites

My dev environment is a Ubuntu gui-less box running, `Ubuntu 16.04.2 LTS` so hopefully you're running on something similar.

Nightwatch and it's required browser drivers need a few prrequsites installed to work. So I'll list them out here. Make sure to get the latest versions of each and/or update them if already installed.

 - Node [download](https://nodejs.org/en/)
 - Yarn Package Manager [download](https://yarnpkg.com/lang/en/)
 - Java Development Kit [download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

If you're trying to get this running on a gui-less environment like me, please
ensure you have XVFB installed `sudo apt-get install xvfb`

### Install Nightwatch and Selenium Dependencies

Install Nightwatch globally `npm install -g nightwatch`

I always test on Firefox and Chrome, so we'll be using two drivers with Selenium, GeckoDriver (Firefox) and ChromeDriver.
Assuming you have Yarn installed on your system, get the following packages using `yarn install {NAME}`

 - Selenium
 - GeckoDriver
 - ChromeDriver

To test if Selenium runs properly on your machine, navigate to the .jar file in your 
`node_modules` folder and run `java -jar selenium-server-standalone-{VERSION}.jar`

Selenium might throw errors if you're missing some libs. I encountered the following on
my machine.

 - libss3
 - libfontconfig1
 - libgconf-2-4

Simply `sudo apt-get` the library that you're missing to clear up any errors.

If everything looks good, let's move on!

### Configuring Nightwatch

Nightwatch requires a `nightwatch.json` at the root of your project file to run. Here's one that I use that includes GeckoDriver and ChromeDriver.
I've also added some customized options for both which reduce errors while running tests.

<script src="https://gist.github.com/imRohan/106351826fdd8a5e279ea2e53e8455da.js"></script>

There are a few things that you should double check. Mainly the relative paths to the drivers
and the `.jar` file for Selenium. All three should be in the `node_modules` folder.

Tests should be stored in a `./tests/` folder. For more info in actually writing tests,
check [this](http://nightwatchjs.org/#writing-tests) page out.

### Running Nightwatch

To run Nightwatch, we must first have the Selenium server running in the background. 

To run a standalone server, simply navigate to the folder containing the .jar file
and run `java -jar selenium-server-standalone-{VERSION}.jar`, where VERSION is the version 
of selenium currently installed.

Next, lets create a new virtual display using Xvfb, and output any logs to our `/logs/` folder.

`Xvfb :1 -screen 0 1024x768x16 & > ./logs/xvfb-log.txt`

Lastly, we assign this new display and run Nightwatch giving it a browser name as the argument (chrome, firefox)

`DISPLAY=:1.0 nightwatch --env {DRIVER NAME}  --verbose`

If everything is running as intended, your Nightwatch should run through your tests and display an output.

### Automating Everything 

For Nightwatch to work properly, it always needs a running Selenium server. 
However manually running the server, and then Nightwatch is not always ideal.

So, I wrote a simple bash script that automates everything and lets the user select the desired browser for testing.

Please keep in mind that this is purely optional, however, it did save me some time :)

<script src="https://gist.github.com/imRohan/44b75419ca1aa3a5422c99b91a6d416a.js"></script>

Simply run the script with the browser name as the argument (chrome, firefox).

`./nightwatchRunner.sh [browserName]`

### End

Nightwatch is really awesome once everything is set up, it's well worth the effort.

And yes, Amsterdam was awesome! I highly recommend checking out Rijksmuseum :) 

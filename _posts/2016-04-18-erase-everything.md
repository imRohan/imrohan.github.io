---
layout: post
title: Erase Everything
cover: eraseEverything.gif
date:   2016-04-18 12:00:00
categories: posts
---
### My First Chrome Extension

A few days ago I was surfing the net trying to stream some videos when it occurred to me just how spammy and aggressive some sites could be with their ads. There were popups, banners, text overlays, you name it. Rather then even attempt to close each and every single popup by sifting through the various close buttons, I simply fired up Chrome's developer panel and went to work hiding elements by adding `display: none` to the elements style block. Simple enough, a few right clicks and `ctrl+v` later and the page displayed nothing other than the video I wanted to watch. It felt great to remove all the ad clutter. This got me thinking, what if there was an easier way to go about hiding elements? 

### Enter Google Chrome Extensions

I spent a few days building out Erase Everything. This simple extension automates the process of adding `display: none` to a elements style. The user input is minimal. Simply hover over an element, and click! Just like that it fades away and is removed from the DOM. 


### How can I install it?

Head on over to the Github repo and download the unpackaged extension in zip form, [here.](https://github.com/imRohan/eraseEverything) Once downloaded, visit `chrome://extensions` and click "load unpacked extension". The Erase Everything icon should appear in your browser bar. 

To use, simply click the icon (it will turn green) and begin overing over elements. When the element you want shows a red border, simply click it to erase.

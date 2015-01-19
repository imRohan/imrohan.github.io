---
layout: post
title: HTML 5 Canvas Experiment.
cover: html.png
date:   2013-05-27 12:00:00
categories: posts
---
### Working with the Canvas
The HTML 5 canvas element can be used in a wide variety of different situations, but it is always used to display graphical content to the user. Using javascript in conjunction with HTML 5, I began writing a small proof of concept that would allow users to create fractal art.

>“Fractal art is a form of algorithmic art created by calculating fractal objects and representing the calculation results as still images, animations, and media. Fractal art developed from the mid-1980s onwards.[1] It is a genre of computer art anddigital art which are part of new media art. The Julia set and Mandlebrot sets can be considered as icons of fractal art."

Fractal art (especially in the western world) is not drawn or painted by hand. It is usually created indirectly with the assistance of fractal-generating software, iterating through three phases: setting parameters of appropriate fractal software; executing the possibly lengthy calculation; and evaluating the product.” - Wikipedia 

By recursively drawing bezier to the canvas with randomly generated origins, fractal evolutions can be dynamically visualized. The user can directly manipulate the growth of fractals using simple touch gestures.

Simply click (or touch) to draw fractals, swipe left or right to change colours. I implemented the canvas2image javascript library so users could download their creations but it seems to crash for very large files (fair warning). Simply click Save and add a .png file extension to the downloaded file.

Try it out here, [Fractal HTML 5 Canvas Experiment](/projects/canvasExperiment)

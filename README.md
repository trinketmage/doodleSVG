# doodleSVG

* developed at BigBossStudio

doodleSVG is a javascript tool, its purpose is to create objects that handle normalized path (for path, line, circle, rect, ellipse and polygon) from 0 to 1, to easely handle drawing SVG line animation for anytype of SVG object. It can be use with any tween engine. 

## Inpired by

* [Vivus by maxwellito](https://github.com/maxwellito/vivus)
* [DrawSVGPlugin by Greensock](http://greensock.com/drawSVG)
* [SVGPathConverter by Waest](https://github.com/Waest/SVGPathConverter)

## Examples

1. [Animate with TweenMax](http://codepen.io/trinketmage/pen/bEBxqg)

## Usage

```shell
git clone https://github.com/trinketmage/doodleSVG.git doodleSVG
```

## Install package with bower
[![Bower version](https://badge.fury.io/bo/doodleSVG.svg)](https://badge.fury.io/bo/doodleSVG)
$ bower install doodleSVG

## How to

You can play with origin and end of each return iteration to do your desire doodle.

* Animate one element
```js
var doodle = new doodleSVG();

var el = document.querySelector("path");
var myDoodle = doodle.normalize(el);

// Default value for end is 0.
TweenMax.to(myDoodle, 5, {end: 1});
```

* Animate a list of elements
```js
var doodle = new doodleSVG();

var list = document.querySelectorAll("rect");
var myDoodles = doodle.normalizeGroup(list);

// Default value for end is 0.
TweenMax.to(myDoodles, 5, {end: 1});
```

# doodleSVG

doodleSVG is a javascript tool, its purpose is to create objects that handle normalized path (for path, line, circle, rect, ellipse and polygon) from 0 to 1, to easely handle drawing SVG line animation for anytype of SVG object. It can be use with any tween engine. 

## Inpired by

* [Vivus by maxwellito](https://github.com/maxwellito/vivus)
* [DrawSVGPlugin by Greensock](http://greensock.com/drawSVG)

## Examples

1. [Animate with TweenMax](http://codepen.io/trinketmage/pen/bEBxqg)

## Usage

```shell
git clone https://github.com/trinketmage/doodleSVG.git doodleSVG
```

## How to

* Animate one element
```js
var SPN = new doodleSVG();

var el = document.querySelector("path");
var newObj = SPN.normalize(el);

// Default value for end is 0.
TweenMax.to(newObj, 5, {end: 1});
```

* Animate a list of elements
```js
var SPN = new doodleSVG();

var list = document.querySelectorAll("rect");
var newObjArray = SPN.normalizeGroup(list);

// Default value for end is 0.
TweenMax.to(newObjArray, 5, {end: 1});
```

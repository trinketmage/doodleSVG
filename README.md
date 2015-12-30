# SVGPathNormalizer

SVGPathNormalizer is a javascript tool, its purpose is to create an object that handle normalize path (for path, line, circle, rect, ellipse and polygon) from 0 to 1, for drawing line animation purpose. It can be use with any tween engine. 

# Inpired by

* [Vivus by maxwellito](https://github.com/maxwellito/vivus)
* [DrawSVGPlugin by Greensock](http://greensock.com/drawSVG)

## Examples

1. [Animate with TweenMax](http://trinketmage.free.fr/factory/SVGPathNormalizer/example/)

## Usage

```shell
git clone https://github.com/trinketmage/SVGPathNormalizer.git SVGPathNormalizer
```

## How to

* Animate one element
```js
var SPN = new SVGPathNormalizer();

var el = document.querySelector("path");
var newObj = SPN.normalize(el);

// Default value for origin is 0.
TweenMax.to(newObj, 5, {origin: 1});
```

* Animate a list of elements
```js
var SPN = new SVGPathNormalizer();

var list = document.querySelectorAll("rect");
var newObjArray = SPN.normalizeGroup(list);

// Default value for origin is 0.
TweenMax.to(newObjArray, 5, {origin: 1});
```

# SVGPathNormalizer

SVGPathNormalizer will create an object that handle normalize path (of path, line, circle, rect and polygon) from 0 to 1, for animation purpose.

## DEMO

1. [TweenMax](http://trinketmage.free.fr/factory/SVGPathNormalizer/example/)

## Usage

```shell
git clone https://github.com/trinketmage/SVGPathNormalizer.git SVGPathNormalizer
```

## HOW TO

* Animate one element
```js
var SPN = new SVGPathNormalizer();

var el = document.querySelector("path");
var newObj = SPN.normalize(el);

// Default value for origin is 0.
TweenMax.to(newObj, 5, {origin: 1});
```

* Animate multiple elements
```js
var SPN = new SVGPathNormalizer();

var list = document.querySelectorAll("rect");
var newObjArray = SPN.normalizeGroup(list);

// Default value for origin is 0.
TweenMax.to(newObjArray, 5, {origin: 1});
```

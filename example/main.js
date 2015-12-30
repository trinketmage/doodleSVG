(function() {
    var SPN = new SVGPathNormalizer();

    var list = document.querySelectorAll("rect");
    var newObjArray = SPN.normalizeGroup(list);

    var el = document.querySelector("path");
    var newObj = SPN.normalize(el);

    TweenMax.to(newObjArray, 5, {origin: 1, ease:Linear.easeNone, repeat:-1, yoyo: true, repeatDelay: .3});
    TweenMax.to(newObj, 5, {origin: 1, ease:Linear.easeNone, repeat:-1, yoyo: true, repeatDelay: .3});
})();
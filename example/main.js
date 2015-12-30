(function() {
    var SPN = new SVGPathNormalizer();

    var list = document.querySelectorAll("rect");
    var newObjArray = SPN.normalizeGroup(list);

    var el = document.querySelector("path");
    var newObj = SPN.normalize(el);

    TweenMax.to(newObjArray, 3, {origin: 1, ease:Quint.easeInOut, repeat:-1, yoyo: true, repeatDelay: .3});
    TweenMax.to(newObj, 3, {origin: 1, ease:Quint.easeInOut, repeat:-1, yoyo: true, repeatDelay: .3});
})();
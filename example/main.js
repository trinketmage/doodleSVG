(function() {
    var SPN = new doodleSVG();

    var list = document.querySelectorAll("path, rect, polygon, polyline, line, circle");
    var newObjArray = SPN.normalizeGroup(list);

    // var el = document.querySelector("path");
    // var newObj = SPN.normalize(el);

    // TweenMax.set(newObjArray, {end: 1});
    // TweenMax.set(newObj, {end: 1});
    TweenMax.to(newObjArray, 3, {origin: 0, end: 1, ease:Quint.easeInOut, repeat:-1, yoyo: true, repeatDelay: .3});
    // TweenMax.to(newObj, 3, {origin: 0, end: 1, ease:Quint.easeInOut, repeat:-1, yoyo: true, repeatDelay: .3});
})();

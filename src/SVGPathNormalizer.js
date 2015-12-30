var SVGPathNormalizer = function()
{

};

SVGPathNormalizer.prototype.getRectLength = function(el)
{
    var w = el.getAttribute('width');
    var h = el.getAttribute('height');

    var pathLength = (w*2)+(h*2);

    return {
		element : el,
		pathLength : pathLength
	};
};
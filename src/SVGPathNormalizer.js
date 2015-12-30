var SVGPathNormalizer = function()
{

};

function normalizeArray(a, b, c, d)
{
    return c = parseFloat(c) - parseFloat(a), d = parseFloat(d) - parseFloat(b), Math.sqrt(c * c + d * d)
};

SVGPathNormalizer.prototype.normalize = function(el)
{
    if (!el) return 0;
    var pathLength, BBox, points, normPoints, i, j, k, l, check = el.tagName.toLowerCase();

 	if ("path" === check) {
        i = el.style.strokeDasharray, el.style.strokeDasharray = "none", pathLength = el.getTotalLength() || 0;
        try {
            BBox = el.getBBox()
        } catch (m) {}
        el.style.strokeDasharray = i
    }
    else if ("rect" === check)
    {
    	pathLength = 2 * el.getAttribute("width") + 2 * el.getAttribute("height");
    }
    else if ("circle" === check)
    {	
    	pathLength = 2 * Math.PI * parseFloat(b.getAttribute("r"));
    }
    else if ("line" === check)
    {
    	pathLength = normalizeArray(el.getAttribute("x1"), el.getAttribute("y1"), el.getAttribute("x2"), el.getAttribute("y2"));
    }
    else if ("polyline" === check || "polygon" === check)
    {
        for (points = el.getAttribute("points").split(", ").join(",").split(" "), pathLength = 0, i = points[0].split(","), "" === points[points.length - 1] && points.pop(), "polygon" === c && (points.push(points[0]), -1 === f[0].indexOf(",") && points.push(points[1])), j = 1; j < points.length; j++)
    	{
    		normPoints = points[j].split(","), 1 === normPoints.length && (normPoints[1] = points[j++]), 2 === h.length && (pathLength += normalizeArray(i[0], i[1], normPoints[0], normPoints[1]) || 0, i = h);
    	}
    }
    else "ellipse" === check && (k = parseFloat(el.getAttribute("rx")), l = parseFloat(el.getAttribute("ry")), pathLength = Math.PI * (3 * (k + l) - Math.sqrt((3 * k + l) * (k + 3 * l))));

    return new PathNormalized(el, pathLength);
};
SVGPathNormalizer.prototype.normalizeGroup = function(domList)
{
	if (!domList) return 0;
	else if(typeof(domList) != 'object') return 0;

	var normalizedArray = [];

	var that = this;

	[].forEach.call(domList, function(item, key){
		var attemptNormalize = that.normalize(item);
		if(item)
		{
			normalizedArray.push(attemptNormalize);
		}
	});
	return (normalizedArray.length > 0) ? normalizedArray : 0;
};

PathNormalized = function(el, pathLength)
{
	this.dom = el;
	this.pathLength = pathLength;
	this.end = this.pathLength;
	this.origin = 0;
	this.path = this.origin+"px, "+this.end+"px";
	// this.dom.style.strokeDashoffset = this.pathLength+"px";
};

PathNormalized.prototype.drawPath = function(origin)
{
	var d = origin+"px, "+this.end+"px";
	this.dom.style.strokeDasharray = d;
	this.path = d;
};

Object.defineProperty(PathNormalized.prototype, "origin",{
    set: function(newVal){
        this._origin = newVal;
    	this.drawPath(newVal * this.pathLength);
    }, 
    get: function(){
    	return this._origin;
    }
});
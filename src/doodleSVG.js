var doodleSVG = function()
{

};

function normalizeArray(a, b, c, d)
{
    return c = parseFloat(c) - parseFloat(a), d = parseFloat(d) - parseFloat(b), Math.sqrt(c * c + d * d)
};

doodleSVG.prototype.normalize = function(el)
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
    	pathLength = 2 * Math.PI * parseFloat(el.getAttribute("r"));
    }
    else if ("line" === check)
    {
    	pathLength = normalizeArray(el.getAttribute("x1"), el.getAttribute("y1"), el.getAttribute("x2"), el.getAttribute("y2"));
    }
    else if ("polyline" === check || "polygon" === check)
    {
        for (points = el.getAttribute("points").split(", ").join(",").split(" "), pathLength = 0, i = points[0].split(","), "" === points[points.length - 1] && points.pop(), "polygon" === check && (points.push(points[0]), -1 === points[0].indexOf(",") && points.push(points[1])), j = 1; j < points.length; j++)
    	{
    		normPoints = points[j].split(","), 1 === normPoints.length && (normPoints[1] = points[j++]), 2 === normPoints.length && (pathLength += normalizeArray(i[0], i[1], normPoints[0], normPoints[1]) || 0, i = normPoints);
    	}
    }
    else "ellipse" === check && (k = parseFloat(el.getAttribute("rx")), l = parseFloat(el.getAttribute("ry")), pathLength = Math.PI * (3 * (k + l) - Math.sqrt((3 * k + l) * (k + 3 * l))));

    return new doodleSVG.PathNormalized(el, pathLength);
};
doodleSVG.prototype.normalizeGroup = function(domList)
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

doodleSVG.PathNormalized = function(el, pathLength)
{
	this.dom = el;
	this.pathLength = pathLength;
	this.end = 0;
	this.origin = 0;
	this.path = this.pathLength+"px, "+this.pathLength+"px";
	this.dom.style.strokeDasharray = this.path;
	this.dom.style.strokeDashoffset = "0px";
};

doodleSVG.PathNormalized.prototype.drawOrigin = function(origin)
{
	this.dom.style.strokeDashoffset = -(origin*this.pathLength)+"px";
};
doodleSVG.PathNormalized.prototype.drawEnd = function(end)
{
	var d = (this.pathLength*end - this.origin*this.pathLength)+"px, "+this.pathLength+"px";
	this.dom.style.strokeDasharray = d;
	this.path = d;
};

Object.defineProperty(doodleSVG.PathNormalized.prototype, "origin",{
    set: function(newVal){
        this._origin = newVal;
    	this.drawOrigin(newVal);
    }, 
    get: function(){
    	return this._origin;
    }
});
Object.defineProperty(doodleSVG.PathNormalized.prototype, "end",{
    set: function(newVal){
        this._end = newVal;
    	this.drawEnd(newVal);
    }, 
    get: function(){
    	return this._end;
    }
});
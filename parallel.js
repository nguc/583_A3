var margin = {top: 30, right: 40, bottom: 20, left: 200},
    width = 900 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// list of categories for each parallel line including type of data to plot
var dimensions = [
  {
    name: "Brand",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "% from sugar",
    scale: d3.scale.linear().range([0, height]),
    type: "number"
  },
  {
    name: "% from fat",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Calories",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Carbo",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Cups",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Fat",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Fiber",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Potassium",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Protein",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
    {
    name: "Rating",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Sodium",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
  {
    name: "Sugars",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
    {
    name: "Vitamins",
    scale: d3.scale.linear().range([height, 0]),
    type: "number"
  },
];

var x = d3.scale.ordinal()
    .domain(dimensions.map(function(d) { return d.name; }))
    .rangePoints([0, width]);

var line = d3.svg.line()
    .defined(function(d) { return !isNaN(d[1]); });

var yAxis = d3.svg.axis()
    .orient("left");

var svg = d3.select("div#parallel-container")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", " 0 0 900 250")
    .classed("svg-content", true)
    .attr("align", "bottom")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// get all the points to plot
var dimension = svg.selectAll(".dimension")
    .data(dimensions)
  .enter().append("g")
    .attr("class", "dimension")
    .attr("transform", function(d) { return "translate(" + x(d.name) + ")"; });

// load in the data
d3.csv("cereal2.csv", function(data) {
  dimensions.forEach(function(dimension) {
    dimension.scale.domain(dimension.type === "number"
        ? d3.extent(data, function(d) { return +d[dimension.name]; })
        : data.map(function(d) { return d[dimension.name]; }).sort());
  });

  // set up the colors for the lines
  var brandNames = getBrandNames(data);
  var colors = d3.scale.category20();
  colors.domain(brandNames);

  svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", draw);

  svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", draw)
      .style('stroke', function(d) { return colors(d.Brand); });

  dimension.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(yAxis.scale(d.scale)); })
    .append("text")
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d.name; });

  var ordinal_labels = svg.selectAll(".axis text")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  var projection = svg.selectAll(".background path,.foreground path")
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  function mouseover(d) {
    svg.classed("active", true);

    // plot the brand names
    if (typeof d === "string") {
      projection.classed("inactive", function(p) { return p.name !== d; });
      projection.filter(function(p) { return p.name === d; }).each(moveToFront);
      ordinal_labels.classed("inactive", function(p) { return p !== d; });
      ordinal_labels.filter(function(p) { return p === d; }).each(moveToFront);
    } else {
      projection.classed("inactive", function(p) { return p !== d; });
      projection.filter(function(p) { return p === d; }).each(moveToFront);
      ordinal_labels.classed("inactive", function(p) { return p !== d.name; });
      ordinal_labels.filter(function(p) { return p === d.name; }).each(moveToFront);
    }
  }

  // filter out the brand names of the cereal
  function getBrandNames(data){
    var brandNames;
    var color = d3.scale.category20();
    brandNames = data.filter(function(d) {
      d.Brand;
    });
    return brandNames;
  }

  function mouseout(d) {
    svg.classed("active", false);
    projection.classed("inactive", false);
    ordinal_labels.classed("inactive", false);
  }

  function moveToFront() {
    this.parentNode.appendChild(this);
  }
});

function draw(d) {
  return line(dimensions.map(function(dimension) {
    return [x(dimension.name), dimension.scale(d[dimension.name])];
  }));
}

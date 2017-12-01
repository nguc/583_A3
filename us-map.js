 //Width and height of map
    var width = 960;
    var height = 500;

    // D3 Projection
    var projection = d3.geo.albersUsa()
      .translate([width/2, height/2])    // translate to center of screen
      .scale([1000]);          // scale things down so see entire US
            
    // Define path generator
    var geoPath = d3.geo.path()    // path generator that will convert GeoJSON to SVG paths
      .projection(projection);  // tell path generator to use albersUsa projection

        
    // Define linear scale for output
    var color = d3.scale.linear()
      .range(["#00FF00", "#7FFF00", "#FFFF00", "#FF6900", "#FF0000"]); 

    var legendText = [ "32% - 35%", "27% - 31%", "23% - 26%", "19% - 22%", "15% - 18%" ]; 

    //Create SVG element and append map to the SVG
    var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
            
    // Append Div for tooltip to SVG
    var div = d3.select("body")
      .append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);

    // appending state data to svg
    var state_obeisty = svg.append('g');

    // Load in my states data!
    d3.csv("obesity_poverty.csv", function(data) {
      
      color.domain([19, 23, 27, 31, 35]); // setting the range of the input data  // TODO: Check ranges by putting in tooltip

      // Load GeoJSON data and merge with states data
      d3.json("us-states.json", function(json) {

        // Loop through each state data value in the .csv file
        for (var i = 0; i < data.length; i++) {

          // Grab State Name
          var dataState = data[i].State;

          // Grab data value 
          var dataValue = +data[i].Obese;
          // Find the corresponding state inside the GeoJSON
          for (var j = 0; j < json.features.length; j++)  {
            var jsonState = json.features[j].properties.name;

            if (dataState == jsonState) {
              // Copy the data value into the JSON
              json.features[j].properties.visited = dataValue; 
              // Stop looking through the JSON
              break;
            }
          }
        }
            
        // Bind the data to the SVG and create one path per GeoJSON feature
        svg.selectAll("path")
          .data(json.features)
          .enter()
          .append("path")
          .attr("d", geoPath)
          .style("stroke", "#fff")
          .style("stroke-width", "1")
          .style("fill", function(d) {
            // Get data value
            var value = d.properties.visited;

            if (value) {
            //If value exists…
            return color(value);
            } else {
            //If value is undefined…
            return "rgb(213,222,217)";
            }
          });
           
        // Find data for each state's fave cereal and get the cereal nutritional facts
        d3.csv("favorite_cereal.csv", function(fData) {
           d3.csv("cereal.csv", function(cData) {

          for (var i = 0; i < fData.length; i++){
            for (var j = 0; j < cData.length; j++){
               // grab state name
              var stateCereal = fData[i].LocationDesc;
              // grab cereal name
              var cerealName = fData[i].Favourite;
              console.log("state: " + stateCereal + " Favourite: " + cerealName);
              // grab cereal info if it matches favourite
              if (fData[i].Favourite == cData[j].Brand){
                console.log(cData[j]);
                break;
              }
            }
          }

          })
        });  
                
        // Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
        var legend = d3.select("body").append("svg")
          .attr("class", "legend")
          .attr("width", 140)
          .attr("height", 200)
          .selectAll("g")
          .data(color.domain().slice().reverse())
          .enter()
          .append("g")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", color);

            legend.append("text")
              .data(legendText)
              .attr("x", 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .text(function(d) { return d; });
        });
    }); 


    function parseGeoLocation(data) { 
      // TODO: PARSE GEOLOCATION
    }
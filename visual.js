var dataType;
var dataSource;
var graphLabel;
function myFunction(color_type) {
    dataType = color_type;
  if (dataType == "Gender"){
    dataSource = "male_female_data.csv";
    graphLabel = "Male vs. Female Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("red2").style.display = "inline-block";
    document.getElementById("red2").innerHTML = "&nbsp&nbsp&nbspFemale";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("blue").innerHTML = "&nbsp&nbsp&nbspMale";
    document.getElementById("black").style.display = "none";
    document.getElementById("green2").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("purple").style.display = "none";
    document.getElementById("gray").style.display = "none";
    document.getElementById("mustard").style.display = "none";
  }
  if (dataType == "Age"){
    dataSource = "age_data.csv";
    graphLabel = "Different Ages Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("red2").style.display = "inline-block";
    document.getElementById("red2").innerHTML = "&nbsp&nbsp&nbsp18-24";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("blue").innerHTML = "&nbsp&nbsp&nbsp25-34";
    document.getElementById("black").style.display = "inline-block";
    document.getElementById("black").innerHTML = "&nbsp&nbsp&nbsp35-44";
    document.getElementById("green2").style.display = "inline-block";
    document.getElementById("green2").innerHTML = "&nbsp&nbsp&nbsp45-54";
    document.getElementById("orange2").style.display = "inline-block";
    document.getElementById("orange2").innerHTML = "&nbsp&nbsp&nbsp55-64";
    document.getElementById("purple").style.display = "inline-block";
    document.getElementById("purple").innerHTML = "&nbsp&nbsp&nbsp65+";
    document.getElementById("gray").style.display = "none";
    document.getElementById("mustard").style.display = "none";
  }
  if (dataType == "Education"){
    dataSource = "education_data.csv";
    graphLabel = "Different Education Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("red2").style.display = "inline-block";
    document.getElementById("red2").innerHTML = "&nbsp&nbsp&nbspCollege&nbspGrad";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("blue").innerHTML = "&nbsp&nbsp&nbspSome&nbspCollege";
    document.getElementById("black").style.display = "inline-block";
    document.getElementById("black").innerHTML = "&nbsp&nbsp&nbspHigh&nbspSchool&nbspGrad";
    document.getElementById("green2").style.display = "inline-block";
    document.getElementById("green2").innerHTML = "&nbsp&nbsp&nbspLess&nbspthan&nbspHigh&nbspSchool";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("purple").style.display = "none";
    document.getElementById("gray").style.display = "none";
    document.getElementById("mustard").style.display = "none";
  }
  if (dataType == "Overall"){
    dataSource = "overall_data.csv";
    graphLabel = "Overall Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("black").style.display = "inline-block";
    document.getElementById("black").innerHTML = "&nbsp&nbsp&nbspOverall";
    document.getElementById("blue").style.display = "none";
    document.getElementById("green2").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("purple").style.display = "none";
    document.getElementById("gray").style.display = "none";
    document.getElementById("mustard").style.display = "none";
    document.getElementById("red2").style.display = "none";
  }
  if (dataType == "Income"){
    dataSource = "income_data.csv";
    graphLabel = "Different Incomes Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("red2").style.display = "inline-block";
    document.getElementById("red2").innerHTML = "&nbsp&nbsp&nbspLess&nbspthan&nbsp15K";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("blue").innerHTML = "&nbsp&nbsp&nbsp$15,000-$24,999";
    document.getElementById("black").style.display = "inline-block";
    document.getElementById("black").innerHTML = "&nbsp&nbsp&nbsp$25,000-$34,999";
    document.getElementById("green2").style.display = "inline-block";
    document.getElementById("green2").innerHTML = "&nbsp&nbsp&nbsp$35,000-$49,999";
    document.getElementById("orange2").style.display = "inline-block";
    document.getElementById("orange2").innerHTML = "&nbsp&nbsp&nbsp$50,000-$74,999";
    document.getElementById("purple").style.display = "inline-block";
    document.getElementById("purple").innerHTML = "&nbsp&nbsp&nbsp$75,000&nbspor&nbspgreater";
    document.getElementById("gray").style.display = "inline-block";
    document.getElementById("gray").innerHTML = "&nbsp&nbsp&nbspData&nbspnot&nbspreported";
    document.getElementById("mustard").style.display = "none";
  }
  if (dataType == "Race"){
    dataSource = "race_data.csv";
    graphLabel = "Different Races Obesity";
    document.getElementById("lineHeader").innerHTML = graphLabel;
    document.getElementById("red2").style.display = "inline-block";
    document.getElementById("red2").innerHTML = "&nbsp&nbsp&nbsp2&nbspor&nbspmore&nbspraces";
    document.getElementById("blue").style.display = "inline-block";
    document.getElementById("blue").innerHTML = "&nbsp&nbsp&nbspAmerican&nbspIndian/Alaska&nbspNative";
    document.getElementById("black").style.display = "inline-block";
    document.getElementById("black").innerHTML = "&nbsp&nbsp&nbspAsian";
    document.getElementById("green2").style.display = "inline-block";
    document.getElementById("green2").innerHTML = "&nbsp&nbsp&nbspHawaiian/Pacific&nbspIslander";
    document.getElementById("orange2").style.display = "inline-block";
    document.getElementById("orange2").innerHTML = "&nbsp&nbsp&nbspHispanic";
    document.getElementById("purple").style.display = "inline-block";
    document.getElementById("purple").innerHTML = "&nbsp&nbsp&nbspNon&nbspHispanic&nbspBlack";
    document.getElementById("gray").style.display = "inline-block";
    document.getElementById("gray").innerHTML = "&nbsp&nbsp&nbspNon&nbspHispanic&nbspWhite";
    document.getElementById("mustard").style.display = "inline-block";
    document.getElementById("mustard").innerHTML = "&nbsp&nbsp&nbspOther";
  }
  
}
    document.getElementById("black").style.display = "none";
    document.getElementById("blue").style.display = "none";
    document.getElementById("green2").style.display = "none";
    document.getElementById("orange2").style.display = "none";
    document.getElementById("purple").style.display = "none";
    document.getElementById("gray").style.display = "none";
    document.getElementById("mustard").style.display = "none";
    document.getElementById("red2").style.display = "none";
obese();
  
function drawGenderLineChart(stateName){
  d3.select("#meantext").remove();
  d3.selectAll("g").remove();
var svg = d3.select("svg"),
    width = 300,
    height = 200,
    g = svg.append("g").attr("transform", "translate(" + 1300+ "," + 50 + ")");
  
var x = d3.scaleLinear()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var lineMale = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateMale); });
  
var lineFemale = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateFemale); }); 
var line18 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state18); }); 
var line25 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state25); }); 
var line35 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state35); }); 
var line45 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state45); }); 
var line55 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state55); }); 
var line65 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state65); }); 
var lineCD = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateCD); }); 
var lineCS = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateCS); }); 
var lineHS = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateHS); }); 
var lineLH = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateLH); }); 
var lineOverall = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateOverall); });    
var line15KLess = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state15KLess); });  
var line15K = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state15K); });  
var line25K = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state25K); });  
var line35K = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state35K); });  
var line50K = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state50K); });  
var line75K = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state75K); });  
var lineNDR = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateNDR); });  

var line2 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.state2); });
var lineAI = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateAI); });
var lineAsian = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateAsian); });
var lineHawaiian = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateHawaiian); });
var lineHispanic = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateHispanic); });
var lineNHB = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateNHB); });
var lineNHW = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateNHW); });
var lineOther = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.stateOther); });
  

  
var stateNameMale = stateName+ "_male";
var stateNameFemale = stateName+ "_female";
var stateName18 = stateName+ "_18";
var stateName25 = stateName+ "_25";
var stateName35 = stateName+ "_35";
var stateName45 = stateName+ "_45";
var stateName55 = stateName+ "_55";
var stateName65 = stateName+ "_65";
var stateNameCD = stateName+ "_college_grad";
var stateNameCS = stateName+ "_college_some";
var stateNameHS = stateName+ "_hs_grad";
var stateNameLH = stateName+ "_less_hs";
var stateNameOverall = stateName+ "_overall";
var stateName15KLess = stateName+ "_15Less";
var stateName15K = stateName+ "_15K";
var stateName25K = stateName+ "_25K";
var stateName35K = stateName+ "_35K";
var stateName50K = stateName+ "_50K";
var stateName75K = stateName+ "_75K";
var stateNameNDR = stateName+ "_Not_Reported";

var stateName2 = stateName+ "_2";
var stateNameAI = stateName+ "_AI";
var stateNameAsian = stateName+ "_Asian";
var stateNameHawaiian = stateName+ "_Hawaiian";
var stateNameHispanic = stateName+ "_Hispanic";
var stateNameNHB = stateName+ "_NHB";
var stateNameNHW = stateName+ "_NHW";
var stateNameOther = stateName+ "_Other";

d3.csv(dataSource, function(d) {
  d.date = d.date;
  d.stateMale = d[stateNameMale];
  d.stateFemale = d[stateNameFemale];
  d.state18 = d[stateName18];
  d.state25 = d[stateName25];
  d.state35 = d[stateName35];
  d.state45 = d[stateName45];
  d.state55 = d[stateName55];
  d.state65 = d[stateName65];
  d.stateCD = d[stateNameCD];
  d.stateCS = d[stateNameCS];
  d.stateHS = d[stateNameHS];
  d.stateLH = d[stateNameLH];
  d.stateOverall = d[stateNameOverall];
  d.state15KLess = d[stateName15KLess];
  d.state15K = d[stateName15K];
  d.state25K = d[stateName25K];
  d.state35K = d[stateName35K];
  d.state50K = d[stateName50K];
  d.state75K = d[stateName75K];
  d.stateNDR = d[stateNameNDR];
  
  d.state2 = d[stateName2];
  d.stateAI = d[stateNameAI];
  d.stateAsian = d[stateNameAsian];
  d.stateHawaiian = d[stateNameHawaiian];
  d.stateHispanic = d[stateNameHispanic];
  d.stateNHB = d[stateNameNHB];
  d.stateNHW = d[stateNameNHW];
  d.stateOther = d[stateNameOther];
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain([2011, 2015]);
  y.domain([0, 45]);


  g.append("g")
    .attr("class","linechart")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format("d")))
    .select(".domain")
      ;

  g.append("g")
    .attr("class","linechart")
    .call(d3.axisLeft(y).ticks(10))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("text-anchor", "end")


  g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#0000FF")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineMale);
    
    
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ff0000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineFemale);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ff0000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line18);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#0000FF")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line25);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line35);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#00FF00")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line45);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FFA500")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line55);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#551A8B")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line65);   
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineCD);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineCS);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineHS);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#00FF00")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineLH);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineOverall);        
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line15KLess);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line15K);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line25K);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#00FF00")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line35K);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FFA500")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line50K);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#551A8B")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line75K);
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#808080")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineNDR);



g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line2);  
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineAI); 
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineAsian);  
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#00FF00")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineHawaiian); 
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FFA500")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineHispanic); 
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#551A8B")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineNHB);  
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#808080")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineNHW);  
g.append("path")
  .attr("class","linechart")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#D8AE47")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", lineOther);      
});

}
function drawPic(link, stateName, calories, Carbo, Cups, Fat, Fibre, Potassium, Protein, Rating, Shelf, Sodium, Sugars,
    Vitamins, Weight, cerealName){
      
      
    
    
d3.selectAll(".first").remove();
d3.selectAll(".stateName").remove();
d3.selectAll(".variables").remove();
d3.select('body').select('svg').append("image")
  .attr("x", 925)
  .attr("y", 75)
  .attr("height", "128px")
  .attr("width", "128px")
  .attr("class", "first")
  .attr("xlink:href", link)
  
d3.select('body').select('svg').append('text')
             .attr('class', 'stateName')
             .attr('text-anchor', 'middle')
       .style('fontWeight', 'bold')
       .attr('font-size', '14')
              .attr("x", 1075)
             .attr("y", 50)
             .text(stateName + "'s favorite cereal is " + cerealName )
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('fontWeight', 'bold')
       .attr('font-size', '14')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 90)
             .text("Nutrition Facts")
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 110)
             .text("Calories")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 110)
             .text(calories)       
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 130)
             .text("Fat")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 130)
             .text(Fat)
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 150)
             .text("Protein")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 150)
             .text(Protein)
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 170)
             .text("Sodium")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 170)
             .text(Sodium)
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 190)
             .text("Sugar")      
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 190)
             .text(Sugars)       
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 210)
             .text("Vitamins")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 210)
             .text(Vitamins)       
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 230)
             .text("Potassium")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 230)
             .text(Potassium)      
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 250)
             .text("Fibre")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 250)
             .text(Fibre)      
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 270)
             .text("Carbo")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 270)
             .text(Carbo)      
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 290)
             .text("Cups")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 290)
             .text(Cups)       
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 310)
             .text("Weight")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 310)
             .text(Weight)       
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 330)
             .text("Rating")
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 330)
             .text(Rating)
d3.select('body').select('svg').append('text')
             .attr('class', 'NutritionFacts')
       .attr('font-family', 'Franklin Gothic Heavy')
             .attr("x", 1075)
             .attr("y", 350)
             .text("Shelf") 
d3.select('body').select('svg').append('text')
             .attr('class', 'variables')
             .attr("x", 1150)
             .attr("y", 350)
             .text(Shelf)      
      

}

function obese(){
$('#statesvg').empty();
document.getElementById("green").innerHTML = "&nbsp&nbsp&nbsp0-23.9%";
document.getElementById("yellow").innerHTML = "&nbsp&nbsp&nbsp24-26.9%";
document.getElementById("orange").innerHTML = "&nbsp&nbsp&nbsp27-29.9%";
document.getElementById("red").innerHTML = "&nbsp&nbsp&nbsp30+%";
document.getElementById("header").innerHTML = "Obesity Rates in the USA";

function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    //console.log(d.cerealLink);
    drawGenderLineChart(d.stateName);
    drawPic(d.cerealLink, d.stateName, d.calories, d.Carbo, d.Cups, d.Fat, d.Fibre, d.Potassium, d.Protein, d.Rating, d.Shelf, d.Sodium, d.Sugars,
    d.Vitamins, d.Weight, d.cerealName);
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Good:</td><td>"+ (d.good) +"</td></tr>"+
      "<tr><td>Overweight:</td><td>"+(d.overweight)+"</td></tr>"+
      "<tr><td>Obese:</td><td>"+(d.obese)+"</td></tr>"+
      "</table>";
      
  }


  

var width = 1500;
var height = 500; 
var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);  
      
            

        
// Load in my states data!

d3.csv("stateslived.csv", function(data) {

// Load GeoJSON data and merge with states data
d3.json("us-states.json", function(json) {

// Loop through each state data value in the .csv file
for (var i = 0; i < data.length; i++) {

  // Grab State Name
  var dataState = data[i].state;

  // Grab data value 
  var dataValue = data[i].visited;
  
      var sampleData ={}; /* Sample random data. */ 
  ["AL","AK", "AZ", "AR", "CA", "CO","CT", "DE","DC","FL","GA","HI","ID","IL","IN",
  "IA","KS","KY","LS","ME","MD","MA","MI","MN","MS","MO","MT",
  "NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR",
  "PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
        ]
    .forEach(function(d){ 
    var lilColour = data[i].colour;
    var cerealLink = data[i].cerealLink;
    var calories = data[i].Calories;
    var stateName = data[i].state;
    var cerealName = data[i].favCereal;
    var Carbo = data[i].Carbo;  
    var Cups = data[i].Cups;  
    var Fat = data[i].Fat;
    var Fibre = data[i].Fiber;  
    var Potassium = data[i].Potassium;  
    var Protein = data[i].Protein;
    var Rating = data[i].Rating;
    var Shelf = data[i].Shelf;
    var Sodium = data[i].Sodium;
    var Sugars = data[i].Sugars;
    var Vitamins  = data[i].Vitamins;
    var Weight = data[i].Weight;
    var goodD= data[i].good;
    var ov= data[i].Overweight;
    var ob= data[i].Obese;
      sampleData[d]={good:(goodD),overweight:(ov), obese:(ob), color:(lilColour),cerealLink:(cerealLink), stateName: (stateName),
      calories: (calories), Carbo: (Carbo), Cups: (Cups),Fat: (Fat),Fibre: (Fibre),Potassium: (Potassium),
      Protein: (Protein),Rating: (Rating),Shelf: (Shelf),Sodium: (Sodium), Sugars: (Sugars),Vitamins: (Vitamins),Weight: (Weight),
      cerealName: (cerealName)}; 
      i++;
    });
  
  /* draw states on id #statesvg */ 
  
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  
  //d3.select(self.frameElement).style("height", "600px"); 
  

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
  });

});




}
function exercise(){
  $('#statesvg').empty();
  document.getElementById("green").innerHTML = "&nbsp&nbsp&nbsp80+%";
  document.getElementById("yellow").innerHTML = "&nbsp&nbsp&nbsp75-79.9%";
  document.getElementById("orange").innerHTML = "&nbsp&nbsp&nbsp70-74.9%";
  document.getElementById("red").innerHTML = "&nbsp&nbsp&nbsp0-69.9%";
  document.getElementById("header").innerHTML = "Exercise Rates in the USA";
function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    //console.log(d.cerealLink);
    drawGenderLineChart(d.stateName);
    drawPic(d.cerealLink, d.stateName, d.calories, d.Carbo, d.Cups, d.Fat, d.Fibre, d.Potassium, d.Protein, d.Rating, d.Shelf, d.Sodium, d.Sugars,
    d.Vitamins, d.Weight, d.cerealName);
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Good:</td><td>"+ (d.good) +"</td></tr>"+
      "<tr><td>Overweight:</td><td>"+(d.overweight)+"</td></tr>"+
      "<tr><td>Obese:</td><td>"+(d.obese)+"</td></tr>"+
      "</table>";
      
  }


  

var width = 1500;
var height = 500; 
var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);  
      
            

        
// Load in my states data!

d3.csv("stateslived.csv", function(data) {

// Load GeoJSON data and merge with states data
d3.json("us-states.json", function(json) {

// Loop through each state data value in the .csv file
for (var i = 0; i < data.length; i++) {

  // Grab State Name
  var dataState = data[i].state;

  // Grab data value 
  var dataValue = data[i].visited;
  
      var sampleData ={}; /* Sample random data. */ 
  ["AL","AK", "AZ", "AR", "CA", "CO","CT", "DE","DC","FL","GA","HI","ID","IL","IN",
  "IA","KS","KY","LS","ME","MD","MA","MI","MN","MS","MO","MT",
  "NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR",
  "PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
        ]
    .forEach(function(d){ 
    var lilColour = data[i].exColour;
    var cerealLink = data[i].cerealLink;
    var calories = data[i].Calories;
    var stateName = data[i].state;
    var cerealName = data[i].favCereal;
    var Carbo = data[i].Carbo;  
    var Cups = data[i].Cups;  
    var Fat = data[i].Fat;
    var Fibre = data[i].Fiber;  
    var Potassium = data[i].Potassium;  
    var Protein = data[i].Protein;
    var Rating = data[i].Rating;
    var Shelf = data[i].Shelf;
    var Sodium = data[i].Sodium;
    var Sugars = data[i].Sugars;
    var Vitamins  = data[i].Vitamins;
    var Weight = data[i].Weight;
    var goodD= data[i].good;
    var ov= data[i].Overweight;
    var ob= data[i].Obese;
      sampleData[d]={good:(goodD),overweight:(ov), obese:(ob), color:(lilColour),cerealLink:(cerealLink), stateName: (stateName),
      calories: (calories), Carbo: (Carbo), Cups: (Cups),Fat: (Fat),Fibre: (Fibre),Potassium: (Potassium),
      Protein: (Protein),Rating: (Rating),Shelf: (Shelf),Sodium: (Sodium), Sugars: (Sugars),Vitamins: (Vitamins),Weight: (Weight),
      cerealName: (cerealName)}; 
      i++;
    });
  
  /* draw states on id #statesvg */ 
  
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 
  

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
  });

});




}
function poverty(){
  $('#statesvg').empty();
  document.getElementById("green").innerHTML = "&nbsp&nbsp&nbsp0-13.9%";
  document.getElementById("yellow").innerHTML = "&nbsp&nbsp&nbsp14-16.9%";
  document.getElementById("orange").innerHTML = "&nbsp&nbsp&nbsp17-19.9%";
  document.getElementById("red").innerHTML = "&nbsp&nbsp&nbsp20+%";
  document.getElementById("header").innerHTML = "Poverty Rates in the USA";
function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    //console.log(d.cerealLink);
    drawGenderLineChart(d.stateName);
    drawPic(d.cerealLink, d.stateName, d.calories, d.Carbo, d.Cups, d.Fat, d.Fibre, d.Potassium, d.Protein, d.Rating, d.Shelf, d.Sodium, d.Sugars,
    d.Vitamins, d.Weight, d.cerealName);
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Good:</td><td>"+ (d.good) +"</td></tr>"+
      "<tr><td>Overweight:</td><td>"+(d.overweight)+"</td></tr>"+
      "<tr><td>Obese:</td><td>"+(d.obese)+"</td></tr>"+
      "</table>";
      
  }


  

var width = 1500;
var height = 500; 
var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);  
      
            

        
// Load in my states data!

d3.csv("stateslived.csv", function(data) {

// Load GeoJSON data and merge with states data
d3.json("us-states.json", function(json) {

// Loop through each state data value in the .csv file
for (var i = 0; i < data.length; i++) {

  // Grab State Name
  var dataState = data[i].state;

  // Grab data value 
  var dataValue = data[i].visited;
  
      var sampleData ={}; /* Sample random data. */ 
  ["AL","AK", "AZ", "AR", "CA", "CO","CT", "DE","DC","FL","GA","HI","ID","IL","IN",
  "IA","KS","KY","LS","ME","MD","MA","MI","MN","MS","MO","MT",
  "NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR",
  "PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
        ]
    .forEach(function(d){ 
    var lilColour = data[i].povColour;
    var cerealLink = data[i].cerealLink;
    var calories = data[i].Calories;
    var stateName = data[i].state;
    var cerealName = data[i].favCereal;
    var Carbo = data[i].Carbo;  
    var Cups = data[i].Cups;  
    var Fat = data[i].Fat;
    var Fibre = data[i].Fiber;  
    var Potassium = data[i].Potassium;  
    var Protein = data[i].Protein;
    var Rating = data[i].Rating;
    var Shelf = data[i].Shelf;
    var Sodium = data[i].Sodium;
    var Sugars = data[i].Sugars;
    var Vitamins  = data[i].Vitamins;
    var Weight = data[i].Weight;
    var goodD= data[i].good;
    var ov= data[i].Overweight;
    var ob= data[i].Obese;
      sampleData[d]={good:(goodD),overweight:(ov), obese:(ob), color:(lilColour),cerealLink:(cerealLink), stateName: (stateName),
      calories: (calories), Carbo: (Carbo), Cups: (Cups),Fat: (Fat),Fibre: (Fibre),Potassium: (Potassium),
      Protein: (Protein),Rating: (Rating),Shelf: (Shelf),Sodium: (Sodium), Sugars: (Sugars),Vitamins: (Vitamins),Weight: (Weight),
      cerealName: (cerealName)}; 
      i++;
    });
  
  /* draw states on id #statesvg */ 
  
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 
  

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
  });

});




}
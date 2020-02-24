let userSelected = "Total_Forces",
  resizeListenerSet;
function D3LineChart(lineChartData, playerColors) {
  function drawChart() {
    // set the dimensions and margins of the graph
    let wW = window.innerWidth,
      wH = window.innerHeight,
      portrait = wW < 500;
    var margin = {
        top: portrait ? wH / 1.8 : 90,
        right: portrait ? 50 : 230,
        bottom: 50,
        left: 50
      },
      width = wW * 0.9 - margin.left - margin.right,
      height = wH * 0.8 - margin.top - margin.bottom;
    let data = lineChartData[userSelected];
    // append the svg object to the body of the page
    let gameChart = d3.select("#gameChart");

    gameChart.select("svg").remove();

    let svg = gameChart
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .style("font-size", "13px");

    // Parse the Data
    // d3.csv(
    //   "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv"
    // ).then(data => {
    //////////
    // GENERAL //
    //////////
    // List of groups = header of the csv files

    var keys = Object.keys(data[0]).filter(
      x => x !== "round" && x !== "currentPlayersTurn"
    );
    // console.log(data, keys);
    // color palette
    // var color = d3
    //   .scaleOrdinal()
    //   .domain(keys)
    //   .range(function(d) {
    //     console.log(d, playerColors);
    //   });
    //stack the data?
    var stackedData = d3.stack().keys(keys)(data);

    let highestTotal = data
      .map(x => {
        let total = 0;
        keys.forEach(k => (total += x[k]));
        return total;
      })
      .sort((a, b) => b - a)[0];
    //////////
    // AXIS //
    //////////
    // Add X axis
    var x = d3
      .scaleLinear()
      .domain(
        d3.extent(data, function(d) {
          return d.round;
        })
      )
      .range([0, width]);
    var xAxis = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5));
    // Add X axis label:
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + 40)
      .text("Round");
    // Add Y axis label:
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", -margin.top + 40)
      .text("Game Chart")
      .style("font-size", "16px");

    ["Total_Forces", "Territory"].forEach((text, i) => {
      let g = svg.append("g");
      let w = width / 2;
      let rMargin = 0.3;
      let rWidth = w * (rMargin * 2);

      g.append("text")
        .attr("text-anchor", "middle")
        .attr("x", w * i + w * rMargin + rWidth / 2)
        .attr("y", -margin.top + 75)
        .text(text.replace("_", " "))
        .style("color", userSelected === text ? "red" : "gray")
        .style("font-weight", userSelected === text ? "bold" : "");

      g.append("rect")
        .attr("width", rWidth)
        .attr("height", 25)
        .attr("x", w * i + w * rMargin)
        .attr("y", -margin.top + 60)
        .attr("rx", 5)
        .attr("fill", "white")
        .attr("fill-opacity", 0.1)
        .style("stroke", userSelected === text ? "red" : "gray")
        .style("stroke-width", "2")
        .style("cursor", "pointer")
        .on("click", function() {
          userSelected = text;
          drawChart();
        });
    });
    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([0, highestTotal])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y).ticks(5));
    //////////
    // BRUSHING AND CHART //
    //////////
    // Add a clipPath: everything out of this area won't be drawn.
    var clip = svg
      .append("defs")
      .append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0);
    // Add brushing
    var brush = d3
      .brushX() // Add the brush feature using the d3.brush function
      .extent([
        [0, 0],
        [width, height]
      ]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
      .on("end", updateChart); // Each time the brush selection changes, trigger the 'updateChart' function
    // Create the scatter variable: where both the circles and the brush take place
    var areaChart = svg.append("g").attr("clip-path", "url(#clip)");
    // Area generator
    var area = d3
      .area()
      .x(function(d) {
        return x(d.data.round);
      })
      .y0(function(d) {
        return y(d[0]);
      })
      .y1(function(d) {
        return y(d[1]);
      });
    // Show the areas
    areaChart
      .selectAll("mylayers")
      .data(stackedData)
      .enter()
      .append("path")
      .attr("class", function(d) {
        return "myArea " + d.key.replace(" ", "_");
      })
      .style("fill", function(d) {
        return playerColors[d.key];
      })
      .attr("d", area);
    // Add the brushing
    areaChart
      .append("g")
      .attr("class", "brush")
      .call(brush);
    var idleTimeout;
    function idled() {
      idleTimeout = null;
    }
    // A function that update the chart for given boundaries
    function updateChart() {
      extent = d3.event.selection;
      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if (!extent) {
        if (!idleTimeout) return (idleTimeout = setTimeout(idled, 350)); // This allows to wait a little bit
        x.domain(
          d3.extent(data, function(d) {
            return d.round;
          })
        );
      } else {
        x.domain([x.invert(extent[0]), x.invert(extent[1])]);
        areaChart.select(".brush").call(brush.move, null); // This remove the grey brush area as soon as the selection has been done
      }
      // Update axis and area position
      xAxis
        .transition()
        .duration(1000)
        .call(d3.axisBottom(x).ticks(5));
      areaChart
        .selectAll("path")
        .transition()
        .duration(1000)
        .attr("d", area);
    }
    //////////
    // HIGHLIGHT GROUP //
    //////////
    // What to do when one group is hovered
    var highlight = function(d) {
      console.log(d);
      // reduce opacity of all groups
      d3.selectAll(".myArea").style("opacity", 0.1);
      // expect the one that is hovered
      d3.select("." + d.replace(" ", "_")).style("opacity", 1);
    };
    // And when it is not hovered anymore
    var noHighlight = function(d) {
      d3.selectAll(".myArea").style("opacity", 1);
    };
    //////////
    // LEGEND //
    //////////
    // Add one dot in the legend for each name.
    var size = 20;
    let myrectX = width + size * 0.2;
    let mylabelsX = width + size * 0.2 + size * 1.2;
    if (portrait) {
      myrectX = size * 0.2;
      mylabelsX = size * 0.2 + size * 1.2;
    }
    svg
      .selectAll("myrect")
      .data(keys)
      .enter()
      .append("rect")
      .attr("x", myrectX)
      .attr("y", function(d, i) {
        let y = 10 + i * (size + 5);
        if (portrait) y -= margin.top - 90;
        return y;
      }) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("width", size)
      .attr("height", size)
      .style("fill", function(d) {
        return playerColors[d];
      })
      .on("mouseover", highlight)
      .on("mouseleave", noHighlight);
    // Add one dot in the legend for each name.
    svg
      .selectAll("mylabels")
      .data(keys)
      .enter()
      .append("text")
      .attr("x", mylabelsX)
      .attr("y", function(d, i) {
        let y = 10 + i * (size + 5) + size / 2;
        if (portrait) y -= margin.top - 90;
        return y;
      }) // 100 is where the first dot appears. 25 is the distance between dots
      .style("fill", function(d) {
        return playerColors[d];
      })
      .text(function(d) {
        return d;
      })
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")
      .on("mouseover", highlight)
      .on("mouseleave", noHighlight);
    // });
  }
  drawChart();
  if (!resizeListenerSet) window.addEventListener("resize", drawChart);
  resizeListenerSet = true;
}

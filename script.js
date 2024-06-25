// U09226075
// Set up script.js.
//Create function.
    function main() {
        d3.csv('../data/mock_stock_data.csv').then(
            function (d) {
                for (let index = 0; index < d.length; index++) {
                    const element = d[index];
                    var list = document.getElementById("list");
                    var item = document.createElement("li");
                    var text = `Date: ${element.Date} ~ Stock: ${element.Stock} ~ Price: $${element.Price}`;
                    // Add filter functionality.
                    var stock = document.getElementById("stockFilter").value;
                    var date = document.getElementById("dateFilter").value;
                    if (stock=="1" && date=="1") {
                        item.appendChild(document.createTextNode(text));
                    } else if (stock==element.Stock && date=="1") {
                        item.appendChild(document.createTextNode(text));
                    } else if (stock=="1" && date==element.Date) {
                        item.appendChild(document.createTextNode(text));
                    } else if (stock==element.Stock && date==element.Date) {
                        item.appendChild(document.createTextNode(text));
                    } else {}
                    list.appendChild(item);
                }
            }
        )}

    // Update when filters are applied.
    function update() {
        document.getElementById("list").innerHTML="";
        main();
    }

// Create function for visualization.
function visualization() {
    var svg = d3.select("svg");
    var margin = 200;
    var width = svg.attr("width") - margin;
    var height = svg.attr("height") - margin;

    var xScale = d3.scaleBand().range([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g").attr("transform", "translate("+100+","+100+")");

    d3.csv('../data/mock_stock_data.csv').then(function(data){

        xScale.domain(data.map(function(d){ return d.Date;}));
        yScale.domain([0, d3.max(data, function(d){return d.Price;})]);

        g.append("g").attr("transform", "translate(0,"+height+")")
            .call(d3.axisBottom(xScale))

        g.append("g").call(d3.axisLeft(yScale).tickFormat(function(d){
            return "$" + d;}).ticks(20))

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d){return xScale(d.Date);})
            .attr("y", function(d){return yScale(d.Price);})
            .attr("width", xScale.bandwidth())
            .attr("height", function(d){return (height - yScale(d.Price));});
    });


};

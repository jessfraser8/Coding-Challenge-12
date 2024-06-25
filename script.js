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
                    var text = `Date: ${element.Date} ~ Stock: ${element.Stock} ~ Price: ${element.Price}`;
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
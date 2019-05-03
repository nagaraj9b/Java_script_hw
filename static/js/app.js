// from data.js
var tableData = data;

var tbody = d3.select("tbody");



// YOUR CODE HERE!


data.forEach((ufofinder) => {
    var row = tbody.append("tr");
    Object.entries(ufofinder).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

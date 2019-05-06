// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// To populate the data on html

tableData.forEach(ufofinder => {
    var row = tbody.append("tr");
    Object.entries(ufofinder).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


//To filter by date 
var submit = d3.select("#filter-btn");
submit.on("click", function() {

    // Prevent the page from refreshing
d3.event.preventDefault(); 
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetimes");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
// Set the span tag in the h1 element to the text
// that was entered in the form
var filteredData = tableData.filter(datefil => datefil.datetime === inputValue);
console.log(filteredData);

document.getElementById("datatable").innerHTML="";
// if (tbody.empty()){
//     tbody.html('');
// }
filteredData.forEach(ufofinder => {
    var row = tbody.append("tr");
    Object.entries(ufofinder).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



});


// //To filter by city 
// var submit = d3.select("#filter-btn");
// submit.on("click", function() {

//     // Prevent the page from refreshing
// d3.event.preventDefault(); 
// // Select the input element and get the raw HTML node
// var inputElement = d3.select("#city");
// // Get the value property of the input element
// var inputValue = inputElement.property("value");
// console.log(inputValue);
// // Set the span tag in the h1 element to the text
// // that was entered in the form
// var filtered2Data = tableData.filter(datefil => datefil.city === inputValue);
// console.log(filtered2Data);

// document.getElementById("datatable").innerHTML="";
// // if (tbody.empty()){
// //     tbody.html('');
// // }
// filtered2Data.forEach(ufofinder => {
//     var row = tbody.append("tr");
//     Object.entries(ufofinder).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });



// });




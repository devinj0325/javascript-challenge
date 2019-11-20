// from data.js
var tableData = data;

const tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    var row = tbody.append("tr");

    
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
// This function is triggered when the button is clicked
function handleClick() {

  var date = d3.select("#datetime").property("value");
  let filterData = tableData;

  if (date) {
    filterData = filterData.filter(row => row.datetime === date);
  }

  buildTable(filterData);
}
// button ud="filter-btn"
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);


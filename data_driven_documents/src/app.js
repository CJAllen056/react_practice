// d3.json loads the data. Can also use .csv or .tsv if data is in that format

d3.json('data/data.json', function (data) {

  // d3.extent returns the range of data for a given value (in this case age) d3.max and d3.min can also be used

  var extent = d3.extent(data, function (d) {
    return d.age;
  });
  console.log(extent);

  // The value found above is used to map the ages within the data to a linear scale

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);
    
  console.log(scale(37));

  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages.values());
});

var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "orange", "yellow", "green"]);

// scaleQuantize returns output as value from set of inputs (in this case colours) These outputs are evenly split across the range

console.log(quantizeScale(22));
console.log(quantizeScale(49));
console.log(quantizeScale(50));
console.log(quantizeScale(88));
console.log(quantizeScale(99));

console.log(quantizeScale.invertExtent("yellow"));

// returns the range that yellow represents, in this case 50-75

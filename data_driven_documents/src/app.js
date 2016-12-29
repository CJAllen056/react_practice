var ordinalScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(["red", "yellow", "green"]);

console.log(ordinalScale("poor"));
console.log(ordinalScale("great"));
console.log(ordinalScale("good"));

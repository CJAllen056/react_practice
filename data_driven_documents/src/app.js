var linearScale = d3.scaleLinear()
  .domain([0, 100]) // takes range of possible results as input (e.g test score of one to 100)
  .range([0, 600]) // maps input to range of possible outputs (e.g width in pixels up to 600)
  .clamp(true); // prevents inputs outside range from returning output outside range

console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(105));  

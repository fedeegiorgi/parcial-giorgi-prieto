d3.dsv(";", 'astronautas.csv', d3.autoType).then(data => {
  console.log(data);
  
  d3.select('#chart').append(() => chart);
});
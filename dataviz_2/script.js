const mapaFetch1 = d3.json('dataviz_2/barrios1.geojson')
const dataFetchdv2 = d3.dsv(';', 'dataviz_2/147_ruidos_molestos.csv', d3.autoType)

Promise.all([mapaFetch1, dataFetchdv2]).then(([barrios, data]) => {

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio)
  console.log('reclamosPorBarrio', reclamosPorBarrio)

  barrios.features.forEach(d => {
      let nombreBarrio = d.properties.BARRIO
      let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
      d.properties.DENUNCIAS = cantReclamos

      console.log(nombreBarrio + ': ' + cantReclamos)
  })

const myColorScale = d3.scaleLinear()
  .domain([0, 800]) // Rango de valores de la variable
  .range(['#F0D5D0', '#BF2000']) // Colores mínimo y máximo de la escala

const myColorFunction = d => myColorScale(d.properties.DENUNCIAS)
  let chartMap1 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'oranges',
    },
    marks: [
      Plot.density(
        data.filter(d=>(d.domicilio_barrio=="PALERMO")), 
        { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
    height: 400,
    width: 350,
    margin: 50,
  })

  d3.select('#chartdv21').append(() => chartMap1)

})



// 2
const mapaFetch2 = d3.json('dataviz_2/barrios2.geojson')

Promise.all([mapaFetch2, dataFetchdv2]).then(([barrios, data]) => {

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio)
  console.log('reclamosPorBarrio', reclamosPorBarrio)

  barrios.features.forEach(d => {
      let nombreBarrio = d.properties.BARRIO
      let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
      d.properties.DENUNCIAS = cantReclamos

      console.log(nombreBarrio + ': ' + cantReclamos)
  })

  let chartMap2 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'oranges',
    },
    marks: [
      Plot.density(
        data.filter(d=>(d.domicilio_barrio=="CABALLITO")), 
        { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
    height: 400,
    width: 350,
    margin: 50,
  })

  d3.select('#chartdv22').append(() => chartMap2)

})



// 3
const mapaFetch3 = d3.json('dataviz_2/barrios3.geojson')

Promise.all([mapaFetch3, dataFetchdv2]).then(([barrios, data]) => {

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio)
  console.log('reclamosPorBarrio', reclamosPorBarrio)

  barrios.features.forEach(d => {
      let nombreBarrio = d.properties.BARRIO
      let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
      d.properties.DENUNCIAS = cantReclamos

      console.log(nombreBarrio + ': ' + cantReclamos)
  })

  let chartMap3 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'oranges',
    },
    marks: [
      Plot.density(
        data.filter(d=>(d.domicilio_barrio=="RECOLETA")), 
        { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
    height: 400,
    width: 350,
    margin: 50,
  })

  d3.select('#chartdv23').append(() => chartMap3)

})
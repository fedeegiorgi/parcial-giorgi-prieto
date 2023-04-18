const mapaFetch1 = d3.json('barrios1.geojson')
const dataFetch = d3.dsv(';', '147_ruidos_molestos.csv', d3.autoType)

Promise.all([mapaFetch1, dataFetch]).then(([barrios, data]) => {

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio)
  console.log('reclamosPorBarrio', reclamosPorBarrio)

  barrios.features.forEach(d => {
      let nombreBarrio = d.properties.BARRIO
      let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
      d.properties.DENUNCIAS = cantReclamos

      console.log(nombreBarrio + ': ' + cantReclamos)
  })

  let chartMap1 = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'ylorbr',
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
  })

  d3.select('#chart-1').append(() => chartMap1)

})



// 2
const mapaFetch2 = d3.json('barrios2.geojson')

Promise.all([mapaFetch2, dataFetch]).then(([barrios, data]) => {

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
      scheme: 'ylorbr',
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
  })

  d3.select('#chart-2').append(() => chartMap2)

})



// 3
const mapaFetch3 = d3.json('barrios3.geojson')

Promise.all([mapaFetch3, dataFetch]).then(([barrios, data]) => {

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
      scheme: 'ylorbr',
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
  })

  d3.select('#chart-3').append(() => chartMap3)

})
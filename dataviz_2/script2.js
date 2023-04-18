const mapaFetch = d3.json('barrios2.geojson')
const dataFetch = d3.dsv(';', '147_ruidos_molestos.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {

  const reclamosPorBarrio = d3.group(data, d => d.domicilio_barrio)
  console.log('reclamosPorBarrio', reclamosPorBarrio)

  barrios.features.forEach(d => {
      let nombreBarrio = d.properties.BARRIO
      let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
      d.properties.DENUNCIAS = cantReclamos

      console.log(nombreBarrio + ': ' + cantReclamos)
  })

  let chartMap = Plot.plot({
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

  d3.select('#chart-2').append(() => chartMap)

})
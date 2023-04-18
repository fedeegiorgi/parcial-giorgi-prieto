const mapaFetch = d3.json('barrios.geojson')
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
    
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },

    color: {
      
      type: 'quantize', 
      n: 10,
      scheme: 'ylorbr',
      label: 'Cantidad de denuncias',
      legend: true,
    },

    marks: [
      Plot.geo(barrios, {
        fill: d => d.properties.DENUNCIAS,
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
      Plot.text(
        barrios.features,
        Plot.centroid({
          text: (d) => d.properties.BARRIO,
          fill: "currentColor",
          stroke: "white",
          textAnchor: "center",
          dx: 4,
          filter: (d) => d.properties.DENUNCIAS > 300
        })
      )
    ],

  })

  d3.select('#chart').append(() => chartMap)

})
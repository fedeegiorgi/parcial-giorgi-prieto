const mapaFetch = d3.json('dataviz_1/barrios.geojson')
const dataFetch = d3.dsv(';', 'dataviz_1/147_ruidos_molestos.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {

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

let chartMap = Plot.plot({
  projection: {
    type: 'mercator',
    domain: barrios, // Objeto GeoJson a encuadrar
  },
  color: {
    type: 'linear',
    //n: 10,
    colors: myColorFunction, // Función que define la escala de colores
    label: 'Cantidad de denuncias',
    scheme: "reds",
    legend: true,
    domain: [0, 800],
  },
  marks: [
    Plot.geo(barrios, {
      fill: myColorFunction, // Función que define la escala de colores
      stroke: 'gray',
      title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
    }),
    Plot.text(
      barrios.features,
      Plot.centroid({
        text: (d) => d.properties.BARRIO,
        fill: "black",
        stroke: "white",
        textAnchor: "center",
        dx: 4,
        filter: (d) => d.properties.DENUNCIAS > 300
      })
    )
  ],
})


d3.select('#chartdv1').append(() => chartMap)
})



/*
  const myColorScale = d3.scaleLinear()
      .domain([0, 100])
      .range(['#f7fbff', '#08306b']) // Colores mínimo y máximo de la escala

  let chartMap = Plot.plot({

    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },

    color: {
      
      type: 'quantize', 
      n: 10,
      scheme: myColorScale,
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

})*/
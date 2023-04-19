d3.dsv(";", 'dataviz_3/147_ruidos_molestos.csv', d3.autoType).then(data => {
  const reclamosPorBarrio = d3.rollup(data, v => v.length, d => d.domicilio_barrio)
  const top3 = Array.from(reclamosPorBarrio, ([key, value]) => ({barrio: key, reclamos: value}))
    .sort((a, b) => d3.descending(a.reclamos, b.reclamos))
    .slice(0, 3)
  
  top3.forEach((d, i) => {
    const dataFiltered = data.filter(e => e.domicilio_barrio === d.barrio)
    const timeFormat = d3.timeFormat('%H')
    const timeParse = d3.timeParse('%H:%M:%S')
    const reclamosPorHora = d3.rollup(
      dataFiltered,
      v => v.length,
      d => timeFormat(timeParse(d.hora_ingreso))
    );

    let chart = Plot.plot({
      marks: [
        Plot.barY(Array.from(reclamosPorHora, ([key, value]) => ({hora: key, reclamos: value})), {
          x: 'hora',
          y: 'reclamos',
          fill: '#BF2000',
        }),
        Plot.text(
          Array.from(reclamosPorHora, ([key, value]) => ({hora: key, reclamos: value})),
          {
            x: d => d.hora,
            y: d => d.reclamos,
            text: d => d.reclamos,
            dy: -10,
            fill: 'black',
            fontSize: 14,
            fontWeight: 'bold',
            align: 'center',
          }
        )
      ],
      x: {
        label: null,
        domain: ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "00", "01", "02", "03", "04", "05", "06"],
      },
      y: {
        label: `${d.barrio}`,
        labelAlign: 'center',
        ticks: 0,
      },
      height: 200,
      width: 600,
      margin: 30,
    })

    d3.select(`#chart-${i}`).append(() => chart)
  })
})
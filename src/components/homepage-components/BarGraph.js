import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  XAxis,
  YAxis
} from 'react-vis'

const BarGraph = (props) => {
  const formattedGraphData = props.data.map(entry => ({ x: entry.date, y: entry.sleep_hours }))

  return (
    <XYPlot
      xType="ordinal"
      width={1200}
      height={450}
      >
      <XAxis />
      <YAxis title='Hours of Sleep' />
      <HorizontalGridLines />
      <VerticalGridLines />
      <VerticalBarSeries
        color={'#626cf8'}
        barWidth={.75}
        data={formattedGraphData}
      />
    </XYPlot>
  )
}

export default BarGraph
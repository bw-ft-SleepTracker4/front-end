import React from 'react'
import graph from '../../mock_data/graph.js'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  XAxis,
  YAxis
} from 'react-vis'

// TODO: bring into render function when backend is up
const formattedGraphData = graph.map(entry => ({ x: entry.date, y: entry.sleep_hours }))

export default class BarGraph extends React.Component {
  render() {
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
    );
  }
}
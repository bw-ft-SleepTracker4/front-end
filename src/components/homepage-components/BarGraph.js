import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  XAxis,
  YAxis
} from 'react-vis'

const mockData = [
  {x: '04/29/20', y: 10},
  {x: '04/30/20', y: 6},
  {x: '05/01/20', y: 8},
  {x: '05/02/20', y: 7},
  {x: '05/03/20', y: 9},
  {x: '05/04/20', y: 9},
  {x: '05/05/20', y: 6},
  {x: '05/06/20', y: 5},
  {x: '05/07/20', y: 4},
  {x: '05/08/20', y: 6}
]

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
          barWidth='.75'
          data={mockData}
        />
      </XYPlot>
    );
  }
}
import React from 'react'
import {  
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries
} from 'react-vis'

const BarGraph = () => {
    const BarSeries = VerticalBarSeries

    const myDATA = [
      {id: '123', y: 400, x: 1504121437},
      {id: '223', y: 350, x: 1504121156},
      {id: '323', y: 310, x: 1504120874},
      {id: '423', y: 260, x: 1504120590},
      {id: '523', y: 210, x: 1504120306},
      {id: '623', y: 160, x: 1504120024}
    ];

    const yDomain = myDATA.reduce(
      (res, row) => {
        return {
          max: Math.max(res.max, row.y),
          min: Math.min(res.min, row.y)
        };
      },
      {max: -Infinity, min: Infinity}
    );
    
    return (
      <div>
        <XYPlot
          margin={{left: 75}}
          xType="time"
          width={800}
          height={300}
          yDomain={[yDomain.min, yDomain.max]}
        >
          <BarSeries className="vertical-bar-series-example" data={myDATA} onValueMouseOver={(datapoint, { event }) => { }} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    )
}

export default BarGraph
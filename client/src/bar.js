import React, { Component } from 'react';
import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientPurpleOrange } from '@vx/gradient';
import { letterFrequency } from '@vx/mock-data';
import { scaleBand, scaleLinear } from '@vx/scale';

const data = letterFrequency;

console.log(data);

// Define the graph dimensions and margins
const width = 400;
const height = 250;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.letter;
const y = d => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  rangeRound: [0, xMax],
  domain: data.map(x),
  padding: 0.4,
});
const yScale = scaleLinear({
  rangeRound: [yMax, 0],
  domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

class BarChart extends Component {


render() {
  return (
    <svg width={width} height={height}>
    <GradientPurpleOrange id="PurpleOrange" vertical={false} />
      <rect width={width} height={height} fill={"url(#transperant)"} rx={14} />
      <Group top={40}>
        {data.map((d, i) => {
          const letter = x(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yScale(y(d));
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={"#815aff"}
              onClick={event => {
                alert(`clicked: ${JSON.stringify(Object.values(d))}`);
              }}
            />
          );
        })}
      </Group>
    </svg>
  );
  }
}

export default BarChart;

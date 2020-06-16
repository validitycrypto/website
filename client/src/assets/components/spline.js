import React, { Component, Fragment } from 'react'
import Chart from 'react-apexcharts'

import { PURPLE_PRIMARY, GREEN_PRIMARY } from '../constants/palette';
import { UNISWAP_LIQUIDITY } from '../constants/calls';
import { UNISWAP_GRAPH } from '../constants/routes';

export default class Spline extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: <Fragment/>,
        options: {
          colors: [PURPLE_PRIMARY],
          chart: {
            height: 200,
            type: 'area',
            toolbar: {
              show: false
            },
          },
          grid: {
            show: false
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },

          tooltip: {
            x: {
              format: 'dd/MM/yy'
            },
          },
        },
      };
    }

    componentDidMount = async() => {
      await this.getMetadata();
    }

    getMetadata = async() => {
      await fetch(UNISWAP_GRAPH, {
        body: JSON.stringify({ query: UNISWAP_LIQUIDITY }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      }).then((response) => {
        return response.json();
      }).then(output => {
        const { exchangeDayDatas } = output.data;
        let timeArray = [], dataArray = [];

        exchangeDayDatas.forEach(meta => {
          const { ethBalance, date } = meta;

          var timestamp = new Date(date * 1000);
          var month = timestamp.getUTCMonth() + 1;
          var day = timestamp.getUTCDate();
          var year = timestamp.getUTCFullYear();

          dataArray.push(parseFloat(ethBalance).toFixed(2))
          timeArray.push(`${year}-${month}-${day}`);
        });

        this.setState({
          series: [{
            data: dataArray,
            name: 'ETH'
          }],
          options: {
            ...this.state.options,
            xaxis: {
              categories: timeArray,
              type: 'datetime'
            }
          }
        }, this.renderChart)
      });
    }

    renderChart = () => {
      this.setState({
        component: <Chart options={this.state.options} series={this.state.series} type="area" height={200} />
      })
    }

      render() {
        return (
          <div className="chartWrapper">
            {this.state.component}
          </div>
        );
      }
    }

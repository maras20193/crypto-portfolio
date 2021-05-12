import React from 'react'

import ReactApexChart from 'react-apexcharts'



export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: props.data
        }],
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: '365D Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: false
            }
          }
        },
      
      
      };
    }
    
  

    render() {
      return (
  <div id="chart">
    <ReactApexChart 
    options={this.state.options} 
    series={this.state.series} 
    type="candlestick" 
    height={450} />
</div>)
    }
}
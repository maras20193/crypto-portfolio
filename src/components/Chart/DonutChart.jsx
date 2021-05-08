import { BottomNavigation } from '@material-ui/core';
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class DonutChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
        options: {
            legend: {
                show: false,
            },
            plotOptions: {
                pie: {
                    size: 500,
                    donut: {
                        size: '45%',
                    }
                }
            }
        },
        series: [134, 55, 41, 17, 15],
        labels: ['BTC', 'ETH', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart 
        options={this.state.options} 
        series={this.state.series}
        labels={this.state.labels} 
        type="donut" 
        // width="280" 
        />
      </div>
    );
  }
}

export default DonutChart;
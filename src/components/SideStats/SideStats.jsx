import React from 'react'

import './SideStats.scss'

import DonutChart from '../Chart/DonutChart'

const SideStats = () => {
  return ( 
    <div className="sideStats">
      <div className="sideStats__info">
        <p className="sideStats__title">Overall profit</p>
        <p className="sideStats__desc">20000$</p>
      </div>
      <div className="sideStats__info">
        <p className="sideStats__title">Overall profit [%]</p>
        <p className="sideStats__desc">246%</p>
      </div>
      <DonutChart/>
    </div>
   );
}
 
export default SideStats;
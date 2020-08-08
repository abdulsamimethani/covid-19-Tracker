import React from 'react';
import {Doughnut} from 'react-chartjs-2';



export default function Chart (props) {
  const data = {
    labels: [
      'Total Cases',
      'Total Deaths',
      'Total Recovered ',
      'Total Serious Cases',
      'Total Unresolved',
      'Total Active Cases',
    ],
    datasets: [{
      data: [props.globalData.total_cases,
             props.globalData.total_deaths,
             props.globalData.total_recovered,
             props.globalData.total_serious_cases,
             props.globalData.total_unresolved,
             props.globalData.total_active_cases,],
      backgroundColor: [
      'Orange',
      'Red',
      'Pink',
      'Purple',
      'Grey',
      'Black'
      ],
      hoverColor: [
    'White'
      ]
    }]
  };
  return (
    <div>
      <h2>Doughnut Visual</h2>
      <Doughnut data={data}/>
    </div>
  )
}


 
 
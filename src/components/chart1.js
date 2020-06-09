import React, { useEffect } from 'react';
import Chart from 'chart.js';


const options = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    yAxes: [{
      id: 'left-y-axis',
      type: 'linear',
      position: 'left',
      ticks: {
        fontFamily: 'Montserrat',
        fontColor: '#849fb4',
        fontSize: 12,
        min: 0,
        max: 12,
        stepSize: 3,
      },
      gridLines: {
        display: false,
      },
    }],
    xAxes: [{
      fontFamily: 'Montserrat',
      id: 'left-x-axis',
      ticks: {
        fontFamily: 'Montserrat',
        fontColor: '#849fb4',
      },
      gridLines: {
        display: false,
      },
    }],
  },
};

const Chart1 = () => {
  useEffect(() => {
    const ctx = document.getElementById('individuals').getContext('2d');
    const gradient = ctx.createLinearGradient(50, 0, 30, 200);
    gradient.addColorStop(0, 'rgb(78, 255, 207)');
    gradient.addColorStop(1, 'rgb(8, 164, 188)');
    gradient.addColorStop(0, 'rgb(78, 255, 207)');

    const data = {
      labels: ['', "JUN'19", "JUl'19", "AUG'19", "SEP'19", "OCT'19", "NOV'19", "DEC'19", ''],
      datasets: [{
        data: [0, 9, 3, 5, 2, 3, 2, 9, 7],
        borderColor: '#3e95cd',
        borderWidth: 0,
        backgroundColor: gradient,
        fill: true,
      }],
    };

    const myChart = new Chart(ctx, {
      type: 'line',
      data,
      options,
    });
    return () => myChart.destroy();
  }, []);
  return (
    <section className="px-4 md:px-10 xl:px-0 wow fadeInUp">
      <div className="w-full py-3 pl-3 mt-0 xl:mt-10 nav-background-color rounded-lg">
        <h4 className="secondary-text-color text-center font-semibold text-lg pb-8 pt-4 px-1 tracking-wider">
          Individuals
        </h4>
        <canvas id="individuals" height="100px" className="m-0 p-0"><p>Unable to display graph</p></canvas>
      </div>
    </section>
  );
};

export default Chart1;

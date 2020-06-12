import React, { useEffect } from 'react';
import Chart from 'chart.js';


const TotalSignUps = () => {
  useEffect(() => {
    const ctx = document.getElementById('totalSignUps').getContext('2d');
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Companies', 'Individual'],
        datasets: [
          {
            label: 'Total Signups',
            backgroundColor: ['#ff56ee', '#1bfbe4'],
            data: [364, 284],
          },
        ],
      },
      options: {
        cutoutPercentage: 85,
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        tooltips: { enabled: false },
        hover: { mode: null },
        title: {
          display: false,
          text: '',
        },
        legend: {
          display: false,
        },
      },
    });
    return () => myChart.destroy();
  }, []);
  return (
    <article className="nav-background-color grid grid-cols-12 mt-0 xl:mt-6 px-4 md:px-10 xl:px-0 mt-10 xl:mt-0 p-8 mb-4 rounded-lg wow fadeInUp">
      <div className="col-span-7 rounded-lg">
        <div className="relative p-0 secondary-text-color">
          <h4
            className="text-center font-bold text-3xl absolute left-0 right-0 pt-8 sm:pt-12 md:pt-32 lg:pt-40 xl:pt-12"
            style={{ marginLeft: 'auto', marginTop: 'auto', width: '100%' }}
          >
            648
          </h4>
          <canvas id="totalSignUps" width="670" height="400" className="m-0 p-0"><p>Unable to display graph</p></canvas>
        </div>
      </div>
      <div className="col-span-5 w-full py-0 flex flex-col pr-8 secondary-text-color">
        <h4 className="text-center font-medium text-base tracking-wider">
          Total Signups
        </h4>
        <div className="flex justify-between mt-8 font-semibold text-xs">
          <span className="text-xs"> Individuals </span>
          <span style={{ borderRight: '5px solid #1bfbe4' }} className="px-2"> 284 </span>
        </div>
        <div className="flex justify-between mt-3 font-medium text-xs">
          <span className="text-xs"> Companies </span>
          <span style={{ borderRight: '5px solid #ff56ee' }} className="px-2"> 364 </span>
        </div>
      </div>
    </article>
  );
};

export default TotalSignUps;

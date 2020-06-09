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
    <article className="nav-background-color grid grid-cols-12 mt-0 xl:mt-10 px-4 md:px-10 xl:px-0 mt-10 xl:mt-0 p-8 mb-8 rounded-lg wow fadeInUp">
      <div className="col-span-7 rounded-lg">
        <div className="d-inline relative ml-auto p-0 secondary-text-color">
          <h4 className="text-center font-extrabold text-5xl ml-24 mt-20 pl-4 top-0 left-0 tracking-wider absolute">
            648
          </h4>
          <canvas id="totalSignUps" width="700" height="500" className="m-0 p-0"><p>Unable to display graph</p></canvas>
        </div>
      </div>
      <div className="col-span-5 w-full py-3 flex flex-col pr-10 secondary-text-color">
        <h4 className="text-center font-semibold text-lg tracking-wider">
          Total Signups
        </h4>
        <div className="flex justify-between mt-12 font-semibold text-base">
          <span className="text-sm"> Individuals </span>
          <span style={{ borderRight: '5px solid #1bfbe4' }} className="px-2"> 284 </span>
        </div>
        <div className="flex justify-between mt-8 font-medium text-base">
          <span className="text-sm"> Companies </span>
          <span style={{ borderRight: '5px solid #ff56ee' }} className="px-2"> 364 </span>
        </div>
      </div>
    </article>
  );
};

export default TotalSignUps;

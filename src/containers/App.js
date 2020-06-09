import React from 'react';
import Navbar from '../components/navbar';
import Navs from '../components/navs';
import Tabs from '../components/tabs';
import Icons from '../components/icons';
import Chart1 from '../components/chart1';
import Chart2 from '../components/chart2';
import TotalSignUps from '../components/totalSignUps';
import Gender from '../components/gender';
import LatestSignUps from '../components/latestSignUps';

function App() {
  return (
    <div className="main-background-color w-full m-0 pb-32">
      <Navbar />
      <Navs />
      <div className="w-full xl:w-10/12 mx-auto">
        <Tabs />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 text-white justify-between">
          <div className="col-span-12 lg:col-span-1"><Icons /></div>
          <div className="col-span-12 lg:col-span-11 grid grid-cols-1 xl:grid-cols-12 gap-4 text-white flex items-stretch">
            <div className="col-span-12 lg:col-span-7">
              <Chart1 />
              <Chart2 />
            </div>
            <div className="col-span-12 lg:col-span-5 ">
              <TotalSignUps />
              <Gender />
              <LatestSignUps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

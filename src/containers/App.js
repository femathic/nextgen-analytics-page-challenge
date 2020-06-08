import React from 'react';
import Navbar from '../components/navbar';
import Navs from '../components/navs';
import Tabs from '../components/tabs';
import Icons from '../components/icons';

function App() {
  return (
    <div className="main-background-color w-full m-0 ">
      <Navbar />
      <Navs />
      <div className="w-full xl:w-10/12 mx-auto">
        <Tabs />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 text-white justify-between">
          <div className="col-span-1"><Icons /></div>
          <div className="col-span-7">Graphs</div>
          <div className="col-span-4">Stats</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const Tabs = () => (
  <section className="w-full xl:w-11/12 ml-0 xl:ml-24 " style={{ borderBottom: '2px solid #c4c4c41A' }}>
    <div className="flex flex-wrap items-center justify-around text-xs md:text-sm lg:justify-between shadow pb-4 mx-1 mt-6 md:mt-20 w-full lg:w-6/12 wow fadeInDown">
      <a href="#!" className="primary-color-2 font-medium text-sm md:text-base hover:opacity-75 py-0 px-1"> Signups </a>
      <a href="#!" className="secondary-text-color font-normal hover:opacity-75 py-0 px-1 tracking-tight"> Investments </a>
      <a href="#!" className="secondary-text-color font-normal hover:opacity-75 py-0 px-1 tracking-tight"> Revenue </a>
      <a href="#!" className="secondary-text-color font-normal hover:opacity-75 py-0 px-1 tracking-tight"> Exits </a>
      <a href="#!" className="secondary-text-color font-normal hover:opacity-75 py-0 px-1 tracking-tight"> Trades </a>
    </div>
  </section>
);

export default Tabs;

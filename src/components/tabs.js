import React from 'react';

const Tabs = () => (
  <section className="w-full xl:w-11/12 ml-0 lg:ml-24 " style={{ borderBottom: '2px solid #c4c4c41A' }}>
    <div className="flex flex-wrap items-center justify-around text-sm md:text-base lg:justify-between shadow pb-4 mt-6 md:mt-20 w-full lg:w-3/5">
      <a href="#!" className="primary-color-2 font-semibold text-base md:text-lg hover:opacity-75 py-0 px-1 tracking-wider"> Signups </a>
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1 tracking-wider"> Investments </a>
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1 tracking-wider tracking-wider"> Revenue </a>
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1 tracking-wider"> Exits </a>
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1 tracking-wider"> Trade </a>
    </div>
  </section>
);

export default Tabs;

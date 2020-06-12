import React from 'react';

const Navs = () => (
  <section className="flex flex-col md:flex-row flex-wrap items-center justify-around lg:justify-between nav-background-color py-0 px-6 xl:pl-24 lg:pr-36 xl:pr-48 shadow wow fadeInDown">
    <button type="button" className="flex items-center rounded secondary-text-color font-semibold text-xs border-0 p-3 hover:opacity-75">
      <span className="ml-2 lg:ml-3 mr-3 lg:nmr-4 tracking-wider">OVERVIEW</span>
      <svg className="h-1 md:h-3 fill-current secondary-text-color" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.99292H25L12.4911 13.5042L0 0.99292Z" />
      </svg>
    </button>
    <div className="flex flex-col items-center text-xs mx-3 mt-3 mb-4 tracking-tight">
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1"> Total signups </a>
      <a href="#!" className="tertiary-color font-bold text-sm md:text-lg hover:opacity-75 py-0 px-1"> 648 </a>
    </div>
    <div className="flex flex-col items-center text-xs mx-3 mt-3 mb-4 tracking-tight">
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1"> Last week </a>
      <a href="#!" className="secondary-color font-bold text-sm md:text-lg hover:opacity-75 py-0 px-1"> 12 </a>
    </div>
    <div className="flex flex-col items-center text-xs mx-3 mt-3 mb-4 tracking-tight">
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1"> Total investments </a>
      <a href="#!" className="primary-color font-bold text-sm md:text-lg hover:opacity-75 py-0 px-1"> 102 </a>
    </div>
    <div className="flex flex-col items-center text-xs mx-3 mt-3 mb-4 tracking-tight">
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1"> Average investment </a>
      <a href="#!" className="tertiary-color font-bold text-sm md:text-lg hover:opacity-75 py-0 px-1">
        <span className="font-light pr-1">NOK</span>
        345,565
      </a>
    </div>
    <div className="flex flex-col items-center text-xs mx-5 my-2 lg:mr-16 tracking-tight">
      <a href="#!" className="secondary-text-color font-medium hover:opacity-75 py-0 px-1"> Total exits </a>
      <a href="#!" className="secondary-color font-bold text-sm md:text-lg hover:opacity-75 py-0 px-1"> 648 </a>
    </div>
  </section>
);


export default Navs;

import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import user from '../assets/images/avatar@2x.png';

const SmallNav = () => (
  <div className="flex xl:hidden flex-col items-start justify-between font-medium tracking-widest">
    <div className="flex flex-wrap items-center justify-around text-sm md:text-base text-white py-2 md:py-5 w-full">
      <a href="#!" className="secondary-text-color hover:opacity-75 py-2"> ACCOUNT </a>
      <a href="#!" className="secondary-text-color hover:opacity-75 py-2"> CHARTS </a>
      <a href="#!" className="secondary-text-color hover:opacity-75 py-2"> HELP </a>
    </div>
    <div className="flex flex-wrap items-center justify-center text-white primary-gradient py-1 md:py-5 px-4 w-full">
      <img src={user} className="w-16" alt="Innovasjon Norge" style={{ left: 0 }} />
      <a href="#!" className="text-lg tracking-wide hover:font-medium ml-16 py-0">Elsa Anderson</a>
      <div className="flex flex-col items-start text-base ml-6">
        <a href="#!" className="text-base font-medium tracking-wide ml-12 py-0">17-02-2020 (2.45 PM)</a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [showSmallNav, setShowSmallNav] = useState(false);
  return (
    <nav style={{ borderBottom: '2px solid #1bfbe4' }} className="wow fadeInDown">
      <div className="flex flex-wrap items-center justify-between bg-transparent py-0 pr-0 pl-0 xl:pl-40 w-full">
        <img src={logo} className="w-32 md:w-48 my-4 mx-10" alt="Innovasjon Norge" />
        <button
          type="button"
          style={{ border: '2px solid #1bfbe4', color: '#1bfbe4' }}
          onClick={() => setShowSmallNav(!showSmallNav)}
          className="block xl:hidden flex items-center px-4 py-3 my-5 md:my-10 mx-6 sm:mx-12 rounded hover:opacity-75"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div className="hidden xl:flex flex-wrap items-center justify-between text-base font-medium tracking-widest">
          <a href="#!" className="secondary-text-color hover:opacity-75 px-12"> ACCOUNT </a>
          <a href="#!" className="secondary-text-color hover:opacity-75 px-12"> CHARTS </a>
          <a href="#!" className="secondary-text-color hover:opacity-75 pl-12 pr-32"> HELP </a>
          <div className="flex flex-wrap items-center justify-between text-white primary-gradient py-5 lg:pr-32 relative">
            <img src={user} className="w-16 absolute" alt="Innovasjon Norge" style={{ left: -28 }} />
            <a href="#!" className="tracking-wide font-semibold ml-16">Elsa Anderson</a>
            <div className="flex flex-col items-start ml-3 xl:ml-12">
              <a href="#!" className="text-sm font-semibold tracking-wide ml-12 pb-0 pt-1">17-02-2020</a>
              <a href="#!" className="text-2xl font-normal tracking-tight ml-12 pt-0 pb-1">2.45 PM</a>
            </div>
          </div>
        </div>
      </div>
      {showSmallNav && <SmallNav />}
    </nav>
  );
};


export default Navbar;

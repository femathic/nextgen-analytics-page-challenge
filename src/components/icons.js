import React from 'react';
import trend from '../assets/icons/Group174.svg';
import funds from '../assets/icons/funds.svg';
import history from '../assets/icons/history.svg';
import path from '../assets/icons/Path.svg';
import window from '../assets/icons/verification-window-button.svg';
import lock from '../assets/icons/locked.svg';

const Icons = () => (
  <aside className="w-full mt-0 flex flex-row xl:flex-col items-center xl:items-start justify-around xl:justify-start wow fadeInLeft">
    <a href="#!" className="nav-background-color hover:opacity-75 mb-10 lg:mb-16 px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-8" src={trend} alt="trend" />
    </a>
    <a href="#!" className="hover:opacity-75 mb-10 px-1 md:px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-8" src={funds} alt="funds" />
    </a>
    <a href="#!" className="hover:opacity-75 mb-10 px-1 md:px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-8" src={path} alt="path" />
    </a>
    <a href="#!" className="hover:opacity-75 mb-10 px-1 md:px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-8" src={history} alt="history" />
    </a>
    <a href="#!" className="hover:opacity-75 mb-10 px-1 md:px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-8" src={window} alt="window" />
    </a>
    <a href="#!" className="hover:opacity-75 mb-10 px-1 md:px-6 pt-4 pb-1 lg:pb-4 tracking-wider">
      <img className="w-6 md:w-6" src={lock} alt="lock" />
    </a>
  </aside>
);


export default Icons;

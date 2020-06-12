import React from 'react';

const Gender = () => (
  <section className="px-4 md:px-10 py-6 nav-background-color flex items-center justify-between font-medium secondary-text-color text-xs rounded-lg wow fadeInUp">
    <span style={{ borderLeft: '5px solid #4effa1' }} className="px-2"> By Gender </span>
    <a href="#!" className="px-2 primary-text-color hover:opacity-75 whitespace-no-wrap">
      Female
      <svg className="h-1 ml-2 mb-1 fill-current inline" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.99292H25L12.4911 13.5042L0 0.99292Z" />
      </svg>
    </a>
    <a href="#!" className="px-2 primary-text-color hover:opacity-75 whitespace-no-wrap">
      Individuals
      <svg className="h-1 ml-2 mb-1 fill-current inline" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.99292H25L12.4911 13.5042L0 0.99292Z" />
      </svg>
    </a>
    <span className="px-2 tertiary-color"> 102 </span>
  </section>
);

export default Gender;

import React from 'react';

const LatestSignUps = () => (
  <section className="mt-6 pt-1 pb-8 nav-background-color font-semibold secondary-text-color rounded-lg wow fadeInUp">
    <div className="mx-1 p-5 main-background-color">
      <h4 className="font-medium text-xl tracking-widest pb-6">Latest Signups</h4>
      <div className="grid grid-cols-12 tracking-wide">
        <p className="col-span-6 font-semibold text-sm tracking-wide">Name</p>
        <p className="col-span-6 font-semibold text-sm tracking-wide">Schedule Meetings</p>
      </div>
    </div>
    <div className="grid grid-cols-12 py-1 mx-1 tracking-wide">
      <div className="px-6 py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        <span className="pl-2" style={{ borderLeft: '5px solid #4effa1' }}>David Hansen</span>
      </div>
      <div className="py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        02-03-2020-2PM
      </div>
    </div>
    <div className="grid grid-cols-12 py-1 mx-1 tracking-wide">
      <div className="px-6 py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        <span className="pl-2" style={{ borderLeft: '5px solid #ff56ee' }}>Shopify</span>
      </div>
      <div className="py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        05-03-2020-10:30AM
      </div>
    </div>
    <div className="grid grid-cols-12 py-1 mx-1 tracking-wide">
      <div className="px-6 py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        <span className="pl-2" style={{ borderLeft: '5px solid #ff56ee' }}>Arvid,Realtree AB</span>
      </div>
      <div className="py-3 col-span-6 font-semibold text-sm tracking-wide" style={{ borderBottom: '2px solid #c4c4c40A' }}>
        05-03-2020-3PM
      </div>
    </div>
  </section>
);

export default LatestSignUps;

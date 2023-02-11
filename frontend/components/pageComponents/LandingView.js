import React from 'react';
import TrendingEvents from '../TrendingEvents';

const LandingView = () => {
  return (
    <div className="grid grid-cols-9 gap-3 auto-cols-min mt-20">
      <div className="col-span-6">
        <div className="pt-16 mr-20">
          <h1
            className="text-left font-bold text-4xl"
            style={{
              //set line height to 1.2
              lineHeight: 1.2,
            }}
          >
            Title and Tagline for the business or branding Title and Tagline for
            the business or branding
          </h1>
          <p className="mt-10">
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <TrendingEvents />
      </div>
    </div>
  );
};

export default LandingView;

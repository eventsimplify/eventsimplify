import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import LandingView from '../components/pageComponents/LandingView';
import TrendingEvents from '../components/TrendingEvents';

const index = () => {
  return (
    <div>
      <Layout>
        <div className={`home_page`}>
          <LandingView />
          <TrendingEvents />
          {/* </Layout> */}
          <div className="vector_line"></div>
        </div>
      </Layout>
      {/* <Layout> */}
    </div>
  );
};

export default index;

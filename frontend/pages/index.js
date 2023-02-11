import React from 'react';
import Layout from '../components/Layout';
import LandingView from '../components/pageComponents/LandingView';

const index = () => {
  return (
    <div className="px-20">
      <Layout>
        <LandingView />
      </Layout>
    </div>
  );
};

export default index;

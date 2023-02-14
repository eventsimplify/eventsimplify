import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import UpcomingEvents from '../components/UpcomingEvents';

const index = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <UpcomingEvents />
      </Layout>
    </div>
  );
};

export default index;

import React, { useContext } from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import EventShowCase from '../components/EventShowCase';
import TopSelling from '../components/TopSelling';
import HotOffer from '../components/HotOffer';
import { DummyData } from '../dummyData';
import UserContext from '../context/context';
const index = () => {
  const msg = useContext(UserContext);
  console.log(msg);
  const [eventShowCase, artShowCase, concertShowCase, eventCardDetailsDummy] =
    DummyData();
  return (
    <div>
      <Layout>
        <Banner />
        <EventShowCase details={eventShowCase} />
        <HotOffer />
        <TopSelling />
        <EventShowCase details={artShowCase} />
        <EventShowCase details={concertShowCase} />
      </Layout>
    </div>
  );
};

export default index;

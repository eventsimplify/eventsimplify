import React from 'react';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import EventShowCase from '../components/EventShowCase';
import TopSelling from '../components/TopSelling';
import HotOffer from '../components/HotOffer';
// event showcase type and details
const eventCardDetailsDummy = [
  {
    date: ['Nov', '01'],
    title: 'Panic! at the disco',
    price: 'Rs 45,000',
    location: 'Kathmandu, Nepal',
    image: '/assets/card_image/singer.png',
  },
  {
    date: ['Nov', '01'],
    title: 'Panic! at the disco',
    price: 'Rs 45,000',
    location: 'Kathmandu, Nepal',
    image: '/assets/card_image/singer.png',
  },
  {
    date: ['Nov', '01'],
    title: 'Panic! at the disco',
    price: 'Rs 45,000',
    location: 'Kathmandu, Nepal',
    image: '/assets/card_image/singer.png',
  },
  {
    date: ['Nov', '01'],
    title: 'Panic! at the disco',
    price: 'Rs 45,000',
    location: 'Kathmandu, Nepal',
    image: '/assets/card_image/singer.png',
  },
];
//
const eventShowCase = {
  type: 'Upcoming Events',
  detailsOfEvents: eventCardDetailsDummy,
};

// arts
const artShowCase = {
  type: 'Browse by Arts',
  detailsOfEvents: eventCardDetailsDummy,
};

// concerts
const concertShowCase = {
  type: 'Browse by Concerts',
  detailsOfEvents: eventCardDetailsDummy,
};

const index = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <EventShowCase details={eventShowCase} />
        <HotOffer />
        <EventShowCase details={artShowCase} />
        <TopSelling />
        <EventShowCase details={concertShowCase} />
      </Layout>
    </div>
  );
};

export default index;

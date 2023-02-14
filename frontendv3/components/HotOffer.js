import React from 'react';
import styles from '../styles/upcomingevents.module.css';
import { FaArrowRight } from 'react-icons/fa';
import HotOfferCard from './HotOfferCard';
const HotOffer = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <span className={`${styles.upcoming_events_title} font-heading`}>
          Hot Offer
        </span>
        <div
          className={`flex justify-center items-center gap-2 text-primary_color`}
        >
          <span>View All</span>
          <FaArrowRight />
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-4 items-start justify-start mt-4`}>
        <HotOfferCard />
        <HotOfferCard />
      </div>
    </div>
  );
};

export default HotOffer;

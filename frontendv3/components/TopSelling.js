import React from 'react';
import styles from '../styles/upcomingevents.module.css';
import { FaArrowRight } from 'react-icons/fa';
import EventCard from './EventCard';
import TopSellingCard from './TopSellingCard';
const TopSelling = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <span className={`${styles.upcoming_events_title} font-heading`}>
          Top Selling
        </span>
        <div
          className={`flex justify-center items-center gap-2 text-primary_color`}
        >
          <span>View All</span>
          <FaArrowRight />
        </div>
      </div>
      <div className={`grid grid-cols-3 gap-5 justify-start mt-4`}>
        <TopSellingCard />
        <TopSellingCard />
        <TopSellingCard />
      </div>
    </div>
  );
};

export default TopSelling;

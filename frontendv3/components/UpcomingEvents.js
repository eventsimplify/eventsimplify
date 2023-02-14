import React from 'react';
import styles from '../styles/upcomingevents.module.css';
import { FaArrowRight } from 'react-icons/fa';
import EventCard from './EventCard';
const UpcomingEvents = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`} style={{}}>
        <span className={`${styles.upcoming_events_title}`}>
          Upcoming Events
        </span>
        <div
          className={`flex justify-center items-center gap-2 text-primary_color`}
        >
          <span>View All</span>
          <FaArrowRight />
        </div>
      </div>
      <div className={`grid grid-cols-4 gap-5`}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvents;

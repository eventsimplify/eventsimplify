import React from 'react';
import styles from '../styles/upcomingevents.module.css';
import { FaArrowRight } from 'react-icons/fa';
import EventCard from './EventCard';

const EventShowCase = ({ details }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`} style={{}}>
        <span className={`${styles.upcoming_events_title} font-heading`}>
          {details.type}
        </span>
        <div
          className={`flex justify-center items-center gap-2 text-primary_color mr-5`}
        >
          <span>View All</span>
          <FaArrowRight />
        </div>
      </div>
      <div className={`grid grid-cols-4 gap-5`}>
        {details.detailsOfEvents.slice(0, 4).map((event, index) => (
          <div>
            <EventCard events={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventShowCase;

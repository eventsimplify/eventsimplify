import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import styles from '../styles/eventcard.module.css';

const EventCard = ({ events }) => {
  return (
    <div className={`${styles.container} relative`}>
      <img className={`${styles.image_container}`} src={events.image} alt="" />
      <div
        className={`${styles.event_details} grid grid-cols-5 items-center justify-between text-center text-sm gap-4`}
      >
        <div className="grid grid-rows-2 col-span-1">
          <span>{events.date[0]}</span>
          <span>{events.date[1]}</span>
        </div>
        <div className="grid grid-rows-3 col-span-4 text-left leading-6">
          <span className="font-semibold">{events.title}</span>
          <span className=" font-light">{events.price}</span>
          <span className="flex items-center gap-3 font-light">
            <FaLocationArrow size={10} />
            {events.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from 'react';
import EventCard from './EventCard';
import styles from '../styles/eventslider.module.css';
const EventSlider = () => {
  return (
    <div className={`${styles.event_slider}`}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventSlider;

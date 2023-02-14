import React from 'react';
import styles from '../styles/eventcard.module.css';
const EventCard = () => {
  return (
    <div className={`${styles.container} relative`}>
      <img
        className={`${styles.image_container}`}
        src="/assets/card_image/singer.png"
        alt=""
      />
      {/* <div className={`${styles.event_details}`}>hi</div> */}
    </div>
  );
};

export default EventCard;

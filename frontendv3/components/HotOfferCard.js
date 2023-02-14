import React from 'react';
import styles from '../styles/hotoffer.module.css';
import Button from './Button';
const HotOfferCard = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <img
        src="/assets/card_image/offer.png"
        alt=""
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
      />
      <div className={`${styles.button}`}>
        <Button>Buy Tickets</Button>
      </div>
    </div>
  );
};

export default HotOfferCard;

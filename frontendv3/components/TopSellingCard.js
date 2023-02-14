import React from 'react';
import styles from '../styles/topsellingcards.module.css';
import Button from './Button';
const TopSellingCard = () => {
  return (
    <div
      style={{
        height: '424px',
        backgroundColor: '#000000',
        position: 'relative',
      }}
      className={`${styles.mainContainer}`}
    >
      <img
        src="/assets/card_image/singer.png"
        alt=""
        className="opacity-50 overflow-hidden -z-10"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
          objectPosition: 'left top',
        }}
      />
      <div className={`${styles.texts}`}>
        <span
          style={{
            position: 'absolute',
            bottom: '53px',
            left: '18px',
            color: '#ffffff',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '37px',
          }}
        >
          Eminem Concert
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '22px',
            left: '18px',
            color: '#EB5757',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '27px',
          }}
        >
          5 Tickets left!
        </span>
      </div>
      <div className={`${styles.onHoverComponents} `}>
        <div className="flex flex-col">
          <span
            style={{
              color: '#ffffff',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '30px',
              lineHeight: '37px',
            }}
          >
            Eminem Concert 2
          </span>
          <span
            style={{
              color: '#EB5757',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '27px',
            }}
          >
            5 Tickets left!
          </span>
          <div>
            <Button>Buy Tickets</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCard;

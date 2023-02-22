import React from 'react';
import { FaClock } from 'react-icons/fa';
import styles from '../styles/infocard.module.css';
const InfoCard = ({ info, children }) => {
  return (
    <div className={`${styles.maincontainer}`}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.info}>
        <h2>{info.title}</h2>
        <p>{info.time}</p>
        <p>{info.duration}</p>
      </div>
    </div>
  );
};
//default props
InfoCard.defaultProps = {
  info: {
    title: 'Duration',
    time: '20.00 - 21.56 WIB',
    duration: '1 hour 56 minutes',
  },
};
export default InfoCard;

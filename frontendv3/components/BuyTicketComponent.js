import React from 'react';
import styles from '../styles/buy_ticket.module.css';
const BuyTicketComponent = ({ onClickCallback }) => {
  return (
    <div
      className={`${styles.mainContainer} flex flex-col items-center justify-center`}
    >
      <span className=" font-thin text-lg">Tickets starting at</span>
      <span className="font-medium">Nrs. 200,000</span>
      <div className={`${styles.button_buy_tickets}`} onClick={onClickCallback}>
        <span>Buy Tickets</span>
      </div>
    </div>
  );
};

export default BuyTicketComponent;

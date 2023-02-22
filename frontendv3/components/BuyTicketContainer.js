import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import styles from '../styles/BuyTicketContainer.module.css';
const BuyTicketContainer = ({ qty, title, price, desc, onAdd, onRemove }) => {
  return (
    <div
      className={`${styles.main_container} ${
        qty !== 0 ? styles.selected : qty === 0 ? styles.nothing_selected : null
      }`}
    >
      <h2>{title}</h2>
      <p>
        {/* truncate after 100 cahr */}
        {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
      </p>
      <h2>{price}</h2>
      <div className={`${styles.button_container}`}>
        <FaMinus
          className={`${styles.icons}`}
          onClick={
            // call callback function with qty and title and increment
            () => onRemove(qty, title)
          }
        />
        <span>{qty}</span>

        <FaPlus
          className={`${styles.icons}`}
          onClick={() => onAdd(qty, title)}
        />
      </div>
    </div>
  );
};
// default props
BuyTicketContainer.defaultProps = {
  qty: 0,
  title: 'Paket VIP',
  price: 20000,
  desc: 'Loreum ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc Loreum ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nunc ',
};

export default BuyTicketContainer;

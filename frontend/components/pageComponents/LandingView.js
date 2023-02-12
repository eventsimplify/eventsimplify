import React from 'react';
import TrendingEvents from '../TrendingEvents';
import styles from './landingview.module.css';
const LandingView = () => {
  return (
    <form className={styles.landing_page_form}>
      <p className={styles.title}>
        Title and tigline for the business or branding
      </p>
      <p className={styles.description}>
        Little description Little description Little description Little
        description Little description Little description Little description
        Little description Little description Little description Little
        description Little description
      </p>

      <input
        type="text"
        placeholder="Search"
        className={styles.input_box_one}
      />
      <input
        type="text"
        placeholder="Event Location"
        className={styles.input_box_two}
      />
      <input
        type="text"
        placeholder="Event type / Category"
        className={styles.input_box_three}
      />

      <button className={styles.button}>Search</button>
    </form>
  );
};

export default LandingView;

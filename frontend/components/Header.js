import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.line}></div>

      <div className={styles.navmenu}>
        <div className={styles.logo}>
          <span className={styles.logo_text}>LOGO</span>
        </div>
        <div className={styles.menu_options}>
          <div className={styles.menu_item_list}>
            <span className={styles.menu_item_label}>Concerts</span>
          </div>
          <div className={styles.menu_item_list}>
            <span className={styles.menu_item_label}>Concerts</span>
          </div>
          <div className={styles.menu_item_list}>
            <span className={styles.menu_item_label}>Concerts</span>
          </div>
        </div>
        <div className={styles.buttons_frame}>
          <div className={styles.button_signin}>
            <span className={styles.login_text}>Log In</span>
          </div>
          <div className={styles.button_signup}>
            <span className={styles.signup_text}>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

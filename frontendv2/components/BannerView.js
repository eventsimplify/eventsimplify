import React from 'react';
import {
  FaCalendar,
  FaCalendarAlt,
  FaCalendarWeek,
  FaSearch,
} from 'react-icons/fa';
import index from '../pages';
import styles from '../styles/banner_view.module.css';
const BannerView = () => {
  return (
    <div>
      <div className={`${styles.banner_container}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '90%',
            zIndex: 1,
            position: 'absolute',
          }}
        >
          <img
            src="/assets/banner_image/bulb.png"
            alt="bulb image"
            className={`${styles.img_one}`}
          />
          <img
            src="/assets/banner_image/bulb.png"
            alt="bulb image"
            className={`${styles.img_two}`}
          />
          <img
            className={`${styles.img_three}`}
            src="/assets/banner_image/img_five.png"
          />
          <img
            className={`${styles.img_four}`}
            src="/assets/banner_image/img_one.png"
          />
          <img
            className={`${styles.img_five}`}
            src="/assets/banner_image/img_two.png"
          />
          <img
            className={`${styles.img_five}`}
            src="/assets/banner_image/img_two.png"
          />
          <img
            className={`${styles.img_six}`}
            src="/assets/banner_image/img_three.png"
          />
          <img
            className={`${styles.img_seven}`}
            src="/assets/banner_image/img_four.png"
          />
          <img
            className={`${styles.img_eight}`}
            src="/assets/banner_image/img_six.png"
          />
          <div className={`${styles.search_box}`}>
            <div className={`${styles.left_events}`}>
              <input
                type="text"
                required="required"
                placeholder="Search for events"
              />
            </div>
            <div className={`${styles.divider}`}></div>
            <div className={`${styles.select_date}`}>
              <div className={styles.calender}>
                <FaCalendar />
              </div>
              <span className={`${styles.date_picker}`}>Select Date</span>
            </div>

            <div className={styles.button_container}>
              <span className={styles.text_button}>Search</span>
              <div className={styles.search_icon_box}>
                <FaSearch
                  style={{
                    color: 'white',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerView;

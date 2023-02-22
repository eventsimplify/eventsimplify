import React from 'react';
import styles from '../styles/banner.module.css';
import SearchBar from './SearchBar';
const Banner = () => {
  return (
    <div className="relative flex justify-center">
      <h1 className="absolute top-32 text-4xl font-bold text-primary_color">
        Exclusive events, priceless moments
      </h1>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
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
        </div>

        <div className="relative h-96 flex justify-evenly items-end">
          <img
            className={`${styles.img_four}`}
            src="/assets/banner_image/img_one.png"
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
        </div>
      </div>
      <div className={`${styles.search_bar_container}`}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;

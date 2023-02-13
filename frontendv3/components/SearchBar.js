import React, { useState } from 'react';
import styles from '../styles/search_bar.module.css';
import { FaSearch, FaCalendar } from 'react-icons/fa';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={`${styles.search_container} flex focus:radius-2xl`}>
      <input
        type="text"
        placeholder="Search by events,name,location, and more"
        className={`${styles.search_input}  px-4 font-heading text-base leading-4 font-normal text-left`}
      />
      <div className={`${styles.line}`}></div>

      <div className={`${styles.second_part} flex items-center `}>
        <div className="ml-5 flex items-center">
          <FaCalendar className={`text-gray-600`} />
          <Datepicker
            selected={startDate}
            placeholderText="Select date"
            onChange={(date) => setStartDate(date)}
            className={`focus:outline-none text-center  w-24`}
          />
        </div>

        <div className={`${styles.button_box}`}>
          <div>
            <FaSearch className="text-white" />
          </div>
          <span
            className={`${styles.button_text} text-sm leading-5 text-white font-medium`}
          >
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

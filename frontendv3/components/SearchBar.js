import React, { useRef, useState } from 'react';
import styles from '../styles/search_bar.module.css';
import { FaSearch, FaCalendar, FaArrowRight } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePicker } from 'react-date-range';
import { Menu } from '@headlessui/react';
const SearchBar = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const handleSelect = (ranges) => {
    // setDateRange(ranges);
    setDateRange(ranges.selection);
  };
  const calenderRef = useRef(null);
  return (
    <Menu>
      <div className={`${styles.search_container} flex focus:radius-2xl`}>
        <input
          type="text"
          placeholder="Search by events,name,location, and more"
          className={`${styles.search_input}  px-4 font-heading text-base leading-4 font-normal text-left`}
        />
        <div className={`${styles.line}`}></div>

        <div className={`${styles.second_part} flex items-center`}>
          <div className="ml-5 flex items-center">
            <Menu.Button as="div" className="flex items-center gap-4">
              <FaCalendar className="text-gray-500" />
              <span className="font-normal leading-6 text-sm">
                {dateRange.startDate.toDateString()}
              </span>
              <FaArrowRight className="text-black text-sm" />
              <span className="font-normal leading-6 text-sm">
                {dateRange.endDate.toDateString()}
              </span>
            </Menu.Button>
            <Menu.Items>
              <div
                className="absolute z-10"
                style={{
                  top: '80px',
                  left: '530px',
                }}
              >
                <DateRangePicker
                  ranges={[dateRange]}
                  onChange={handleSelect}
                  className="rounded-md shadow-lg drop-shadow-2xl"
                />
              </div>
            </Menu.Items>
          </div>

          <div className={`${styles.button_box} ml-5 mr-5`}>
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
    </Menu>
  );
};

export default SearchBar;

import Slider from 'rc-slider';
import { useState } from 'react';
import styles from '../styles/multirangeSlider.module.css';

const MultiRangeSlider = () => {
  const [lowRange, setLowRange] = useState(0);
  const [highRange, setHighRange] = useState(100000);
  return (
    <>
      <div className={`${styles.mainContainer}`}>
        {/* show low value container */}

        {/* <div className={`${styles.range_slider} flex`}>
          <input
            type="range"
            min={'0'}
            max={highRange}
            value={lowRange}
            onChange={(e) => {
              // make sure e is not greater than highRange
              if (e.target.value > highRange) {
                setLowRange(highRange);
              } else {
                setLowRange(e.target.value);
              }
            }}
          />
          <input
            type="range"
            min={lowRange}
            max="100000"
            value={highRange}
            onChange={(e) => {
              // make sure e is not less than lowRange
              if (e.target.value < lowRange) {
                setHighRange(lowRange);
              } else {
                setHighRange(e.target.value);
              }
            }}
          />
        </div> */}
        {/* show high value container */}
        <Slider
          range
          min={0}
          max={100000}
          defaultValue={[100, 100000]}
          value={[lowRange, highRange]}
          allowCross={false}
          draggableTrack={true}
          handleStyle={[
            {
              borderColor: '#4F4CEE',
            },
            {
              borderColor: '#4F4CEE',
            },
          ]}
          railStyle={{
            backgroundColor: '#DADAFB',
          }}
          trackStyle={[
            {
              backgroundColor: '#4F4CEE',
            },
          ]}
          onChange={(e) => {
            setLowRange(e[0]);
            setHighRange(e[1]);
          }}
        />
        {/* <Range /> */}
      </div>
      <div className="flex justify-between my-2 text-sm">
        <div className={`${styles.lowValueContainer}`}>
          <span
            className={`${styles.lowValue} underline bottom-2 underline-offset-8`}
          >
            NRS. {lowRange}
          </span>
        </div>
        {/* dash */}
        <div className={`${styles.dash}`}>-</div>
        <div
          className={`${styles.highValueContainer} underline bottom-2 underline-offset-8`}
        >
          <span className={`${styles.highValue}`}>NRS. {highRange}</span>
        </div>
      </div>
    </>
  );
};

export default MultiRangeSlider;

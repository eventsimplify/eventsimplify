import React, { useState } from 'react';

const CheckBoxAndText = ({ text, isChecked }) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-start gap-5">
          <input
            type={'checkbox'}
            onChange={isChecked}
            className="text-lg"
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
//default props
CheckBoxAndText.defaultProps = {
  text: 'Box',
};
export default CheckBoxAndText;

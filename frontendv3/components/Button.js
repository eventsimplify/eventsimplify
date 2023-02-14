import React from 'react';

const Button = ({ children, color }) => {
  return (
    <div
      className="w-28 h-10 flex items-center justify-center text-white"
      style={{
        backgroundColor: color,
        borderRadius: '4px',
        padding: '10px 16px',
        gap: '8px',
        fontSize: '14px',
      }}
    >
      {children}
    </div>
  );
};

Button.defaultProps = {
  text: 'Button',
  color: '#4F4CEE',
};
export default Button;

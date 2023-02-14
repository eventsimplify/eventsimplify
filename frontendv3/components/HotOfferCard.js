import React from 'react';

const HotOfferCard = () => {
  return (
    <div
      className="border-2"
      style={{
        height: '344px',
      }}
    >
      <img
        src="/assets/card_image/offer.png"
        alt=""
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default HotOfferCard;

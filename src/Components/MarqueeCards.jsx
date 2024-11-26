/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: MarqueeCards.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import Marquee from "react-fast-marquee";

const MarqueeCards = ({ children, direction }) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;

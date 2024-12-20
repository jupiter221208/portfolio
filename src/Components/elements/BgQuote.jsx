/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: BgQuote.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import Arrow from "./Arrow";

const BgQuote = (props) => {
  const { text } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
        className="absolute top-[10%] sm:top-[10%] md:top-[10%] left-[-60%] sm:left-[-30%] md:left-[-15%] lg:left-[-5%] xl:left-[10%] w-fit h-fit flex flex-col rotate-[-45deg]"
      >
        <p
          style={{ fontFamily: "La Belle Aurore, cursive" }}
          className="text-grayscale-400 text-lg noselect"
        >
          {text}
        </p>
        <div className="w-32 h-32 rotate-[90deg]">
          <Arrow />
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default BgQuote;

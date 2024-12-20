/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: Loader.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-primary-400 text-xl"
      >
        b
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

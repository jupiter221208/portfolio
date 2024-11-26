/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: Arrow.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <defs>
        <marker
          id="pointer"
          markerWidth="60"
          markerHeight="60"
          refX="9.5"
          refY="5.1"
          orient="-45"
          markerUnits="userSpaceOnUse"
        >
          <polyline points="1 1, 9 5, 1 7" />
        </marker>
      </defs>
      <path
        className="arrowpath"
        d="M16.7,178 c87.6-46.9,162.9-185.4,227-136.4C307.2,90.1,195,158.5,111,108.9C71,85.2,92.2,30.7,126,7"
        markerEnd="url(#pointer)"
      />
    </svg>
  );
};

export default Arrow;

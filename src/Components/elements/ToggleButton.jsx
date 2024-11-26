/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: ToggleButton.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Constants/constants";

const ToggleButton = ({ isActive, handleClick }) => {
  return (
    <div
      id="togglebutton"
      onClick={handleClick}
      className="bg-grayscale-900 rounded-xl w-[50px] h-[50px] absolute top-4 right-4 flex items-center justify-center cursor-pointer"
    >
      <FontAwesomeIcon
        className="text-4xl text-grayscale-50"
        icon={isActive ? icons.faX : icons.faBars}
      />
    </div>
  );
};

export default ToggleButton;

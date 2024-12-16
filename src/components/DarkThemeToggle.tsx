import React from "react";
import {FaRegMoon} from "react-icons/fa";
import {FiSun} from "react-icons/fi";

const DarkThemeToggle = ({
  handleToggle,
  isDarkMode,
}: {
  handleToggle: (checked: boolean) => void;
  isDarkMode: boolean;
}) => {
  return (
    <button
      className='flex border-2 dark:border-white 
  border-[#dedddd] rounded-[20px] p-0'
      onClick={() => handleToggle(!isDarkMode)}
    >
      <div className='flex space-x-1 p-1 pr-2 py-2 items-center'>
        <div
          className={`absolute w-[30px] h-[30px] bg-[#dedddd] z-[-1] dark:bg-[#ffffff76] 
        rounded-full transition-transform duration-100 
        ${!isDarkMode ? "translate-x-0" : "translate-x-[90%]"}`}
        />
        <FiSun size={22} color={!isDarkMode ? "#ffffff" : "#ffffff9"} />
        <FaRegMoon size={22} color={!isDarkMode ? "#00000020" : "#ffffff"} />
      </div>
    </button>
  );
};

export default DarkThemeToggle;

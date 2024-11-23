import React from "react";
import {isMobileMenuOpen} from "./mobileStore";
import {useStore} from "@nanostores/react";

const MobileMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  const sections = ["Galeria", "O Nas", "Meble", "Kontakt"];
  const selected = 0;
  return (
    <div
      className={`absolute w-[60%] h-screen ml-auto bg-white flex justify-center items-center transition-transform ${$isMobileMenuOpen ? "translate-x-[0px]" : "translate-x-[60rem]"} duration-500   mt-[-11vh]`}
    >
      <ul id='mobileMenu' className='space-y-6 text-2xl relative py-6 flex justify-center items-start flex-col w-full'>
        {sections.map((section, key) => (
          <li key={key} className={` ${key === selected ? "bg-MyBrown" : ""} w-full py-2 px-2`}>
            <a>{section}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

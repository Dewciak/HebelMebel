import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

import React from "react";

interface Props {
  furniturePage: boolean;
}

const Navbar = ({furniturePage}: Props) => {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div>
      <div className='w-full fixed bg-white z-[100] hidden xl:flex'>
        <div
          className={`max-w-[2000px] mx-auto  py-6 ${furniturePage === true ? "justify-between flex w-full" : "justify-center grid grid-cols-3"} px-14 items-center text-MyGray font-extralight`}
        >
          <ul
            className={`flex text-[1.2rem] text-right space-x-14 ${furniturePage === true ? "hidden" : ""}`}
            id='navbar-links'
          >
            <li>
              <a href='#' onClick={() => handleScroll("Realizations")} className='navbar-link'>
                REALIZACJE
              </a>
            </li>
            <li>
              <a href='#' onClick={() => handleScroll("AboutUs")} className='navbar-link'>
                O&nbsp;NAS
              </a>
            </li>
            <li>
              <a href='#' onClick={() => handleScroll("Furnitures")} className='navbar-link'>
                MEBLE
              </a>
            </li>
            <li>
              <a href='#' onClick={() => handleScroll("Contact")} className='navbar-link'>
                KONTAKT
              </a>
            </li>
          </ul>
          <a href='/' className={`w-[5rem] ${furniturePage === true ? "" : "mx-auto"}`}>
            <img src='/images/Logo.png' className='size-[4.5rem]' />
          </a>
          <ul className='flex text-[1.2rem] text-left space-x-14'>
            <li>
              <a href='/tables'>STOŁY</a>
            </li>
            <li>
              <a href='/dressers'>KOMODY</a>
            </li>
            <li>
              <a href='/racks'>REGAŁY</a>
            </li>
            <li>
              <a href='/wardrobes'>SZAFY</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='fixed flex xl:hidden w-full bg-white justify-between px-6 py-1 z-30'>
        <a href='/'>
          <img src='/images/Logo.png' className='size-[4.5rem]' />
        </a>
        <HamburgerMenu />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;

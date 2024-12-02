import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

import React from "react";

const Navbar = () => {
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
        <div className=' max-w-[2000px] mx-auto grid grid-cols-3 py-6 justify-center px-14 items-center text-MyGray font-extralight'>
          <ul className='flex text-[1.2rem] text-right space-x-14' id='navbar-links'>
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
          <a href='/' className=' w-[5rem] mx-auto'>
            <img src='/images/Logo.png' className='size-[4.5rem]' />
          </a>
          <ul className='flex text-[1.2rem] text-left space-x-14'>
            <li>
              <a href='/tables'>STOŁY</a>
            </li>
            <li>
              <a>KOMODY</a>
            </li>
            <li>
              <a>REGAŁY</a>
            </li>
            <li>
              <a>SZAFKI</a>
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

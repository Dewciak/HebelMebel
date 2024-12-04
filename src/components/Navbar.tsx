import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import {Link} from "react-scroll";
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
              <Link to='Realizations' className='cursor-pointer hover:text-MyBrown'>
                REALIZACJE
              </Link>
            </li>
            <li>
              <Link to='AboutUs' className='cursor-pointer hover:text-MyBrown'>
                O&nbsp;NAS
              </Link>
            </li>
            <li>
              <Link to='Furnitures' className='cursor-pointer hover:text-MyBrown'>
                MEBLE
              </Link>
            </li>
            <li>
              <Link to='Contact' className='cursor-pointer hover:text-MyBrown'>
                KONTAKT
              </Link>
            </li>
          </ul>
          <a href='/' className={`w-[4.5rem] ${furniturePage === false && "mx-auto"}`}>
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

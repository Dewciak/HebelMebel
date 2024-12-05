import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import {Link} from "react-scroll";
import React from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

interface Props {
  furniturePage: boolean;
}

const Navbar = ({furniturePage}: Props) => {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const handleToggle = (checked: boolean) => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(checked);
  };

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
      <div className='w-full fixed bg-white dark:bg-myDarkLighterDark z-[100] hidden xl:flex'>
        <div
          className={`max-w-[2000px] mx-auto  py-6 ${furniturePage === true ? "justify-between flex w-full" : "justify-center grid grid-cols-3"} 
            px-14 items-center text-MyGray font-extralight dark:text-white`}
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
          <div className={`w-[4.5rem] ${furniturePage === false && "mx-auto"}`}>
            <a href='/'>
              <img src='/images/Logo.png' className='size-[4.5rem] block dark:hidden' />
            </a>
            <a href='/'>
              <img src='/LogoWhite.png' className='size-[4.5rem] hidden dark:block' />
            </a>
          </div>

          <ul className='flex text-[1.2rem] text-left space-x-14 dark:text-white'>
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
            <li>
              <DarkModeSwitch
                checked={isDarkMode}
                style={{marginBottom: "0rem"}}
                onChange={handleToggle}
                moonColor='#000000'
                sunColor='#ffffff'
                size={30}
              />
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

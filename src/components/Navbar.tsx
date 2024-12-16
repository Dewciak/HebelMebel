import {useStore} from "@nanostores/react";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import DarkThemeToggle from "./DarkThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
interface Props {
  furniturePage: boolean;
}
const Navbar = ({furniturePage}: Props) => {
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  });

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newDarkMode);
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className='w-full fixed bg-white dark:bg-myDarkLighterDark z-[100] hidden xl:flex'>
        <div
          className={`max-w-[2000px] mx-auto  py-6 flex w-[90%]  justify-between  
            px-14 items-center text-MyGray font-extralight dark:text-white`}
        >
          <ul
            className={`flex text-[1.2rem] w-[470px] justify-between ${furniturePage === true ? "hidden" : ""}`}
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
          <div id='logo' className={`w-[4.5rem] duration-300 ${furniturePage === false && "mx-auto"}`}>
            <a href='/'>
              <img src='/images/Logo.png' className='size-[4.5rem] block dark:hidden' />
            </a>
            <a href='/'>
              <img src='/LogoWhite.png' className='size-[4.5rem] hidden dark:block' />
            </a>
          </div>

          <ul className='flex text-[1.2rem] text-left dark:text-white w-[470px] justify-between'>
            <li>
              <a href='tables'>STOŁY</a>
            </li>
            <li>
              <a href='/dressers'>KOMODY</a>
            </li>
            <li>
              <a href='racks'>REGAŁY</a>
            </li>
            <li>
              <a href='/wardrobes'>SZAFY</a>
            </li>
            <li className='absolute right-5 top-[42px]'>
              <DarkThemeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
            </li>
          </ul>
        </div>
      </div>

      <div className='fixed flex xl:hidden bg-white items-center w-full  dark:bg-myDarkLighterDark justify-between px-4 py-2 z-30'>
        <a href='/'>
          <img src='/images/Logo.png' className='size-[3.5rem] block dark:hidden' />
          <img src='/LogoWhite.png' className='size-[3.5rem] hidden dark:block' />
        </a>
        <HamburgerMenu />
      </div>
      <MobileMenu isDarkMode={isDarkMode} setDarkMode={setDarkMode} handleToggle={handleToggle} />
    </div>
  );
};

export default Navbar;

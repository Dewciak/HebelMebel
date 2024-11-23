import React from "react";
// import {RxHamburgerMenu as Hamburger} from "react-icons/rx";
import {isMobileMenuOpen} from "./mobileStore";
import {useStore} from "@nanostores/react";
import {Squash as Hamburger} from "hamburger-react";
const HamburgerMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  return (
    <button className='hamburgerMenu z-10' onClick={() => isMobileMenuOpen.set(!$isMobileMenuOpen)}>
      <Hamburger size={40} />
    </button>
  );
};

export default HamburgerMenu;

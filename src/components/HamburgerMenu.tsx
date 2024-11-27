import React from "react";
// import {RxHamburgerMenu as Hamburger} from "react-icons/rx";
import {isMobileMenuOpen} from "./StateStore";
import {useStore} from "@nanostores/react";
import {Squash as Hamburger} from "hamburger-react";
const HamburgerMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  return (
    <button
      className='hamburgerMenu z-30'
      onClick={() => {
        isMobileMenuOpen.set(!$isMobileMenuOpen);
      }}
    >
      <Hamburger size={40} duration={0.3} />
    </button>
  );
};

export default HamburgerMenu;

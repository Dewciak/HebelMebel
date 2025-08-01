import React from "react";
// import {RxHamburgerMenu as Hamburger} from "react-icons/rx";
import {isMobileMenuOpen} from "./StateStore";
import {useStore} from "@nanostores/react";
import {Squash as Hamburger} from "hamburger-react";
const HamburgerMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  return (
    <div className='z-30  flex'>
      <button
        aria-label='Mobile Menu'
        className='hamburgerMenu dark:hidden'
        onClick={() => {
          isMobileMenuOpen.set(!$isMobileMenuOpen);
        }}
      >
        <Hamburger aria-label='mobile-menu' size={29} duration={0.3} toggled={$isMobileMenuOpen} />
      </button>{" "}
      <button
        className='hamburgerMenu hidden dark:block'
        aria-label='Mobile Menu'
        onClick={() => {
          isMobileMenuOpen.set(!$isMobileMenuOpen);
        }}
      >
        <Hamburger aria-label='mobile-menu' size={29} duration={0.3} color='#ffffff' toggled={$isMobileMenuOpen} />
      </button>
    </div>
  );
};

export default HamburgerMenu;

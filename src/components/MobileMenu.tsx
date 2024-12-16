import React, {useEffect} from "react";
import {isMobileMenuOpen} from "./StateStore";
import {useStore} from "@nanostores/react";
import {Link} from "react-scroll";

interface Props {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: (checked: boolean) => void;
}

export const MobileMenu = ({isDarkMode, setDarkMode, handleToggle}: Props) => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if ($isMobileMenuOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [$isMobileMenuOpen, blockScroll, allowScroll]);

  const sections = [
    {
      name: "Galeria",
      path: "Realizations",
    },
    {
      name: "O nas",
      path: "AboutUs",
    },
    {
      name: "Meble",
      path: "Furnitures",
    },
    {
      name: "Kontakt",
      path: "Contact",
    },
  ];
  return (
    <div
      className={`fixed top-0 left-0 z-20 w-[100%] bg-white dark:bg-MyDarkBg h-screen ml-auto  flex flex-col justify-center items-center transition-transform ${$isMobileMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"} duration-700`}
    >
      <div className='w-full flex items-center justify-center'>
        <ul
          id='mobileMenu'
          className='space-y-6  dark:text-myDarkText text-2xl relative py-6 flex justify-center flex-col w-full items-center text-center'
        >
          {sections.map((section, key) => (
            <li key={key} className='w-full py-2 px-10'>
              <Link to={section.path} onClick={() => isMobileMenuOpen.set(!$isMobileMenuOpen)}>
                {section.name}
              </Link>
            </li>
          ))}
          <li>
            <DarkThemeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

import {useRef} from "react";
import DarkThemeToggle from "./DarkThemeToggle";

export const useScrollBlock = () => {
  const scroll = useRef(false);

  const blockScroll = () => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const {body} = document;

    if (!body?.style || scroll.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

    html.style.position = "relative";
    body.style.position = "relative";
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    scroll.current = true;
  };

  const allowScroll = () => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    const {body} = document;

    if (!body?.style || !scroll.current) return;

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";

    scroll.current = false;
  };

  return [blockScroll, allowScroll] as const;
};

export default MobileMenu;

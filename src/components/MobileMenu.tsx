import React, {useEffect, useState} from "react";
import {isMobileMenuOpen} from "./StateStore";
import {useStore} from "@nanostores/react";

export const MobileMenu = () => {
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
      path: "/",
    },
    {
      name: "O nas",
      path: "/#AboutUs",
    },
    {
      name: "Meble",
      path: "/#Furnitures",
    },
    {
      name: "Kontakt",
      path: "/#Contact",
    },
  ];
  const selected = 0;
  return (
    <div
      className={`fixed top-0 left-0 z-20 w-[100%] bg-white h-screen ml-auto  flex flex-col justify-center items-center transition-transform ${$isMobileMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"} duration-700`}
    >
      <div className='w-full flex items-center justify-center'>
        <ul
          id='mobileMenu'
          className='space-y-6 bg-white text-2xl relative py-6 flex justify-center flex-col w-full items-center text-center'
        >
          {sections.map((section, key) => (
            <li key={key} className='w-full py-2 px-10'>
              <a href={section.path} onClick={() => isMobileMenuOpen.set(!$isMobileMenuOpen)}>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import {useRef} from "react";

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

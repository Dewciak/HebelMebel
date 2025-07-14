import {useEffect, useState} from "react";

import DarkThemeToggle from "../DarkThemeToggle";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";

interface Props {
  furniturePage: boolean;
  policyPrivacyPage: boolean;
}
const Navbar = ({furniturePage, policyPrivacyPage}: Props) => {
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
    document.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 100) {
        document.body.classList.add("fullNavbar");
      } else {
        document.body.classList.remove("fullNavbar");
      }
    });
  });
  // Save dark mode preference to local storage

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newDarkMode);
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };
  // switch between dark and light mode

  const scrollToSectionWithOffset = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({top, behavior: "smooth"});
  };

  const sections = [
    {
      name: "Główna",
      path: "Hero",
      offset: 0,
    },
    {
      name: "Realizacje",
      path: "Realizations",
      offset: -150,
    },
    {
      name: "O nas",
      path: "AboutUs",
      offset: -350,
    },
    {
      name: "Galeria",
      path: "Works",
      offset: -350,
    },
    {
      name: "Kontakt",
      path: "Contact",
      offset: 0,
    },
  ];

  return (
    <nav>
      <div className='navbar w-[100%] left-[50%] duration-300 translate-x-[-50%] fixed bg-white rounded-[30px] mt-0 dark:bg-myDarkLighterDark z-[10] hidden xl:flex'>
        <div
          className={`max-w-[2000px] mx-auto  py-2 flex w-[100%]  justify-between  
            px-10 items-center text-[#262626] font-extralight dark:text-white`}
        >
          <Logo />

          <ul
            className={`flex text-[0.9rem] space-x-10 font-normal justify-between ${furniturePage === true ? "hidden" : ""}`}
            id='navbar-links'
          >
            {sections.map((section, key) => (
              <li key={key}>
                {policyPrivacyPage ? (
                  <a href={`/#${section.path}`} className='cursor-pointer hover:text-MyBrown'>
                    {section.name}
                  </a>
                ) : (
                  <a
                    href={`#${section.path}`}
                    onClick={(e) => {
                      e.preventDefault(); // zapobiega natychmiastowemu skokowi
                      scrollToSectionWithOffset(section.path, section.offset);
                    }}
                    className='cursor-pointer hover:text-MyBrown'
                  >
                    {section.name}
                  </a>
                )}
              </li>
            ))}
            <li>
              <DarkThemeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
            </li>
          </ul>
        </div>
      </div>

      <div className='navbar navbar w-[90%] mt-4  rounded-[20px]  left-[50%] duration-300 translate-x-[-50%]  fixed flex xl:hidden bg-white items-center dark:bg-myDarkLighterDark justify-between px-8 py-2 z-30'>
        <a href='/' aria-label='Strona Główna'>
          <img src='/LogoColor.png' className='size-[3.5rem] block' alt='Logo' />
        </a>

        <HamburgerMenu aria-label='Menu Mobilne' />
      </div>
      <MobileMenu
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        handleToggle={handleToggle}
        policyPrivacyPage={policyPrivacyPage}
      />
    </nav>
  );
};

export default Navbar;

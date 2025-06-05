import {useEffect, useState} from "react";
import {Link as ScrollLink} from "react-scroll";
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
  });
  // Save dark mode preference to local storage

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newDarkMode);
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };
  // switch between dark and light mode

  const sections = [
    {
      name: "STRONA GŁÓWNA",
      path: "Hero",
      offset: 0,
    },
    {
      name: "REALIZACJE",
      path: "Realizations",
      offset: -150,
    },
    {
      name: "O NAS",
      path: "AboutUs",
      offset: -150,
    },
    {
      name: "GALERIA",
      path: "Works",
      offset: -150,
    },
    {
      name: "KONTAKT",
      path: "Contact",
      offset: 0,
    },
  ];

  return (
    <nav>
      <div className='w-full fixed bg-white dark:bg-myDarkLighterDark z-[100] hidden xl:flex'>
        <div
          className={`max-w-[2000px] mx-auto  py-4 flex w-[100%]  justify-between  
            px-10 items-center text-[#262626] font-extralight dark:text-white`}
        >
          <Logo />

          <ul
            className={`flex text-[1.2rem] space-x-16 font-extralight justify-between ${furniturePage === true ? "hidden" : ""}`}
            id='navbar-links'
          >
            {sections.map((section, key) => (
              <li key={key}>
                {policyPrivacyPage ? (
                  <a href={`/#${section.path}`} className='cursor-pointer hover:text-MyBrown'>
                    {section.name}
                  </a>
                ) : (
                  <ScrollLink to={section.path} className='cursor-pointer hover:text-MyBrown' offset={section.offset}>
                    {section.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
          <DarkThemeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
        </div>
      </div>

      <div className='fixed flex xl:hidden bg-white items-center w-full  dark:bg-myDarkLighterDark justify-between px-4 py-2 z-30'>
        <a href='/'>
          <img src='/images/Logo.webp' className='size-[3.5rem] block dark:hidden' />
          <img src='/LogoWhite.webp' className='size-[3.5rem] hidden dark:block' />
        </a>

        <HamburgerMenu />
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

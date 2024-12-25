import { c as createComponent, r as renderTemplate, e as renderHead, a as renderComponent, f as createAstro } from './astro/server_PvjFaDoH.mjs';
import 'kleur/colors';
import { $ as $$Footer } from './Footer_Dpn4rE7B.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import { Squash } from 'hamburger-react';
import Zoom from 'react-medium-image-zoom';
/* empty css                            */

const DarkThemeToggle = ({
  handleToggle,
  isDarkMode
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "flex border-2 dark:border-white \n  border-[#dedddd] rounded-[20px] p-0",
      onClick: () => handleToggle(!isDarkMode),
      children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 p-1 pr-2 py-2 items-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute w-[30px] h-[30px] bg-[#dedddd] z-[-1] dark:bg-[#ffffff76] 
        rounded-full transition-transform duration-100 
        ${!isDarkMode ? "translate-x-0" : "translate-x-[90%]"}`
          }
        ),
        /* @__PURE__ */ jsx(FiSun, { size: 22, color: !isDarkMode ? "#ffffff" : "#ffffff9" }),
        /* @__PURE__ */ jsx(FaRegMoon, { size: 22, color: !isDarkMode ? "#00000020" : "#ffffff" })
      ] })
    }
  );
};

const isMobileMenuOpen = atom(false);
const selectedStyle = atom(void 0);

const HamburgerMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  return /* @__PURE__ */ jsxs("div", { className: "z-30  flex", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "hamburgerMenu dark:hidden",
        onClick: () => {
          isMobileMenuOpen.set(!$isMobileMenuOpen);
        },
        children: /* @__PURE__ */ jsx(Squash, { size: 30, duration: 0.3, toggled: $isMobileMenuOpen })
      }
    ),
    " ",
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "hamburgerMenu hidden dark:block",
        onClick: () => {
          isMobileMenuOpen.set(!$isMobileMenuOpen);
        },
        children: /* @__PURE__ */ jsx(Squash, { size: 30, duration: 0.3, color: "#ffffff", toggled: $isMobileMenuOpen })
      }
    )
  ] });
};

const MobileMenu = ({ isDarkMode, setDarkMode, handleToggle }) => {
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
      path: "Realizations"
    },
    {
      name: "O nas",
      path: "AboutUs"
    },
    {
      name: "Meble",
      path: "Furnitures"
    },
    {
      name: "Kontakt",
      path: "Contact"
    }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed top-0 left-0 z-20 w-[100%] bg-white dark:bg-MyDarkBg h-screen ml-auto  flex flex-col justify-center items-center transition-transform ${$isMobileMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"} duration-700`,
      children: /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center", children: /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "mobileMenu",
          className: "space-y-6  dark:text-myDarkText text-2xl relative py-6 flex justify-center flex-col w-full items-center text-center",
          children: [
            sections.map((section, key) => /* @__PURE__ */ jsx("li", { className: "w-full py-2 px-10", children: /* @__PURE__ */ jsx(Link, { to: section.path, onClick: () => isMobileMenuOpen.set(!$isMobileMenuOpen), children: section.name }) }, key)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(DarkThemeToggle, { isDarkMode, handleToggle }) })
          ]
        }
      ) })
    }
  );
};
const useScrollBlock = () => {
  const scroll = useRef(false);
  const blockScroll = () => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const { body } = document;
    if (!body?.style || scroll.current) return;
    window.innerWidth - html.clientWidth;
    parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
    html.style.position = "relative";
    body.style.position = "relative";
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    scroll.current = true;
  };
  const allowScroll = () => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const { body } = document;
    if (!body?.style || !scroll.current) return;
    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";
    scroll.current = false;
  };
  return [blockScroll, allowScroll];
};

const Navbar = ({ furniturePage }) => {
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full fixed bg-white dark:bg-myDarkLighterDark z-[100] hidden xl:flex", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `max-w-[2000px] mx-auto  py-6 flex w-[90%]  justify-between  
            px-14 items-center text-MyGray font-extralight dark:text-white`,
        children: [
          /* @__PURE__ */ jsxs(
            "ul",
            {
              className: `flex text-[1.2rem] w-[470px] justify-between ${furniturePage === true ? "hidden" : ""}`,
              id: "navbar-links",
              children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "Realizations", className: "cursor-pointer hover:text-MyBrown", children: "REALIZACJE" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "AboutUs", className: "cursor-pointer hover:text-MyBrown", children: "O NAS" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "Furnitures", className: "cursor-pointer hover:text-MyBrown", children: "MEBLE" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "Contact", className: "cursor-pointer hover:text-MyBrown", children: "KONTAKT" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { id: "logo", className: `w-[4.5rem] duration-300 ${furniturePage === false && "mx-auto"}`, children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/images/Logo.png", className: "size-[4.5rem] block dark:hidden" }) }),
            /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/LogoWhite.png", className: "size-[4.5rem] hidden dark:block" }) })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "flex text-[1.2rem] text-left dark:text-white w-[470px] justify-between", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tables", children: "STOŁY" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/dressers", children: "KOMODY" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "racks", children: "REGAŁY" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/wardrobes", children: "SZAFY" }) }),
            /* @__PURE__ */ jsx("li", { className: "absolute right-5 top-[42px]", children: /* @__PURE__ */ jsx(DarkThemeToggle, { isDarkMode, handleToggle }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "fixed flex xl:hidden bg-white items-center w-full  dark:bg-myDarkLighterDark justify-between px-4 py-2 z-30", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/Logo.png", className: "size-[3.5rem] block dark:hidden" }),
        /* @__PURE__ */ jsx("img", { src: "/LogoWhite.png", className: "size-[3.5rem] hidden dark:block" })
      ] }),
      /* @__PURE__ */ jsx(HamburgerMenu, {})
    ] }),
    /* @__PURE__ */ jsx(MobileMenu, { isDarkMode, setDarkMode, handleToggle })
  ] });
};

const Styles = ({ styles }) => {
  const $selectedStyle = useStore(selectedStyle);
  const [selectedButtonId, setSelectedButtonId] = useState();
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden pl-6", children: /* @__PURE__ */ jsx("ul", { className: "flex space-x-6 mt-10 overflow-x-auto pb-4", children: styles.map((style, key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => {
        if ($selectedStyle === style) selectedStyle.set(void 0);
        else selectedStyle.set(style);
        if (selectedButtonId === key) setSelectedButtonId(void 0);
        else setSelectedButtonId(key);
      },
      className: ` px-4 py-2 border-[#00000076] border-2 rounded-full dark:border-myDarkGray dark:text-myDarkText ${selectedButtonId === key ? "border-2 font-medium text-black border-black" : "border text-[#00000076]"} duration-100 transition-all `,
      children: style
    }
  ) })) }) });
};

const ZoomSvg = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "40px",
      height: "40px",
      viewBox: "0 0 56 56",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      xmlSpace: "preserve",
      children: [
        /* @__PURE__ */ jsx("g", { transform: "matrix(0.931234,0,0,0.931234,-3.27844,-3.06405)", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.582,33.5C5.582,20.34 5.582,13.76 9.67,9.672C13.759,5.583 20.339,5.583 33.499,5.583C46.659,5.583 53.239,5.583 57.327,9.672C61.415,13.76 61.415,20.34 61.415,33.5C61.415,46.66 61.415,53.24 57.327,57.328C53.239,61.417 46.659,61.417 33.499,61.417C20.339,61.417 13.759,61.417 9.67,57.328C5.582,53.24 5.582,46.66 5.582,33.5Z",
            style: {
              fill: "white",
              fillOpacity: 0,
              fillRule: "nonzero",
              stroke: "white",
              strokeWidth: "2.86px"
            }
          }
        ) }),
        /* @__PURE__ */ jsx("g", { transform: "matrix(1,0,0,1,-5.72567,-5.51136)", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M33.5,33.5L47.458,19.542M47.458,19.542L36.99,19.542M47.458,19.542L47.458,30.011",
            style: {
              fill: "none",
              fillRule: "nonzero",
              stroke: "white",
              strokeWidth: "2px",
              strokeLinecap: "round",
              strokeMiterlimit: 4
            }
          }
        ) }),
        /* @__PURE__ */ jsx("g", { transform: "matrix(1,0,0,1,-5.72567,-5.51136)", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M33.499,33.5L19.541,47.458M19.541,47.458L30.01,47.458M19.541,47.458L19.541,36.99",
            style: {
              fill: "none",
              fillRule: "nonzero",
              stroke: "white",
              strokeWidth: "2px",
              strokeLinecap: "round",
              strokeMiterlimit: 4
            }
          }
        ) })
      ]
    }
  );
};

const Gallery = ({ items }) => {
  const $selectedStyle = useStore(selectedStyle);
  const filteredItems = $selectedStyle ? items.filter((item) => item.itemStyle === $selectedStyle) : items;
  return /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-6 mt-6 lg:mt-14", children: filteredItems.map((item, key) => /* @__PURE__ */ jsxs("div", { className: " group w-full max-w-[350px] h-[350px] rounded-[30px] relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 right-3 flex justify-between items-center px-3", children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 rounded-full border-white text-white border-2", children: item.itemStyle }),
      /* @__PURE__ */ jsx("div", { className: "opacity-0 group-hover:opacity-100 duration-300 transition-opacity", children: /* @__PURE__ */ jsx(ZoomSvg, {}) })
    ] }),
    /* @__PURE__ */ jsx(Zoom, { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: item.itemPhotoUrl,
        alt: item.itemStyle,
        className: "w-full h-full object-cover rounded-[30px] mr-1"
      }
    ) })
  ] }, key)) });
};

const $$Astro = createAstro();
const $$Furnitures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Furnitures;
  const { title, description, background, styles, items } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body class="dark:bg-MyDarkBg"> <nav> ${renderComponent($$result, "Navbar", Navbar, { "furniturePage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Navbar", "client:component-export": "default" })} <div class="h-[127px]"></div> </nav> <main> <div class="flex w-full h-[400px] items-center justify-center"> <h1 class="text-white z-10 text-6xl font-light ">${title}</h1> <img src="/tables.png" class="w-full h-[400px] object-cover object-center absolute z-0"> </div> <div class="max-w-5xl mx-auto flex justify-start mt-20 flex-col space-y-10"> <h1 class="text-4xl font-light px-6 dark:text-myDarkText">Wybierz swój styl</h1> ${renderComponent($$result, "StylesButtons", Styles, { "styles": styles, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Styles", "client:component-export": "default" })} ${renderComponent($$result, "Gallery", Gallery, { "items": items, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/Gallery", "client:component-export": "default" })} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/layouts/Furnitures.astro", void 0);

const Bg = new Proxy({"src":"/_astro/furnitureBg.DPSrLcL2.png","width":3024,"height":874,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/furnitureBg.png";
							}
							
							return target[name];
						}
					});

export { $$Furnitures as $, Bg as B };

/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderHead, b as renderComponent } from '../chunks/astro/server_CbFEcOuk.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import { Squash } from 'hamburger-react';
import { $ as $$Footer } from '../chunks/Footer_DlloZPlM.mjs';
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const DarkThemeToggle = ({
  handleToggle,
  isDarkMode
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "flex border-2 dark:border-white \n  border-[#dedddd] rounded-[20px] p-0",
      onClick: () => handleToggle(!isDarkMode),
      children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1 p-1 pr-2 py-[5px] items-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute w-[22px] h-[22px] ml-[2px] bg-[#dedddd] z-[-1] dark:bg-[#ffffff76] 
        rounded-full transition-transform duration-100 
        ${!isDarkMode ? "translate-x-0" : "translate-x-[100%]"}`
          }
        ),
        /* @__PURE__ */ jsx(FiSun, { size: 18, color: !isDarkMode ? "#ffffff" : "#ffffff9" }),
        /* @__PURE__ */ jsx(FaRegMoon, { size: 18, color: !isDarkMode ? "#00000020" : "#ffffff" })
      ] })
    }
  );
};

const isMobileMenuOpen = atom(false);
atom(void 0);

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

const Logo = () => {
  return /* @__PURE__ */ jsxs("a", { href: "/", children: [
    /* @__PURE__ */ jsx("img", { src: "/images/Logo.png", className: "size-[4rem] block dark:hidden" }),
    /* @__PURE__ */ jsx("img", { src: "/LogoWhite.png", className: "size-[4rem] hidden dark:block" })
  ] });
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
  const sections = [
    {
      name: "HOME",
      path: "Hero",
      offset: 0
    },
    {
      name: "REALIZACJE",
      path: "Realizations",
      offset: -150
    },
    {
      name: "O NAS",
      path: "AboutUs",
      offset: -150
    },
    {
      name: "GALERIA",
      path: "Works",
      offset: -150
    },
    {
      name: "KONTAKT",
      path: "Contact",
      offset: 0
    }
  ];
  return /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx("div", { className: "w-full fixed bg-white dark:bg-myDarkLighterDark z-[100] hidden xl:flex", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `max-w-[2000px] mx-auto  py-4 flex w-[100%]  justify-between  
            px-10 items-center text-[#262626] font-extralight dark:text-white`,
        children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx(
            "ul",
            {
              className: `flex text-[1.2rem] space-x-16 font-extralight justify-between ${furniturePage === true ? "hidden" : ""}`,
              id: "navbar-links",
              children: sections.map((section, key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: section.path, className: "cursor-pointer hover:text-MyBrown", offset: section.offset, children: section.name }) }, key))
            }
          ),
          /* @__PURE__ */ jsx(DarkThemeToggle, { isDarkMode, handleToggle })
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

const $$Politykaprywatnosci = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pl" data-astro-cid-fez3wgu4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Polityka Prywatności</title>${renderHead()}</head> <body class="dark:bg-MyDarkBg flex flex-col justify-between h-screen" data-astro-cid-fez3wgu4> <nav data-astro-cid-fez3wgu4> ${renderComponent($$result, "Navbar", Navbar, { "furniturePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/HomePage/Navbar", "client:component-export": "default", "data-astro-cid-fez3wgu4": true })} <div class="h-[127px]" data-astro-cid-fez3wgu4></div> </nav> <main data-astro-cid-fez3wgu4> <div class="md:max-w-[1100px] flex flex-col mx-auto p-4" data-astro-cid-fez3wgu4> <h1 data-astro-cid-fez3wgu4>Polityka Prywatności</h1> <h2 data-astro-cid-fez3wgu4>1. Administrator danych</h2> <p data-astro-cid-fez3wgu4>Administratorem Twoich danych osobowych jest Szymon Komendera. Możesz skontaktować się ze mną pod adresem e-mail: [Twój e-mail].</p> <h2 data-astro-cid-fez3wgu4>2. Jakie dane zbieram?</h2> <p data-astro-cid-fez3wgu4>W ramach formularza kontaktowego zbieram wyłącznie Twój adres e-mail oraz treść wiadomości, którą do mnie wysyłasz.</p> <h2 data-astro-cid-fez3wgu4>3. W jakim celu przetwarzam Twoje dane?</h2> <p data-astro-cid-fez3wgu4>Twoje dane osobowe są przetwarzane wyłącznie w celu odpowiedzi na Twoją wiadomość. Nie wykorzystuję ich do celów marketingowych ani nie przekazuję ich osobom trzecim.</p> <h2 data-astro-cid-fez3wgu4>4. Podstawa prawna przetwarzania danych</h2> <p data-astro-cid-fez3wgu4>Podstawą prawną przetwarzania Twoich danych jest art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora, polegający na możliwości udzielenia odpowiedzi na Twoje zapytanie.</p> <h2 data-astro-cid-fez3wgu4>5. Jak długo przechowuję Twoje dane?</h2> <p data-astro-cid-fez3wgu4>Twoje dane są przechowywane wyłącznie przez okres niezbędny do udzielenia odpowiedzi na Twoją wiadomość, maksymalnie 3 miesiące od zakończenia korespondencji. Następnie zostają usunięte.</p> <h2 data-astro-cid-fez3wgu4>6. Komu przekazuję Twoje dane?</h2> <p data-astro-cid-fez3wgu4>Dane przesyłane za pomocą formularza kontaktowego są obsługiwane przez zewnętrznego dostawcę usługi – Web3Forms. Więcej informacji o przetwarzaniu danych przez Web3Forms znajdziesz w ich Polityce Prywatności.</p> <h2 data-astro-cid-fez3wgu4>7. Twoje prawa</h2> <p data-astro-cid-fez3wgu4>Masz prawo do:</p> <ul class="list-disc pl-5 pb-4" data-astro-cid-fez3wgu4> <li class="hover:text-black hover:cursor-default" data-astro-cid-fez3wgu4>dostępu do swoich danych,</li> <li class="hover:text-black hover:cursor-default" data-astro-cid-fez3wgu4>sprostowania danych,</li> <li class="hover:text-black hover:cursor-default" data-astro-cid-fez3wgu4>żądania usunięcia danych,</li> <li class="hover:text-black hover:cursor-default" data-astro-cid-fez3wgu4>wniesienia sprzeciwu wobec przetwarzania danych.</li> </ul> <p data-astro-cid-fez3wgu4>W celu realizacji swoich praw skontaktuj się ze mną pod adresem [Twój e-mail]. Jeśli uznasz, że Twoje dane są przetwarzane niezgodnie z prawem, masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.</p> <h2 data-astro-cid-fez3wgu4>8. Zmiany w Polityce Prywatności</h2> <p data-astro-cid-fez3wgu4>Zastrzegam sobie prawo do wprowadzenia zmian w niniejszej Polityce Prywatności, jeśli zajdzie taka potrzeba.</p> <p data-astro-cid-fez3wgu4><strong data-astro-cid-fez3wgu4>Data ostatniej aktualizacji:</strong> 12.03.2025</p> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-fez3wgu4": true })} </body></html>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/politykaprywatnosci.astro", void 0);

const $$file = "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/politykaprywatnosci.astro";
const $$url = "/politykaprywatnosci";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Politykaprywatnosci,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

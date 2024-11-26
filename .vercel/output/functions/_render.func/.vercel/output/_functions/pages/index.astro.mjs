/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, e as renderHead } from '../chunks/astro/server_B-4JLGML.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Image } from '../chunks/_astro_assets_DDeiRkJs.mjs';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import { Squash } from 'hamburger-react';
import { SlSocialFacebook } from 'react-icons/sl';
import { GoMail } from 'react-icons/go';
import { LuPhone } from 'react-icons/lu';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90%] md:max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function AboutDialog() {
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "text-MyBrown font-medium", children: "więcej" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "m:max-w-[600px]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "O nas" }),
        /* @__PURE__ */ jsx(DialogDescription, {})
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-justify", children: "Hebel Mebel to firma stolarska, która łączy tradycyjne rzemiosło z nowoczesnym designem. Od lat tworzymy wyjątkowe meble na wymiar, które łączą funkcjonalność, trwałość i estetykę. Nasza pasja do drewna i dbałość o detale sprawiają, że każdy projekt jest dopracowany w najmniejszym szczególe. Nasza misja to wnoszenie piękna do Twojego domu poprzez meble, które są nie tylko praktyczne, ale także odzwierciedlają Twoje potrzeby i styl życia. Pracujemy z najlepszymi materiałami i nowoczesnymi technologiami, ale zawsze z poszanowaniem tradycyjnych technik stolarskich. Dlaczego warto wybrać Hebel Mebel? Indywidualne podejście – każdy projekt dopasowujemy do Twoich oczekiwań. Jakość – tworzymy meble, które przetrwają pokolenia. Pasja – kochamy drewno i jego naturalne piękno. Realizujemy projekty zarówno dla klientów indywidualnych, jak i biznesowych. Od kuchni, przez garderoby, po meble biurowe – z nami każde wnętrze zyska niepowtarzalny charakter. Zapraszamy do współpracy i wspólnego tworzenia mebli, które będą świadectwem naszej pasji i Twojego stylu! Hebel Mebel – drewno w najlepszym wydaniu." })
    ] })
  ] });
}

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex md:flex-row flex-col max-w-[800px] mx-auto mt-44 justify-center items-center"> <div class="md:w-[50%] w-[80%] shadow-lg h-[400px] flex flex-col items-center justify-center text-2xl font-normal"> <h1 class="">Poznaj nas</h1> <h1>lepiej!</h1> <div class="h-[2px] w-[100px] bg-MyBrown mt-4 rounded-xl"></div> </div> <div class="md:w-[50%] w-[80%] flex flex-col justify-center items-center px-10 text-lg mt-0 md:mt-14 border-2 h-[400px] border-[#00000060]"> <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            "There is no one who  seeks after it and wants to have it, simply because it is pain...</p> <div class="mt-2">${renderComponent($$result, "AboutDialog", AboutDialog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/AboutDialog", "client:component-export": "AboutDialog" })}</div> </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/AboutUs.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg mx-auto w-[95%] h-[680px] flex items-center justify-center mt-[0rem] md:mt-[-2.6rem] md:rounded-[30px]" data-astro-cid-77h6hf3j> <h1 class="text-[5rem] text-white font-extralight text-center md:text-left" data-astro-cid-77h6hf3j>Hebel Mebel</h1> </div> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Hero.astro", void 0);

const $$Realizations = createComponent(($$result, $$props, $$slots) => {
  const realizations = [1, 2, 3, 4, 5, 6];
  return renderTemplate`${maybeRenderHead()}<div class="overflow-hidden "> <div class="text-center mt-20 "> <h1 class="text-4xl font-normal">Nasze realizacje</h1> <h4 class="text-MyBrown font-light text-2xl mt-2">nasze prace</h4> </div> <div class="w-full overflow-x-auto ml-6 sm:ml-0 pb-6"> <div class="grid grid-cols-[repeat(3,230px)] gap-4 auto-cols-[230px] mt-10 mx-auto" style="width: max-content;"> ${realizations.map((r) => renderTemplate`<div class="w-[230px] h-[230px] bg-gray-200"></div>`)} </div> </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Realizations.astro", void 0);

const WriteUsPic = new Proxy({"src":"/_astro/WriteUs.B8TQseps.png","width":3016,"height":684,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/WriteUs.png";
							}
							
							return target[name];
						}
					});

const WriteButton = ({ textColor }) => {
  return /* @__PURE__ */ jsx("button", { className: "z-10 mr-5", children: /* @__PURE__ */ jsx("div", { className: "hover:scale-110 duration-300 w-[142px] h-[52px] border-2 rounded-[10px] border-MyBrown ", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `hover:scale-105 w-[142px] h-[52px] flex items-center justify-center text-${textColor} rounded-[10px] border-2 border-MyBrown mt-[5px] ml-[5px]`,
      children: /* @__PURE__ */ jsx("h1", { className: "relative bottom-1 right-1", children: "Napisz" })
    }
  ) }) });
};

const $$WriteUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-[300px] bg-black w-full flex-col space-y-6 mt-32 flex items-center justify-center"> <h1 class="text-white text-4xl  z-10 mt-6 text-center">Zamów bezpłatną wycenę</h1> ${renderComponent($$result, "WriteButton", WriteButton, { "textColor": "white" })} <div class="w-full h-[330px] absolute bg-[#000000a9] z-[1]"></div> ${renderComponent($$result, "Image", $$Image, { "src": WriteUsPic, "alt": "Zam\xF3w darmow\u0105 wycen\u0119", "class": "md:object-fit object-cover absolute h-[330px] w-full" })} </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/WriteUs.astro", void 0);

const LogoPic = new Proxy({"src":"/_astro/Logo.wx4TSLIN.png","width":441,"height":442,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/Logo.png";
							}
							
							return target[name];
						}
					});

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center space-x-3"> ${renderComponent($$result, "Image", $$Image, { "src": LogoPic, "alt": "logo", "class": "w-[4rem] h-[4rem]" })} <div class="font-light"> <h1 class="text-2xl mt-3">Hebel Mebel</h1> <h2 class="text-lg md:text-center">Stolarstwo</h2> </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Logo.astro", void 0);

const isMobileMenuOpen = atom(false);

const HamburgerMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "hamburgerMenu z-10",
      onClick: () => {
        isMobileMenuOpen.set(!$isMobileMenuOpen);
      },
      children: /* @__PURE__ */ jsx(Squash, { size: 40 })
    }
  );
};

const MobileMenu = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  const sections = ["Galeria", "O Nas", "Meble", "Kontakt"];
  const selected = 0;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `absolute w-[60%] h-screen ml-auto bg-white flex justify-center items-center transition-transform ${$isMobileMenuOpen ? "translate-x-[0px]" : "translate-x-[-20rem]"} duration-500   mt-[-11vh]`,
      children: /* @__PURE__ */ jsx("ul", { id: "mobileMenu", className: "space-y-6 text-2xl relative py-6 flex justify-center items-start flex-col w-full", children: sections.map((section, key) => /* @__PURE__ */ jsx("li", { className: ` ${key === selected ? "bg-MyBrown" : ""} w-full py-2 px-10`, children: /* @__PURE__ */ jsx("a", { children: section }) }, key)) })
    }
  );
};

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class=" py-4 mx-auto items-center justify-center space-x-16 text-[1.4rem] hidden xl:flex" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a data-astro-cid-5blmo7yk>Galeria</a></li> <li data-astro-cid-5blmo7yk><a data-astro-cid-5blmo7yk>O Nas</a></li> <li data-astro-cid-5blmo7yk><a data-astro-cid-5blmo7yk>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-5blmo7yk": true })}</a></li> <li data-astro-cid-5blmo7yk><a data-astro-cid-5blmo7yk>Meble</a></li> <li data-astro-cid-5blmo7yk><a data-astro-cid-5blmo7yk>Kontakt</a></li> </ul> <div class="flex flex-col  xl:hidden mt-6 overflow-hidden" data-astro-cid-5blmo7yk> <div class="flex justify-between items-center px-6" data-astro-cid-5blmo7yk> <div class="hidden lg:block" data-astro-cid-5blmo7yk></div> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-5blmo7yk": true })} ${renderComponent($$result, "HamburgerMenu", HamburgerMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HamburgerMenu", "client:component-export": "default", "data-astro-cid-5blmo7yk": true })} </div> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/MobileMenu", "client:component-export": "default", "data-astro-cid-5blmo7yk": true })} </div> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Navbar.astro", void 0);

const $$Quote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:max-w-[450px] max-w-[300px] mx-auto py-32 text-2xl text-center"> <h1>Hebel w dłoni, mebel w sercu tworzymy, by drewno żyło wiecznie.</h1> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Quote.astro", void 0);

const $$Furnitures = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:max-w-[90%] mx-auto flex flex-col-reverse md:flex-row ml-auto "> <div class="md:w-[30%] w-full md:mt-24 mt-20 px-6"> <h1 class="text-3xl font-medium">Wybierz swój styl</h1> <h2 class="text-xl text-[#A7A3A3] mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit </h2> <button class="text-MyBrown mt-4 font-medium">Przeglądaj</button> </div> <div class="flex space-x-6 text-2xl overflow-x-scroll md:w-[70%] pb-8 md:mt-10 mx-6"> <div class="flex flex-col gap-y-8"> <div class="h-[400px] bg-gray-200 w-[300px]"></div> <h1>Stoły</h1> </div> <div class="flex flex-col gap-y-8"> <div class="h-[400px] bg-gray-200 w-[300px]"></div> <h1>Regały</h1> </div> <div class="flex flex-col gap-y-8"> <div class="h-[400px] bg-gray-200 w-[300px]"></div> <h1>Komody</h1> </div> <div class="flex flex-col gap-y-8"> <div class="h-[400px] bg-gray-200 w-[300px]"></div> <h1>Stoły</h1> </div> </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Furnitures.astro", void 0);

const $$Astro = createAstro();
const $$Stage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stage;
  const { title, stage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex border-b-2 border-gray-200 pb-3 space-x-5 w-full" data-astro-cid-c5o4azsb> <h1 data-astro-cid-c5o4azsb>${stage}</h1> <h2 data-astro-cid-c5o4azsb>${title}</h2> </div> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Stage.astro", void 0);

const $$Stages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[80%] flex flex-col md:flex-row md:max-w-[1000px] mx-auto  items-center md:mt-40 mt-28"> <div class="h-[500px] w-[360px] bg-gray-200 "></div> <div class=" flex flex-col space-y-8  md:w-[58%] md:ml-auto mt-16 mt:md-0"> ${renderComponent($$result, "Stage", $$Stage, { "stage": "01.", "title": "Darmowe konsultacje" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "02.", "title": "Projekt wed\u0142ug Twoich potrzeb" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "03.", "title": "Wykonanie" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "04.", "title": "Dostawa pod Tw\xF3j dom" })} </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Stages.astro", void 0);

const WoodTypes = () => {
  const title = "Dąb";
  const description = "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extralight", children: title }),
      /* @__PURE__ */ jsx("h2", { className: "text-MyLightGray px-4 md:px-0", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
        /* @__PURE__ */ jsx(Cube, {}),
        /* @__PURE__ */ jsx(Cube, {}),
        /* @__PURE__ */ jsx(Cube, {}),
        /* @__PURE__ */ jsx(Cube, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-[400px] h-[400px] bg-gray-200 md:ml-auto rounded-[30px]" })
  ] });
};
function Cube() {
  return /* @__PURE__ */ jsx("div", { className: "size-[80px] border-gray-100 border-2 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "size-[48px] bg-gray-200 rounded-[5px]" }) });
}

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row md:max-w-[900px] mx-auto md:mt-36 mt-24 max-w-[90%] "> <div class="flex-row mt-0 md:mt-0"> <div> <h1 class="text-xl">Napisz do nas</h1> <h2 class="text-MyLightGray my-2">Odpowiemy ci najszybciej jak to możliwe!</h2> <h1>hebelmebel@vp.pl</h1> </div> <div class="mt-6"> <h1 class="text-xl">Zadzwoń</h1> <h2 class="text-MyLightGray my-2">A wspólnie omówimy szczegóły</h2> <h1>789 483 925</h1> </div> <div class="mt-8 space-x-5 hidden md:flex"> ${renderComponent($$result, "SlSocialFacebook", SlSocialFacebook, { "size": 30 })} ${renderComponent($$result, "GoMail", GoMail, { "size": 30 })} ${renderComponent($$result, "LuPhone", LuPhone, { "size": 30 })} </div> </div> <div class="flex flex-col md:ml-auto w-[400px] mt-10 md:mt-0"> <div class="flex space-x-4 items-center  justify-between  "> <div> <h1 class="mb-2 text-lg">Email</h1> ${renderComponent($$result, "Input", Input, { "type": "email", "placeholder": "Tw\xF3jemail@gmail.com", "className": "md:w-[250px]" })} </div> <div class="mt-6"> ${renderComponent($$result, "WriteButton", WriteButton, { "textColor": "black" })} </div> </div> <h1 class="mt-4 mb-2 text-lg">Wiadomość</h1> ${renderComponent($$result, "Textarea", Textarea, { "placeholder": "Zapytaj mnie o produkt jaki cie interesuje", "className": "h-[200px] items-start text-start" })} </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[900px] mx-auto border-t-2 border-gray-200 flex flex-col px-4 pb-4 mt-16"> <div class="flex justify-between items-center mt-6"> ${renderComponent($$result, "Logo", $$Logo, {})} <div class="flex space-x-2"> <h1>Masz pytania?</h1> <h2 class="text-MyBrown border-b ">Napisz</h2> </div> </div> <div class="mt-6 flex justify-between"> <h1>© Hebel Mebel 2024</h1> <h1>Realizacja: Wiktor Dawid</h1> </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="favicon.png" type="image/png"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class=""> <header> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header> <main class="snap-y"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Realizations", $$Realizations, {})} ${renderComponent($$result, "WriteUs", $$WriteUs, {})} ${renderComponent($$result, "AboutUs", $$AboutUs, {})} ${renderComponent($$result, "Quote", $$Quote, {})} ${renderComponent($$result, "Furnitures", $$Furnitures, {})} ${renderComponent($$result, "Stages", $$Stages, {})} ${renderComponent($$result, "WoodTypes", WoodTypes, {})} ${renderComponent($$result, "Contact", $$Contact, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro", void 0);

const $$file = "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

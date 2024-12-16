/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as createAstro, b as renderHead } from '../chunks/astro/server_SVU_X31k.mjs';
import 'kleur/colors';
import { C as ContactForm, D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, $ as $$Footer } from '../chunks/Footer_Bf9Hhksp.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bsqnfyuo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const Bg = new Proxy({"src":"/_astro/Hero.CJLeVzRm.png","width":1146,"height":816,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/Hero.png";
							}
							
							return target[name];
						}
					});

const BgMobile = new Proxy({"src":"/_astro/HeroMobile.CnANPZZ7.png","width":1146,"height":816,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/HeroMobile.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-MyLightGray dark:bg-myDarkLighterDark h-screen lg:h-auto z-0 md:pt-[125px]"> <div class="grid md:grid-cols-2 bg-MyLightGray dark:bg-myDarkLighterDark items-center max-w-[1500px] h-full mx-auto "> <div class="flex flex-col justify-center items-center  "> ${renderComponent($$result, "Image", $$Image, { "src": BgMobile, "alt": "Main background", "class": " object-cover h-[490px] md:hidden" })} <div class=" mt-8  md:mt-0 flex flex-col z-10 justify-center items-center  h-[90%] w-full md:h-auto md:w-auto  px-6 md:items-start "> <h2 class="text-2xl  tracking-widest text-MyBrown  leading-0 ">STOLARSTWO</h2> <h1 class=" md:text-7xl text-6xl  md:text-black py-4 dark:text-white">Hebel Mebel</h1> <p class="md:text-MyGray dark:text-MyLightGray ">
Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br>
consectetur, adipisci velit..."
                    "There is no one who loves pain itself, <br> who seeks after it
</p> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": Bg, "alt": "Main bg", "class": "ml-auto object-cover h-[700px] hidden md:flex" })} </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Hero.astro", void 0);

const realizations = ["/images/Realization-1.jpg", "/images/Realization-2.jpg", "/images/Realization-3.webp"];
const Realizations = () => {
  const [hoveredRealization, setHoveredRealization] = useState(null);
  return /* @__PURE__ */ jsx("section", { id: "Realizations", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center xl:mt-28 mt-14", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extralight dark:text-myDarkText", children: "Nasze realizacje" }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex mt-20 overflow-hidden max-w-[1200px]  justify-center items-center ", children: realizations.map((realization, key) => /* @__PURE__ */ jsx(
      "img",
      {
        src: realization,
        alt: "Realization1 text",
        onMouseEnter: () => setHoveredRealization(key),
        onMouseLeave: () => setHoveredRealization(null),
        className: `${hoveredRealization !== null && hoveredRealization === key ? "md:w-[600px] w-[80%]" : "lg:w-[300px] w-[150px]"} 
                ${hoveredRealization === null ? "w-[33%] lg:w-[400px]" : ""} 
                bg-gray-400 md:h-[800px] h-[600px] transition-all duration-300 object-cover`
      },
      key
    )) })
  ] }) });
};

const $$WriteUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-20 max-w-2xl justify-between mx-auto lg:flex-row  flex items-center flex-col px-4 gap-y-10"> <h1 class=" text-3xl  z-10 text-center text-black dark:text-myDarkText">Napisz po bezpłatną wycenę</h1> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/ContactForm", "client:component-export": "ContactForm" })} </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/WriteUs.astro", void 0);

function AboutDialog() {
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: "text-MyBrown font-medium", children: "więcej" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "m:max-w-[600px] dark:bg-myDarkSemiGray", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "O nas" }),
        /* @__PURE__ */ jsx(DialogDescription, {})
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-justify dark:text-white overflow-y-scroll h-[400px] px-4 ", children: "Hebel Mebel to firma stolarska, która łączy tradycyjne rzemiosło z nowoczesnym designem. Od lat tworzymy wyjątkowe meble na wymiar, które łączą funkcjonalność, trwałość i estetykę. Nasza pasja do drewna i dbałość o detale sprawiają, że każdy projekt jest dopracowany w najmniejszym szczególe. Nasza misja to wnoszenie piękna do Twojego domu poprzez meble, które są nie tylko praktyczne, ale także odzwierciedlają Twoje potrzeby i styl życia. Pracujemy z najlepszymi materiałami i nowoczesnymi technologiami, ale zawsze z poszanowaniem tradycyjnych technik stolarskich. Dlaczego warto wybrać Hebel Mebel? Indywidualne podejście – każdy projekt dopasowujemy do Twoich oczekiwań. Jakość – tworzymy meble, które przetrwają pokolenia. Pasja – kochamy drewno i jego naturalne piękno. Realizujemy projekty zarówno dla klientów indywidualnych, jak i biznesowych. Od kuchni, przez garderoby, po meble biurowe – z nami każde wnętrze zyska niepowtarzalny charakter. Zapraszamy do współpracy i wspólnego tworzenia mebli, które będą świadectwem naszej pasji i Twojego stylu! Hebel Mebel – drewno w najlepszym wydaniu." })
    ] })
  ] });
}

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="AboutUs" data-astro-cid-kea6nkqi> <div class="flex lg:flex-row flex-col max-w-[900px] mx-auto justify-center items-center dark:text-white" data-astro-cid-kea6nkqi> <div class="w-[350px] h-[350px]    shadow-lg dark:shadow-MyBrown  flex flex-col items-center justify-center text-2xl font-normal " data-astro-cid-kea6nkqi> <h1 class="" data-astro-cid-kea6nkqi>Poznaj nas</h1> <h1 class="border-b-[2px] border-MyBrown pb-4" data-astro-cid-kea6nkqi>lepiej!</h1> </div> <div class="  rounded-[6px]  
          flex text-lg mt-0 lg:mt-14   " data-astro-cid-kea6nkqi> <div id="borderAnimation" data-astro-cid-kea6nkqi></div> <div class="z-10 ml-1 mt-1 rounded-[10px] bg-white dark:bg-myDarkSemiGray w-[350px] h-[350px] flex items-center flex-col justify-center px-10" data-astro-cid-kea6nkqi> <p data-astro-cid-kea6nkqi>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                "There is no one who  seeks after it and wants to have it, simply because it is pain...</p> <div class="mt-2" data-astro-cid-kea6nkqi>${renderComponent($$result, "AboutDialog", AboutDialog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/AboutDialog", "client:component-export": "AboutDialog", "data-astro-cid-kea6nkqi": true })}</div> </div> </div> </div> </section> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/AboutUs.astro", void 0);

const $$Quote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:max-w-[450px] max-w-[300px] mx-auto py-32 text-2xl text-center dark:text-myDarkText"> <h1>Hebel w dłoni, mebel w sercu tworzymy, by drewno żyło wiecznie.</h1> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Quote.astro", void 0);

const Tables = new Proxy({"src":"/_astro/Tables.C_T2hCZp.jpg","width":1000,"height":910,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/Tables.jpg";
							}
							
							return target[name];
						}
					});

const Dresser = new Proxy({"src":"/_astro/dresser.Dqqk__Wc.jpg","width":600,"height":898,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/dresser.jpg";
							}
							
							return target[name];
						}
					});

const Rack = new Proxy({"src":"/_astro/Rack.CxXP-mln.jpg","width":894,"height":894,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/Rack.jpg";
							}
							
							return target[name];
						}
					});

const $$Furnitures = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Furnitures"> <div class="md:max-w-6xl mx-auto flex flex-col-reverse md:flex-row ml-auto "> <div class="md:w-[30%] w-full md:mt-24 mt-20 px-6"> <h1 class="text-3xl font-medium dark:text-myDarkText">Wybierz swój styl</h1> <h2 class="text-xl text-[#A7A3A3] mt-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit </h2> <button class="text-MyBrown mt-4 font-medium">Przeglądaj</button> </div> <div id="Furnitures" class="flex space-x-6 text-2xl overflow-x-scroll md:w-[70%] pb-8 md:mt-10 mx-6 dark:text-myDarkText"> <a href="/tables" class="flex flex-col gap-y-8 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": Tables, "alt": "Tables", "class": "w-[300px] h-[400px] object-cover " })} <h1>Stoły</h1> </a> <a href="/racks" class="flex flex-col gap-y-8 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": Rack, "alt": "Tables", "class": "w-[300px] h-[400px] object-cover " })} <h1>Regały</h1> </a> <a href="/dressers" class="flex flex-col gap-y-8 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": Dresser, "alt": "Tables", "class": "w-[300px] h-[400px] object-cover " })} <h1>Komody</h1> </a> <a href="/wardrobes" class="flex flex-col gap-y-8 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": Tables, "alt": "Tables", "class": "w-[300px] h-[400px] object-cover " })} <h1>Szafy</h1> </a> </div> </div> </section>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Furnitures.astro", void 0);

const $$Astro = createAstro();
const $$Stage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stage;
  const { title, stage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex border-b-2 border-gray-200 pb-3 space-x-5 w-full" data-astro-cid-c5o4azsb> <h1 data-astro-cid-c5o4azsb>${stage}</h1> <h2 class="dark:text-myDarkText text-[#0000008e] text-[1.5rem]" data-astro-cid-c5o4azsb>${title}</h2> </div> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Stage.astro", void 0);

const StagesPic = new Proxy({"src":"/_astro/stages.BUx2XSP8.jpg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/stages.jpg";
							}
							
							return target[name];
						}
					});

const $$Stages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[80%] flex flex-col lg:flex-row lg:max-w-[1000px] mx-auto  items-center lg:mt-40 mt-28"> <!-- <div class="h-[500px] w-[360px] bg-gray-200 "></div> --> ${renderComponent($$result, "Image", $$Image, { "src": StagesPic, "alt": "stages pic", "class": "h-[500px] w-[360px] bg-gray-200 object-center object-cover" })} <div class=" flex flex-col space-y-8  lg:w-[58%] lg:ml-auto mt-16 lg:mt-1"> ${renderComponent($$result, "Stage", $$Stage, { "stage": "01.", "title": "Darmowe konsultacje" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "02.", "title": "Projekt wed\u0142ug Twoich potrzeb" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "03.", "title": "Wykonanie" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "04.", "title": "Dostawa pod Tw\xF3j dom" })} </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Stages.astro", void 0);

const WoodTypes = () => {
  const woods = [
    {
      name: "Dąb",
      description: "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.",
      img: "/images/Oak.webp"
    },
    {
      name: "Jesion",
      description: "Jesion to twarde i elastyczne drewno o jasnej barwie i wyraźnym rysunku słojów. Jest cenione w produkcji mebli i elementów konstrukcyjnych ze względu na trwałość i łatwość obróbki.",
      img: "/images/Ash.jpg"
    },
    {
      name: "Orzech",
      description: "Drewno orzechowe jest cenione za swoją twardość, gęstość i charakterystyczny, ciemnobrązowy kolor z wyraźnym usłojeniem. Jest popularne w produkcji mebli, rzeźbie oraz wykończeniu wnętrz, charakteryzując się eleganckim ",
      img: "/images/Nut.jpg"
    },
    {
      name: "Sosna",
      description: "Drewno sosnowe jest lekkie, elastyczne i łatwe do obróbki, co sprawia, że jest popularne w budownictwie i produkcji mebli. Charakteryzuje się jasną barwą i widocznymi słojami, a także ma przyjemny, naturalny zapach.",
      img: "/images/Pine.webp"
    }
  ];
  const [selectedWood, setSelectedWood] = useState(woods[0]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extralight dark:text-myDarkText", children: selectedWood.name }),
      /* @__PURE__ */ jsx("h2", { className: "text-MyGray px-4 md:px-0 h-[150px]", children: selectedWood.description }),
      " ",
      /* @__PURE__ */ jsx("div", { className: "flex space-x-1", children: woods.map((wood, index) => /* @__PURE__ */ jsx(Cube, { img: wood.img, setWood: () => setSelectedWood(wood) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-gray-200 md:ml-auto rounded-[30px] mx-auto", children: /* @__PURE__ */ jsx("img", { src: selectedWood.img, alt: selectedWood.name, className: "w-full h-full object-cover rounded-[30px]" }) })
  ] });
};
function Cube({ img, setWood }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-[80px] h-[80px] border-gray-100 dark:border-[#e0e0e09a] border-2 flex items-center justify-center cursor-pointer",
      onMouseEnter: setWood,
      onClick: setWood,
      children: /* @__PURE__ */ jsx("img", { src: img, alt: "Wood type", className: "w-[48px] h-[48px] object-cover" })
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="favicon.png" type="image/png"><link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> <header> ${renderComponent($$result, "Navbar", null, { "client:only": "react", "furniturePage": false, "client:component-hydration": "only", "client:component-path": "@/components/Navbar.tsx", "client:component-export": "default" })} </header> <main class="snap-y dark:bg-MyDarkBg "> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Realizations", Realizations, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Realizations.tsx", "client:component-export": "default" })} ${renderComponent($$result, "WriteUs", $$WriteUs, {})} ${renderComponent($$result, "AboutUs", $$AboutUs, {})} ${renderComponent($$result, "Quote", $$Quote, {})} ${renderComponent($$result, "Furnitures", $$Furnitures, {})} ${renderComponent($$result, "WoodTypes", WoodTypes, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/HomePage/WoodTypes", "client:component-export": "default" })} ${renderComponent($$result, "Stages", $$Stages, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </main>  </body></html>`;
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

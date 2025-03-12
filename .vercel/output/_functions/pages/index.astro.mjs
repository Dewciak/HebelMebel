/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, e as createAstro, a as renderHead, f as renderScript } from '../chunks/astro/server_CbFEcOuk.mjs';
import 'kleur/colors';
import { C as ContactForm, D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, $ as $$Footer } from '../chunks/Footer_DlloZPlM.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_TWu2PFnY.mjs';
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
  return renderTemplate`${maybeRenderHead()}<section id="Hero" class="w-full  dark:bg-myDarkLighterDark h-screen lg:h-auto z-0 md:pt-[70px] md:bg-MyLightGray"> <div class="grid md:grid-cols-2  dark:bg-myDarkLighterDark items-center max-w-[1500px] h-full mx-auto "> <div class="flex flex-col justify-center items-center  "> ${renderComponent($$result, "Image", $$Image, { "src": BgMobile, "alt": "", "class": " object-cover h-[490px] md:hidden" })} <!-- Mobile background --> <div class=" mt-8  md:mt-0 flex flex-col z-10 justify-center items-center  h-[90%] w-full md:h-auto md:w-auto  px-6 md:items-start "> <h1 class="text-2xl  tracking-widest text-MyBrown">STOLARSTWO</h1> <h2 class=" md:text-7xl text-6xl  md:text-black py-4 dark:text-white">Hebel Mebel</h2> <p class="md:text-MyGray dark:text-MyLightGray max-w-[450px]">
Projektujemy i wykonujemy meble, które łączą w sobie tradycyjne rzemiosło, nowoczesny styl oraz pełną personalizację, aby idealnie pasowały do Twojej przestrzeni.
</p> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": Bg, "alt": "", "class": "ml-auto object-cover h-[700px] hidden md:flex" })} <!-- Desktop background needs to not be in the same column as mobile --> </div> </section>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Hero.astro", void 0);

const Realizations = () => {
  const realizations = ["/images/Realization-1.jpg", "/images/Realization-2.jpg", "/images/Realization-3.webp"];
  const [hoveredRealization, setHoveredRealization] = useState(null);
  return /* @__PURE__ */ jsx("section", { id: "Realizations", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center xl:mt-28 mt-14", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-extralight dark:text-myDarkText", children: "Nasze realizacje" }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex mt-20 overflow-hidden max-w-[1200px]  justify-center items-center ", children: realizations.map((realization, key) => /* @__PURE__ */ jsx(
      "img",
      {
        src: realization,
        alt: "",
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
          flex text-lg mt-0 lg:mt-14   " data-astro-cid-kea6nkqi> <div id="borderAnimation" data-astro-cid-kea6nkqi></div> <div class="z-10 ml-1 mt-1 rounded-[10px] bg-white dark:bg-myDarkSemiGray w-[350px] h-[350px] flex items-center flex-col justify-center px-10" data-astro-cid-kea6nkqi> <p data-astro-cid-kea6nkqi>Hebel Mebel to firma, która tworzy meble z prawdziwą duszą. Łączymy tradycyjne techniki stolarskie  ...</p> <div class="mt-2" data-astro-cid-kea6nkqi>${renderComponent($$result, "AboutDialog", AboutDialog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/AboutDialog", "client:component-export": "AboutDialog", "data-astro-cid-kea6nkqi": true })}</div> </div> </div> </div> </section> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/AboutUs.astro", void 0);

const $$Quote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="md:max-w-[450px] max-w-[300px] mx-auto py-32 text-2xl text-center dark:text-myDarkText"> <h1>Hebel w dłoni, mebel w sercu tworzymy, by drewno żyło wiecznie.</h1> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Quote.astro", void 0);

const RTV = new Proxy({"src":"/_astro/rtv.B21oUIO2.webp","width":700,"height":933,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/rtv.webp";
							}
							
							return target[name];
						}
					});

const Desk = new Proxy({"src":"/_astro/desk.8fvbTm5p.jpeg","width":1080,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/desk.jpeg";
							}
							
							return target[name];
						}
					});

const DinningDesk = new Proxy({"src":"/_astro/stół5.Cv6DK2op.jpeg","width":1536,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/stół5.jpeg";
							}
							
							return target[name];
						}
					});

const WineRack = new Proxy({"src":"/_astro/wine.D6xfxOPh.jpg","width":599,"height":799,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/wine.jpg";
							}
							
							return target[name];
						}
					});

const $$Works = createComponent(($$result, $$props, $$slots) => {
  const furnitures = [
    {
      name: "St\xF3\u0142 do jadalni",
      img: DinningDesk,
      alt: "St\xF3\u0142 do jadalni"
    },
    {
      name: "Stojak na wino",
      img: WineRack,
      alt: "Stojak na wino"
    },
    {
      name: "Biurko elektryczne",
      img: Desk,
      alt: "Biurko elektryczne"
    },
    {
      name: "Komoda RTV",
      img: RTV,
      alt: "Komoda RTV"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="Works"> <div class="md:max-w-6xl mx-auto flex flex-col md:flex-row ml-auto "> <div class="md:w-[30%] w-full md:mt-24 mb-20 px-6"> <h1 class="text-3xl font-medium dark:text-myDarkText">Galeria</h1> <h2 class="text-xl text-[#A7A3A3] mt-5">Zdjęcia naszych ostatnich wyrobów od naszych klientów </h2> </div> <div id="Works" class="flex space-x-6 text-2xl overflow-x-scroll md:w-[70%] pb-6 md:mt-10 mx-6 dark:text-myDarkText"> ${furnitures.map((furniture, key) => renderTemplate`<div class="flex flex-col gap-y-8 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": furniture.img, "alt": furniture.alt, "class": "w-[300px] h-[400px] object-cover " })}  </div>`)} </div> </div> </section>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Works.astro", void 0);

const $$Astro = createAstro();
const $$Stage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stage;
  const { title, stage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex border-b-2 border-gray-200 pb-3 space-x-5 w-full" data-astro-cid-c5o4azsb> <h1 data-astro-cid-c5o4azsb>${stage}</h1> <h2 class="dark:text-myDarkText text-[#0000008e] text-[1.5rem]" data-astro-cid-c5o4azsb>${title}</h2> </div> `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Stage.astro", void 0);

const StagesPic = new Proxy({"src":"/_astro/stół2.D-RabY8Z.jpeg","width":1531,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/stół2.jpeg";
							}
							
							return target[name];
						}
					});

const $$Stages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[80%] flex flex-col lg:flex-row lg:max-w-[1000px] mx-auto  items-center lg:mt-40 mt-28 lg:pb-32 pb-20"> <!-- <div class="h-[500px] w-[360px] bg-gray-200 "></div> --> ${renderComponent($$result, "Image", $$Image, { "src": StagesPic, "alt": "stages pic", "class": "h-[500px] w-[360px] bg-gray-200 object-center object-cover" })} <div class=" flex flex-col space-y-8  lg:w-[58%] lg:ml-auto mt-16 lg:mt-1"> ${renderComponent($$result, "Stage", $$Stage, { "stage": "01.", "title": "Darmowe konsultacje" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "02.", "title": "Projekt wed\u0142ug Twoich potrzeb" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "03.", "title": "Wykonanie" })} ${renderComponent($$result, "Stage", $$Stage, { "stage": "04.", "title": "Dostawa pod Tw\xF3j dom" })} </div> </div>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Stages.astro", void 0);

const WoodTypes = () => {
  const woods = [
    {
      name: "Dąb",
      description: "Jedno z najbardziej cenionych gatunków drewna, charakteryzujące się wysoką trwałością, eleganckim wyglądem oraz wyrazistym usłojeniem. Idealny wybór do produkcji mebli, łączący naturalne piękno z funkcjonalnością.",
      img: "/images/Oak.jpg"
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
    },
    {
      name: "Buk",
      description: "Drewno bukowe to twardy i wytrzymały materiał o ciepłej, złocisto-beżowej barwie. Jego gładka struktura świetnie sprawdza się w produkcji mebli i dekoracji, dodając wnętrzom elegancji i przytulności.",
      img: "/images/Beech.jpg"
    },
    {
      name: "Brzoza",
      description: "Brzozowe drewno to subtelny, jasny odcień, który wnosi do wnętrza świeżość i naturalną elegancję. Jego kremowe tony, przełamane delikatnymi, ciepłymi akcentami, doskonale rozświetlają przestrzeń, nadając jej lekkość i przytulność.",
      img: "/images/Birch.jpg"
    }
  ];
  const [selectedWood, setSelectedWood] = useState(woods[0]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse md:flex-row md:max-w-[900px] mx-auto md:mt-40 mt-28 px-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-[50%] space-y-6 mt-16 flex items-center justify-center md:items-start md:justify-start flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extralight dark:text-myDarkText", children: selectedWood.name }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-0 gap-2 ", children: woods.map((wood, index) => /* @__PURE__ */ jsx(Wood, { img: wood.img, setWood: () => setSelectedWood(wood) }, index)) }),
      /* @__PURE__ */ jsx("h2", { className: "text-MyGray px-4 md:px-0 h-[150px]", children: selectedWood.description }),
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-gray-200 md:ml-auto rounded-[30px] mx-auto", children: /* @__PURE__ */ jsx("img", { src: selectedWood.img, alt: selectedWood.name, className: "w-full h-full object-cover rounded-[30px]" }) })
  ] });
};
function Wood({ img, setWood }) {
  return /* @__PURE__ */ jsx("div", { onMouseEnter: setWood, onClick: setWood, children: /* @__PURE__ */ jsx("img", { src: img, alt: "Wood type", className: "w-[40px] h-[40px] object-cover rounded-full cursor-pointer" }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="pl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="favicon.png" type="image/png"><link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100;200;300;400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", null, { "client:only": "react", "furniturePage": false, "client:component-hydration": "only", "client:component-path": "@/components/HomePage/Navbar.tsx", "client:component-export": "default" })} <main class="snap-y dark:bg-MyDarkBg  "> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Realizations", Realizations, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Realizations.tsx", "client:component-export": "default" })} ${renderComponent($$result, "WriteUs", $$WriteUs, {})} ${renderComponent($$result, "AboutUs", $$AboutUs, {})} ${renderComponent($$result, "Quote", $$Quote, {})} ${renderComponent($$result, "Works", $$Works, {})} ${renderComponent($$result, "WoodTypes", WoodTypes, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/HomePage/WoodTypes", "client:component-export": "default" })} ${renderComponent($$result, "Stages", $$Stages, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
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

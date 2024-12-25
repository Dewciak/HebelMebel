/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderScript } from '../chunks/astro/server_PvjFaDoH.mjs';
import 'kleur/colors';
import { $ as $$Furnitures, B as Bg } from '../chunks/furnitureBg_mocIa49I.mjs';
export { renderers } from '../renderers.mjs';

const $$Racks = createComponent(($$result, $$props, $$slots) => {
  const title = "Rega\u0142y";
  const description = "Rega\u0142y";
  const background = Bg;
  const styles = ["Modern", "Loft", "Industrialny", "Skandynawski"];
  const items = [
    {
      itemStyle: "Loft",
      itemPhotoUrl: "/images/table1.png"
    },
    {
      itemStyle: "Modern",
      itemPhotoUrl: "/images/table1.png"
    },
    {
      itemStyle: "Skandynawski",
      itemPhotoUrl: "/images/table1.png"
    },
    {
      itemStyle: "Loft",
      itemPhotoUrl: "/images/table1.png"
    },
    {
      itemStyle: "Industrialny",
      itemPhotoUrl: "/images/table1.png"
    }
  ];
  return renderTemplate`<!-- komody -->${renderComponent($$result, "Furnitures", $$Furnitures, { "title": title, "description": description, "background": background, "styles": styles, "items": items })} ${renderScript($$result, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/racks.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/racks.astro", void 0);

const $$file = "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/racks.astro";
const $$url = "/racks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Racks,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

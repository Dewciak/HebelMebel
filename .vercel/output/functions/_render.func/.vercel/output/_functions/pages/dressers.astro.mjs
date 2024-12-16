/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_SVU_X31k.mjs';
import 'kleur/colors';
import { $ as $$Furnitures, B as Bg } from '../chunks/furnitureBg_DClIw9P2.mjs';
export { renderers } from '../renderers.mjs';

const $$Dressers = createComponent(($$result, $$props, $$slots) => {
  const title = "Komody";
  const description = "Komody";
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
  return renderTemplate`<!-- komody -->${renderComponent($$result, "Furnitures", $$Furnitures, { "title": title, "description": description, "background": background, "styles": styles, "items": items })} `;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/dressers.astro", void 0);

const $$file = "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/dressers.astro";
const $$url = "/dressers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dressers,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

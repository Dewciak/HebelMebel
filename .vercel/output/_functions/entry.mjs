import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C-pIrjvh.mjs';
import { manifest } from './manifest_IBPdBR0A.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/dressers.astro.mjs');
const _page2 = () => import('./pages/racks.astro.mjs');
const _page3 = () => import('./pages/tables.astro.mjs');
const _page4 = () => import('./pages/wardrobes.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dressers.astro", _page1],
    ["src/pages/racks.astro", _page2],
    ["src/pages/tables.astro", _page3],
    ["src/pages/wardrobes.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3a7a342b-1169-4916-95c2-128024c60c92",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

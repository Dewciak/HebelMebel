import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_s25PaP-0.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_SVU_X31k.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/wiktordawid/Desktop/HebelMebel/HebelMebel/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){localStorage.getItem(\"darkMode\")===\"true\"?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\")});\n"}],"styles":[{"type":"external","src":"/_astro/dressers.Y8h65Mi1.css"},{"type":"inline","content":"[data-rmiz-ghost]{position:absolute;pointer-events:none}[data-rmiz-btn-zoom],[data-rmiz-btn-unzoom]{background-color:#000000b3;border-radius:50%;border:none;box-shadow:0 0 1px #ffffff80;color:#fff;height:40px;margin:0;outline-offset:2px;padding:9px;touch-action:manipulation;width:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-rmiz-btn-zoom]:not(:focus):not(:active){position:absolute;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;pointer-events:none;white-space:nowrap;width:1px}[data-rmiz-btn-zoom]{position:absolute;inset:10px 10px auto auto;cursor:zoom-in}[data-rmiz-btn-unzoom]{position:absolute;inset:20px 20px auto auto;cursor:zoom-out;z-index:1}[data-rmiz-content=found] img,[data-rmiz-content=found] svg,[data-rmiz-content=found] [role=img],[data-rmiz-content=found] [data-zoom]{cursor:zoom-in}[data-rmiz-modal]::backdrop{display:none}[data-rmiz-modal][open]{position:fixed;width:100vw;width:100dvw;height:100vh;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:hidden}[data-rmiz-modal-overlay]{position:absolute;inset:0;transition:background-color .3s}[data-rmiz-modal-overlay=hidden]{background-color:#fff0}[data-rmiz-modal-overlay=visible]{background-color:#fff}[data-rmiz-modal-content]{position:relative;width:100%;height:100%}[data-rmiz-modal-img]{position:absolute;cursor:zoom-out;image-rendering:high-quality;transform-origin:top left;transition:transform .3s}@media (prefers-reduced-motion: reduce){[data-rmiz-modal-overlay],[data-rmiz-modal-img]{transition-duration:.01ms!important}}\n"},{"type":"external","src":"/_astro/dressers.D1ysCNtS.css"}],"routeData":{"route":"/dressers","isIndex":false,"type":"page","pattern":"^\\/dressers\\/?$","segments":[[{"content":"dressers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dressers.astro","pathname":"/dressers","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){localStorage.getItem(\"darkMode\")===\"true\"?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\")});\n"}],"styles":[{"type":"external","src":"/_astro/dressers.Y8h65Mi1.css"},{"type":"inline","content":"[data-rmiz-ghost]{position:absolute;pointer-events:none}[data-rmiz-btn-zoom],[data-rmiz-btn-unzoom]{background-color:#000000b3;border-radius:50%;border:none;box-shadow:0 0 1px #ffffff80;color:#fff;height:40px;margin:0;outline-offset:2px;padding:9px;touch-action:manipulation;width:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-rmiz-btn-zoom]:not(:focus):not(:active){position:absolute;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;pointer-events:none;white-space:nowrap;width:1px}[data-rmiz-btn-zoom]{position:absolute;inset:10px 10px auto auto;cursor:zoom-in}[data-rmiz-btn-unzoom]{position:absolute;inset:20px 20px auto auto;cursor:zoom-out;z-index:1}[data-rmiz-content=found] img,[data-rmiz-content=found] svg,[data-rmiz-content=found] [role=img],[data-rmiz-content=found] [data-zoom]{cursor:zoom-in}[data-rmiz-modal]::backdrop{display:none}[data-rmiz-modal][open]{position:fixed;width:100vw;width:100dvw;height:100vh;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:hidden}[data-rmiz-modal-overlay]{position:absolute;inset:0;transition:background-color .3s}[data-rmiz-modal-overlay=hidden]{background-color:#fff0}[data-rmiz-modal-overlay=visible]{background-color:#fff}[data-rmiz-modal-content]{position:relative;width:100%;height:100%}[data-rmiz-modal-img]{position:absolute;cursor:zoom-out;image-rendering:high-quality;transform-origin:top left;transition:transform .3s}@media (prefers-reduced-motion: reduce){[data-rmiz-modal-overlay],[data-rmiz-modal-img]{transition-duration:.01ms!important}}\n"},{"type":"external","src":"/_astro/dressers.D1ysCNtS.css"}],"routeData":{"route":"/racks","isIndex":false,"type":"page","pattern":"^\\/racks\\/?$","segments":[[{"content":"racks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/racks.astro","pathname":"/racks","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){localStorage.getItem(\"darkMode\")===\"true\"?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\")});\n"}],"styles":[{"type":"external","src":"/_astro/dressers.Y8h65Mi1.css"},{"type":"inline","content":"[data-rmiz-ghost]{position:absolute;pointer-events:none}[data-rmiz-btn-zoom],[data-rmiz-btn-unzoom]{background-color:#000000b3;border-radius:50%;border:none;box-shadow:0 0 1px #ffffff80;color:#fff;height:40px;margin:0;outline-offset:2px;padding:9px;touch-action:manipulation;width:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-rmiz-btn-zoom]:not(:focus):not(:active){position:absolute;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;pointer-events:none;white-space:nowrap;width:1px}[data-rmiz-btn-zoom]{position:absolute;inset:10px 10px auto auto;cursor:zoom-in}[data-rmiz-btn-unzoom]{position:absolute;inset:20px 20px auto auto;cursor:zoom-out;z-index:1}[data-rmiz-content=found] img,[data-rmiz-content=found] svg,[data-rmiz-content=found] [role=img],[data-rmiz-content=found] [data-zoom]{cursor:zoom-in}[data-rmiz-modal]::backdrop{display:none}[data-rmiz-modal][open]{position:fixed;width:100vw;width:100dvw;height:100vh;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:hidden}[data-rmiz-modal-overlay]{position:absolute;inset:0;transition:background-color .3s}[data-rmiz-modal-overlay=hidden]{background-color:#fff0}[data-rmiz-modal-overlay=visible]{background-color:#fff}[data-rmiz-modal-content]{position:relative;width:100%;height:100%}[data-rmiz-modal-img]{position:absolute;cursor:zoom-out;image-rendering:high-quality;transform-origin:top left;transition:transform .3s}@media (prefers-reduced-motion: reduce){[data-rmiz-modal-overlay],[data-rmiz-modal-img]{transition-duration:.01ms!important}}\n"},{"type":"external","src":"/_astro/dressers.D1ysCNtS.css"}],"routeData":{"route":"/tables","isIndex":false,"type":"page","pattern":"^\\/tables\\/?$","segments":[[{"content":"tables","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tables.astro","pathname":"/tables","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){localStorage.getItem(\"darkMode\")===\"true\"?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\")});\n"}],"styles":[{"type":"external","src":"/_astro/dressers.Y8h65Mi1.css"},{"type":"inline","content":"[data-rmiz-ghost]{position:absolute;pointer-events:none}[data-rmiz-btn-zoom],[data-rmiz-btn-unzoom]{background-color:#000000b3;border-radius:50%;border:none;box-shadow:0 0 1px #ffffff80;color:#fff;height:40px;margin:0;outline-offset:2px;padding:9px;touch-action:manipulation;width:40px;-webkit-appearance:none;-moz-appearance:none;appearance:none}[data-rmiz-btn-zoom]:not(:focus):not(:active){position:absolute;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;pointer-events:none;white-space:nowrap;width:1px}[data-rmiz-btn-zoom]{position:absolute;inset:10px 10px auto auto;cursor:zoom-in}[data-rmiz-btn-unzoom]{position:absolute;inset:20px 20px auto auto;cursor:zoom-out;z-index:1}[data-rmiz-content=found] img,[data-rmiz-content=found] svg,[data-rmiz-content=found] [role=img],[data-rmiz-content=found] [data-zoom]{cursor:zoom-in}[data-rmiz-modal]::backdrop{display:none}[data-rmiz-modal][open]{position:fixed;width:100vw;width:100dvw;height:100vh;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:hidden}[data-rmiz-modal-overlay]{position:absolute;inset:0;transition:background-color .3s}[data-rmiz-modal-overlay=hidden]{background-color:#fff0}[data-rmiz-modal-overlay=visible]{background-color:#fff}[data-rmiz-modal-content]{position:relative;width:100%;height:100%}[data-rmiz-modal-img]{position:absolute;cursor:zoom-out;image-rendering:high-quality;transform-origin:top left;transition:transform .3s}@media (prefers-reduced-motion: reduce){[data-rmiz-modal-overlay],[data-rmiz-modal-img]{transition-duration:.01ms!important}}\n"},{"type":"external","src":"/_astro/dressers.D1ysCNtS.css"}],"routeData":{"route":"/wardrobes","isIndex":false,"type":"page","pattern":"^\\/wardrobes\\/?$","segments":[[{"content":"wardrobes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wardrobes.astro","pathname":"/wardrobes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/dressers.Y8h65Mi1.css"},{"type":"inline","content":"@property --angle{syntax: \"<angle>\"; initial-value: 0deg; inherits: false;}#borderAnimation[data-astro-cid-kea6nkqi]:after,#borderAnimation[data-astro-cid-kea6nkqi]:before{content:\"\";position:absolute;height:360px;width:360px;background-image:repeating-conic-gradient(from var(--angle),transparent 50%,#C2A182);z-index:0;animation:7s spinBorder linear infinite;border-radius:15px}#borderAnimation[data-astro-cid-kea6nkqi]:before{filter:blur(1.5rem);opacity:.5}@keyframes spinBorder{0%{--angle: 0deg}to{--angle: 360deg}}h1[data-astro-cid-c5o4azsb]{color:#b99470;font-size:1.5rem}:root{--myBrown: #C2A182;--MyGray: #A7A3A3;--MyLightGray: #fafafac1}html{scroll-behavior:smooth}scroll-hidden{overflow:hidden;height:100vh}body{font-family:Roboto,sans-serif;font-weight:300}button{cursor:pointer}li:hover{color:var(--myBrown)}\n"},{"type":"external","src":"/_astro/dressers.D1ysCNtS.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/dressers.astro",{"propagation":"none","containsHead":true}],["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/racks.astro",{"propagation":"none","containsHead":true}],["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/tables.astro",{"propagation":"none","containsHead":true}],["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/wardrobes.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/dressers@_@astro":"pages/dressers.astro.mjs","\u0000@astro-page:src/pages/racks@_@astro":"pages/racks.astro.mjs","\u0000@astro-page:src/pages/tables@_@astro":"pages/tables.astro.mjs","\u0000@astro-page:src/pages/wardrobes@_@astro":"pages/wardrobes.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_CDg72fmv.mjs","/astro/hoisted.js?q=4":"_astro/hoisted.l0sNRNKZ.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Realizations.tsx":"_astro/Realizations.BdXzCNO6.js","@/components/HomePage/WoodTypes":"_astro/WoodTypes.FLTJEcsP.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Styles":"_astro/Styles.BCfPu1Ap.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/AboutDialog":"_astro/AboutDialog.BoN99F4m.js","/astro/hoisted.js?q=0":"_astro/hoisted.-ErXlRdM.js","/astro/hoisted.js?q=1":"_astro/hoisted.DpKWmTPH.js","/astro/hoisted.js?q=2":"_astro/hoisted.DdcfqoZ_.js","/astro/hoisted.js?q=3":"_astro/hoisted.BK1AG1KM.js","@/components/Gallery":"_astro/Gallery.CdDStj4L.js","@astrojs/react/client.js":"_astro/client.Y6ScSF8W.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/ContactForm":"_astro/ContactForm.DUzHaX_r.js","@/components/Navbar":"_astro/Navbar.Bm7HdPt_.js","@/components/Navbar.tsx":"_astro/Navbar.fw1e3r84.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/furnitureBg.DPSrLcL2.png","/_astro/HeroMobile.CnANPZZ7.png","/_astro/Hero.CJLeVzRm.png","/_astro/stages.BUx2XSP8.jpg","/_astro/Logo.wx4TSLIN.png","/_astro/LogoWhite.NAsgfteI.png","/_astro/Rack.CxXP-mln.jpg","/_astro/dresser.Dqqk__Wc.jpg","/_astro/Tables.C_T2hCZp.jpg","/_astro/dressers.D1ysCNtS.css","/_astro/dressers.Y8h65Mi1.css","/HebelMebel.svg","/LogoWhite.png","/Olx.svg","/OlxWhite.svg","/Stolarstwo.svg","/favicon.ico","/favicon.png","/saw.svg","/tables.jpg","/tables.png","/_astro/AboutDialog.BoN99F4m.js","/_astro/ContactForm.DUzHaX_r.js","/_astro/Gallery.CdDStj4L.js","/_astro/Navbar.Bm7HdPt_.js","/_astro/Navbar.fw1e3r84.js","/_astro/Realizations.BdXzCNO6.js","/_astro/StateStore.DP__THiI.js","/_astro/Styles.BCfPu1Ap.js","/_astro/WoodTypes.FLTJEcsP.js","/_astro/client.Y6ScSF8W.js","/_astro/dialog.eYJAPWce.js","/_astro/dressers.CvF2r7w6.css","/_astro/index.DY16rmGi.js","/_astro/index.l2PZgWEW.js","/_astro/jsx-runtime.chL-vPbI.js","/images/Ash.jpg","/images/Hero.png","/images/Logo.png","/images/Nut.jpg","/images/Oak.webp","/images/Pine.webp","/images/Realization-1.jpg","/images/Realization-2.jpg","/images/Realization-3.webp","/images/Zoom.svg","/images/table1.png","/images/table1.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"EAz863GpB93x/L3tHnouARkiHnq9y7id/HgB5ohImz8=","experimentalEnvGetSecretEnabled":false});

export { manifest };

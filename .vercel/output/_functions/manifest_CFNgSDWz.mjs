import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CnwxbY78.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_CbFEcOuk.mjs';
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/wiktordawid/Desktop/HebelMebel/HebelMebel/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dly16LZP.css"},{"type":"inline","content":"h1[data-astro-cid-fez3wgu4]{font-size:2rem;font-weight:700;margin-bottom:1rem}h2[data-astro-cid-fez3wgu4]{font-size:1.5rem;font-weight:600;margin-bottom:1rem}p[data-astro-cid-fez3wgu4]{font-size:1.25rem;margin-bottom:1rem}\n[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/politykaprywatnosci","isIndex":false,"type":"page","pattern":"^\\/politykaprywatnosci\\/?$","segments":[[{"content":"politykaprywatnosci","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politykaprywatnosci.astro","pathname":"/politykaprywatnosci","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Dly16LZP.css"},{"type":"inline","content":"@property --angle{syntax: \"<angle>\"; initial-value: 0deg; inherits: false;}#borderAnimation[data-astro-cid-kea6nkqi]:after,#borderAnimation[data-astro-cid-kea6nkqi]:before{content:\"\";position:absolute;height:360px;width:360px;background-image:repeating-conic-gradient(from var(--angle),transparent 50%,#C2A182);z-index:0;animation:7s spinBorder linear infinite;border-radius:15px}#borderAnimation[data-astro-cid-kea6nkqi]:before{filter:blur(1.5rem);opacity:.5}@keyframes spinBorder{0%{--angle: 0deg}to{--angle: 360deg}}h1[data-astro-cid-c5o4azsb]{color:#b99470;font-size:1.5rem}\n[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/politykaprywatnosci.astro",{"propagation":"none","containsHead":true}],["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/politykaprywatnosci@_@astro":"pages/politykaprywatnosci.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bk3jG9Qe.mjs","\u0000@astrojs-manifest":"manifest_CFNgSDWz.mjs","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Realizations.tsx":"_astro/Realizations.YU1fDAaY.js","@/components/HomePage/WoodTypes":"_astro/WoodTypes.C_hJproX.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/AboutDialog":"_astro/AboutDialog.CrbRZdIn.js","@astrojs/react/client.js":"_astro/client.Hq9I5DIt.js","/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/ContactForm":"_astro/ContactForm.7mtbiDZ6.js","@/components/HomePage/Navbar":"_astro/Navbar.BMBKfFrt.js","@/components/HomePage/Navbar.tsx":"_astro/Navbar.vmsP9KWD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/pages/index.astro?astro&type=script&index=0&lang.ts",""]],"assets":["/_astro/rtv.B21oUIO2.webp","/_astro/wine.D6xfxOPh.jpg","/_astro/desk.8fvbTm5p.jpeg","/_astro/LogoWhite.NAsgfteI.png","/_astro/Logo.wx4TSLIN.png","/_astro/stół5.Cv6DK2op.jpeg","/_astro/stół2.D-RabY8Z.jpeg","/_astro/Hero.CJLeVzRm.png","/_astro/HeroMobile.CnANPZZ7.png","/_astro/index.Dly16LZP.css","/HebelMebel.svg","/LogoWhite.png","/Olx.svg","/OlxWhite.svg","/Stolarstwo.svg","/favicon.ico","/favicon.png","/saw.svg","/tables.jpg","/tables.png","/_astro/AboutDialog.CrbRZdIn.js","/_astro/ContactForm.7mtbiDZ6.js","/_astro/Navbar.BMBKfFrt.js","/_astro/Navbar.vmsP9KWD.js","/_astro/Realizations.YU1fDAaY.js","/_astro/WoodTypes.C_hJproX.js","/_astro/client.Hq9I5DIt.js","/_astro/dialog.C1wiu5sH.js","/_astro/index.Bo-yQw7r.js","/_astro/index.D32UQyqX.js","/_astro/jsx-runtime.1mgjrTCm.js","/images/Ash.jpg","/images/Beech.jpg","/images/Birch.jpg","/images/Hero.png","/images/Logo.png","/images/Nut.jpg","/images/Oak.jpg","/images/Oak.webp","/images/Pine.webp","/images/Realization-1.jpg","/images/Realization-2.jpg","/images/Realization-3.webp","/images/Zoom.svg","/images/table1.png","/images/table1.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"dUzpgdkNduxX9u1+plEJ7veeRXa/K1YmGXDJv47JjN0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

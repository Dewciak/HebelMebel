import{r as o}from"./index.l2PZgWEW.js";import{r as v}from"./index.DY16rmGi.js";var h,N,m=v;N=m.createRoot,h=m.hydrateRoot;const c=({value:t,name:e,hydrate:r=!0})=>{if(!t)return null;const a=r?"astro-slot":"astro-static-slot";return o.createElement(a,{name:e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};c.shouldComponentUpdate=()=>!1;function O(t){for(const e in t)if(e.startsWith("__reactContainer"))return e}function A(t){let e={};for(const r of t.attributes)e[r.name]=r.value;return t.firstChild===null?o.createElement(t.localName,e):o.createElement(t.localName,e,Array.from(t.childNodes).map(r=>r.nodeType===Node.TEXT_NODE?r.data:r.nodeType===Node.ELEMENT_NODE?A(r):void 0).filter(r=>!!r))}function R(t,e){if(e&&t){let r=[],a=document.createElement("template");a.innerHTML=t;for(let i of a.content.children)r.push(A(i));return r}else return t?o.createElement(c,{value:t}):void 0}let p=new WeakMap;const y=(t,e)=>{let r=p.get(t);return r||(r=e(),p.set(t,r)),r},x=t=>(e,r,{default:a,...i},{client:T})=>{if(!t.hasAttribute("ssr"))return;const d=t.getAttribute("data-action-key"),f=t.getAttribute("data-action-name"),l=t.getAttribute("data-action-result"),b=d&&f&&l?[JSON.parse(l),d,f]:void 0,g={identifierPrefix:t.getAttribute("prefix"),formState:b};for(const[s,n]of Object.entries(i))r[s]=o.createElement(c,{value:n,name:s});const u=o.createElement(e,r,R(a,t.hasAttribute("data-react-children"))),E=O(t);if(E&&delete t[E],T==="only")return o.startTransition(()=>{y(t,()=>{const n=N(t);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)});o.startTransition(()=>{y(t,()=>{const n=h(t,u,g);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)})};export{x as default};

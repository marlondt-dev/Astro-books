import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_gSMxwe1f.mjs';
import { manifest } from './manifest_DToi4WGQ.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CeyASaMr.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CCNF-aUz.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e794c3c1-bf6a-4a12-9014-646c5070a9da",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

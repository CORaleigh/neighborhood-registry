(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[209],{626:function(t,e,i){"use strict";i.r(e),i.d(e,"previewWebStyleSymbol",(function(){return o}));var n=i(22),h=i(53);function o(t,e,i){const o=t.thumbnail&&t.thumbnail.url;return o?Object(h.default)(o,{responseType:"image"}).then((t=>{const e=function(t,e){const i=!/\\.svg$/i.test(t.src)&&e&&e.disableUpsampling,h=Math.max(t.width,t.height);let o=e&&null!=e.maxSize?Object(n.g)(e.maxSize):120;i&&(o=Math.min(h,o));const s=Math.min(o,e&&null!=e.size?Object(n.g)(e.size):h);if(s!==h){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=s,t.height=s/e):(t.width=s*e,t.height=s)}return t}(t.data,i);return i&&i.node?(i.node.appendChild(e),i.node):e})):t.fetchSymbol().then((t=>e(t,i)))}}}]);
//# sourceMappingURL=209.ac16f5f1.chunk.js.map
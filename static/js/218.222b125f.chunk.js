(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[218],{1130:function(e,t,n){"use strict";n.r(t),n.d(t,"destroyContext",(function(){return m})),n.d(t,"dracoDecompressPointCloudData",(function(){return l})),n.d(t,"filterObbsForModifications",(function(){return b})),n.d(t,"filterObbsForModificationsSync",(function(){return p})),n.d(t,"initialize",(function(){return A})),n.d(t,"interpretObbModificationResults",(function(){return g})),n.d(t,"process",(function(){return u})),n.d(t,"setLegacySchema",(function(){return y})),n.d(t,"setModifications",(function(){return d})),n.d(t,"setModificationsSync",(function(){return h})),n.d(t,"test",(function(){return L}));var r=n(74),o=n(2),i=n(61);function s(e){return Object(i.a)(`esri/libs/i3s/${e}`)}let f,a,c;async function u(e){await A();const t=[e.geometryBuffer];return{result:E(e,t),transferList:t}}async function l(e){var t;await A();const n=[e.geometryBuffer],{geometryBuffer:o}=e,i=o.byteLength,s=c._malloc(i),f=new Uint8Array(c.HEAPU8.buffer,s,i);f.set(new Uint8Array(o));const a=c.dracoDecompressPointCloudData(s,f.byteLength);if(c._free(s),a.error.length>0)throw`i3s.wasm: ${a.error}`;const u=(null==(t=a.featureIds)?void 0:t.length)>0?Object(r.m)(a.featureIds):null,l=Object(r.m)(a.positions);return u&&n.push(u.buffer),n.push(l.buffer),{result:{positions:l,featureIds:u},transferList:n}}async function b(e){await A(),p(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function d(e){await A(),h(e)}async function y(e){await A(),c.setLegacySchema(e.context,e.jsonSchema)}function m(e){w(e)}function h(e){const t=e.modifications,n=c._malloc(8*t.length),r=new Float64Array(c.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];c.setModifications(e.context,n,t.length,e.isGeodetic),c._free(n)}function E(e,t){if(!c)return null;const{context:n,localOrigin:i,globalTrafo:s,mbs:f,obb:a,elevationOffset:u,geometryBuffer:l,geometryDescriptor:b,indexToVertexProjector:d,vertexToRenderProjector:y}=e,m=c._malloc(l.byteLength),h=c._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(c.HEAPU8.buffer,m,l.byteLength);E.set(new Uint8Array(l));const g=new Float64Array(c.HEAPU8.buffer,h,33);O(g,i);let p=g.byteOffset+3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,p);O(w,s),p+=16*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,p),O(w,f),p+=4*g.BYTES_PER_ELEMENT,Object(o.k)(a)&&(w=new Float64Array(g.buffer,p),O(w,a.center),p+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,p),O(w,a.halfSize),p+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,p),O(w,a.quaternion));const A=b,L={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},_=c.process(n,!!e.obb,m,E.byteLength,A,L,h,u,d,y,e.normalReferenceFrame);if(c._free(h),c._free(m),_.error.length>0)throw`i3s.wasm: ${_.error}`;if(_.discarded)return null;const P=_.componentOffsets.length>0?Object(r.m)(_.componentOffsets):null,T=_.featureIds.length>0?Object(r.m)(_.featureIds):null,j=Object(r.m)(_.interleavedVertedData).buffer,I=1===_.indicesType?Object(r.m)(new Uint16Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/2)):Object(r.m)(new Uint32Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/4)),F=Object(r.m)(_.positions),M=1===_.positionIndicesType?Object(r.m)(new Uint16Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/2)):Object(r.m)(new Uint32Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/4)),B={layout:e.layouts[0],interleavedVertexData:j,indices:I,hasColors:_.hasColors,hasModifications:_.hasModifications,positionData:{data:F,indices:M}};return T&&t.push(T.buffer),P&&t.push(P.buffer),t.push(j),t.push(I.buffer),t.push(F.buffer),t.push(M.buffer),{componentOffsets:P,featureIds:T,transformedGeometry:B,obb:_.obb}}function g(e){return 0===e?0:1===e?1:2===e?2:3}function p(e){const{context:t,buffer:n}=e,r=c._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(c.HEAPU8.buffer,r,o),s=new Float64Array(n);i.set(s),c.filterOBBs(t,r,o),s.set(i),c._free(r)}function w(e){c&&c.destroy(e)}function O(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function A(){return c?Promise.resolve():(a||(a=(f||(f=new Promise((e=>n.e(122).then(n.bind(null,1093)).then((function(e){return e.i})).then((({default:t})=>{const n=t({locateFile:s,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>Promise.reject(e)))),f).then((e=>{c=e,a=null}))),a)}const L={transform:E,destroy:w}}}]);
//# sourceMappingURL=218.222b125f.chunk.js.map
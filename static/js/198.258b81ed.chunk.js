(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[198],{869:function(e,t,o){"use strict";o.r(t);var r=o(0),i=(o(7),o(73)),l=o(2),a=(o(6),o(8),o(1)),s=o(23),n=o(3),c=o(5),p=(o(9),o(10),o(85)),b=o(87),y=o(53),u=o(245),d=o(112),j=o(93),O=(o(51),o(192)),h=o(349),S=o(129),v=o(353),f=o(290),g=o(352),m=o(460),C=o(289);const R=["atom","xml"],k={base:p.a,key:"type",typeMap:{"simple-line":b.default},errorContext:"symbol"},w={base:p.a,key:"type",typeMap:{"picture-marker":u.a,"simple-marker":j.default},errorContext:"symbol"},F={base:p.a,key:"type",typeMap:{"simple-fill":d.default},errorContext:"symbol"};let x=class extends(Object(f.a)(Object(m.a)(Object(v.a)(Object(g.a)(Object(C.a)(Object(h.a)(O.a))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(c.k)(this.url,R)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}load(e){const t=Object(l.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await Object(y.default)(i.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};Object(r.a)([Object(a.b)()],x.prototype,"description",void 0),Object(r.a)([Object(a.b)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],x.prototype,"title",null),Object(r.a)([Object(a.b)()],x.prototype,"featureCollections",void 0),Object(r.a)([Object(s.a)("service","featureCollections",["featureCollection.layers"])],x.prototype,"readFeatureCollections",null),Object(r.a)([Object(a.b)(S.c)],x.prototype,"id",void 0),Object(r.a)([Object(a.b)(S.e)],x.prototype,"legendEnabled",void 0),Object(r.a)([Object(a.b)({types:k,json:{write:!0}})],x.prototype,"lineSymbol",void 0),Object(r.a)([Object(a.b)({type:["show","hide"]})],x.prototype,"listMode",void 0),Object(r.a)([Object(a.b)({types:w,json:{write:!0}})],x.prototype,"pointSymbol",void 0),Object(r.a)([Object(a.b)({types:F,json:{write:!0}})],x.prototype,"polygonSymbol",void 0),Object(r.a)([Object(a.b)({type:["GeoRSS"]})],x.prototype,"operationalLayerType",void 0),Object(r.a)([Object(a.b)()],x.prototype,"outSpatialReference",void 0),Object(r.a)([Object(a.b)(S.n)],x.prototype,"url",void 0),Object(r.a)([Object(a.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],x.prototype,"type",void 0),x=Object(r.a)([Object(n.a)("esri.layers.GeoRSSLayer")],x);var M=x;t.default=M}}]);
//# sourceMappingURL=198.258b81ed.chunk.js.map
(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[203],{877:function(e,t,r){"use strict";r.r(t);var a=r(0),s=(r(7),r(2)),i=(r(6),r(1)),l=r(39),o=r(23),n=r(3),c=r(21),p=r(11),u=r(5),h=(r(9),r(10),r(35)),b=(r(65),r(53)),d=r(192),y=r(349),O=r(170),j=r(129),v=r(353),f=r(363),g=r(290),_=r(497),m=r(352),S=r(460),w=r(289),T=r(76),R=r(510),W=r(979),U=r(948),L=r(980);const J=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let P=class extends(Object(g.a)(Object(L.a)(Object(w.a)(Object(S.a)(Object(v.a)(Object(m.a)(Object(R.a)(Object(W.a)(Object(f.a)(Object(y.a)(Object(T.b)(Object(_.a)(d.a))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(s.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&h.a.fromJSON(e)}writeSublayers(e,t,r,a){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],l={writeSublayerStructure:!1,...a};s.forEach((e=>{const t=e.write({},l);i.push(t)})),i.some((e=>Object.keys(e).length>1))&&(t.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>Object(u.J)(e).path)):null}fetchTile(e,t,r,a={}){const{signal:s,timestamp:i}=a,l=this.getTileUrl(e,t,r),o={responseType:"image",signal:s};return null!=i&&(o.query={_ts:a.timestamp}),Object(b.default)(l,o).then((e=>e.data))}getTileUrl(e,t,r){const a=!this.tilemapCache&&this.supportsBlankTile,s=Object(u.D)({...this.parsedUrl.query,blankTile:!a&&null,...this.customParameters}),i=this.tileServers;return`${i&&i.length?i[t%i.length]:this.parsedUrl.path}/tile/${e}/${t}/${r}${s?"?"+s:""}`}_fetchService(e){return new Promise(((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new p.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new p.a("tile-layer:undefined-url","layer's url is not defined");const a=Object(O.e)(this.parsedUrl.path);if(Object(s.k)(a)&&"ImageServer"===a.serverType)throw new p.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(b.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,r)})).then((t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(O.c)(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!Object(O.b)(e))return Promise.reject();const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(b.default)(r,{query:{f:"json",...this.customParameters},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new p.a("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let r=0,a=J.length;r<a;r++)if(t=J[r],t.toLowerCase().indexOf(e)>-1)return Object(u.z)("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}};Object(a.a)([Object(i.b)({readOnly:!0})],P.prototype,"attributionDataUrl",null),Object(a.a)([Object(i.b)({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),Object(a.a)([Object(i.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],P.prototype,"isReference",void 0),Object(a.a)([Object(i.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],P.prototype,"operationalLayerType",void 0),Object(a.a)([Object(i.b)({type:Boolean})],P.prototype,"resampling",void 0),Object(a.a)([Object(i.b)()],P.prototype,"sourceJSON",void 0),Object(a.a)([Object(i.b)({type:h.a})],P.prototype,"spatialReference",void 0),Object(a.a)([Object(o.a)("spatialReference",["spatialReference","tileInfo"])],P.prototype,"readSpatialReference",null),Object(a.a)([Object(i.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),Object(a.a)([Object(i.b)({readOnly:!0})],P.prototype,"sublayers",void 0),Object(a.a)([Object(c.a)("sublayers",{layers:{type:[U.a]}})],P.prototype,"writeSublayers",null),Object(a.a)([Object(i.b)({json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),Object(a.a)([Object(i.b)()],P.prototype,"tileServers",null),Object(a.a)([Object(l.a)("tileServers")],P.prototype,"castTileServers",null),Object(a.a)([Object(i.b)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),Object(a.a)([Object(i.b)(j.n)],P.prototype,"url",void 0),P=Object(a.a)([Object(n.a)("esri.layers.TileLayer")],P);var k=P;t.default=k}}]);
//# sourceMappingURL=203.d67bcc0f.chunk.js.map
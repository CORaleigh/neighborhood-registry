(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[96,128],{805:function(e,t,r){"use strict";r.r(t);var i=r(0),a=(r(7),r(96)),s=(r(6),r(8),r(1)),l=r(23),o=r(3),n=r(21),c=r(11),u=r(5),p=(r(9),r(10),r(35)),d=r(28),h=r(45),m=(r(65),r(53)),y=r(192),b=r(349),f=r(353),O=r(290),g=r(352),j=r(460),v=r(289),w=r(226),x=r(130),S=r(824);let I=class extends(Object(O.a)(Object(j.a)(Object(v.a)(Object(f.a)(Object(g.a)(Object(b.a)(y.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new h.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=p.a.WebMercator,this.subDomains=null,this.tileInfo=new x.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new d.a({x:-20037508.342787,y:20037508.342787,spatialReference:p.a.WebMercator}),spatialReference:p.a.WebMercator,lods:[new w.a({level:0,scale:591657527.591555,resolution:156543.033928}),new w.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new w.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new w.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new w.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new w.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new w.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new w.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new w.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new w.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new w.a({level:10,scale:577790.554289,resolution:152.874056570411}),new w.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new w.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new w.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new w.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new w.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new w.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new w.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new w.a({level:18,scale:2256.994353,resolution:.597164283559817}),new w.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new c.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&p.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new u.a(t),a=i.scheme?i.scheme+"://":"//",s=a+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const l of r)e.push(a+i.authority.replace(/\{subDomain\}/gi,l)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(u.v)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(u.C)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:a,timestamp:s}=i,l=this.getTileUrl(e,t,r),o={responseType:"image",signal:a};return null!=s&&(o.query={_ts:i.timestamp}),Object(m.default)(l,o).then((e=>e.data))}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(a.c)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};Object(i.a)([Object(s.b)({type:String,value:"",json:{write:!0}})],I.prototype,"copyright",void 0),Object(i.a)([Object(s.b)({type:h.a,json:{write:!0}})],I.prototype,"fullExtent",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),Object(i.a)([Object(s.b)({type:["show","hide"]})],I.prototype,"listMode",void 0),Object(i.a)([Object(s.b)()],I.prototype,"levelValues",null),Object(i.a)([Object(s.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),Object(i.a)([Object(s.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],I.prototype,"operationalLayerType",void 0),Object(i.a)([Object(s.b)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"popupEnabled",void 0),Object(i.a)([Object(s.b)({type:p.a})],I.prototype,"spatialReference",void 0),Object(i.a)([Object(l.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],I.prototype,"readSpatialReference",null),Object(i.a)([Object(s.b)({type:[String],json:{write:!0}})],I.prototype,"subDomains",void 0),Object(i.a)([Object(s.b)({type:x.a,json:{write:!0}})],I.prototype,"tileInfo",void 0),Object(i.a)([Object(s.b)({readOnly:!0})],I.prototype,"tileServers",null),Object(i.a)([Object(s.b)({json:{read:!1}})],I.prototype,"type",void 0),Object(i.a)([Object(s.b)()],I.prototype,"urlPath",null),Object(i.a)([Object(s.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],I.prototype,"urlTemplate",void 0),Object(i.a)([Object(l.a)("urlTemplate",["urlTemplate","templateUrl"])],I.prototype,"readUrlTemplate",null),Object(i.a)([Object(n.a)("urlTemplate",{templateUrl:{type:String}})],I.prototype,"writeUrlTemplate",null),Object(i.a)([Object(s.b)({type:S.a,json:{write:!0}})],I.prototype,"wmtsInfo",void 0),I=Object(i.a)([Object(o.a)("esri.layers.WebTileLayer")],I);var M=I;t.default=M},824:function(e,t,r){"use strict";var i,a=r(0),s=(r(7),r(13)),l=(r(6),r(8),r(1)),o=r(3),n=(r(5),r(9),r(10),r(16));let c=i=class extends n.a{constructor(e){super(e)}clone(){return new i({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(a.a)([Object(l.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(a.a)([Object(l.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(a.a)([Object(l.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(a.a)([Object(l.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(a.a)([Object(l.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=i=Object(a.a)([Object(o.a)("esri.layer.support.WMTSLayerInfo")],c);var u=c;t.a=u},887:function(e,t,r){"use strict";r.r(t);var i,a=r(0),s=(r(7),r(13)),l=r(63),o=(r(6),r(8),r(1)),n=r(23),c=r(3),u=r(21),p=r(11),d=r(5),h=(r(9),r(10),r(45)),m=r(25),y=r(53),b=r(40),f=r(192),O=r(349),g=r(353),j=r(290),v=r(352),w=r(460),x=r(289),S=r(130),I=r(824),M=r(805),T=r(16);let L=i=class extends T.a{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};Object(a.a)([Object(o.b)({type:h.a,json:{read:{source:"fullExtent"}}})],L.prototype,"fullExtent",void 0),Object(a.a)([Object(o.b)({type:String,json:{read:{source:"id"}}})],L.prototype,"id",void 0),Object(a.a)([Object(o.b)({type:S.a,json:{read:{source:"tileInfo"}}})],L.prototype,"tileInfo",void 0),L=i=Object(a.a)([Object(c.a)("esri.layer.support.TileMatrixSet")],L);var P,E=L;let R=P=class extends T.a{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new P;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(a.a)([Object(o.b)({json:{read:{source:"id"}}})],R.prototype,"id",void 0),Object(a.a)([Object(o.b)({json:{read:{source:"title"}}})],R.prototype,"title",void 0),Object(a.a)([Object(o.b)({json:{read:{source:"abstract"}}})],R.prototype,"description",void 0),Object(a.a)([Object(o.b)({json:{read:{source:"legendUrl"}}})],R.prototype,"legendUrl",void 0),Object(a.a)([Object(o.b)({json:{read:{source:"isDefault"}}})],R.prototype,"isDefault",void 0),Object(a.a)([Object(o.b)({json:{read:{source:"keywords"}}})],R.prototype,"keywords",void 0),R=P=Object(a.a)([Object(c.a)("esri.layer.support.WMTSStyle")],R);var C,F=R;let U=C=class extends T.a{constructor(e){super(e),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?h.a.fromJSON(e):null}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new C;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};Object(a.a)([Object(o.b)()],U.prototype,"description",null),Object(a.a)([Object(o.b)()],U.prototype,"fullExtent",void 0),Object(a.a)([Object(n.a)("fullExtent",["fullExtent"])],U.prototype,"readFullExtent",null),Object(a.a)([Object(o.b)()],U.prototype,"imageFormat",null),Object(a.a)([Object(o.b)({json:{read:{source:"formats"}}})],U.prototype,"imageFormats",void 0),Object(a.a)([Object(o.b)()],U.prototype,"id",void 0),Object(a.a)([Object(o.b)()],U.prototype,"layer",void 0),Object(a.a)([Object(o.b)()],U.prototype,"styleId",null),Object(a.a)([Object(o.b)({type:m.a.ofType(F),json:{read:{source:"styles"}}})],U.prototype,"styles",void 0),Object(a.a)([Object(o.b)({value:null,json:{write:{ignoreOrigin:!0}}})],U.prototype,"title",null),Object(a.a)([Object(o.b)()],U.prototype,"tileMatrixSetId",void 0),Object(a.a)([Object(o.b)({readOnly:!0})],U.prototype,"tileMatrixSet",null),Object(a.a)([Object(o.b)({type:m.a.ofType(E),json:{read:{source:"tileMatrixSets"}}})],U.prototype,"tileMatrixSets",void 0),U=C=Object(a.a)([Object(c.a)("esri.layers.support.WMTSSublayer")],U);var V=U,_=r(233),A=r(35),W=r(28),D=r(180);const N=90.71428571428571,k=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function K(e,t){var r,i;e=e.replace(/ows:/gi,"");const a=(new DOMParser).parseFromString(e,"text/xml").documentElement,s=new Map,l=new Map,o=H("Contents",a);if(!o)throw new p.a("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=H("OperationsMetadata",a),c=null==n?void 0:n.querySelector("[name='GetTile']"),u=null==c?void 0:c.getElementsByTagName("Get"),d=u&&Array.prototype.slice.call(u),h=null!=(r=(null==t||null==(i=t.url)?void 0:i.indexOf("https"))>-1)&&r;let m,y,b=t.serviceMode,f=t&&t.url;if(d&&d.length&&d.some((e=>{const t=H("Constraint",e);return!t||z("AllowedValues","Value",b,t)?(f=e.attributes[0].nodeValue,!0):(!t||z("AllowedValues","Value","RESTful",t)||z("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!z("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!f)if(y)f=y,b="RESTful";else if(m)f=m,b="KVP";else{const e=H("ServiceMetadataURL",a);f=e&&e.getAttribute("xlink:href")}const O=f.indexOf("1.0.0/");-1===O&&"RESTful"===b?f+="/":O>-1&&(f=f.substring(0,O)),"KVP"===b&&(f+=O>-1?"":"?"),h&&(f=f.replace(/^http:/i,"https:"));const g=$("ServiceIdentification>AccessConstraints",a),j=J("Layer",o),v=J("TileMatrixSet",o);return{copyright:g,layers:j.map((e=>{const t=$("Identifier",e);return s.set(t,e),function(e,t,r,i){const a=$("Abstract",t),s=q("Format",t);return{id:e,fullExtent:Q(t),description:a,formats:s,styles:X(t,i),title:$("Title",t),tileMatrixSets:Y(t,r)}}(t,e,v,h)})),tileUrl:f,serviceMode:b,layerMap:s,dimensionMap:l}}function B(e){return e.nodeType===Node.ELEMENT_NODE}function H(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(B(i)&&i.nodeName===e)return i}return null}function J(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const a=t.childNodes[i];B(a)&&a.nodeName===e&&r.push(a)}return r}function q(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const a=t.childNodes[i];B(a)&&a.nodeName===e&&r.push(a)}return r.map((e=>e.textContent))}function $(e,t){return e.split(">").forEach((e=>{t&&(t=H(e,t))})),t&&t.textContent}function z(e,t,r,i){let a;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=H(t,i),s=e&&e.textContent;if(s===r||r.split(":")&&r.split(":")[1]===s)return a=i,!0}return!1})),a}function G(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const a=J("ResourceURL",i),s=J("Dimension",i);let l,o,n,c;return s.length&&(l=$("Identifier",s[0]),o=q("Default",s[0])||q("Value",s[0])),s.length>1&&(n=$("Identifier",s[1]),c=q("Default",s[1])||q("Value",s[1])),e.dimensionMap.set(t,{dimensions:o,dimensions2:c}),a.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2))}if(n&&c.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function Q(e){const t=H("WGS84BoundingBox",e),r=t?$("LowerCorner",t).split(" "):["-180","-90"],i=t?$("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function X(e,t){return J("Style",e).map((e=>{const r=H("LegendURL",e),i=H("Keywords",e),a=i&&q("Keyword",i);let s=r&&r.getAttribute("xlink:href");return t&&(s=s&&s.replace(/^http:/i,"https:")),{abstract:$("Abstract",e),id:$("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:a,legendUrl:s,title:$("Title",e)}}))}function Y(e,t){return J("TileMatrixSetLink",e).map((e=>H("TileMatrixSet",e).textContent)).map((r=>function(e,t,r){const i=q("TileMatrix",z("TileMatrixSetLink","TileMatrixSet",e,t)),a=r.find((t=>{const r=H("Identifier",t),i=r&&r.textContent;return!!(i===e||e.split(":")&&e.split(":")[1]===i)})),s=function(e){let t=$("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const a=new A.a({wkid:r}),s=$("TopLeftCorner",H("TileMatrix",e)).split(" "),l=s[0].split("E").map((e=>Number(e))),o=s[1].split("E").map((e=>Number(e)));let n,c=l[0],u=o[0];l.length>1&&(c=l[0]*10**l[1]),o.length>1&&(u=o[0]*10**o[1]);const p=i&&4326===r&&90===c&&-180===u;return k.some(((e,s)=>{const l=Number(t.split(":").pop());return l>=e[0]&&l<=e[1]||4326===r&&(!i||p)?(n=new W.a(u,c,a),!0):(s===k.length-1&&(n=new W.a(c,u,a)),!1)})),n}(a),l=s.spatialReference,o=l.wkid,n=H("TileMatrix",a),c=[parseInt($("TileWidth",n),10),parseInt($("TileHeight",n),10)],u=[];i.length?i.forEach(((t,r)=>{const i=z("TileMatrix","Identifier",t,a);u.push(Z(i,o,r,e))})):J("TileMatrix",a).forEach(((t,r)=>{u.push(Z(t,o,r,e))}));const p=function(e,t,r,i){const a=H("BoundingBox",e);let s,l,o,n,c,u;if(a&&(s=$("LowerCorner",a).split(" "),l=$("UpperCorner",a).split(" ")),s&&s.length>1&&l&&l.length>1)o=parseFloat(s[0]),c=parseFloat(s[1]),n=parseFloat(l[0]),u=parseFloat(l[1]);else{const a=H("TileMatrix",e),s=parseFloat($("MatrixWidth",a)),l=parseFloat($("MatrixHeight",a));o=t.x,u=t.y,n=o+s*r[0]*i.resolution,c=u-l*r[1]*i.resolution}return new h.a(o,c,n,u,t.spatialReference)}(a,s,c,u[0]);return{id:e,fullExtent:p.toJSON(),tileInfo:new S.a({dpi:96,spatialReference:l,size:c,origin:s,lods:u}).toJSON()}}(r,e,t)))}function Z(e,t,r,i){const a=$("Identifier",e),s=$("ScaleDenominator",e).split("E").map((e=>Number(e)));let l;l=s.length>1?s[0]*10**s[1]:s[0];const o=ee(t,l,i);return l*=96/N,{level:r,levelValue:a,scale:l,resolution:o}}function ee(e,t,r){let i;return i=_.a.hasOwnProperty(String(e))?_.a.values[_.a[e]]:"default028mm"===r?6370997*Math.PI/180:Object(D.f)(e).metersPerDegree,7*t/25e3/i}const te={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},re=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let ie=class extends(Object(j.a)(Object(w.a)(Object(x.a)(Object(g.a)(Object(v.a)(Object(O.a)(f.a))))))){constructor(...e){super(...e),this._sublayersHandles=new b.a,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this)}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this})),this._sublayersHandles||(this._sublayersHandles=new b.a),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this})),e.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new p.a("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new V,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,a=r?this._getLowerCasedUrlParams(r):null,s=i&&i.layerIdentifier;let l=null;const o=i&&i.tileMatrixSet;o&&(Array.isArray(o)?o.length&&(l=o[0]):l=o);const n=a&&a.format,c=a&&a.style;return new V({id:s,imageFormat:n,styleId:c,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);const s=Object(l.b)("tileMatrixSet.tileInfo",a);t.tileInfo=s?s.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new V;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,a=new I.a({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new M.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:a})}fetchTile(e,t,r){const i=this.getTileUrl(e,t,r);return Object(y.default)(i,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],a=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let s=this.resourceInfo?"":function(e,t,r,i,a,s,l,o){const{dimensionMap:n}=e,c=G(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],p=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===i&&(e=t,!0))),e||(e=c[l%c.length]),d=e.template.replace(/\{Style\}/gi,a).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,s).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}return d}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);return s||(s=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,a).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),s=this._appendCustomLayerParameters(s),s}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:a}=e,s=G(e,t);let l="";if(s&&s.length>0){const e=a.get(t).dimensions&&a.get(t).dimensions[0],o=a.get(t).dimensions2&&a.get(t).dimensions2[0];l=s[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,o)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let a="";return te[r.toLowerCase()]&&(a=te[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+a}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),this.serviceMode=i}catch(r){throw new p.a("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=ee(t.spatialReference.wkid,r.scale*N/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=K(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await Object(y.default)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const t={...Object(s.a)(this.customParameters),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=Object(d.J)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?Object(s.a)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||re.has(t)||(e[t]=r[t])})))}return e}};Object(a.a)([Object(o.b)()],ie.prototype,"dimensionMap",void 0),Object(a.a)([Object(o.b)()],ie.prototype,"layerMap",void 0),Object(a.a)([Object(o.b)({type:V,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],ie.prototype,"activeLayer",null),Object(a.a)([Object(n.a)("service","activeLayer",["layers"])],ie.prototype,"readActiveLayerFromService",null),Object(a.a)([Object(n.a)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],ie.prototype,"readActiveLayerFromItemOrWebDoc",null),Object(a.a)([Object(u.a)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:S.a},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],ie.prototype,"writeActiveLayer",null),Object(a.a)([Object(o.b)({type:String,value:"",json:{write:!0}})],ie.prototype,"copyright",void 0),Object(a.a)([Object(o.b)({type:["show","hide"]})],ie.prototype,"listMode",void 0),Object(a.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],ie.prototype,"customParameters",void 0),Object(a.a)([Object(n.a)("web-document","customParameters"),Object(n.a)("portal-item","customParameters")],ie.prototype,"readCustomParameters",null),Object(a.a)([Object(o.b)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],ie.prototype,"customLayerParameters",void 0),Object(a.a)([Object(o.b)({type:h.a,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],ie.prototype,"fullExtent",void 0),Object(a.a)([Object(o.b)({readOnly:!0})],ie.prototype,"fullExtents",null),Object(a.a)([Object(o.b)({type:["WebTiledLayer"]})],ie.prototype,"operationalLayerType",void 0),Object(a.a)([Object(o.b)()],ie.prototype,"resourceInfo",void 0),Object(a.a)([Object(o.b)()],ie.prototype,"serviceMode",void 0),Object(a.a)([Object(n.a)(["portal-item","web-document"],"serviceMode",["templateUrl"])],ie.prototype,"readServiceMode",null),Object(a.a)([Object(o.b)({type:m.a.ofType(V)})],ie.prototype,"sublayers",void 0),Object(a.a)([Object(n.a)("service","sublayers",["layers"])],ie.prototype,"readSublayersFromService",null),Object(a.a)([Object(o.b)({readOnly:!0})],ie.prototype,"supportedSpatialReferences",null),Object(a.a)([Object(o.b)({json:{read:{source:"title"}}})],ie.prototype,"title",null),Object(a.a)([Object(o.b)({json:{read:!1},readOnly:!0,value:"wmts"})],ie.prototype,"type",void 0),Object(a.a)([Object(o.b)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],ie.prototype,"url",null),Object(a.a)([Object(o.b)()],ie.prototype,"version",void 0),ie=Object(a.a)([Object(c.a)("esri.layers.WMTSLayer")],ie);var ae=ie;t.default=ae}}]);
//# sourceMappingURL=96.90eed9bb.chunk.js.map
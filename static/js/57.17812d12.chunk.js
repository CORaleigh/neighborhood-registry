(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[57],{1118:function(e,t,r){"use strict";r.r(t);var s=r(0),o=(r(7),r(6),r(8),r(1)),a=r(3),i=(r(5),r(9),r(10),r(461)),n=r(53),l=r(355),c=r(138),u=r(828),p=r(848),d=r(2),f=r(23),b=r(16),y=r(35),v=r(28),j=r(84),O=r(82),h=(r(65),r(55)),m=r(159),g=r(807),T=r(818);function M(e){return m.default.fromJSON(e).features.map((e=>e.geometry))}let w=class extends b.a{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return M(e)}readIncidents(e){return M(e)}readPointBarriers(e,t){return M(t.barriers)}readPolylineBarriers(e){return M(e)}readPolygonBarriers(e){return M(e)}readRoutes(e){return function(e){return e.features.map((t=>{const r=y.a.fromJSON(e.spatialReference),s=h.a.fromJSON(t);return Object(d.k)(s.geometry)&&(s.geometry.spatialReference=r),s}))}(e)}};Object(s.a)([Object(o.b)({type:[T.a]})],w.prototype,"directions",void 0),Object(s.a)([Object(o.b)({type:[v.a]})],w.prototype,"facilities",void 0),Object(s.a)([Object(f.a)("facilities")],w.prototype,"readFacilities",null),Object(s.a)([Object(o.b)({type:[v.a]})],w.prototype,"incidents",void 0),Object(s.a)([Object(f.a)("incidents")],w.prototype,"readIncidents",null),Object(s.a)([Object(o.b)({type:[g.a]})],w.prototype,"messages",void 0),Object(s.a)([Object(o.b)({type:[v.a]})],w.prototype,"pointBarriers",void 0),Object(s.a)([Object(f.a)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),Object(s.a)([Object(o.b)({type:[O.a]})],w.prototype,"polylineBarriers",void 0),Object(s.a)([Object(f.a)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),Object(s.a)([Object(o.b)({type:[j.a]})],w.prototype,"polygonBarriers",void 0),Object(s.a)([Object(f.a)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),Object(s.a)([Object(o.b)({type:[h.a]})],w.prototype,"routes",void 0),Object(s.a)([Object(f.a)("routes")],w.prototype,"readRoutes",null),w=Object(s.a)([Object(a.a)("esri.tasks.support.ClosestFacilitySolveResult")],w);var B=w;const N=Object(u.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var S=r(829);let k=class extends(Object(S.a)(i.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],o=[],a={},i={},u=Object(c.c)(e);return t.incidents&&t.incidents.features&&Object(p.a)(t.incidents.features,o,"incidents.features",a),t.facilities&&t.facilities.features&&Object(p.a)(t.facilities.features,o,"facilities.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(p.a)(t.pointBarriers.features,o,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(p.a)(t.polylineBarriers.features,o,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(p.a)(t.polygonBarriers.features,o,"polygonBarriers.features",a),Object(l.a)(o).then((e=>{for(const t in a){const r=a[t];s.push(t),i[t]=e.slice(r[0],r[1])}return Object(p.e)(i,s)?Object(p.c)(u.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(p.b)(i,s);for(const r in i)i[r].forEach(((e,s)=>{t.get(r)[s].geometry=e}));let o={query:{...u.query,f:"json",...N.toQueryParams(t)}};return r&&(o={...r,...o}),Object(n.default)(`${u.path}/solveClosestFacility`,o)})).then((e=>B.fromJSON(e.data)))}(this.url,e,t)}};Object(s.a)([Object(o.b)()],k.prototype,"url",void 0),k=Object(s.a)([Object(a.a)("esri.tasks.ClosestFacilityTask")],k);var R=k;t.default=R},799:function(e,t,r){"use strict";var s=r(0),o=(r(7),r(6),r(8),r(1)),a=r(33),i=r(3),n=(r(5),r(9),r(10),r(16));const l=new a.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},807:function(e,t,r){"use strict";var s=r(0),o=(r(7),r(6),r(8),r(1)),a=r(33),i=r(3),n=(r(5),r(9),r(10),r(799));const l=new a.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},818:function(e,t,r){"use strict";var s=r(0),o=(r(7),r(2)),a=(r(6),r(8),r(1)),i=r(23),n=r(3),l=(r(5),r(9),r(10),r(35)),c=r(28),u=r(45),p=r(82),d=(r(65),r(55)),f=r(159);let b=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=l.a.fromJSON(t.spatialReference);return e.map((e=>{const t=d.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(o.q)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new d.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(o.q)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const i=[];let n,l,c,u,p,d,f,b,y=0,v=0,j=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[y],32)){y=2;const e=parseInt(p[y],32);y++,d=parseInt(p[y],32),y++,1&e&&(v=p.indexOf("|")+1,f=parseInt(p[v],32),v++),2&e&&(j=p.indexOf("|",v)+1,b=parseInt(p[j],32),j++)}else d=parseInt(p[y],32),y++;for(;y<p.length&&"|"!==p[y];){n=parseInt(p[y],32)+r,y++,r=n,l=parseInt(p[y],32)+s,y++,s=l;const e=[n/d,l/d];v&&(u=parseInt(p[v],32)+o,v++,o=u,e.push(u/f)),j&&(c=parseInt(p[j],32)+a,j++,a=c,e.push(c/b)),i.push(e)}return{paths:[i],hasZ:v>0,hasM:j>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let o=[0,0];return r.forEach((e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)})),new p.a({paths:[s]},t)}};Object(s.a)([Object(a.b)({type:u.a,json:{read:{source:"summary.envelope"}}})],b.prototype,"extent",void 0),Object(s.a)([Object(a.b)()],b.prototype,"features",void 0),Object(s.a)([Object(i.a)("features")],b.prototype,"readFeatures",null),Object(s.a)([Object(a.b)()],b.prototype,"geometryType",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],b.prototype,"mergedGeometry",null),Object(s.a)([Object(a.b)()],b.prototype,"routeId",void 0),Object(s.a)([Object(a.b)()],b.prototype,"routeName",void 0),Object(s.a)([Object(a.b)({value:null,readOnly:!0})],b.prototype,"strings",null),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalDriveTime"}}})],b.prototype,"totalDriveTime",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalLength"}}})],b.prototype,"totalLength",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalTime"}}})],b.prototype,"totalTime",void 0),b=Object(s.a)([Object(n.a)("esri.tasks.support.DirectionsFeatureSet")],b);var y=b;t.a=y},828:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]}),this),r}}function o(e){return new s(e)}},829:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(0),o=(r(7),r(63)),a=r(2),i=(r(6),r(8),r(1),r(3)),n=r(11),l=r(5),c=(r(9),r(10),r(53)),u=r(461);const p=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await Object(c.default)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let o=0;o<r.supportedTravelModes.length;o++)r.supportedTravelModes[o].id||(r.supportedTravelModes[o].id=r.supportedTravelModes[o].itemId);const s=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:s}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:s}}catch(r){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:r})}}(t,e):async function(e,t){const{data:r}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:s}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),a=Object(o.b)("helperServices.routingUtilities.url",s);if(!a)return{supportedTravelModes:[],defaultTravelMode:null};const i=Object(l.J)(e),n=/\/solveClosestFacility$/.test(i.path)?"Route":/\/solveClosestFacility$/.test(i.path)?"ClosestFacility":"ServiceAreas",u=await Object(c.default)(a+("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n,token:t}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(d=t.value)}return{supportedTravelModes:p,defaultTravelMode:d}}(t,e),{defaultTravelMode:a,supportedTravelModes:i}=await s;return r.defaultTravelMode=a,r.supportedTravelModes=i,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.k)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u.a)){};d=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],d)},848:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return M})),r.d(t,"c",(function(){return N})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return B}));var s=r(63),o=r(2),a=r(11),i=r(53),n=r(138),l=r(0),c=(r(7),r(6),r(8),r(1)),u=r(23),p=r(3),d=(r(5),r(9),r(10),r(16)),f=r(55),b=r(159),y=r(807),v=r(818);let j=class extends d.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(c.b)({type:v.a,json:{write:!0}})],j.prototype,"directions",void 0),Object(l.a)([Object(c.b)({type:f.a,json:{write:!0}})],j.prototype,"route",void 0),Object(l.a)([Object(c.b)({type:String,json:{write:!0}})],j.prototype,"routeName",void 0),Object(l.a)([Object(c.b)({type:[f.a],json:{write:!0}})],j.prototype,"stops",void 0),j=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResult")],j);var O=j;function h(e){return e&&b.default.fromJSON(e).features.map((e=>e))}let m=class extends d.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return h(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return h(e)}readPolygonBarriers(e){return h(e)}};Object(l.a)([Object(c.b)({aliasOf:"pointBarriers"})],m.prototype,"barriers",void 0),Object(l.a)([Object(c.b)({type:[y.a]})],m.prototype,"messages",void 0),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"pointBarriers",void 0),Object(l.a)([Object(u.a)("pointBarriers",["barriers","pointBarriers"])],m.prototype,"readPointBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"polylineBarriers",void 0),Object(l.a)([Object(u.a)("polylineBarriers")],m.prototype,"readPolylineBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],m.prototype,"polygonBarriers",void 0),Object(l.a)([Object(u.a)("polygonBarriers")],m.prototype,"readPolygonBarriers",null),Object(l.a)([Object(c.b)({type:[O]})],m.prototype,"routeResults",void 0),m=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResultsContainer")],m);var g=m;function T(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function M(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:i=[],spatialReference:n=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,b,y=!0;const v=o&&a||i&&n||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(f=e.routeName),r[f]={directions:e}})),o.forEach((e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=v),r[f].route=e})),i.forEach((e=>{b=e.attributes,-1===t.indexOf(f=b.RouteName||d)&&(t.push(f),r[f]={}),f!==d&&(y=!1),e.geometry&&(e.geometry.spatialReference=v),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)})),i.length>0&&!0===y&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const j=t.map((e=>(r[e].routeName=e===d?null:e,r[e])));return g.fromJSON({routeResults:j,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function B(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.k)(e)&&e.hasZ)return!0}return!1}async function N(e){if(!e)throw new a.a("network-service:missing-url","Url to Network service is missing");const{data:t}=await Object(i.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let s=0;s<t.supportedTravelModes.length;s++)t.supportedTravelModes[s].id||(t.supportedTravelModes[s].id=t.supportedTravelModes[s].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(i.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(t){throw new a.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:t})}}(e):async function(e){const{data:t}=await Object(i.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(i.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=Object(s.b)("helperServices.routingUtilities.url",r);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(n.c)(e),l=/\/solve$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",c=await Object(i.default)(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:l}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:o,supportedTravelModes:l}=await r;return t.defaultTravelMode=o,t.supportedTravelModes=l,t}}}]);
//# sourceMappingURL=57.17812d12.chunk.js.map
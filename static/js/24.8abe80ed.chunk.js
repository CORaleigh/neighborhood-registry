(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[24,10],{801:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},821:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return l})),r.d(t,"contentToBlob",(function(){return h})),r.d(t,"fetchResources",(function(){return i})),r.d(t,"getSiblingOfSameType",(function(){return b})),r.d(t,"getSiblingOfSameTypeI",(function(){return y})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return c})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r(2),a=r(11),s=r(5),n=r(53);async function i(e,t={},r){await e.load(r);const a=Object(s.y)(e.itemUrl,"resources"),{start:n=1,num:i=10,sortOrder:l="asc",sortField:c="created"}=t,p={query:{start:n,num:i,sortOrder:l,sortField:c},signal:Object(o.i)(r,"signal")},u=await e.portal._request(a,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,n){if(!e.hasPath())throw new a.a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(n);const i=Object(s.y)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[l,c]=u(e.path),p=await h(r),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),d.append("fileName",c),d.append("file",p,c),d.append("f","json"),Object(o.k)(n)&&n.access&&d.append("access",n.access),await e.portalItem.portal._request(i,{method:"post",body:d,signal:Object(o.i)(n,"signal")}),e}async function c(e,t,r){if(!t.hasPath())throw new a.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=Object(s.y)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:Object(o.i)(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(s.y)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o.i)(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=Object(s.n)(e);return Object(o.j)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,n]=u(t);return[a,n,r]}async function h(e){return e instanceof Blob?e:(await Object(n.default)(e.url,{responseType:"blob"})).data}function b(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s.y)(r,t+o))}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(s.y)(r,t+o))}},823:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(2),a=r(11),s=r(53);async function n(e,t,r,n,i){let l=null;if(Object(o.k)(r)){const t=`${e}/nodepages/`,a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(s.default)(a,{query:{f:"json"},responseType:"json",signal:i})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(u){Object(o.k)(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,u),l=u}}if(!t)return null;const c=`${e}/nodes/`,p=c+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(s.default)(p,{query:{f:"json"},responseType:"json",signal:i})).data,urlPrefix:c}}catch(u){throw new a.a("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:p})}}},826:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var o=r(0),a=(r(7),r(2)),s=r(6),n=(r(8),r(1)),i=r(23),l=r(3),c=r(21),p=r(11),u=r(5),d=r(9),h=(r(10),r(15)),b=r(35),y=r(45),m=r(53),f=r(91),O=r(326),j=r(801);function v(e){e&&e.writtenProperties&&e.writtenProperties.forEach((e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(j.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var g=r(170),w=r(227),S=r(222),I=r(821);async function x(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map((e=>e.resource.path))),s=new Set,n=[];a.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const c of t.resources.toUpdate)if(o.delete(c.resource.path),a.has(c.resource.path)||s.has(c.resource.path)){const{resource:t,content:o,finish:a,error:s}=c,i=Object(I.getSiblingOfSameTypeI)(t,Object(d.a)());e.paths.push(i.path),n.push(R({resource:i,content:o,finish:a,error:s},r))}else e.paths.push(c.resource.path),n.push(P(c,r)),s.add(c.resource.path);for(const c of t.resources.toAdd)n.push(R(c,r)),e.paths.push(c.resource.path);if(o.forEach((e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch((()=>{})))})),0===n.length)return;const i=await Object(h.j)(n);Object(h.u)(r);const l=i.filter((e=>"error"in e)).map((e=>e.error));if(l.length>0)throw new p.a("save:resources","Failed to save one or more resources",{errors:l})}async function R(e,t){const r=await Object(S.c)(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function P(e,t){const r=await Object(S.c)(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var U=r(129),T=r(823);const F=s.a.getLogger("esri.layers.mixins.SceneService"),A=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(h.i)((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return b.a.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new b.a(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return y.a.fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<N))?null:new y.a({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},s=o.split(".");return s.length>=2&&(a.major=parseInt(s[0],10),a.minor=parseInt(s[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(g.i)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(g.e)(this.url);Object(a.k)(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(g.a)(o)}set url(e){const t=Object(g.h)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:F});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(g.j)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(u.J)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(T.a)(this.parsedUrl.path,this.rootNode,e,F,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new p.a("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<N||null==this.fullExtent||this.fullExtent.hasZ)return;const s=a.obb.halfSize,n=a.obb.center[2],i=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<N)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new p.a("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(m.default)(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(m.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...E,...t};let o=O.default.from(e);o||(F.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new p.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||f.a.getDefault();await this._ensureLoadBeforeSave(),o.type=M,o.portal=a;const s={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(n,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:n}),await x(this.resourceReferences,s,null),this.portalItem=o,v(s),s.portalItem=o,o}async _save(e){const t={...E,...e};this.portalItem||(F.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new p.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==M&&(F.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+M),await Promise.reject(new p.a("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${M}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(u.J)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||f.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await x(this.resourceReferences,r,null),v(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter((e=>"error"===e.type)).map((e=>new p.a(e.name,e.message,e.details)));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),o.validationOptions.enabled||_){const t=(await r.e(208).then(r.bind(null,1111))).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(F.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===o.validationOptions.failPolicy){const e=t.map((e=>new p.a("sceneservice:schema-validation",e))).concat(a);throw new p.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new p.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o.a)([Object(n.b)(U.c)],t.prototype,"id",void 0),Object(o.a)([Object(n.b)({type:b.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(i.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o.a)([Object(n.b)({type:y.a})],t.prototype,"fullExtent",void 0),Object(o.a)([Object(i.a)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o.a)([Object(n.b)({readOnly:!0,type:w.a})],t.prototype,"heightModelInfo",void 0),Object(o.a)([Object(n.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o.a)([Object(n.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o.a)([Object(n.b)({readOnly:!0})],t.prototype,"version",void 0),Object(o.a)([Object(i.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(o.a)([Object(n.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(n.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o.a)([Object(n.b)({type:String})],t.prototype,"title",void 0),Object(o.a)([Object(i.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o.a)([Object(i.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(o.a)([Object(n.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o.a)([Object(n.b)(U.n)],t.prototype,"url",null),Object(o.a)([Object(c.a)("url")],t.prototype,"writeUrl",null),Object(o.a)([Object(n.b)()],t.prototype,"parsedUrl",null),Object(o.a)([Object(n.b)({readOnly:!0})],t.prototype,"store",void 0),Object(o.a)([Object(n.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o.a)([Object(l.a)("esri.layers.mixins.SceneService")],t),t},N=-1e38,_=!1,M="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},868:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return h}));var o=r(0),a=(r(7),r(6),r(8),r(1)),s=r(30),n=r(3),i=(r(5),r(9),r(10),r(16));let l=class extends i.a{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o.a)([Object(a.b)({type:Number})],l.prototype,"nodesPerPage",void 0),Object(o.a)([Object(a.b)({type:Number})],l.prototype,"rootIndex",void 0),Object(o.a)([Object(a.b)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=Object(o.a)([Object(n.a)("esri.layer.support.I3SNodePageDefinition")],l);let c=class extends i.a{constructor(){super(...arguments),this.factor=1}};Object(o.a)([Object(a.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],c.prototype,"id",void 0),Object(o.a)([Object(a.b)({type:Number})],c.prototype,"factor",void 0),c=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialTexture")],c);let p=class extends i.a{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o.a)([Object(a.b)({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o.a)([Object(a.b)({type:c})],p.prototype,"baseColorTexture",void 0),Object(o.a)([Object(a.b)({type:c})],p.prototype,"metallicRoughnessTexture",void 0),Object(o.a)([Object(a.b)({type:Number})],p.prototype,"metallicFactor",void 0),Object(o.a)([Object(a.b)({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends i.a{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o.a)([Object(s.a)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o.a)([Object(a.b)({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o.a)([Object(a.b)({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o.a)([Object(s.a)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o.a)([Object(a.b)({type:c})],u.prototype,"normalTexture",void 0),Object(o.a)([Object(a.b)({type:c})],u.prototype,"occlusionTexture",void 0),Object(o.a)([Object(a.b)({type:c})],u.prototype,"emissiveTexture",void 0),Object(o.a)([Object(a.b)({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o.a)([Object(a.b)({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o.a)([Object(n.a)("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends i.a{};Object(o.a)([Object(a.b)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),Object(o.a)([Object(s.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o.a)([Object(n.a)("esri.layer.support.I3STextureFormat")],d);let h=class extends i.a{constructor(){super(...arguments),this.atlas=!1}};Object(o.a)([Object(a.b)({type:[d]})],h.prototype,"formats",void 0),Object(o.a)([Object(a.b)({type:Boolean})],h.prototype,"atlas",void 0),h=Object(o.a)([Object(n.a)("esri.layer.support.I3STextureSetDefinition")],h);let b=class extends i.a{};Object(o.a)([Object(s.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],b.prototype,"type",void 0),Object(o.a)([Object(a.b)({type:Number})],b.prototype,"component",void 0),b=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryAttribute")],b);let y=class extends i.a{};Object(o.a)([Object(s.a)({draco:"draco"})],y.prototype,"encoding",void 0),Object(o.a)([Object(a.b)({type:[String]})],y.prototype,"attributes",void 0),y=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryCompressedAttributes")],y);let m=class extends i.a{constructor(){super(...arguments),this.offset=0}};Object(o.a)([Object(a.b)({type:Number})],m.prototype,"offset",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"position",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"normal",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"uv0",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"color",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"uvRegion",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"featureId",void 0),Object(o.a)([Object(a.b)({type:b})],m.prototype,"faceRange",void 0),Object(o.a)([Object(a.b)({type:y})],m.prototype,"compressedAttributes",void 0),m=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryBuffer")],m);let f=class extends i.a{};Object(o.a)([Object(s.a)({triangle:"triangle"})],f.prototype,"topology",void 0),Object(o.a)([Object(a.b)()],f.prototype,"geometryBuffers",void 0),f=Object(o.a)([Object(n.a)("esri.layer.support.I3SGeometryDefinition")],f)},991:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}}},992:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var o=r(2),a=r(15),s=r(56),n=r(53),i=r(91),l=r(326),c=r(324);class p{constructor(e,t,r){this.parsedUrl=e,this.portalItem=t,this.signal=r,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();if(Object(o.j)(t))return this.loadFromUrl();const r=await this.findAndLoadRelatedPortalItem(t);return Object(o.j)(r)?null:this.loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();return Object(o.j)(t)?null:this.findAndLoadRelatedPortalItem(t)}async fetchRootDocument(){if(Object(o.k)(this.rootDocument))return this.rootDocument;if(Object(o.j)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await Object(n.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const t=null==(e=s.b)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await Object(n.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(o){Object(a.t)(o)}return null}async findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(t){return Object(a.t)(t),null}}async loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(e.url);return new c.default({url:t,portalItem:e}).load({signal:this.signal})}async loadFromUrl(){const e=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new c.default({url:e}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,a=this.fetchRootDocument(),s=Object(n.default)(t,r),[i,l]=await Promise.all([s,a]),c=l&&l.layers,p=i.data&&i.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(c)){for(let n=0;n<Math.min(c.length,p.length);n++)if(c[n].id===o)return`${t}/${p[n].id}`}else if(o<p.length)return`${t}/${p[o].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const e=(await this.fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l.default({id:e}),r=await this.fetchServiceOwningPortalUrl();Object(o.k)(r)&&(t.portal=new i.a({url:r}));try{return t.load({signal:this.signal})}catch(s){return Object(a.t)(s),null}}}}}]);
//# sourceMappingURL=24.8abe80ed.chunk.js.map
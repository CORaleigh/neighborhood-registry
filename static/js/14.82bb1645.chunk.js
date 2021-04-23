(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[14],{841:function(e,t,r){"use strict";function i(e,t,r){return t.flatten((({sublayers:e})=>e)).length!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!s(e,t))}function a(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!s(e,t)}function s(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const a=r.length;for(const{id:s}of e){for(;i<a&&r[i]!==s;)i++;if(i>=a)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return i}))},864:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(11);class a{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new a(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),l=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(l))throw new i.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(l))throw new i.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const n=parseInt(r,10),o=parseInt(s,10);return new a(n,o,t)}}},948:function(e,t,r){"use strict";var i,a=r(0),s=(r(7),r(13)),l=r(6),n=r(8),o=r(70),c=r(1),u=r(39),y=r(23),p=r(3),d=r(21),b=r(11),h=r(5),f=(r(9),r(108)),O=(r(10),r(45)),g=(r(65),r(25)),m=r(41),j=r(288),v=r(243),S=r(53),I=r(121),w=r(51),x=r(349),L=(r(132),r(360),r(328),r(429),r(430),r(431),r(329),r(330)),D=(r(365),r(241)),E=r(456),_=r(302),P=r(438),T=r(517),F=r(231),M=r(465),N=r(99),V=r(76);function A(e){return e&&"esriSMS"===e.type}function C(e,t,r){var i;return{ignoreOrigin:!0,enabled:!!r&&"map-image"===(null==(i=r.layer)?void 0:i.type)&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(f.d)(r.origin))}}function J(e,t,r){var i;return{enabled:!!r&&"tile"===(null==(i=r.layer)?void 0:i.type)&&this._isOverridden(t)}}function $(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function k(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(f.d)(r.origin))}}const q=l.a.getLogger("esri.layers.support.Sublayer");let B=0;const U=new Set;U.add("layer"),U.add("parent"),U.add("loaded"),U.add("loadStatus"),U.add("loadError"),U.add("loadWarnings");let Q=i=class extends(Object(V.b)(Object(x.a)(Object(j.a)(I.a)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t;if(!this.layer&&!this.url)throw new b.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(t=this.source)?void 0:t.type))r=(await Object(S.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var i;let t=this.id;"map-layer"===(null==(i=this.source)?void 0:i.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new E.a(this.fields||[])}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeGlobalID"===r.type)return r.name}get id(){const e=this._get("id");return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeOID"===r.type)return r.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(n.e)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if(Object(w.c)(t)){q.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new T.a({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return Object(n.m)(g.a.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,t){const r=(t=t.layerDefinition||t).typeIdField;if(r){const e=Object(m.q)(t.fields,r);if(e)return e.name}return null}get url(){var e,t;const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,i=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==i?void 0:i.type))return`${r.path}/${i.mapLayerId}`;const a={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${Object(h.D)(a)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=Object(o.a)(this),t=new i;return Object(o.a)(t).store=e.clone(U),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Object(M.a)(this,e)}createQuery(){return new N.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,a=new(0,(await Promise.resolve().then(r.bind(null,324))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(a.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(a.labelingInfo=Object(s.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(a.visible=this.visible),this.originIdOf("minScale")>0&&(a.minScale=this.minScale),this.originIdOf("maxScale")>0&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(a.popupTemplate=Object(s.a)(this.popupTemplate)),this.originIdOf("renderer")>2&&(a.renderer=Object(s.a)(this.renderer)),"data-layer"===(null==(t=this.source)?void 0:t.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(a.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(a.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(a.customParameters=this.layer.customParameters),a}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let a=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(a=e),!!a)})),a}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),t){return this.load().then((()=>{if(!this.get("capabilities.operations.supportsQuery"))throw new b.a("Sublayer.queryFeatures","this layer doesn't support queries.");return Promise.all([Promise.resolve().then(r.bind(null,201)),Promise.resolve().then(r.bind(null,159))])})).then((([{executeQuery:r},{default:i}])=>r(this.url,N.a.from(e),this.layer?this.layer.spatialReference:null,{...t,query:{...this.layer.customParameters}}).then((e=>i.fromJSON(e.data))))).then((e=>(e&&e.features&&e.features.forEach((e=>{e.sourceLayer=this})),e)))}toExportImageJSON(){var e;const t={id:this.id,source:(null==(e=this.source)?void 0:e.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression&&(t.definitionExpression=this.definitionExpression);const r=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{});if(Object.keys(r).some((e=>r[e]>2))){const e=t.drawingInfo={};r.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),r.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&r.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),r.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)A(e.symbol)&&t(e.symbol);"symbol"in e&&A(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&A(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let a,s;switch(e){case"definitionExpression":a="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":a="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":a="supportsDynamicLayers",s="supportsModification"}const l=Object(o.a)(this).getDefaultOrigin();if("service"!==l){if(a&&!1===this.get(`layer.capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${a}'`);if(s&&!1===this.get(`capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||(q.error(new b.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){q.error(new b.a("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===$||e===C,isTileImageLayerOverridePolicy:e=>e===J},Object(a.a)([Object(c.b)({readOnly:!0})],Q.prototype,"capabilities",void 0),Object(a.a)([Object(y.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),Object(a.a)([Object(c.b)({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",overridePolicy:C}}})],Q.prototype,"definitionExpression",null),Object(a.a)([Object(c.b)({type:[D.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),Object(a.a)([Object(c.b)({readOnly:!0})],Q.prototype,"fieldsIndex",null),Object(a.a)([Object(c.b)({type:O.a,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"globalIdField",void 0),Object(a.a)([Object(y.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),Object(a.a)([Object(c.b)({type:n.a,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),Object(a.a)([Object(c.b)({value:null,type:[_.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:$}}})],Q.prototype,"labelingInfo",null),Object(a.a)([Object(d.a)("labelingInfo")],Q.prototype,"writeLabelingInfo",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:$}}})],Q.prototype,"labelsVisible",null),Object(a.a)([Object(c.b)({value:null})],Q.prototype,"layer",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:k}}})],Q.prototype,"legendEnabled",void 0),Object(a.a)([Object(c.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),Object(a.a)([Object(c.b)({type:Number,value:0,json:{write:{overridePolicy:$}}})],Q.prototype,"minScale",null),Object(a.a)([Object(y.a)("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),Object(a.a)([Object(c.b)({type:Number,value:0,json:{write:{overridePolicy:$}}})],Q.prototype,"maxScale",null),Object(a.a)([Object(y.a)("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"objectIdField",void 0),Object(a.a)([Object(y.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),Object(a.a)([Object(c.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:$}}})],Q.prototype,"opacity",null),Object(a.a)([Object(y.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),Object(a.a)([Object(d.a)("opacity")],Q.prototype,"writeOpacity",null),Object(a.a)([Object(c.b)({json:{type:n.a,write:{target:"parentLayerId",allowNull:!0,overridePolicy:$}}})],Q.prototype,"parent",void 0),Object(a.a)([Object(d.a)("parent")],Q.prototype,"writeParent",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:k,writer(e,t,r){t[r]=!e}}}})],Q.prototype,"popupEnabled",void 0),Object(a.a)([Object(c.b)({type:v.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:k}}})],Q.prototype,"popupTemplate",void 0),Object(a.a)([Object(c.b)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),Object(a.a)([Object(c.b)({types:L.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$},origins:{"web-scene":{types:L.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$}}}}})],Q.prototype,"renderer",null),Object(a.a)([Object(c.b)({types:{key:"type",base:null,typeMap:{"data-layer":F.a,"map-layer":T.a}},cast(e){if(e){if("mapLayerId"in e)return Object(n.d)(T.a,e);if("dataSource"in e)return Object(n.d)(F.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:$}}})],Q.prototype,"source",null),Object(a.a)([Object(c.b)()],Q.prototype,"sourceJSON",void 0),Object(a.a)([Object(c.b)({value:null,json:{type:[n.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:$}}})],Q.prototype,"sublayers",null),Object(a.a)([Object(u.a)("sublayers")],Q.prototype,"castSublayers",null),Object(a.a)([Object(d.a)("sublayers")],Q.prototype,"writeSublayers",null),Object(a.a)([Object(c.b)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:k}}})],Q.prototype,"title",void 0),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"typeIdField",void 0),Object(a.a)([Object(y.a)("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),Object(a.a)([Object(c.b)({type:[P.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),Object(a.a)([Object(c.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:J}}})],Q.prototype,"url",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:$}}})],Q.prototype,"visible",null),Object(a.a)([Object(d.a)("visible")],Q.prototype,"writeVisible",null),Q=i=Object(a.a)([Object(p.a)("esri.layers.support.Sublayer")],Q);var G=Q;t.a=G},979:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(0),a=(r(7),r(6),r(8),r(1)),s=r(23),l=r(3),n=r(5),o=(r(9),r(10),r(15)),c=r(35),u=r(45),y=r(53),p=r(864),d=r(129);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,a=-1!==r.indexOf("query"),s=-1!==r.indexOf("map"),l=!!t.exportTilesAllowed,n=-1!==r.indexOf("tilemap"),o="tile"!==i&&!!t.supportsDynamicLayers,c="tile"!==i&&(!t.tileInfo||o),u="tile"!==i&&(!t.tileInfo||o),y="tile"!==i,d=!!t.cimVersion&&p.a.parse(t.cimVersion).since(1,4);return{operations:{supportsQuery:a,supportsExportMap:s,supportsExportTiles:l,supportsTileMap:n},exportMap:s?{supportsArcadeExpressionForLabeling:d,supportsSublayersChanges:y,supportsDynamicLayers:o,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:u}:null,exportTiles:l?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(y.default)(Object(n.J)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}}),(e=>({error:e}))));const t=await this._allLayersAndTablesPromise;if(Object(o.u)(e),"result"in t)return t.result;throw t.error}};return Object(i.a)([Object(a.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(i.a)([Object(s.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(i.a)([Object(a.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(i.a)([Object(a.b)({type:u.a})],t.prototype,"fullExtent",void 0),Object(i.a)([Object(a.b)(d.c)],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(i.a)([Object(a.b)(d.j)],t.prototype,"popupEnabled",void 0),Object(i.a)([Object(a.b)({type:c.a})],t.prototype,"spatialReference",void 0),Object(i.a)([Object(a.b)()],t.prototype,"version",void 0),Object(i.a)([Object(s.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(i.a)([Object(l.a)("esri.layers.mixins.ArcGISMapService")],t),t}},980:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var i=r(0),a=(r(7),r(6)),s=(r(8),r(70)),l=r(1),n=r(3),o=r(11),c=(r(5),r(9),r(108)),u=(r(10),r(25)),y=r(225),p=r(948),d=r(841);const b=a.a.getLogger("esri.layers.TileLayer");const h=u.a.ofType(p.a);function f(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&f(e.sublayers,t)}))}const O=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new y.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.watch("sublayers",((e,t)=>this._handleSublayersChange(e,t)),!0)}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=Object(c.d)(t.origin);if(i<2)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:a,origin:l}=this.createSublayersForOrigin("web-document"),n=Object(s.a)(this);n.setDefaultOrigin(l),this._set("sublayers",new h(a)),n.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=Object(c.d)("web-document"===e?"web-map":e);let r=2,i=this.sublayersSourceJSON[2].layers,a=this.sublayersSourceJSON[2].context,s=null;const l=[3,4,5].filter((e=>e<=t));for(const c of l){const e=this.sublayersSourceJSON[c];Object(d.b)(e.layers)&&(r=c,i=e.layers,a=e.context,e.visibleLayers&&(s={visibleLayers:e.visibleLayers,context:e.context}))}const n=[3,4,5].filter((e=>e>r&&e<=t));let o=null;for(const c of n){const{layers:e,visibleLayers:t,context:r}=this.sublayersSourceJSON[c];e&&(o={layers:e,context:r}),t&&(s={visibleLayers:t,context:r})}const u=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const a=new p.a;if(a.read(e,t),i[a.id]=a,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(a)}else r.unshift(a)})),r):r}(i,a),y=new Map,b=new Set;if(o)for(const c of o.layers)y.set(c.id,c);if(s)for(const c of s.visibleLayers)b.add(c);return f(u,(e=>{o&&e.read(y.get(e.id),o.context),s&&e.read({defaultVisibility:b.has(e.id)},s.context)})),{origin:Object(c.b)(r),sublayers:new h({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new o.a("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return Object(i.a)([Object(l.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(i.a)([Object(l.b)({readOnly:!0,type:u.a.ofType(p.a)})],t.prototype,"serviceSublayers",void 0),Object(i.a)([Object(l.b)({value:null,type:h,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(i.a)([Object(l.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.SublayersOwner")],t),t}}}]);
//# sourceMappingURL=14.82bb1645.chunk.js.map
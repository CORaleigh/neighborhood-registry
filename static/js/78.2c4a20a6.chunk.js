(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[78],{1113:function(e,t,i){"use strict";i.r(t),i.d(t,"FeatureServiceSnappingSourceWorker",(function(){return G}));var s=i(0),r=(i(7),i(2)),n=i(6),a=(i(8),i(1)),o=i(3),h=(i(5),i(9),i(10),i(15)),c=i(35),l=i(54),u=i(40),d=i(19),f=i(389),p=i(99),g=i(305),m=i(130),b=i(798),y=i(825),O=i(97),j=i(107),x=i(45),v=i(101),_=i(426),I=i(495),S=i(201),F=i(20);let B=class extends F.a{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then((t=>e.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this.process()}))}};Object(s.a)([Object(a.b)()],B.prototype,"updating",void 0),B=Object(s.a)([Object(o.a)("esri.core.AsyncSequence")],B);var w=i(76),T=i(222);class C{constructor(e,t){this.data=e,this.resolution=t,this.state={type:0},this.alive=!0}process(e){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 1:break;case 2:return this.state=this.gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 3:break;case 4:this.state=this.goToDone(this.state,e)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}gotoFetchCount(e,t){return{type:1,previous:e,task:Object(h.h)((async e=>{const i=await Object(T.d)(t.fetchCount(this,e));1===this.state.type&&(this.state=this.gotoFetchedCount(this.state,i.ok?i.value:1/0))}))}}gotoFetchedCount(e,t){return{type:2,featureCount:t,previous:e}}gotoFetchFeatures(e,t){return{type:3,previous:e,task:Object(h.h)((async i=>{const s=await Object(T.d)(t.fetchFeatures(this,e.featureCount,i));3===this.state.type&&(this.state=this.gotoFetchedFeatures(this.state,s.ok?s.value:[]))}))}}gotoFetchedFeatures(e,t){return{type:4,previous:e,features:t}}goToDone(e,t){return t.finish(this,e.features),{type:5,previous:e}}reset(){const e=this.state;switch(this.state={type:0},e.type){case 0:case 2:case 4:case 5:break;case 1:case 3:e.task.abort()}}intersects(e){return!(!Object(r.j)(e)&&this.data.extent)||(Object(v.k)(e,M),Object(v.n)(this.data.extent,M))}}const M=Object(v.g)(),E=n.a.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let k=class extends w.a{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new B,this.pendingEditsAbortController=Object(h.d)()}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(Object(r.k)(e)&&Object(r.k)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(()=>this.refresh())),this.updatingHandles.add(this,"tilesOfInterest",((e,t)=>{Object(j.c)(e,t,(({id:e},{id:t})=>e===t))||this.process()}),1)}destroy(){this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.process()}applyEdits(e){this.pendingEdits.push(e,(async e=>{if(0!==e.addedFeatures.length||0!==e.updatedFeatures.length||0!==e.deletedFeatures.length){for(const[,e]of this.pendingTiles)e.reset();await this.updatingHandles.addPromise(this.store.processEdits(e,((e,t)=>this.queryFeaturesById(e,t)),this.pendingEditsAbortController.signal)),this.processPendingTiles()}}))}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const e=Object(h.h)((async e=>{try{var t;const i=await Object(S.executeQueryForExtent)(this.url,new p.a({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:e});this.store.extent=x.a.fromJSON(null==(t=i.data)?void 0:t.extent)}catch(i){Object(h.t)(i),E.error("Failed to fetch data extent",i)}}));this.updatingHandles.addPromise(e.promise.then((()=>this.process()))),this.handles.add(Object(O.c)((()=>e.abort()))),this.fetchExtentTask=e}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}process(){!Object(r.k)(this.fetchExtentTask)||this.fetchExtentTask.finished?(this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()):this.setAvailability(0)}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability(Object(r.j)(e)?1:e.coveredArea/e.fullArea),!Object(r.j)(e))for(const{data:t,resolution:i}of e.missingTiles){const e=this.pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this.createPendingTile(t,i)}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const i=this.tilesOfInterest[t],s=this.store.process(i,((e,t)=>this.verifyTileComplexity(e,t)));Object(r.j)(e)?e=s:e.prepend(s)}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e)}processPendingTiles(){const e={fetchCount:(e,t)=>this.fetchCount(e,t),fetchFeatures:(e,t,i)=>this.fetchFeatures(e,t,i),finish:(e,t)=>this.finishPendingTile(e,t),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<X}verifyFeatureDensity(e,t){if(Object(r.j)(this.tileInfo))return!1;const i=this.tileSize*t;return e*(Y/(i*i))<R}ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<2&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability()}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability(Object(r.j)(e)?1:e.coveredArea/e.fullArea)}setAvailability(e){this._set("availability",e)}createPendingTile(e,t){const i=new C(e,t);return this.pendingTiles.set(e.id,i),i}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}async fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this.createCountQuery(e),{query:this.customParameters,timeout:A,signal:t})}async fetchFeatures(e,t,i){let s,n=0,a=0,o=t;for(;;){const h=this.createFeaturesQuery(e),c=this.setPagingParameters(h,n,o),{features:l,exceededTransferLimit:u}=await this.queryFeatures(h,i);if(c&&(n+=Object(r.q)(h.num)),a+=l.length,s=s?s.concat(l):l,o=t-a,!c||!u||o<=0)return s}}filterProperties(e){return Object(r.j)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}queryFeaturesById(e,t){const i=this.createFeaturesQuery(null);return i.objectIds=e,this.queryFeatures(i,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}async queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await Object(S.executeQueryPBF)(this.url,e,new I.b({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:A,signal:t});return Object(_.y)(s)}async queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await Object(S.executeQuery)(this.url,e,i,{query:this.configuration.customParameters,timeout:A,signal:t});return Object(_.b)(s,this.objectIdField)}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const t=this.createBaseQuery(e);return t.outFields=[this.objectIdField],t.returnGeometry=!0,Object(r.k)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}createBaseQuery(e){const t=new p.a({returnZ:!1,returnM:!1,geometry:Object(r.k)(this.tileInfo)&&Object(r.k)(e)?Object(v.p)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return Object(r.k)(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,h=s?p.a.MAX_MAX_RECORD_COUNT_FACTOR:1,c=h*((o||r)&&n?n:a||P);return e.start=t,s?(e.maxRecordCountFactor=Math.min(h,Math.ceil(i/c)),e.num=Math.min(i,e.maxRecordCountFactor*c)):e.num=Math.min(i,c),!0}};Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"url",void 0),Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"objectIdField",void 0),Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"capabilities",void 0),Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"sourceSpatialReference",void 0),Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"spatialReference",void 0),Object(s.a)([Object(a.b)({constructOnly:!0})],k.prototype,"store",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],k.prototype,"minimumVerticesPerFeature",null),Object(s.a)([Object(a.b)()],k.prototype,"filter",null),Object(s.a)([Object(a.b)()],k.prototype,"customParameters",null),Object(s.a)([Object(a.b)({readOnly:!0})],k.prototype,"configuration",null),Object(s.a)([Object(a.b)()],k.prototype,"tileInfo",null),Object(s.a)([Object(a.b)()],k.prototype,"tileSize",null),Object(s.a)([Object(a.b)()],k.prototype,"tilesOfInterest",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],k.prototype,"updating",null),Object(s.a)([Object(a.b)({readOnly:!0})],k.prototype,"availability",void 0),k=Object(s.a)([Object(o.a)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],k);const P=2e3,A=6e5,X=1e6,Y=25,R=1;var z=i(524),q=i(786);class H{constructor(){this._store=new Map,this._byteSize=0}set(e,t){this.delete(e),this._store.set(e,t),this._byteSize+=t.byteSize}delete(e){const t=this._store.get(e);return!!this._store.delete(e)&&(this._byteSize-=t.byteSize,!0)}get(e){return this.used(e),this._store.get(e)}has(e){return this.used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,t){for(const[i,s]of this._store){if(this._byteSize<=e)break;this.delete(i),t(s)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(e){const t=this._store.get(e);t&&(this._store.delete(e),this._store.set(e,t))}}let L=class extends F.a{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new q.a,this.tiles=new H,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=Object(v.g)()}add(e,t){const i=[];for(const s of t)0===this.referenceFeature(s.objectId)&&i.push(s);this.addTileStorage(e,new Set(t.map((({objectId:e})=>e))),this.byteSizeOfFeatures(t)),this.featureStore.addMany(i),this.tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this.removeTileStorage(e)))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,i){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}addTileStorage(e,t,i){this.tiles.set(e.id,new N(e,t,i)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t)}removeTileStorage(e){const t=[];for(const s of e.objectIds)1===this.unreferenceFeature(s)&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this.tiles.delete(i),this.tileBounds.delete(i)}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const i of e)t.objectIds.delete(i);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}async processEditsRefetch(e,t,i){const s=(await t(e,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of s){const e=Object(_.r)(this.tmpBoundingRect,a.geometry,r,n);this.tileBounds.forEachInBounds(e,(e=>{const t=this.tiles.get(e);this.featureStore.add(a),t.objectIds.has(a.objectId)||(t.objectIds.add(a.objectId),this.referenceFeature(a.objectId),this.tileFeatureCounts.set(t.data.id,t.objectIds.size))}))}}process(e,t=(()=>!0)){if(Object(r.j)(this.tileInfo)||!e.extent||Object(r.k)(this.extent)&&!Object(v.n)(Object(v.k)(this.extent,this.tmpBoundingRect),e.extent))return new Q(e);if(this.tiles.has(e.id))return new Q(e);const i=this.createTileTree(e,this.tileInfo);return this.simplify(i,t,null,0,1),this.collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}async fetchCount(e,t,i,s){const r=this.tileFeatureCounts.get(e.id);if(null!=r)return r;const n=await Object(S.executeQueryForCount)(t,i,s);return this.tileFeatureCounts.set(e.id,n.data.count),n.data.count}createTileTree(e,t){const i=new J(e.level,e.row,e.col);return t.updateTileInfo(i,1),this.tileBounds.forEachInBounds(e.extent,(s=>{const r=this.tiles.get(s).data;this.tilesAreRelated(e,r)&&this.populateChildren(i,r,t,this.tileFeatureCounts.get(r.id)||0)})),i}tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}populateChildren(e,t,i,s){const n=t.level-e.level-1;if(n<0)return void(e.isLeaf=!0);const a=t.row>>n,o=t.col>>n,h=e.row<<1,c=o-(e.col<<1)+(a-h<<1),l=e.children[c];if(Object(r.k)(l))this.populateChildren(l,t,i,s);else{const r=new J(e.level+1,a,o);i.updateTileInfo(r,1),e.children[c]=r,this.populateChildren(r,t,i,s)}}simplify(e,t,i,s,n){const a=n*n;if(e.isLeaf)return t(this.getFeatureCount(e),n)?0:(this.remove(e),Object(r.k)(i)&&(i.children[s]=null),a);const o=n/2,h=o*o;let c=0;for(let l=0;l<e.children.length;l++){const i=e.children[l];c+=Object(r.k)(i)?this.simplify(i,t,e,l,o):h}return 0===c?this.mergeChildren(e):1-c/a<V&&(this.purge(e),Object(r.k)(i)&&(i.children[s]=null),c=a),c}mergeChildren(e){const t=new Set;let i=0;this.forEachLeaf(e,(e=>{const s=this.tiles.get(e.id);if(s){i+=s.byteSize;for(const e of s.objectIds)t.has(e)||(t.add(e),this.referenceFeature(e));this.remove(e)}})),this.addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}forEachLeaf(e,t){for(const i of e.children)Object(r.j)(i)||(i.isLeaf?t(i):this.forEachLeaf(i,t))}purge(e){if(!Object(r.j)(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++){const i=e.children[t];this.purge(i),e.children[t]=null}}collectMissingTiles(e,t,i){const s=new D(i,e,this.extent);return this.collectMissingTilesRecurse(t,s,1),s.info}collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let n=0;n<e.children.length;n++){const i=e.children[n];Object(r.j)(i)?t.addMissing(e.level+1,(e.row<<1)+((2&n)>>1),(e.col<<1)+(1&n),s):this.collectMissingTilesRecurse(i,t,s)}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}byteSizeOfFeatures(e){let t=0;for(const i of e)t+=this.byteSizeOfFeature(i);return t}byteSizeOfFeature(e){return 32+this.byteSizeOfGeometry(e.geometry)+Object(z.a)(e.attributes)}byteSizeOfGeometry(e){if(!e)return 0;const t=Object(z.b)(e.lengths,4);return 32+Object(z.b)(e.coords,8)+t}get test(){return{tiles:Array.from(this.tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((e=>`${e}:${this.refCounts.get(e)}`))}}};Object(s.a)([Object(a.b)({constructOnly:!0})],L.prototype,"featureStore",void 0),Object(s.a)([Object(a.b)()],L.prototype,"tileInfo",void 0),Object(s.a)([Object(a.b)()],L.prototype,"extent",void 0),Object(s.a)([Object(a.b)()],L.prototype,"maximumByteSize",void 0),L=Object(s.a)([Object(o.a)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],L);class N{constructor(e,t,i){this.data=e,this.objectIds=t,this.byteSize=i}}class J{constructor(e,t,i){this.level=e,this.row=t,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(Object(r.k)(this.children[0])||Object(r.k)(this.children[1])||Object(r.k)(this.children[2])||Object(r.k)(this.children[3]))}}class Q{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=Object(v.b)(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}class D{constructor(e,t,i){this.tileInfo=e,this.extent=null,this.info=new Q(t),Object(r.k)(i)&&(this.extent=Object(v.k)(i))}addMissing(e,t,i,s){const n={id:null,level:e,row:t,col:i};this.tileInfo.updateTileInfo(n,1),!Object(r.k)(n.extent)||Object(r.k)(this.extent)&&!Object(v.n)(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:s}),this.info.coveredArea-=Object(v.b)(n.extent))}}const V=.18751;let G=class extends l.a.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=Object(h.f)(),this.handles=new u.a,this.updatingHandles=new g.a,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}async setup(e){const{geometryType:t,objectIdField:i,timeInfo:s,fields:r}=e.serviceInfo;return this.featureStore=new b.a({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new y.a({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:r,hasZ:!1,hasM:!1,objectIdField:i,timeInfo:s?f.a.fromJSON(s):null}),this.featureFetcher=new k({store:new L({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,capabilities:e.serviceInfo.capabilities,spatialReference:c.a.fromJSON(e.spatialReference),sourceSpatialReference:c.a.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(e=>this.emit("notify-availability",{availability:e})),!0),this.watch("updating",(()=>this.notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){return await this.whenSetup.promise,Object(h.u)(t),{result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:Object(r.k)(e.filter)?e.filter:{where:"1=1"}},Object(r.k)(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),Object(h.u)(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=Object(r.k)(e.tileInfo)?m.a.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),Object(h.u)(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),Object(h.u)(t),await Object(h.x)(Object(d.i)(this,"updating"),t),{result:{}}}async getDebugInfo(e,t){return Object(h.u)(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),Object(h.u)(t);const i=Object(h.f)();return this.pendingApplyEdits.set(e.id,i),this.featureFetcher.applyEdits(i.promise),this.updatingHandles.addPromise(i.promise),{result:{}}}async endApplyEdits(e,t){const i=this.pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),Object(h.u)(t),{result:{}}}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=Object(r.k)(e.filter)?p.a.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};Object(s.a)([Object(a.b)({readOnly:!0})],G.prototype,"updating",null),Object(s.a)([Object(a.b)()],G.prototype,"isInitializing",void 0),G=Object(s.a)([Object(o.a)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],G);t.default=function(){return new G}},780:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var s=i(2),r=i(107),n=i(100),a=i(735);class o{constructor(e=9,t){this.compareMinX=u,this.compareMinY=d,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),j.prune(),x.prune(),v.prune(),_.prune()}all(e){this._all(this.data,e)}search(e,t){let i=this.data;const s=this.toBBox;if(y(e,i))for(j.clear();i;){for(let r=0,n=i.children.length;r<n;r++){const n=i.children[r],a=i.leaf?s(n):n;y(e,a)&&(i.leaf?t(n):b(e,a)?this._all(n,t):j.push(n))}i=j.pop()}}collides(e){let t=this.data;const i=this.toBBox;if(!y(e,t))return!1;for(j.clear();t;){for(let s=0,r=t.children.length;s<r;s++){const r=t.children[s],n=t.leaf?i(r):r;if(y(e,n)){if(t.leaf||b(e,n))return!0;j.push(r)}}t=j.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new S([]),this}remove(e){if(!e)return this;let t,i=this.data,n=null,a=0,o=!1;const h=this.toBBox(e);for(v.clear(),_.clear();i||v.length>0;){var c;if(i||(i=Object(s.d)(v.pop()),n=v.data[v.length-1],a=null!=(c=_.pop())?c:0,o=!0),i.leaf&&(t=Object(r.e)(i.children,e,i.children.length,i.indexHint),-1!==t))return i.children.splice(t,1),v.push(i),this._condense(v),this;o||i.leaf||!b(i,h)?n?(a++,i=n.children[a],o=!1):i=null:(v.push(i),_.push(a),a=0,n=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let i=e;for(x.clear();i;){var s;if(!0===i.leaf)for(const e of i.children)t(e);else x.pushArray(i.children);i=null!=(s=x.pop())?s:null}}_build(e,t,i,s){const r=i-t+1;let n=this._maxEntries;if(r<=n){const s=new S(e.slice(t,i+1));return h(s,this.toBBox),s}s||(s=Math.ceil(Math.log(r)/Math.log(n)),n=Math.ceil(r/n**(s-1)));const a=new F([]);a.height=s;const o=Math.ceil(r/n),c=o*Math.ceil(Math.sqrt(n));O(e,t,i,c,this.compareMinX);for(let h=t;h<=i;h+=c){const t=Math.min(h+c-1,i);O(e,h,t,o,this.compareMinY);for(let i=h;i<=t;i+=o){const r=Math.min(i+o-1,t);a.children.push(this._build(e,i,r,s-1))}}return h(a,this.toBBox),a}_chooseSubtree(e,t,i,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==i;){let i,s=1/0,r=1/0;for(let n=0,a=t.children.length;n<a;n++){const a=t.children[n],o=f(a),h=g(e,a)-o;h<r?(r=h,s=o<s?o:s,i=a):h===r&&o<s&&(s=o,i=a)}t=i||t.children[0]}return t}_insert(e,t,i){const s=this.toBBox,r=i?e:s(e);v.clear();const n=this._chooseSubtree(r,this.data,t,v);for(n.children.push(e),l(n,r);t>=0&&v.data[t].children.length>this._maxEntries;)this._split(v,t),t--;this._adjustParentBBoxes(r,v,t)}_split(e,t){const i=e.data[t],s=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,s);const n=this._chooseSplitIndex(i,r,s);if(!n)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(n,i.children.length-n),o=i.leaf?new S(a):new F(a);o.height=i.height,h(i,this.toBBox),h(o,this.toBBox),t?e.data[t-1].children.push(o):this._splitRoot(i,o)}_splitRoot(e,t){this.data=new F([e,t]),this.data.height=e.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(e,t,i){let s,r,n;s=r=1/0;for(let a=t;a<=i-t;a++){const t=c(e,0,a,this.toBBox),o=c(e,a,i,this.toBBox),h=m(t,o),l=f(t)+f(o);h<s?(s=h,n=a,r=l<r?l:r):h===s&&l<r&&(r=l,n=a)}return n}_chooseSplitAxis(e,t,i){const s=e.leaf?this.compareMinX:u,r=e.leaf?this.compareMinY:d;this._allDistMargin(e,t,i,s)<this._allDistMargin(e,t,i,r)&&e.children.sort(s)}_allDistMargin(e,t,i,s){e.children.sort(s);const r=this.toBBox,n=c(e,0,t,r),a=c(e,i-t,i,r);let o=p(n)+p(a);for(let h=t;h<i-t;h++){const t=e.children[h];l(n,e.leaf?r(t):t),o+=p(n)}for(let h=i-t-1;h>=t;h--){const t=e.children[h];l(a,e.leaf?r(t):t),o+=p(a)}return o}_adjustParentBBoxes(e,t,i){for(let s=i;s>=0;s--)l(t.data[s],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const i=e.data[t];if(0===i.children.length)if(t>0){const s=e.data[t-1],n=s.children;n.splice(Object(r.e)(n,i,n.length,s.indexHint),1)}else this.clear();else h(i,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function h(e,t){c(e,0,e.children.length,t,e)}function c(e,t,i,s,r){r||(r=new S([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let n,a=t;a<i;a++)n=e.children[a],l(r,e.leaf?s(n):n);return r}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function u(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function g(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function m(e,t){const i=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),n=Math.min(e.maxY,t.maxY);return Math.max(0,r-i)*Math.max(0,n-s)}function b(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function y(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function O(e,t,i,r,n){const o=[t,i];for(;o.length;){const t=Object(s.d)(o.pop()),i=Object(s.d)(o.pop());if(t-i<=r)continue;const h=i+Math.ceil((t-i)/r/2)*r;Object(a.a)(e,h,i,t,n),o.push(i,h,h,t)}}const j=new n.a,x=new n.a,v=new n.a,_=new n.a({deallocator:void 0});class I extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new r.a}}class S extends I{constructor(e){super(),this.children=e,this.leaf=!0}}class F extends I{constructor(e){super(),this.children=e,this.leaf=!1}}},786:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i(7),r=i(780);const n={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new r.a(9,Object(s.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,i){n.minX=t[0],n.minY=t[1],n.maxX=t[2],n.maxY=t[3],e.search(n,i)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},798:function(e,t,i){"use strict";var s=i(2),r=i(6),n=i(11),a=i(54),o=i(101),h=i(426),c=i(131),l=i(786),u=i(220),d=i(144),f=i(723);const p={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new u.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(f.a)(new d.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new l.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.a,this.featureAdapter=p}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(o.g)(o.a);return this._featuresById.forEach((t=>{const i=this._boundsStore.get(t.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(c.k)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new n.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let a;if(this._markedIds.add(t),i?(e.displayId=i.displayId,a=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(s.k)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);a=Object(h.r)(a||Object(o.g)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,a),this._featuresById.set(t,e)}_remove(e){return Object(s.k)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}}}]);
//# sourceMappingURL=78.2c4a20a6.chunk.js.map
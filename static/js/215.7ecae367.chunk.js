(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[215],{1097:function(e,t,s){"use strict";s.r(t),s.d(t,"Opacity",(function(){return i}));s(7),s(287),s(454);var r=s(80);s(427);class i{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:r,height:i}=t;this._createOrResizeResources(e,r,i);const{context:a,painter:o}=e,{amount:n}=s,h=a.gl,l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,i,0,0,l),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(h.COLOR_BUFFER_BIT),o.blitTexture(a,l,9728,n)}_createOrResizeResources(e,t,s){const{context:i}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new r.a(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:t,height:s}))}}}}]);
//# sourceMappingURL=215.7ecae367.chunk.js.map
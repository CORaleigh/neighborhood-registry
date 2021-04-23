(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[211],{1096:function(t,i,e){"use strict";e.r(i),e.d(i,"Bloom",(function(){return l}));e(7),e(27),e(287),e(454);var s=e(427),r=e(792);const o=[1,0],n=[0,1],a=[1,.8,.6,.4,.2],h=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class l{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:{a_position:0}},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}draw(t,i,e){const{width:s,height:l}=i,{context:u,painter:p}=t,{materialManager:d}=p,m=u.gl,c=this._programDesc,{strength:_,radius:g,threshold:f}=e;this._quad||(this._quad=new r.a(u,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,s,l),u.setStencilTestEnabled(!1),u.setBlendingEnabled(!0),u.setBlendFunction(1,771),u.setStencilWriteMask(0);const b=this._quad;b.bind(),u.bindFramebuffer(this._intensityFBO);const F=d.getProgram(t,c.luminosityHighPass);u.bindProgram(F),u.bindTexture(i.colorTexture,0),F.setUniform1i("u_texture",0),F.setUniform3fv("u_defaultColor",[0,0,0]),F.setUniform1f("u_defaultOpacity",0),F.setUniform1f("u_luminosityThreshold",f),F.setUniform1f("u_smoothWidth",.01);const B=[Math.round(s/2),Math.round(l/2)];u.setViewport(0,0,B[0],B[1]),u.setClearColor(0,0,0,0),u.clear(m.COLOR_BUFFER_BIT),b.draw(),u.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let r=0;r<this._nMips;r++){const i=d.getProgram(t,c.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[r]}]);u.bindProgram(i),u.bindTexture(T,r+1),i.setUniform1i("u_colorTexture",r+1),i.setUniform2fv("u_texSize",B),i.setUniform2fv("u_direction",o),u.setViewport(0,0,B[0],B[1]);const e=this._mipsFBOs[r];u.bindFramebuffer(e.horizontal),b.draw(),T=e.horizontal.colorTexture,u.bindFramebuffer(e.vertical),u.bindTexture(T,r+1),i.setUniform2fv("u_direction",n),b.draw(),T=e.vertical.colorTexture,B[0]=Math.round(B[0]/2),B[1]=Math.round(B[1]/2)}u.setViewport(0,0,s,l);const O=d.getProgram(t,c.composite,[{name:"nummips",value:5}]);u.bindFramebuffer(this._compositeFBO),u.bindProgram(O),O.setUniform1f("u_bloomStrength",_),O.setUniform1f("u_bloomRadius",g),O.setUniform1fv("u_bloomFactors",a),O.setUniform3fv("u_bloomTintColors",h),u.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),O.setUniform1i("u_blurTexture1",1),u.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),O.setUniform1i("u_blurTexture2",2),u.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),O.setUniform1i("u_blurTexture3",3),u.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),O.setUniform1i("u_blurTexture4",4),u.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),O.setUniform1i("u_blurTexture5",5),b.draw(),u.bindFramebuffer(i),u.setBlendingEnabled(!0);const x=d.getProgram(t,c.blit);u.bindProgram(x),u.bindTexture(this._compositeFBO.colorTexture,6),x.setUniform1i("u_texture",6),u.setBlendFunction(1,1),b.draw(),b.unbind(),u.setBlendFunction(1,771),u.setStencilTestEnabled(!0)}_createOrResizeResources(t,i,e){const{context:r}=t;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===e)return;this._size[0]=i,this._size[1]=e;const o=[Math.round(i/2),Math.round(e/2)];this._compositeFBO?this._compositeFBO.resize(i,e):this._compositeFBO=new s.a(r,{colorTarget:0,depthStencilTarget:0,width:i,height:e}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new s.a(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new s.a(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new s.a(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}}}]);
//# sourceMappingURL=211.7f82fa22.chunk.js.map
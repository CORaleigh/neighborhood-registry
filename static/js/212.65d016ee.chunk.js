(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[212],{1095:function(t,e,r){"use strict";r.r(e),r.d(e,"Blur",(function(){return o}));r(7),r(27),r(287),r(454);var s=r(427),i=r(792);const a=[1,0],n=[0,1];class o{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,e,r){const{context:s}=t,{type:a,radius:n}=r;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new i.a(s,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,e,n):this._radialBlur(t,e),o.unbind()}_gaussianBlur(t,e,r){const{context:s,state:i,painter:o,pixelRatio:u}=t,{size:l}=i,{materialManager:d}=o,h=this._programDesc,b=this._quad,c=[Math.round(u*l[0]),Math.round(u*l[1])],p=this._blurFBO,g=d.getProgram(t,h.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);s.bindProgram(g),s.setBlendingEnabled(!1),s.bindFramebuffer(p),s.bindTexture(e.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",a),g.setUniform1f("u_sigma",r),b.draw(),s.bindFramebuffer(e),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.bindTexture(p.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",n),b.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(1,771),s.setStencilTestEnabled(!0)}_radialBlur(t,e){const{context:r,painter:s}=t,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const u=i.getProgram(t,a.radialBlur);r.bindProgram(u),r.setBlendingEnabled(!1),r.bindTexture(e.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const l=i.getProgram(t,a.blit);r.bindProgram(l),r.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw()}_createOrResizeResources(t){const{context:e,state:r,pixelRatio:i}=t,{size:a}=r,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new s.a(e,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}}}]);
//# sourceMappingURL=212.65d016ee.chunk.js.map
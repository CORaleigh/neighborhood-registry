(this["webpackJsonpneighborhood-registry"]=this["webpackJsonpneighborhood-registry"]||[]).push([[138],{648:function(t,a,n){"use strict";n.r(a),n.d(a,"calcite_graph",(function(){return c}));var r=n(219),i=n(712);function e(t){return t<0?-1:1}function s(t,a,n){var r=a[0]-t[0],i=a[1]-t[1];return r?(3*i/r-n)/2:n}function o(t,a,n,r,i){var e=t[0],s=t[1],o=a[0],h=a[1],c=(o-e)/3;return"C "+i([e+c,s+c*n]).join(",")+" "+i([o-c,h-c*r]).join(",")+" "+i([o,h]).join(",")}function h(t){var a=t.data,n=t.min,r=t.max,i=t.t;if(0===a.length)return"";var h,c,m,p=i(a[0]),f=p[0],l=p[1],u=i(n),d=u[0],b=u[1],g=i(r)[0],k=a.reduce((function(t,n,r){if(c=a[r-2],m=a[r-1],r>1){var p=function(t,a,n){var r=a[0]-t[0],i=n[0]-a[0],s=(a[1]-t[1])/(r||i<0&&0),o=(n[1]-a[1])/(i||r<0&&0),h=(s*i+o*r)/(r+i);return(e(s)+e(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(h))||0}(c,m,n),f=void 0===h?s(c,m,p):h,l=o(c,m,f,p,i);return h=p,t+" "+l}return t}),"M "+d+","+b+" L "+d+","+l+" L "+f+","+l),w=a[a.length-1];return k+" "+o(m,w,h,s(m,w,h),i)+" L "+g+","+b+" Z"}var c=function(){function t(t){Object(r.k)(this,t),this.data=[],this.width=300,this.height=100,this.maskId="calcite-graph-mask-"+Object(i.a)()}return t.prototype.render=function(){var t=this,a=t.data,n=t.width,i=t.height,e=t.highlightMax,s=t.highlightMin,o=this.maskId;if(!a||0===a.length)return Object(r.i)("svg",{class:"svg",height:i,preserveAspectRatio:"none",viewBox:"0 0 "+n+" "+i,width:n});var c=function(t){var a=t[0],n=a[0],r=a[1],i=[n,r],e=[n,r];return t.reduce((function(t,a){var n=t.min,r=t.max,i=a[0],e=a[1];return{min:[Math.min(n[0],i),Math.min(n[1],e)],max:[Math.max(r[0],i),Math.max(r[1],e)]}}),{min:i,max:e})}(a),m=c.min,p=c.max,f=function(t){var a=t.width,n=t.height,r=t.min,i=t.max,e=i[0]-r[0],s=i[1]-r[1];return function(t){return[t[0]/e*a,n-t[1]/s*n]}}({min:m,max:p,width:n,height:i}),l=f([s,p[1]])[0],u=f([e,p[1]])[0],d=h({data:a,min:m,max:p,t:f});return Object(r.i)("svg",{class:"svg",height:i,preserveAspectRatio:"none",viewBox:"0 0 "+n+" "+i,width:n},void 0!==s?Object(r.i)("svg",{class:"svg",height:i,preserveAspectRatio:"none",viewBox:"0 0 "+n+" "+i,width:n},Object(r.i)("mask",{height:"100%",id:o+"1",width:"100%",x:"0%",y:"0%"},Object(r.i)("path",{d:"\n              M 0,0\n              L "+(l-1)+",0\n              L "+(l-1)+","+i+"\n              L 0,"+i+"\n              Z\n            ",fill:"white"})),Object(r.i)("mask",{height:"100%",id:o+"2",width:"100%",x:"0%",y:"0%"},Object(r.i)("path",{d:"\n              M "+(l+1)+",0\n              L "+(u-1)+",0\n              L "+(u-1)+","+i+"\n              L "+(l+1)+", "+i+"\n              Z\n            ",fill:"white"})),Object(r.i)("mask",{height:"100%",id:o+"3",width:"100%",x:"0%",y:"0%"},Object(r.i)("path",{d:"\n                  M "+(u+1)+",0\n                  L "+n+",0\n                  L "+n+","+i+"\n                  L "+(u+1)+", "+i+"\n                  Z\n                ",fill:"white"})),Object(r.i)("path",{class:"graph-path",d:d,mask:"url(#"+o+"1)"}),Object(r.i)("path",{class:"graph-path--highlight",d:d,mask:"url(#"+o+"2)"}),Object(r.i)("path",{class:"graph-path",d:d,mask:"url(#"+o+"3)"})):Object(r.i)("path",{class:"graph-path",d:d}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.h)(this)},enumerable:!1,configurable:!0}),t}();c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}"},712:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));var r=function(){return[2,1,1,1,3].map((function(t){for(var a="",n=0;n<t;n++)a+=(65536*(1+Math.random())|0).toString(16).substring(1);return a})).join("-")}}}]);
//# sourceMappingURL=138.7257022d.chunk.js.map
(function(e){function t(t){for(var n,a,c=t[0],l=t[1],d=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var l=o[c];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"01ea":function(e,t,o){"use strict";o("2463")},2463:function(e,t,o){var n=o("c89c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("e4587986",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function r(e,t,o,r,i,a){var c=Object(n["resolveComponent"])("tool");return Object(n["openBlock"])(),Object(n["createBlock"])(c)}var i=function(e){return Object(n["pushScopeId"])("data-v-123eb326"),e=e(),Object(n["popScopeId"])(),e},a={class:"search"},c={class:"video"},l=i((function(){return Object(n["createElementVNode"])("h1",{class:"seH1"},"Setting",-1)})),d={class:"setTime"},u={class:"aset"},s=i((function(){return Object(n["createElementVNode"])("p",{style:{display:"inline-block"}},"hour",-1)})),p=i((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),f={class:"aset"},b=i((function(){return Object(n["createElementVNode"])("p",{style:{display:"inline-block"}},"min",-1)})),m=i((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),h={key:0},v={key:0,class:"countDownTime"};function x(e,t,o,r,i,x){var g=Object(n["resolveComponent"])("youtube-iframe-vue");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"tool",onLoad:t[5]||(t[5]=function(e){return x.restart()})},[Object(n["createElementVNode"])("h1",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(i.logo[0]),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(i.logo[1]),1)]),Object(n["createElementVNode"])("div",a,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.videoUrl=e}),type:"text"},null,512),[[n["vModelText"],i.videoUrl]]),Object(n["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return x.searchVideo()})},"Go")]),Object(n["createElementVNode"])("div",c,[i.forIframeDisplay?(Object(n["openBlock"])(),Object(n["createBlock"])(g,{key:0,videoId:this.videoProp},null,8,["videoId"])):Object(n["createCommentVNode"])("",!0)]),l,Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",u,[s,p,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.hour=e}),type:"number",min:"0"},null,512),[[n["vModelText"],i.hour]])]),Object(n["createElementVNode"])("div",f,[b,m,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.min=e}),type:"number",min:"0"},null,512),[[n["vModelText"],i.min]])]),i.Start?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",h,"Started")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:1,onClick:t[4]||(t[4]=function(e){return x.countDown()})},"Start"))]),i.Start?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",v,[Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(i.hourL)+" : "+Object(n["toDisplayString"])(i.minL),1)])):Object(n["createCommentVNode"])("",!0)],32)}function g(e,t,o,r,i,a){var c=Object(n["resolveComponent"])("YouTube");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{src:e.videoId,height:"200",width:"100%",onReady:e.play,ref:"youtube"},null,8,["src","onReady"])}var j=o("8e25"),O=o.n(j),y=Object(n["defineComponent"])({components:{YouTube:O.a},props:{videoId:String,vars:{width:null,height:null}},methods:{play:function(){this.$refs.youtube.playVideo()}}}),w=o("6b0d"),k=o.n(w);const V=k()(y,[["render",g]]);var S=V,E={name:"tool",components:{youtubeIframeVue:S},data:function(){return{logo:["Music","Limit"],hour:0,min:0,videoUrl:" ",videoProp:" ",Start:!1,video:" ",forIframeDisplay:!1,hourL:"00",minL:"00"}},methods:{restart:function(){this.videoUrl=""},searchVideo:function(){" "!==this.videoUrl&&""!==this.videoUrl&&(this.forIframeDisplay=!1,this.videoProp=this.videoUrl,this.forIframeDisplay=!0)},timesUp:function(){this.hour=0,this.min=0,this.Start=!1,this.forIframeDisplay=!1},countDown:function(){var e=this,t=this.hour,o=this.min;if(this.hourL=t<10?"0"+t:t,this.minL=o<10?"0"+o:o,this.Start=!0,0===t)var n=setInterval((function(){if(o--,0===o)return clearInterval(n),e.forIframeDisplay=!1,void(e.Start=!1);e.minL=o<10?"0"+o:o}),6e4);else if(0!==t)var r=setInterval((function(){if(0===o&&0===t)return clearInterval(r),e.forIframeDisplay=!1,void(e.Start=!1);0!==t&&0===o&&(t--,o+=60),o--,e.minL=o<10?"0"+o:o,e.hourL=t<10?"0"+t:t}),6e4)}}};o("01ea");const N=k()(E,[["render",x],["__scopeId","data-v-123eb326"]]);var I=N,D={name:"app",components:{tool:I}};o("f0eb");const B=k()(D,[["render",r]]);var M=B;Object(n["createApp"])(M).mount("#app")},6003:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}#app{display:flex;align-items:center;justify-content:center;height:100vh;background:linear-gradient(90deg,#b4b5f8,#4fa8e3 50%,#29b9d6)}",""]),e.exports=t},bbc5:function(e,t,o){var n=o("6003");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("f56ea5bc",n,!0,{sourceMap:!1,shadowMode:!1})},c89c:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".tool[data-v-123eb326]{background-color:#fff;padding:10px 20px;border:none;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:90vw}.tool>h1[data-v-123eb326]:first-child{color:#000;font-weight:lighter;margin-bottom:10px}.tool>h1:first-child>span[data-v-123eb326]{color:#08f}.search[data-v-123eb326]{display:flex;flex-direction:row;align-items:center}.search>input[data-v-123eb326]{outline:none;height:30px;font-size:1.2rem;-webkit-padding-start:2px;padding-inline-start:2px;border:3px solid #08f;border-radius:5px;max-width:60vw}.search>button[data-v-123eb326]{position:relative;left:-5px;height:30px;width:30px;font-size:1.1rem;background-color:#08f;border:none;border-radius:0 5px 5px 0;color:#fff}.video[data-v-123eb326]{margin-top:10px;background-color:#e5e5e5;width:100%;height:200px;border-radius:15px}.setTime[data-v-123eb326]{width:90%;margin-top:10px;display:flex;flex-wrap:wrap}.seH1[data-v-123eb326]{margin-top:8px;font-size:1.5rem;font-weight:400}.setTime input[data-v-123eb326]{outline:none;font-size:1rem;border:2px solid #08f;border-radius:5px;padding:2px 2px 2px 1px;width:80px;margin-right:5px;margin-bottom:10px}.aset>p[data-v-123eb326]{color:#5a5a5a;font-weight:lighter;text-transform:capitalize}.setTime>button[data-v-123eb326]{cursor:pointer;outline:none;font-size:1rem;border:2px solid #08f;border-radius:5px;padding:2px 2px 2px 1px;height:26px;width:80px;margin-top:21px;background-color:#08f;color:#fff}.countDownTime>p[data-v-123eb326]{font-size:1.2rem}",""]),e.exports=t},f0eb:function(e,t,o){"use strict";o("bbc5")}});
//# sourceMappingURL=app.24611e7f.js.map
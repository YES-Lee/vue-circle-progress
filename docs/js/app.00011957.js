(function(r){function t(t){for(var s,a,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)a=i[d],n[a]&&p.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(r[s]=u[s]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var r,t=0;t<o.length;t++){for(var e=o[t],s=!0,i=1;i<e.length;i++){var u=e[i];0!==n[u]&&(s=!1)}s&&(o.splice(t--,1),r=a(a.s=e[0]))}return r}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=s,a.d=function(r,t,e){a.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},a.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,t){if(1&t&&(r=a(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var s in r)a.d(e,s,function(t){return r[t]}.bind(null,s));return e},a.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return a.d(t,"a",t),t},a.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},a.p="/vue-circle-progress/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),e()})({0:function(r,t,e){r.exports=e("56d7")},"16d6":function(r,t,e){"use strict";var s=e("d813"),n=e.n(s);n.a},"56d7":function(r,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"control-bar"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.progress,expression:"progress"}],attrs:{type:"range"},domProps:{value:r.progress},on:{__r:function(t){r.progress=t.target.value}}})]),e("div",{staticClass:"instances"},[e("div",{staticClass:"progress"},[e("circle-progress",{attrs:{value:r.progress,duration:r.duration}})],1),e("div",{staticClass:"progress"},[e("circle-progress",{attrs:{value:r.progress,duration:r.duration,"bar-width":28}})],1),e("div",{staticClass:"progress"},[e("circle-progress",{attrs:{value:r.progress,duration:r.duration,"bar-color":"#00bcd4","bar-round":""}})],1)])])},o=[],a=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"circle-progress-container"},[e("svg",{staticClass:"circle-progress",attrs:{version:"1.1",viewbox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"progress-bg",attrs:{stroke:r.bgBarColor,"stroke-width":r.barWidth+"%",cx:"50%",cy:"50%",r:r.circleRadius+"%"}}),e("circle",{staticClass:"progress-bar",attrs:{stroke:r.barColor,"stroke-linecap":r.barRound?"round":"","stroke-width":r.barWidth+"%",cx:"50%",cy:"50%",r:r.circleRadius+"%","stroke-dasharray":r.len+"%","stroke-dashoffset":r.progress+"%"}})]),e("div",{staticClass:"progress-text-panel"},[r._t("default",[e("p",{staticClass:"progress-number"},[r._v(r._s(r.animatedProgress)+"%")])])],2)])},i=[],u=(e("c5f6"),e("2e20")),c={props:{value:{type:[Number,String],default:0},duration:{type:Number,default:500},barWidth:{type:[Number,String],default:14},barColor:{type:String,default:"#f69626"},bgBarColor:{type:String,default:"#f1f1f6"},barRound:{type:Boolean,default:!1}},watch:{value:function(r){this.firstLoad||this.tween(+r)}},computed:{circleRadius:function(){return(100-+this.barWidth)/2},progress:function(){return(1-this.animatedProgress/100)*this.len},animatedProgress:function(){return this.tweenedProgress.toFixed(0)}},created:function(){this.len=2*Math.PI*this.circleRadius},mounted:function(){this.firstLoad&&(this.tween(+this.value),this.firstLoad=!1)},data:function(){return{len:0,tweenedProgress:0,firstLoad:!0}},methods:{tween:function(r){u["a"].to(this.$data,+this.duration/1e3,{tweenedProgress:r})}}},l=c,d=(e("16d6"),e("2877")),p=Object(d["a"])(l,a,i,!1,null,"3448090c",null);p.options.__file="circle-progress.vue";var f=p.exports,g={name:"app",components:{circleProgress:f},mounted:function(){},data:function(){return{progress:50,duration:500}}},v=g,h=(e("7c55"),Object(d["a"])(v,n,o,!1,null,null,null));h.options.__file="App.vue";var b=h.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(r){return r(b)}}).$mount("#app")},"5c48":function(r,t,e){},"7c55":function(r,t,e){"use strict";var s=e("5c48"),n=e.n(s);n.a},d813:function(r,t,e){}});
//# sourceMappingURL=app.00011957.js.map
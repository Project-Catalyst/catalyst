(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(t,e,r){t.exports={wrap:"wrap_6vP8iFho",content:"content_k-Vbwf_r",text:"text_1gTOrSSE",animation:"animation_3M8g6L0p",paused:"paused_2rPoZi0R"}},395:function(t,e,r){r(1)({target:"String",proto:!0},{repeat:r(396)})},396:function(t,e,r){"use strict";var n=r(50),a=r(21);t.exports="".repeat||function(t){var e=String(a(this)),r="",o=n(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},397:function(t,e,r){"use strict";var n=r(1),a=r(33),o=[].reverse,i=[1,2];n({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),o.call(this)}})},398:function(t,e,r){var n=r(1),a=r(399),o=r(102);n({target:"Array",proto:!0},{fill:a}),o("fill")},399:function(t,e,r){"use strict";var n=r(12),a=r(106),o=r(14);t.exports=function(t){for(var e=n(this),r=o(e.length),i=arguments.length,s=a(i>1?arguments[1]:void 0,r),u=i>2?arguments[2]:void 0,c=void 0===u?r:a(u,r);c>s;)e[s++]=t;return e}},400:function(t,e,r){"use strict";var n=r(317),a=r.n(n);r.d(e,"default",(function(){return a.a}))},444:function(t,e,r){"use strict";r.r(e);r(192),r(395),r(397),r(398);var n={name:"MarqueeText",functional:!0,props:{duration:{type:Number,default:15},repeat:{type:Number,default:2,validator:function(t){return t>0}},paused:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},render:function(t,e){var r=e.$style,n=e.props,a=n.duration,o=n.repeat,i=n.paused,s=n.reverse,u=e.children,c=e.data,l=c.staticClass,p=c.key,d=c.on,f=t("div",{class:r.text,style:{animationDuration:"".concat(a,"s"),animationDirection:s?"reverse":void 0}},u);return t("div",{key:p,on:d,class:[l,r.wrap]},[t("div",{class:[i?r.paused:void 0,r.content]},Array(o).fill(f))])}},a=r(400),o=r(27);var i=Object(o.a)(n,void 0,void 0,!1,(function(t){this.$style=a.default.locals||a.default}),null,null);e.default=i.exports}}]);
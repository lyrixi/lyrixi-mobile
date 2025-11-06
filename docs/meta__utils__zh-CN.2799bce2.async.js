"use strict";(self.webpackChunklyrixi_mobile=self.webpackChunklyrixi_mobile||[]).push([[9529],{41570:function(s,e,n){n.r(e);var o=n(36467);function f(l){var v=l.date,g=l.content;return new Promise(function(i){var u,y,d,r,c=o.DateUtil.format(v,"YYYYMMDD"),a=((u=window.loginUser)===null||u===void 0?void 0:u.name)||"unknown",m=((y=window.loginUser)===null||y===void 0?void 0:y.id)||"unknown",D=o.Device.platform||"unknown",t="".concat(c,"_").concat(D,"_").concat(a,"_").concat(m,".txt"),x=["UserAgent: ".concat(navigator.userAgent||""),"TenantId: ".concat(((d=window.loginUser)===null||d===void 0?void 0:d.tenantId)||""),"UserId: ".concat(((r=window.loginUser)===null||r===void 0?void 0:r.id)||""),"Date: ".concat(c),g].join(`
`);o.Request.post("/fileupload/v1/uploadTextToLogCenter.do",{fileName:t,fileContent:x}).then(function(h){h.code==="1"?i(!0):i(!1)}).catch(function(h){console.error("\u65E5\u5FD7\u4E0A\u4F20\u5931\u8D25:",h),i(!1)})})}e.default=f},74130:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-array-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,62132))})),asset:{type:"BLOCK",id:"src-utils-array-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(63455).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},91866:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-asset-util-demo-loadjs":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,13534))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-loadjs",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(88724).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}},"src-utils-asset-util-demo-getfileextension":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,16334))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-getfileextension",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(64288).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},83131:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return a}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(71415),y=n.n(u),d=n(36467),r=n(2550),c=n(90067),a={"src-utils-bridge-demo-all":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,97157))})),asset:{type:"BLOCK",id:"src-utils-bridge-demo-all",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(72629).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),vconsole:u,"lyrixi-mobile":d},renderOpts:{compile:function(){var m=g()(l()().mark(function t(){var x,h=arguments;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(250).then(n.bind(n,90250));case 2:return p.abrupt("return",(x=p.sent).default.apply(x,h));case 3:case"end":return p.stop()}},t)}));function D(){return m.apply(this,arguments)}return D}()}},"src-utils-bridge-demo-dingtalk":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,88079))})),asset:{type:"BLOCK",id:"src-utils-bridge-demo-dingtalk",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(28606).Z},react:{type:"NPM",value:"19.1.1"},"react-syntax-highlighter":{type:"NPM",value:"15.6.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"react-syntax-highlighter":r,"react-syntax-highlighter/dist/esm/styles/prism":c,"lyrixi-mobile":d},renderOpts:{compile:function(){var m=g()(l()().mark(function t(){var x,h=arguments;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(250).then(n.bind(n,90250));case 2:return p.abrupt("return",(x=p.sent).default.apply(x,h));case 3:case"end":return p.stop()}},t)}));function D(){return m.apply(this,arguments)}return D}()}}}},7858:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-clipboard-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,34323))})),asset:{type:"BLOCK",id:"src-utils-clipboard-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(4076).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},87045:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-dom-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,953))})),asset:{type:"BLOCK",id:"src-utils-dom-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(32209).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},2156:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-date-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,63702))})),asset:{type:"BLOCK",id:"src-utils-date-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(91018).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},41968:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-debugger-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,77659))})),asset:{type:"BLOCK",id:"src-utils-debugger-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(40025).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},23188:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-device-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,61904))})),asset:{type:"BLOCK",id:"src-utils-device-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58469).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},35410:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-event-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,95816))})),asset:{type:"BLOCK",id:"src-utils-event-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(50312).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},32160:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-full-screen-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,63369))})),asset:{type:"BLOCK",id:"src-utils-full-screen-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(7425).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},42531:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-geo-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,64868))})),asset:{type:"BLOCK",id:"src-utils-geo-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(70997).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},46101:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return a}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y=n(27484),d=n.n(y),r=n(33852),c=n.n(r),a={"src-utils-locale-util-demo-locale":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,37017))})),asset:{type:"BLOCK",id:"src-utils-locale-util-demo-locale",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(49178).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u,dayjs:y,"dayjs/locale/zh-cn":r},renderOpts:{compile:function(){var m=g()(l()().mark(function t(){var x,h=arguments;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(250).then(n.bind(n,90250));case 2:return p.abrupt("return",(x=p.sent).default.apply(x,h));case 3:case"end":return p.stop()}},t)}));function D(){return m.apply(this,arguments)}return D}()}}}},83636:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return d}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y=n(41570),d={"src-utils-logger-demo-logger":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,42248))})),asset:{type:"BLOCK",id:"src-utils-logger-demo-logger",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(71773).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"},"./upload.js":{type:"FILE",value:n(37182).Z}},entry:"index.jsx"},context:{"./upload.js":y,react:o||(o=n.t(i,2)),"lyrixi-mobile":u,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Logger/demos/upload.js":y},renderOpts:{compile:function(){var r=g()(l()().mark(function a(){var m,D=arguments;return l()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,n.e(250).then(n.bind(n,90250));case 2:return x.abrupt("return",(m=x.sent).default.apply(m,D));case 3:case"end":return x.stop()}},a)}));function c(){return r.apply(this,arguments)}return c}()}}}},43567:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return r}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(71415),y=n.n(u),d=n(36467),r={"src-utils-math-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,7930))})),asset:{type:"BLOCK",id:"src-utils-math-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(14444).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),vconsole:u,"lyrixi-mobile":d},renderOpts:{compile:function(){var c=g()(l()().mark(function m(){var D,t=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,t));case 3:case"end":return h.stop()}},m)}));function a(){return c.apply(this,arguments)}return a}()}}}},19524:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return r}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(71415),y=n.n(u),d=n(36467),r={"src-utils-object-util-demo-demo1":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,65911))})),asset:{type:"BLOCK",id:"src-utils-object-util-demo-demo1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(8815).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),vconsole:u,"lyrixi-mobile":d},renderOpts:{compile:function(){var c=g()(l()().mark(function m(){var D,t=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,t));case 3:case"end":return h.stop()}},m)}));function a(){return c.apply(this,arguments)}return a}()}}}},11693:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-request-demo-common":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,46203))})),asset:{type:"BLOCK",id:"src-utils-request-demo-common",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(68191).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}},"src-utils-request-demo-cache":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,21484))})),asset:{type:"BLOCK",id:"src-utils-request-demo-cache",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(64981).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},27388:function(s,e,n){var o;n.r(e),n.d(e,{demos:function(){return y}});var f=n(17061),l=n.n(f),v=n(17156),g=n.n(v),i=n(67294),u=n(36467),y={"src-utils-storage-demo-usecachestate":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,79014))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-usecachestate",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(56626).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}},"src-utils-storage-demo-localstorage":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,40900))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-localstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(50233).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}},"src-utils-storage-demo-sessionstorage":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,21926))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-sessionstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(9300).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}},"src-utils-storage-demo-storage":{component:i.memo(i.lazy(function(){return Promise.all([n.e(1415),n.e(9154),n.e(8611),n.e(2690),n.e(2433)]).then(n.bind(n,74717))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-storage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(4070).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:o||(o=n.t(i,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var d=g()(l()().mark(function c(){var a,m=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,m));case 3:case"end":return t.stop()}},c)}));function r(){return d.apply(this,arguments)}return r}()}}}},81380:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},76319:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},83133:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},1568:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},97246:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},27725:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},73775:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},56974:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},74653:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},31217:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},6684:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},70013:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868",paraId:0,tocIndex:1},{value:"LocaleUtil.setLocale(language, data)\u8BBE\u7F6E\u8BED\u8A00, \u8BBE\u7F6E\u540E, \u4E24\u4E2A\u53D8\u91CF\u5C06\u6709\u503C: window.lyrixiLocaleLanguage \u6807\u8BC6\u8BED\u8A00, window.lyrixiLocaleData \u8BB0\u5F55\u56FD\u9645\u5316\u6570\u636E",paraId:1,tocIndex:2},{value:"LocaleUtil.setLocale \u540E, LocaleUtil.locale \u9ED8\u8BA4\u8BFB\u53D6 window.lyrixiLocaleData \u5BF9\u8C61",paraId:2,tocIndex:3},{value:`import React from 'react'
import { LocaleUtil } from 'lyrixi-mobile'

// \u5176\u4E2Dkey\u7684\u503C\u4E3A: \u534A\u5F84{0}\u7C73
LocaleUtil.locale('\u534A\u5F841000\u7C73', 'key', [1000]) // => \u534A\u5F841000\u7C73
`,paraId:3,tocIndex:3},{value:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u4FEE\u6539window.lyrixiLocaleData\u4FEE\u6539\u56FD\u9645\u5316\u6570\u636E",paraId:4,tocIndex:3},{value:`\u76EE\u5F55: src/utils/LocaleUtil/resources/*.json
\u6587\u4EF6:`,paraId:5,tocIndex:4},{value:"en_US",paraId:6,tocIndex:4},{value:"zh_CN",paraId:6,tocIndex:4},{value:"zh_HK",paraId:6,tocIndex:4},{value:"vi_VN",paraId:6,tocIndex:4}]},56597:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},63040:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},42472:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},89159:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},97666:function(s,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[]},63455:function(s,e){e.Z=`import React from 'react'
import { Clipboard, Toast } from 'lyrixi-mobile'

export default () => {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-mobile', {
      onSuccess: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
`},64288:function(s,e){e.Z=`import React from 'react'
import { AssetUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
        )}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet.pdf')}</div>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.image'
        )}
      </div>
      <div>
        {AssetUtil.getFileExtension(
          '//colaboy.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.'
        ) || 'No Extension'}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet. a') || 'No Extension'}</div>
    </>
  )
}
`},88724:function(s,e){e.Z=`import React from 'react'
import { AssetUtil } from 'lyrixi-mobile'

export default () => {
  function handleLoadJsByCallback() {
    AssetUtil.loadJs('//colaboy.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js', {
      id: 'leaflet-js',
      onSuccess: () => {
        alert('Js load succeeded')
      },
      onError: () => {
        alert('Js load failed')
      }
    })
  }
  async function handleLoadJsByAsync() {
    let isOk = await AssetUtil.loadJs(
      '//colaboy.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js',
      {
        id: 'leaflet-js'
      }
    )
    if (isOk) {
      alert('Js load succeeded')
    } else {
      alert('Js load failed')
    }
  }
  return (
    <>
      <div onClick={handleLoadJsByCallback}>Load js by callback</div>
      <div onClick={handleLoadJsByAsync}>Load js by async</div>
    </>
  )
}
`},72629:function(s,e){e.Z=`import React, { useEffect, useRef, useState } from 'react'
import vconsole from 'vconsole'

import { Loading, Button, Bridge, Page, Location, Image, Share, Divider, Card } from 'lyrixi-mobile'

new vconsole()

export default () => {
  const [videos, setVideos] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      status: 'success'
    },
    {
      id: '2',
      fileThumbnail: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/test/1.mp4',
      status: 'error'
    }
  ])
  const [photos, setPhotos] = useState([
    {
      id: '1',
      fileThumbnail: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      status: 'success'
    },
    {
      id: '2',
      fileThumbnail: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      fileUrl: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
      status: 'error'
    }
  ])
  const [location, setLocation] = useState([])
  const [shareTo, setShareTo] = useState({
    wechat: {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    wecom: {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    dingtalk: {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    },
    lark: {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
      url: 'https://www.baidu.com'
    }
  })

  const imageLocalIds = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      setLocation({
        latitude: 31.990374883871525,
        longitude: 118.73769931504451,
        type: 'gcj02',
        address: '\u5357\u4EAC\u65B0\u57CE\u79D1\u6280\u56ED'
      })
    }, 5000)
  }, [])

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>\u7EC4\u4EF6</Divider>
        <Card>
          <Divider>\u5B9A\u4F4D</Divider>
          <Location.Combo
            // config={{
            //   key: '',
            //   type: 'bmap'
            // }}
            allowClear
            autoFit
            clickAction="location"
            placeholder={'\u70B9\u51FB\u5B9A\u4F4D'}
            value={location}
            previewVisible
            chooseVisible
            onChange={(result) => {
              console.log(result)
              setLocation(result)
            }}
          />
        </Card>

        <Card>
          <Divider>\u62CD\u7167</Divider>
          <Image list={photos} count={20} />
        </Card>

        <Card>
          <Divider>\u5C0F\u89C6\u9891</Divider>
          <Image list={videos} count={20} type="video" />
        </Card>

        <Divider>\u754C\u9762\u63A5\u53E3</Divider>
        <Card>
          <Divider>\u6253\u5F00\u65B0\u7A97\u53E3\u63A5\u53E3</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.openWindow({ title: '\u6D4B\u8BD5', url: 'https://www.baidu.com/' })
            }}
          >
            openWindow
          </Button>
        </Card>
        <Card>
          <Divider>\u5173\u95ED\u5F53\u524D\u7F51\u9875\u7A97\u53E3\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)</Divider>
          <a href="/#/test?title=test&isFromApp=confirm-close:11">\u8FD4\u56DE\u63D0\u793A11, \u5E76\u5173\u95EDwebview</a>
          <br />
          <a href="/#/test?title=test&isFromApp=confirm-close">\u8FD4\u56DE\u63D0\u793A, \u5E76\u5173\u95EDwebview</a>
          <br />
          <a href="/#/test?title=test&isFromApp=confirm:11">\u8FD4\u56DE\u63D0\u793A11</a>
          <br />
          <a href="/#/test?title=test&isFromApp=confirm">\u8FD4\u56DE\u63D0\u793A</a>
          <br />
          <a href="/#/test?title=test&isFromApp=1">\u8FD4\u56DE\u65F6\u5C06\u4F1A\u5173\u95EDwebview</a>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.closeWindow()
            }}
          >
            closeWindow(\u5168\u5E73\u53F0\u652F\u6301)
          </Button>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.back()
            }}
          >
            back(\u5168\u5E73\u53F0\u652F\u6301)
          </Button>
        </Card>
        <Card>
          <Divider>\u76D1\u542C\u9875\u9762\u8FD4\u56DE\u4E8B\u4EF6(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.onHistoryBack(() => {
                console.log('\u8FD4\u56DE\u76D1\u542C')
                alert('\u8FD4\u56DE\u76D1\u542C')
              })
            }}
          >
            onHistoryBack
          </Button>
        </Card>

        <Card>
          <Divider>\u4FEE\u6539\u9875\u9762title</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.setTitle({
                title: '\u81EA\u5B9A\u4E49\u6807\u9898'
              })
            }}
          >
            setTitle
          </Button>
        </Card>

        <Card>
          <Divider>\u9000\u51FA\u81F3\u767B\u5F55\u9875\u9762(\u4EC5\u5BA2\u6237\u7AEF)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.logOut()
            }}
          >
            logout
          </Button>
        </Card>

        <Card>
          <Divider>\u8FD4\u56DE\u9996\u9875(\u4EC5\u8BA2\u8D27\u5BA2\u6237\u7AEF\u652F\u6301)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.goHome()
            }}
          >
            goHome
          </Button>
        </Card>

        <Divider>\u626B\u7801\u63A5\u53E3</Divider>
        <Card>
          <Divider>\u8C03\u7528365\u626B\u7801\u63A5\u53E3</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.scanQRCode({
                scanType: ['barCode'],
                onSuccess: (res) => {
                  console.log(res)
                  alert(JSON.stringify(res))
                },
                onError: (error) => {
                  console.log(error)
                  alert(JSON.stringify(error))
                }
              })
            }}
          >
            scanQRCode
          </Button>
        </Card>

        <Divider>\u56FE\u50CF\u63A5\u53E3</Divider>
        <Card>
          <Divider>\u62CD\u7167\u6216\u4ECE\u624B\u673A\u76F8\u518C\u4E2D\u9009\u56FE\u63A5\u53E3(\u4EC5\u652F\u6301\u5BA2\u6237\u7AEF,\u5FAE\u4FE1,\u4F01\u5FAE,\u5C0F\u7A0B\u5E8F)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.chooseImage({
                sizeType: ['original', 'compressed'], // \u53EF\u4EE5\u6307\u5B9A\u662F\u539F\u56FE\u8FD8\u662F\u538B\u7F29\u56FE\uFF0C\u9ED8\u8BA4\u4E8C\u8005\u90FD\u6709
                sourceType: ['album', 'camera'], // \u53EF\u4EE5\u6307\u5B9A\u6765\u6E90\u662F\u76F8\u518C\u8FD8\u662F\u76F8\u673A\uFF0C\u9ED8\u8BA4\u4E8C\u8005\u90FD\u6709
                onSuccess: (res) => {
                  console.log(res)
                  alert(JSON.stringify(res))
                  imageLocalIds.current = res?.localIds
                },
                onError: (error) => {
                  console.log(error)
                  alert(JSON.stringify(error))
                },
                onCancel: (res) => {
                  console.log(res)
                  alert(JSON.stringify(res))
                }
              })
            }}
          >
            chooseImage
          </Button>
        </Card>

        <Card>
          <Divider>\u4E0A\u4F20\u56FE\u7247\u63A5\u53E3(\u4EC5\u652F\u6301\u5BA2\u6237\u7AEF,\u5FAE\u4FE1,\u4F01\u5FAE,\u5C0F\u7A0B\u5E8F)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              if (!imageLocalIds.current) {
                console.log('chooseImage first!')
                alert('chooseImage first!')
                return
              }
              Loading.show({
                content: '\u4E0A\u4F20\u4E2D...'
              })
              Bridge.uploadImage({
                localId: imageLocalIds.current[0],
                isShowProgressTips: 0,
                uploadDir: 'test',
                onSuccess: function (res) {
                  console.log(res)
                  alert(JSON.stringify(res))
                  Loading.hide()
                },
                onError: function (error) {
                  console.log(error)
                  alert(JSON.stringify(error))
                  Loading.hide()
                },
                onCancel: function (res) {
                  console.log(res)
                  alert(JSON.stringify(res))
                  Loading.hide()
                }
              })
            }}
          >
            uploadImage
          </Button>
        </Card>

        <Card>
          <Divider>\u9884\u89C8\u56FE\u7247\u63A5\u53E3</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.previewImage({
                urls: [
                  'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                  'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                ],

                index: 0,
                current: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
              })
            }}
          >
            previewImage
          </Button>
        </Card>

        <Divider>\u6587\u4EF6\u63A5\u53E3</Divider>
        <Card>
          <Divider>\u9884\u89C8\u6587\u4EF6\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u652F\u6301)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.previewFile({
                url: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
              })
            }}
          >
            previewFile
          </Button>
        </Card>

        <Divider>\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3</Divider>
        <Card>
          <Divider>\u67E5\u770B\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3(\u5BA2\u6237\u7AEF\u3001\u4F01\u5FAE\u3001\u652F\u4ED8\u5B9D\u751F\u6D3B\u53F7\u3001\u98DE\u4E66\u3001\u9489\u9489)</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Bridge.openLocation({
                slatitude: 32.02, // \u8D77\u70B9\u7EAC\u5EA6
                slongitude: 118.79, // \u8D77\u70B9\u7ECF\u5EA6
                sname: '\u8D77\u70B9', // \u8D77\u70B9\u540D
                latitude: 39.81, // \u7EAC\u5EA6\uFF0C\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4\u4E3A90 ~ -90
                longitude: 116.49, // \u7ECF\u5EA6\uFF0C\u6D6E\u70B9\u6570\uFF0C\u8303\u56F4\u4E3A180 ~ -180\u3002
                name: '\u7EC8\u70B9', // \u4F4D\u7F6E\u540D
                address: '\u7EC8\u70B9\u5730\u5740\u540D', // \u5730\u5740\u8BE6\u60C5\u8BF4\u660E
                scale: 16 // \u5730\u56FE\u7F29\u653E\u7EA7\u522B,\u6574\u5F62\u503C,\u8303\u56F4\u4ECE1~28\u3002\u9ED8\u8BA4\u4E3A16
              })
            }}
          >
            openLocation
          </Button>
        </Card>

        <Card>
          <Divider>\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3</Divider>
          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Loading.show({
                content: '\u5B9A\u4F4D\u4E2D...'
              })
              Bridge.getLocation({
                type: 'gcj02',
                onSuccess: (res) => {
                  Loading.hide()
                  console.log(res)
                  alert(JSON.stringify(res))
                },
                onError: (error) => {
                  Loading.hide()
                  console.log(error)
                  alert(JSON.stringify(error))
                }
              })
            }}
          >
            getLocation(gcj02)
          </Button>

          <Button
            className="lyrixi-primary lyrixi-flex"
            style={{ margin: '12px 10px' }}
            radius="m"
            onClick={() => {
              Loading.show({
                content: '\u5B9A\u4F4D\u4E2D...'
              })
              Bridge.getLocation({
                type: 'wgs84',
                onSuccess: (res) => {
                  Loading.hide()
                  console.log(res)
                  alert(JSON.stringify(res))
                },
                onError: (error) => {
                  Loading.hide()
                  console.log(error)
                  alert(JSON.stringify(error))
                }
              })
            }}
          >
            getLocation(wgs84)
          </Button>
        </Card>

        <Card>
          <Divider>\u5206\u4EAB: \u652F\u6301\u52E4\u7B56(ios\u3001android)\u3001\u5FAE\u4FE1\u3001\u4F01\u5FAE\u3001\u5C0F\u7A0B\u5E8F\u3001\u98DE\u4E66\u3001\u9489\u9489</Divider>
          <Share.Combo
            onBeforeOpen={() => {
              Loading.show({
                content: '\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u5206\u4EAB\u94FE\u63A5'
              })
              return new Promise((resolve) => {
                setTimeout(() => {
                  Loading.hide()
                  setShareTo({
                    wechat: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    miniprogram: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://servicewechat.com/wxascheme/jump_wxa?url=weixin://dl/business/?t=IUGVzjsue7u',
                      miniProgramId: 'gh_00011085b545',
                      miniProgramPath:
                        '/pages/Login/index?sharePath=%2Fpages%2FBlog%2FShareDetail%2Findex%3Finfoid%3D5083717378142702100&tenantid=6019160693176440421'
                    },
                    moments: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    wecom: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    dingtalk: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    lark: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    }
                  })
                  resolve(true)
                }, 2000)
              })
            }}
            shareTo={shareTo}
          >
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
            >
              \u5206\u4EAB
            </Button>
          </Share.Combo>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},28606:function(s,e){e.Z=`import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// \u5185\u5E93\u4F7F\u7528-start
import { Page, Divider } from 'lyrixi-mobile'
// \u5185\u5E93\u4F7F\u7528-end

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>\u9489\u9489\u9009\u62E9\u7167\u7247(\u7ED3\u679C\u4E0D\u540C)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // \u62B5\u6D88 padding
          }}
          style={a11yDark}
          showLineNumbers // \u663E\u793A\u884C\u53F7\uFF08\u53EF\u9009\uFF09
          wrapLongLines // \u81EA\u52A8\u6362\u884C\uFF08\u53EF\u9009
        >
          {\`Bridge.chooseImage({
  count: 5,
  sizeType: ['compressed'],
  sourceType: ['album', 'camera'],
  onSuccess: async (res) => {
    // Difference is result => res.localFiles
  }
})\`}
        </SyntaxHighlighter>
        <Divider>\u9489\u9489\u4E0A\u4F20(\u7C7B\u4F3C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0A\u4F20)</Divider>
        <SyntaxHighlighter
          language="javascript"
          customStyle={{
            overflowX: 'auto' // \u62B5\u6D88 padding
          }}
          style={a11yDark}
          showLineNumbers // \u663E\u793A\u884C\u53F7\uFF08\u53EF\u9009\uFF09
          wrapLongLines // \u81EA\u52A8\u6362\u884C\uFF08\u53EF\u9009
        >
          {\`Bridge.uploadImage({
  url: window.origin + ownServerUrl,
  localFile: localFile, // { fileType: '', filePath: '' }
  header: {
    'Content-Type': 'multipart/form-data',
    Cookie: document.cookie,
    Authorization:  \\\`Bearer \\\${localStorage.getItem('xxx-token')}\\\` // \u4E0A\u4F20\u9700\u8981\u5355\u72EC\u5904\u7406cookie
  },
  formData: {
    file1: localFile.filePath,
    uploadPath: uploadDir,
    // other formData
  },
  onSuccess: function (result) {
    // Own server return result
  },
  onError: function (error) {
    // error
  }
})\`}
        </SyntaxHighlighter>
      </Page.Main>
    </Page>
  )
}
`},4076:function(s,e){e.Z=`import React from 'react'
import { Clipboard, Toast } from 'lyrixi-mobile'

export default () => {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-mobile', {
      onSuccess: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
`},32209:function(s,e){e.Z=`import React from 'react'
import { DOMUtil } from 'lyrixi-mobile'

export default () => {
  function handleClick() {
    console.log(
      DOMUtil.classNames(undefined, null, ' ', 'className1', 'className2', 'className3 className4')
    )
  }
  return (
    <>
      <div onClick={handleClick}>Generate class</div>
    </>
  )
}
`},91018:function(s,e){e.Z=`import React from 'react'
import { Page, Card, Divider, DateUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Card>
          <Divider>toDate</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              console.log(DateUtil.toDate('2023-10-01 12:01:36'))
              console.log(DateUtil.toDate('12:01:36'))
              console.log(DateUtil.toDate('12:01'))
            }}
          >
            Click to Date
          </div>
        </Card>

        <Card>
          <Divider>Get UTC</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              let zone = DateUtil.timeZonePlaceName()
              console.log('zone:', zone)
              let utcOffset = DateUtil.utcOffset()
              console.log('utcOffset:', utcOffset)
              let utcDescription = DateUtil.stringifyUtcOffset(utcOffset)
              console.log('utcDescription:', utcDescription)
              let currentUtcDate = DateUtil.utcToTimeZone(new Date('2025-05-09 01:01:36'))
              console.log('Current date:', DateUtil.format(currentUtcDate, 'YYYY-MM-DD hh:mm:ss'))
              let utcToTimeZone = DateUtil.utcToTimeZone(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00')
              )
              console.log(
                'Utc to Timezone UTC+8:',
                DateUtil.format(utcToTimeZone, 'YYYY-MM-DD hh:mm:ss')
              )
              let utcToDate2 = DateUtil.betweenTimeZones(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00'),
                DateUtil.parseUtcOffset('UTC+09:00')
              )
              console.log(
                'Between TimeZones UTC+8 To UTC+9:',
                DateUtil.format(utcToDate2, 'YYYY-MM-DD hh:mm:ss')
              )
              let dateToUtc = DateUtil.timeZoneToUtc(
                new Date('2025-05-09 01:01:36'),
                DateUtil.parseUtcOffset('UTC+08:00')
              )
              console.log('Timezone to Utc:', DateUtil.format(dateToUtc, 'YYYY-MM-DD hh:mm:ss'))
            }}
          >
            Click to get UTC infomation
          </div>
        </Card>

        <Card>
          <Divider>startOrEnd \u5E74/\u6708/\u5468 \u9996\u672B\u65E5</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date()
              const yStart = DateUtil.startOrEnd(new Date(base), 'year', 'start')
              const yEnd = DateUtil.startOrEnd(new Date(base), 'year', 'end')
              const mStart = DateUtil.startOrEnd(new Date(base), 'month', 'start')
              const mEnd = DateUtil.startOrEnd(new Date(base), 'month', 'end')
              const wStart = DateUtil.startOrEnd(new Date(base), 'week', 'start')
              const wEnd = DateUtil.startOrEnd(new Date(base), 'week', 'end')
              console.log('Year start:', DateUtil.format(yStart, 'YYYY-MM-DD'))
              console.log('Year end:', DateUtil.format(yEnd, 'YYYY-MM-DD'))
              console.log('Month start:', DateUtil.format(mStart, 'YYYY-MM-DD'))
              console.log('Month end:', DateUtil.format(mEnd, 'YYYY-MM-DD'))
              console.log('Week start (ISO Monday):', DateUtil.format(wStart, 'YYYY-MM-DD'))
              console.log('Week end (ISO Sunday):', DateUtil.format(wEnd, 'YYYY-MM-DD'))
            }}
          >
            Click to test startOrEnd
          </div>
        </Card>

        <Card>
          <Divider>previousWeek / nextWeek</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date()
              const prev = DateUtil.previousWeek(base)
              const next = DateUtil.nextWeek(base)
              console.log('Base:', DateUtil.format(base, 'YYYY-MM-DD'))
              console.log('Previous Week:', DateUtil.format(prev, 'YYYY-MM-DD'))
              console.log('Next Week:', DateUtil.format(next, 'YYYY-MM-DD'))
            }}
          >
            Click to test previousWeek & nextWeek
          </div>
        </Card>

        <Card>
          <Divider>previousMonth / nextMonth</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date('2025-03-31 12:34:56')
              const prev = DateUtil.previousMonth(base)
              const next = DateUtil.nextMonth(base)
              console.log('Base:', DateUtil.format(base, 'YYYY-MM-DD'))
              console.log('Previous Month:', DateUtil.format(prev, 'YYYY-MM-DD'))
              console.log('Next Month:', DateUtil.format(next, 'YYYY-MM-DD'))
            }}
          >
            Click to test previousMonth & nextMonth (edge at month-end)
          </div>
        </Card>

        <Card>
          <Divider>getWeekDates\uFF08\u5468\u8D77\u59CB\uFF1A\u5468\u4E00/\u5468\u65E5\uFF09</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date()
              const mondayStart = DateUtil.getWeekDates(base, 'Monday')
              const sundayStart = DateUtil.getWeekDates(base)
              console.log(
                'Week (Monday start):',
                mondayStart.map((d) => DateUtil.format(d, 'YYYY-MM-DD'))
              )
              console.log(
                'Week (Sunday start):',
                sundayStart.map((d) => DateUtil.format(d, 'YYYY-MM-DD'))
              )
            }}
          >
            Click to test getWeekDates
          </div>
        </Card>

        <Card>
          <Divider>getMonthDates\uFF0842\u5929\u7F51\u683C\uFF09</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date()
              const rows = DateUtil.getMonthDates(base, 'Monday')
              console.log(
                'Month grid (first row):',
                rows[0].map(
                  (d) => \`\${DateUtil.format(d, 'YYYY-MM-DD')}(\${d.isCurrent ? 'cur' : 'oth'})\`
                )
              )
              console.log('Rows count:', rows.length)
            }}
          >
            Click to test getMonthDates
          </div>
        </Card>

        <Card>
          <Divider>add / compare / diff</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date('2025-05-09 12:00:00')
              const addMonth = DateUtil.add(base, 1, 'month')
              const minusDays = DateUtil.add(base, -3, 'date')
              console.log('Add +1 month:', DateUtil.format(addMonth, 'YYYY-MM-DD'))
              console.log('Add -3 days:', DateUtil.format(minusDays, 'YYYY-MM-DD'))

              const d1 = new Date('2025-05-01 00:00:00')
              const d2 = new Date('2025-05-09 00:00:00')
              console.log('Compare date (d1 vs d2):', DateUtil.compare(d1, d2, 'date'))
              console.log('Compare month (d1 vs d2):', DateUtil.compare(d1, d2, 'month'))

              console.log('Diff days (d1 -> d2):', DateUtil.diff(d1, d2, 'date'))
              console.log('Diff months (d1 -> d2):', DateUtil.diff(d1, d2, 'month'))
            }}
          >
            Click to test add / compare / diff
          </div>
        </Card>

        <Card>
          <Divider>getDaysInMonth / quarter</Divider>
          <div
            style={{ margin: '0 12px' }}
            onClick={() => {
              const base = new Date()
              console.log('Days in month:', DateUtil.getDaysInMonth(base))
              console.log('Quarter:', DateUtil.quarter(base))
            }}
          >
            Click to test getDaysInMonth & quarter
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},40025:function(s,e){e.Z=`import React, { useEffect } from 'react'
import { Page, Debugger } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {
    // \u7559\u540E\u95E8\u8C03\u8BD5: \u8FDE\u7EED\u70B9\u51FB10\u6B21, \u663E\u793Avconsole
    Debugger.addTrigger()
  }, [])

  return (
    <Page className="lyrixi-full">
      <Page.Main>\u5DE6\u4E0B\u89D2\u70B9\u51FB10\u6B21\u547C\u51FA\u6697\u95E8</Page.Main>
    </Page>
  )
}
`},58469:function(s,e){e.Z=`import React from 'react'

import { Page, Device, Card } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <p className="demo-title">language</p>
        <Card style={{ padding: 12 }}>{Device.language}</Card>

        <p className="demo-title">protocol</p>
        <Card style={{ padding: 12 }}>{Device.protocol}</Card>
        <p className="demo-title">host</p>
        <Card style={{ padding: 12 }}>{Device.host}</Card>
        <p className="demo-title">domain</p>
        <Card style={{ padding: 12 }}>{Device.domain}</Card>
        <p className="demo-title">kernel</p>
        <Card style={{ padding: 12 }}>{Device.kernel}</Card>
        <p className="demo-title">device</p>
        <Card style={{ padding: 12 }}>{Device.device}</Card>
        <p className="demo-title">os</p>
        <Card style={{ padding: 12 }}>{Device.os}</Card>
        <p className="demo-title">osVersion</p>
        <Card style={{ padding: 12 }}>{Device.osVersion}</Card>
        <p className="demo-title">model</p>
        <Card style={{ padding: 12 }}>{Device.model}</Card>
        <p className="demo-title">platform</p>
        <Card style={{ padding: 12 }}>{Device.platform}</Card>
        <p className="demo-title">platformVersion</p>
        <Card style={{ padding: 12 }}>{Device.platformVersion}</Card>

        <p className="demo-title">isOnLine</p>
        <Card style={{ padding: 12 }}>{String(Device.isOnLine || '')}</Card>
        <p className="demo-title">userAgent</p>
        <Card style={{ padding: 12 }}>{Device.userAgent}</Card>
        <p className="demo-title">getUrlParameter</p>
        <Card style={{ padding: 12 }}>{Device.getUrlParameter('locale')}</Card>
        <p className="demo-title">screenWidth</p>
        <Card style={{ padding: 12 }}>{Device.screenWidth}</Card>
        <p className="demo-title">screenHeight</p>
        <Card style={{ padding: 12 }}>{Device.screenHeight}</Card>
        <p className="demo-title">compareVersion: 7_7_10 vs 7_7_5</p>
        <Card style={{ padding: 12 }}>{Device.compareVersion('7_7_10', '7_7_5', '_')}</Card>
      </Page.Main>
    </Page>
  )
}
`},50312:function(s,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},7425:function(s,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},70997:function(s,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},49178:function(s,e){e.Z=`import React from 'react'

import { Page, LocaleUtil, Divider, Card, DateUtil } from 'lyrixi-mobile'
import dayjs from 'dayjs'

// \u4E2D\u6587
// import 'dayjs/locale/zh-cn'
// import zhCN from 'lyrixi-mobile/locale/zh_CN.json'
// dayjs.locale('zh-cn')
// LocaleUtil.setLocale('zh_CN', zhCN)

// \u82F1\u6587
import 'dayjs/locale/zh-cn'
import enUS from 'lyrixi-mobile/locale/en_US.json'
dayjs.locale('en')
LocaleUtil.setLocale('en_US', enUS)

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>Node</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale('\u8FD17\u65E5', 'lyrixi_last_days', [
            <span key={'0'} style={{ color: 'red' }}>
              7
            </span>
          ])}
        </Card>

        <Divider>String</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          <div>variable:</div>
          {LocaleUtil.locale('\u8FD1x\u65E5', 'lyrixi_last_days', ['7'])}
        </Card>

        <Divider>No locale data</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale('\u8FD1{0}\u65E5', '', ['7'])}
        </Card>

        <Divider>Remark Node</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale(<div>Node</div>)}
        </Card>

        <Divider>Remark Number</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>{LocaleUtil.locale(7)}</Card>
      </Page.Main>
    </Page>
  )
}
`},71773:function(s,e){e.Z=`import React from 'react'
import { Logger, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'
import upload from './upload'

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Card>
          <Divider>Function</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                let isOK = await Logger.config({
                  types: ['indexedDB', 'webSQL']
                })
                console.log(\`Config successfully:\`, isOK)
              }}
            >
              Logger.Config to cover console.info
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={() => {
                console.info('test log 1')
                console.info('test log 2')
                console.info('test log 3')
              }}
            >
              console.info
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.setLogs(['test'])
                console.log('Set logs successfully')
              }}
            >
              Logger.setLogs
            </Button>
            <br />
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const logs = await Logger.getLogs()
                console.log('\u83B7\u53D6\u6240\u6709\u65E5\u5FD7\u6210\u529F:', logs)
              }}
            >
              Logger.getLogs (All)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                const logs = await Logger.getLogs(today)
                console.log('\u83B7\u53D6\u4ECA\u65E5\u65E5\u5FD7\u6210\u529F:', logs)
              }}
            >
              Logger.getLogs (Today)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.clearLogs()
                console.log('Clear logs successfully')
              }}
            >
              Logger.clearLogs (All)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                await Logger.clearLogs(today)
                console.log(\`Clear logs for \${today.toISOString().split('T')[0]} successfully\`)
              }}
            >
              Logger.clearLogs (Today)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const result = await Logger.uploadLogs(upload)
                console.log(\`Result:\`, result)
              }}
            >
              Logger.uploadLogs
            </Button>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},37182:function(s,e){e.Z=`import { Device, Request, DateUtil } from 'lyrixi-mobile'

function upload({ date, content }) {
  // \u8C03\u7528\u4E0A\u62A5\u63A5\u53E3
  return new Promise((resolve) => {
    // \u751F\u6210\u6587\u4EF6\u540D: \${YYYYMMDD}_\${Device.platform}_\${username}_\${userId}_\${hhmmss}.txt
    const dateStr = DateUtil.format(date, 'YYYYMMDD')
    const username = window.loginUser?.name || 'unknown'
    const userId = window.loginUser?.id || 'unknown'
    const platform = Device.platform || 'unknown'

    const fileName = \`\${dateStr}_\${platform}_\${username}_\${userId}.txt\`

    // \u6784\u5EFA\u65E5\u5FD7\u5185\u5BB9
    const fileContent = [
      \`UserAgent: \${navigator.userAgent || ''}\`,
      \`TenantId: \${window.loginUser?.tenantId || ''}\`,
      \`UserId: \${window.loginUser?.id || ''}\`,
      \`Date: \${dateStr}\`,
      content
    ].join('\\n')

    // \u8C03\u7528\u4E0A\u4F20\u63A5\u53E3
    Request.post('/fileupload/v1/uploadTextToLogCenter.do', {
      fileName: fileName,
      fileContent: fileContent
    })
      .then((response) => {
        if (response.code === '1') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch((error) => {
        console.error('\u65E5\u5FD7\u4E0A\u4F20\u5931\u8D25:', error)
        resolve(false)
      })
  })
}

export default upload
`},14444:function(s,e){e.Z=`import React from 'react'
import vconsole from 'vconsole'

import { MathUtil } from 'lyrixi-mobile'

// \u5185\u5E93\u4F7F\u7528-start
import { Page } from 'lyrixi-mobile'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import Page from 'library/components/Layout'
\u6D4B\u8BD5\u4F7F\u7528-end */

new vconsole()

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <h2>\u7EC4\u4EF6</h2>
        <p className="demo-title">\u8BA1\u7B97</p>
        {MathUtil.strip(0.1 * 0.2)}
      </Page.Main>
    </Page>
  )
}
`},8815:function(s,e){e.Z=`import React from 'react'
import vconsole from 'vconsole'

import { ObjectUtil, Divider, Page } from 'lyrixi-mobile'

new vconsole()

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>ObjectUtil</Divider>
        {ObjectUtil.isEmpty({}) ? '{} is empty' : '{} is not empty'}
        {ObjectUtil.isEmpty(new Date()) ? 'new date is empty' : 'new date is not empty'}
      </Page.Main>
    </Page>
  )
}
`},64981:function(s,e){e.Z=`import React from 'react'
import { Request, Toast } from 'lyrixi-mobile'

export default () => {
  async function handleClick() {
    let response = await Request.get(
      'https://lyrixi.github.io/lyrixi-mobile/assets/district/en_US/86.json',
      null,
      {
        cacheKey: '0'
      }
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request by cacheKey</div>
    </>
  )
}
`},68191:function(s,e){e.Z=`import React from 'react'
import { Request, Toast } from 'lyrixi-mobile'

export default () => {
  async function handleClick() {
    let response = await Request.get(
      'https://lyrixi.github.io/lyrixi-mobile/assets/district/zh_CN/86.json.info'
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request get</div>
    </>
  )
}
`},50233:function(s,e){e.Z=`import React, { useState } from 'react'
import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default () => {
  const [key, setKey] = useState('demo-key')
  const [value, setValue] = useState('demo-value')
  const [result, setResult] = useState('')

  const handleSetLocalStorage = () => {
    const success = Storage.setLocalStorage(key, value)
    setResult(\`\u8BBE\u7F6E\u6210\u529F: \${success}\`)
  }

  const handleGetLocalStorage = () => {
    const data = Storage.getLocalStorage(key)
    setResult(\`\u83B7\u53D6\u7ED3\u679C: \${JSON.stringify(data)}\`)
  }

  const handleGetLocalStorageKeys = () => {
    const keys = Storage.getLocalStorageKeys()
    setResult(\`\u6240\u6709\u952E: \${JSON.stringify(keys)}\`)
  }

  const handleGetLocalStorages = () => {
    const storages = Storage.getLocalStorages()
    setResult(\`\u6240\u6709\u6570\u636E: \${JSON.stringify(storages)}\`)
  }

  const handleRemoveLocalStorage = () => {
    const success = Storage.removeLocalStorage(key)
    setResult(\`\u5220\u9664\u6210\u529F: \${success}\`)
  }

  const handleRemoveLocalStorages = () => {
    const success = Storage.removeLocalStorages((key) => key.startsWith('demo-'))
    setResult(\`\u6279\u91CF\u5220\u9664\u6210\u529F: \${success}\`)
  }

  const handleClearLocalStorage = () => {
    const success = Storage.clearLocalStorage()
    setResult(\`\u6E05\u7A7A\u6210\u529F: \${success}\`)
  }

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>LocalStorage \u793A\u4F8B</Divider>

        <Card>
          <Divider>\u8868\u5355\u5F55\u5165</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="\u952E\u540D">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u952E\u540D"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="value" label="\u503C">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u503C"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>\u64CD\u4F5C\u6309\u94AE</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetLocalStorage}
            >
              \u8BBE\u7F6E LocalStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorage}
            >
              \u83B7\u53D6 LocalStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorageKeys}
            >
              \u83B7\u53D6\u6240\u6709\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetLocalStorages}
            >
              \u83B7\u53D6\u6240\u6709\u6570\u636E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveLocalStorage}
            >
              \u5220\u9664\u6307\u5B9A\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveLocalStorages}
            >
              \u6279\u91CF\u5220\u9664 (demo-*)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClearLocalStorage}
            >
              \u6E05\u7A7A\u6240\u6709
            </Button>
          </div>
        </Card>

        {result && (
          <Card>
            <Divider>\u6267\u884C\u7ED3\u679C</Divider>
            <div
              style={{
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                wordBreak: 'break-all',
                margin: '0 12px'
              }}
            >
              <strong>\u7ED3\u679C:</strong> {result}
            </div>
          </Card>
        )}
      </Page.Main>
    </Page>
  )
}
`},9300:function(s,e){e.Z=`import React, { useState } from 'react'
import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default () => {
  const [key, setKey] = useState('demo-session-key')
  const [value, setValue] = useState('demo-session-value')
  const [result, setResult] = useState('')

  const handleSetSessionStorage = () => {
    const success = Storage.setSessionStorage(key, value)
    setResult(\`\u8BBE\u7F6E\u6210\u529F: \${success}\`)
  }

  const handleGetSessionStorage = () => {
    const data = Storage.getSessionStorage(key)
    setResult(\`\u83B7\u53D6\u7ED3\u679C: \${JSON.stringify(data)}\`)
  }

  const handleGetSessionStorageKeys = () => {
    const keys = Storage.getSessionStorageKeys()
    setResult(\`\u6240\u6709\u952E: \${JSON.stringify(keys)}\`)
  }

  const handleGetSessionStorages = () => {
    const storages = Storage.getSessionStorages()
    setResult(\`\u6240\u6709\u6570\u636E: \${JSON.stringify(storages)}\`)
  }

  const handleRemoveSessionStorage = () => {
    const success = Storage.removeSessionStorage(key)
    setResult(\`\u5220\u9664\u6210\u529F: \${success}\`)
  }

  const handleRemoveSessionStorages = () => {
    const success = Storage.removeSessionStorages((key) => key.startsWith('demo-session-'))
    setResult(\`\u6279\u91CF\u5220\u9664\u6210\u529F: \${success}\`)
  }

  const handleClearSessionStorage = () => {
    const success = Storage.clearSessionStorage()
    setResult(\`\u6E05\u7A7A\u6210\u529F: \${success}\`)
  }

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>SessionStorage \u793A\u4F8B</Divider>

        <Card>
          <Divider>\u8868\u5355\u5F55\u5165</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="\u952E\u540D">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u952E\u540D"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="value" label="\u503C">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u503C"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>\u64CD\u4F5C\u6309\u94AE</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetSessionStorage}
            >
              \u8BBE\u7F6E SessionStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorage}
            >
              \u83B7\u53D6 SessionStorage
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorageKeys}
            >
              \u83B7\u53D6\u6240\u6709\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetSessionStorages}
            >
              \u83B7\u53D6\u6240\u6709\u6570\u636E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveSessionStorage}
            >
              \u5220\u9664\u6307\u5B9A\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveSessionStorages}
            >
              \u6279\u91CF\u5220\u9664 (demo-session-*)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClearSessionStorage}
            >
              \u6E05\u7A7A\u6240\u6709
            </Button>
          </div>
        </Card>

        {result && (
          <Card>
            <Divider>\u6267\u884C\u7ED3\u679C</Divider>
            <div
              style={{
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                wordBreak: 'break-all',
                margin: '0 12px'
              }}
            >
              <strong>\u7ED3\u679C:</strong> {result}
            </div>
          </Card>
        )}
      </Page.Main>
    </Page>
  )
}
`},4070:function(s,e){e.Z=`import React, { useState } from 'react'
import { Storage, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'

export default () => {
  const [key, setKey] = useState('demo-storage-key')
  const [value, setValue] = useState('demo-storage-value')
  const [result, setResult] = useState('')

  const handleConfig = () => {
    Storage.config({
      // types: ['localStorage']
      types: ['indexedDB', 'localStorage', 'webSQL']
    })
    setResult('\u914D\u7F6E\u6210\u529F: \u4F7F\u7528 indexedDB, localStorage, webSQL')
  }

  const handleSetItem = async () => {
    try {
      await Storage.setItem(key, value)
      setResult('\u8BBE\u7F6E\u6210\u529F')
    } catch (error) {
      setResult(\`\u8BBE\u7F6E\u5931\u8D25: \${error.message}\`)
    }
  }

  const handleGetItem = async () => {
    try {
      const data = await Storage.getItem(key)
      setResult(\`\u83B7\u53D6\u7ED3\u679C: \${JSON.stringify(data)}\`)
    } catch (error) {
      setResult(\`\u83B7\u53D6\u5931\u8D25: \${error.message}\`)
    }
  }

  const handleGetKeys = async () => {
    try {
      const keys = await Storage.getKeys()
      setResult(\`\u6240\u6709\u952E: \${JSON.stringify(keys)}\`)
    } catch (error) {
      setResult(\`\u83B7\u53D6\u5931\u8D25: \${error.message}\`)
    }
  }

  const handleGetItems = async () => {
    try {
      const items = await Storage.getItems()
      setResult(\`\u6240\u6709\u6570\u636E: \${JSON.stringify(items)}\`)
    } catch (error) {
      setResult(\`\u83B7\u53D6\u5931\u8D25: \${error.message}\`)
    }
  }

  const handleRemoveItem = async () => {
    try {
      await Storage.removeItem(key)
      setResult('\u5220\u9664\u6210\u529F')
    } catch (error) {
      setResult(\`\u5220\u9664\u5931\u8D25: \${error.message}\`)
    }
  }

  const handleClear = async () => {
    try {
      await Storage.clear()
      setResult('\u6E05\u7A7A\u6210\u529F')
    } catch (error) {
      setResult(\`\u6E05\u7A7A\u5931\u8D25: \${error.message}\`)
    }
  }

  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>Storage (LocalForage) \u793A\u4F8B</Divider>

        <Card>
          <Divider>\u8868\u5355\u5F55\u5165</Divider>
          <Form style={{ margin: '0 12px' }}>
            <Form.Item name="key" label="\u952E\u540D">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u952E\u540D"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="value" label="\u503C">
              <Input.Text
                placeholder="\u8BF7\u8F93\u5165\u503C"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Divider>\u64CD\u4F5C\u6309\u94AE</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleConfig}
            >
              \u914D\u7F6E\u9A71\u52A8\u7C7B\u578B
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleSetItem}
            >
              \u8BBE\u7F6E\u6570\u636E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetItem}
            >
              \u83B7\u53D6\u6570\u636E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetKeys}
            >
              \u83B7\u53D6\u6240\u6709\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleGetItems}
            >
              \u83B7\u53D6\u6240\u6709\u6570\u636E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleRemoveItem}
            >
              \u5220\u9664\u6307\u5B9A\u952E
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={handleClear}
            >
              \u6E05\u7A7A\u6240\u6709
            </Button>
          </div>
        </Card>

        {result && (
          <Card>
            <Divider>\u6267\u884C\u7ED3\u679C</Divider>
            <div
              style={{
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                wordBreak: 'break-all',
                margin: '0 12px'
              }}
            >
              <strong>\u7ED3\u679C:</strong> {result}
            </div>
          </Card>
        )}

        <Card>
          <Divider>\u529F\u80FD\u8BF4\u660E</Divider>
          <div style={{ margin: '0 12px' }}>
            <p>\u2022 Storage \u4F7F\u7528 LocalForage \u5E93\uFF0C\u652F\u6301 IndexedDB\u3001WebSQL\u3001LocalStorage</p>
            <p>\u2022 \u4F1A\u81EA\u52A8\u9009\u62E9\u6700\u4F73\u7684\u5B58\u50A8\u65B9\u5F0F</p>
            <p>\u2022 \u652F\u6301\u5F02\u6B65\u64CD\u4F5C\uFF0C\u8FD4\u56DE Promise</p>
            <p>\u2022 \u53EF\u4EE5\u914D\u7F6E\u9A71\u52A8\u7C7B\u578B\u7684\u4F18\u5148\u7EA7</p>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},56626:function(s,e){e.Z=`import React from 'react'
import { Storage, Page, Button } from 'lyrixi-mobile'

export default () => {
  const [data, setData] = Storage.useCacheState(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <h1>Cache State</h1>
        <p>{JSON.stringify(data)}</p>
        <Button
          className="lyrixi-flex lyrixi-primary"
          onClick={() => {
            setData({ name: 'morpheus' })
          }}
        >
          Set Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            setData()
          }}
        >
          Remove Cache
        </Button>
        <Button
          className="lyrixi-flex"
          onClick={() => {
            alert(JSON.stringify(data))
          }}
        >
          Get Cache
        </Button>
      </Page.Main>
    </Page>
  )
}
`}}]);

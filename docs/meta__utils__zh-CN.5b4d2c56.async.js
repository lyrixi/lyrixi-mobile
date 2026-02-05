"use strict";(self.webpackChunklyrixi_mobile=self.webpackChunklyrixi_mobile||[]).push([[9529],{41570:function(o,e,n){n.r(e);var a=n(6444),f=n(5098),i=n(98844);function p(g){var r=g.date,c=g.content;return new Promise(function(y){var d,l,u,s,m=a.Z.format(r,"YYYYMMDD"),_=((d=window.loginUser)===null||d===void 0?void 0:d.name)||"unknown",t=((l=window.loginUser)===null||l===void 0?void 0:l.id)||"unknown",v=f.default.platform||"unknown",h="".concat(m,"_").concat(v,"_").concat(_,"_").concat(t,".txt"),E=["UserAgent: ".concat(navigator.userAgent||""),"TenantId: ".concat(((u=window.loginUser)===null||u===void 0?void 0:u.tenantId)||""),"UserId: ".concat(((s=window.loginUser)===null||s===void 0?void 0:s.id)||""),"Date: ".concat(m),c].join(`
`);i.Z.post("/fileupload/v1/uploadTextToLogCenter.do",{fileName:h,fileContent:E}).then(function(D){D.code==="1"?y(!0):y(!1)}).catch(function(D){console.error("\u65E5\u5FD7\u4E0A\u4F20\u5931\u8D25:",D),y(!1)})})}e.default=p},74130:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-array-util-demo-arrayutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,49247))})),asset:{type:"BLOCK",id:"src-utils-array-util-demo-arrayutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(72025).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},91866:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-asset-util-demo-assetutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,10807))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-assetutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58908).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}},"src-utils-asset-util-demo-loadjs":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,13534))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-loadjs",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(88724).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},83131:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return l}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(71415),y=n.n(c),d=n(62687),l={"src-utils-bridge-demo-bridge":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,12957))})),asset:{type:"BLOCK",id:"src-utils-bridge-demo-bridge",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(54692).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),vconsole:c,"lyrixi-mobile":d},renderOpts:{compile:function(){var u=g()(i()().mark(function m(){var _,t=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(_=h.sent).default.apply(_,t));case 3:case"end":return h.stop()}},m)}));function s(){return u.apply(this,arguments)}return s}()}}}},7858:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-clipboard-demo-clipboard":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,55063))})),asset:{type:"BLOCK",id:"src-utils-clipboard-demo-clipboard",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(69974).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},87045:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-dom-util-demo-domutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,45655))})),asset:{type:"BLOCK",id:"src-utils-dom-util-demo-domutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(54187).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},2156:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-date-util-demo-dateutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,98716))})),asset:{type:"BLOCK",id:"src-utils-date-util-demo-dateutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(48196).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},41968:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-debugger-demo-debugger":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,80981))})),asset:{type:"BLOCK",id:"src-utils-debugger-demo-debugger",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(97903).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},23188:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-device-demo-device":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,4573))})),asset:{type:"BLOCK",id:"src-utils-device-demo-device",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(5814).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},35410:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-event-util-demo-eventutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,63481))})),asset:{type:"BLOCK",id:"src-utils-event-util-demo-eventutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(38056).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},32160:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-full-screen-demo-fullscreen":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,67422))})),asset:{type:"BLOCK",id:"src-utils-full-screen-demo-fullscreen",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(32862).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},42531:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-geo-util-demo-geoutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,52059))})),asset:{type:"BLOCK",id:"src-utils-geo-util-demo-geoutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(89806).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},46101:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return l}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(27484),y=n.n(c),d=n(62687),l={"src-utils-locale-util-demo-localeutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,35347))})),asset:{type:"BLOCK",id:"src-utils-locale-util-demo-localeutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(60596).Z},react:{type:"NPM",value:"19.1.1"},dayjs:{type:"NPM",value:"1.11.13"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),dayjs:c,"lyrixi-mobile":d},renderOpts:{compile:function(){var u=g()(i()().mark(function m(){var _,t=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(_=h.sent).default.apply(_,t));case 3:case"end":return h.stop()}},m)}));function s(){return u.apply(this,arguments)}return s}()}}}},83636:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return d}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y=n(41570),d={"src-utils-logger-demo-logger":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,51237))})),asset:{type:"BLOCK",id:"src-utils-logger-demo-logger",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(82033).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"},"./upload.js":{type:"FILE",value:n(37182).Z}},entry:"index.jsx",title:">"},context:{"./upload.js":y,react:a||(a=n.t(r,2)),"lyrixi-mobile":c,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Logger/demos/upload.js":y},renderOpts:{compile:function(){var l=g()(i()().mark(function s(){var m,_=arguments;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(250).then(n.bind(n,90250));case 2:return v.abrupt("return",(m=v.sent).default.apply(m,_));case 3:case"end":return v.stop()}},s)}));function u(){return l.apply(this,arguments)}return u}()}}}},43567:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return q}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(71415),y=n.n(c),d=n(62687),l=n(21666),u=n(36204),s=n(30794),m=n(87888),_=n(80114),t=n(77581),v=n(64392),h=n(76493),E=n(65730),D=n(49443),b=n(69793),C=n(70381),P=n(80453),U=n(81565),L=n(57374),O=n(7561),j=n(1017),R=n(76903),I=n(5098),B=n(35887),S=n(38923),T=n(68612),M=n(66205),an=n.n(M),A=n(83847),N=n(38043),z=n(6675),K=n(10440),W=n(5538),w=n(79764),Z=n(29768),Y=n(12251),F=n(81308),H=n(26867),$=n(4305),G=n(41165),V=n(94311),J=n(25746),Q=n(98397),X=n(27484),rn=n.n(X),q={"src-utils-math-util-demo-mathutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,31912))})),asset:{type:"BLOCK",id:"src-utils-math-util-demo-mathutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(43936).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"},"./../../../components/Page.js":{type:"FILE",value:n(65332).Z},"./Page.jsx":{type:"FILE",value:n(24467).Z},"./Page.less":{type:"FILE",value:n(89745).Z},"./Aside.jsx":{type:"FILE",value:n(28242).Z},"./Main.jsx":{type:"FILE",value:n(56324).Z},"./Footer.jsx":{type:"FILE",value:n(14615).Z},"./Header.jsx":{type:"FILE",value:n(26110).Z},"./../../../utils/DOMUtil.js":{type:"FILE",value:n(64575).Z},"./../../SafeArea.js":{type:"FILE",value:n(51389).Z},"./SafeArea.jsx":{type:"FILE",value:n(83303).Z},"./SafeArea.less":{type:"FILE",value:n(24147).Z},"./preventDefault.js":{type:"FILE",value:n(61242).Z},"./classNames.js":{type:"FILE",value:n(91111).Z},"./TopContainer.jsx":{type:"FILE",value:n(20393).Z},"./../../../utils/LocaleUtil.js":{type:"FILE",value:n(51118).Z},"./getEventPosition.js":{type:"FILE",value:n(44148).Z},"./variables.js":{type:"FILE",value:n(16437).Z},"./utils/isBottom.js":{type:"FILE",value:n(96499).Z},"./../../../utils/Device.js":{type:"FILE",value:n(9658).Z},"./utils/topRefreshOk.js":{type:"FILE",value:n(47409).Z},"./Device.js":{type:"FILE",value:n(79162).Z},"./getLanguage.js":{type:"FILE",value:n(62430).Z},"./languageMap.js":{type:"FILE",value:n(95601).Z},"./locale.jsx":{type:"FILE",value:n(3460).Z},"./loadLocale.js":{type:"FILE",value:n(27340).Z},"./setLocale.js":{type:"FILE",value:n(9446).Z},"./loadLyrixiLanguage.js":{type:"FILE",value:n(98750).Z},"./loadDayjsLanguage.js":{type:"FILE",value:n(33141).Z},"./splitValue.js":{type:"FILE",value:n(89866).Z},"./hasNode.js":{type:"FILE",value:n(84593).Z},"./compareVersion.js":{type:"FILE",value:n(438).Z},"./getKernel.js":{type:"FILE",value:n(60069).Z},"./getDevice.js":{type:"FILE",value:n(97699).Z},"./getOS.js":{type:"FILE",value:n(55405).Z},"./getScreenSize.js":{type:"FILE",value:n(69563).Z},"./getModel.js":{type:"FILE",value:n(17611).Z},"./getPlatform.js":{type:"FILE",value:n(35606).Z},"./getUrlParameter.js":{type:"FILE",value:n(42222).Z},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.jsx",title:">"},context:{"./../../../components/Page.js":l,"./Page.jsx":u,"./Page.less":s,"./Aside.jsx":m,"./Main.jsx":_,"./Footer.jsx":t,"./Header.jsx":v,"./../../../utils/DOMUtil.js":h,"./../../SafeArea.js":E,"./SafeArea.jsx":D,"./SafeArea.less":b,"./preventDefault.js":C,"./classNames.js":P,"./TopContainer.jsx":U,"./../../../utils/LocaleUtil.js":L,"./getEventPosition.js":O,"./variables.js":j,"./utils/isBottom.js":R,"./../../../utils/Device.js":I,"./utils/topRefreshOk.js":B,"./Device.js":S,"./getLanguage.js":T,"./languageMap.js":M,"./locale.jsx":A,"./loadLocale.js":N,"./setLocale.js":z,"./loadLyrixiLanguage.js":K,"./loadDayjsLanguage.js":W,"./splitValue.js":w,"./hasNode.js":Z,"./compareVersion.js":Y,"./getKernel.js":F,"./getDevice.js":H,"./getOS.js":$,"./getScreenSize.js":G,"./getModel.js":V,"./getPlatform.js":J,"./getUrlParameter.js":Q,react:a||(a=n.t(r,2)),vconsole:c,"lyrixi-mobile":d,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/index.js":l,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Page/index.jsx":u,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Page.less":s,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Aside/index.jsx":m,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/index.jsx":_,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Footer/index.jsx":t,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Header/index.jsx":v,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/index.js":h,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/SafeArea/index.js":E,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/SafeArea/SafeArea.jsx":D,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/SafeArea/SafeArea.less":b,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/preventDefault.js":C,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/classNames.js":P,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/TopContainer.jsx":U,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/index.js":L,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/getEventPosition.js":O,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/variables.js":j,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/utils/isBottom.js":R,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/index.js":I,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/utils/topRefreshOk.js":B,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/Device.js":S,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/getLanguage/index.js":T,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/languageMap.js":M,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/index.jsx":A,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/index.js":N,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/setLocale/index.js":z,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadLyrixiLanguage.js":K,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadDayjsLanguage.js":W,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/splitValue.js":w,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/hasNode.js":Z,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/compareVersion.js":Y,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getKernel.js":F,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getDevice.js":H,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getOS.js":$,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getScreenSize.js":G,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getModel.js":V,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getPlatform.js":J,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getUrlParameter.js":Q,dayjs:X},renderOpts:{compile:function(){var nn=g()(i()().mark(function tn(){var k,on=arguments;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,n.e(250).then(n.bind(n,90250));case 2:return x.abrupt("return",(k=x.sent).default.apply(k,on));case 3:case"end":return x.stop()}},tn)}));function en(){return nn.apply(this,arguments)}return en}()}}}},19524:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return l}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(71415),y=n.n(c),d=n(62687),l={"src-utils-object-util-demo-objectutil":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,91852))})),asset:{type:"BLOCK",id:"src-utils-object-util-demo-objectutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(93308).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),vconsole:c,"lyrixi-mobile":d},renderOpts:{compile:function(){var u=g()(i()().mark(function m(){var _,t=arguments;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(250).then(n.bind(n,90250));case 2:return h.abrupt("return",(_=h.sent).default.apply(_,t));case 3:case"end":return h.stop()}},m)}));function s(){return u.apply(this,arguments)}return s}()}}}},11693:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-request-demo-request":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,17346))})),asset:{type:"BLOCK",id:"src-utils-request-demo-request",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58087).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}},"src-utils-request-demo-cache":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,21484))})),asset:{type:"BLOCK",id:"src-utils-request-demo-cache",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(64981).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},27388:function(o,e,n){var a;n.r(e),n.d(e,{demos:function(){return y}});var f=n(15009),i=n.n(f),p=n(99289),g=n.n(p),r=n(67294),c=n(62687),y={"src-utils-storage-demo-storage":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,50443))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-storage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(36239).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}},"src-utils-storage-demo-usecachestate":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,79014))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-usecachestate",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(56626).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}},"src-utils-storage-demo-localstorage":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,40900))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-localstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(50233).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}},"src-utils-storage-demo-sessionstorage":{component:r.memo(r.lazy(function(){return Promise.all([n.e(1415),n.e(5734),n.e(2433)]).then(n.bind(n,21926))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-sessionstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(9300).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.4"}},entry:"index.jsx",title:">"},context:{react:a||(a=n.t(r,2)),"lyrixi-mobile":c},renderOpts:{compile:function(){var d=g()(i()().mark(function u(){var s,m=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,m));case 3:case"end":return t.stop()}},u)}));function l(){return d.apply(this,arguments)}return l}()}}}},81380:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},76319:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},1568:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},97246:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},27725:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},73775:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},56974:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},74653:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},31217:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},6684:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},70013:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868",paraId:0,tocIndex:1},{value:"LocaleUtil.locale \u9ED8\u8BA4\u8BFB\u53D6 window.lyrixiLocaleData \u5BF9\u8C61",paraId:1,tocIndex:2},{value:`import React from 'react'
import { LocaleUtil } from 'lyrixi-mobile'

// \u5176\u4E2Dkey\u7684\u503C\u4E3A: \u534A\u5F84{0}\u7C73
LocaleUtil.locale('\u534A\u5F841000\u7C73', 'key', [1000]) // => \u534A\u5F841000\u7C73
`,paraId:2,tocIndex:2},{value:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u4FEE\u6539window.lyrixiLocaleData\u4FEE\u6539\u56FD\u9645\u5316\u6570\u636E",paraId:3,tocIndex:2},{value:`\u76EE\u5F55: src/utils/LocaleUtil/resources/*.json
\u6587\u4EF6:`,paraId:4,tocIndex:3},{value:"en_US",paraId:5,tocIndex:3},{value:"zh_CN",paraId:5,tocIndex:3},{value:"zh_HK",paraId:5,tocIndex:3},{value:"vi_VN",paraId:5,tocIndex:3}]},56597:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},63040:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},42472:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},89159:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},97666:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},28242:function(o,e){e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil,SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Aside = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      className,
      style,

      // Elements
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // \u8282\u70B9
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <aside
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-aside', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </aside>
    )
  }
)

export default Aside
`},14615:function(o,e){e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

const Footer = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      className,
      style,

      // Elements
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <footer
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-footer', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </footer>
    )
  }
)

export default Footer
`},26110:function(o,e){e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

const Header = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      className,
      style,

      // Elements
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <header
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-header', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </header>
    )
  }
)

export default Header
`},20393:function(o,e){e.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import LocaleUtil from './../../../utils/LocaleUtil'

const TopContainer = forwardRef((props, ref) => {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return rootRef.current
  })
  return (
    <div ref={rootRef} className="lyrixi-page-main-pull-push">
      <div className="lyrixi-page-main-pull-push-wrapper">
        <div className="lyrixi-page-main-pull-push-icon"></div>
        <div className="lyrixi-page-main-pull-push-text">
          {LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi_76985db7270fb8bc2add09291b637964')}
        </div>
      </div>
    </div>
  )
})

export default TopContainer
`},56324:function(o,e){e.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import TopContainer from './TopContainer'
import isBottom from './utils/isBottom'
import topRefreshOk from './utils/topRefreshOk.js'

// \u5185\u5E93\u4F7F\u7528-start
import Device from './../../../utils/Device'
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Device, DOMUtil, LocaleUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u4E0B\u62C9\u5237\u65B0\u5BB9\u5668
const Main = forwardRef(
  (
    {
      // Status
      threshold = 50,
      safeArea,
      touchStopPropagation = true,

      // Style
      className,
      style,

      // Element
      children,

      // Events
      onTopRefresh,
      onBottomRefresh,
      onScroll,
      onScrollEnd
    },
    ref
  ) => {
    const rootRef = useRef(null)
    const isLoadingRef = useRef(null)
    const topContainerRef = useRef(null)
    // \u6EDA\u52A8\u8282\u6D41\u5B9A\u65F6\u5668
    const scrollThrottleRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    /* ----------------------
    Events
    ---------------------- */
    // Touch\u4FE1\u606F
    let touchesRef = useRef({
      isTop: true,
      startY: 0,
      currentY: 0,
      diffY: 0
    })

    function handleTouchStart(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return

      // \u5982\u679C\u4E0D\u5728\u9876\u90E8\uFF0C\u5219\u4E0D\u89E6\u53D1
      if (e.currentTarget.scrollTop <= 0) touchesRef.current.isTop = true
      else touchesRef.current.isTop = false

      topContainerRef.current.style.webkitTransitionDuration = '0ms'

      touchesRef.current.startY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = 0
    }
    // \u6807\u8BC6\u5934\u90E8\u6B63\u5728\u62D6\u52A8
    function handleTouchMove(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      touchesRef.current.currentY = e.clientY || e.touches[0].clientY
      touchesRef.current.diffY = touchesRef.current.currentY - touchesRef.current.startY

      // \u5411\u4E0B\u6EDA\u52A8
      if (touchesRef.current.diffY < 20) {
        return
      }

      // \u62C9\u52A8\u9AD8\u5EA6
      if (touchesRef.current.diffY > 100) touchesRef.current.diffY = 100
      topContainerRef.current.style.height = touchesRef.current.diffY + 'px'
      let topIcon = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-icon')
      let topText = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-text')
      if (touchesRef.current.diffY >= threshold) {
        if (topIcon) topIcon.classList.add('lyrixi-page-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale(
            '\u91CA\u653E\u7ACB\u5373\u5237\u65B0',
            'lyrixi_bb045b7b0ce191f0568fb4d0a9858b8d'
          )
      } else {
        if (topIcon) topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale(
            '\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0',
            'lyrixi_76985db7270fb8bc2add09291b637964'
          )
      }
    }
    async function handleTouchEnd(e) {
      touchStopPropagation && e.stopPropagation()
      if (isLoadingRef.current) return
      if (!touchesRef.current.isTop) return

      topContainerRef.current.style.webkitTransitionDuration = '150ms'

      // \u62C9\u52A8\u5E45\u5EA6\u8FC7\u5C0F\u5219\u6536\u8D77
      if (touchesRef.current.diffY <= threshold) {
        topContainerRef.current.style.height = '0'
      }
      // \u53CD\u4E4B\u5C55\u793A
      else {
        let topIcon = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-icon')
        let topText = topContainerRef.current?.querySelector?.('.lyrixi-page-main-pull-push-text')
        topContainerRef.current.style.height = threshold + 'px'
        if (topIcon) topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        if (topIcon) topIcon.classList.add('lyrixi-page-main-pull-push-icon-loading')
        if (topText)
          topText.innerHTML = \`\${LocaleUtil.locale(
            '\u52A0\u8F7D\u4E2D',
            'lyrixi_f013ea9dcba3f5ca1278aa850931fec8'
          )}...\`

        // Trigger Events
        if (onTopRefresh) {
          isLoadingRef.current = true
          let isOk = await onTopRefresh()
          // \u5934\u90E8\u663E\u793A
          await topRefreshOk(topContainerRef.current, isOk)
          isLoadingRef.current = false
        }
      }
    }

    async function handleScroll(e) {
      if (onScroll) onScroll(e)

      // ios\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u5141\u8BB8\u70B9\u51FBtab\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5C40\u90E8\u767D\u5C4F
      document.documentElement.classList.add(\`lyrixi-\${Device.os}-scrolling\`)
      if (scrollThrottleRef.current) {
        window.clearTimeout(scrollThrottleRef.current)
      }
      scrollThrottleRef.current = setTimeout(() => {
        // \u56E0\u4E3A\u73B0\u5728onScrollEnd\u539F\u751F\u4E8B\u4EF6\u517C\u5BB9\u6027\u975E\u5E38\u4E0D\u597D\uFF0C\u6682\u65F6\u4F7F\u7528\u6B64\u65B9\u6CD5\u6A21\u62DF
        onScrollEnd && onScrollEnd(e)
        document.documentElement.classList.remove(\`lyrixi-\${Device.os}-scrolling\`)
        // \u6EDA\u52A8\u5904\u7406\u5B8C\u6210
      }, 500)

      // \u6EDA\u52A8\u5230\u5E95\u90E8\u52A0\u8F7D\u66F4\u591A
      if (!onBottomRefresh || isLoadingRef.current) return
      if (isBottom(rootRef.current)) {
        isLoadingRef.current = true
        await onBottomRefresh()
        isLoadingRef.current = false
      }
    }

    return (
      <main
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-main', className)}
        // Events
        onTouchStart={onTopRefresh ? handleTouchStart : undefined}
        onTouchMove={onTopRefresh ? handleTouchMove : undefined}
        onTouchEnd={onTopRefresh ? handleTouchEnd : undefined}
        onScroll={onScroll || onBottomRefresh ? handleScroll : undefined}
      >
        {/* Element: Top Container */}
        <TopContainer ref={topContainerRef} />

        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </main>
    )
  }
)

export default Main
`},96499:function(o,e){e.Z=`// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5728\u5E95\u90E8
function isBottom(container) {
  if (!container) return false

  let clientHeight = container.clientHeight // || window.innerHeight
  let scrollHeight = container.scrollHeight
  let scrollTop =
    container === document.body ? document.documentElement.scrollTop : container.scrollTop
  // console.log(clientHeight + ':' + scrollHeight + ':' + scrollTop)
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    return true
  }
  return false
}
export default isBottom
`},47409:function(o,e){e.Z=`// \u5185\u5E93\u4F7F\u7528-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { LocaleUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-start */

// \u5237\u65B0\u5B8C\u6210
function topRefreshOk(topContainer, isOk) {
  return new Promise((resolve) => {
    let topText = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-text')

    // \u5B8C\u6210\u63D0\u793A\u4FE1\u606F
    let finishMsg = ''
    // \u5931\u8D25
    if (isOk === false) {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u5931\u8D25', 'lyrixi_245c7a0541c033776b61a33bda10bd99')
    }
    // \u81EA\u5B9A\u4E49\u63D0\u793A\u4FE1\u606F
    else if (typeof isOk === 'string') {
      finishMsg = isOk
    }
    // \u6210\u529F
    else {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u6210\u529F', 'lyrixi_efa2ebd79d14fa135072faa401a3154d')
    }
    if (topText) topText.innerHTML = finishMsg

    setTimeout(() => {
      // \u91CD\u7F6E\u6837\u5F0F
      let topIcon = topContainer?.querySelector?.('.lyrixi-page-main-pull-push-icon')
      if (topIcon) {
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        topIcon.classList.remove('lyrixi-page-main-pull-push-icon-loading')
      }
      if (topContainer) topContainer.style.height = '0'

      resolve(true)
    }, 1000)
  })
}

export default topRefreshOk
`},89745:function(o,e){e.Z=`// 1.\u5F15\u5165\u524D\u7F6E\u6837\u5F0F
@import '../../assets/global/global-before.less';

@import 'Aside/PageAside.less';
@import 'Footer/PageFooter.less';
@import 'Header/PageHeader.less';
@import 'Main/PageMain.less';

/*
* Page
*/
.lyrixi-page {
  // flex\u5E03\u5C40
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--lyrixi-bg-default);

  &.lyrixi-page-has-aside {
    flex-direction: row;
  }
}

// \u6491\u6EE1\u5C55\u793A
.lyrixi-page.lyrixi-full {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // \u4E0D\u80FD\u52A0z-index,\u4F1A\u5BFC\u81F4\u4E1A\u52A1page\u65E0\u6CD5\u8986\u76D6z-index
}
// 2.\u5F15\u5165\u540E\u7F6E\u6837\u5F0F
@import '../../assets/global/global-after.less';
`},24467:function(o,e){e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// [safeArea] true: \u81EA\u52A8\u5B89\u5168\u533A; false: \u5F3A\u5236\u53D6\u6D88\u5B89\u5168\u533A
const Page = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      full = true,
      layout,
      animation,
      style,
      className,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <section
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-page',
          full ? 'lyrixi-full' : '',
          layout ? \`lyrixi-flex-\${layout}\` : '',
          className
        )}
        data-animation={animation}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </section>
    )
  }
)

export default Page
`},65332:function(o,e){e.Z=`import './Page.less'
import Page from './Page'

import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

Page.Header = Header
Page.Aside = Aside
Page.Main = Main
Page.Footer = Footer

export default Page
`},83303:function(o,e){e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// \u5185\u5E93\u4F7F\u7528-start
import DOMUtil from './../../utils/DOMUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { DOMUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u5B89\u5168\u533A\u57DF
const SafeArea = forwardRef(
  (
    {
      // Style
      type = 'height', // height | padding | margin | border | before | after
      position = 'bottom', // top | bottom
      style,
      className
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-safe-area', \`lyrixi-\${type}-\${position}\`, className)}
      ></div>
    )
  }
)

export default SafeArea
`},24147:function(o,e){e.Z=`// 1.\u5F15\u5165\u524D\u7F6E\u6837\u5F0F
@import '../../assets/global/global-before.less';

// SafeArea\u5B89\u5168\u533A\u57DF
.lyrixi-safe-area {

  // \u5B9A\u4F4D
  &.lyrixi-top {
    top: var(--lyrixi-safe-area-inset-top);
  }

  &.lyrixi-bottom {
    bottom: var(--lyrixi-safe-area-inset-bottom);
  }

  // \u95F4\u8DDD
  &.lyrixi-padding-top {
    padding-top: var(--lyrixi-safe-area-inset-top);
  }

  &.lyrixi-padding-bottom {
    padding-bottom: var(--lyrixi-safe-area-inset-bottom);
  }

  &.lyrixi-margin-top {
    padding-top: var(--lyrixi-safe-area-inset-top);
  }

  &.lyrixi-margin-bottom {
    padding-bottom: var(--lyrixi-safe-area-inset-bottom);
  }

  // \u9AD8\u5EA6
  &.lyrixi-height-top {
    height: var(--lyrixi-safe-area-inset-top);
  }

  &.lyrixi-height-bottom {
    height: var(--lyrixi-safe-area-inset-bottom);
  }

  // \u8FB9\u6846
  &.lyrixi-border-top,
  &.lyrixi-border-bottom {
    border-style: solid;
    border-width: 0;
    border-color: transparent;
  }

  &.lyrixi-border-top {
    border-top-width: var(--lyrixi-safe-area-inset-top);
  }

  &.lyrixi-border-bottom {
    border-bottom-width: var(--lyrixi-safe-area-inset-bottom);
  }

  // before&after
  &.before::before,
  &.after::after {
    content: '';
    display: block;
    flex: none;
  }

  &.before::before {
    height: var(--lyrixi-safe-area-inset-top);
  }

  &.after::after {
    height: var(--lyrixi-safe-area-inset-bottom);
  }
}

// \u6E05\u9664\u5B89\u5168\u533A
.lyrixi-clear-safe-area {

  // \u5B9A\u4F4D
  &.lyrixi-top {
    top: 0 !important;
  }

  &.lyrixi-bottom {
    bottom: 0 !important;
  }

  // \u95F4\u8DDD
  &.lyrixi-padding-top {
    padding-top: 0 !important;
  }

  &.lyrixi-padding-bottom {
    padding-bottom: 0 !important;
  }

  &.lyrixi-margin-top {
    padding-top: 0 !important;
  }

  &.lyrixi-margin-bottom {
    padding-bottom: 0 !important;
  }

  // \u9AD8\u5EA6
  &.lyrixi-height-top {
    height: 0 !important;
  }

  &.lyrixi-height-bottom {
    height: 0 !important;
  }

  // \u8FB9\u6846
  &.lyrixi-border-top {
    border-top-width: 0 !important;
  }

  &.lyrixi-border-bottom {
    border-bottom-width: 0 !important;
  }

  // before&after
  &.before::before {
    height: 0 !important;
  }

  &.after::after {
    height: 0 !important;
  }
}

// \u81EA\u5B9A\u4E49\u5143\u7D20\u5B89\u5168\u533A
[data-safe-area='border-bottom'] {
  &:extend(.lyrixi-safe-area all);
  &:extend(.lyrixi-safe-area.lyrixi-border-bottom all);
}

[data-safe-area='after'] {
  &:extend(.lyrixi-safe-area all);
  &:extend(.lyrixi-safe-area.after all);
}
// 2.\u5F15\u5165\u540E\u7F6E\u6837\u5F0F
@import '../../assets/global/global-after.less';
`},51389:function(o,e){e.Z=`import './SafeArea.less'
import SafeArea from './SafeArea'

SafeArea.debug = () => {
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-bottom', '34px')
}

export default SafeArea
`},72025:function(o,e){e.Z=`import React from 'react'
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
`},58908:function(o,e){e.Z=`import React from 'react'
import { AssetUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js'
        )}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet.pdf')}</div>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.image'
        )}
      </div>
      <div>
        {AssetUtil.getFileExtension(
          'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.'
        ) || 'No Extension'}
      </div>
      <div>{AssetUtil.getFileExtension('leaflet. a') || 'No Extension'}</div>
    </>
  )
}
`},88724:function(o,e){e.Z=`import React from 'react'
import { AssetUtil } from 'lyrixi-mobile'

export default () => {
  function handleLoadJsByCallback() {
    AssetUtil.loadJs('https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js', {
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
    let result = await AssetUtil.loadRemoteJs(
      'https://lyrixi.github.io/lyrixi-mobile/assets/plugin/leaflet/js/leaflet.js',
      {
        id: 'leaflet-js'
      }
    )
    if (result.status === 'success') {
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
`},54692:function(o,e){e.Z=`import React, { useRef } from 'react'
import vconsole from 'vconsole'

import { Loading, Button, Bridge, Page, Divider, Card } from 'lyrixi-mobile'

new vconsole()

export default () => {
  const imageLocalFiles = useRef(null)

  return (
    <Page>
      <Page.Main>
        <Divider>\u7A97\u53E3\u63A5\u53E3</Divider>
        <Card>
          <Card.Header>\u6253\u5F00\u65B0\u7A97\u53E3\u63A5\u53E3</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>\u5173\u95ED\u5F53\u524D\u7F51\u9875\u7A97\u53E3\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>\u76D1\u542C\u9875\u9762\u8FD4\u56DE\u4E8B\u4EF6(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.onBack({
                  success: () => {
                    console.log('\u963B\u6B62\u8FD4\u56DE')
                    alert('\u963B\u6B62\u8FD4\u56DE')
                  }
                })
              }}
            >
              onBack
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u4FEE\u6539\u9875\u9762title</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u9000\u51FA\u81F3\u767B\u5F55\u9875\u9762(\u4EC5\u5BA2\u6237\u7AEF)</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u8FD4\u56DE\u9996\u9875(\u4EC5\u8BA2\u8D27\u5BA2\u6237\u7AEF\u652F\u6301)</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Divider>\u5A92\u4F53\u63A5\u53E3</Divider>
        <Card>
          <Card.Header>\u626B\u7801\u63A5\u53E3</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.scanCode({
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
              scanCode
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u62CD\u7167\u6216\u4ECE\u624B\u673A\u76F8\u518C\u9009\u62E9\u5A92\u4F53\u63A5\u53E3(\u4EC5\u652F\u6301\u5BA2\u6237\u7AEF,\u5FAE\u4FE1,\u4F01\u5FAE,\u5C0F\u7A0B\u5E8F)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.chooseMedia({
                  sizeType: ['original', 'compressed'], // \u53EF\u4EE5\u6307\u5B9A\u662F\u539F\u56FE\u8FD8\u662F\u538B\u7F29\u56FE\uFF0C\u9ED8\u8BA4\u4E8C\u8005\u90FD\u6709
                  sourceType: ['album', 'camera'], // \u53EF\u4EE5\u6307\u5B9A\u6765\u6E90\u662F\u76F8\u518C\u8FD8\u662F\u76F8\u673A\uFF0C\u9ED8\u8BA4\u4E8C\u8005\u90FD\u6709
                  onSuccess: (res) => {
                    console.log(res)
                    alert(JSON.stringify(res))
                    imageLocalFiles.current = res?.localFiles
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
              chooseMedia
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u4E0A\u4F20\u6587\u4EF6\u63A5\u53E3(\u5168\u5E73\u53F0\u652F\u6301)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                if (!imageLocalFiles.current) {
                  console.log('chooseMedia first!')
                  alert('chooseMedia first!')
                  return
                }
                Loading.show({
                  content: '\u4E0A\u4F20\u4E2D...'
                })
                Bridge.uploadFile({
                  url: '',
                  header: {
                    'Content-Type': 'multipart/form-data',
                    Cookie: document.cookie
                  },
                  data: {
                    uploadDir: 'test'
                  },
                  localFile: imageLocalFiles.current[0],
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
              uploadFile
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u5A92\u4F53\u6587\u4EF6\u9884\u89C8\u63A5\u53E3</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.previewMedia({
                  sources: [
                    {
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                    },
                    {
                      fileUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                    }
                  ],

                  index: 0,
                  current: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
                })
              }}
            >
              previewMedia
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u9884\u89C8\u6587\u4EF6\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u652F\u6301)</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Divider>\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3</Divider>
        <Card>
          <Card.Header>\u67E5\u770B\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3(\u5BA2\u6237\u7AEF\u3001\u4F01\u5FAE\u3001\u652F\u4ED8\u5B9D\u751F\u6D3B\u53F7\u3001\u98DE\u4E66\u3001\u9489\u9489)</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3</Card.Header>
          <Card.Main>
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
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>\u5206\u4EAB: \u5BA2\u6237\u7AEF\u3001\u5FAE\u4FE1\u3001\u4F01\u5FAE\u3001\u5C0F\u7A0B\u5E8F\u3001\u98DE\u4E66\u3001\u9489\u9489</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.share({
                  title: '\u6807\u9898',
                  description: '\u63CF\u8FF0',
                  imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
                  url: 'https://lyrixi.github.io/lyrixi-mobile/'
                })
              }}
            >
              Share
            </Button>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
`},69974:function(o,e){e.Z=`import React from 'react'
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
`},91111:function(o,e){e.Z=`const hasOwn = {}.hasOwnProperty

export default function classNames() {
  let classes = ''

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (arg) {
      classes = appendClass(classes, parseValue(arg))
    }
  }

  return classes
}

function parseValue(arg) {
  if (typeof arg === 'string') {
    return arg.trim()
  }

  if (typeof arg !== 'object') {
    return ''
  }

  if (Array.isArray(arg)) {
    return classNames.apply(null, arg)
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString()
  }

  let classes = ''

  for (const key in arg) {
    if (hasOwn.call(arg, key) && arg[key]) {
      classes = appendClass(classes, key)
    }
  }

  return classes
}

function appendClass(value, newClass) {
  if (!newClass) {
    return value
  }

  return value ? value + ' ' + newClass : newClass
}
`},54187:function(o,e){e.Z=`import React from 'react'
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
`},44148:function(o,e){e.Z=`/**
 * \u83B7\u53D6\u4E8B\u4EF6\u7684\u5750\u6807\u4F4D\u7F6E(\u517C\u5BB9touch\u548Cmouse\u4E8B\u4EF6)
 * @param {Event} e - \u4E8B\u4EF6\u5BF9\u8C61
 * @returns {{clientX: number, clientY: number}} \u5750\u6807\u5BF9\u8C61
 */
function getEventPosition(e) {
  // touchstart & touchmove & touchend
  if (e?.changedTouches?.[0]) {
    return {
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY
    }
  }

  // \u517C\u5BB9touchmove
  if (e?.touches?.[0]) {
    return {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    }
  }

  return {
    clientX: e.clientX,
    clientY: e.clientY
  }
}

export default getEventPosition
`},64575:function(o,e){e.Z=`import preventDefault from './preventDefault'
import getEventPosition from './getEventPosition'
import classNames from './classNames'
import variables from './variables'

const DOMUtil = {
  preventDefault: preventDefault,
  getEventPosition: getEventPosition,
  classNames: classNames,
  variables: variables
}

export default DOMUtil
`},61242:function(o,e){e.Z=`function preventDefault(e) {
  e.preventDefault()
}

export default preventDefault
`},16437:function(o,e){e.Z=`// \u7EC4\u4EF6\u6807\u51C6\u53D8\u91CF\u679A\u4E3E\u503C\uFF0C\u4E0Eless\u4E2D\u7684\u679A\u4E3E\u503C\u4E00\u81F4

// \u989C\u8272\u679A\u4E3E\u503C(color.less)
const colors = [
  'transparent',
  'white',
  'default',
  'secondary',
  'tertiary',
  'quaternary',
  'primary',
  'primary-lighten',
  'info',
  'info-lighten',
  'warning',
  'warning-lighten',
  'danger',
  'danger-lighten',
  'success',
  'success-lighten',
  'disabled',
  'disabled-lighten'
]

// \u5C3A\u5BF8\u679A\u4E3E\u503C(\u4E1A\u52A1\u81EA\u884C\u63A7\u5236)
const sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']

// \u5BFC\u51FA\u989C\u8272\u679A\u4E3E\u503C
export default { colors, sizes }
`},48196:function(o,e){e.Z=`import React from 'react'
import { Page, Card, Divider, DateUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
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
              let utcToDate2 = DateUtil.timeZoneToTimeZone(
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
`},97903:function(o,e){e.Z=`import React, { useEffect } from 'react'
import { Page, Debugger } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {
    // \u7559\u540E\u95E8\u8C03\u8BD5: \u8FDE\u7EED\u70B9\u51FB10\u6B21, \u663E\u793Avconsole
    Debugger.addTrigger()
  }, [])

  return (
    <Page>
      <Page.Main>\u5DE6\u4E0B\u89D2\u70B9\u51FB10\u6B21\u547C\u51FA\u6697\u95E8</Page.Main>
    </Page>
  )
}
`},79162:function(o,e){e.Z=`import getKernel from './getKernel'
import getDevice from './getDevice'
import getOS from './getOS'
import defaultGetPlatform from './getPlatform'
import getUrlParameter from './getUrlParameter'
import { getScreenWidth, getScreenHeight } from './getScreenSize'
import getModel from './getModel'
import compareVersion from './compareVersion'

// Device
let Device = {
  // \u5B58\u50A8\u81EA\u5B9A\u4E49\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570
  _getCustomPlatforms: [],
  /**
   * \u6DFB\u52A0\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570
   * @param {Function} getCustomPlatform - \u81EA\u5B9A\u4E49\u5E73\u53F0\u68C0\u6D4B\u51FD\u6570\uFF0C\u8FD4\u56DE {platform: String, platformVersion: String} \u6216 null
   * @example
   * Device.addPlatform(() => {
   *   let ua = navigator.userAgent.toLowerCase()
   *   if (ua.indexOf('customapp') > -1) {
   *     const match = ua.match(/customapp\\/([\\w.]*)/)
   *     return {
   *       platform: 'customApp',
   *       platformVersion: match?.[1] || ''
   *     }
   *   }
   *   return null
   * })
   */
  addPlatform(getCustomPlatform) {
    if (typeof getCustomPlatform === 'function') {
      this._getCustomPlatforms.push(getCustomPlatform)
    }
  },
  // \u5185\u90E8\u65B9\u6CD5\uFF1A\u68C0\u6D4B\u5E73\u53F0\uFF08\u6574\u5408\u81EA\u5B9A\u4E49\u68C0\u6D4B\u548C\u9ED8\u8BA4\u68C0\u6D4B\uFF09
  _getPlatform() {
    let ua = navigator.userAgent.toLowerCase()

    // \u5148\u6267\u884C\u81EA\u5B9A\u4E49\u68C0\u6D4B
    for (let getCustomPlatform of this._getCustomPlatforms) {
      const result = getCustomPlatform(ua)
      if (result && result.platform) {
        return {
          platform: result.platform,
          platformVersion: result.platformVersion || ''
        }
      }
    }

    // \u518D\u6267\u884C\u9ED8\u8BA4\u68C0\u6D4B
    return defaultGetPlatform()
  },
  get userAgent() {
    return navigator.userAgent
  },
  get language() {
    return window.navigator.browserLanguage || window.navigator.language
  },
  get isOnLine() {
    return window.navigator.onLine || true
  },
  get protocol() {
    return window.location.protocol
  },
  get host() {
    return window.location.host
  },
  get domain() {
    return window.location.protocol + '//' + window.location.host
  },
  // \u5185\u6838: 'trident' | 'presto' | 'webkit' | 'gecko' | ''
  get kernel() {
    return getKernel()
  },
  // \u8BBE\u5907: 'mobile' | 'pc'
  get device() {
    return getDevice()
  },
  // \u7CFB\u7EDF: 'android' | 'ios' | 'harmony'
  get os() {
    return getOS().os
  },
  get osVersion() {
    return getOS().osVersion
  },
  // \u578B\u53F7
  get model() {
    return getModel()
  },
  // \u5E73\u53F0
  get platform() {
    return this._getPlatform().platform
  },
  get platformVersion() {
    return this._getPlatform().platformVersion
  },
  // \u5C4F\u5E55\u5BBD\u9AD8
  get screenWidth() {
    return getScreenWidth()
  },
  get screenHeight() {
    return getScreenHeight()
  },

  // \u83B7\u53D6url\u53C2\u6570
  getUrlParameter: getUrlParameter,
  compareVersion: compareVersion
}

export default Device
`},438:function(o,e){e.Z=`/**
 * \u6BD4\u8F83\u7248\u672C\u53F7
 * @param {String} v1 - \u7248\u672C\u53F71
 * @param {String} v2 - \u7248\u672C\u53F72
 * @param {String} separator - \u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A '.'
 * @returns {Number} -1: v1\u5C0F\u4E8Ev2, 0: v1\u7B49\u4E8Ev2, 1: v1\u5927\u4E8Ev2
 */
function compareVersion(v1, v2, separator = '.') {
  // Comaptiable with IOS version
  if (v1.indexOf(separator) === -1 && v1.indexOf('_') !== -1) {
    // eslint-disable-next-line
    v1 = v1.replace(/_/gim, separator)
  }
  if (v2.indexOf(separator) === -1 && v2.indexOf('_') !== -1) {
    // eslint-disable-next-line
    v2 = v2.replace(/_/gim, separator)
  }

  const v1Parts = v1.split(separator).map(Number)
  const v2Parts = v2.split(separator).map(Number)

  const length = Math.max(v1Parts.length, v2Parts.length)

  for (let i = 0; i < length; i++) {
    const part1 = v1Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0
    const part2 = v2Parts[i] || 0 // \u5982\u679C\u6CA1\u6709\u8BE5\u90E8\u5206\uFF0C\u9ED8\u8BA4\u4E3A0

    if (part1 < part2) return -1
    if (part1 > part2) return 1
  }

  return 0 // \u5982\u679C\u6240\u6709\u90E8\u5206\u90FD\u76F8\u7B49
}

export default compareVersion

`},5814:function(o,e){e.Z=`import React from 'react'

import { Page, Device, Card } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
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
`},97699:function(o,e){e.Z=`function getDevice() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/applewebkit.*mobile.*/)) {
    return 'mobile'
  }
  return 'pc'
}

export default getDevice

`},60069:function(o,e){e.Z=`function getKernel() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('trident') > -1) {
    return 'trident'
  } else if (ua.indexOf('presto') > -1) {
    return 'presto'
  } else if (ua.indexOf('applewebkit') > -1) {
    return 'webkit'
  } else if (ua.indexOf('gecko') > -1 && ua.indexOf('khtml') === -1) {
    return 'gecko'
  }
  return ''
}

export default getKernel

`},17611:function(o,e){e.Z=`function getModel() {
  let userAgent = navigator.userAgent
  let model = ''
  if (userAgent.toLowerCase().match(/android\\s*(\\d*\\.*\\d*)/)) {
    let infos = userAgent.split(';')
    for (let info of infos) {
      if (info.indexOf('Build') !== -1) {
        info = info.trim()
        model = info.substring(0, info.indexOf(' Build'))
        break
      }
    }
    if (!model) model = ''
  } else {
    let iosVersion = ''
    let iosExp = userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
    if (iosExp && iosExp[1]) {
      iosVersion = iosExp[1].replace(/_/gim, '.')
    }
    model = \`iPhone \${iosVersion}\`
  }
  return model
}

export default getModel

`},55405:function(o,e){e.Z=`/**
 * \u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u4FE1\u606F
 * @returns {Object} {os: String, osVersion: String}
 */
function getOS() {
  let ua = navigator.userAgent.toLowerCase()
  let os = ''
  let osVersion = ''
  let androidExp = ua.match(/android\\s*(\\d*\\.*\\d*)/)
  let iosExp = ua.match(/cpu iphone os (.*?) like mac os/)
  let harmonyExp = ua.match(/openharmony\\s*(\\d*\\.*\\d*)/)
  
  if (androidExp) {
    os = 'android'
    osVersion = androidExp[1]
  } else if (iosExp) {
    os = 'ios'
    osVersion = iosExp[1]
  } else if (harmonyExp) {
    os = 'harmony'
    osVersion = harmonyExp[1]
  }
  
  return { os, osVersion }
}

export default getOS

`},35606:function(o,e){e.Z=`/**
 * \u83B7\u53D6\u5E73\u53F0\u4FE1\u606F
 * @returns {Object} {platform: String, platformVersion: String}
 */
function getPlatform() {
  let ua = navigator.userAgent.toLowerCase()
  let platform = ''
  let platformVersion = ''
  let platformMatch = null

  // \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F
  if (ua.indexOf('miniprogram') > -1 && ua.indexOf('micromessenger') > -1) {
    if (ua.indexOf('wxwork') > -1) {
      platform = 'wecomMiniProgram'
      platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
    } else if (ua.indexOf('micromessenger') > -1) {
      platform = 'wechatMiniProgram'
      platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
    }
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u4F01\u4E1A\u5FAE\u4FE1
  else if (ua.indexOf('wxwork') > -1) {
    platform = 'wecom'
    platformMatch = ua.match(/wxwork\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u5FAE\u4FE1
  else if (ua.indexOf('micromessenger') > -1) {
    platform = 'wechat'
    platformMatch = ua.match(/micromessenger\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u652F\u4ED8\u5B9D
  else if (ua.indexOf('alipay') > -1) {
    platform = 'alipay'
    if (ua.indexOf('miniprogram') > -1) {
      platform = 'alipayMiniProgram'
    }
    platformMatch = ua.match(/alipayclient\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u9489\u9489
  else if (ua.indexOf('dingtalk') > -1) {
    platform = 'dingtalk'
    platformMatch = ua.match(/dingtalk\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // \u98DE\u4E66
  else if (ua.indexOf('lark') > -1) {
    platform = 'lark'
    platformMatch = ua.match(/lark\\/([\\w.]*)/)
    if (platformMatch && platformMatch[1]) platformVersion = platformMatch[1]
  }
  // QQ
  else if (ua.indexOf('mqqbrowser') > -1) {
    platform = 'qq'
  }
  // UC
  else if (ua.indexOf('ucbrowser') > -1) {
    platform = 'uc'
  }
  // \u5176\u5B83\u6D4F\u89C8\u5668
  else {
    platform = 'browser'
    const platformMatch = ua.match(/version\\/([\\d.]+)/)
    platformVersion = platformMatch?.[1] || ''
  }

  return { platform, platformVersion }
}

export default getPlatform
`},69563:function(o,e){e.Z=`function getScreenWidth() {
  if (window.innerWidth) return window.innerWidth
  if (window.screen.width) return window.screen.width
  if (window.screen.availWidth) return window.screen.availWidth
}

/**
 * \u83B7\u53D6\u5C4F\u5E55\u9AD8\u5EA6
 * @returns {Number} \u5C4F\u5E55\u9AD8\u5EA6
 */
function getScreenHeight() {
  if (window.innerHeight) return window.innerHeight
  if (window.screen.height) return window.screen.height
  if (window.screen.availHeight) return window.screen.availHeight
}

export { getScreenWidth, getScreenHeight }

`},42222:function(o,e){e.Z=`function getUrlParameter(argName, argSearch) {
  let url = window.location.href
  if (argSearch) url = argSearch
  let params = {}
  // \u5982\u679Curl\u4E2D\u5305\u542B?\u8BF4\u660E\u6709\u53C2\u6570
  if (url?.indexOf?.('?') !== -1) {
    if (!argName) return '?' + url.split('?')[1]
    // \u83B7\u53D6\u6240\u6709\u53C2\u6570options: \u5982?a=1&b=2\u8F6C\u4E3A['a=1','b=2']
    let options = url.split('?')[1]?.split('&')
    if (options?.length) {
      for (let i = 0; i < options.length; i++) {
        // \u83B7\u53D6\u5355\u9879option: \u5982'a=1'\u8F6C\u4E3A['a', '1']
        let option = options[i].split('=')
        if (option.length === 2) {
          if (argName) {
            if (argName === option[0]) return option[1]
          } else {
            params[option[0]] = option[1]
          }
        }
      }
    }
  }
  if (Object.keys(params).length) return params
  return ''
}

export default getUrlParameter

`},9658:function(o,e){e.Z=`import Device from './Device.js'

export default Device
`},38056:function(o,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},32862:function(o,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},89806:function(o,e){e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},60596:function(o,e){e.Z=`import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Page, LocaleUtil, Card, Button } from 'lyrixi-mobile'

export default () => {
  const [currentLanguage, setCurrentLanguage] = useState(null)

  useEffect(() => {
    initLocale()
  }, [])

  // \u521D\u59CB\u5316\u56FD\u9645\u5316
  async function initLocale(language = 'en_US') {
    let newResult = await LocaleUtil.loadLocale(language)
    if (newResult.status === 'success') {
      console.log('\u52A0\u8F7D\u6210\u529F')
      setCurrentLanguage(language)
    } else {
      console.log('\u52A0\u8F7D\u5931\u8D25')
    }
  }

  // \u5207\u6362\u8BED\u8A00
  async function switchLanguage(language) {
    await initLocale(language)
  }

  if (!currentLanguage) {
    return null
  }
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Node with variables</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('\u8FD1{0}\u65E5', 'lyrixi_7243810e4577ec95db8f7315c52ebe66', [
              <span key={'0'} style={{ color: 'red' }}>
                7
              </span>
            ])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>String with variables</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('\u8FD1{0}\u65E5', 'lyrixi_7243810e4577ec95db8f7315c52ebe66', ['7'])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>No key use static value</Card.Header>
          <Card.Main>
            {LocaleUtil.locale('\u8FD1{0}\u65E5', '', ['7'])}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>No key and value use mark(Node)</Card.Header>
          <Card.Main>
            {LocaleUtil.locale(<div>Node</div>)}
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>No key and value use mark(Number)</Card.Header>
          <Card.Main>
            {LocaleUtil.locale(7)}
          </Card.Main>
        </Card>


        <Card>
          <Card.Header>Dayjs locale</Card.Header>
          <Card.Main>
            {dayjs().format('YYYY-wo')}
          </Card.Main>
        </Card>
      </Page.Main>
      <Page.Footer>
        <Button onClick={() => switchLanguage('zh_CN')}>\u4E2D\u6587</Button>
        <Button onClick={() => switchLanguage('en_US')}>English</Button>
      </Page.Footer>
    </Page>
  )
}
`},62430:function(o,e){e.Z=`// \u83B7\u53D6\u5F53\u524D\u8BED\u8A00
function getLanguage() {
  return (
    window.lyrixiLocaleLanguage ||
    navigator.userAgent.match(/lyrixiLanguage\\/([\\w.]*)/)?.[1] ||
    'zh_CN'
  )
}

export default getLanguage
`},51118:function(o,e){e.Z=`import languageMap from './languageMap'
import loadLocale from './loadLocale'
import setLocale from './setLocale'
import locale from './locale'
import defaultGetLanguage from './getLanguage'

// \u8BB0\u5F55\u8BED\u8A00: window.lyrixiLocaleLanguage, window.lyrixiLocaleData
const LocaleUtil = {
  // \u5B58\u50A8\u81EA\u5B9A\u4E49 getLanguage \u51FD\u6570
  _getCustomGetLanguages: [],
  /**
   * \u6DFB\u52A0\u81EA\u5B9A\u4E49\u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u7684\u51FD\u6570
   * @param {Function} getCustomLanguage - \u81EA\u5B9A\u4E49\u51FD\u6570\uFF0C\u8FD4\u56DE\u5F53\u524D\u8BED\u8A00\u5B57\u7B26\u4E32\uFF08\u5982 'zh_CN'\uFF09\uFF0C\u82E5\u65E0\u6CD5\u8BC6\u522B\u53EF\u8FD4\u56DE null/undefined \u5219\u4F7F\u7528\u9ED8\u8BA4\u903B\u8F91
   * @example
   * LocaleUtil.addGetLanguage(() => {
   *   const lang = window.myAppLanguage
   *   return lang || null
   * })
   */
  addLanguage(getCustomLanguage) {
    if (typeof getCustomLanguage === 'function') {
      this._getCustomGetLanguages.push(getCustomLanguage)
    }
  },
  getLanguage() {
    for (const getCustomGetLanguage of this._getCustomGetLanguages) {
      const result = getCustomGetLanguage()
      if (result !== null && result !== undefined && result !== '') {
        return result
      }
    }
    return defaultGetLanguage()
  },
  locale: locale,
  loadLocale: loadLocale,
  setLocale: setLocale,
  getLanguageMap: (language) => {
    if (language) {
      return languageMap?.[language] || null
    }
    return languageMap
  }
}

export default LocaleUtil
`},95601:function(o,e){e.Z=`// United language list
// https://ant.design/docs/react/i18n-cn
// dayjs: https://github.com/iamkun/dayjs/tree/dev/src/locale
// browser \u5BF9\u5E94 window.navigator.language
const languageMap = {
  // \u963F\u62C9\u4F2F\u8BED
  ar_EG: { browser: 'ar-EG', dayjs: 'ar', translate: { google: 'ar', bing: 'ar' } },
  // \u963F\u585E\u62DC\u7586\u8BED
  az_AZ: { browser: 'az-AZ', dayjs: 'az', translate: { google: 'az', bing: 'az' } },
  // \u4FDD\u52A0\u5229\u4E9A\u8BED
  bg_BG: { browser: 'bg-BG', dayjs: 'bg', translate: { google: 'bg', bing: 'bg' } },
  // \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09
  bn_BD: { browser: 'bn-BD', dayjs: 'bn', translate: { google: 'bn', bing: 'bn' } },
  // \u767D\u4FC4\u7F57\u65AF\u8BED
  by_BY: { browser: 'by-BY', dayjs: 'by', translate: { google: 'by', bing: 'by' } },
  // \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED
  ca_ES: { browser: 'ca-ES', dayjs: 'ca', translate: { google: 'ca', bing: 'ca' } },
  // \u6377\u514B\u8BED
  cs_CZ: { browser: 'cs-CZ', dayjs: 'cs', translate: { google: 'cs', bing: 'cs' } },
  // \u4E39\u9EA6\u8BED
  da_DK: { browser: 'da-DK', dayjs: 'da', translate: { google: 'da', bing: 'da' } },
  // \u5FB7\u8BED
  de_DE: { browser: 'de-DE', dayjs: 'de', translate: { google: 'de', bing: 'de' } },
  // \u5E0C\u814A\u8BED
  el_GR: { browser: 'el-GR', dayjs: 'el', translate: { google: 'el', bing: 'el' } },
  // \u82F1\u8BED
  en_GB: { browser: 'en-GB', dayjs: 'en-gb', translate: { google: 'en', bing: 'en' } },
  // \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09
  en_US: { browser: 'en-US', dayjs: 'en', translate: { google: 'en', bing: 'en' } },
  // \u897F\u73ED\u7259\u8BED
  es_ES: { browser: 'es-ES', dayjs: 'es', translate: { google: 'es', bing: 'es' } },
  // \u5DF4\u65AF\u514B\u8BED
  eu_ES: { browser: 'eu-ES', dayjs: 'eu', translate: { google: 'eu', bing: 'eu' } },
  // \u7231\u6C99\u5C3C\u4E9A\u8BED
  et_EE: { browser: 'et-EE', dayjs: 'et', translate: { google: 'et', bing: 'et' } },
  // \u6CE2\u65AF\u8BED
  fa_IR: { browser: 'fa-IR', dayjs: 'fa', translate: { google: 'fa', bing: 'fa' } },
  // \u82AC\u5170\u8BED
  fi_FI: { browser: 'fi-FI', dayjs: 'fi', translate: { google: 'fi', bing: 'fi' } },
  // \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  fr_BE: { browser: 'fr-BE', dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09
  fr_CA: { browser: 'fr-CA', dayjs: 'fr-ca', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09
  fr_FR: { browser: 'fr-FR', dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u7231\u5C14\u5170\u8BED
  ga_IE: { browser: 'ga-IE', dayjs: 'ga', translate: { google: 'ga', bing: 'ga' } },
  // \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09
  gl_ES: { browser: 'gl-ES', dayjs: 'gl', translate: { google: 'gl', bing: 'gl' } },
  // \u5E0C\u4F2F\u6765\u8BED
  he_IL: { browser: 'he-IL', dayjs: 'he', translate: { google: 'he', bing: 'he' } },
  // \u5370\u5730\u8BED
  hi_IN: { browser: 'hi-IN', dayjs: 'hi', translate: { google: 'hi', bing: 'hi' } },
  // \u514B\u7F57\u5730\u4E9A\u8BED
  hr_HR: { browser: 'hr-HR', dayjs: 'hr', translate: { google: 'hr', bing: 'hr' } },
  // \u5308\u7259\u5229\u8BED
  hu_HU: { browser: 'hu-HU', dayjs: 'hu', translate: { google: 'hu', bing: 'hu' } },
  // \u4E9A\u7F8E\u5C3C\u4E9A
  hy_AM: { browser: 'hy-AM', dayjs: 'hy', translate: { google: 'hy', bing: 'hy' } },
  // \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED
  id_ID: { browser: 'id-ID', dayjs: 'id', translate: { google: 'id', bing: 'id' } },
  // \u610F\u5927\u5229\u8BED
  it_IT: { browser: 'it-IT', dayjs: 'it', translate: { google: 'it', bing: 'it' } },
  // \u51B0\u5C9B\u8BED
  is_IS: { browser: 'is-IS', dayjs: 'is', translate: { google: 'is', bing: 'is' } },
  // \u65E5\u8BED
  ja_JP: { browser: 'ja-JP', dayjs: 'ja', translate: { google: 'ja', bing: 'ja' } },
  // \u683C\u9C81\u5409\u4E9A\u8BED
  ka_GE: { browser: 'ka-GE', dayjs: 'ka', translate: { google: 'ka', bing: 'ka' } },
  // \u9AD8\u68C9\u8BED
  km_KH: { browser: 'km-KH', dayjs: 'km', translate: { google: 'km', bing: 'km' } },
  // \u5317\u5E93\u5C14\u5FB7\u8BED
  kmr_IQ: { browser: 'kmr-IQ', dayjs: 'kmr', translate: { google: 'kmr', bing: 'kmr' } },
  // \u5361\u7EB3\u8FBE\u8BED
  kn_IN: { browser: 'kn-IN', dayjs: 'kn', translate: { google: 'kn', bing: 'kn' } },
  // \u54C8\u8428\u514B\u8BED
  kk_KZ: { browser: 'kk-KZ', dayjs: 'kk', translate: { google: 'kk', bing: 'kk' } },
  // \u97E9\u8BED/\u671D\u9C9C\u8BED
  ko_KR: { browser: 'ko-KR', dayjs: 'ko', translate: { google: 'ko', bing: 'ko' } },
  // \u7ACB\u9676\u5B9B\u8BED
  lt_LT: { browser: 'lt-LT', dayjs: 'lt', translate: { google: 'lt', bing: 'lt' } },
  // \u62C9\u8131\u7EF4\u4E9A\u8BED
  lv_LV: { browser: 'lv-LV', dayjs: 'lv', translate: { google: 'lv', bing: 'lv' } },
  // \u9A6C\u5176\u987F\u8BED
  mk_MK: { browser: 'mk-MK', dayjs: 'mk', translate: { google: 'mk', bing: 'mk' } },
  // \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED
  ml_IN: { browser: 'ml-IN', dayjs: 'ml', translate: { google: 'ml', bing: 'ml' } },
  // \u8499\u53E4\u8BED
  mn_MN: { browser: 'mn-MN', dayjs: 'mn', translate: { google: 'mn', bing: 'mn' } },
  // \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)
  ms_MY: { browser: 'ms-MY', dayjs: 'ms', translate: { google: 'ms', bing: 'ms' } },
  // \u7F05\u7538\u8BED
  my_MM: { browser: 'my-MM', dayjs: 'my', translate: { google: 'my', bing: 'my' } },
  // \u632A\u5A01\u8BED
  nb_NO: { browser: 'nb-NO', dayjs: 'nb', translate: { google: 'nb', bing: 'nb' } },
  // \u5C3C\u6CCA\u5C14\u8BED
  ne_NP: { browser: 'ne-NP', dayjs: 'ne', translate: { google: 'ne', bing: 'ne' } },
  // \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  nl_BE: { browser: 'nl-BE', dayjs: 'nl-be', translate: { google: 'nl', bing: 'nl' } },
  // \u8377\u5170\u8BED
  nl_NL: { browser: 'nl-NL', dayjs: 'nl', translate: { google: 'nl', bing: 'nl' } },
  // \u6CE2\u5170\u8BED
  pl_PL: { browser: 'pl-PL', dayjs: 'pl', translate: { google: 'pl', bing: 'pl' } },
  // \u8461\u8404\u7259\u8BED(\u5DF4\u897F)
  pt_BR: { browser: 'pt-BR', dayjs: 'pt-br', translate: { google: 'pt', bing: 'pt' } },
  // \u8461\u8404\u7259\u8BED
  pt_PT: { browser: 'pt-PT', dayjs: 'pt', translate: { google: 'pt', bing: 'pt' } },
  // \u7F57\u9A6C\u5C3C\u4E9A\u8BED
  ro_RO: { browser: 'ro-RO', dayjs: 'ro', translate: { google: 'ro', bing: 'ro' } },
  // \u4FC4\u7F57\u65AF\u8BED
  ru_RU: { browser: 'ru-RU', dayjs: 'ru', translate: { google: 'ru', bing: 'ru' } },
  // \u50E7\u4F3D\u7F57\u8BED
  si_LK: { browser: 'si-LK', dayjs: 'si', translate: { google: 'si', bing: 'si' } },
  // \u65AF\u6D1B\u4F10\u514B\u8BED
  sk_SK: { browser: 'sk-SK', dayjs: 'sk', translate: { google: 'sk', bing: 'sk' } },
  // \u585E\u5C14\u7EF4\u4E9A\u8BED
  sr_RS: { browser: 'sr-RS', dayjs: 'sr', translate: { google: 'sr', bing: 'sr' } },
  // \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED
  sl_SI: { browser: 'sl-SI', dayjs: 'sl', translate: { google: 'sl', bing: 'sl' } },
  // \u745E\u5178\u8BED
  sv_SE: { browser: 'sv-SE', dayjs: 'sv', translate: { google: 'sv', bing: 'sv' } },
  // \u6CF0\u7C73\u5C14\u8BED
  ta_IN: { browser: 'ta-IN', dayjs: 'ta', translate: { google: 'ta', bing: 'ta' } },
  // \u6CF0\u8BED
  th_TH: { browser: 'th-TH', dayjs: 'th', translate: { google: 'th', bing: 'th' } },
  // \u571F\u8033\u5176\u8BED
  tr_TR: { browser: 'tr-TR', dayjs: 'tr', translate: { google: 'tr', bing: 'tr' } },
  // \u571F\u5E93\u66FC
  tk_TK: { browser: 'tk-TK', dayjs: 'tk', translate: { google: 'tk', bing: 'tk' } },
  // \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)
  ur_PK: { browser: 'ur-PK', dayjs: 'ur', translate: { google: 'ur', bing: 'ur' } },
  // \u4E4C\u514B\u5170\u8BED
  uk_UA: { browser: 'uk-UA', dayjs: 'uk', translate: { google: 'uk', bing: 'uk' } },
  // \u4E4C\u5179\u522B\u514B\u8BED\uFF08\u62C9\u4E01\u5B57\u6BCD\uFF09
  uz_UZ: { browser: 'uz-UZ', dayjs: 'uz', translate: { google: 'uz', bing: 'uz' } },
  // \u8D8A\u5357\u8BED
  vi_VN: { browser: 'vi-VN', dayjs: 'vi', translate: { google: 'vi', bing: 'vi' } },
  // \u7B80\u4F53\u4E2D\u6587
  zh_CN: { browser: 'zh-CN', dayjs: 'zh-cn', translate: { google: 'zh-CN', bing: 'zh-CN' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
  zh_HK: { browser: 'zh-HK', dayjs: 'zh-hk', translate: { google: 'zh-HK', bing: 'zh-HK' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
  zh_TW: { browser: 'zh-TW', dayjs: 'zh-tw', translate: { google: 'zh-TW', bing: 'zh-TW' } }
}

module.exports = languageMap
`},27340:function(o,e){e.Z=`import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'

// \u52A0\u8F7D\u56FD\u9645\u5316\u6587\u4EF6
async function loadLocale(
  language,
  { dayjs = true } = {}
) {
  let result = {
    status: 'error',
    message: 'language is null'
  }
  if (!language) {
    return result
  }

  // \u52A0\u8F7Ddayjs\u56FD\u9645\u5316\u8BED\u8A00\u6587\u4EF6
  if (dayjs) {
    result = await loadDayjsLanguage(language)
    if (result.status === 'error') {
      return result
    }
  }

  // \u52A0\u8F7Dlyrixi\u56FD\u9645\u5316\u8BED\u8A00\u6587\u4EF6
  result = await loadLyrixiLanguage(language)
  return result
}

export default loadLocale
`},33141:function(o,e){e.Z=`import dayjs from 'dayjs'
import languageMap from '../languageMap'

// \u52A0\u8F7Ddayjs\u672C\u5730\u6587\u4EF6
async function loadDayjsLanguage(language) {
  return new Promise((resolve) => {
    let lang = languageMap?.[language]
    // \u8BBE\u7F6Edayjs\u8BED\u8A00
    if (!lang?.dayjs) {
      resolve({
        status: 'error',
        message: 'Dayjs language not found'
      })
      return
    }

    // \u52A8\u6001\u5F15\u5165\u56FD\u9645\u5316\u6587\u4EF6
    import(\`dayjs/locale/\${lang.dayjs}.js\`).then(jsFile => {
      let result = {
        status: 'success',
        message: 'Local js file loaded successfully'
      }
      dayjs.locale(lang?.dayjs)
      resolve(result)
    }).catch(() => {
      let error = {
        status: 'error',
        message: 'Local js file loaded failed'
      }
      resolve(error)
    })
  })
}

export default loadDayjsLanguage
`},98750:function(o,e){e.Z=`// \u8BBE\u7F6Elyrixi\u8BED\u8A00
async function loadLyrixiLanguage(language) {
  return new Promise((resolve) => {
    if (!language) {
      resolve({
        status: 'error',
        message: 'Local file loaded failed'
      })
      return
    }
    let result = {
      status: 'error',
      message: 'Local js file loaded failed'
    }

    // \u52A8\u6001\u5F15\u5165\u56FD\u9645\u5316\u6587\u4EF6
    import(\`./../../../assets/locale/\${language}.js\`).then(jsFile => {
      // \u5199\u6B7B\u7684\u56FD\u9645\u5316\u6570\u636E\u53D8\u91CFwindow.lyrixiLocaleData\u548Cwindow.lyrixiLocaleLanguage
      if (jsFile.default) {
        window.lyrixiLocaleLanguage = language
        window.lyrixiLocaleData = jsFile.default
        result = {
          status: 'success',
          message: 'Local js file loaded successfully',
          data: window.lyrixiLocaleData
        }
      }
      resolve(result)
    }).catch(() => {
      resolve(result)
    })
  })
}

export default loadLyrixiLanguage
`},84593:function(o,e){e.Z=`import { isValidElement } from 'react'

// Whether has React Node
function hasNode(nodes) {
  if (Array.isArray(nodes) && nodes.length) {
    for (let node of nodes) {
      if (isValidElement(node)) return true
    }
    return false
  }
  return isValidElement(nodes)
}

export default hasNode
`},3460:function(o,e){e.Z=`import React from 'react'
import hasNode from './hasNode'
import splitValue from './splitValue'

// values ['text', 'variable:0'], variables [1000], replace variable to text1000
function valuesToText(values, variables) {
  return values.map((value) => {
    // Replace variable
    if (value.startsWith('variable:')) {
      let variableName = value.replace('variable:', '')
      let newValue = variables?.[variableName]
      if (typeof newValue === 'number' || typeof newValue === 'boolean') {
        newValue = String(newValue)
      }
      return newValue || ''
    }

    // \u5982\u679C\u4E0D\u662Fvariable, \u76F4\u63A5\u8FD4\u56DE
    return value
  })
}

/**
 * \u56FD\u9645\u5316\u51FD\u6570
 * @param {String} remark '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875'
 * @param {String} key resources\u4E2D\u7684key
 * @param {Array} variables {0: <div><div>}
 * @return {Node} \u8FD4\u56DEreact node
 */
function locale(remark, key, variables) {
  // Get key's value
  let localeData = window.lyrixiLocaleData || {}
  let value = key && typeof key === 'string' ? localeData[key || ''] : ''
  if (!value && typeof remark === 'string') {
    value = remark
  }

  // If no key's value, return the original remark
  if (!value) {
    return remark
  }

  // Split value('text{0}') to ['text', 'variable:0']
  let values = splitValue(value)

  // No node, return string
  if (!hasNode(variables)) {
    return valuesToText(values, variables).join('')
  }

  // Has node, return node
  return <>{valuesToText(values, variables)}</>
}

export default locale
`},89866:function(o,e){e.Z=`/**
 * Split value by variable: {0}{1}...
 * @param {String} value '\u5171\u6709{0}\u4E2A\u5546\u54C1, \u5171\u67E5\u5230{1}\u9875, \u6BCF\u9875{0}\u4E2A\u5546\u54C1'
 * @return {String} ['\u5171\u6709', 'variable:0', '\u4E2A\u5546\u54C1, \u5171\u67E5\u5230', 'variable:1', '\u9875, \u6BCF\u9875', 'variable:0', '\u4E2A\u5546\u54C1']
 */
function splitValue(value) {
  // \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u6240\u6709\u7684 {\u5B57\u6BCD\u6570\u503C}\uFF0C\u5E76\u5C06\u5176\u66FF\u6362\u4E3A variable:\u5B57\u6BCD\u6570\u503C
  const result = value.split(/{(\\d+)}/).map((part, index) => {
    if (index % 2 === 1) {
      // \u5982\u679C\u662F\u5360\u4F4D\u7B26\u90E8\u5206\uFF0C\u683C\u5F0F\u5316\u4E3A 'variable:\u5B57\u6BCD\u6570\u503C'
      return \`variable:\${part}\`
    }
    // \u5982\u679C\u662F\u666E\u901A\u6587\u672C\u90E8\u5206\uFF0C\u4FDD\u6301\u539F\u6837
    return part
  })
  return result
}

export default splitValue
`},9446:function(o,e){e.Z=`// \u8BBE\u7F6Elyrixi\u56FD\u9645\u5316\u8BED\u8A00\u4E0E\u6570\u636E
async function setLocale(
  language,
  data
) {
  window.lyrixiLocaleLanguage = language
  window.lyrixiLocaleData = data
}

export default setLocale
`},82033:function(o,e){e.Z=`import React from 'react'
import { Logger, Page, Button, Input, Card, Divider, Form } from 'lyrixi-mobile'
import upload from './upload'

export default () => {
  return (
    <Page>
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
`},37182:function(o,e){e.Z=`import { Device, Request, DateUtil } from 'lyrixi-mobile'

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
`},43936:function(o,e){e.Z=`import React from 'react'
import vconsole from 'vconsole'

import { MathUtil } from 'lyrixi-mobile'

// \u5185\u5E93// \u5185\u5E93\u4F7F\u7528-start
import Page from './../../../components/Page'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { Page } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

new vconsole()

export default () => {
  return (
    <Page>
      <Page.Main>
        <h2>\u7EC4\u4EF6</h2>
        <p className="demo-title">\u8BA1\u7B97</p>
        {MathUtil.strip(0.1 * 0.2)}
      </Page.Main>
    </Page>
  )
}
`},93308:function(o,e){e.Z=`import React from 'react'
import vconsole from 'vconsole'

import { ObjectUtil, Divider, Page } from 'lyrixi-mobile'

new vconsole()

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>ObjectUtil</Divider>
        {ObjectUtil.isEmpty({}) ? '{} is empty' : '{} is not empty'}
        {ObjectUtil.isEmpty(new Date()) ? 'new date is empty' : 'new date is not empty'}
      </Page.Main>
    </Page>
  )
}
`},58087:function(o,e){e.Z=`import React from 'react'
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
`},64981:function(o,e){e.Z=`import React from 'react'
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
`},36239:function(o,e){e.Z=`import React, { useState } from 'react'
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
    <Page>
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
`},50233:function(o,e){e.Z=`import React, { useState } from 'react'
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
    <Page>
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
`},9300:function(o,e){e.Z=`import React, { useState } from 'react'
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
    <Page>
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
`},56626:function(o,e){e.Z=`import React from 'react'
import { Storage, Page, Button } from 'lyrixi-mobile'

export default () => {
  const [data, setData] = Storage.useCacheState(null, {
    name: 'cache-state-pageName-futureName',
    persist: true
  })
  return (
    <Page>
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

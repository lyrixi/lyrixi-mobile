(self.webpackChunklyrixi_mobile=self.webpackChunklyrixi_mobile||[]).push([[9529],{41570:function(o,e,n){"use strict";n.r(e);var r=n(59926);function y(a){var h=a.date,i=a.content;return new Promise(function(s){var u,d,p,f,g=r.DateUtil.format(h,"YYYYMMDD"),l=((u=window.loginUser)===null||u===void 0?void 0:u.name)||"unknown",c=((d=window.loginUser)===null||d===void 0?void 0:d.id)||"unknown",v=r.Device.platform||"unknown",t="".concat(g,"_").concat(v,"_").concat(l,"_").concat(c,".txt"),x=["UserAgent: ".concat(navigator.userAgent||""),"TenantId: ".concat(((p=window.loginUser)===null||p===void 0?void 0:p.tenantId)||""),"UserId: ".concat(((f=window.loginUser)===null||f===void 0?void 0:f.id)||""),"Date: ".concat(g),i].join(`
`);r.Request.post("/fileupload/v1/uploadTextToLogCenter.do",{fileName:t,fileContent:x}).then(function(m){m.code==="1"?s(!0):s(!1)}).catch(function(m){console.error("\u65E5\u5FD7\u4E0A\u4F20\u5931\u8D25:",m),s(!1)})})}e.default=y},74130:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-array-util-demo-arrayutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,49247))})),asset:{type:"BLOCK",id:"src-utils-array-util-demo-arrayutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(72025).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},91866:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return f}});var y=n(38416),a=n.n(y),h=n(17061),i=n.n(h),s=n(17156),u=n.n(s),d=n(67294),p=n(59926),f=a()({"src-utils-asset-util-demo-assetutil":{component:d.memo(d.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,10807))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-assetutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58908).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(d,2)),"lyrixi-mobile":p},renderOpts:{compile:function(){var g=u()(i()().mark(function c(){var v,t=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}}},"src-utils-asset-util-demo-assetutil",{component:d.memo(d.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,10807))})),asset:{type:"BLOCK",id:"src-utils-asset-util-demo-assetutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58908).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(d,2)),"lyrixi-mobile":p},renderOpts:{compile:function(){var g=u()(i()().mark(function c(){var v,t=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}})},83131:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return f}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(71415),d=n.n(u),p=n(59926),f={"src-utils-bridge-demo-bridge1":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,46027))})),asset:{type:"BLOCK",id:"src-utils-bridge-demo-bridge1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(89479).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),vconsole:u,"lyrixi-mobile":p},renderOpts:{compile:function(){var g=i()(a()().mark(function c(){var v,t=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}}}},7858:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-clipboard-demo-clipboard":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,55063))})),asset:{type:"BLOCK",id:"src-utils-clipboard-demo-clipboard",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(69974).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},87045:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-dom-util-demo-domutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,45655))})),asset:{type:"BLOCK",id:"src-utils-dom-util-demo-domutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(54187).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},2156:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-date-util-demo-dateutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,98716))})),asset:{type:"BLOCK",id:"src-utils-date-util-demo-dateutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(48196).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},41968:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-debugger-demo-debugger":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,80981))})),asset:{type:"BLOCK",id:"src-utils-debugger-demo-debugger",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(97903).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},23188:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-device-demo-device":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,4573))})),asset:{type:"BLOCK",id:"src-utils-device-demo-device",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(5814).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},35410:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-event-util-demo-eventutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,63481))})),asset:{type:"BLOCK",id:"src-utils-event-util-demo-eventutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(38056).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},32160:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-full-screen-demo-fullscreen":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,67422))})),asset:{type:"BLOCK",id:"src-utils-full-screen-demo-fullscreen",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(32862).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},42531:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-geo-util-demo-geoutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,52059))})),asset:{type:"BLOCK",id:"src-utils-geo-util-demo-geoutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(89806).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},46101:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return l}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d=n(27484),p=n.n(d),f=n(33852),g=n.n(f),l={"src-utils-locale-util-demo-localeutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,15581))})),asset:{type:"BLOCK",id:"src-utils-locale-util-demo-localeutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(60596).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u,dayjs:d,"dayjs/locale/zh-cn":f},renderOpts:{compile:function(){var c=i()(a()().mark(function t(){var x,m=arguments;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,n.e(250).then(n.bind(n,90250));case 2:return E.abrupt("return",(x=E.sent).default.apply(x,m));case 3:case"end":return E.stop()}},t)}));function v(){return c.apply(this,arguments)}return v}()}}}},83636:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return p}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d=n(41570),p={"src-utils-logger-demo-logger1":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,14246))})),asset:{type:"BLOCK",id:"src-utils-logger-demo-logger1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(13797).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"},"./upload.js":{type:"FILE",value:n(37182).Z}},entry:"index.jsx",title:">"},context:{"./upload.js":d,react:r||(r=n.t(s,2)),"lyrixi-mobile":u,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Logger/demos/upload.js":d},renderOpts:{compile:function(){var f=i()(a()().mark(function l(){var c,v=arguments;return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,n.e(250).then(n.bind(n,90250));case 2:return x.abrupt("return",(c=x.sent).default.apply(c,v));case 3:case"end":return x.stop()}},l)}));function g(){return f.apply(this,arguments)}return g}()}}}},22158:function(o,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return On}});var r={};n.r(r),n.d(r,{Axios:function(){return dn},AxiosError:function(){return cn},AxiosHeaders:function(){return Mn},Cancel:function(){return hn},CancelToken:function(){return pn},CanceledError:function(){return gn},HttpStatusCode:function(){return Cn},VERSION:function(){return yn},all:function(){return vn},default:function(){return D.Z},formToJSON:function(){return Ln},getAdapter:function(){return Pn},isAxiosError:function(){return xn},isCancel:function(){return fn},mergeConfig:function(){return Un},spread:function(){return Dn},toFormData:function(){return En}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n.t(s,2),d=n(71415),p=n(59926),f=n(21666),g=n(77581),l=n(87888),c=n(36204),v=n(80114),t=n(64392),x=n(65730),m=n(76493),C=n(49443),E=n(70381),L=n(7561),P=n(80453),U=n(1017),O=n(57374),R=n(81565),j=n(5098),S=n(76903),I=n(35887),b=n(38923),A=n(38043),T=n(68612),B=n(66205),N=n(6675),F=n(77720),z=n(81308),K=n(26867),Z=n(41165),W=n(79764),Y=n(4305),J=n(98397),$=n(29768),H=n(94311),w=n(12251),V=n(25746),G=n(592),Q=n(78513),X=n(53527),_=n(5538),k=n(10440),q=n(75775),nn=n(93269),en=n(35414),tn=n(54749),on=n(53443),rn=n(71332),sn=n(44918),an=n(68672),ln=n(3371),D=n(54683),dn=D.Z.Axios,cn=D.Z.AxiosError,gn=D.Z.CanceledError,fn=D.Z.isCancel,pn=D.Z.CancelToken,yn=D.Z.VERSION,vn=D.Z.all,hn=D.Z.Cancel,xn=D.Z.isAxiosError,Dn=D.Z.spread,En=D.Z.toFormData,Mn=D.Z.AxiosHeaders,Cn=D.Z.HttpStatusCode,Ln=D.Z.formToJSON,Pn=D.Z.getAdapter,Un=D.Z.mergeConfig,un=n(38379),On={"src-utils-math-util-demo-mathutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,31912))})),asset:{type:"BLOCK",id:"src-utils-math-util-demo-mathutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(43936).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"},"./../../../components/Page.js":{type:"FILE",value:n(65332).Z},"./Footer.jsx":{type:"FILE",value:n(14615).Z},"./Aside.jsx":{type:"FILE",value:n(28242).Z},"./Page.jsx":{type:"FILE",value:n(24467).Z},"./Main.jsx":{type:"FILE",value:n(56324).Z},"./Header.jsx":{type:"FILE",value:n(26110).Z},"./../../SafeArea.js":{type:"FILE",value:n(51389).Z},"./../../../utils/DOMUtil.js":{type:"FILE",value:n(64575).Z},"./SafeArea.jsx":{type:"FILE",value:n(83303).Z},"./preventDefault.js":{type:"FILE",value:n(61242).Z},"./getEventPosition.js":{type:"FILE",value:n(44148).Z},"./classNames.js":{type:"FILE",value:n(91111).Z},"./variables.js":{type:"FILE",value:n(16437).Z},"./../../../utils/LocaleUtil.js":{type:"FILE",value:n(51118).Z},"./TopContainer.jsx":{type:"FILE",value:n(20393).Z},"./../../../utils/Device.js":{type:"FILE",value:n(9658).Z},"./utils/isBottom.js":{type:"FILE",value:n(96499).Z},"./utils/topRefreshOk.js":{type:"FILE",value:n(47409).Z},"./Device.js":{type:"FILE",value:n(79162).Z},"./loadLocale.js":{type:"FILE",value:n(27340).Z},"./getLanguage.js":{type:"FILE",value:n(62430).Z},"./languageMap.js":{type:"FILE",value:n(95601).Z},"./setLocale.js":{type:"FILE",value:n(9446).Z},"./locale.js":{type:"FILE",value:n(8624).Z},"./getKernel.js":{type:"FILE",value:n(60069).Z},"./getDevice.js":{type:"FILE",value:n(97699).Z},"./getScreenSize.js":{type:"FILE",value:n(69563).Z},"./splitValue.js":{type:"FILE",value:n(89866).Z},"./getOS.js":{type:"FILE",value:n(55405).Z},"./getUrlParameter.js":{type:"FILE",value:n(42222).Z},"./hasNode.js":{type:"FILE",value:n(84593).Z},"./getModel.js":{type:"FILE",value:n(17611).Z},"./compareVersion.js":{type:"FILE",value:n(438).Z},"./getPlatform.js":{type:"FILE",value:n(35606).Z},"./loadRemoteJsonFiles.js":{type:"FILE",value:n(97144).Z},"./loadRemoteJsFiles.js":{type:"FILE",value:n(77869).Z},"./loadLocalJsFiles.js":{type:"FILE",value:n(57470).Z},"./loadDayjsLanguage.js":{type:"FILE",value:n(33141).Z},"./loadLyrixiLanguage.js":{type:"FILE",value:n(98750).Z},"./loadLocalJsonFiles.js":{type:"FILE",value:n(36583).Z},"./../../../utils/AssetUtil.js":{type:"FILE",value:n(56354).Z},"./getFileExtension.js":{type:"FILE",value:n(77041).Z},"./loadRemoteJs.js":{type:"FILE",value:n(94226).Z},"./accessImage.js":{type:"FILE",value:n(22542).Z},"./loadLocalJs.js":{type:"FILE",value:n(9597).Z},"./loadLocalJson.js":{type:"FILE",value:n(30577).Z},"./loadImage.js":{type:"FILE",value:n(35310).Z},"./loadRemoteJson.js":{type:"FILE",value:n(73385).Z},axios:{type:"NPM",value:"1.11.0"},"./loadscript.js":{type:"FILE",value:n(78151).Z}},entry:"index.jsx",title:">"},context:{"./../../../components/Page.js":f,"./Footer.jsx":g,"./Aside.jsx":l,"./Page.jsx":c,"./Main.jsx":v,"./Header.jsx":t,"./../../SafeArea.js":x,"./../../../utils/DOMUtil.js":m,"./SafeArea.jsx":C,"./preventDefault.js":E,"./getEventPosition.js":L,"./classNames.js":P,"./variables.js":U,"./../../../utils/LocaleUtil.js":O,"./TopContainer.jsx":R,"./../../../utils/Device.js":j,"./utils/isBottom.js":S,"./utils/topRefreshOk.js":I,"./Device.js":b,"./loadLocale.js":A,"./getLanguage.js":T,"./languageMap.js":B,"./setLocale.js":N,"./locale.js":F,"./getKernel.js":z,"./getDevice.js":K,"./getScreenSize.js":Z,"./splitValue.js":W,"./getOS.js":Y,"./getUrlParameter.js":J,"./hasNode.js":$,"./getModel.js":H,"./compareVersion.js":w,"./getPlatform.js":V,"./loadRemoteJsonFiles.js":G,"./loadRemoteJsFiles.js":Q,"./loadLocalJsFiles.js":X,"./loadDayjsLanguage.js":_,"./loadLyrixiLanguage.js":k,"./loadLocalJsonFiles.js":q,"./../../../utils/AssetUtil.js":nn,"./getFileExtension.js":en,"./loadRemoteJs.js":tn,"./accessImage.js":on,"./loadLocalJs.js":rn,"./loadLocalJson.js":sn,"./loadImage.js":an,"./loadRemoteJson.js":ln,"./loadscript.js":un,react:u,vconsole:d,"lyrixi-mobile":p,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/index.js":f,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Footer/index.jsx":g,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Aside/index.jsx":l,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Page/index.jsx":c,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/index.jsx":v,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Header/index.jsx":t,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/SafeArea/index.js":x,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/index.js":m,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/SafeArea/SafeArea.jsx":C,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/preventDefault.js":E,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/getEventPosition.js":L,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/classNames.js":P,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/DOMUtil/variables.js":U,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/index.js":O,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/TopContainer.jsx":R,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/index.js":j,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/utils/isBottom.js":S,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/components/Page/Main/utils/topRefreshOk.js":I,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/Device.js":b,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/index.js":A,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/getLanguage/index.js":T,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/languageMap.js":B,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/setLocale/index.js":N,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/index.js":F,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getKernel.js":z,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getDevice.js":K,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getScreenSize.js":Z,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/splitValue.js":W,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getOS.js":Y,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getUrlParameter.js":J,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/locale/hasNode.js":$,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getModel.js":H,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/compareVersion.js":w,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/Device/getPlatform.js":V,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadRemoteJsonFiles.js":G,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadRemoteJsFiles.js":Q,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadLocalJsFiles.js":X,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadDayjsLanguage.js":_,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadLyrixiLanguage.js":k,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/LocaleUtil/loadLocale/loadLocalJsonFiles.js":q,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/index.js":nn,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/getFileExtension.js":en,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadRemoteJs/index.js":tn,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/accessImage.js":on,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadLocalJs.js":rn,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadLocalJson.js":sn,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadImage/index.js":an,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadRemoteJson.js":ln,axios:r,"/Users/wangmingzhu/Documents/front/lyrixi-mobile/src/utils/AssetUtil/loadRemoteJs/loadscript.js":un},renderOpts:{compile:function(){var Rn=i()(a()().mark(function Sn(){var mn,In=arguments;return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,n.e(250).then(n.bind(n,90250));case 2:return M.abrupt("return",(mn=M.sent).default.apply(mn,In));case 3:case"end":return M.stop()}},Sn)}));function jn(){return Rn.apply(this,arguments)}return jn}()}}}},19524:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return f}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(71415),d=n.n(u),p=n(59926),f={"src-utils-object-util-demo-objectutil":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,91852))})),asset:{type:"BLOCK",id:"src-utils-object-util-demo-objectutil",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(93308).Z},react:{type:"NPM",value:"19.1.1"},vconsole:{type:"NPM",value:"3.15.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),vconsole:u,"lyrixi-mobile":p},renderOpts:{compile:function(){var g=i()(a()().mark(function c(){var v,t=arguments;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}}}},11693:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return f}});var y=n(38416),a=n.n(y),h=n(17061),i=n.n(h),s=n(17156),u=n.n(s),d=n(67294),p=n(59926),f=a()({"src-utils-request-demo-request":{component:d.memo(d.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,17346))})),asset:{type:"BLOCK",id:"src-utils-request-demo-request",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58087).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(d,2)),"lyrixi-mobile":p},renderOpts:{compile:function(){var g=u()(i()().mark(function c(){var v,t=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}}},"src-utils-request-demo-request",{component:d.memo(d.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,17346))})),asset:{type:"BLOCK",id:"src-utils-request-demo-request",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(58087).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(d,2)),"lyrixi-mobile":p},renderOpts:{compile:function(){var g=u()(i()().mark(function c(){var v,t=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(250).then(n.bind(n,90250));case 2:return m.abrupt("return",(v=m.sent).default.apply(v,t));case 3:case"end":return m.stop()}},c)}));function l(){return g.apply(this,arguments)}return l}()}})},27388:function(o,e,n){"use strict";var r;n.r(e),n.d(e,{demos:function(){return d}});var y=n(17061),a=n.n(y),h=n(17156),i=n.n(h),s=n(67294),u=n(59926),d={"src-utils-storage-demo-storage1":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,53516))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-storage1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(63330).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}},"src-utils-storage-demo-localstorage":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,40900))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-localstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(50233).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}},"src-utils-storage-demo-sessionstorage":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,21926))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-sessionstorage",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(9300).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}},"src-utils-storage-demo-usecachestate":{component:s.memo(s.lazy(function(){return Promise.all([n.e(1415),n.e(1131),n.e(2433)]).then(n.bind(n,79014))})),asset:{type:"BLOCK",id:"src-utils-storage-demo-usecachestate",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(56626).Z},react:{type:"NPM",value:"19.1.1"},"lyrixi-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx",title:">"},context:{react:r||(r=n.t(s,2)),"lyrixi-mobile":u},renderOpts:{compile:function(){var p=i()(a()().mark(function g(){var l,c=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,c));case 3:case"end":return t.stop()}},g)}));function f(){return p.apply(this,arguments)}return f}()}}}},33852:function(o,e,n){(function(r,y){o.exports=y(n(27484))})(this,function(r){"use strict";function y(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=y(r),h={name:"zh-cn",weekdays:"\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),weekdaysShort:"\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),weekdaysMin:"\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),months:"\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(i,s){return s==="W"?i+"\u5468":i+"\u65E5"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",LLLL:"YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524D",s:"\u51E0\u79D2",m:"1 \u5206\u949F",mm:"%d \u5206\u949F",h:"1 \u5C0F\u65F6",hh:"%d \u5C0F\u65F6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4E2A\u6708",MM:"%d \u4E2A\u6708",y:"1 \u5E74",yy:"%d \u5E74"},meridiem:function(i,s){var u=100*i+s;return u<600?"\u51CC\u6668":u<900?"\u65E9\u4E0A":u<1100?"\u4E0A\u5348":u<1300?"\u4E2D\u5348":u<1800?"\u4E0B\u5348":"\u665A\u4E0A"}};return a.default.locale(h,null,!0),h})},81380:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},76319:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},1568:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},97246:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},27725:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},73775:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},56974:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},74653:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},31217:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},6684:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},70013:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868",paraId:0,tocIndex:1},{value:"LocaleUtil.setLocale(language, data)\u8BBE\u7F6E\u8BED\u8A00, \u8BBE\u7F6E\u540E, \u4E24\u4E2A\u53D8\u91CF\u5C06\u6709\u503C: window.lyrixiLocaleLanguage \u6807\u8BC6\u8BED\u8A00, window.lyrixiLocales \u8BB0\u5F55\u56FD\u9645\u5316\u6570\u636E",paraId:1,tocIndex:2},{value:"LocaleUtil.setLocale \u540E, LocaleUtil.locale \u9ED8\u8BA4\u8BFB\u53D6 window.lyrixiLocales \u5BF9\u8C61",paraId:2,tocIndex:3},{value:`import React from 'react'
import { LocaleUtil } from 'lyrixi-mobile'

// \u5176\u4E2Dkey\u7684\u503C\u4E3A: \u534A\u5F84{0}\u7C73
LocaleUtil.locale('\u534A\u5F841000\u7C73', 'key', [1000]) // => \u534A\u5F841000\u7C73
`,paraId:3,tocIndex:3},{value:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u4FEE\u6539window.lyrixiLocales\u4FEE\u6539\u56FD\u9645\u5316\u6570\u636E",paraId:4,tocIndex:3},{value:`\u76EE\u5F55: src/utils/LocaleUtil/resources/*.json
\u6587\u4EF6:`,paraId:5,tocIndex:4},{value:"en_US",paraId:6,tocIndex:4},{value:"zh_CN",paraId:6,tocIndex:4},{value:"zh_HK",paraId:6,tocIndex:4},{value:"vi_VN",paraId:6,tocIndex:4}]},56597:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},63040:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},42472:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},89159:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},97666:function(o,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return r}});const r=[]},28242:function(o,e){"use strict";e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

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
`},14615:function(o,e){"use strict";e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

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
`},26110:function(o,e){"use strict";e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

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
`},20393:function(o,e){"use strict";e.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
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
          {LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi.pull.down.refresh')}
        </div>
      </div>
    </div>
  )
})

export default TopContainer
`},56324:function(o,e){"use strict";e.Z=`import React, { forwardRef, useRef, useImperativeHandle } from 'react'
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
        if (topText) topText.innerHTML = LocaleUtil.locale('\u91CA\u653E\u7ACB\u5373\u5237\u65B0', 'lyrixi.release.refresh')
      } else {
        if (topIcon) topIcon.classList.remove('lyrixi-page-main-pull-push-icon-down')
        if (topText)
          topText.innerHTML = LocaleUtil.locale('\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0', 'lyrixi.pull.down.refresh')
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
        if (topText) topText.innerHTML = \`\${LocaleUtil.locale('\u52A0\u8F7D\u4E2D', 'lyrixi.refreshing')}...\`

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
`},96499:function(o,e){"use strict";e.Z=`// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5728\u5E95\u90E8
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
`},47409:function(o,e){"use strict";e.Z=`// \u5185\u5E93\u4F7F\u7528-start
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
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u5931\u8D25', 'lyrixi.refresh.failed')
    }
    // \u81EA\u5B9A\u4E49\u63D0\u793A\u4FE1\u606F
    else if (typeof isOk === 'string') {
      finishMsg = isOk
    }
    // \u6210\u529F
    else {
      finishMsg = LocaleUtil.locale('\u5237\u65B0\u6210\u529F', 'lyrixi.refresh.success')
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
`},24467:function(o,e){"use strict";e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

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
`},65332:function(o,e){"use strict";e.Z=`import Page from './Page'

import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

Page.Header = Header
Page.Aside = Aside
Page.Main = Main
Page.Footer = Footer

export default Page
`},83303:function(o,e){"use strict";e.Z=`import React, { useImperativeHandle, forwardRef, useRef } from 'react'

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
`},51389:function(o,e){"use strict";e.Z=`import SafeArea from './SafeArea'

SafeArea.debug = () => {
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-top', '44px')
  document.documentElement.style.setProperty('--lyrixi-safe-area-inset-bottom', '34px')
}

export default SafeArea
`},72025:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},22542:function(o,e){"use strict";e.Z=`// \u6821\u9A8C\u7167\u7247\u662F\u5426\u5B58\u5728
function accessImageSrc(src) {
  return new Promise((resolve) => {
    let img = new Image()
    img.src = src
    img.onload = function () {
      resolve(true)
    }
    img.onerror = function () {
      resolve(false)
    }
  })
}

export default accessImageSrc
`},58908:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},77041:function(o,e){"use strict";e.Z=`// \u83B7\u53D6\u6587\u4EF6\u6269\u5C55\u540D
function getFileExtension(src) {
  if (typeof src !== 'string') {
    return ''
  }
  // \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u63D0\u53D6\u6587\u4EF6\u6269\u5C55\u540D
  const match = src.match(/\\.([a-zA-Z0-9]+)(?:\\?.*)?$/)
  return match ? match[1] : null
}

export default getFileExtension
`},56354:function(o,e){"use strict";e.Z=`import getFileExtension from './getFileExtension'
import loadRemoteJs from './loadRemoteJs'
import loadRemoteJson from './loadRemoteJson'
import loadLocalJs from './loadLocalJs'
import loadLocalJson from './loadLocalJson'
import loadImage from './loadImage'
import accessImage from './accessImage'

const AssetUtil = {
  getFileExtension,
  loadRemoteJs,
  loadRemoteJson,
  loadLocalJs,
  loadLocalJson,
  loadImage,
  accessImage
}

export default AssetUtil
`},35310:function(o,e){"use strict";e.Z=`// \u52A8\u6001\u52A0\u8F7Dscript\u7684\u65B9\u6CD5
function loadImage(src, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    let img = new Image()
    img.src = src
    img.onload = function () {
      let result = {
        status: 'success',
        img: img,
        message: ''
      }
      resolve(result)
      // \u652F\u6301\u65B0\u7684 onSuccess
      onSuccess && onSuccess(result)
    }
    img.onerror = function () {
      let result = {
        status: 'error',
        img: img,
        message: 'Load image failed'
      }
      resolve(result)
      // \u652F\u6301\u65B0\u7684 onError
      onError && onError(result)
    }
  })
}

export default loadImage
`},9597:function(o,e){"use strict";e.Z=`// \u52A0\u8F7D\u672C\u5730js\u6587\u4EF6
async function loadLocalJs(localFile, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    // \u8FD9\u662F\u6709\u610F\u7684\u8FD0\u884C\u65F6\u52A8\u6001\u5BFC\u5165,\u4E0D\u8981\u5C1D\u8BD5\u5728\u6784\u5EFA\u65F6\u5904\u7406\u8FD9\u4E2A\u5BFC\u5165,\u5FFD\u7565\u8BE5\u8B66\u544A
    import(localFile)
      .then(() => {
        let result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
        resolve(result)
        onSuccess?.(result)
      })
      .catch(() => {
        let error = {
          status: 'error',
          message: 'Local js file loaded failed'
        }
        resolve(error)
        onError?.(error)
      })
  })
}

export default loadLocalJs
`},30577:function(o,e){"use strict";e.Z=`// \u52A0\u8F7D\u672C\u5730json\u6587\u4EF6
async function loadLocalJson(localFile, { onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    // \u8FD9\u662F\u6709\u610F\u7684\u8FD0\u884C\u65F6\u52A8\u6001\u5BFC\u5165,\u4E0D\u8981\u5C1D\u8BD5\u5728\u6784\u5EFA\u65F6\u5904\u7406\u8FD9\u4E2A\u5BFC\u5165,\u5FFD\u7565\u8BE5\u8B66\u544A
    import(localFile)
      .then(() => {
        let result = {
          status: 'success',
          message: 'Local js file loaded successfully'
        }
        resolve(result)
        onSuccess?.(result)
      })
      .catch(() => {
        let error = {
          status: 'error',
          message: 'Local js file loaded failed'
        }
        resolve(error)
        onError?.(error)
      })
  })
}

export default loadLocalJson
`},94226:function(o,e){"use strict";e.Z=`// \u52A8\u6001\u52A0\u8F7Dscript\u7684\u65B9\u6CD5
function loadRemoteJs(
  src,
  {
    async,
    charset,
    text,
    type,
    // \u52A8\u6001\u5C5E\u6027
    id,
    defer,
    crossorigin,
    integrity,
    referrerPolicy,
    onError,
    onSuccess
  } = {}
) {
  let attrs = {}
  if (id) attrs.id = id
  if (defer) attrs.defer = defer
  if (crossorigin) attrs.crossorigin = crossorigin
  if (integrity) attrs.integrity = integrity
  if (referrerPolicy) attrs.referrerPolicy = referrerPolicy

  return new Promise((resolve) => {
    const loadScript = require('./loadscript.js')
    loadScript(src, {
      async: async,
      charset: charset,
      text: text,
      type: type,
      attrs: attrs,
      onError: (result) => {
        resolve(result)
        // \u652F\u6301\u65B0\u7684 onError
        onError?.(result)
      },
      onSuccess: (result) => {
        resolve(result)
        // \u652F\u6301\u65B0\u7684 onSuccess
        onSuccess?.(result)
      }
    })
  })
}

export default loadRemoteJs
`},78151:function(o,e){"use strict";e.Z=`// https://github.com/eldargab/load-script
module.exports = function load(src, { type, async, text, attrs, onError, onSuccess } = {}) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let script = document.createElement('script')

  script.type = type || 'text/javascript'
  script.async = async
  script.src = src

  if (attrs) {
    setAttributes(script, attrs)
  }

  if (text) {
    script.text = '' + text
  }

  let onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, { onError, onSuccess })

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, { onError, onSuccess })
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  // eslint-disable-next-line
  for (let attr in attrs) {
    script.setAttribute(attr, attrs[attr])
  }
}

function stdOnEnd(script, { onError, onSuccess } = {}) {
  script.onload = function () {
    this.onerror = this.onload = null
    onSuccess &&
      onSuccess({
        status: 'success',
        script: script,
        message: ''
      })
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    onError &&
      onError({
        status: 'error',
        script: script,
        message: 'Failed to load ' + this.src
      })
  }
}

// there is no way to catch loading errors in IE8
function ieOnEnd(script, { onError, onSuccess } = {}) {
  script.onreadystatechange = function () {
    if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
    this.onreadystatechange = null
    onSuccess &&
      onSuccess({
        status: 'success',
        script: script,
        message: ''
      })
  }
}
`},73385:function(o,e){"use strict";e.Z=`import axios from 'axios'

/**
 * \u52A8\u6001\u52A0\u8F7D\u8FDC\u7A0B JSON \u6587\u4EF6
 * @param {String} url - \u8FDC\u7A0B JSON \u6587\u4EF6\u7684 URL
 * @param {Object} options - \u914D\u7F6E\u9009\u9879
 * @param {Object} options.config - axios \u914D\u7F6E\uFF08\u53EF\u9009\uFF09
 * @param {Function} options.onError - \u9519\u8BEF\u56DE\u8C03\uFF08\u53EF\u9009\uFF09
 * @param {Function} options.onSuccess - \u6210\u529F\u56DE\u8C03\uFF08\u53EF\u9009\uFF09
 * @returns {Promise<{status: 'success|error', data: any, message: string}>}
 */
async function loadRemoteJson(url, { config, onError, onSuccess } = {}) {
  return new Promise((resolve) => {
    // \u53C2\u6570\u6821\u9A8C
    if (!url || typeof url !== 'string') {
      let error = {
        status: 'error',
        data: null,
        message: 'URL is required and must be a string'
      }
      resolve(error)
      onError?.(error)
      return
    }

    // \u4F7F\u7528 axios \u8BF7\u6C42\u8FDC\u7A0B JSON
    axios
      .get(url, {
        ...config,
        // \u786E\u4FDD\u8FD4\u56DE JSON \u683C\u5F0F
        responseType: 'json'
      })
      .then((response) => {
        // \u83B7\u53D6\u54CD\u5E94\u6570\u636E
        let data = response.data

        // \u5982\u679C\u6570\u636E\u662F\u5B57\u7B26\u4E32\uFF0C\u5C1D\u8BD5\u89E3\u6790\u4E3A JSON
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data)
          } catch (parseError) {
            let error = {
              status: 'error',
              data: null,
              message: \`Failed to parse JSON: \${parseError.message}\`
            }
            resolve(error)
            onError?.(error)
            return
          }
        }

        let result = {
          status: 'success',
          data: data,
          message: 'Remote JSON file loaded successfully'
        }
        resolve(result)
        onSuccess?.(result)
      })
      .catch((error) => {
        // \u5904\u7406\u5404\u79CD\u9519\u8BEF\u60C5\u51B5
        let errorMessage = 'Failed to load JSON'

        if (error.response) {
          // \u670D\u52A1\u5668\u54CD\u5E94\u4E86\u9519\u8BEF\u72B6\u6001\u7801
          errorMessage = \`Failed to load JSON: \${error.response.status} \${error.response.statusText}\`
        } else if (error.request) {
          // \u8BF7\u6C42\u5DF2\u53D1\u9001\u4F46\u6CA1\u6709\u6536\u5230\u54CD\u5E94
          errorMessage = 'Failed to load JSON: No response from server'
        } else {
          // \u8BF7\u6C42\u914D\u7F6E\u51FA\u9519
          errorMessage = \`Failed to load JSON: \${error.message || 'Network error'}\`
        }

        let errorResult = {
          status: 'error',
          data: null,
          message: errorMessage
        }
        resolve(errorResult)
        onError?.(errorResult)
      })
  })
}

export default loadRemoteJson
`},89479:function(o,e){"use strict";e.Z=`import React, { useRef } from 'react'
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
`},69974:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},91111:function(o,e){"use strict";e.Z=`const hasOwn = {}.hasOwnProperty

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
`},54187:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},44148:function(o,e){"use strict";e.Z=`/**
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
`},64575:function(o,e){"use strict";e.Z=`import preventDefault from './preventDefault'
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
`},61242:function(o,e){"use strict";e.Z=`function preventDefault(e) {
  e.preventDefault()
}

export default preventDefault
`},16437:function(o,e){"use strict";e.Z=`// \u7EC4\u4EF6\u6807\u51C6\u53D8\u91CF\u679A\u4E3E\u503C\uFF0C\u4E0Eless\u4E2D\u7684\u679A\u4E3E\u503C\u4E00\u81F4

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
  'success-lighten'
]

// \u5C3A\u5BF8\u679A\u4E3E\u503C(\u4E1A\u52A1\u81EA\u884C\u63A7\u5236)
const sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']

// \u5BFC\u51FA\u989C\u8272\u679A\u4E3E\u503C
export default { colors, sizes }
`},48196:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},97903:function(o,e){"use strict";e.Z=`import React, { useEffect } from 'react'
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
`},79162:function(o,e){"use strict";e.Z=`import getKernel from './getKernel'
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
    return (window.navigator.browserLanguage || window.navigator.language).toLowerCase()
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
`},438:function(o,e){"use strict";e.Z=`/**
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

`},5814:function(o,e){"use strict";e.Z=`import React from 'react'

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
`},97699:function(o,e){"use strict";e.Z=`function getDevice() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/applewebkit.*mobile.*/)) {
    return 'mobile'
  }
  return 'pc'
}

export default getDevice

`},60069:function(o,e){"use strict";e.Z=`function getKernel() {
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

`},17611:function(o,e){"use strict";e.Z=`function getModel() {
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

`},55405:function(o,e){"use strict";e.Z=`/**
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

`},35606:function(o,e){"use strict";e.Z=`/**
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
`},69563:function(o,e){"use strict";e.Z=`function getScreenWidth() {
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

`},42222:function(o,e){"use strict";e.Z=`function getUrlParameter(argName, argSearch) {
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

`},9658:function(o,e){"use strict";e.Z=`import Device from './Device.js'

export default Device
`},38056:function(o,e){"use strict";e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},32862:function(o,e){"use strict";e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},89806:function(o,e){"use strict";e.Z=`import React from 'react'

import { Page, GeoUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>\u5B9A\u4F4D</Page.Main>
    </Page>
  )
}
`},60596:function(o,e){"use strict";e.Z=`import React from 'react'

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
    <Page>
      <Page.Main>
        <Divider>Node</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale('\u8FD17\u65E5', 'lyrixi.last.days', [
            <span key={'0'} style={{ color: 'red' }}>
              7
            </span>
          ])}
        </Card>

        <Divider>String</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          <div>variable:</div>
          {LocaleUtil.locale('\u8FD1x\u65E5', 'lyrixi.last.days', ['7'])}
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
`},62430:function(o,e){"use strict";e.Z=`// \u83B7\u53D6\u5F53\u524D\u8BED\u8A00
function getLanguage() {
  return (
    window.lyrixiLocaleLanguage ||
    navigator.userAgent.match(/lyrixiLanguage\\/([\\w.]*)/)?.[1] ||
    'zh_CN'
  )
}

export default getLanguage
`},51118:function(o,e){"use strict";e.Z=`import languageMap from './languageMap'
import loadLocale from './loadLocale'
import locale from './locale'
import setLocale from './setLocale'
import getLanguage from './getLanguage'

const LocaleUtil = {
  locale: locale,
  loadLocale: loadLocale,
  setLocale: setLocale,
  getLanguage: getLanguage,
  getLanguageMap: (language) => {
    if (language) {
      return languageMap?.[language] || null
    }
    return languageMap
  }
}

export default LocaleUtil
`},95601:function(o,e){"use strict";e.Z=`// United language list
// https://ant.design/docs/react/i18n-cn
// dayjs: https://github.com/iamkun/dayjs/tree/dev/src/locale
const languageMap = {
  // \u963F\u62C9\u4F2F\u8BED
  ar_EG: { dayjs: 'ar', translate: { google: 'ar', bing: 'ar' } },
  // \u963F\u585E\u62DC\u7586\u8BED
  az_AZ: { dayjs: 'az', translate: { google: 'az', bing: 'az' } },
  // \u4FDD\u52A0\u5229\u4E9A\u8BED
  bg_BG: { dayjs: 'bg', translate: { google: 'bg', bing: 'bg' } },
  // \u5B5F\u52A0\u62C9\u8BED\uFF08\u5B5F\u52A0\u62C9\u56FD\uFF09
  bn_BD: { dayjs: 'bn', translate: { google: 'bn', bing: 'bn' } },
  // \u767D\u4FC4\u7F57\u65AF\u8BED
  by_BY: { dayjs: 'by', translate: { google: 'by', bing: 'by' } },
  // \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED
  ca_ES: { dayjs: 'ca', translate: { google: 'ca', bing: 'ca' } },
  // \u6377\u514B\u8BED
  cs_CZ: { dayjs: 'cs', translate: { google: 'cs', bing: 'cs' } },
  // \u4E39\u9EA6\u8BED
  da_DK: { dayjs: 'da', translate: { google: 'da', bing: 'da' } },
  // \u5FB7\u8BED
  de_DE: { dayjs: 'de', translate: { google: 'de', bing: 'de' } },
  // \u5E0C\u814A\u8BED
  el_GR: { dayjs: 'el', translate: { google: 'el', bing: 'el' } },
  // \u82F1\u8BED
  en_GB: { dayjs: 'en-gb', translate: { google: 'en', bing: 'en' } },
  // \u82F1\u8BED\uFF08\u7F8E\u5F0F\uFF09
  en_US: { dayjs: 'en', translate: { google: 'en', bing: 'en' } },
  // \u897F\u73ED\u7259\u8BED
  es_ES: { dayjs: 'es', translate: { google: 'es', bing: 'es' } },
  // \u5DF4\u65AF\u514B\u8BED
  eu_ES: { dayjs: 'eu', translate: { google: 'eu', bing: 'eu' } },
  // \u7231\u6C99\u5C3C\u4E9A\u8BED
  et_EE: { dayjs: 'et', translate: { google: 'et', bing: 'et' } },
  // \u6CE2\u65AF\u8BED
  fa_IR: { dayjs: 'fa', translate: { google: 'fa', bing: 'fa' } },
  // \u82AC\u5170\u8BED
  fi_FI: { dayjs: 'fi', translate: { google: 'fi', bing: 'fi' } },
  // \u6CD5\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  fr_BE: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u52A0\u62FF\u5927\uFF09
  fr_CA: { dayjs: 'fr-ca', translate: { google: 'fr', bing: 'fr' } },
  // \u6CD5\u8BED\uFF08\u6CD5\u56FD\uFF09
  fr_FR: { dayjs: 'fr', translate: { google: 'fr', bing: 'fr' } },
  // \u7231\u5C14\u5170\u8BED
  ga_IE: { dayjs: 'ga', translate: { google: 'ga', bing: 'ga' } },
  // \u52A0\u5229\u897F\u4E9A\u8BED\uFF08\u897F\u73ED\u7259\uFF09
  gl_ES: { dayjs: 'gl', translate: { google: 'gl', bing: 'gl' } },
  // \u5E0C\u4F2F\u6765\u8BED
  he_IL: { dayjs: 'he', translate: { google: 'he', bing: 'he' } },
  // \u5370\u5730\u8BED
  hi_IN: { dayjs: 'hi', translate: { google: 'hi', bing: 'hi' } },
  // \u514B\u7F57\u5730\u4E9A\u8BED
  hr_HR: { dayjs: 'hr', translate: { google: 'hr', bing: 'hr' } },
  // \u5308\u7259\u5229\u8BED
  hu_HU: { dayjs: 'hu', translate: { google: 'hu', bing: 'hu' } },
  // \u4E9A\u7F8E\u5C3C\u4E9A
  hy_AM: { dayjs: 'hy', translate: { google: 'hy', bing: 'hy' } },
  // \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED
  id_ID: { dayjs: 'id', translate: { google: 'id', bing: 'id' } },
  // \u610F\u5927\u5229\u8BED
  it_IT: { dayjs: 'it', translate: { google: 'it', bing: 'it' } },
  // \u51B0\u5C9B\u8BED
  is_IS: { dayjs: 'is', translate: { google: 'is', bing: 'is' } },
  // \u65E5\u8BED
  ja_JP: { dayjs: 'ja', translate: { google: 'ja', bing: 'ja' } },
  // \u683C\u9C81\u5409\u4E9A\u8BED
  ka_GE: { dayjs: 'ka', translate: { google: 'ka', bing: 'ka' } },
  // \u9AD8\u68C9\u8BED
  km_KH: { dayjs: 'km', translate: { google: 'km', bing: 'km' } },
  // \u5317\u5E93\u5C14\u5FB7\u8BED
  kmr_IQ: { dayjs: 'kmr', translate: { google: 'kmr', bing: 'kmr' } },
  // \u5361\u7EB3\u8FBE\u8BED
  kn_IN: { dayjs: 'kn', translate: { google: 'kn', bing: 'kn' } },
  // \u54C8\u8428\u514B\u8BED
  kk_KZ: { dayjs: 'kk', translate: { google: 'kk', bing: 'kk' } },
  // \u97E9\u8BED/\u671D\u9C9C\u8BED
  ko_KR: { dayjs: 'ko', translate: { google: 'ko', bing: 'ko' } },
  // \u7ACB\u9676\u5B9B\u8BED
  lt_LT: { dayjs: 'lt', translate: { google: 'lt', bing: 'lt' } },
  // \u62C9\u8131\u7EF4\u4E9A\u8BED
  lv_LV: { dayjs: 'lv', translate: { google: 'lv', bing: 'lv' } },
  // \u9A6C\u5176\u987F\u8BED
  mk_MK: { dayjs: 'mk', translate: { google: 'mk', bing: 'mk' } },
  // \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED
  ml_IN: { dayjs: 'ml', translate: { google: 'ml', bing: 'ml' } },
  // \u8499\u53E4\u8BED
  mn_MN: { dayjs: 'mn', translate: { google: 'mn', bing: 'mn' } },
  // \u9A6C\u6765\u8BED (\u9A6C\u6765\u897F\u4E9A)
  ms_MY: { dayjs: 'ms', translate: { google: 'ms', bing: 'ms' } },
  // \u7F05\u7538\u8BED
  my_MM: { dayjs: 'my', translate: { google: 'my', bing: 'my' } },
  // \u632A\u5A01\u8BED
  nb_NO: { dayjs: 'nb', translate: { google: 'nb', bing: 'nb' } },
  // \u5C3C\u6CCA\u5C14\u8BED
  ne_NP: { dayjs: 'ne', translate: { google: 'ne', bing: 'ne' } },
  // \u8377\u5170\u8BED\uFF08\u6BD4\u5229\u65F6\uFF09
  nl_BE: { dayjs: 'nl-be', translate: { google: 'nl', bing: 'nl' } },
  // \u8377\u5170\u8BED
  nl_NL: { dayjs: 'nl', translate: { google: 'nl', bing: 'nl' } },
  // \u6CE2\u5170\u8BED
  pl_PL: { dayjs: 'pl', translate: { google: 'pl', bing: 'pl' } },
  // \u8461\u8404\u7259\u8BED(\u5DF4\u897F)
  pt_BR: { dayjs: 'pt-br', translate: { google: 'pt', bing: 'pt' } },
  // \u8461\u8404\u7259\u8BED
  pt_PT: { dayjs: 'pt', translate: { google: 'pt', bing: 'pt' } },
  // \u7F57\u9A6C\u5C3C\u4E9A\u8BED
  ro_RO: { dayjs: 'ro', translate: { google: 'ro', bing: 'ro' } },
  // \u4FC4\u7F57\u65AF\u8BED
  ru_RU: { dayjs: 'ru', translate: { google: 'ru', bing: 'ru' } },
  // \u50E7\u4F3D\u7F57\u8BED
  si_LK: { dayjs: 'si', translate: { google: 'si', bing: 'si' } },
  // \u65AF\u6D1B\u4F10\u514B\u8BED
  sk_SK: { dayjs: 'sk', translate: { google: 'sk', bing: 'sk' } },
  // \u585E\u5C14\u7EF4\u4E9A\u8BED
  sr_RS: { dayjs: 'sr', translate: { google: 'sr', bing: 'sr' } },
  // \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED
  sl_SI: { dayjs: 'sl', translate: { google: 'sl', bing: 'sl' } },
  // \u745E\u5178\u8BED
  sv_SE: { dayjs: 'sv', translate: { google: 'sv', bing: 'sv' } },
  // \u6CF0\u7C73\u5C14\u8BED
  ta_IN: { dayjs: 'ta', translate: { google: 'ta', bing: 'ta' } },
  // \u6CF0\u8BED
  th_TH: { dayjs: 'th', translate: { google: 'th', bing: 'th' } },
  // \u571F\u8033\u5176\u8BED
  tr_TR: { dayjs: 'tr', translate: { google: 'tr', bing: 'tr' } },
  // \u571F\u5E93\u66FC
  tk_TK: { dayjs: 'tk', translate: { google: 'tk', bing: 'tk' } },
  // \u4E4C\u5C14\u90FD\u8BED (\u5DF4\u57FA\u65AF\u5766)
  ur_PK: { dayjs: 'ur', translate: { google: 'ur', bing: 'ur' } },
  // \u4E4C\u514B\u5170\u8BED
  uk_UA: { dayjs: 'uk', translate: { google: 'uk', bing: 'uk' } },
  // \u4E4C\u5179\u522B\u514B\u8BED\uFF08\u62C9\u4E01\u5B57\u6BCD\uFF09
  uz_UZ: { dayjs: 'uz', translate: { google: 'uz', bing: 'uz' } },
  // \u8D8A\u5357\u8BED
  vi_VN: { dayjs: 'vi', translate: { google: 'vi', bing: 'vi' } },
  // \u7B80\u4F53\u4E2D\u6587
  zh_CN: { dayjs: 'zh-cn', translate: { google: 'zh-CN', bing: 'zh-CN' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u9999\u6E2F\uFF09
  zh_HK: { dayjs: 'zh-hk', translate: { google: 'zh-HK', bing: 'zh-HK' } },
  // \u7E41\u4F53\u4E2D\u6587\uFF08\u4E2D\u56FD\u53F0\u6E7E\uFF09
  zh_TW: { dayjs: 'zh-tw', translate: { google: 'zh-TW', bing: 'zh-TW' } }
}

module.exports = languageMap
`},27340:function(o,e){"use strict";e.Z=`import loadDayjsLanguage from './loadDayjsLanguage'
import loadLyrixiLanguage from './loadLyrixiLanguage'
import loadLocalJsFiles from './loadLocalJsFiles'
import loadLocalJsonFiles from './loadLocalJsonFiles'
import loadRemoteJsFiles from './loadRemoteJsFiles'
import loadRemoteJsonFiles from './loadRemoteJsonFiles'

// \u52A0\u8F7D\u56FD\u9645\u5316\u6587\u4EF6
async function loadLocale(
  language,
  { dayjs = true, lyrixi = true, localJsFiles, localJsonFiles, remoteJsFiles, remoteJsonFiles } = {}
) {
  if (!language) {
    return {
      status: 'error',
      message: 'language is null'
    }
  }
  if (dayjs) {
    await loadDayjsLanguage(language)
  }
  if (lyrixi) {
    await loadLyrixiLanguage(language)
  }
  if (localJsFiles?.length) {
    await loadLocalJsFiles(localJsFiles)
  }
  if (localJsonFiles?.length) {
    await loadLocalJsonFiles(localJsonFiles)
  }
  if (remoteJsFiles?.length) {
    await loadRemoteJsFiles(remoteJsFiles)
  }
  if (remoteJsonFiles?.length) {
    await loadRemoteJsonFiles(remoteJsonFiles)
  }
  return {
    status: 'success',
    message: 'locale loaded'
  }
}

export default loadLocale
`},33141:function(o,e){"use strict";e.Z=`import languageMap from '../languageMap'

// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7Ddayjs\u672C\u5730\u6587\u4EF6
async function loadDayjsLanguage(language) {
  let lang = languageMap?.[language]
  // \u8BBE\u7F6Edayjs\u8BED\u8A00
  if (lang?.dayjs) {
    let result = await AssetUtil.loadLocalFile(\`dayjs/locale/\${lang.dayjs}.json\`)
    if (result.status === 'success') {
      dayjs.locale(lang?.dayjs)
    }
    return result
  }
  return {
    status: 'error',
    message: 'Dayjs language not found'
  }
}

export default loadDayjsLanguage
`},57470:function(o,e){"use strict";e.Z=`// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7D\u672C\u5730js\u6587\u4EF6
async function loadLocalJsFiles(localJsFiles) {
  for (let localJsFile of localJsFiles) {
    let result = await AssetUtil.loadLocalJs(localJsFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Local js files loaded successfully'
  }
}

export default loadLocalJsFiles
`},36583:function(o,e){"use strict";e.Z=`// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7D\u672C\u5730json\u6587\u4EF6
async function loadLocalJsonFiles(localJsonFiles) {
  for (let localJsonFile of localJsonFiles) {
    let result = await AssetUtil.loadLocalJson(localJsonFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Local json files loaded successfully'
  }
}

export default loadLocalJsonFiles
`},98750:function(o,e){"use strict";e.Z=`import setLocale from './../setLocale'

// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u8BBE\u7F6Elyrixi\u8BED\u8A00
async function loadLyrixiLanguage(language) {
  // \u8BBE\u7F6Edayjs\u8BED\u8A00
  if (language) {
    let result = await AssetUtil.loadLocalFile(\`lyrixi-mobile/locale/\${language}.json\`)
    if (result.status === 'success') {
      setLocale(language, result.data)
    }
    return result
  }
  return {
    status: 'error',
    message: 'Lyrixi language not found'
  }
}

export default loadLyrixiLanguage
`},77869:function(o,e){"use strict";e.Z=`// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7D\u672C\u5730js\u6587\u4EF6
async function loadRemoteJsFiles(localJsFiles) {
  for (let localJsFile of localJsFiles) {
    let result = await AssetUtil.loadRemoteJs(localJsFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Remote js files loaded successfully'
  }
}

export default loadRemoteJsFiles
`},97144:function(o,e){"use strict";e.Z=`// \u5185\u5E93\u4F7F\u7528-start
import AssetUtil from './../../../utils/AssetUtil'
// \u5185\u5E93\u4F7F\u7528-end

/* \u6D4B\u8BD5\u4F7F\u7528-start
import { AssetUtil } from 'lyrixi-mobile'
\u6D4B\u8BD5\u4F7F\u7528-end */

// \u52A0\u8F7D\u672C\u5730js\u6587\u4EF6
async function loadRemoteJsonFiles(localJsonFiles) {
  for (let localJsonFile of localJsonFiles) {
    let result = await AssetUtil.loadLocalJson(localJsonFile)
    if (result.status === 'error') {
      return result
    }
  }
  return {
    status: 'success',
    message: 'Remote js files loaded successfully'
  }
}

export default loadRemoteJsonFiles
`},84593:function(o,e){"use strict";e.Z=`import { isValidElement } from 'react'

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
`},8624:function(o,e){"use strict";e.Z=`import React from 'react'
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
  let localeData = window.lyrixiLocales?.[window.lyrixiLocaleLanguage]?.language || {}
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
`},89866:function(o,e){"use strict";e.Z=`/**
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
`},9446:function(o,e){"use strict";e.Z=`import languageMap from '../languageMap'

// \u8986\u76D6\u539F\u6709\u7684\u56FD\u9645\u5316\u6570\u636E
function setLocale(language, data) {
  if (languageMap?.[language]) {
    window.lyrixiLocales = {
      language: data
    }
    window.lyrixiLocaleLanguage = language
  }
}

export default setLocale
`},13797:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},37182:function(o,e){"use strict";e.Z=`import { Device, Request, DateUtil } from 'lyrixi-mobile'

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
`},43936:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},93308:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},58087:function(o,e){"use strict";e.Z=`import React from 'react'
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
`},63330:function(o,e){"use strict";e.Z=`import React, { useState } from 'react'
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
`},50233:function(o,e){"use strict";e.Z=`import React, { useState } from 'react'
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
`},9300:function(o,e){"use strict";e.Z=`import React, { useState } from 'react'
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
`},56626:function(o,e){"use strict";e.Z=`import React from 'react'
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

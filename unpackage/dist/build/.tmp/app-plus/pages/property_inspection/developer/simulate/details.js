(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/property_inspection/developer/simulate/details"],{6877:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.mainItempr,function(t,o){var a=t.pdDate.substr(0,11);return{$orig:e.__get_orig(t),g0:a}}));e.$mp.data=Object.assign({},{$root:{l0:o}})},s=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return s})},"690b":function(e,t,o){},"6acd":function(e,t,o){"use strict";(function(e,o){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={onLoad:function(t){a=this,console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:99")),a.psId=t.psId,console.log(e(a.psId," at pages/property_inspection/developer/simulate/details.vue:101")),a.psName=t.psName,console.log(e(a.psName," at pages/property_inspection/developer/simulate/details.vue:103"));for(var s=0;s<30;s++)a.number.push(s);o.getStorage({key:"cookies",success:function(t){a.cookies=t.data,console.log(e("监测获取到cookies值为:"+a.cookies," at pages/property_inspection/developer/simulate/details.vue:112"))}})},onShow:function(){a.mainItempr=[];var t=getApp();console.log(e(t.globalData.ctx," at pages/property_inspection/developer/simulate/details.vue:120")),o.request({url:t.globalData.ctx+"/home/problem/rs/problemdescribeList?psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},data:{},success:function(t){console.log(e(t.data," at pages/property_inspection/developer/simulate/details.vue:132")),a.getData=t.data.rows,a.mainItempr=t.data.rows,console.log(e(a.getData," at pages/property_inspection/developer/simulate/details.vue:135"));for(var o=0;o<t.data.rows.length;o++){for(var s=!1,n=0;n<a.main.length;n++)a.main[n]==t.data.rows[o].pdLoca&&(s=!0);0==s&&a.main.push(t.data.rows[o].pdLoca)}for(var i=0;i<t.data.rows.length;i++){for(var r=!1,p=0;p<a.item.length;p++)a.item[p]==t.data.rows[i].pdLocation&&(r=!0);0==r&&a.item.push(t.data.rows[i].pdLocation)}},fail:function(){},complete:function(){}})},data:function(){return{psId:"",psName:"",getData:[],getperson:[],getmain:"请选择",getitem:"请选择",mainItempr:[],show:!1,ac:!0,tab:"left:0upx;transition:0.3s;",sub:"left:750upx;transition:0.3s;",title:"8-2-201",person:["选择责任方"],index1:0,main:["选择部位"],index2:0,item:["选择部品"],index3:0,problemindex:-1,problemlist:[],roomtype:[{type:"客厅",name:"parlour"},{type:"主卧",name:"masterroom"},{type:"次卧",name:"secondroom"},{type:"书房",name:"study"}],direction:[{direction:"左上:",name:"lt",warm:"color:#f00"},{direction:"右上:",name:"rt,",warm:"color:#f00"},{direction:"右下:",name:"rb",warm:"color:#f00"},{direction:"左下:",name:"lb",warm:"color:#f00"},{direction:"中间:",name:"middle",warm:"color:#f00"}],measure:[],standard:[],red:!1,baytype:[{type:"垂直度",name:"verticality"},{type:"平整度",name:"planeness"},{type:"阴阳角",name:"yyj"},{type:"开间",name:"bay"},{type:"湿度",name:"humidity"}],number:[],number2:[1,2,3,4,5]}},methods:{problemList:function(){a.ac=!0,a.tab="left:0upx;transition:.3s;",a.sub="left:750upx;transition:.3s;"},clickMeasure:function(){a.ac=!1,a.tab="left:-750upx;transition:.3s;",a.sub="left:0upx;transition:.3s;"},changePerson:function(t){a.index1=t.detail.value,a.main=["请选择"],a.item=["请选择"],a.getperson=[],a.index2=0,a.index3=0,a.getmain=[],console.log(e(a.person[t.detail.value]," at pages/property_inspection/developer/simulate/details.vue:340"));for(var o=0;o<a.getData.length;o++)a.getData[o].pdRecorder==a.person[t.detail.value]&&a.getperson.push(a.getData[o]);console.log(e(JSON.stringify(a.getperson)," at pages/property_inspection/developer/simulate/details.vue:346"));for(var s=0;s<a.getperson.length;s++)a.main.push(a.getperson[s].pdLoca),a.getmain.push(a.getperson[s]);function n(e){return Array.from(new Set(e))}a.main=n(a.main),console.log(e(a.main," at pages/property_inspection/developer/simulate/details.vue:355")),console.log(e("========================"," at pages/property_inspection/developer/simulate/details.vue:356")),console.log(e(JSON.stringify(a.getmain)," at pages/property_inspection/developer/simulate/details.vue:357"))},changeMain:function(t){if(a.index2=t.detail.value,a.getmain=a.main[t.detail.value],console.log(e(a.getmain," at pages/property_inspection/developer/simulate/details.vue:363")),"请选择"==a.getitem&&"请选择"!==a.getmain){var s=getApp();o.request({url:s.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLoca="+a.getmain+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:375")),a.mainItempr=t.data.rows}})}else if("请选择"!==a.getitem&&"请选择"!==a.getmain){var n=getApp();o.request({url:n.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLoca="+a.getmain+"&&pdLocation="+a.getitem+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:389")),a.mainItempr=t.data.rows}})}else if("请选择"!==a.getitem&&"请选择"==a.getmain){var i=getApp();o.request({url:i.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLocation="+a.getitem+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:403")),a.mainItempr=t.data.rows}})}else a.mainItempr=a.getData},changeItem:function(t){if(a.index3=t.detail.value,a.getitem=a.item[t.detail.value],console.log(e(a.getitem," at pages/property_inspection/developer/simulate/details.vue:421")),"请选择"==a.getitem&&"请选择"!==a.getmain){var s=getApp();o.request({url:s.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLoca="+a.getmain+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:432")),a.mainItempr=t.data.rows}})}else if("请选择"!==a.getitem&&"请选择"!==a.getmain){var n=getApp();o.request({url:n.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLoca="+a.getmain+"&&pdLocation="+a.getitem+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:446")),a.mainItempr=t.data.rows}})}else if("请选择"!==a.getitem&&"请选择"==a.getmain){var i=getApp();o.request({url:i.globalData.ctx+"/home/problem/rs/problemdescribeList?pdLocation="+a.getitem+"&psId="+a.psId,method:"POST",header:{"Content-type":"application/json",Cookie:a.cookies},success:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:460")),a.mainItempr=t.data.rows}})}else a.mainItempr=a.getData},getIndex:function(t){a.problemindex=t,console.log(e(a.problemindex," at pages/property_inspection/developer/simulate/details.vue:471"))},submitMeasure:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:474"))},judgeValue:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/details.vue:477")),a.measure[t.target.offsetTop]=t.target.value,console.log(e(a.measure[t.target.offsetTop]," at pages/property_inspection/developer/simulate/details.vue:479")),a.measure[t.target.offsetTop]&&a.standard[t.target.offsetTop]&&(a.measure[t.target.offsetTop]>a.standard[t.target.offsetTop]?a.red=!0:a.red=!1)},judgeStandard:function(t){a.standard[t.target.offsetTop]=t.target.value,console.log(e(a.standard[t.target.offsetTop]," at pages/property_inspection/developer/simulate/details.vue:490")),a.measure[t.target.offsetTop]&&a.standard[t.target.offsetTop]&&(a.measure[t.target.offsetTop]>a.standard[t.target.offsetTop]?a.red=!0:a.red=!1)}}};t.default=s}).call(this,o("0de9")["default"],o("6e42")["default"])},7923:function(e,t,o){"use strict";o.r(t);var a=o("6acd"),s=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,function(){return a[e]})}(n);t["default"]=s.a},a57f:function(e,t,o){"use strict";o.r(t);var a=o("6877"),s=o("7923");for(var n in s)"default"!==n&&function(e){o.d(t,e,function(){return s[e]})}(n);o("f437");var i=o("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},deee:function(e,t,o){"use strict";(function(e){o("a24d"),o("921b");a(o("66fd"));var t=a(o("a57f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},f437:function(e,t,o){"use strict";var a=o("690b"),s=o.n(a);s.a}},[["deee","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/property_inspection/developer/simulate/take_notes"],{1511:function(e,t,n){"use strict";n.r(t);var i=n("444a"),o=n("c6f1");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var c=n("2877"),u=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"444a":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"732a":function(e,t,n){"use strict";(function(e,n){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLoad:function(){i=this,i.time=new Date,i.year=i.time.getFullYear(),i.month=i.time.getMonth()+1,i.day=i.time.getDate(),i.date=i.year+"-"+i.month+"-"+i.day,console.log(e(i.date," at pages/property_inspection/developer/simulate/take_notes.vue:131"))},data:function(){return{array1:["客厅","房间","厨房","厕所"],array2:["插座","水管","电线"],array3:["墙壁不平整","房间墙壁有脱皮"],index1:0,index2:0,index3:0,pic_index:0,pic:[],preview:[],del:[],wh:"",takenotes:[1],note:1,date:""}},methods:{changeMain1:function(e){i.index1=e.detail.value},changeMain2:function(e){i.index2=e.detail.value},changeMain3:function(e){i.index3=e.detail.value},addPic:function(){n.showActionSheet({itemList:["图片","视频"],success:function(t){0==t.tapIndex&&n.chooseImage({count:5,sizeType:["original","compressed"],success:function(t){t.tempFilePaths.forEach(function(t){if(i.pic_index>4)return console.log(e("aa"," at pages/property_inspection/developer/simulate/take_notes.vue:178")),n.showToast({title:"最多选五张",icon:"none"}),!1;i.pic[i.pic_index]=t,i.pic_index++}),console.log(e(i.pic_index," at pages/property_inspection/developer/simulate/take_notes.vue:188")),console.log(e(i.pic," at pages/property_inspection/developer/simulate/take_notes.vue:189"))}}),1==t.tapIndex&&n.chooseVideo({success:function(e){i.pic[i.pic_index]=e,i.pic_index++}})}})},delPic:function(e){for(var t=i.pic_index-e,n=0;n<t;n++)i.pic[e+n]=i.pic[e+n+1],i.pic.splice(e+n+1,0);i.pic.pop(),i.pic_index--},previewPic:function(e){i.preview[0]=i.pic[e],n.previewImage({urls:i.preview})},playVideo:function(){i.wh="width: 750upx;height: 750upx;position: absolute; top:600upx;left:0;;z-index:20;"},endVideo:function(){i.wh=""},takenotes_submit:function(t){console.log(e(t," at pages/property_inspection/developer/simulate/take_notes.vue:229"))},addnotes:function(){i.note++,i.takenotes.push(i.note),console.log(e(i.takenotes," at pages/property_inspection/developer/simulate/take_notes.vue:234"))},pickDate:function(e){i.date=e.detail.value}}};t.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"92b8":function(e,t,n){"use strict";(function(e){n("a24d"),n("921b");i(n("66fd"));var t=i(n("1511"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c6f1:function(e,t,n){"use strict";n.r(t);var i=n("732a"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}},[["92b8","common/runtime","common/vendor"]]]);
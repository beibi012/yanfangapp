(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/air_detection/resurvey"],{"0e76":function(e,o,t){"use strict";var i=t("656e"),n=t.n(i);n.a},"11cb":function(e,o,t){"use strict";(function(e,t){var i;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={onLoad:function(){i=this,i.time=new Date,i.year=i.time.getFullYear(),i.month=i.time.getMonth()+1,i.day=i.time.getDate(),i.date=i.year+"-"+i.month+"-"+i.day,i.dateA=i.year+"-"+i.month+"-"+i.day,i.samplingdate=i.year+"-"+i.month+"-"+i.day,i.pic[i.pic_index]=[],i.index_array[i.pic_index]=0;for(var o=0;o<25;o++){var n=o.toString()+":00";i.hours.push(n)}console.log(e(i.date," at pages/air_detection/resurvey.vue:293")),t.getStorage({key:"cookies",success:function(o){i.cookies=o.data,console.log(e("监测获取到cookies值为:"+i.cookies," at pages/air_detection/resurvey.vue:298"))}}),t.getStorage({key:"option1",success:function(o){console.log(e(o.data," at pages/air_detection/resurvey.vue:304")),i.option1=o.data,i.index=i.option1.roleId,i.dateA=i.option1.analyzeTime,i.upordown_Aindex=i.option1.analyzeTime_ud,i.lock2=!0}}),t.getStorage({key:"option2",success:function(o){console.log(e(o.data," at pages/air_detection/resurvey.vue:315")),i.option2=o.data,i.itemArray=i.option2.itemArray,i.lock3=!0}})},data:function(){return{IN:[],option1:{},option2:{},option3:{},nowFileId:"",index_array:[],pic_index:0,pic:[],preview:[],vde_index:0,vde:[],id:[],vdecss:"position: fixed; top: 0; left: 0; width: 750upx; height: 750upx; z-index: 100; margin:0;",big:-1,vdebutton:" position: fixed; bottom: -250upx;width: 100%;",show:1,previewvde:-1,del:[],wh:"",takenotes:[1],note:1,date:"",time:"",governtime:"9",hours:[],upordown:["上午","下午"],upordown_index:0,dateA:"",upordown_A:["上午","下午"],upordown_Aindex:0,samplingdate:"",samplingTime:["上午","下午"],samptime_index:0,user:["个人","开发商","工装"],index:0,show1:!0,show2:!1,show3:!1,lock2:!1,lock3:!1,itemNumber:0,itemArray:[0],instNumber:0,instArray:[0],smapNumber:0,smapArray:[0],refresh:!0}},methods:{submit:function(o){console.log(e(o," at pages/air_detection/resurvey.vue:376")),o.detail.value.upOrDown=i.upordown[o.detail.value.upOrDown],o.detail.value.analyzeTime_ud=i.upordown_A[o.detail.value.analyzeTime_ud],console.log(e(option1," at pages/air_detection/resurvey.vue:379")),console.log(e(option2," at pages/air_detection/resurvey.vue:381"));var n=getApp();console.log(e(n.globalData.ctx," at pages/air_detection/resurvey.vue:383")),console.log(e(i.option3.upOrDown," at pages/air_detection/resurvey.vue:384")),console.log(e(i.option1.analysisTime_ud," at pages/air_detection/resurvey.vue:385")),t.request({url:n.globalData.ctx+"/home/homeAirMonitoring/add",header:{"Content-type":"application/json",Cookie:i.cookies},method:"post",data:{roleId:i.option1.roleId,projectName:i.option1.projectName,homeCustomers:[{address:i.option1.clientAddress,contactName:i.option1.clientContacts,customerType:"1",name:i.option1.clientName,phone:i.option1.clientNumber,userType:i.option1.roleId},{address:i.option1.ownerAddress,contactName:i.option1.ownerContacts,customerType:"2",name:i.option1.ownerName,phone:i.option1.ownerNumber,userType:i.option1.roleId}],monitoringSource:i.option1.surveySource,analyzeCondition:i.option1.analysisCondition,analyzeTime:i.option1.analysisTime+","+i.option1.analysisTime_ud,homeMonitoringItems:[{monitoringItem:i.option2.monitoringItem,analyzeCondition:i.option2.itemMethod,domainWalker:i.option2.itemRange}],remark:i.option2.remark,homeMonitoringContents:JSON.stringify(i.option3.monitoringcontents),homeEquipments:i.option3.equipments,monitoringResult:i.option3.monitoringResult,airProblem:i.option3.airProblem,monitoringTime:i.option3.governTime+","+i.option3.upOrDown},success:function(o){console.log(e(o," at pages/air_detection/resurvey.vue:434"))},fail:function(){console.log(e("数据请求错误"," at pages/air_detection/resurvey.vue:437")),t.showToast({title:"数据请求错误",icon:"none"}),setTimeout(function(){t.hideToast()},1e3)},complete:function(){}}),t.navigateBack({delta:1}),t.removeStorage({key:"option1",success:function(o){console.log(e("success1"," at pages/air_detection/resurvey.vue:454"))}}),t.removeStorage({key:"option2",success:function(o){console.log(e("success2"," at pages/air_detection/resurvey.vue:460"))}})},submitOption1:function(o){console.log(e("获取option1"," at pages/air_detection/resurvey.vue:465")),console.log(e(o," at pages/air_detection/resurvey.vue:466")),i.option1=o.detail.value,console.log(e(i.option1," at pages/air_detection/resurvey.vue:468")),console.log(e(i.option1.clientNumber," at pages/air_detection/resurvey.vue:469")),t.setStorage({key:"option1",data:i.option1,success:function(){console.log(e("success op1"," at pages/air_detection/resurvey.vue:474"))}})},submitOption2:function(o){for(var n in console.log(e("获取option2"," at pages/air_detection/resurvey.vue:480")),console.log(e(o," at pages/air_detection/resurvey.vue:481")),i.option2=o.detail.value,i.option2.itemArray=i.itemArray,i.option2.monitoringItem="",i.option2)0==n.search("itemName")&&(i.option2.monitoringItem=i.option2.monitoringItem+i.option2[n]+",");i.option2.monitoringItem=i.option2.monitoringItem.substring(0,i.option2.monitoringItem.length-1),console.log(e(i.option2.monitoringItem," at pages/air_detection/resurvey.vue:491"));var a=getApp();console.log(e(a.globalData.ctx," at pages/air_detection/resurvey.vue:494"));for(var r=0;r<i.pic.length;r++)t.uploadFile({url:a.globalData.ctx+"/common/uploadFileUnify",fileType:"image",header:{"Content-type":"application/x-www-form-urlencoded",Cookie:i.cookies},name:"files",filePath:i.pic[r],success:function(o){t.showToast({title:"上传成功"}),console.log(e(o.data," at pages/air_detection/resurvey.vue:509"));var n=JSON.parse(o.data).fileIds;console.log(e("获取到fileid为:"+n," at pages/air_detection/resurvey.vue:511")),i.nowFileId=i.nowFileId+n,console.log(e("获取到nowFileId为:"+i.nowFileId," at pages/air_detection/resurvey.vue:513"))},fail:function(){t.showToast({title:"上传失败"})}});t.setStorage({key:"option2",data:i.option2,success:function(){console.log(e("success op2"," at pages/air_detection/resurvey.vue:529"))}})},submitOption3:function(o){console.log(e("获取option3"," at pages/air_detection/resurvey.vue:534")),console.log(e(o," at pages/air_detection/resurvey.vue:535")),t.navigateBack({delta:1}),t.removeStorage({key:"option1",success:function(o){console.log(e("success1"," at pages/air_detection/resurvey.vue:542"))}}),t.removeStorage({key:"option2",success:function(o){console.log(e("success2"," at pages/air_detection/resurvey.vue:548"))}})},addItem:function(){i.itemNumber++,i.itemArray.push(i.itemNumber),i.pic_index++,i.pic[i.pic_index]=[],i.index_array[i.pic_index]=0,console.log(e(i.pic," at pages/air_detection/resurvey.vue:692"))},addPic:function(o){console.log(e(o," at pages/air_detection/resurvey.vue:695")),t.chooseImage({count:5,sizeType:["original","compressed"],success:function(n){n.tempFilePaths.forEach(function(e){if(i.index_array[o]>4)return t.showToast({title:"最多选五张",icon:"none"}),!1;i.pic[o][i.index_array[o]]=e,i.index_array[o]++}),console.log(e(i.index_array[o]," at pages/air_detection/resurvey.vue:714")),console.log(e(i.pic[o]," at pages/air_detection/resurvey.vue:715")),i.pic.push([]),console.log(e(i.pic," at pages/air_detection/resurvey.vue:717")),i.pic.pop(),console.log(e(i.pic," at pages/air_detection/resurvey.vue:719"))}})},delPic:function(e){for(var o=i.pic_index-e,t=0;t<o;t++)i.pic[e+t]=i.pic[e+t+1],i.pic.splice(e+t+1,0);i.pic.pop(),i.pic_index--},previewPic:function(e,o){i.preview=i.pic[e],t.previewImage({current:o,urls:i.preview})},toBig:function(e){i.big=e},playVideo:function(e){i.big=e,i.previewvde=e,i.vdebutton=" position: fixed; bottom: 0;width: 100%;transition-duration: 0.2s;"},pauseVideo:function(){i.vdebutton=" position: fixed; bottom: 0;width: 100%; z-index: 20;transition-duration: 0.2s; "},stopVideo:function(){i.big=-1,i.previewvde=-1,i.show=0,setTimeout(function(){i.show=1},1)},delVideo:function(e){i.big=-1,i.previewvde=-1;for(var o=i.vde_index-e,t=0;t<o;t++)i.vde[e+t]=i.vde[e+t+1],i.vde.splice(e+t+1,0);i.vde.pop(),i.vde_index--,i.show=0,setTimeout(function(){i.show=1},1)},takenotes_submit:function(o){console.log(e(o," at pages/air_detection/resurvey.vue:821"))},addnotes:function(){i.note++,i.takenotes.push(i.note),console.log(e(i.takenotes," at pages/air_detection/resurvey.vue:826"))},pickDate:function(e){i.date=e.detail.value},pickGovernTime:function(e){i.governtime=e.detail.value},pickTime:function(e){i.upordown_index=e.detail.value},pickDateA:function(e){i.dateA=e.detail.value},pickTimeA:function(e){i.upordown_Aindex=e.detail.value},pickSamplingDate:function(e){i.samplingdate=e.detail.value},pickSamplingTime:function(e){i.samptime_index=e.detail.value},changeUser:function(e){i.index=e.detail.value},nextModel1:function(){i.show1=!1,i.show2=!0,i.lock2=!0,t.pageScrollTo({scrollTop:0,duration:300})},nextModel2:function(){i.show2=!1,i.show3=!0,i.lock3=!0,t.pageScrollTo({scrollTop:0,duration:300})},showOption1:function(){i.show1=!0,i.show2=!1,i.show3=!1,i.lock2=!1,i.lock3=!1,t.pageScrollTo({scrollTop:0,duration:300})},showOption2:function(){i.lock2?(i.show1=!1,i.show2=!0,i.show3=!1,i.lock3=!1,t.pageScrollTo({scrollTop:0,duration:300})):(t.showToast({title:"请点击下一步",icon:"none"}),setTimeout(function(){t.hideToast()},2e3),t.pageScrollTo({scrollTop:5e3,duration:300}))},showOption3:function(){i.lock3?(i.show1=!1,i.show2=!1,i.show3=!0,t.pageScrollTo({scrollTop:0,duration:300})):(t.showToast({title:"请点击下一步",icon:"none"}),setTimeout(function(){t.hideToast()},2e3),t.pageScrollTo({scrollTop:5e3,duration:300}))},moveHandle:function(){},addInst:function(){i.instNumber++,i.instArray.push(i.instNumber)},addSmap:function(){i.smapNumber++,i.smapArray.push(i.smapNumber)}}};o.default=n}).call(this,t("0de9")["default"],t("6e42")["default"])},"656e":function(e,o,t){},8464:function(e,o,t){"use strict";t.r(o);var i=t("11cb"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(o,e,function(){return i[e]})}(a);o["default"]=n.a},"9fb3":function(e,o,t){"use strict";var i=function(){var e=this,o=e.$createElement;e._self._c},n=[];t.d(o,"a",function(){return i}),t.d(o,"b",function(){return n})},ecba:function(e,o,t){"use strict";(function(e){t("a24d"),t("921b");i(t("66fd"));var o=i(t("f63e"));function i(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("6e42")["createPage"])},f63e:function(e,o,t){"use strict";t.r(o);var i=t("9fb3"),n=t("8464");for(var a in n)"default"!==a&&function(e){t.d(o,e,function(){return n[e]})}(a);t("0e76");var r=t("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);o["default"]=s.exports}},[["ecba","common/runtime","common/vendor"]]]);
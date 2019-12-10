<template>
	<view style="height: 100vh;width: 100%; overflow: hidden;">  
				<form @submit="submit">
					
					<view class="basic_container" style="border-top: 1px solid #ddd;">
						<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">用户类型</text>
						<!-- <picker mode="selector" name="userType":range="usertype" :value="index" @change="changeUsertype" >
							<view class="basic_picker">{{usertype[index]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
							</view>
						</picker> --> 
						<text class="basic_content">个人</text>
						</view>
						<view class="basic_container" style="border-top: 1px solid #ddd;">
							<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">用户名称</text>
							<!-- <input class="basic_input" type="text" name="userId" value="" /> -->
							<text class="basic_content">王先生</text>
							</view>
					<!-- <view class="basic_container" style="border-top: 1px solid #ddd;">
						<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">用户名称</text>
						<picker mode="selector" name="userId":range="username" :value="index" @change="changeUsername" >
							<view class="basic_picker">{{username[index_username]}}
								<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
							</view>
						</picker>
						</view> -->
						<view class="basic_container" style="border-top: 1px solid #ddd;">
							<text class="basic_title" style="font-size: 35upx;font-weight: bold;color: #333;">项目名称</text>
							<!-- <input class="basic_input" type="text" name="checkOptions" value="" /> -->
							<!-- <picker mode="selector" name="checkOptions":range="itemname" :value="index_itemname" @change="changeItemname" >
								<view class="basic_picker">{{itemname[index_itemname]}}
									<image class="arrow" src="/static/screen@2x.png" mode="widthFix"></image>
								</view>
							</picker> -->
							<text class="basic_content">项目A</text>
							</view>
				<view class="basic_container2" style="border-top: 1px solid #ddd;">
					<text class="basic_title">治理结果</text>
					<view class="picture_govern">
						<view class="pic_cont" v-for="(p,index) in pic">
							<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
							<!-- <view class="del" @click="delPic(index)">
								<image class="del_img" src="/static/delete@2x.png" mode="widthFix"></image></view> -->
							<view class="pic_describe">
								<text class="text">
									墙面脱粉墙面脱粉墙面脱粉墙
								</text>
							</view>
						</view>
						<view class="pic_cont" v-for="(v,index) in vde">
							<video v-if="show==1"  class="pic" :src="v" controls style="border-radius: 0;margin-right: 25upx;" :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0;height:75vh; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
							<view class="pic_describe vde_input">
								<textarea class="describe_input" :name="'remarkV'+index" value="" placeholder="输入描述" />
							</view>
							<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 35vh; z-index: 10;">
								<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
									<button type="warn" style=" width: 100%;" @click.stop.prevent="delVideo(index)">重新拍摄/选择</button>
							<button type="primary" style="width: 100%;" @click.stop.prevent="stopVideo">退出预览</button>
								</view>
							</view>
						</view>
						<!-- <view class="addpic"   @click="addPic">
							<image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image>
							</view> -->
					</view>
					</view>
					<scroll-view scroll-y="true" class="time_container">
						<view class="basic_container">
							<text class="basic_title">治理时间</text>
							<text class="basic_title">2019-3-26</text>
						</view>
					</scroll-view>
						
					
					<button class="submit" form-type="submit" type="primary">提交</button>
					</form>
		
	</view>
</template>

<script>
	var self;
	var year,month,day,time;
	
	export default{
		onLoad() {
			self=this;
			
			
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("治理获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			console.log(app.globalData.ctx)
			uni.request({
			    url:app.globalData.ctx+ '/home/homeAirMonitoring/list', 
			    header: {
						'Content-type':'application/x-www-form-urlencoded',
						'Cookie':self.cookies
			    },
				method: 'post',
			    success: (res) => {
					self.getData=res.data
					console.log("===============")
					console.log(self.getData)
					console.log("===============")
					console.log(self.getData.total)
					console.log("===============")
					console.log(self.getData.rows)
					console.log("===============")
					self.itemname=["请选择"]
					for(let i=0; i<self.getData.total;i++){
						if(self.getData.rows[i].projectName)
						self.itemname.push(self.getData.rows[i].projectName)
					}
					console.log("===============")
					console.log(self.itemname)
					
			    }
			});
			
		},
		onShow() {
			
		},
		onHide() {
			
		},
		data(){
			return{
				getData:{},
				remark:"",
				nowFileId:"",
				video:[],
				imgList:[],
				obj:{},
				cookies:"",
				pic_index:0,
				pic:["../../static/1.jpeg","../../static/106.jpg","../../static/126.jpg",],
				preview:[],
				vde_index:0,
				vde:[],
				id:[],
				vdecss:"position: fixed; top: 0; left: 0; width: 750upx; height: 750upx; z-index: 100; margin:0;",
				big:-1,
				vdebutton:" position: fixed; bottom: -250upx;width: 100%;",
				show:1,
				previewvde:-1,
				del:[],
				wh:"",
				takenotes:[1],
				note:1,
				usertype:["个人","开发商","工装"],
				index:0,
				username:["请选择项目"],
				index_username:0,
				itemname:["甲醛检测","乙醛检测"],
				index_itemname:0,
				
			}
		},
		methods:{
			submit:(e)=>{
				console.log(e)
				uni.navigateBack({
					delta: 1
				});
				const app = getApp()
				console.log(app.globalData.ctx)
				
				console.log(self.pic)
				// self.img=new Array;
				// self.obj=new Object;
				// for(let i = 0 ; i< self.pic.length; i++){
				// 	self.obj.name="files"
				// 	self.obj.uri=self.pic[i]
				// 	self.img.push(self.obj)
				// 	self.obj={};
				// }
				// console.log(self.img)
				console.log(JSON.stringify(self.imgList))
					// for(let i =self.imgList.length; i<self.pic.length;i++){
					// 	uni.uploadFile({
					// 	       url:app.globalData.ctx+ '/common/uploadFileUnify',
					// 	       fileType: "image", 
					// 	       	header:{
					// 	       		'Content-type':'application/x-www-form-urlencoded',
					// 	       		'Cookie':self.cookies
					// 	       	},
					// 		     name:"files",
					// 	       	filePath:self.pic[i],
					// 	        success: (res) => {
					// 				uni.showToast({
					// 					title: '上传成功'
					// 				});
					// 	            console.log(res.data);
					// 				self.imgList[i]={};
									
					// 				let imgId=JSON.parse(res.data).fileIds
					// 				console.log("获取到fileid为:"+imgId);
					// 				imgId=imgId.substring(0,imgId.length-1)
					// 				self.imgList[i].id=imgId;
									
					// 				let imgNames=JSON.parse(res.data).fileNames
					// 				console.log("获取到fileNames为:"+imgNames);
					// 				imgNames=imgNames.substring(0,imgNames.length-1)
					// 				self.imgList[i].name=imgNames;
									
					// 				let imgSizes=JSON.parse(res.data).sizes
					// 				console.log("获取到fileNames为:"+imgSizes);
					// 				imgSizes=imgSizes.substring(0,imgSizes.length-1)
					// 				self.imgList[i].size=imgSizes;
									
					// 				let imgPath=JSON.parse(res.data).urls
					// 				console.log("获取到fileNames为:"+imgPath);
					// 				imgPath=imgPath.substring(0,imgPath.length-1)
					// 				self.imgList[i].filePath=imgPath;
									
					// 				self.imgList[i]. appId ="";
									
					// 				self.imgList[i].attType="1";
									
					// 				if(self.imgList[0]){
					// 					self.imgList[0].remark=e.detail.value.remarkP0;
					// 				}
					// 				if(self.imgList[1]){
					// 					self.imgList[1].remark=e.detail.value.remarkP1;
					// 				}
					// 				if(self.imgList[2]){
					// 					self.imgList[2].remark=e.detail.value.remarkP2;
					// 				}
					// 				if(self.imgList[3]){
					// 					self.imgList[3].remark=e.detail.value.remarkP3;
					// 				}
					// 				if(self.imgList[4]){
					// 					self.imgList[4].remark=e.detail.value.remarkP4;
					// 				}
									
					// 	        },
					// 			fail: () => {
					// 				uni.showToast({
					// 					title: '上传失败'
					// 				});
					// 			},
					// 			complete:()=>{
					// 				if(i==self.pic.length-1){
					// 					let checkOptionsId=self.getData.rows[e.detail.value.checkOptions].id
					// 					console.log(checkOptionsId)
					// 					console.log(JSON.stringify(self.imgList))
					// 					uni.request({
					// 						url:app.globalData.ctx+ '/home/homeGovernMessage/add',
					// 						header:{
					// 							'Content-type':'application/json',
					// 							'Cookie':self.cookies
					// 						},
					// 						method: 'post',
					// 						data: {
					// 							"userType": e.detail.value.userType,
					// 							"userId": e.detail.value.userId,
					// 							"airId": checkOptionsId,
					// 							"homeAttachments":self.imgList,
					// 						},
					// 						success: res => {
					// 							console.log(res)
					// 							uni.showToast({
					// 							    title: '数据请求成功',
					// 								icon:'none'
					// 							});
					// 						},
					// 						fail: () => { 
					// 							uni.showToast({
					// 							    title: '数据请求错误',
					// 								icon:'none'
					// 							});
					// 							setTimeout(function(){
					// 								uni.hideToast();
					// 							},1000)
					// 						},
					// 						complete: () => {}
					// 					});
					// 				}
									
					// 			}
					// 	    });
					// }
					
					
					
				// if(self.vde!==[]){
				// 		uni.uploadFile({
				//            url: 'http://192.168.0.18:8080/common/uploadFileUnify',
				//            fileType: "video", 
				//            	header:{
				//            		'Content-type':'application/x-www-form-urlencoded',
				//            		'Cookie':self.cookies
				//            	},
				// 		     name:"files",
				//            	filePath:self.vde[0],
				//             success: (uploadFileRes) => {
				// 				uni.showToast({
				// 					title: '上传成功'
				// 				});
				//                 console.log(uploadFileRes.data);
				//             },
				// 			fail: () => {
				// 				uni.showToast({
				// 					title: '上传失败'
				// 				});
				// 			}
				//         });
					
				// }
				
				
				 
				
			},
			addPic:()=>{
				uni.showActionSheet({
				    itemList: ['图片', '视频'],
				    success: function (res) {
				        if(res.tapIndex==0){
							uni.chooseImage({
								count:5,
								sizeType: ['original', 'compressed'], 
								success: function (res) {
									res.tempFilePaths.forEach(function(e){
										if(self.pic_index+self.vde_index>4){
											uni.showToast({
												title:"最多选五张",
												icon:"none"
											})
											return false;
										}
										self.pic[self.pic_index]=e;
										self.pic_index++;
									})
									console.log(self.pic_index);
									console.log(self.pic);
								    }
							})
						}
						if(res.tapIndex==1){
							uni.chooseVideo({
								success:function(res){
									self.vde[self.vde_index]=res.tempFilePath;
									self.id[self.vde_index]=self.vde_index;
									self.vde_index++;
									console.log(self.vde)
									console.log(self.id)
									
								}
							})
						}
				    }
				});
				
				
			},
			delPic:(index)=>{
				let j=self.pic_index-index;
				for(var i=0; i<j;i++){
					self.pic[index+i]=self.pic[index+i+1];
					self.pic.splice(index+i+1,0)
				}
				self.pic.pop();
				self.pic_index--;
			},
			previewPic:(index)=>{ 
				self.preview=self.pic;
				uni.previewImage({
					current:index,
					urls:self.preview
				})
			},
			toBig:(index)=>{
				self.big=index;
			},
			playVideo:(index)=>{
					// self.vdecss="position: fixed; top: 0; left: 0; width: 750upx; height: 750upx; z-index: 100; margin:0;"
					self.big=index;
					self.previewvde=index;
					self.vdebutton=" position: fixed; bottom: 0;width: 100%;transition-duration: 0.2s;z-index:10;";
			},
			pauseVideo:()=>{
				self.vdebutton=" position: fixed; bottom: 0;width: 100%; z-index: 20;transition-duration: 0.2s; ";
			},
			stopVideo:()=>{
				self.big=-1;
				self.previewvde=-1;
				self.show=0;
				setTimeout(()=>{
					self.show=1;
				},1)
				
			},
			delVideo:(index)=>{
				self.big=-1;
				self.previewvde=-1;
				let j=self.vde_index-index;
				for(var i=0; i<j;i++){
					self.vde[index+i]=self.vde[index+i+1];
					self.vde.splice(index+i+1,0)
				}
				self.vde.pop();
				self.vde_index--;
				self.show=0;
				setTimeout(()=>{
					self.show=1;
				},1)
			},
			takenotes_submit:(e)=>{
				console.log(e);
			},
			addnotes:()=>{
				self.note++;
				self.takenotes.push(self.note)
				console.log(self.takenotes)
			},
			pickDate:(e)=>{
				self.date=e.detail.value;
			},
			pickTime:(e)=>{
				self.upordown_index=e.detail.value;
			},
			changeUsertype:(e)=>{
				self.index=e.detail.value;
				},
			changeUsername:(e)=>{
				self.index_username=e.detail.value;
				},
			changeItemname:(e)=>{
				self.index_itemname=e.detail.value;
				console.log(e.detail.value)
				console.log(self.getData.rows[e.detail.value-1])
				console.log(self.getData.rows[e.detail.value-1].id)
				const app = getApp()
				console.log(app.globalData.ctx)
				uni.request({
					url: app.globalData.ctx+'/home/homeAirMonitoring/selectAirById/'+self.getData.rows[e.detail.value-1].id,
					method: 'get',
					header:{
						'Content-type':'application/json',
						'Cookie':self.cookies,
					},
					data: {
						
					},
					success: res => {
						console.log(res.data.homeCustomers[0].name)
						self.username=[res.data.homeCustomers[0].name]
						console.log(res.data.homeCustomers[0].userType)
						let userType=res.data.homeCustomers[0].userType;
						if(userType=="0"){
							self.usertype=["个人"]
						}else if(userType=="1"){
							self.usertype=["开发商"]
						}else{
							self.usertype=["工装"]
						}
						console.log(res.data)
						self.imgList=res.data.homeAttachments
						console.log(self.imgList)
						self.pic_index=self.imgList.length
						for (var i = 0; i < self.imgList.length; i++) {
							console.log(self.imgList[i].filePath)
							self.pic.push(self.imgList[i].filePath)
						}
						// self.pic_index=res.data.homeAttachments.length
						// for (var i = 0; i < res.data.homeAttachments.length; i++) {
						// 	console.log(res.data.homeAttachments[i].filePath)
						// 	self.pic.push(res.data.homeAttachments[i].filePath)
						// }
					},
					fail: () => {},
					complete: () => {}
				});
				},
			moveHandle:()=>{ },
				
		}
	}
</script>

<style>
	.basic_container{
		height: 80upx!important;
	}
	.picture_govern{
		background-color: #fff;
		width: 96%;
		margin: 2% 2%;
		max-height: 750upx;
		overflow: hidden;
		line-height: 150upx;
		border-radius: 20upx;
		border: 1px solid #ddd;
		}
		.addpic{
			display: inline-block;
			width: 50upx;
			height:50upx;
			margin-left: 350upx;
			}
			.add_img{
				display: inline-block;
				width: 50upx;
				height:50upx;
				margin:50upx 0;
			}
	.pic_cont{
		display: block!important;
		width: 750upx;
		height: 150upx;
		border-radius: 10upx;
		}
		.pic{
		display: inline-block;
		border-radius: 20upx;
		width: 100upx;
		height: 100upx;
		margin: 25upx;
		}
		.vde{
			display: inline-block;
			width: 100upx;
			height: 100upx;
			margin: 25upx;	
			}
		.del{
			display: inline-block;
			position: relative;
			left: -50upx;
			top:-100upx;
			width: 40upx;
			height: 40upx;
			z-index: 5;
			}
			.del_img{
				display: inline-block;
				width: 40upx;
				height: 40upx;
			}
			.pic_describe{
				display: inline-block;
				vertical-align: top;
				margin: 25upx 0;
				width: 500upx;
				height: 100upx;
				font-size: 30upx;
			}
			.pic_describe .text{
				display: inline-block;
				vertical-align: top;
				width: 500upx;
				height: 100upx;
				line-height: 35upx;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.describe_input{
				display: inline-block;
				border: 1px solid #ddd;
				border-radius: 10upx;
				width: 500upx;
				height: 100upx;
				font-size: 35upx;
				line-height: 35upx;
				white-space: normal;
				text-indent: 10upx;
			}
			.vde_input{
				margin-left:38upx ;
			}
	.submit{
		position: fixed;
		bottom: 0;
		width: 75%;
		background-color: #00B4FF!important;
		margin-bottom: 5%;
		margin: 0 12.5%;
		z-index: 7;
	}
	.time_container{
		/* height: 100vh; */
	}
</style>

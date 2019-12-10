<template>
	<view class="pr_problemdetails" :style="(big==-1)?'':'height:550px;overflow: hidden;'">
		<scroll-view scroll-y="true" >
			<view>
				<view class="rectification">
			<view class="color" :class="(changed==1)?'color_green':'color_red'"></view>
			<text v-if="(changed==1)?false:true">未整改</text>
			<text v-if="(changed==1)?true:false">已整改</text>
		</view>
		<form @submit="takenotes_submit">
			<!-- 页面内黑色大标题p188 -->
		<!-- <view class="basic_headline">
			<text>基础信息</text>
		</view> -->
		<!-- 基础样式p116 -->
		<!-- <view class="basic_problem">
			<view class="basic_container">
				<text class="basic_title">委托人/单位:</text>
				<text class="basic_content">陈志诚</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">房号:</text>
				<text class="basic_content">{{psName}}</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">装修程度:</text>
				<text class="basic_content">精装房</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">建筑面积:</text>
				<text class="basic_content">143㎡</text>
			</view>
			
		</view> -->
		<view class="basic_headline">
			<text>登记问题</text>
		</view>
		<view class="basic_problem">
			<view class="basic_container">
				<text class="basic_title">问题描述:</text>
				<text class="basic_content">房间-墙面-空鼓</text>
				<!-- <text class="basic_content">{{getData[0].pdLoca}}-{{getData[0].pdLocation}}-{{getData[0].pdContent}}</text> -->
			</view>
			<view class="basic_container">
				<text class="basic_title">责任单位:</text>
				<text class="basic_content">深圳xxxx有限公司</text>
			</view>
			<view class="basic_container" style="overflow: inherit; height: 100%;">
				<text class="basic_title">补充说明:</text>
				<text class="basic_content" style="white-space: normal; min-height: 80upx;overflow: inherit;line-height: 40upx;margin-top: 20upx;">{{getData[0].pdAdded==null?'无':getData[0].pdAdded}}</text>
			</view>
				<view class="basic_container2">
					<text class="basic_title">整改前照片:</text>
					<view class="pic_nochange">
						<image class="nochange_img" v-for="(p,index) in showPhotoa" :src="p" mode="aspectFill" @click="previewImg(index)"></image>
					</view>
				</view>
				
				
				
				
				
				<hr style="background-color: #ddd;height: 1px; border: none;">
				<view class="basic_container2" v-if="(changed==1)?true:false">
					<text class="basic_title">复检照片:</text>
					<view class="pic_nochange">
						<image class="nochange_img" v-for="(p,index) in showPhotob" :src="p" mode="aspectFill" @click="previewImg2(index)"></image>
					</view>
				</view>
				
				
				
				
				
				<view class="basic_container2" v-if="(changed==1)?false:true">
					<text class="basic_title">添加复检照片</text>
					<view class="picture">
						<view class="pic_container" v-for="(p,index) in pic">
							<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
							<view class="del" @click="delPic(index)"><image class="del_img" src="/static/delete@2x.png" mode="widthFix"></image></view>
						</view>
						<view class="pic_container" v-for="(v,index) in vde">
							<video v-if="show==1"  class="pic" :src="v" controls :style="(big==-1)?'':(big==index)?'position: fixed; top: 0; left: 0; width: 750upx; margin:0;':'position: fixed; top: -1500upx;'" @play="playVideo(index)"   @pause="pauseVideo" @ended="pauseVideo"></video>
							<view v-show="previewvde==index" style="background-color: black;position: fixed; bottom: 0; left: 0; width: 100%;height: 750upx; z-index: 10;">
								<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
									<button type="warn" style=" width: 100%;" @click="delVideo(index)">重新拍摄/选择</button>
							<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
								</view>
							</view>
						</view>
						<view class="addpic"   @click="addPic">
							<image class="add_img" src="/static/Addto@2x.png" mode="widthFix"></image>
							</view>
					</view>
					</view>
		</view>
		<hr style="background-color: #ddd;height: 1px; border: none;">
			<view class="basic_container">
				<text class="basic_title">登记时间:</text>
				<text class="basic_title">2019-3-26</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">复检时间:</text>
				<text class="basic_title">2019-3-29</text>
			</view>
			<!-- <view class="basic_container">
				<text class="basic_title">承建商:</text>
				<text class="basic_title">南宁大大地产商</text>
			</view> -->
			
			<view class="pr_button" v-if="(changed==1)?false:true">
				<view class="pass" @click="changeState">合格</view>
				<view class="fail" @click="noChangeState">不合格</view>
			</view>
		</form>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			console.log(e)
			if(e.state!=="1"){
				self.changed=1
			}
			self.pdId=e.pdId
			self.psId=e.psId
			self.psName=e.psName
			console.log("selfpdid:"+self.pdId)
			console.log(self.changed)
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			uni.request({
				url: app.globalData.ctx+'/home/problem/rs/problemdescribeList?pdId='+self.pdId,
				method: 'POST',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
					
				},
				success: res => {
					console.log(res)
					self.getData=res.data.rows
					if(self.getData.pdAdded=="null"){
						self.getData.pdAdded="无"
					}
					console.log(self.getData[0].pdPhotoa ) 
					self.piclista=self.getData[0].pdPhotoa.split(",")
					console.log(JSON.stringify(self.piclista[0]))
					console.log(JSON.stringify(self.piclista[1]))
					 if(self.getData[0].pdPhotob!==null){
						self.piclistb=self.getData[0].pdPhotob.split(",")
					 }
					
				},
				fail: () => {},
				complete: () => {
					for (let i = 0; i < self.piclista.length; i++) {
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/getFile?id='+self.piclista[i],
							method: 'GET',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							data: {
								
							},
							success: res => {
								self.showPhotoa.push(res.data.filePath)
								console.log(self.showPhotoa)
							},
							fail: () => {},
							complete: () => {}
						});
					}
					for (let i = 0; i < self.piclistb.length; i++) {
						uni.request({
							url: app.globalData.ctx+'/home/problem/rs/getFile?id='+self.piclistb[i],
							method: 'GET',
							header:{
								'Content-type':'application/json',
								'Cookie':self.cookies
							},
							data: {
								
							},
							success: res => {
								self.showPhotob.push(res.data.filePath)
								console.log(self.showPhotob)
							},
							fail: () => {},
							complete: () => {}
						});
					}
				}
			});
		},
		onShow() {
			
			
		},
		data(){
			return{
				imgList:"",
				pdId:"",
				psId:"",
				psName:"",
				getData:[],
				changed:0,
				pic_index:0,
				pic:[],
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
				piclista:[],
				showPhotoa:[],
				piclistb:[],
				showPhotob:[],
				piclist:[
					"/static/1.jpeg",
					"/static/126.jpg",
					"/static/131.jpg",
					"/static/153.jpg",
					"/static/166.jpg"
					]
			}
		},
		methods:{
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
			previewImg:(index)=>{
				self.preview=self.showPhotoa
				uni.previewImage({
					current:index,
					urls:self.preview
				})
			},
			previewImg2:(index)=>{
				self.preview=self.showPhotob
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
					self.vdebutton=" position: fixed; bottom: 0;width: 100%;transition-duration: 0.2s;";
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
			changeState:()=>{
				if(self.pic[0]==undefined){
					uni.showToast({
					    title: '未添加复检图片',
						icon:"none",
					    duration: 2000
					});
				}else{
				const app = getApp()
				for(let i =0; i<self.pic.length;i++){
					uni.uploadFile({
					       url:app.globalData.ctx+ '/common/uploadFileUnify',
					       fileType: "image", 
					       	header:{
					       		'Content-type':'application/x-www-form-urlencoded',
					       		'Cookie':self.cookies
					       	},
						     name:"files",
					       	filePath:self.pic[i],
					        success: (res) => {
								uni.showToast({
									title: '上传成功'
								});
								
					            console.log(res.data);
								let imgId=JSON.parse(res.data).fileIds
								self.imgList=self.imgList+imgId
								console.log(self.imgList);
								
					        },
							fail: () => {
								uni.showToast({
									title: '上传失败'
								});
							},
							complete:()=>{
								if(i==self.pic.length-1){
									self.imgList=self.imgList.substring(0,self.imgList.length-1)
									console.log(self.imgList)
									uni.request({
										url:app.globalData.ctx+'/home/problem/rs/editProblemdescribeSave',
										header:{
											'Content-type':'application/json',
											'Cookie':self.cookies
										},
										method: 'post',
										data: {
											"pdState":"2",
											"pdId": self.pdId,
											"pdPhotob": self.imgList,
											"psId": self.psId,
										},
										success: res => {
											console.log(res)
											uni.showToast({
											    title: '上传成功',
												icon:'none'
											});
											// uni.redirectTo({
											//     url: 'details' 
											// });
											
										},
										fail: () => { 
											uni.showToast({
											    title: '数据请求错误',
												icon:'none'
											});
											setTimeout(function(){
												uni.hideToast();
											},1000)
										},
										complete: () => {
											uni.navigateBack({
												delta: 1
											});
										}
									});
								}
								
							}
					    });
				}
				}
			},
			noChangeState:()=>{
				if(self.pic[0]==undefined){
					uni.showToast({
					    title: '未添加复检图片',
						icon:"none",
					    duration: 2000
					});
				}
			uni.navigateBack({
				delta: 1
			});
			
			},
			aaa:()=>{
				console.log(self.changed)
			}
			}
	}
</script>

<style>
.rectification{
	width: 100%;
	height: 80upx;
	line-height: 80upx;
	text-indent: 5%;
	}
	.color{
		display: inline-block;
		position: absolute;
		left: 0;
		height: 50upx;
		width: 10upx;
		margin: 15upx 0 15upx 2%;
		border-radius: 50upx;
	}
	.color_red{
		background-color: #eb3226;
	}
	.color_green{
		background-color: #a5d255;
	}
	.color_green text{
		display: inline-block;
		margin-left: 2%;
		vertical-align: top;
	}
.line{
	border-top: 1px solid black;
}
.pr_button{
	height: 130upx;
	background-color: #fff;
	white-space: nowrap;
	}
	.fail{
		display: inline-block;
		height: 90upx;
		width: 40%;
		text-align: center;
		line-height: 90upx;
		border: 1px solid #DDD;
		margin: 20upx 5%;
		border-radius: 10upx;
		color: red;
	}
	.pass{
		display: inline-block;
		height: 90upx;
		width: 40%;
		text-align: center;
		line-height: 90upx;
		border: 1px solid #DDD;
		margin: 20upx 5%;
		border-radius: 10upx;
		color: #FFFFFF;
		background-color: #00B4FF;
	}
</style>

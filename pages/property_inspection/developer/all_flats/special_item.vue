<template>
	<view class="specialitem_container" style="(big==-1)?'':'height:550px;overflow: hidden;'">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="submit">
					<!-- <view class="basic_container">
						<text class="basic_title">项目名称:</text>
						<input class="basic_input"/>
					</view> -->
					<!-- <view class="basic_container">
						<text class="basic_title">单元/楼栋号:</text>
						<input class="basic_input"/>
					</view> -->
					
					<view >
						<view class="add_headline">
						<text>房间:</text>
						<text>{{psName}}</text>
					</view>
					<view class="title">打压时间与压力(Mpa)</view>
					<view class="basic_container">
						<text class="basic_title s">初时:</text>
						<input class="basic_input" name="pseIte"/>
					</view>
					<view class="basic_container">
						<text class="basic_title s">初压:</text>
						<input class="basic_input" name="pseItep"/>
					</view>
					<view class="basic_container">
						<text class="basic_title s">终时:</text>
						<input class="basic_input" name="pseWtf"/>
					</view>
					<view class="basic_container">
						<text class="basic_title s">终压:</text>
						<input class="basic_input" name="pseTfp"/>
					</view>
					<view class="basic_container">
						<text class="basic_title s">降压值:</text>
						<input class="basic_input" name="pseBuck"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">结果:</text>
						<input class="basic_input" name="pseResults"/>
					</view>
					<view class="basic_container2">
						<text class="basic_title">备注:</text>
						<textarea class="textarea" value="" name="pseNote" />
					</view>
					<view class="basic_container2">
						<text class="basic_title">上传照片/视频(可选五张)</text>
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
					<!-- <view class="add_button" @click="addnotes">
							<text>添加</text>
						</view> -->
					
					<button class="submit" form-type="submit">提交</button>
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
				self.psId=e.psId;
				self.psName=e.psName;
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("治理获取到cookies值为:"+self.cookies);
			    }
			});
		},
		data(){
			return{
				psName:"",
				psId:"",
				cookies:"",
				imgList:[],
				imgIds:"",
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
				note:1
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
				self.preview[0]=self.pic[index];
				uni.previewImage({
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
			takenotes_submit:(e)=>{
				console.log(e);
			},
			addnotes:()=>{
				self.note++;
				self.takenotes.push(self.note)
				uni.showToast({
					title: '添加完成'
				});
				console.log(self.takenotes)
			},
			submit:(e)=>{
				console.log(e)
				const app = getApp()
				console.log(app.globalData.ctx)
				
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
									self.imgList[i]={};
									
									let imgId=JSON.parse(res.data).fileIds
									console.log("获取到fileid为:"+imgId);
									self.imgIds=self.imgIds+imgId
									console.log(self.imgIds)
									
									// imgId=imgId.substring(0,imgId.length-1)
									// self.imgList[i].id=imgId;
									
									// let imgNames=JSON.parse(res.data).fileNames
									// console.log("获取到fileNames为:"+imgNames);
									// imgNames=imgNames.substring(0,imgNames.length-1)
									// self.imgList[i].name=imgNames;
									
									// let imgSizes=JSON.parse(res.data).sizes
									// console.log("获取到fileNames为:"+imgSizes);
									// imgSizes=imgSizes.substring(0,imgSizes.length-1)
									// self.imgList[i].size=imgSizes;
									
									// let imgPath=JSON.parse(res.data).urls
									// console.log("获取到fileNames为:"+imgPath);
									// imgPath=imgPath.substring(0,imgPath.length-1)
									// self.imgList[i].filePath=imgPath;
									
									// self.imgList[i].attType="1";
									
						        },
								fail: () => {
									uni.showToast({
										title: '上传失败'
									});
								},
								complete:()=>{
									if(i==self.pic.length-1){
										self.imgIds=self.imgIds.substring(0,self.imgIds.length-1)
										console.log(self.imgIds)
										console.log(e.detail.value)
										
										uni.request({
											url:app.globalData.ctx+ '/home/problem/rs/addProblemSpecialSave',
											header:{
												'Content-type':'application/json',
												'Cookie':self.cookies
											},
											method: 'post',
											data: {
												"psId": self.psId,
													"pseBuck": e.detail.value.pseBuck,
													"pseFiles":self.imgIds ,
													"pseIte": e.detail.value.pseIte,
													"pseItep": e.detail.value.pseItep,
													"pseNote": e.detail.value.pseNote,
													"pseResults": e.detail.value.pseResults,
													"pseTfp": e.detail.value.pseTfp,
													"pseWtf": e.detail.value.pseWtf
											},
											success: res => {
												console.log(res)
												uni.showToast({
												    title: '数据请求成功',
													icon:'none'
												});
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
											complete: () => {}
										});
									}
									
								}
						    });
					}
					uni.navigateBack({
						delta: 1
					});
			}
		}
	}
</script>

<style>
	.add_button{
	width: 20%;
	float: right;
	margin-right: 5%;
	background-color: #00B4FF;
	color: #fff;
	border-radius: 10upx;
	margin-top:2% ;
	text-align: center; 
	}
	.submit{
		width: 550upx;
		margin: 80upx 100upx 0 100upx;
		background-color: #00B4FF!important;
		color: #fff;
	}
</style>

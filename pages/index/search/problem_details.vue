<template>
	<view class="pr_problemdetails">
		<view class="rectification" @click="aaa">
			<view>|</view>
			<text v-if="(changed==1)?false:true">未整改</text>
			<text v-if="(changed==1)?true:false">已整改</text>
		</view>
		<form @submit="takenotes_submit">
			<!-- 页面内黑色大标题p188 -->
		<view class="basic_headline">
			<text>基础信息</text>
		</view>
		<!-- 基础样式p116 -->
		<view class="basic_problem">
			<view class="basic_container">
				<text class="basic_title">委托人/单位</text>
				<text class="basic_content">陈志诚</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">项目名称</text>
				<text class="basic_content">8号楼房间和公区查验</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">单元房号</text>
				<text class="basic_content">8号楼房间-5-1-501</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">装修程度</text>
				<text class="basic_content">精装房</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">建筑面积</text>
				<text class="basic_content">143㎡</text>
			</view>
			
		</view>
		<view class="basic_headline">
			<text>登记问题</text>
		</view>
		<view class="basic_problem">
			<view class="basic_container">
				<text class="basic_title">主体</text>
				<text class="basic_content">客厅</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">检查项</text>
				<text class="basic_content">墙壁</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">问题描述</text>
				<text class="basic_content">墙壁掉粉、脱皮</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">补充说明</text>
				<text class="basic_content"> </text>
			</view>
				<view class="basic_container2">
					<text class="basic_title">整改前照片</text>
					<view class="pic_nochange">
						<image class="nochange_img" v-for="(p,index) in piclist" :src="p" mode="aspectFill" @click="previewImg(index)"></image>
					</view>
					<text class="basic_title">复检照片</text>
					<view class="picture">
						<view class="pic_container" v-for="(p,index) in pic">
							<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
							<view class="del" @click="delPic(index)"><view>x</view></view>
						</view>
						<view class="addpic"   @click="addPic"><text>+</text></view>
					</view>
					</view>
		</view>
			<view class="basic_container">
				<text class="basic_title">登记时间</text>
				<text class="basic_title">2019-3-26</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">承建商</text>
				<text class="basic_title">南宁大大地产商</text>
			</view>
			<view class="basic_container">
				<text class="basic_title">责任单位</text>
				<text class="basic_title">南宁大大地产商</text>
			</view>
			<view class="pr_button" v-if="(changed==1)?false:true">
				<view class="pass" open-type="navigateBack" @click="changeState">合格</view>
				<navigator class="fail" url="fail">不合格</navigator>
			</view>
		</form>
	</view>
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			console.log(e)
			self.changed=e.changed;
			console.log(self.changed)
		},
		data(){
			return{
				changed:0,
				pic_index:0,
				pic:[],
				preview:[],
				del:[],
				wh:"",
				takenotes:[1],
				note:1,
				piclist:[
					"../../../static/1.jpeg",
					"../../../static/126.jpg",
					"../../../static/131.jpg",
					"../../../static/153.jpg",
					"../../../static/166.jpg"
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
										if(self.pic_index>4){
											console.log("aa")
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
									self.pic[self.pic_index]=res;
									self.pic_index++;
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
			previewImg:(index)=>{
				self.preview[0]=self.piclist[index]
				uni.previewImage({
					urls:self.preview
				})
			},
			changeState:()=>{
				self.changed=1;
				uni.$emit('state',{changed:1});
				uni.navigateBack({})


			},
			aaa:()=>{
				console.log(self.changed)
			}
			}
	}
</script>

<style>
</style>

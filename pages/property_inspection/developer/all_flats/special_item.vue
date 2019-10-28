<template>
	<view class="specialitem_container">
		<scroll-view scroll-y="true" >
			<view>
				<form @submit="">
					<view class="basic_container">
						<text class="basic_title">项目名称</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">单元/楼栋号</text>
						<input class="basic_input"/>
					</view>
					
					<view v-for="n in takenotes">
						<view class="add_headline">
						<text>房间{{n}}</text>
						<view class="add_button" @click="addnotes"><text>+</text></view>
					</view>
					<view class="title">打压时间与压力(Mpa)</view>
					<view class="basic_container">
						<text class="basic_title">初时:</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">初压:</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">终时:</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">终压:</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">降压值:</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container">
						<text class="basic_title">结果</text>
						<input class="basic_input"/>
					</view>
					<view class="basic_container2">
						<text class="basic_title">备注</text>
						<textarea class="textarea" value="" :name="'moreinfo'+note" />
						<text class="basic_title">上传图片</text>
						<view class="picture">
							<view class="pic_container" v-for="(p,index) in pic">
								<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
								<view class="del" @click="delPic(index)"><view>x</view></view>
							</view>
							<view class="addpic"   @click="addPic"><text>+</text></view>
						</view>
						</view>
					</view>
					
					
					<button form-type="submit">Submit</button>
				</form>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	var self;
	export default{
		onLoad() {
			self=this;
		},
		data(){
			return{
				
				pic_index:0,
				pic:[],
				preview:[],
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
			playVideo:()=>{
				self.wh="width: 750upx;height: 750upx;position: absolute; top:600upx;left:0;;z-index:20;"
				
			},
			endVideo:()=>{
				self.wh="";
			},
			takenotes_submit:(e)=>{
				console.log(e);
			},
			addnotes:()=>{
				self.note++;
				self.takenotes.push(self.note)
				console.log(self.takenotes)
			}
		}
	}
</script>

<style>
</style>

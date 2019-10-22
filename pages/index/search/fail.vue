<template>
	<!-- 不合格页面p899 -->
	<view class="fail_container">
		<form @submit="failSubmit">
			<view class="basic_container2">
				<text class="basic_title">不合格原因</text>
				<textarea class="textarea" value="" name="whyfail" />
				<text class="basic_title">添加照片(可选五张)</text>
				<view class="picture">
					<view class="pic_container" v-for="(p,index) in pic">
						<image class="pic" :src="p" mode="aspectFill" @click="previewPic(index)"></image>
						<view class="del" @click="delPic(index)"><view>x</view></view>
					</view>
					<view class="addpic"   @click="addPic"><text>+</text></view>
				</view>
				</view>
			<button class="submit" type="primary" form-type="submit" @click="navigateBack">提交</button>
		</form>
		
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
			failSubmit:(e)=>{
				console.log(e)
			},
			navigateBack:()=>{
				uni.navigateBack({
					delta:2
				})
			}
		}
	}
</script>

<style>
</style>

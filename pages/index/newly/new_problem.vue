<template>
	<view>
		<view class="choice" >
		<scroll-view class="left" scroll-y="true">
			<view class="list_title" >{{main}}</view>
			<view class="list_title" >{{item}}</view>
			<view class="list_title" >{{describe}}</view>
		</scroll-view>
		<scroll-view class="right"  scroll-y="true">
			<view class="list_content" v-for="m in array4"  @click="choiceMain(m)">{{m}}</view>
		</scroll-view>
	</view>
	</view>
	
</template>

<script>
	var self;
	export default{
		onLoad() {
			self=this;
			self.array4=self.array1;
		},
		data(){
			return{
				array1:[
					"客厅","房间","厨房","厕所"
				],
				array2:[
					"墙纸","电器设施","墙面","石材、瓷砖","木地板","渗漏类","天花","窗","墙纸","电器设施","墙面","石材、瓷砖","木地板","渗漏类","天花","窗"
				],
				array3:[
					"不平整","长毛、发霉","涂料破损","开裂","空鼓","其他",
				],
				array4:[
					"客厅","房间","厨房","厕所"
				],
				index_p:0,
				main:"部位",
				item:"部品",
				describe:"问题",
				obj:{},
				companys:[
					"深圳xxxx有限公司11",
					"深圳xxxx有限公司12",
					"深圳xxxx有限公司13",
					"深圳xxxx有限公司14",
					"深圳xxxx有限公司25",
					"深圳xxxx有限公司26",
					"深圳xxxx有限公司27",
					"深圳xxxx有限公司28",
				]
			}
			
		},
		methods:{
			choiceCompany:(e)=>{
				console.log(e)
				uni.$emit('company',{msg:e})
				uni.navigateBack({
					delta: 1
				});
			},
			choiceMain:(m)=>{
				console.log(m)
				console.log(self.index_p)
				if(self.index_p==0){
					self.main=m
					self.array4=self.array2
					self.index_p++
					self.obj.main=m
					console.log(self.obj)
					return
				}
				if(self.index_p==1){
					self.item=m
					self.array4=self.array3
					self.index_p++
					self.obj.item=m
					console.log(self.obj)
					return
				}
				if(self.index_p==2){
					self.describe=m
					self.index_p++
					self.pr=self.main+"-"+self.item+"-"+self.describe
					self.obj.describe=m
					console.log(self.obj)
					uni.$emit('problem',{msg:self.obj})
					uni.navigateBack({
						delta: 1
					});
				}
			},
		}
	}
</script>

<style>
	.choice{
		display: flex;
		width: 750upx;
		height: 100vh;
		z-index: 100;
		background-color: #fff;
		border: #00B4FF 1px solid;
	}
	.choice .left{
		width: 40%;
		display: flex;
		height: 100vh;
		border: #00B4FF 1px solid;
	}
	.choice .left .list_title{
		display: flex;
		width: 100%;
		height: 15vh;
		line-height: 15vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border: red 1px solid;
	}
	.choice .right{
		display: flex;
		height: 100vh;
		border: #4CD964 1px solid;
		width: 60%;
	}
	.choice .right .list_content{
		display: flex;
		width: 100%;
		height: 10vh;
		line-height: 10vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border: pink 1px solid;
	}
</style>

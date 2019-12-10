<template>
	<view>
		<view class="choice" >
		<scroll-view class="left" scroll-y="true">
			<view class="list_title" :class="cho1" @click="clickMain" >{{main}}</view>
			<view class="list_title" :class="cho2" @click="clickItem" >{{item}}</view>
			<view class="list_title" :class="cho3" @click="clickDescribe" >{{describe}}</view>
		</scroll-view>
		<scroll-view class="right"  scroll-y="true">
			<view class="list_content" v-for="m in array4"  @click="choiceMain(m)":style="(m==main||m==item||m==describe)?'color:#00b4ff':''">{{m}}</view>
		</scroll-view>
	</view>
	</view>
	
</template>

<script>
	var self;
	export default{
		onLoad(e) {
			self=this;
			self.array4=self.array1;
			self.cho1="active"
			self.lock1=true
			console.log(JSON.stringify(e))
			if(e.main!==""){
				self.main=e.main
				self.item=e.item
				self.describe=e.describe
				self.obj.main=e.main
				self.obj.item=e.item
				self.obj.describe=e.describe
				self.cho1="selected"
				self.cho2="selected"
				self.cho3="active"
				self.array4=self.array3
				self.lock1=false
				self.lock2=false
				self.lock3=true
			}
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
				array4:[],
				index_p:0,
				main:"部位",
				item:"部品",
				describe:"问题",
				cho1:"",
				cho2:"",
				cho3:"",
				obj:{},
				lock1:false,
				lock2:false,
				lock3:false,
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
				if(self.lock1==true){
					self.main=m
					self.array4=self.array2
					self.index_p++
					self.lock1=false
					self.lock2=true
					self.obj.main=m
					self.cho1="selected"
					self.cho2="active"
					console.log(self.obj)
					return
				}
				if(self.lock2==true){
					self.item=m
					self.array4=self.array3
					self.index_p++
					self.lock2=false
					self.lock3=true
					self.obj.item=m
					self.cho1="selected"
					self.cho2="selected"
					self.cho3="active"
					console.log(self.obj)
					return
				}
				if(self.lock3==true){
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
			clickMain:()=>{
				self.array4=self.array1
				self.cho1="active"
				self.cho2=""
				self.cho3=""
				self.lock1=true
				self.lock2=false
				self.lock3=false
			},
			clickItem:()=>{
				if(self.item!=="部品"){
					self.array4=self.array2
					self.cho1="selected"
					self.cho2="active"
					self.cho3=""
					self.lock1=false
					self.lock2=true
					self.lock3=false
				}
			},
			clickDescribe:()=>{
				if(self.describe!=="问题"){
					self.array4=self.array3
					self.cho1="selected"
					self.cho2="selected"
					self.cho3="active"
					self.lock1=false
					self.lock2=false
					self.lock3=true
				}
				
			}
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
	}
	.choice .left{
		width: 40%;
		display: flex;
		height: 100vh;
	}
	.choice .left .list_title{
		display: flex;
		width: 310upx;
		height: 15vh;
		line-height: 15vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border-bottom: #ddd 1px solid;
		color: #999;
		background-image: #fff;
		background-position-x: -300upx;
		background-repeat: no-repeat;
	}
	.choice .right{
		display: flex;
		height: 100vh;
		width: 60%;
		border: #ddd 1px solid;
	}
	.choice .right .list_content{
		display: flex;
		width: 100%;
		height: 10vh;
		line-height: 10vh;
		justify-content : center;
		color: #333;
		font-size: 35upx;
		border-bottom: #ddd 1px solid;
	}
	.active{
		background-image: linear-gradient(to right , #bbe1fb, #00b4ff)!important;
		color: #fff!important;
		transition: .4s;
		background-position-x: 1upx!important;
	}
	.selected{
		color: #333!important;
	}
</style>

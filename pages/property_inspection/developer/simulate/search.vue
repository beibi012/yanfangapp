<template>
	<!-- 搜索页面p617 -->
	<view class="search_container">
		<view class="app_top" style="height: 100upx;"></view>
		<view class="search_nav">
			<view class="top"></view>
			<navigator class="back"  open-type="navigateBack">
				<image style="width: 25upx;height: 25upx;" src="/static/back.png" mode="widthFix"></image>
			</navigator>
			<view class="searchnav_container">
				<!-- 搜索框样式p317 -->
				<view class="search_cont">
				<view class="search_left">
					<image class="search_icon" src="/static/search@2x.png" mode="widthFix"></image>
				</view>
				<input class="search" type="text" value="" placeholder="请输入责任方/关键字"  placeholder-style="color:#ccc;" adjust-position="false" @input="searchCompany"/>
				<view class="search_right"></view>
			</view>
			</view>
			<view class="search_button">搜索</view>
		</view>
			<!-- 搜索内容p708 -->
			<scroll-view class="content_container" scroll-y="true">
				<view class="search_c" v-for="company in companys" @click="choiceCompany(company)">
					<view class="black">{{company}}</view>
					<view class="grey">{{company}}</view>
				</view>
				<view class="tip" v-show="nosearch">
					未搜索到相关内容
				</view>
			</scroll-view>
			

	</view>
</template>

<script>
	var self;
	export default{
		
		onLoad() {
			self=this;
			self.companys=self.allcompanys
		},
		data(){
			return{
				nosearch:false,
				companys:[],
				allcompanys:[
					"深圳石材有限公司11",
					"深圳地板有限公司12",
					"深圳渗漏有限公司13",
					"深圳天花有限公司14",
					"深圳窗有限公司25",
					"深圳电器有限公司26",
					"深圳墙纸有限公司27",
					"深圳墙面有限公司28",
					"深圳石材有限公司11",
					"深圳地板有限公司12",
					"深圳渗漏有限公司13",
					"深圳天花有限公司14",
					"深圳窗有限公司25",
					"深圳电器有限公司26",
					"深圳墙纸有限公司27",
					"深圳墙面有限公司28",
					"深圳石材有限公司11",
					"深圳地板有限公司12",
					"深圳渗漏有限公司13",
					"深圳天花有限公司14",
					"深圳窗有限公司25",
					"深圳电器有限公司26",
					"深圳墙纸有限公司27",
					"深圳墙面有限公司28",
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
			searchCompany:(e)=>{
				console.log(e.detail.value)
				
				let search=new Array;
				for (var i = 0; i < self.allcompanys.length; i++) {
					if(self.allcompanys[i].search(e.detail.value)!==-1){
						console.log(self.allcompanys[i])
						search.push(self.allcompanys[i])
					}
				}
				console.log(search)
				self.companys=search
				if(self.companys==""){
					self.nosearch=true;
				}else{
					self.nosearch=false;
				}
				// if(e.detail.value==""){
				// 	self.companys=self.allcompanys
				// 	console.log("999")
				// }
			}
		}
	}
</script>

<style>
	.content_container{
		width: 100%;
		height: 90vh;
	}
	.search_c{
		height: 12vh;
		width: 100%;
		font-size: 35upx;
		text-indent: 5%;
		border-bottom: #ddd 1px solid;
		
	}
	.search_c:first-child{
		border-top: #ddd 1px solid;
	}
	.search_c .black{
		height: 6vh;
		width: 100%;
		line-height: 8vh;
		color: #333;
		font-weight: 800;
	}
	.search_c .grey{
		height: 6vh;
		width: 100%;
		line-height: 4vh;
		color: #999;
	}
	.tip{
		height: 10vh;
		width: 100%;
		line-height: 10vh;
		color: #999;
		text-align: center;
	}
</style>

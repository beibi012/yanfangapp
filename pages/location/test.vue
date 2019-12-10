<template>
	<view class="aaa">
		<view class="bbb">
			
			<image src="http://192.168.0.110:8080/profile/upload/2019/11/17/f57bcfffcd9d9ec69ae4e685eaba985e.jpg" style="width: 500upx; height: 500upx;" mode="widthFix"></image>
		</view>
	</view>
</template>


<script>
	var self;
	export default{
		onLoad(){
			self=this;
			uni.getStorage({
			    key: 'cookies',
			    success: function (res) {
					self.cookies=res.data;
					console.log("监测获取到cookies值为:"+self.cookies);
			    }
			});
			const app = getApp()
			uni.request({
				url: app.globalData.ctx+'/common/download2?fileName=',
				method: 'GET',
				header:{
					'Content-type':'application/json',
					'Cookie':self.cookies
				},
				data: {
					
				},
				success: res => {
					console.log(res)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		data(){
			return{
				small:"width: 100upx; height: 100upx;",
				hh:0,
				dz:["../../static/666.mp4"],
				n1:"",
				n2:"",
				color:"",
				po:" position: fixed; bottom: -250upx;width: 100%;"
				
			}
		},
		methods:{
			big:(e)=>{
				console.log(e)
				self.small="width: 750upx; height: 750upx; z-index: 100;"
				self.hh=1
				self.po=" position: fixed; bottom: -250upx;width: 100%;transition-duration: 0.2s; "
			},
			s:()=>{
				self.small="width: 100upx; height: 100upx;"
				self.hh=0
				// self.dz=""
				// setTimeout(()=>{
				// 	self.dz="../../static/555.mp4"
				// },50)
			},
			fn1:()=>{
				console.log("执行了fn1")
				console.log("n1:"+self.n1)
				console.log("n2:"+self.n2)
				if(parseInt(self.n1)>parseInt(self.n2)){
					self.color="color:red;"
					console.log(self.color)
				}
			},
			request:()=>{
				//
				uni.getStorage({
				    key: 'cookies',
				    success: function (res) {
						self.cookies=res.data;
						console.log("监测获取到cookies值为:"+self.cookies);
				    }
				});
				const app = getApp()
				uni.request({
					url: app.globalData.ctx+'/home/homeMeasure/add',
					method: 'POST',
					header:{
						'Content-type':'application/json',
						'Cookie':self.cookies
					},
					data: {
						
					},
					success: res => {
						console.log(res)
					},
					fail: () => {},
					complete: () => {}
				});
				//
			}
			
		}
	}
</script>

<style>
	.aaa{
		border: #007AFF 5px solid;
		height: 700upx;
		width: 700upx;
	}
	.bbb{
		border: black 5px solid;
		width: 50vw;
		height: 100vh;
	}
</style>
<video v-if="show==1" class="pic" :src="v" controls poster="../../../static/166.jpg" :style="vdecss" @play="playVideo" @pause="pauseVideo" @ended="pauseVideo"></video>
							<view v-show="previewvde==1" style="background-color: black; height: 750upx;position: fixed; bottom: 0; left: 0; width: 100%; z-index: 10;">
								<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
									<button type="warn" style=" width: 100%;" @click="s">重新拍摄/选择</button>
							<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
								</view>
								</view>
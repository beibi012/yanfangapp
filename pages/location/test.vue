<template>
	<view style="background-color: #4CD964; height: 1500upx;">
		<view v-for="v in dz"style="margin: 10%;">
			<video :src="v" controls :style="small" @play="big" @pause="pa"></video>
		<view v-show="hh==1" style="background-color: black; height: 750upx;position: fixed; bottom: 0;width: 100%; z-index: 0;">
			<view :style="po"><!-- position: fixed; bottom: 0;width: 100%; -->
				<button type="warn" style=" width: 100%;" @click="s">重新拍摄/选择</button>
		<button type="primary" style="width: 100%;" @click="s">退出预览</button>
			</view>
		</view>
		</view>
		
	</view>
</template>


<script>
	var self;
	export default{
		onLoad(){
			self=this;
		},
		data(){
			return{
				small:"width: 100upx; height: 100upx;",
				hh:0,
				dz:["../../static/666.mp4"],
				
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
			pa:()=>{
				self.po=" position: fixed; bottom: 0;width: 100%;transition-duration: 0.2s; "
			}
			
		}
	}
</script>

<style>
</style>
<video v-if="show==1" class="pic" :src="v" controls poster="../../../static/166.jpg" :style="vdecss" @play="playVideo" @pause="pauseVideo" @ended="pauseVideo"></video>
							<view v-show="previewvde==1" style="background-color: black; height: 750upx;position: fixed; bottom: 0; left: 0; width: 100%; z-index: 10;">
								<view :style="vdebutton"><!-- position: fixed; bottom: 0;width: 100%; -->
									<button type="warn" style=" width: 100%;" @click="s">重新拍摄/选择</button>
							<button type="primary" style="width: 100%;" @click="stopVideo">退出预览</button>
								</view>
								</view>
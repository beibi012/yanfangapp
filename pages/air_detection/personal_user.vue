<template>
	<view>
		<!-- 内容列表 -->
		<view class="pi_container">
			<navigator v-for="e in list" class="icon_container" :url="e.url">
				<image :style="load?'':'display: none;'" :src="e.src" mode="widthFix"></image>
				<text>{{e.name}}</text>
			</navigator>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		onReady() {
			this.load=true;
		},
		data() {
			return {
				load:false,
				list:[
					{name:"监测",url:"survey",src:"/static/Monitor@2x.png"},
					{name:"治理",url:"govern",src:"/static/Government@2x.png"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>

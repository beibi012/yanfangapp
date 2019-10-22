<template>
	<view>
		<!-- 内容列表 -->
		<view class="pi_container">
			<navigator class="icon_container" v-for="e in list" :url="e.url" animation-type="pop-in" animation-duration="300">
			<image :src="e.src" mode="widthFix"></image>
			<text>{{e.name}}</text>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:"监测",url:"survey",src:"../../static/131.jpg"},
					{name:"治理",url:"govern",src:"../../static/126.jpg"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>

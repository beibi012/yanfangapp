<template>
	<view class="property_inspection">
		<view class="app_top"></view>
		<view class="navtop">
			<navigator class="navtop_head" url="">
				<image src="../../static/166.jpg" mode="widthFix"></image>
			</navigator>
			<navigator class="navtop_location" url="">
				<view class="location_textc">
					<text>广西壮族自治区南宁市西乡塘区</text>
					</view>
				<image src="../../static/153.jpg" mode="widthFix"></image>
			</navigator>
		</view>
		<view v-for="e in developer">
			<navigator class="developer" :url="'developer/developer?name='+e.name">
			<image class="developer_icon" src="../../static/169.jpg" mode="widthFix"></image>
			<view class="developer_name">{{e.name}}</view>
		</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				developer:[
					{name:"万科城",img:"",url:""},
					{name:"精通瑞城",img:"",url:""},
					{name:"天健城",img:"",url:""}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

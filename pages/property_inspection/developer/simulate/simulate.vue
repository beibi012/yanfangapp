<template>
	<view class="simulate_container">
		<navigator class="simulate_list" v-for="e in flatslist" :url="'all_states?number='+e.number+'&unit='+e.unit">
			<view class="list_content">{{e.number}}号楼房间-{{e.unit}}单元</view>
			<view class="list_button">{{e.button}}</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				flatslist:[
					{number:8,unit:1,button:"上传"},
					{number:8,unit:2,button:"上传"},
					{number:8,unit:3,button:"上传"},
					{number:8,unit:4,button:"上传"},
					{number:9,unit:1,button:"上传"},
					{number:9,unit:2,button:"上传"},
					{number:9,unit:3,button:"上传"},
					{number:9,unit:4,button:"上传"}
				]
			}
		}
	}
</script>

<style>
</style>

<script>
	// const app = getApp()
	// console.log(app.globalData.ctx)
	export default {
		data(){
			return{
				
			}
		},
		globalData: {  
			navtop_headportrait:"../../static/166.jpg",
			// ctx:"http://192.168.0.18:8086",
			// ctx:"http://192.168.0.110:8080",
			ctx:"http://www.elab123.com/inspectionroom"
		        },
		onLaunch: function() {
			console.log(this)
			uni.clearStorage();
			uni.getLocation({
				type:"gcj02",
				geocode:true,
				success: function (res) {
					console.log('当前位置的地址信息：' + res.address.province);
					console.log('当前位置的地址信息：' + res.address.city);
					console.log('当前位置的地址信息：' + res.address.district);
					console.log('当前位置的地址信息：' + res.address.street);
					uni.setStorage({
					    key: 'province',
					    data: res.address.province
					});
					uni.setStorage({
					    key: 'city',
					    data: res.address.city
					});
					uni.setStorage({
					    key: 'district',
					    data: res.address.district
					});
					uni.setStorage({
					    key: 'street',
					    data: res.address.street
					});
					
				    }
			});
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "global.scss"
	/*每个页面公共css */
</style>

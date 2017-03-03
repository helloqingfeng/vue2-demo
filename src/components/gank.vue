<template>
	<div class="container text-center">
		<vue-pages :url="url1" :total="total" :counts="counts" :current="current" :fn="fn1"></vue-pages>
		<div id="goTopBtn" v-on:click="goTop" style="display:none;z-index:100;"><img src="../assets/go_top.gif"></div>
		<ul class="list-group" v-for="(product, index) in products">
			<li	class="list-group-item" v-if="index>=(current-1)*pagesize&&index<current*pagesize">
				<h2 class="text-center">{{product.desc}}</h2>
				<p><img v-bind:src="product.url" class="img-responsive" style="margin:0 auto;width:900px;"></p>
			</li>
		</ul>
		<vue-pages :url="url1" :total="total" :counts="counts" :current="current" :fn="fn1"></vue-pages>
	</div>
</template>

<script>
	import vuePages from 'vue-pages'
	import $ from 'jquery'
	export default{
		data:function () {
			return{
				products:[],
				url1: '#',
				pageName:'p',
				total: 7,
				counts: 10,
				current: 1,
				pagesize:8
			}
		},
		created:function () {
			this.getImage();
		},
		mounted: function () {
			$(window).scroll(function(){
				var sc=$(window).scrollTop();
				console.log(sc);
				if(sc>300){
					$("#goTopBtn").css("display","block")
					.css("position","fixed")
					.css("right","7px")
					.css("bottom","30px");
				}else{
					$("#goTopBtn").css("display","none");
				}
			})
		},
		methods:{
			getImage: function() {
				var that=this;
				that.$http({
					methods:'GET',
					url:"http://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1"
				}).then(
				function(response){
					this.products=response.data.results;
				},function(error){
				// error
			})
			},
			goTop: function() {
				$('body,html').animate({scrollTop:0},500);
			},
			fn1 (d, e) {
				e.preventDefault()
				this.current = d
			}
		},
		components: {
			vuePages
		}
	}
</script>
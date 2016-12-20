<template>
	<div class="container text-center">
		<vue-pages :url="url1" :total="total" :counts="counts" :current="current" :fn="fn1"></vue-pages>
		<button class="btn btn-success" v-on:click="returnTop" v-show="showTop" id="topbtn">回到顶部</button>
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
		data(){
			return{
				products:[],
				url1: '#',
				pageName:'p',
				total: 4,
				counts: 10,
				current: 1,
				pagesize:8,
				showTop:true
			}
		},
		created:function(){
			this.getImage()
		},
		mounted: function() {
			this.$nextTick(function(){
					$(window).on('scroll', function() {
				if($(window).scrollTop()>1500){
					this.showTop = true;
					$('#topbtn').css('top',$(window).scrollTop());
				}else{
					this.showTop = false;
				}
			})
			})

		},
		methods:{
			getImage:function(){
				var that=this;
				that.$http({
					methods:'GET',
					url:"http://gank.io/api/data/%E7%A6%8F%E5%88%A9/30/1"
				}).then(
				function(response){
					this.products=response.data.results;
				},function(error){
				// error
			})
			},
			returnTop : function() {
				$(window).scrollTop(0);
				this.showTop = false;
			},
			fn1(d, e){
				e.preventDefault()
				this.current = d
			}
		},
		components: {
			vuePages
		}
	}
</script>

<style>
	#topbtn{
		position: absolute;
		right: 10px;
	}
</style>
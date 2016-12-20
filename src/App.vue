<template>
	<div id="app">
		<Hello></Hello>
		<div class="container app-bottom">
			<ul class="nav nav-pills" role="tablist">
				<router-link tag="li" to='/' ><a>首页</a></router-link>
				<router-link tag="li" to='/second' active-class="active"><a>Vue介绍</a></router-link>
				<router-link tag="li" to='/third'  active-class="active"><a>Vue特点</a></router-link>
				<router-link tag="li" to='/fourth' active-class="active"><a>电子时钟</a></router-link>
				<router-link tag="li" to='/fifth' active-class="active"><a>CNode主题</a></router-link>
				<router-link tag="li" to='/sixth' active-class="active"><a>热映电影</a></router-link>
				<router-link tag="li" to='/gank' active-class="active"><a>干货福利</a></router-link>
				<router-link tag="li" to='/swiper' active-class="active"><a>轮播风景</a></router-link>
			</ul>
			<transition>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
			<Foot></Foot>
		</div>
	</div>
</template>

<script>
	import Hello from './components/hello'
	import Foot from './components/Foot'
	export default {
		components: {Hello,Foot}
	}
</script>

<style>
	#app{
		color: #2c3e50;
		margin-top: 60px
	}
	.app-bottom ul{
		margin-bottom:20px;
		margin-top: 5px;
	}
</style>

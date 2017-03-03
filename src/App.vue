<template>
	<div id="app">
		<div class="container navbox">
			<ul class="nav nav-pills navradius" role="tablist">
				<router-link tag="li" to='/' ><a>首页</a></router-link>
				<router-link tag="li" to='/second' active-class="active"><a>Vue介绍</a></router-link>
				<router-link tag="li" to='/third'  active-class="active"><a>Vue特点</a></router-link>
				<router-link tag="li" to='/fifth' active-class="active"><a>CNode主题</a></router-link>
				<router-link tag="li" to='/sixth' active-class="active"><a>热映电影</a></router-link>
				<router-link tag="li" to='/gank' active-class="active"><a>干货福利</a></router-link>
				<router-link tag="li" to='/fourth' active-class="active"><a>电子时钟</a></router-link>
				<router-link tag="li" to='/swiper' active-class="active"><a>轮播风景</a></router-link>
				<router-link tag="li" to='/about' active-class="active"><a>关于我</a></router-link>
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
	import Foot from './components/Foot'
	export default {
		components: {Foot}
	}
</script>

<style>
	#app{
		color: #2c3e50;
	}
	ul.navradius{
		margin-bottom:20px;
		margin-top: 10px;
		background-color: #080707;
	}
	ul.navradius li>a{
		border-radius: 0;
		padding: 16px;
		font-size: 16px;
		font-weight: 500;
	}
</style>

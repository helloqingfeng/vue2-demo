<template>
	<div id="swiper">
		<h1 class="text-center text-success">美丽的风景</h1>
		<div class="container-fluid" style="height:800px;">
			<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
				<swiper-slide style="background-image:url(../static/img/kennedy_meadows_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/yosemite_national_park_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/mount_rainier.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/snoqualmie_pass_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/three_sisters_wilderness_0.jpg)"></swiper-slide>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
			</swiper>
			<!-- swiper2 Thumbs -->
			<swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
				<swiper-slide style="background-image:url(../static/img/thumbs/kennedy_meadows_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/thumbs/yosemite_national_park_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/thumbs/mount_rainier.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/thumbs/snoqualmie_pass_0.jpg)"></swiper-slide>
				<swiper-slide style="background-image:url(../static/img/thumbs/three_sisters_wilderness_0.jpg)"></swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOptionTop: {
					notNextTick: true,
					autoplay : 1500,
					loopAdditionalSlides : 1,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					spaceBetween: 10
				},
				swiperOptionThumbs: {
					notNextTick: true,
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 'auto',
					touchRatio: 0.2,
					slideToClickedSlide: true
				}
			}
		},
		mounted() {
			const swiperTop = this.$refs.swiperTop.swiper
			const swiperThumbs = this.$refs.swiperThumbs.swiper
			swiperTop.params.control = swiperThumbs
			swiperThumbs.params.control = swiperTop
		}
	}
</script>

<style scoped>
	#swiper h1{
		/*text-shadow: 10px 5px 5px #ccc;*/
		font-weight: 600;
		opacity: 0.9;
		text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8),6px 6px rgba(197, 223, 248,0.8);
	}
	.swiper-container {
		background-color: #000;
	}
	.swiper-slide {
		background-size: cover;
		background-position: center;
	}
	.gallery-top {
		height: 80%!important;
		width: 100%;
	}
	.gallery-thumbs {
		height: 20%!important;
		box-sizing: border-box;
		padding: 10px 0;
	}
	.gallery-thumbs .swiper-slide {
		width: 25%;
		height: 100%;
		opacity: 0.4;
	}
	.gallery-thumbs .swiper-slide-active {
		opacity: 1;
	}
</style>
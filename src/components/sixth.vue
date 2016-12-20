<template>
	<div id="sixth">
		<div class="container">
		<h1 class="text-center">正在热映的电影（北京）</h1>
			<div class="row">
				<ul v-for="movie in movies">
					<div class="col-sm-6 col-md-4">
						<div class="thumbnail img-top">
							<img v-bind:src="movie.images['large']">
							<div class="caption text-center">
								<h2 class="text-success">{{movie.title}}</h2>
								<p>豆瓣评分：{{movie.rating['average']}}</p>
								<p class="lead text-danger">{{movie.genres.join("，")}}</p>
								<p><a v-bind:href="movie.alt" class="btn btn-primary" role="button" target="_blank">查看详情</a></p>
							</div>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				movies:[],
				movieTitle:''
			}
		},
		mounted: function() {
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=12', {}, {
				headers: {},// request header
				emulateJSON: true
				// 如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。
			}).then((response) =>{
      // 响应成功回调(简洁的ES 6的Lambda写法)
      this.movies = response.data.subjects;
      this.movieTitle=response.data.title;
  }, (response)=> {
        // 响应错误回调
        console.log(response)
    });
		}
	}
</script>

<style>
	#sixth ul{
		margin-top: 20px;
	}
	.img-top img{
		margin-top: 20px;
		height: 405px;
		overflow: hidden;
	}
</style>

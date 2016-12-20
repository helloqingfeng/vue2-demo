<template>
	<div id="home">
		<div class="container">
			<div class="jumbotron" id="m-home">
				<h1>Hello, World!</h1>
				<p>这是一个使用 Vue 2.0 构建的简单单页应用，主要的依赖库有vue-cli、vue-router、vue-resource、bootstrap。</p>
				<h2><a href="https://github.com/helloqingfeng" title="我的GitHub首页">Learn more</a></h2>
			</div>
		</div>
		<div class="bloc l-bloc container" id="bloc-6">
			<div class="row">
				<div class="col-sm-6">
					<h2 class="mg-lg">Night's Watch</h2>
					<h3 class="mg-sm">A Song of Ice and Fire</h3>
					<p class="mg-lg">
						Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night's Watch, for this night, and all the nights to come.
					</p><a href="#" class="btn  btn-lg btn-c-1 btn-sq">Watch Demo</a>
				</div>
				<div class="col-sm-6">
					<img src="../assets/codegood.jpg" class="img-responsive" />
				</div>
			</div>
		</div>
		<div class="bloc l-bloc  b-divider" id="bloc-7">
			<div class="bloc-lg">
				<div class="row">
					<div class="col-sm-3">
						<div class="text-center">
							<span class="fa fa-heart icon-round icon-md"></span>
						</div>
						<h3 class="text-center mg-md">
							Beautiful
						</h3>
						<p class="text-center">
							A little feature description could go here. A little feature description.
						</p>
					</div>
					<div class="col-sm-3">
						<div class="text-center">
							<span class="fa fa-rocket icon-round icon-md"></span>
						</div>
						<h3 class="text-center mg-md">
							Responsive
						</h3>
						<p class="text-center">
							A little feature description could go here. A little feature description.
						</p>
					</div>
					<div class="col-sm-3">
						<div class="text-center">
							<span class="fa fa-code icon-round icon-md"></span>
						</div>
						<h3 class="text-center mg-md">
							Clean
						</h3>
						<p class="text-center">
							A little feature description could go here. A little feature description.
						</p>
					</div>
					<div class="col-sm-3">
						<div class="text-center">
							<span class="fa fa-tasks icon-round icon-md"></span>
						</div>
						<h3 class="text-center mg-md">
							Optimized
						</h3>
						<p class="text-center">
							A little feature description could go here. A little feature description.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto+Condensed');
	@import url('/static/font-awesome/css/font-awesome.min.css');
	#home{
		font-family: 'Roboto Condensed','Montserrat', Helvetica,"PingFang SC","微软雅黑",sans-serif;
		font-weight: 500;
	}
	#home h2{
		color:rgba(0,0,0,.7);
	}
	.mg-lg{
		margin-top:10px;
		margin-bottom:40px;
	}
	.mg-sm{
		margin-top: 10px;
		margin-bottom: 5px;
	}
	#home p{
		font-size:16px;
	}
	.l-bloc{
		color: #475669;
	}
	.btn-c-1 {
		background: #f3f3f3;
		color: rgba(0,0,0,.5)!important;
		margin: 0 5px 5px 0;
		border-radius: 0px;
	}
	.b-divider {
		border-top: 1px solid rgba(0,0,0,.1);
		margin-top: 45px;
	}
	.bloc {
		width: 100%;
		clear: both;
		background: 50% 50% no-repeat;
		padding: 0 50px;
	}
	.mg-md {
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.icon-round {
		margin: 10px auto 0;
		border: 2px solid transparent;
		border-radius: 50%;
		padding: 32px 30px 26px 30px;
		min-width: 80px;
		border-color: rgba(0,0,0,.7);
		font-size: 30px!important;
		color: #333;
	}
</style>
<template>
	<div class="container">
	<hr class="hr-border">
		<footer>
			<div class="span-inline">
				<span>
					<a target="_blank" href="https://github.com/helloqingfeng" title="Github个人主页">
						<img src="../assets/GitHub-Mark.png" class="img-circle img-responsive" width="50">
					</a>
				</span>

				<span>
					<a target="_blank" href="https://www.zhihu.com/people/helloqingfeng" style="color:#0665C4;" title="知乎个人主页">
						<img src="../assets/zhihu.jpg" class="img-circle img-responsive" width="50">
					</a>
				</span>

				<span>
					<a target="_blank" href="http://www.jianshu.com/collection/afd7e387efa6" style="color:#E78170;" title="前端技术学习">
						<img src="../assets/jianshu.jpg" class="img-circle img-responsive" width="50">
					</a>
				</span>

			</div>
			<div class="container">
			<p class="copyright">
				Copyright © 前端技术 2016
				<br>
				Owned by <a href="https://github.com/helloqingfeng">hello清风</a>
			</p>
			</div>
		</footer>
	</div>
</template>

<style type="text/css">
	.hr-border{
		border: 0;
		border-top: 4px solid #ee9;
	}
	.span-inline{
		margin-top: 30px;
		text-align: center;
		font-size: 1.5em;
	}
	.span-inline span{
		display: inline-block;
		width: 10%;
		max-width: 120px;
		margin: 5px 10px;
	}
	.span-inline span:hover{
		background-color: #eee;
		border-radius: 10px;
	}
	.span-inline img{
		margin: 0 auto;
	}
	.copyright{
		text-align: center;
		font-size: 18px;
	}
	@media screen and (max-width: 500px) {
		.span-inline img{
			max-width: 32px;
			width: 40%;
		}
	}
</style>
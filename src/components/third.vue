<template>
	<div class="container" id="m-three">
		<h1>Vue：渐进式JavaScript 框架</h1>
		<div class="row">
			<div class="col-xs-6 col-md-4 m-height">
				<h2>易用</h2>
				<p>已经会了HTML,CSS,JavaScript？即刻阅读指南开始构建第一个应用！</p>
			</div>
			<div class="col-xs-6 col-md-4 m-height">
				<h2>灵活</h2>
				<p>简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。</p>
			</div>
			<div class="col-xs-6 col-md-4 m-height">
				<h2>高效</h2>
				<p>16kb min+gzip 的运行大小超快虚拟 DOM 最省心的优化</p>
			</div>
		</div>
	</div>
</template>

<style>
#m-three{
	text-align: center;
	line-height: 1.6em;
	font-size: 16px;
	background-color: #eee;
	min-height: 250px;
}
#m-three h2{
	font-weight: 400;
	color: #42b983;
	font-size: 1.5em;
}
#m-three p{
	margin-top: 30px;
}

/*设置最小高度来清除由于盒子高度不同引起的排列错位*/
.m-height{
	min-height: 186px;
}
</style>
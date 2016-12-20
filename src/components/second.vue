<template>
	<div class="container" id="m-second">
		<div class="row">
			<div class="col-md-4">
				<h1>构建单页应用最佳实战</h1>
				<p class="lead">我们将会选择使用一些vue周边的库vue-cli,vue-router,vue-resource,vuex</p>
				<ol class="borderleft">
					<li>使用vue-cli创建项目</li>
					<li>使用vue-router实现单页路由</li>
					<li>用vuex管理我们的数据流</li>
					<li>使用vue-resource请求我们的node服务端</li>
					<li>使用.vue文件进行组件化的开发</li>
					<li>PS：本文node v6.2.2 npm v3.9.5 vue v2.1.0 vue-router v2.0.3 vuex v2.0.0</li>
				</ol>
			</div>
			<div class="col-md-4">
				<h1>构建单页应用命令行</h1>
				<ul class="list-group">
					<li class="list-group-item list-group-item-success">
						<pre>$ npm install -g vue-cli</pre>
					</li>
					<li class="list-group-item list-group-item-info">
						<pre>$ vue init webpack myProject</pre>
					</li>
					<li class="list-group-item list-group-item-warning">
						<pre>$ cd myProject</pre>
					</li>
					<li class="list-group-item list-group-item-danger">
						<pre>$ npm install</pre>
					</li>
					<li class="list-group-item list-group-item-success">
						<pre>$ npm run dev</pre>
					</li>
				</ul>
			</div>
			<div class="col-md-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<p class="lead">Angular Vue React 渲染实现比较</p>
					</div>
					<div class="panel-body">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>Angular</th>
									<th>Vue</th>
									<th>React</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Angular 很慢，因为他用了脏值检查这种被动的遍历方法穷举所有监听的表达式。</td>
									<td>Vue 每秒能进行 10000 次操作，又大约是 React 的 10 倍。</td>
									<td>React 每秒能进行 1000 次操作，大约是 Angular 的 10 倍，这得益于 React 的虚拟 DOM 树。</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto');
	#m-second{
		font-size: 16px;
		font-family:'Roboto', Helvetica, Arial, sans-serif;
		color: #333;
		line-height: 1.6em;
	}
	.borderleft{
		border-left: 5px solid #eee;
		padding-left: -40px;
	}
</style>
<template>
	<div id="m-fifth">
		<ul class="list-group" v-for="(topic, index) in topicList">
				<li class="list-group-item" v-if="index>=(current-1)*pagesize&&index<current*pagesize">
				<span class="avatar"><img v-bind:src="topic.author['avatar_url']" width="36"></span>
					<a v-bind:href="'https://cnodejs.org/topic/'+topic.id" target="_blank">{{topic.title}}</a>
					<span class="badge visitNum">{{topic.visit_count}} 次浏览</span>
				</li>
		</ul>
		<div class="container text-center">
			<vue-pages :url="url1" :total="total" :counts="counts" :current="current" :fn="fn1"></vue-pages>
		</div>
	</div>
</template>

<script>
	import vuePages from 'vue-pages'
	export default{
		data(){
			return{
				topicList:[],
				url1: '#',
				pageName:'p',
				total: 6,
				counts: 8,
				current: 1,
				pagesize:7,
				getTopicUrl:'https://cnodejs.org/api/v1/topics'
			}
		},
		created:function(){
			this.getTopic()
		},
		methods:{
			getTopic:function(){
				var that=this;
				that.$http({
					method:'GET',
					url:this.getTopicUrl
				}).then(
				function(response){
					this.topicList=response.data.data;
					console.log(response.data.data.length);
				},function(error){
			// error
		})
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
	#m-fifth a{
		font-size: 16px;
		text-decoration: none;
	}
	#m-fifth .visitNum{
		margin-left: 30px;
		float: none;
		color: #F9FAFC;
	}
	.avatar{
		padding-right: 15px;
	}

</style>
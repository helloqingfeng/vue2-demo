<template>

	<div class="container" id="content">
		<div class="row">
			<div class="col-xs-12 col-md-9 c-border">
				<h3>{{topic.title}}</h3>
				<p>
					<span class="timeAgo"><b>发布于：</b>{{getTimeago()}}</span>
					<span class="badge">{{topic.visit_count}} 次浏览</span>
					<span class="badge">{{topic.reply_count}} 回复</span>
				</p>
				<hr>
				<section v-html="topic.content"></section>
				<div class="ds-post-main" v-for="item in replies">
					<div class="ds-avatar">
						<a href="#">
							<img v-bind:src="item.author.avatar_url" height="36" class="img-circle"></a>
						</div>
						<div class="ds-comment-body">
							<a href="#" class="user-name">{{item.author.loginname}}</a>
							<p v-html="item.content"></p>
						</div>
					</div>
				</div>

				<div class="col-xs-12 col-md-3">
					<div class="panel panel-default">
						<div class="panel-heading"><h3>作者</h3></div>
						<div class="panel-body">
							<img class="side-avatar img-circle" :src="author.avatar_url" width="72">
							<a v-bind:href="'https://cnodejs.org/user/'+author.loginname" target="_blank"><h2 class="text-center">{{author.loginname}}</h2></a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</template>

	<script>
		import timeago from 'timeago.js';
		export default{
			data(){
				return{
					topic:{},
					author:{},
					replies:[],
					topicId: '',
					timeAgo:'',
					articletitle:''
				}
			},
			mounted:function (){
            // 获取url传的tab参数
            this.topicId = this.$route.params.id;
            // console.log(this.topicId);
            // var that=this;
            // 加载主题数据
            this.$http.get('https://cnodejs.org/api/v1/topic/' + this.topicId)
            .then((response)=>{
            	this.topic = response.data.data;
            	this.author=response.data.data.author;
            	this.articletitle=response.data.data.title;
            	this.replies=response.data.data.replies;
            	console.log(this.articletitle);
            	document.title=this.articletitle;

            })
        },
        // created:function(){
        // 	setTimeout(function(){document.title=this.articletitle;},1000);
        // },
        methods:{
        	getTimeago:function(){
        		var timeagoInstance = new timeago();
        		this.timeAgo=this.topic.create_at;
        		return timeagoInstance.format(this.timeAgo, 'zh_CN');
        	}
        }
    }
</script>

<style>
	#content{
		margin: 10px auto 50px;
	}
	.markdown-text p{
		font-size: 16px;
		line-height: 1.7em;
		max-width: 800px;
	}
	.markdown-text li{
		font-size: 16px;
		line-height: 1.5em;
	}
	.markdown-text p img{
		max-width: 780px;
		display: inline-block;
		text-align: center;
	}
	.timeAgo{
		font-size: 14px;
	}
	.c-border{
		border:1px solid #ccc;
	}
	.ds-post-main {position:relative;margin-bottom: 20px;}
	.ds-avatar {position:absolute; top:20px; width:36px; height:36px; padding:5px; }
	.ds-avatar a {display:block; width:37px; height:37px; background:#ccc; border-radius:50%;}
	.ds-comment-body {margin-left:20px;padding:10px 10px 10px 30px ;min-height:80px;background:#F7F7F9;}
	.user-name{font-weight: bold;color: #DE511C;}
	.side-avatar{
		display: block;
		margin: 5px auto;
	}
	.markdown-text p img{
		width: 100%;
	}
</style>
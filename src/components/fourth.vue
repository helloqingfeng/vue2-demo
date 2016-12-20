<template>
	<div id="fourth">
		<div class="container">
			<div class="jumbotron">
				<h1>{{nowtime}}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				nowtime:new Date().toLocaleTimeString()
			}
		},
		created () {
			// console.log(this)
			setInterval(()=> {
				this.nowtime =new Date().toLocaleTimeString();
			}, 1000);
		}
	}
</script>

<style>
	#fourth div{
		background-color: #333;
	}
	#fourth h1{
		text-align: center;
		font-weight: 500;
		font-size: 10em;
		color:#eee;
	}
</style>


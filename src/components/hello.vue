<template>
  <div id="hello" class="container">
    <h1>{{msg}}</h1>
    <div class="fix">
      <div class="left">
        <div>
          <img src="../assets/header.jpg" class="img-circle img-responsive">
        </div>
      </div>
      <div class="right">
        <h2><mark>
         <a href="https://github.com/helloqingfeng" target="_blank" :title="slogan">@Helloqingfeng</a>
       </mark>
       {{slogan}}
     </h2>
   </div>
 </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Welcome to My Second Vue.js App',
        slogan:'努力成为一个有价值的前端工程师'
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  #hello{
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;
  }
  #hello h1{
    margin-top: 30px;
    text-shadow:5px 5px 3px #ccc;
  }
  .left{
    float: left;
    width: 120px;
    text-align: center;
  }
  .left,.right{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .right{
   overflow: hidden;
   padding-top: 10px;
    }
 #hello img{
  display: inline-block;
  width: 120px;
}
#hello a{
  text-decoration: none;
  color:#009688;
}

</style>

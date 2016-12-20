<template>
  <div id="hello">
    <div class="container text-center">
      <h1>{{msg}}</h1>
      <p>
       <img src="../assets/header.jpg" class="img-circle img-responsive"></p>
       <h2>
         <mark>
           <a href="https://github.com/helloqingfeng" target="_blank" :title="slogan">@helloqingfeng</a>
         </mark>
       </h2>
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
  margin-top: -30px;
  text-shadow:5px 5px 3px #ccc;
}
#hello img{
  display: inline-block;
  width: 150px;
}
#hello a{
  text-decoration: none;
  color:#009688;
}
</style>

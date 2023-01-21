<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage/index'

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      res:{}
    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1}, 'user');


    //发json请求，本地加载请求json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });

    //通过easy-mock平台写的假接口
  //   this.axios.get('/user/login.json').then((res)=>{
  //   this.res = res;
  //  });
    //本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
   });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

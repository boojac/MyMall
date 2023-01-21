import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 插件放上面，组件放下面
import App from './App.vue'

//设置基础值,根据前端的跨域方式做调整,此为接口代理方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//错误拦截代码
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0) {
    //成功状态码
    return res.data;
  }else if(res.status == 10) {
    //未登录状态码
    window.location.href = '/#/login';
  }else {
    alert(res.mag);
  }
});


Vue.use(VueAxios, axios);
Vue.config.productionTip = false

Vue.prototype.axios = axios;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

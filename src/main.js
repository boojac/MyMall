// 插件放上面，组件放下面
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

import store from './store'
import App from './App.vue'
// import env from './env'

//mock开关

const mock = false;
if(mock) {
  require('./mock/api');
}

//设置基础值,根据前端的跨域方式做调整,此为接口代理方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//错误拦截代码
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0) {
    //成功状态码
    return res.data;
  }else if(res.status == 10) {
    //未登录状态码
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);

  }else {
    alert(res.mag);
    return Promise.reject(res);
  }
});


Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

// Vue.prototype.axios = axios;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

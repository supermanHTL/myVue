// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'
import axios from 'axios';

import '@/assets/js/common/fontsize'   //适配的js
import '@/assets/css/common/reset.css'  //reset样式

Vue.config.productionTip = false
Vue.use(MetaInfo)
Vue.prototype.$axios=axios;

axios.interceptors.request.use(
  config => {
    // if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    //   config.headers.Authorization = token;
    // }
    console.log(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import './style/family.css'
import './style/family2.css'
import './style/clean-blog.css'
import './assets/mo/js/clean-blog.js'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

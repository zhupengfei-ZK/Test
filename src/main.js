// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import validator from 'vue-validator'
import './config/rem'
import Icon from 'vue-svg-icon/Icon.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import '../theme/index.css'

Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
Vue.component('icon', Icon)
Vue.use(VueRouter)
Vue.use(validator)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

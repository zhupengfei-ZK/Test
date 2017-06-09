import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import footGuide from '@/components/footer/footGuide'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const bbs = r => require.ensure([], () => r(require('../page/bbs/bbs')), 'bbs')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: home
        },
        {
          path: '/bbs',
          component: bbs
        },
        {
          path: '/user',
          component: user
        },
        {
          path: '/find',
          component: find
        }
      ]
    }
  ]
})

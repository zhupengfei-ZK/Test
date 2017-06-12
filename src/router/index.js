import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import footGuide from '@/components/footer/footGuide'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const bbs = r => require.ensure([], () => r(require('../page/bbs/bbs')), 'bbs')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const xiliduo = r => require.ensure([], () => r(require('../components/common/home/xiliduo')), 'xiliduo')
const xileduo = r => require.ensure([], () => r(require('../components/common/home/xileduo')), 'xileduo')
const tianli = r => require.ensure([], () => r(require('../components/common/home/tianli')), 'tianli')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        }, {
          path: '/home',
          component: home,
          children: [
            {
              path: '/xileduo',
              component: xileduo
            }, {
              path: '/xiliduo',
              component: xiliduo
            }, {
              path: '/tianli',
              component: tianli
            }
          ]
        }, {
          path: '/bbs',
          component: bbs
        }, {
          path: '/user',
          component: user
        }, {
          path: '/find',
          component: find
        }
      ]
    }
  ]
})

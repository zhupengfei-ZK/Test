import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import bbs from '@/page/bbs/bbs'
import user from '@/page/user/user'
import find from '@/page/find/find'
import xiliduo from '@/components/common/home/xiliduo'
import xileduo from '@/components/common/home/xileduo'
import tianli from '@/components/common/home/tianli'
import product from '@/components/common/home/productInfo'

Vue.use(Router)

export default new Router({
  routes: [
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
        }, {
          path: '/product',
          component: product
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
})

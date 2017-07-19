import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import bbs from '@/page/bbs/bbs'
import user from '@/page/user/user'
import login from '@/page/user/login'
import reg from '@/page/user/reg'
import getpwd from '@/page/user/getpwd'
import find from '@/page/find/find'
import xiliduo from '@/components/common/home/xiliduo'
import xileduo from '@/components/common/home/xileduo'
import tianli from '@/components/common/home/tianli'
import product from '@/components/common/home/productInfo'
import guideinvest from '@/components/common/home/guideinvest'

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
          component: xileduo,
          children: [
            {
              path: '/product',
              component: product
            }
          ]
        }, {
          path: '/xiliduo',
          component: xiliduo
        }, {
          path: '/tianli',
          component: tianli
        }, {
          path: '/guideinvest/main',
          component: guideinvest
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
    }, {
      path: '/login',
      component: login
    }, {
      path: '/reg',
      component: reg
    }, {
      path: '/getpwd',
      component: getpwd
    }
  ]
})

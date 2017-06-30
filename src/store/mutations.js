import {
    USER_INFO
} from './mutation-types.js'

import {
  setStore,
  getStore
} from '../config/mUtils'

export default {
  //获取用户信息存入vuex
  [USER_INFO] (state, info) {
    if (info) {
      state.userInfo = {...info}
      let validity = 30
      let now = new Date()
      now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000)
      document.cookie = 'USERID=' + info.user_id + 'expires=' + now.toGMTString()
      document.cookie = 'SID=CeRxBZalHSiKuGI49DL2DhXMrOakCzQNcJFg' + 'expires=' + now.toGMTString()
      setStore('user_id', state)
      console.log('mutations文件打印日志')
      console.log(getStore('user_id'))
    } else {
      state.userInfo = null
    }
  }
}

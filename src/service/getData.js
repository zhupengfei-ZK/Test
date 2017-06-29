import * as login from './tempdata/login'

/**
 * 创建临时数据
 */
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

var getUser = () => setpromise(login.userInfo)

export {getUser}

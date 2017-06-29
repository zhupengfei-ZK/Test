import {
  getUser
} from '../service/getData'
import {
    USER_INFO
} from './mutation-types.js'

export default {
  async getUserInfo ({
    commit,
    state
  }) {
    let res = await getUser()
    commit(USER_INFO, res)
  }
}

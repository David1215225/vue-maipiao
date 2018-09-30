import * as types from './const'
import axios from 'axios'
import config from '../modules'
import state from './state'

let actions = {
  [types.GET_BILLBOARDS] ({commit}) {
    axios.get(config.host + 'mz/v4/api/billboard/home', {
      params: {__t: Date.now()}
    }).then(res => {
      if (res.data.status === 0) {
        state.isBanner = true
        commit(types.SET_BILLBOARDS, res.data.data.billboards)
      } else {
        state.isBanner = false
      }
    })
  }
}
export default actions

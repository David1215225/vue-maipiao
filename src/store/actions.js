import * as types from './const'
import axios from 'axios'
import config from '../modules'

let actions = {
  [types.GET_BILLBOARDS] ({commit}) {
    axios.get(config.host + 'mz/v4/api/billboard/home', {
      params: {_t: Date.now()}
    }).then(res => {
      console.log(res.data.data, '222222222')
      commit(types.SET_BILLBOARDS, res.data.data.billboards)
    })
  }
}
export default actions

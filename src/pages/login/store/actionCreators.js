import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = (login) => ({
  type: actionTypes.CHANGE_LOGIN,
  login: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        console.log(res)
        const result = res.data.data
        if(result){
          dispatch(changeLogin())
        } else {
          alert('登录失败！')
        }
      })
      .catch((error) => {
        console.log(error)
        
      })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT,
  login: false
})
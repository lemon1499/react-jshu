import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  login: false,
  username:'',
  password: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.login)
    case actionTypes.LOGOUT:
      return state.set('login', action.login)
    default:
      return state
  }
}
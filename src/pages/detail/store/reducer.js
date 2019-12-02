
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// fromJS方法会将js对象转为immutable对象
const defaultState = fromJS({
  title: '衡水中学，被外地人占领的高考工厂',
  content:'<p>近年来，<b>人们开始重视自我成长</b>，越来越多的人花时间读书，我也不例外。 以前我看书都是逐字逐句地读，认为只有这样，才能掌握全书的内容。所以我读书很慢...</p><p>近年来，人们开始重视自我成长，越来越多的人花时间读书，我也不例外。 以前我看书都是逐字逐句地读，认为只有这样，才能掌握全书的内容。所以我读书很慢...</p><p>近年来，人们开始重视自我成长，越来越多的人花时间读书，我也不例外。 以前我看书都是逐字逐句地读，认为只有这样，才能掌握全书的内容。所以我读书很慢...</p><p>近年来，人们开始重视自我成长，越来越多的人花时间读书，我也不例外。 以前我看书都是逐字逐句地读，认为只有这样，才能掌握全书的内容。所以我读书很慢...</p>'
})


export default (state = defaultState, action) => {
  // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
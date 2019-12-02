
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
// import bannerImg from '../imgs/pic.jpg'
// import reco1 from '../imgs/reco1.png'
// import reco2 from '../imgs/reco2.png'
// import reco3 from '../imgs/reco3.png'
// import reco4 from '../imgs/reco4.png'

// fromJS方法会将js对象转为immutable对象
const defaultState = fromJS({
  topicList :[],
  articalList: [],
  recomList: [],
  articalPage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articalList: fromJS(action.articalList),
    recomList: fromJS(action.recomList)
  })
}

const addArticalList = (state, action) => {
  return state.merge({
    'articalList': state.get('articalList').concat(action.list),
    'articalPage': action.nextPage,
  })
}

export default (state = defaultState, action) => {
  // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_ARTICAL_LIST:
      return addArticalList(state, action)
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.showScroll)
    default:
      return state
  }
}
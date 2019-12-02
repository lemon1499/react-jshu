
import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recomList: result.recomList,
  articalList: result.articalList
})

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICAL_LIST,
  list: fromJS(list), // fromJS方法将js数据转化为immutable数据
  nextPage
})


export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data
        dispatch(changeHomeData(result))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+ page)
      .then((res) => {
        const result = res.data.data
        dispatch(addHomeList(result, page+1))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const toggleTopShow = (showScroll) => ({
  type: actionTypes.TOGGLE_SCROLL_SHOW,
  showScroll
})
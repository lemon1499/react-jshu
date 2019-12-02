import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
  HeaderaWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  ArrowTop,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from './style'


// 无状态组件只有render函数，没有生命周期钩子函数
class Header extends Component {
  getListArea () {
    const { focused, list, totalPage, page, mouseIn, mouseEnterHandle, mouseLeaveHandle, changePageHandle } = this.props
    const newList = list.toJS()
    const pageList = []
    if(newList.length){
      for(let i= (page-1)*10; i<page * 10; i++) {
        if(newList[i]){
          pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={ mouseEnterHandle } onMouseLeave={ mouseLeaveHandle }>
          <ArrowTop></ArrowTop>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePageHandle(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont jianshu-jiazai_shuaxin_o loading"></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            { pageList }
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, focuseHandle, blurHandle, list, login } = this.props
    return (
      <HeaderaWrapper>
        <Logo href="/" />
        <Nav>
          <Link to="/"><NavItem className="left active">首页</NavItem></Link>
          <NavItem className="left">下载App</NavItem>
          {
            login ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : 
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition in={ focused } timeout={ 200 } classNames="slide">
              <NavSearch
                className={ focused ? 'focused' : ''}
                onFocus={ () => focuseHandle(list) }
                onBlur={ blurHandle }
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                focused
                  ? 'focused iconfont jianshu-fangdajing fangdajing'
                  : 'iconfont jianshu-fangdajing fangdajing'
              }
            ></i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont jianshu-icon-checkin"></i>
            写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderaWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // 等价于state.get('header).get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    focuseHandle(list) {
      (list.size === 0) && dispatch(actionCreators.getList()) // 避免无意义的请求发送，提升组件性能
      dispatch(actionCreators.searchFocus())
    },
    blurHandle() {
      dispatch(actionCreators.searchBlur())
    },
    mouseEnterHandle() {
      dispatch(actionCreators.mouseEnter())
    },
    mouseLeaveHandle() {
      dispatch(actionCreators.mouseLeave())
    },
    changePageHandle(page, totalPage, spin) {
      const currentAngle = spin.style.transform ? spin.style.transform.replace(/[^\d]/ig,'') : 0 // 获取当前的角度
      // 在当前角度基础上+360度
      spin.style.transform = `rotate(${Number(currentAngle) + 360}deg)`
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

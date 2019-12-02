import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  HomeWrapper, 
  HomeLeft, 
  TopicWrapper,
  TopicItem,
  HomeRight, 
  BackTop
} from './style'

import List from './components/List'
// import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommand from './components/Recommand'
import { actionCreators } from './store'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  backTopHandle () {
    window.scrollTo(0, 0)
  }

  render() {
    const { topicList, showScroll } = this.props
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <TopicWrapper>
              {
                topicList.map((item) => (
                  <TopicItem key={item.get('id')}>
                    <img src={item.get('imgUrl')}/>
                    {item.get('title')}
                  </TopicItem>
                ))
              }
            </TopicWrapper>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommand></Recommand>
            <Writer></Writer>
          </HomeRight>
          { showScroll ? <BackTop onClick={this.backTopHandle}>回到顶部</BackTop> : null } 
        </HomeWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },

  changeScrollTopShow(e) {
    const scrolltop = document.documentElement.scrollTop
    // console.log(scrolltop)
    if(scrolltop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
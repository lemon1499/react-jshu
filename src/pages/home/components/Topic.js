import React, { Component } from 'react'
import { TopicWrapper } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>topic~~~</TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(
  mapStateToProps,
  null
)(Topic)
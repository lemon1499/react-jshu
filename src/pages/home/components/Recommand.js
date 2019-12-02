import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  RecommandWrapper,
  RecommandItem
} from '../style'

class Recommand extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <RecommandWrapper>
          {
            list.map(item => {
              return (
                <RecommandItem key={item.get('id')}>
                  <img src={item.get('imgurl')} />
                </RecommandItem>
              )
            })
          }
        </RecommandWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recomList'])
})

export default connect(mapStateToProps)(Recommand)
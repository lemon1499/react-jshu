import React, { Component } from 'react'
import {  
  ListItem,
  ListInfo,
  LoadMore,
} from '../style'
import { connect } from 'react-redux'
import bannerImg from '../imgs/pic.jpg'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={ index } to={ '/detail/' + item.get('id') }>
                <ListItem>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                  <img className='list-pic' src={bannerImg} />
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={ () => getMoreList(page) }>阅读更多...</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','articalList']),
  page: state.getIn(['home', 'articalPage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatch)(List)
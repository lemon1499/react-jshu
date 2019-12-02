import React, { Component } from 'react'
import {
  WriterWrapper,
  WriterItem,
  TitleWrapper
} from '../style'

export default class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <TitleWrapper>
          <span className='title'>推荐作者</span>
          <span className='change-writer'>
            <i className="iconfont jianshu-jiazai_shuaxin_o loading"></i>
            换一批
          </span>
        </TitleWrapper>
        <WriterItem>
          <div className='writer-info'>
            <img src='http://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'></img>
            <div>
              <span>只有一半影子的人</span>
              <p>写了259.8K字~2.3k喜欢</p>
            </div>
          </div>
          <span className='guanzhu'>
            +关注
          </span>
        </WriterItem>
        <WriterItem>
          <div className='writer-info'>
            <img src='http://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'></img>
            <div>
              <span>只有一半影子的人</span>
              <p>写了259.8K字~2.3k喜欢</p>
            </div>
          </div>
          <span className='guanzhu'>
            +关注
          </span>
        </WriterItem>
        <WriterItem>
          <div className='writer-info'>
            <img src='http://upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'></img>
            <div>
              <span>只有一半影子的人</span>
              <p>写了259.8K字~2.3k喜欢</p>
            </div>
          </div>
          <span className='guanzhu'>
            +关注
          </span>
        </WriterItem>
      </WriterWrapper>
    )
  }
}
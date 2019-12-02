import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderaWrapper = styled.div`
  height: 56px;
  border-bottom:1px solid #ccc;
  position:relative;
 `
export const Logo = styled.a`
  display:block;
  width:100px;
  height: 56px;
  border-bottom:1px solid #ccc;
  background:url(${logoPic});
  background-size:100% 100%;
  position:absolute;
  top:0;
  left:10px;
 `
export const Nav = styled.div`
  max-width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
 `

export const NavItem = styled.div`
 line-height:56px;
 padding:0 15px;
 font-size:17px;
 color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position:relative;
  .slide-enter{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit{
    transition: all .2s ease-out;
  }
  .slide-exit-active{
    width:160px;
  }
  .fangdajing{
    width:30px;
    height:30px;
    position:absolute;
    right:5px;
    bottom:4px;
    font-size:22px;
    line-height:30px;
    text-align:center;
    color:#999;
    &.focused{
      background:#777;
      border-radius:50%;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  width: 160px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding:0 32px 0 20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`
export const SearchInfo = styled.div`
  width:240px;
  padding:0px 20px;
  border-radius:5px;
  position:absolute;
  left:0;
  top:56px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const ArrowTop = styled.i`
  display:inline-block;
  width:10px;
  height:10px;
  border-left:1px solid #ccc;
  border-top:1px solid #ccc;
  transform:rotate(45deg);
  position:absolute;
  left:40px;
  top:-6px;
  background:#fff;
`

export const SearchInfoTitle = styled.div`
  margin-top:20px
  margin-bottom:15px;
  color:#969696;
  font-size:14px;
  line-height:20px;
`
export const SearchInfoSwitch = styled.div`
  float:right;
  font-size:13px;
  cursor:pointer;
  .loading{
    display:inline-block;
    font-size:18px;
    vertical-align:middle;
    transition:all .3s ease-in;
  }
  .loading.active{
    transform:rotate(0deg)
    transform-origin:center center;
  }
  &:hover{
    color:#ea6f5a;
    i{
      color:#ea6f5a;
    }
  }
`

export const SearchInfoItem = styled.a`
  display:inline-block;
  font-size:12px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  padding:0 5px;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:15px;
  cursor:pointer;
  &:hover{
    color:#ea6f5a;
  }
`

export const Addition = styled.div`
  position:absolute;
  height:56px;
  top:0;
  right:0;
`
export const Button = styled.div`
  margin-right:20px;
  line-height:38px;
  float:right;
  padding:0 20px;
  border-radius:19px;
  margin-top:9px;
  border: 1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`

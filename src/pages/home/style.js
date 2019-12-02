import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`

export const HomeLeft = styled.div`
  width:625px;
  float:left;
  margin-left:15px;
  padding-top:30px;
  a{
    text-decoration: none;
    color:#333;
  }
`

export const ListItem = styled.div`
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  display:flex;
  align-items:center;
  .list-pic{
    width:125px;
    height:100px;
    border-radius:6px;
    padding-left:10px;
  }
  
`
export const ListInfo = styled.div`
  width:500px;
  padding:10px 5px;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
  }
  .desc{
    font-size:13px;
    line-height:18px;
    color:#999;
  }
`

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  background:#a5a5a5;
  border-radius:20px;
  color:#fff;
  margin:30px 0;
  text-align:center;
  cursor:pointer;
`

export const HomeRight = styled.div`
  width:280px;
  float:right;
`

export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  height:32px;
  line-height:32px;
  float:left;
  font-size:14px;
  border:1px solid #dcdcdc;
  border-radius:4px;
  padding-right:10px;
  margin:0 0 15px 18px;
  img{
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`

export const RecommandWrapper = styled.div`
  width:280px;
  margin:30px 0;
`

export const RecommandItem = styled.div`
  width:280px;
  height:50px;
  padding:5px 0;
  img{
    display:inline-block;
    width:100%;
    height:100%;
  }
`

export const WriterWrapper = styled.div`
  padding:15px 0;
`
export const TitleWrapper = styled.div`
  color:#999;
  display:flex;
  justify-content:space-between;
`

export const WriterItem = styled.div`
  padding:10px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  img{
    width:48px;
    height:48px;
    border-radius:50%;
    margin-right:10px;
  }
  .writer-info{
    display:flex;
    align-items:center;
  }
  p{
    margin-top:5px;
    margin-bottom:0;
    font-size:12px;
    color:#999;
  }
  .guanzhu{
    color:green;
    cursor:pointer;
  }
`

export const BackTop = styled.div`
  position: fixed;
  right:30px;
  bottom:100px;
  width:60px;
  height:60px;
  line-height: 60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:12px;
  cursor:pointer;
`
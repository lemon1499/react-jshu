import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render() {
    const { login } = this.props
    if(login) {
      return <Redirect to='/'/>
    } else {
      return (
        <LoginWrapper>
          <h4 className='title'>登 录</h4>
          <Input placeholder='用户名' ref={(ele) => {this.account = ele}}/>
          <Input placeholder='密码' type='password' ref={(ele) => {this.password = ele}}/>
          <Button onClick={ () => this.props.loginHandle(this.account, this.password) }>登录</Button>
        </LoginWrapper>
      )
    }
  }
}


const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  loginHandle(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login)
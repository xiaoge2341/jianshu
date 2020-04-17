import React, { Component } from 'react';
import {NavLink,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './style.module.scss'
import {signIn} from './store/action'
class sign extends Component {
  // componentDidMount(){
  //   console.log(this.refs)
    
  // }
  render() {
    let {signIn,history} = this.props
    let login = this.props.signInReducer.get('login')
    console.log(history)
  if (!login) {
    return (
      <div className={styles.bg}>
        <div className={styles.main}>
          <h4>
            <NavLink to='/sign_in' className={styles.sign_in}>登录</NavLink>
            <b>·</b>
            <NavLink to='/sign_up' className={styles.sign_up}>注册</NavLink>
          </h4>
          <div className={styles.sign_in_container}>
            <form id='#new_session'>
              <div>
                <i>ic</i>
                <input type="text" placeholder='手机号或邮箱' id={styles.email} ref='email'/>
              </div>
              <div>
              <i>ic</i>
                <input type="password" placeholder='密码' id={styles.password} ref='password'/>
              </div>
            </form>
            <div className={styles.repro}>
              <div className={styles.remember}>
                <input type="checkbox"/>记住我
              </div>
              <div>
                <a href="srcipt:;" className={styles.problem}>登录遇到问题?</a>
              </div>
            </div>
            
            <button className={styles.sign_in}
              onClick={()=>signIn(this.refs)}
            >登录</button>

            <div className={styles.more_sign}>

              <h6>社交账号登录</h6>
              <ul>
                <li>微博</li>
                <li>微信</li>
                <li>QQ</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    );
  }else {
    return <Redirect to='/'></Redirect>
  }

  }
}
const mapState = (state) => {
  // console.log(state)
 return {
  signInReducer:state.signInReducer
 }
}
export default connect(mapState,{signIn})(sign);


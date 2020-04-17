import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './style.module.scss'
class sign extends Component {
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.main}>
          <h4>
            <NavLink to='/sign_in' className={styles.sign_in}>登录</NavLink>
            <b>·</b>
            <NavLink to='/sign_up' className={styles.sign_up}>注册</NavLink>
          </h4>
          <div className={styles.sign_up_container}>
            <form id='#new_session'>
              <div>
                <i>ic</i>
                <input type="text" placeholder='你的昵称' id={styles.email}/>
              </div>
              <div>
              <i>ic</i>
                <input type="text" placeholder='手机号' id={styles.password}/>
              </div>
              <div>
                <i>ic</i>
                <input type="text" placeholder='设置密码' id={styles.password}/>
              </div>
            </form>
            <p className={styles.sign_up_msg}>
              点击 “注册” 即表示您同意并愿意遵守简书 <br/>
用户协议 和 隐私政策 。</p>

            <button className={styles.sign_up}>登录</button>

            <div className={styles.more_sign}>

              <h6>社交账号直接注册</h6>
              <ul>
                <li>微信</li>
                <li>QQ</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(sign);


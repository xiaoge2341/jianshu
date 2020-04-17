import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import styles from './style.module.scss'
import  './../../static/iconfont/iconfont.css'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import 'animate.css'
import {loginout} from './../../pages/sign_in/store/action'

 class Header extends Component {
  render() {
    let {  isFocused,notFocused,mouseenter,mouseleave,changePage,getList, history,loginout } = this.props
    let { focused,list,page,mouseIn,totalPage } = this.props.header.toJS()
    let login = this.props.signInReducer.get('login')
    const pageList = []
    //控制，如果最后不够五个，则显示原有的数量,也就是15-19
    const listNum =  page < totalPage ? page*5 : list&&list.data.length
    // console.log(listNum)
    for (let i = (page-1)*5; i< listNum; i++) {
      pageList.push(
        <a href="script:;" key={i}>{list&&list.data[i]}</a>
      )
    }


    const handdleRotate = () => {
      let {spin} = this.refs
      let  originDegs = spin.style.transform.replace(/[^0-9]/ig,'') //rotate(0deg) 这个算法把所有的字符串替换为'',得到真实的deg数

      if(originDegs) { //这里把上边得到的字符串转换成int类型十进制
        originDegs = parseInt(originDegs,10);
      } else {
        originDegs = 0;
      }
      spin.style.transform = `rotate(${originDegs+360}deg)`
    }
    
    
    return (
      // <Router></Router>
      <header className={styles.header}>
        <a href = 'script:;' className = {styles.logo}>.</a>

        <div className={styles.nav}>
          <div className={`${styles.navItem} ${styles.left} ${styles.active}`}
            onClick={()=>history.push('/')}
          >首页</div>
          <div className={`${styles.navItem} ${styles.left}`}>下载App</div>

          {
            login ? 
            <div className={`${styles.navItem} ${styles.right}`}
              onClick={()=>loginout()}
            >退出</div> : 
            <div className={`${styles.navItem} ${styles.right}`}
              onClick={()=>history.push('/sign_in')}
            >登录</div>
          }
          

          <div className={`${styles.navItem} ${styles.right}`}>Aa</div>

          <div className= {styles.searchWrapper}>
            <input type="text" placeholder='搜索'
              className={`${styles.navSearch} ${focused ? styles.focused : ''}`}
              onFocus = {() => {
                isFocused()
                getList(list)
              }}
              onBlur = {() => {notFocused()}}
            />
            <i 
              className = {`iconfont icon41 ${focused ? styles.focused : ''}` }
            ></i>

            {/* 点击搜索框加载下面部分 */}
            {mouseIn||focused ? <div className={`${styles.searchInfo} animated fadeIn`}
              onMouseEnter = {()=>mouseenter()}
              onMouseLeave = {()=>mouseleave()}
            >
              <div className={styles.title}>
                <div>热门搜索</div>
                <div className={styles.switch}
                  onClick = {()=>{changePage(page,totalPage);handdleRotate()}}
                >
                  <i ref= 'spin' className = {`iconfont `}>&#xe851;</i>
                  换一批
                </div>
              </div>
              <div>
                {pageList}
              </div>
            </div> : ''}
          </div>
        </div>

        <div className={styles.addition}>
          <button className = {styles.reg}
            onClick={()=>history.push('/sign_up')}
          >注册</button>
          <button className = {styles.write}
            onClick={()=>history.push('/write')}
          >
            <i className = 'iconfont iconpen'></i>
            写文章
          </button>
        </div>

      </header>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    header : state.header,
    signInReducer:state.signInReducer
  }
}

export default connect(mapStateToProps,{...actions,loginout})(withRouter(Header))
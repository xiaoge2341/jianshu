import React, { Component } from 'react'
import styles from './style.module.scss'
import Topic from './components/Topic'
import List from './components/List'
import Recommon from './components/Recommon'
import Writer from './components/Writer'
import {connect} from 'react-redux'

 class home extends Component {
  render() {
    return (
      <div>
        <div className={styles.home}>
          <div className={styles.homeleft}>
            <img src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className={styles.banner_img} alt=""/>

            <Topic />
            <List />
          </div>
          <div className={styles.homeRight}>
            <Recommon />
            <Writer />
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {

  }
}

const mapState = (state) => {
  console.log(state)
  return {
    topic:state
  }
}
export default connect()(home)
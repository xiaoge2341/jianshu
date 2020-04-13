import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import styles from './style.module.scss'
import Topic from './components/Topic'
import List from './components/List'
import Recommon from './components/Recommon'
import Writer from './components/Writer'
import 'animate.css'
import {backtop} from './store/actions'

 class home extends PureComponent {
  constructor() {
    super();
    this.handdleScrollTop = this.handdleScrollTop.bind(this)
    this.handdleScroll = this.handdleScroll.bind(this)
  }
  handdleScrollTop() {
    window.scrollTo(0,0)
    
  }
  handdleScroll() {
    window.scrollY > 200 ? 
      this.props.backtop(true):
      this.props.backtop(false)
  }
  render() {
    let {handdleScrollTop} = this
    let backTopShow = this.props.homeReducer.get('backTopShow')
    // console.log(backTopShow)
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

          {backTopShow ? <div className={styles.backTop}
            onClick={handdleScrollTop}
            ref='backTop'
          >
            回顶部
          </div>:''}
        </div>
      </div>
    )
  }
  UNSAFE_componentWillMount() {
    window.addEventListener('scroll',this.handdleScroll,true)
  }
}

const mapState = (state) => {
  return {
    homeReducer:state.homeReducer
  }
}

export default connect(mapState,{backtop})(home) 
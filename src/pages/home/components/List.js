import React, { PureComponent } from 'react'
import styles from './../style.module.scss'
import {connect} from 'react-redux'
import {fetchList,fetchMoreList} from './../store/actions'
// console.log(Component)
class List extends PureComponent {
  
  render() {
    let {homeList,homeListPage} = this.props.homeReducer.toJS()
    // console.log(homeList&&moreList ? homeList.concat(moreList&&moreList.data):homeList)
    
    const listData = homeList && homeList
    // console.log(homeListPage)
    return (
      <div>
        <ul className={styles.note_list}>
          {
            listData.map((value,index) => {
              return (
                <li key={index}>
                  <div className={styles.content}>
                    <a href="script:;" className={styles.title}>{value.title}</a>
                    <p className={styles.abstract}>
                      {value.content}
                    </p>
                    <div className={styles.meta}>
                      <span className={styles.jsd_meta}>
                        <i className='iconfont'>&#xe609;</i>
                        50.8
                      </span>
                      <a href="script:;" className={styles.nickname}>
                        {value.WriterName}
                      </a>
                      <a href="script:;">
                        <i className='iconfont'>&#xe66d;</i>
                        {value.commentNum}
                      </a>
                      <span>
                        <i className='iconfont'>&#xe66e;</i>
                        {value.like}
                      </span>
                      <span>
                        <i>赏</i>
                        {value.money}
                      </span>
                    </div>
                  </div>
                  
                  <a href="script:;" className={styles.wrap_img}>
                    {/* 234 */}
                    <img src={value.imgUrl} alt=""/>
                  </a>
                </li>
              )
            })
          }
          

        </ul>
        <div className={styles.more}
          onClick={()=>this.props.fetchMoreList(homeListPage)}
        >
          阅读更多
        </div>
      </div>
    )
  }
  componentDidMount(){
    // console.log(this.props)
    this.props.fetchList()
  }
}

const mapState = (state) => {
  // console.log(state.homeReducer.toJS())
  return {
    homeReducer:state.homeReducer
  }
}

export default connect(mapState,{fetchList,fetchMoreList})(List)
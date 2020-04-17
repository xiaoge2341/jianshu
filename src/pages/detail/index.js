import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import styles from './style.module.scss'
import Content from './components/content'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {fetchDetail} from './store/action'
 class detail extends Component {
  render() {
    let {detailReducer,match} = this.props
    let {detailWriter} = detailReducer
    
    let detailData=detailWriter && detailWriter.filter(value=>value.writerId===match.params.writerId-0)
    
    return (
      <div className={styles.bg}>
        <div className={styles.detail}>
          <section className={styles.left}>
            <Content detailData={detailData}/>

          </section>
          <aside className={styles.aside}>
            <Writer detailData={detailData}/>
            <Recommend></Recommend>
          </aside>
        </div>
      </div>
      
    )
  }
  componentDidMount() {
    let {fetchDetail,match} = this.props
    fetchDetail(match.params.writerId)
  }
}

const mapState = (state) => {
  // console.log('detailReducer state', state)
  return {
    detailReducer : state.detailReducer
  }
}

export default connect(mapState,{fetchDetail})(withRouter(detail))

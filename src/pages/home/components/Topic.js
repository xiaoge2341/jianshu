import React, { PureComponent } from 'react'
import styles from './../style.module.scss'
import img1 from './../img/1.jpg'
import {connect} from 'react-redux'
import {fetctTopic} from './../store/actions'
 class Topic extends PureComponent {

  render() {
    let {topic} = this.props.homeReducer.toJS()
    // console.log(topic)
    return (
      <div>
        <div className={styles.topic}>
          <div className={styles.topic_item}>
            <img src={img1} alt=""/>
            社会热点
          </div>
          {
            topic && topic.map((value,index) => {
              return (
                <div className={styles.topic_item} key={index}>
                  <img src={value.imgUrl} alt=""/>
                  {value.title}
                </div>
              )
            })
          }
          <div className={styles.more}>更多热门专题 &gt;</div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    // console.log(this.props)
    this.props.fetctTopic()
  }
}


const mapState = (state) => {
  // console.log(state.homeReducer.)
  return {
    homeReducer:state.homeReducer
  }
}
export default connect(mapState,{fetctTopic})(Topic)
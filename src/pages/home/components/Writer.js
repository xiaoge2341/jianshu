import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styles from './../style.module.scss'
import {fetchWriter} from './../store/actions'
class Writer extends PureComponent {
  render() {
    // console.log(this.props)
    // console.log(this.props.homeReducer.toJS())
    let writer = this.props.homeReducer.get('writer')
    // console.log(writer)
    return (
      <div>
        <ul className={styles.writer}>
          <p className={styles.title}>
            <span >推荐作者</span>
            <span className={styles.change}><i className='iconfont'>&#xe851;</i>换一批</span>
          </p>
          {
            writer && writer.map((value,index) => {
              return (
                <li key={index}>
                  <a href="script:;" className={styles.avator}>
                    <img src={value.writerFace} alt=""/>
                  </a>

                  <a href="script:;" className={styles.follow}>+关注</a>
                  <a href="script:;" className={styles.name}>{value.writerName}</a>
                  <p>写了{value.writeNum>1000 ? value.writeNum/1000+'k': 'value.writeNum'}字 · {value.like}喜欢</p>
                </li>
              )
              
            })
          }

        </ul>
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchWriter()
  }
}

const mapState = (state) => {
  return {
    homeReducer: state.homeReducer
  }
}
export default connect(mapState,{fetchWriter})(Writer)
import React from 'react'
import styles from  './../style.module.scss'
 function content(props) {
  // console.log(props.detailData)
  let {detailData} = props

  return (
    <div>
      {
        detailData&&detailData.map(value=> {
          return (
            <div key={value.writerId}>
            <h1>{value.title}</h1>
            <div className={styles.writerMessage}>
              <img src={value.imgUrl} alt=""/>
              <div className={styles.message}>
                <div className={styles.writer}>
                  <span className={styles.name}>{value.WriterName}</span>
                  <i></i>
                  <span className={styles.attention}>关注</span>
                </div>
                <div className={styles.article}>
                  <i className='iconfont'>&#xe609;46</i>
                  <span className={styles.date}>2020.03.18 22:59:51</span>
                  <span className={styles.writeNum}>字数: {419}</span>
                  <span className={styles.readNum}>阅读: {value.like}</span>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <p>{value.content}</p>
              <img src="//upload-images.jianshu.io/upload_images/15022566-23a6afed5c9b625a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/320/format/webp" alt=""/>
              <p>{value.content}</p>

              <div className={styles.zan}>
                <span>{value.like} 人点赞</span>
                <span>飞鸿情歌简书作品集</span>
              </div>
            </div>
            </div>
          )
        })
      }
      
    </div>
  )
}
export default content
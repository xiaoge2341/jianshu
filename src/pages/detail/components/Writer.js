import React, { Component } from 'react';
import styles from './../style.module.scss'
class Writer extends Component {
  render() {
    // console.log(this.props.detailData)
    let {detailData} = this.props
    // console.log(detailData)
    return (
      <section className={styles.writerArticle}>
        {
          detailData && detailData.map(value => {
            return (
              <div key={value.writerId}>
              <div className={styles.writerMessage}>
                <img src={value.imgUrl} alt=""/>
                <div className={styles.message}>
                  <div className={styles.writer}>
                    <span className={styles.name}>{value.WriterName}</span>
                    <i></i>
                    <span className={styles.attention}>关注</span>
                  </div>
                  <div className={styles.article}>
                    <p>总资产3563 (约271.40元)</p>
                  </div>
                </div>
                <hr/>
              </div>

              <div className={styles.product}>
                <p className={styles.title}>花的心事</p>
                <p className={styles.read}>阅读904</p>
              </div>
              <div className={styles.product}>
                <p className={styles.title}>买断</p>
                <p className={styles.read}>阅读904</p>
              </div>
              <div className={styles.product}>
                <p className={styles.title}>网购需谨慎</p>
                <p className={styles.read}>阅读904</p>
              </div>
              </div>
            )
          })
        }
        
      </section>
    );
  }
}

export default Writer;

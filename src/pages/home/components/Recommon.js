import React, { PureComponent } from 'react'
import styles from './../style.module.scss'
export default class Recommon extends PureComponent {
  render() {
    return (
      <div className={styles.recommon}>
        <a href="script:;"><img src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/></a>
        <a href="script:;"><img src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/></a>
        <a href="script:;"><img src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/></a>
        <a href="script:;"><img src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/></a>

        <div className={styles.download}>
          <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <div>
            <span className={styles.title}>下载简书手机APP ></span>
            <span className={styles.description}>随时随地发现和创作内容</span>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import styles from './../style.module.scss'

class Recommend extends Component {
  render() {
    return (
      <section className={styles.recommend}>
        <h3 className={styles.recommendRead}>
          推荐阅读
        </h3>
        <div className={styles.product}>
          <p className={styles.title}>有个同性恋老婆</p>
          <p className={styles.read}>阅读 49373</p>
        </div>
        <div className={styles.product}>
          <p className={styles.title}>健身，什么时候成了软色情？</p>
          <p className={styles.read}>阅读 24,743</p>
        </div>
        <div className={styles.product}>
          <p className={styles.title}>李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”</p>
          <p className={styles.read}>阅读 183,596</p>
        </div>
      </section>
    );
  }
}

export default Recommend;

import React from "react";
import classnames from "classnames";

import styles from "./AsideUser.module.scss";

export default function AsideUser() {
  return (
    <div className={styles.user}>
      <picture>
        <source
          media="(max-width: 500px)"
          srcSet="http://images.luohuidong.cn/profile.jpeg?imageMogr2/thumbnail/!7p"
        />
        <img
          src="http://images.luohuidong.cn/profile.jpeg?imageMogr2/thumbnail/!13p"
          alt="头像"
          className={classnames(styles.userAvatar)}
          draggable={false}
        />
      </picture>
      <div className={styles.userInfo}>
        <div className={styles.username}>罗惠东</div>
        <div className={styles.userDescription}>前端开发工程师</div>
      </div>
    </div>
  );
}

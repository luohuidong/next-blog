import React from "react";

import styles from "./index.module.scss";

export default function IconButton(props: { src: string; title: string }) {
  return (
    <div className={styles.container}>
      <img
        src={props.src}
        alt={props.title}
        title={props.title}
        draggable={false}
      />
    </div>
  );
}

import React from "react";

import styles from "./index.module.scss";

export default function GoHomeButton() {
  return (
    <div className={styles.container}>
      <img
        src="/icons/home.svg"
        alt="Go Home"
        title="Go Home"
        draggable={false}
      />
    </div>
  );
}

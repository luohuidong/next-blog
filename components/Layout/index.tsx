import React from "react";

import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return <div className={styles.container}>{props.children}</div>;
}
